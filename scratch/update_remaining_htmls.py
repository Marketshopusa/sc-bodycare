import os

files_to_update = ['public/catalog.html', 'public/product.html', 'public/cart.html']

for filepath in files_to_update:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - not found")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Inject security script after <head>
    if 'security-shield.js' not in content:
        if '<head>' in content:
            content = content.replace('<head>', '<head>\n  <script src="security-shield.js"></script>')
            print(f"Injected security script in {filepath}")
        else:
            print(f"Warning: <head> not found in {filepath}")

    # 2. Append AI disclaimer in footer bottom
    copyright_str = '<p>&copy; 2026 scbodycare Corporation. Todos los derechos reservados.</p>'
    disclaimer_str = '''        <p style="font-size: 11px; color: var(--color-text-muted); margin-top: 5px; margin-bottom: 10px;">
          <span class="lang-es">Esta página utiliza inteligencia artificial</span>
          <span class="lang-en">This page uses artificial intelligence</span>
        </p>'''
    
    if 'Esta página utiliza inteligencia artificial' not in content:
        if copyright_str in content:
            content = content.replace(copyright_str, copyright_str + '\n' + disclaimer_str)
            print(f"Injected AI disclaimer in {filepath}")
        else:
            # Try plain copyright without &copy;
            alt_copyright = '<p>&copy; 2026 scbodycare Corporation. Todos los derechos reservados.</p>'
            # Wait, let's look for "Todos los derechos reservados" and check
            if 'Todos los derechos reservados' in content:
                # We find the line containing it
                lines = content.split('\n')
                for idx, line in enumerate(lines):
                    if 'Todos los derechos reservados' in line and 'scbodycare Corporation' in line:
                        lines[idx] = line + '\n' + disclaimer_str
                        print(f"Injected AI disclaimer in {filepath} (via line match)")
                        break
                content = '\n'.join(lines)
            else:
                print(f"Warning: Copyright line not found in {filepath}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done updating remaining HTML files.")
