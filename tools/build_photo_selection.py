from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path("/Users/david/Desktop/个人网站")
OUT = ROOT / "david-portfolio-demo/previews/photo-selection-v1.png"
FONT_CN = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_CN_LIGHT = "/System/Library/Fonts/STHeiti Light.ttc"
FONT_EN = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

PAPER = "#FFFDF5"
INK = "#1E293B"
VIOLET = "#8B5CF6"
PINK = "#F472B6"
YELLOW = "#FBBF24"
MINT = "#34D399"
LILAC = "#EEE8FF"


items = [
    {
        "id": "01",
        "file": "0DA7B818-39D0-4519-A0ED-A5A2CA9025B9_1_105_c.jpeg",
        "title": "雪林与金色树木",
        "tag": "自然 · 冷暖对比",
        "reason": "冷蓝与金黄形成清晰层次，适合作为摄影区开场。",
        "crop": "4:3 居中裁切，保留湖面与金色树线",
        "recommended": True,
        "position": (0.50, 0.52),
    },
    {
        "id": "02",
        "file": "FD7C1297-535D-4690-A24E-8CF42BB4F098_1_102_a.jpeg",
        "title": "秋林与湖面倒影",
        "tag": "自然 · 色彩层次",
        "reason": "丰富色彩仍保持秩序，体现观察与构图耐心。",
        "crop": "4:3 居中裁切，保留树林与倒影各半",
        "recommended": True,
        "position": (0.50, 0.52),
    },
    {
        "id": "03",
        "file": "76D404B6-A925-4262-87B9-D0AE2F0954BA_1_105_c.jpeg",
        "title": "桥梁与紫红晚霞",
        "tag": "城市 · 氛围",
        "reason": "桥体线条与晚霞形成节奏，城市感和情绪兼具。",
        "crop": "4:3 原比例，保留双塔与江面船只",
        "recommended": True,
        "position": (0.50, 0.50),
    },
    {
        "id": "04",
        "file": "23E0BBA9-64EC-4416-8545-3F3B666633E6_1_105_c.jpeg",
        "title": "上海城市天际线",
        "tag": "城市 · 地域身份",
        "reason": "信息明确、识别度高，可补充上海个人身份线索。",
        "crop": "4:3 居中裁切，保留三件套和前景街区",
        "recommended": False,
        "position": (0.54, 0.48),
    },
    {
        "id": "05",
        "file": "945B50AC-FF93-4401-9DA1-65E7468F1C41_1_102_a.jpeg",
        "title": "传统建筑与玻璃幕墙",
        "tag": "城市 · 新旧关系",
        "reason": "传统与现代并置，具备清晰的观察主题和视觉冲突。",
        "crop": "4:3 重点裁切，保留古建主体与幕墙反射",
        "recommended": True,
        "position": (0.56, 0.36),
    },
    {
        "id": "06",
        "file": "9906FDE4-6C83-4020-87ED-5913CF5FC235_1_105_c.jpeg",
        "title": "气球与蓝天",
        "tag": "日常 · 几何色彩",
        "reason": "红黄蓝色块呼应网页语言，画面轻松、有记忆点。",
        "crop": "4:3 原比例，保留左侧气球与右侧留白",
        "recommended": False,
        "position": (0.50, 0.50),
    },
    {
        "id": "07",
        "file": "4713C90E-BCDD-4205-8A50-3CFEA6AA9269_1_105_c.jpeg",
        "title": "黑白建筑空间",
        "tag": "建筑 · 结构",
        "reason": "拱顶、阶梯和人物尺度形成稳定的几何秩序。",
        "crop": "4:3 原比例，完整保留拱顶和阶梯人物",
        "recommended": True,
        "position": (0.50, 0.50),
    },
    {
        "id": "08",
        "file": "B8921FC2-6CE4-4E04-86E2-648F1964FDAA_1_102_a.jpeg",
        "title": "黑白城市街道",
        "tag": "街景 · 秩序",
        "reason": "道路与住宅形成强烈分割，呈现真实城市生活密度。",
        "crop": "4:3 重点裁切，保留道路与楼体的对照",
        "recommended": True,
        "position": (0.50, 0.42),
    },
]


