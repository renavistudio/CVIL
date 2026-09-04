import os

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
comp_dir = os.path.join(BASE_DIR, "components")

files_to_fix = ["Manifesto.tsx", "Partners.tsx", "ContactForm.tsx", "SocioMario.tsx", "SocioAlejandro.tsx"]

for file in files_to_fix:
    path = os.path.join(comp_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace <img with <img loading="lazy"
    # But only if it doesn't already have it
    if 'loading="lazy"' not in content:
        content = content.replace("<img", "<img loading=\"lazy\"")
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Lazy loading applied.")
