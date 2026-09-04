import json
import re

BASE_DIR = "/Users/rendon/Desktop/CVIL_Web_Bugfix"
html_path = BASE_DIR + "/index.html"

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will extract the current FAQ schema, append more questions, and replace it.
# Instead of complex parsing, I'll just replace the whole FAQ block.

faq_schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Buscas el mejor abogado corporativo en Zamora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En CVIL somos la firma líder de abogados corporativos en Zamora, Michoacán. Nos especializamos en la protección de su empresa, blindaje empresarial, auditorías y defensa patrimonial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hace un abogado corporativo y mercantil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un abogado corporativo protege legalmente a su empresa mediante la elaboración de contratos sólidos, defensa en litigios comerciales, recuperación de cartera vencida, registro de marcas y cumplimiento normativo."
      }
    },
    {
      "@type": "Question",
      "name": "Tengo un problema legal con mi empresa o un caso de derecho corporativo, ¿qué hago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contáctenos inmediatamente. Evaluaremos su caso mercantil, corporativo, laboral o penal con absoluta confidencialidad y le ofreceremos la mejor estrategia legal para proteger sus intereses y patrimonio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo proteger mi empresa de demandas laborales o problemas con el SAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementamos blindaje fiscal, defensa administrativa y auditorías laborales patronales preventivas. Nuestro despacho en Zamora analiza su estructura para evitar litigios y multas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo recuperar pagarés, cheques o facturas sin cobrar (cartera vencida)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mediante juicios ejecutivos mercantiles y estrategias de cobranza judicial. Nuestros abogados en Zamora tienen un alto índice de éxito en la recuperación de activos y capital inmovilizado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde encuentro asesoría para constituir una sociedad o registrar una marca en Michoacán?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En CVIL Abogados. Gestionamos actas constitutivas, asambleas de accionistas, fusiones corporativas y registro de propiedad intelectual ante el IMPI."
      }
    }
  ]
}

faq_script = f'<script type="application/ld+json">\n{json.dumps(faq_schema, ensure_ascii=False, indent=2)}\n  </script>'

# Regex to replace the existing FAQPage script
pattern = r'<script type="application/ld\+json">\s*\{\s*"@context":\s*"https://schema\.org",\s*"@type":\s*"FAQPage".*?\}\s*</script>'
content = re.sub(pattern, faq_script, content, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("FAQ expanded.")
