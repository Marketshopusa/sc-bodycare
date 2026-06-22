from PIL import Image, ImageDraw

# Open the original image
orig_path = 'C:/Users/synth/.gemini/antigravity/brain/abf495ae-6692-4c57-9cbb-76df385099d6/media__1782090137617.jpg'
img = Image.open(orig_path)

# Coordinates found:
cx = 530
cy = 511
size = 803  # square size

left = cx - size // 2
top = cy - size // 2
right = left + size
bottom = top + size

# Crop the square region
cropped = img.crop((left, top, right, bottom))

# Create a high-resolution mask for antialiasing
scale = 4
mask_size = size * scale
mask = Image.new('L', (mask_size, mask_size), 0)
draw = ImageDraw.Draw(mask)

# Draw circle on the high-res mask
draw.ellipse((0, 0, mask_size, mask_size), fill=255)

# Downscale the mask to the target size for smooth edges
mask = mask.resize((size, size), Image.Resampling.LANCZOS)

# Put the mask into the alpha channel of the cropped square image
cropped.putalpha(mask)

# Save as public/logo.png
cropped.save('public/logo.png', 'PNG')
print("Successfully generated public/logo.png")
