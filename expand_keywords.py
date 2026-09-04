import json

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = BASE_DIR + "/index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The current knowsAbout string to replace
old_knows = '"knowsAbout": ["Derecho Corporativo", "Abogado Corporativo", "Blindaje Empresarial", "Contratos Mercantiles", "Derecho Mercantil", "Abogados en Zamora", "Abogados Corporativos"]'

new_keywords = [
    "Derecho Corporativo", "Abogado Corporativo", "Abogados de Empresa", "Asesoría Legal Empresarial",
    "Blindaje Empresarial", "Gobierno Corporativo", "Constitución de Sociedades", "Fusión y Escisión de Empresas",
    "Auditoría Legal", "Due Diligence", "Asambleas de Accionistas", "Derecho Mercantil", "Contratos Mercantiles",
    "Litigio Mercantil", "Juicio Ejecutivo Mercantil", "Cobranza Judicial", "Recuperación de Cartera Vencida",
    "Pagarés y Cheques", "Defensa Patronal", "Auditoría Laboral Patronal", "Prevención de Demandas Laborales",
    "Registro de Marca", "Propiedad Intelectual", "Protección de Patentes e IMPI", "Contratos de Confidencialidad (NDA)",
    "Derecho Fiscal", "Defensa Fiscal y Administrativa", "Defensa ante el SAT e IMSS", "Juicio de Nulidad",
    "Amparos", "Derecho Inmobiliario", "Fideicomisos y Arrendamientos", "Derecho Penal Empresarial",
    "Abogados en Zamora", "Despacho Jurídico Zamora", "Firma Legal Michoacán", "Abogados Jacona", 
    "Mejores Abogados Corporativos", "Solución de Controversias"
]

new_knows_str = '"knowsAbout": ' + json.dumps(new_keywords, ensure_ascii=False)

if old_knows in content:
    content = content.replace(old_knows, new_knows_str)
else:
    # If it was slightly different, let's use regex
    import re
    content = re.sub(r'"knowsAbout":\s*\[.*?\]', new_knows_str, content, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Keywords expanded.")
