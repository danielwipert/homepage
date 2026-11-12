"""Refresh the homepage's live numbers from Dan's two weekly trackers.

Reads the latest published data from local copies of:
  - danielwipert/openrouter.chart      (output/<week>/weekly.csv)
  - danielwipert/city.economic.health  (calculated_metrics_reconciled.json)
and writes src/data/live.json. The site reads that file at build time.

Usage:
    python3 scripts/refresh_live.py <path to openrouter.chart> <path to city.economic.health>

Run every Monday by .github/workflows/refresh-live.yml. If either source can't be
read, its previous values in live.json are kept (and the run says so), so a bad week
never blanks the homepage. Standard library only.
"""

from __future__ import annotations

import csv
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "src" / "data" / "live.json"

SHORT = {
    "Salt Lake City": "SLC", "New York": "NYC", "Los Angeles": "LA", "San Francisco": "SF",
    "Washington": "DC", "Las Vegas": "LV", "San Diego": "SD", "San Antonio": "SA", "San Jose": "SJ",
    "Kansas City": "KC", "Oklahoma City": "OKC", "St. Louis": "STL", "Virginia Beach": "VB",
    "Grand Rapids": "GR", "Minneapolis": "MSP", "Philadelphia": "PHL", "Indianapolis": "IND",
    "Jacksonville": "JAX", "Sacramento": "SAC", "Providence": "PVD", "Cincinnati": "CIN",
    "Pittsburgh": "PIT", "Milwaukee": "MKE", "Nashville": "NASH", "Charlotte": "CLT",
    "Riverside": "RIV", "Louisville": "LOU", "Birmingham": "BHM", "Baltimore": "BAL",
    "Cleveland": "CLE", "Columbus": "COL", "Hartford": "HFD", "Richmond": "RVA",
}


def short_name(city: str) -> str:
    if city in SHORT:
        return SHORT[city]
    return city.upper() if len(city) <= 7 else "".join(w[0] for w in city.split()).upper()


def read_openrouter(root: Path) -> dict:
    weeks = sorted(p for p in (root / "output").iterdir() if p.is_dir() and p.name[:4].isdigit())
    if not weeks:
        raise ValueError("no output weeks found")
    latest = weeks[-1]
    lines = [ln for ln in (latest / "weekly.csv").read_text(encoding="utf-8").splitlines() if not ln.startswith("#")]
    rows = list(csv.DictReader(lines))
    # Only complete weeks; the newest complete one.
    done = [r for r in rows if r["partial"] == "False"]
    last = max(r["period"] for r in done)
    week = [r for r in done if r["period"] == last]
    open_share = next(float(r["share"]) for r in week if r["dimension"] == "weights" and r["value"] == "open")
    labs = sorted((r for r in week if r["dimension"] == "company" and r["share"]), key=lambda r: -float(r["share"]))
    top = labs[0]
    return {
        "dataWeek": latest.name,
        "weekLabel": week[0]["label"],
        "openShare": round(open_share, 4),
        "topLab": {"name": top["value"], "share": round(float(top["share"]), 4)},
    }


def read_metro(root: Path) -> dict:
    d = json.loads((root / "calculated_metrics_reconciled.json").read_text(encoding="utf-8"))
    metros = sorted(d["metros"], key=lambda m: -m["weighted_percentile"])
    top, bottom = metros[0], metros[-3:]
    return {
        "asOf": str(d.get("calculation_date", ""))[:10],
        "count": len(metros),
        "top": {"city": top["primary_city"], "short": short_name(top["primary_city"]),
                "score": top["weighted_score"], "grade": top["grade"]["letter"]},
        "bottom": [m["primary_city"] for m in reversed(bottom)],
    }


def main() -> None:
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    old = json.loads(OUT.read_text()) if OUT.exists() else {}
    new = dict(old)
    problems = []
    for key, fn, path in (("openrouter", read_openrouter, sys.argv[1]), ("metro", read_metro, sys.argv[2])):
        try:
            new[key] = fn(Path(path))
        except Exception as e:  # keep last week's numbers rather than break the site
            problems.append(f"{key}: {e}")
    if new != old:
        new["refreshedAt"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
        OUT.write_text(json.dumps(new, indent=2) + "\n", encoding="utf-8")
        print("Updated", OUT.relative_to(REPO))
    else:
        print("No change")
    for p in problems:
        print("KEPT PREVIOUS VALUES ->", p)


if __name__ == "__main__":
    main()
