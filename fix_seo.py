import os
import json

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = os.path.join(BASE_DIR, "index.html")

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update title
content = content.replace("<title>CVIL | Derecho Corporativo | Abogados en Zamora, Michoacán</title>", "<title>CVIL | Abogados Corporativos en Zamora, Michoacán | Derecho de Empresa</title>")

# Update description
old_desc = 'content="Firma legal líder en Zamora. Expertos en Derecho Corporativo, Penal y Blindaje Empresarial. Defensa estratégica, resultados contundentes y absoluta confidencialidad en Michoacán."'
new_desc = 'content="Firma de abogados corporativos en Zamora. Especialistas en Derecho Corporativo, Penal y Asesoría Legal para Empresas. Resolvemos sus dudas y casos con estrategia."'
content = content.replace(old_desc, new_desc)

# Generate FAQ JSON-LD
faq_schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Buscas un abogado corporativo en Zamora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CVIL es la firma líder de abogados corporativos en Zamora, Michoacán. Nos especializamos en blindaje empresarial, contratos mercantiles, auditorías laborales y estructuración de sociedades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hace un abogado corporativo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un abogado corporativo protege legalmente a su empresa mediante la elaboración de contratos sólidos, defensa en litigios comerciales, registro de marcas, cumplimiento normativo y blindaje fiscal."
      }
    },
    {
      "@type": "Question",
      "name": "Tengo un caso de derecho corporativo en Michoacán, ¿qué hago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contáctenos inmediatamente. Evaluaremos su caso de derecho corporativo, mercantil o penal con absoluta confidencialidad y le ofreceremos la mejor estrategia legal para proteger sus intereses."
      }
    }
  ]
}

faq_script = f'<script type="application/ld+json">\n{json.dumps(faq_schema, ensure_ascii=False, indent=2)}\n  </script>'

# Inject FAQ schema right before the existing JSON-LD script or at the end of head
if "<!-- GEO & SEO ESTRUCTURA AVANZADA (JSON-LD) - GRAPH -->" in content:
    content = content.replace("<!-- GEO & SEO ESTRUCTURA AVANZADA (JSON-LD) - GRAPH -->", f"<!-- FAQ SCHEMA -->\n  {faq_script}\n\n  <!-- GEO & SEO ESTRUCTURA AVANZADA (JSON-LD) - GRAPH -->")

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("SEO update complete.")
