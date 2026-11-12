"""Turn a portrait photo into a line-engraved portrait (WSJ hedcut style).

Writes public/portrait/engraving.png (dark ink on transparent, 1600 px square).

Usage:
  python3 scripts/engrave.py photo.jpg --crop X Y SIZE [--preview out.png]

Method: flatter the photo (smooth skin, lift shadows, keep edges), then draw
variable-width line patterns. Lines bend with the face (displaced by blurred
tone), get thicker where the photo is darker, and extra crosshatch layers appear
only in dark areas. Needs numpy, scipy, Pillow.
"""
import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageOps
from scipy.ndimage import gaussian_filter, label

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "public" / "portrait"
S = 1600


def tone(path, crop, gamma=0.62, texture=0.38):
    src = ImageOps.exif_transpose(Image.open(path))
    x, y, side = crop
    src = src.crop((x, y, x + side, y + side)).resize((S, S), Image.LANCZOS)
    im = src.convert("RGB")
    rgb = np.asarray(im).astype(float) / 255

    if "A" in src.getbands():
        # A cut-out (transparent background): keep the largest solid shape as the person.
        fg = np.asarray(src.getchannel("A")).astype(float) / 255 > 0.5
        lab, n = label(fg)
        if n > 1:
            sizes = np.bincount(lab.ravel())[1:]
            fg = lab == (1 + int(np.argmax(sizes)))
        bg = ~fg
    else:
        # Plain light wall: light, low-saturation, connected to the border -> paper.
        mx, mn = rgb.max(2), rgb.min(2)
        bg = (mx > 0.78) & ((mx - mn) / np.maximum(mx, 1e-6) < 0.2)
        bg = gaussian_filter(bg.astype(float), 4) > 0.5
        lab, _ = label(bg)
        edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
        bg = np.isin(lab, list(edge))
    bgsoft = gaussian_filter(bg.astype(float), 3)

    # Warm tones (beard) read a bit darker than skin, like an engraver would draw them.
    lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
    g = 0.4 * lum + 0.6 * rgb[..., 2]
    lo, hi = np.percentile(g[~bg], [1.5, 99.5])
    g = np.clip((g - lo) / (hi - lo), 0, 1)

    # Flatter: smooth skin texture but keep strong edges (glasses, beard line, hat).
    smooth = gaussian_filter(g, 6)
    edges = np.hypot(*np.gradient(gaussian_filter(g, 1.5)))
    keep = np.clip(edges / np.percentile(edges, 92), 0, 1)
    g = keep * g + (1 - keep) * smooth
    # Lift shadows and midtones (brighter face, softer under-eyes and neck).
    g = g ** gamma
    # Gentle local contrast so features stay crisp.
    g = np.clip(g + 0.6 * (g - gaussian_filter(g, 40)), 0, 1)
    d = 1 - g                          # darkness 0..1
    # Texture (beard, hair) reads as tone: smooth skin stays light, whiskers get lines.
    hf = np.abs(lum - gaussian_filter(lum, 2.0))
    tex = gaussian_filter(hf, 4)
    tex = np.clip(tex / np.percentile(tex[~bg], 97), 0, 1)
    d = np.clip(d + texture * tex, 0, 1)
    # Even out blotchy skin a little more in low-texture areas.
    d = np.where(tex < 0.25, gaussian_filter(d, 3), d)
    d = d * (1 - bgsoft)
    # Fade the shoulders into the paper (classic hedcut vignette, no hard crop line).
    ys = np.arange(S)[:, None] / S
    fg_rows = np.where((1 - bgsoft).max(1) > 0.5)[0]
    bottom = (fg_rows.max() / S) if len(fg_rows) else 1.0
    start = bottom - 0.11
    fade = np.clip((bottom - ys) / max(bottom - start, 1e-6), 0, 1) ** 0.8
    fade = np.where(ys < start, 1.0, fade)
    d = d * fade
    return d


def layer(d, angle_deg, period, start, width_gain, warp):
    """One set of parallel lines. Ink where darkness exceeds `start`."""
    h, w = d.shape
    ys, xs = np.mgrid[0:h, 0:w].astype(float)
    a = np.deg2rad(angle_deg)
    v = xs * np.sin(a) - ys * np.cos(a)
    v = v + warp                                       # bend lines with the form
    phase = np.abs(((v / period) % 1.0) - 0.5) * 2     # 0 at line center, 1 midway
    strength = np.clip((d - start) / (1 - start), 0, 1)
    half = np.clip(strength * width_gain, 0, 0.95)     # half-width as fraction of spacing
    aa = 1.6 / period                                  # antialias band
    cov = np.clip((half - phase) / aa + 0.5, 0, 1)
    return cov * np.clip(half * period / 0.9, 0, 1)   # no hairlines where there's no tone


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("photo")
    ap.add_argument("--crop", nargs=3, type=int, required=True)
    ap.add_argument("--preview", default="")
    ap.add_argument("--gamma", type=float, default=0.62, help="lower = brighter face")
    ap.add_argument("--texture", type=float, default=0.38, help="how much beard/hair texture adds tone")
    a = ap.parse_args()

    d = tone(a.photo, a.crop, a.gamma, a.texture)
    # Warp field: lines ride over the face like contour lines.
    warp = gaussian_filter(d, 28) * 46
    ink = np.maximum.reduce([
        layer(d, 8, 8.0, 0.14, 0.85, warp),        # main lines, nearly horizontal
        layer(d, 62, 8.0, 0.48, 0.7, warp * .6),  # crosshatch in shadows
        layer(d, -48, 8.0, 0.70, 0.6, warp * .4), # deepest shadows
    ])
    # Fine stipple in the lightest tones so skin isn't blank.
    rng = np.random.default_rng(5)
    light = (d > 0.03) & (d < 0.12) & (gaussian_filter(d, 12) > 0.08)
    dots = (rng.random(d.shape) < d * 0.08) & light
    ink = np.maximum(ink, gaussian_filter(dots.astype(float), 0.7) * 2.2)
    ink = np.clip(ink, 0, 1)
    ink[gaussian_filter(d, 8) < 0.025] = 0          # no stray specks at the fade edge

    OUT.mkdir(parents=True, exist_ok=True)
    alpha = (ink * 255).astype(np.uint8)
    rgba = np.zeros((S, S, 4), np.uint8)
    rgba[..., 0], rgba[..., 1], rgba[..., 2] = 20, 22, 27
    rgba[..., 3] = alpha
    Image.fromarray(rgba).save(OUT / "engraving.png", optimize=True)
    if a.preview:
        bg = Image.new("RGBA", (S, S), (255, 255, 255, 255))
        bg.alpha_composite(Image.fromarray(rgba))
        bg.convert("RGB").resize((800, 800), Image.LANCZOS).save(a.preview)
    print("wrote", (OUT / "engraving.png").relative_to(REPO))


if __name__ == "__main__":
    main()
