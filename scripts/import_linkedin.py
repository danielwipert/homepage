"""Import Dan's LinkedIn writing into the site.

Reads a LinkedIn data export (the .zip, or the folder you unzipped it into) and
writes one Markdown file per post or article into src/content/posts/, all with
`published: false`. Nothing goes live until a post is reviewed and flipped to
`published: true`.

Usage (from the repo folder):
    python3 scripts/import_linkedin.py path/to/Basic_LinkedInDataExport.zip

Also writes scripts/import_review.csv: one row per imported item, to review.
Safe to run again: anything already imported (same LinkedIn link) is skipped.

Standard library only. Python 3.10+.
"""

from __future__ import annotations

import csv
import html
import io
import re
import sys
import zipfile
from dataclasses import dataclass
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
POSTS_DIR = REPO / "src" / "content" / "posts"
REVIEW_CSV = REPO / "scripts" / "import_review.csv"

csv.field_size_limit(10_000_000)


@dataclass
class Item:
    kind: str          # "linkedin-post" or "linkedin-article"
    date: str          # YYYY-MM-DD
    title: str
    body_md: str
    source_url: str


# ---------------------------------------------------------------- reading the export

class Export:
    """Reads files from either a zip or a folder, matching by file name."""

    def __init__(self, path: Path):
        self.path = path
        self.zip = zipfile.ZipFile(path) if path.suffix.lower() == ".zip" else None

    def names(self) -> list[str]:
        if self.zip:
            return [n for n in self.zip.namelist() if not n.endswith("/")]
        return [str(p.relative_to(self.path)) for p in self.path.rglob("*") if p.is_file()]

    def read(self, name: str) -> str:
        raw = self.zip.read(name) if self.zip else (self.path / name).read_bytes()
        return raw.decode("utf-8-sig", errors="replace")


def read_posts(ex: Export) -> list[Item]:
    """Posts live in Shares.csv: Date, ShareLink, ShareCommentary, SharedUrl, MediaUrl, Visibility."""
    items: list[Item] = []
    for name in ex.names():
        if Path(name).name.lower() != "shares.csv":
            continue
        rows = csv.DictReader(io.StringIO(ex.read(name)))
        for row in rows:
            text = (row.get("ShareCommentary") or "").strip()
            link = (row.get("ShareLink") or "").strip()
            if not text:
                continue  # a repost with no words of Dan's own
            text = clean_post_text(text)
            if len(text) < 40:
                continue  # too short to be a piece of writing
            items.append(Item(
                kind="linkedin-post",
                date=parse_date(row.get("Date", "")),
                title=auto_title(text),
                body_md=text_to_md(text),
                source_url=link,
            ))
    return items


def read_articles(ex: Export) -> list[Item]:
    """Articles are HTML files, usually under Articles/Articles/."""
    items: list[Item] = []
    for name in ex.names():
        if not name.lower().endswith(".html") or "article" not in name.lower():
            continue
        doc = ex.read(name)
        title_m = re.search(r"<h1[^>]*>(.*?)</h1>", doc, re.S | re.I)
        title = strip_tags(title_m.group(1)) if title_m else Path(name).stem.replace("-", " ")
        date = ""
        for label in ("published", "created"):
            m = re.search(rf'class="{label}"[^>]*>(.*?)<', doc, re.S | re.I)
            if m:
                date = parse_date(m.group(1))
                break
        if not date:
            m = re.search(r"(\d{4}-\d{2}-\d{2})", Path(name).name)
            date = m.group(1) if m else datetime.now().strftime("%Y-%m-%d")
        body_html = doc.split("</h1>", 1)[-1] if title_m else doc
        body_html = re.sub(r'<p class="(created|published)".*?</p>', "", body_html, flags=re.S | re.I)
        link_m = re.search(r'href="(https://www\.linkedin\.com/pulse/[^"]+)"', doc)
        items.append(Item(
            kind="linkedin-article",
            date=date,
            title=title.strip(),
            body_md=HtmlToMd.convert(body_html),
            source_url=link_m.group(1) if link_m else "",
        ))
    return items


# ---------------------------------------------------------------- text helpers

def parse_date(s: str) -> str:
    s = (s or "").strip()
    s = re.sub(r"^(Published|Created) on\s*", "", s, flags=re.I)
    formats = ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M", "%Y-%m-%d", "%m/%d/%Y %H:%M", "%m/%d/%Y", "%m/%d/%y, %I:%M %p", "%b %d, %Y", "%B %d, %Y")
    for candidate in (s, s[:19], s[:16], s[:10]):
        for fmt in formats:
            try:
                return datetime.strptime(candidate.strip(), fmt).strftime("%Y-%m-%d")
            except ValueError:
                continue
    m = re.search(r"(\d{4})-(\d{2})-(\d{2})", s)
    return m.group(0) if m else datetime.now().strftime("%Y-%m-%d")


def clean_post_text(text: str) -> str:
    text = text.replace('""', '"').replace("\r\n", "\n").replace("\r", "\n")
    # LinkedIn exports mentions/hashtags in a few odd forms; normalize the common ones.
    text = re.sub(r"hashtag#(\w+)", r"#\1", text)
    text = re.sub(r"\{hashtag\|\\?#\|(\w+)\}", r"#\1", text)
    lines = [ln.rstrip() for ln in text.split("\n")]
    # Drop a trailing block that is only hashtags.
    while lines and (not lines[-1].strip() or re.fullmatch(r"(#\w+\s*)+", lines[-1].strip())):
        lines.pop()
    return "\n".join(lines).strip()


