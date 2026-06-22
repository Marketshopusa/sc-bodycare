from PIL import Image, ImageDraw

img = Image.open('C:/Users/synth/.gemini/antigravity/brain/abf495ae-6692-4c57-9cbb-76df385099d6/media__1782090137617.jpg')
width, height = img.size
print("Image size:", width, height)

gray = img.convert('L')

# Find non-white boundary (value < 240)
min_x, max_x = width, 0
min_y, max_y = height, 0

for y in range(height):
    for x in range(width):
        val = gray.getpixel((x, y))
        if val < 240:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Non-bg bounding box: x [{min_x}, {max_x}], y [{min_y}, {max_y}]")
print(f"Width of box: {max_x - min_x}, Height of box: {max_y - min_y}")

# Center of the box
cx = (min_x + max_x) // 2
cy = (min_y + max_y) // 2
print(f"Center: {cx}, {cy}")

# Let's crop a square centered around (cx, cy)
# Using a diameter slightly smaller than the box to avoid outer white artifacts.
# The gold outer ring is circle. Let's see: width of box is 808, height is 808.
# So a square of 808x808 centered at (520, 510) or similar.
# Let's compute box size:
box_w = max_x - min_x
box_h = max_y - min_y
size = min(box_w, box_h)

# Let's define the crop box
left = cx - size // 2
top = cy - size // 2
right = left + size
bottom = top + size

print(f"Crop box: left={left}, top={top}, right={right}, bottom={bottom}, size={size}")
