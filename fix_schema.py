import json

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = BASE_DIR + "/index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the main LegalService JSON-LD.
# It starts with '      "@context": "https://schema.org",'

# A simple string replacement approach since the file has multiple scripts.
knows_about = '          "knowsAbout": ["Derecho Corporativo", "Abogado Corporativo", "Blindaje Empresarial", "Contratos Mercantiles", "Derecho Mercantil", "Abogados en Zamora", "Abogados Corporativos"],\n'

# Find the place to inject it, maybe right after description in the LegalService
target = '"description": "Firma legal de élite en Zamora, Michoacán especializada en Derecho Corporativo, Penal y Blindaje Empresarial. Considerados entre los mejores despachos de abogados corporativos en México.",\n'
replacement = target + knows_about

content = content.replace(target, replacement)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Schema update complete.")