def auto_title(text: str) -> str:
    first = re.split(r"(?<=[.!?])\s|\n", text.strip(), maxsplit=1)[0].strip()
    first = re.sub(r"[#*_]", "", first)
    if len(first) > 80:
        first = first[:77].rsplit(" ", 1)[0] + "..."
    if not first.endswith("..."):
        first = first.rstrip(".:")
    return first or "Untitled post"


def text_to_md(text: str) -> str:
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    out = []
    for p in paras:
        lines = p.split("\n")
        # Lines starting with a bullet-like mark become a Markdown list.
        if all(re.match(r"^\s*([-•▪→✅➡️*]|\d+[.)])\s+", ln) for ln in lines):
            out.append("\n".join(re.sub(r"^\s*([-•▪→✅➡️*]|\d+[.)])\s+", "- ", ln) for ln in lines))
        else:
            out.append("  \n".join(lines))
    return "\n\n".join(out)


def strip_tags(s: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def excerpt_of(md: str, n: int = 180) -> str:
    plain = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", md)
    plain = re.sub(r"[#*_>]", "", plain).replace("\n", " ")
    plain = re.sub(r"(^|\s)- ", r"\1", plain)
    plain = re.sub(r"\s+", " ", plain).strip()
    if len(plain) <= n:
        return plain
    return plain[: n - 3].rsplit(" ", 1)[0] + "..."


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:60].rstrip("-") or "post"


def yaml_str(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


class HtmlToMd(HTMLParser):
    """Small HTML-to-Markdown converter for LinkedIn articles."""

    def __init__(self):
        super().__init__()
        self.out: list[str] = []
        self.href: list[str] = []
        self.list_stack: list[str] = []

    @classmethod
    def convert(cls, html_text: str) -> str:
        p = cls()
        p.feed(html_text)
        md = "".join(p.out)
        md = re.sub(r"[ \t]+\n", "\n", md)
        md = re.sub(r"\n{3,}", "\n\n", md)
        return md.strip()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("p", "div"):
            self.out.append("\n\n")
        elif tag in ("h1", "h2", "h3"):
            self.out.append("\n\n## " if tag != "h3" else "\n\n### ")
        elif tag == "br":
            self.out.append("  \n")
        elif tag in ("strong", "b"):
            self.out.append("**")
        elif tag in ("em", "i"):
            self.out.append("*")
        elif tag in ("ul", "ol"):
            self.list_stack.append(tag)
            self.out.append("\n")
        elif tag == "li":
            self.out.append("\n- " if not self.list_stack or self.list_stack[-1] == "ul" else "\n1. ")
        elif tag == "blockquote":
            self.out.append("\n\n> ")
        elif tag == "a":
            self.href.append(a.get("href", ""))
            self.out.append("[")
        elif tag == "img":
            alt = a.get("alt", "")
            if alt:
                self.out.append(f"\n\n*[Image: {alt}]*\n\n")

    def handle_endtag(self, tag):
        if tag in ("p", "div", "h1", "h2", "h3", "blockquote"):
            self.out.append("\n\n")
        elif tag in ("strong", "b"):
            self.out.append("**")
        elif tag in ("em", "i"):
            self.out.append("*")
        elif tag in ("ul", "ol"):
            if self.list_stack:
                self.list_stack.pop()
            self.out.append("\n\n")
        elif tag == "a":
            href = self.href.pop() if self.href else ""
            self.out.append(f"]({href})" if href else "]")

    def handle_data(self, data):
        self.out.append(re.sub(r"\s+", " ", data))


# ---------------------------------------------------------------- writing files

def existing_sources() -> set[str]:
    seen = set()
    for f in POSTS_DIR.glob("*.md"):
        m = re.search(r'^sourceUrl:\s*"?([^"\n]+)"?', f.read_text(encoding="utf-8"), re.M)
        if m:
            seen.add(m.group(1).strip())
    return seen


def write_item(item: Item) -> Path:
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    base = f"{item.date}-{slugify(item.title)}"
    path = POSTS_DIR / f"{base}.md"
    n = 2
    while path.exists():
        path = POSTS_DIR / f"{base}-{n}.md"
        n += 1
    front = [
        "---",
        f"title: {yaml_str(item.title)}",
        f"date: {item.date}",
        "topics: []",
        f"excerpt: {yaml_str(excerpt_of(item.body_md))}",
        f"source: {item.kind}",
    ]
    if item.source_url:
        front.append(f"sourceUrl: {yaml_str(item.source_url)}")
    front += ["published: false", "---", ""]
    path.write_text("\n".join(front) + item.body_md + "\n", encoding="utf-8")
    return path


def main() -> None:
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    src = Path(sys.argv[1]).expanduser().resolve()
    if not src.exists():
        sys.exit(f"Can't find {src}")
    ex = Export(src)
    items = read_posts(ex) + read_articles(ex)
    items.sort(key=lambda i: i.date)
    seen = existing_sources()

    rows, written, skipped = [], 0, 0
    for item in items:
        key = f"{item.date}-{slugify(item.title)}"
        if (item.source_url and item.source_url in seen) or (POSTS_DIR / f"{key}.md").exists():
            skipped += 1
            continue
        path = write_item(item)
        written += 1
        rows.append({
            "file": path.name,
            "date": item.date,
            "kind": item.kind,
            "title": item.title,
            "words": len(item.body_md.split()),
            "keep (y/n)": "",
            "topics": "",
            "featured (1-6)": "",
            "source": item.source_url,
        })

    if rows:
        with REVIEW_CSV.open("w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
            w.writeheader()
            w.writerows(rows)
    print(f"Imported {written} new items ({skipped} already imported). Review list: {REVIEW_CSV.relative_to(REPO)}")


if __name__ == "__main__":
    main()
