# CVIL Abogados Corporativos

Sitio de React/Vite con páginas estáticas para producción. Cada ruta usa los mismos datos y componentes durante el pre-renderizado y la navegación en el navegador.

## Desarrollo y comprobaciones

```sh
npm ci
npx playwright install chromium --only-shell
npm run check
npm run build
npm run verify
npm run dev
```

`npm run build` solo escribe en `dist/`. No modifica `index.html`, componentes ni `public/`. El proceso falla si no puede generar una ruta, si hay errores de React o si el título, H1 y canonical no corresponden a la página.

`npm run verify` revisa todas las rutas con y sin JavaScript, los enlaces e imágenes locales, el sitemap, el menú móvil y los enlaces antiguos del blog. Opcionalmente, `CVIL_SCREENSHOT_DIR` permite guardar capturas de comprobación fuera del repositorio.

## Datos y rutas

- `data/site.js`: metadatos por ruta, servicios, NAP y datos estructurados.
- `components/BlogHub.tsx`: contenidos y referencias de las guías.
- `components/Seo.tsx`: aplica los mismos metadatos a la aplicación en ejecución.
- `prerender_static_html.js`: genera HTML completo a partir de las rutas reales.
- `vercel.json`: sirve los archivos publicados con URLs limpias; las rutas inexistentes conservan el estado HTTP 404.

No se deben guardar páginas generadas en `public/`: copiarían referencias de compilaciones anteriores y podrían quedar desactualizadas.

## Publicación

La rama de producción es `main`. Vercel ejecuta `npm run vercel-build`, instala Chromium y genera el directorio `dist/`. El navegador solo se utiliza durante la compilación.

Después de un despliegue, verificar `/`, `/blog`, una guía, las tres páginas de servicios y una ruta inexistente. Comprobar el HTML inicial y la página con JavaScript; una compilación local satisfactoria no confirma el despliegue remoto.

## Datos comerciales y accesos

Actualizar datos comerciales solo con información verificable. `sameAs` identifica perfiles concretos de la entidad, no las portadas de directorios ni artículos promocionales. No añadir puntuaciones o reseñas sin respetar las políticas de Google.

Las claves de Google, contraseñas, tokens y archivos de sesión se mantienen fuera del repositorio y de las carpetas públicas. Este sitio no necesita una clave de Gemini para compilar o funcionar.
