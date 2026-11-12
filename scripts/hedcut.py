"""Turn a portrait photo into a WSJ-style stipple ("hedcut") portrait.

Writes:
  public/portrait/hedcut.json  dots for the animated canvas on the About page
  public/portrait/hedcut.png   a still version (fallback, and for sharing)

Usage:
  python3 scripts/hedcut.py photo.jpg --crop X Y SIZE [--dots 7500]

  --crop: the square to keep, in the photo's pixels (left, top, side length).
Method: weighted Voronoi stippling (Secord 2002). Dots settle where the photo is
dark, then grow with local darkness. Needs numpy, scipy, Pillow.
"""
import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps
from scipy.spatial import cKDTree
from scipy.ndimage import gaussian_filter

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "public" / "portrait"
S = 900  # working resolution


def density_map(path, crop):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    x, y, side = crop
    im = im.crop((x, y, x + side, y + side)).resize((S, S), Image.LANCZOS)
    rgb = np.asarray(im).astype(float) / 255

    # Plain light background -> blank paper. Wall is light and low-saturation.
    mx, mn = rgb.max(2), rgb.min(2)
    light, sat = mx, (mx - mn) / np.maximum(mx, 1e-6)
    bg = (light > 0.78) & (sat < 0.2)
    bg = gaussian_filter(bg.astype(float), 3) > 0.5
    # Keep only background connected to the image border (so highlights on skin survive).
    from scipy.ndimage import label
    lab, _ = label(bg)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(edge))
    bgsoft = gaussian_filter(bg.astype(float), 2.5)

    # Blend in the blue channel: warm tones (beard, lips) read darker than skin.
    lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
    mixed = 0.4 * lum + 0.6 * rgb[..., 2]
    lo, hi = np.percentile(mixed[~bg], [1, 99]) if (~bg).any() else (0, 1)
    gray = np.clip((mixed - lo) / max(hi - lo, 1e-6), 0, 1)
    # Local contrast so features (eyes, glasses, beard) read clearly.
    blur = gaussian_filter(gray, 18)
    gray = np.clip(gray + 1.1 * (gray - blur), 0, 1)
    d = (1 - gray) ** 1.7
    d = np.minimum(d, 0.82)          # very dark clothing: dense, not solid
    d = d * (1 - bgsoft)             # paper stays blank
    d[d < 0.04] = 0
    return d


def stipple(d, n, iters=30, seed=7):
    rng = np.random.default_rng(seed)
    h, w = d.shape
    flat = d.ravel() / d.sum()
    idx = rng.choice(h * w, size=n, replace=False, p=flat)
    pts = np.column_stack([idx % w, idx // w]).astype(float) + rng.random((n, 2))
    ys, xs = np.mgrid[0:h, 0:w]
    mask = d.ravel() > 0
    pix = np.column_stack([xs.ravel()[mask], ys.ravel()[mask]]).astype(float) + 0.5
    wts = d.ravel()[mask]
    for _ in range(iters):
        _, owner = cKDTree(pts).query(pix, workers=-1)
        sw = np.bincount(owner, wts, n)
        cx = np.bincount(owner, wts * pix[:, 0], n)
        cy = np.bincount(owner, wts * pix[:, 1], n)
        ok = sw > 0
        pts[ok] = np.column_stack([cx[ok] / sw[ok], cy[ok] / sw[ok]])
    return pts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("photo")
    ap.add_argument("--crop", nargs=3, type=int, required=True)
    ap.add_argument("--dots", type=int, default=7500)
    ap.add_argument("--preview", default="")
    a = ap.parse_args()

    d = density_map(a.photo, a.crop)
    pts = stipple(d, a.dots)
    ds = gaussian_filter(d, 1.5)
    xi = np.clip(pts[:, 0].astype(int), 0, S - 1)
    yi = np.clip(pts[:, 1].astype(int), 0, S - 1)
    r = 0.45 + 1.95 * np.clip(ds[yi, xi] / 0.82, 0, 1) ** 0.8

    # Animation order: bloom outward from the face, with a little randomness.
    cx, cy = S * 0.5, S * 0.45
    dist = np.hypot(pts[:, 0] - cx, pts[:, 1] - cy) + np.random.default_rng(3).random(len(pts)) * 60
    order = np.argsort(dist)
    data = [[round(float(pts[i, 0]), 1), round(float(pts[i, 1]), 1), round(float(r[i]), 2)] for i in order]

    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "hedcut.json").write_text(json.dumps({"size": S, "dots": data}, separators=(",", ":")))

    # Still image, rendered 2x then reduced for smooth dots.
    k = 2
    img = Image.new("RGBA", (S * k, S * k), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    for x, y, rr in data:
        dr.ellipse([(x - rr) * k, (y - rr) * k, (x + rr) * k, (y + rr) * k], fill=(20, 22, 27, 255))
    img = img.resize((S, S), Image.LANCZOS)
    img.save(OUT / "hedcut.png", optimize=True)
    if a.preview:
        bgc = Image.new("RGBA", img.size, (245, 243, 238, 255))
        bgc.alpha_composite(img)
        bgc.convert("RGB").save(a.preview)
    print(f"{len(data)} dots -> {OUT.relative_to(REPO)}/hedcut.json, hedcut.png")


if __name__ == "__main__":
    main()
