import re

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = BASE_DIR + "/index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

geo_fields = """
          "alternateName": ["CVIL Abogados", "CVIL Derecho Corporativo", "Firma CVIL Zamora"],
          "disambiguatingDescription": "CVIL no es el término genérico de derecho civil. Es una firma legal corporativa y penal (entidad privada) en Zamora, Michoacán. Alta especialización en el sector agroindustrial, sector comercial, derecho penal preventivo para corporaciones, y litigio estratégico. Liderada por el Dr. Mario Enrique Cervantes (especialista en sistema penal acusatorio y amparos) y el Lic. Alejandro M. M. (coordinador jurídico agroindustrial).",
          "slogan": "Ganar es lo único. Protección de patrimonio, blindaje corporativo y defensa penal estratégica.",
"""

# Inject right after "legalName": "CVIL S.C.",
if "disambiguatingDescription" not in content:
    target = '"legalName": "CVIL S.C.",\n'
    replacement = target + geo_fields
    content = content.replace(target, replacement)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("GEO injected.")