def font(size: int, light: bool = False, english: bool = False):
    path = FONT_EN if english else (FONT_CN_LIGHT if light else FONT_CN)
    return ImageFont.truetype(path, size)


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def cover(source: Image.Image, size, centering):
    return ImageOps.fit(source.convert("RGB"), size, method=Image.Resampling.LANCZOS, centering=centering)


canvas = Image.new("RGB", (1440, 2580), PAPER)
draw = ImageDraw.Draw(canvas)

# Decorative geometry mirrors the approved Playful Geometric first screen.
draw.ellipse((-90, -120, 290, 260), fill="#FDEAF2")
draw.ellipse((1280, 2400, 1560, 2680), fill="#E9E3FF", outline=INK, width=3)
draw.rounded_rectangle((76, 62, 132, 118), radius=28, fill=YELLOW, outline=INK, width=3)
draw.text((94, 76), "D", font=font(26, english=True), fill=INK)
draw.text((150, 60), "DAVID · 摄影候选确认", font=font(28), fill=INK)
draw.text((150, 99), "ABOUT AESTHETICS / PHOTO SELECTION", font=font(14, english=True), fill=INK)

draw.text((76, 164), "请选择最终 6 张作品", font=font(52), fill=INK)
draw.text((78, 230), "候选图均按网页 4:3 比例模拟裁切；带“推荐组合”的 6 张构成 2 自然＋2 城市＋2 黑白。", font=font(20, light=True), fill=INK)

rounded(draw, (1112, 165, 1360, 224), 16, VIOLET, INK, 3)
draw.text((1150, 181), "回复图片编号即可", font=font(18), fill="white")

card_w, card_h = 632, 510
image_w, image_h = 584, 330
lefts = [72, 736]
top = 300
row_gap = 34

for index, item in enumerate(items):
    row, col = divmod(index, 2)
    x = lefts[col]
    y = top + row * (card_h + row_gap)

    # Hard shadow and paper card.
    rounded(draw, (x + 8, y + 8, x + card_w + 8, y + card_h + 8), 24, INK)
    rounded(draw, (x, y, x + card_w, y + card_h), 24, "white", INK, 3)

    source = Image.open(ROOT / "摄影作品" / item["file"])
    preview = cover(source, (image_w, image_h), item["position"])
    mask = Image.new("L", (image_w, image_h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, image_w, image_h), radius=16, fill=255)
    canvas.paste(preview, (x + 24, y + 24), mask)
    draw.rounded_rectangle((x + 24, y + 24, x + 24 + image_w, y + 24 + image_h), radius=16, outline=INK, width=3)

    rounded(draw, (x + 40, y + 40, x + 100, y + 100), 30, YELLOW if item["recommended"] else LILAC, INK, 3)
    draw.text((x + 53, y + 52), item["id"], font=font(24, english=True), fill=INK)

    if item["recommended"]:
        rounded(draw, (x + 424, y + 42, x + 592, y + 88), 12, MINT, INK, 2)
        draw.text((x + 451, y + 53), "推荐组合", font=font(16), fill=INK)

    draw.text((x + 28, y + 372), item["title"], font=font(24), fill=INK)
    tag_bbox = draw.textbbox((0, 0), item["tag"], font=font(15))
    tag_width = tag_bbox[2] - tag_bbox[0] + 28
    rounded(draw, (x + card_w - tag_width - 24, y + 371, x + card_w - 24, y + 407), 18, "#FFE6F3", INK, 2)
    draw.text((x + card_w - tag_width - 10, y + 380), item["tag"], font=font(15), fill=INK)

    draw.text((x + 28, y + 420), item["reason"], font=font(16, light=True), fill=INK)
    draw.text((x + 28, y + 455), f"裁切建议：{item['crop']}", font=font(14, light=True), fill="#475569")
    draw.text((x + 28, y + 483), item["file"][:12] + "…", font=font(12, english=True), fill="#64748B")

footer_y = 2510
draw.line((76, footer_y - 24, 1364, footer_y - 24), fill=INK, width=2)
draw.text((76, footer_y), "DEFAULT: 01 / 02 / 03 / 05 / 07 / 08", font=font(16, english=True), fill=INK)
draw.text((954, footer_y), "本候选板不会改动摄影原图", font=font(16), fill=INK)

OUT.parent.mkdir(parents=True, exist_ok=True)
canvas.save(OUT, optimize=True)
print(OUT)
