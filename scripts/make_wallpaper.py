"""Draws the 8-bit wallpaper: a tiling starfield and a tiling mountain horizon.

Both are tiny PNGs drawn at 1 pixel per art pixel; CSS scales them up with
image-rendering: pixelated. Run: python3 scripts/make_wallpaper.py
"""
import random
from PIL import Image

BG = (0x1D, 0x2B, 0x53)
DIM = (0x5F, 0x57, 0x4F)
GREY = (0xC2, 0xC3, 0xC7)
WHITE = (0xFF, 0xF1, 0xE8)
YELLOW = (0xFF, 0xEC, 0x27)
FAR = (0x25, 0x35, 0x6A)
NEAR = (0x0B, 0x14, 0x33)
SNOW = (0x83, 0x76, 0x9C)

rng = random.Random(7)

# Starfield tile, 128x128. Sparse so text over it stays readable.
sky = Image.new("RGB", (128, 128), BG)
px = sky.load()
taken = set()


def free(x, y, r=3):
    return all((x + dx, y + dy) not in taken for dx in range(-r, r + 1) for dy in range(-r, r + 1))


def mark(x, y):
    taken.add((x, y))


for _ in range(18):  # faint dots
    x, y = rng.randrange(128), rng.randrange(128)
    if free(x, y):
        px[x, y] = DIM
        mark(x, y)
for _ in range(5):  # bright dots
    x, y = rng.randrange(128), rng.randrange(128)
    if free(x, y):
        px[x, y] = GREY
        mark(x, y)
for colour in (WHITE, YELLOW):  # one twinkle cross each
    for _ in range(50):
        x, y = rng.randrange(2, 126), rng.randrange(2, 126)
        if free(x, y, 4):
            px[x, y] = colour
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                px[x + dx, y + dy] = DIM if colour == WHITE else GREY
            mark(x, y)
            break
sky.save("public/bg/stars.png", optimize=True)

# Horizon tile, 128 wide x 40 tall, transparent above the ridgeline.
hz = Image.new("RGBA", (128, 40), (0, 0, 0, 0))
hp = hz.load()


def ridge(base, amp, step, seed):
    r = random.Random(seed)
    h, out = base, []
    for x in range(128):
        if x % step == 0:
            h = max(base - amp, min(base + amp, h + r.choice((-2, -1, 0, 1, 2))))
        out.append(h)
    # make the ends meet so the strip tiles without a seam
    for i in range(12):
        t = i / 12
        out[127 - i] = round(out[127 - i] * t + out[0] * (1 - t))
    return out


far = ridge(14, 8, 2, 3)
near = ridge(26, 6, 3, 11)
for x in range(128):
    for y in range(far[x], 40):
        hp[x, y] = FAR + (255,)
    if far[x] < 12:  # snow caps on the tallest far peaks
        for y in range(far[x], min(far[x] + 2, 40)):
            hp[x, y] = SNOW + (255,)
    for y in range(near[x], 40):
        hp[x, y] = NEAR + (255,)
hz.save("public/bg/horizon.png", optimize=True)
print("ok")
