import json
import re

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = BASE_DIR + "/index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Expand knowsAbout with the new highly specific CV keywords
cv_keywords = [
    # Alejandro
    "Asesoría Empresarial", 
    "Representación de Personas Físicas y Morales",
    "Sector Agroindustrial", 
    "Sector Comercial",
    "Protección del Patrimonio Empresarial", 
    "Negociación y Prevención de Contingencias", 
    "Litigio Civil", 
    "Derecho Familiar Estratégico",
    # Mario
    "Derecho Penal Empresarial", 
    "Asesoría Penal Preventiva para Empresas",
    "Defensa Penal Estratégica", 
    "Representación Legal de Corporaciones", 
    "Juicio de Amparo Penal", 
    "Sistema Penal Acusatorio"
]

# Extract current knowsAbout
match = re.search(r'"knowsAbout":\s*(\[.*?\])', content, flags=re.DOTALL)
if match:
    try:
        current_keywords = json.loads(match.group(1))
        # merge and deduplicate
        combined = list(dict.fromkeys(current_keywords + cv_keywords))
        
        # Replace in content
        old_str = match.group(0)
        new_str = '"knowsAbout": ' + json.dumps(combined, ensure_ascii=False)
        content = content.replace(old_str, new_str)
    except Exception as e:
        print("Error parsing JSON array", e)
else:
    print("Could not find knowsAbout")

# Inject more FAQs directly related to their exact CV experience
faq_cv_questions = [
    {
      "@type": "Question",
      "name": "¿Ofrecen asesoría penal preventiva para empresas y corporaciones en Zamora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el Dr. Mario Enrique Cervantes Vieyra encabeza la representación legal de corporaciones mediante asesoría penal preventiva, evitando contingencias legales y litigios penales para su empresa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuentan con abogados para el sector agroindustrial y comercial en Michoacán?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Alejandro M. M. tiene amplia trayectoria como coordinador jurídico del sector agroindustrial y comercial, asegurando el blindaje corporativo y la protección del patrimonio empresarial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan litigio civil, familiar y mercantil complejo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra firma interviene en asuntos de altísima exigencia, negociaciones complejas, litigio civil, mercantil y derecho familiar estratégico con un enfoque implacable de prevención y contención de daños."
      }
    }
]

# Extract current FAQ array and append
faq_match = re.search(r'("mainEntity":\s*\[)(.*?)(\]\s*\})', content, flags=re.DOTALL)
if faq_match:
    existing_entities_str = faq_match.group(2).strip()
    
    # Format the new questions to append
    new_qs_str = json.dumps(faq_cv_questions, ensure_ascii=False, indent=2)
    # slice the brackets off
    new_qs_str = new_qs_str[1:-1].strip()
    
    # Join them with a comma
    new_main_entity = faq_match.group(1) + "\n" + existing_entities_str + ",\n" + new_qs_str + "\n" + faq_match.group(3)
    
    content = content.replace(faq_match.group(0), new_main_entity)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("CV Keywords expanded successfully.")
