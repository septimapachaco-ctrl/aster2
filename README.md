# Agencia Aster — web (estilo fusión)

Sitio estático (HTML + CSS + JS, sin dependencias). Abrí `index.html` en el navegador o publicalo en cualquier hosting estático (GitHub Pages, Netlify, Vercel).

## Estilo fusión
Combina el estilo claro original con el tema "Producción":
- **Secciones claras** (blancas): marcas, problemas, proceso, equipo, testimonios, blog y el texto de las notas.
- **Secciones oscuras** (`class="is-dark"`): inicio, servicios, diferencial, proyectos, preguntas frecuentes y cierre. Son transparentes y dejan ver el fondo fijo con el dron y el equipo de grabación (`assets/bg-produccion.svg`), con recuadros de vidrio.
- **Luces LED y animaciones** en toda la página: bordes de luz en los recuadros, líneas que cruzan cada sección, rieles laterales, barra de progreso, dron animado en el inicio.

Para cambiar una sección de clara a oscura (o al revés), agregale o quitale la clase `is-dark`.

Archivos: `styles.css` (base), `fusion.css` (fusión de estilos), `main.js` (menú, WhatsApp, animaciones de entrada), `fx.js` (fondo fijo y luces LED).

## Tipografías y colores
Bricolage Grotesque (condensed para títulos), Ms Madi (acentos). Paleta: `#FFFFFF` · `#00E7FF` · `#00A3FF` · `#010978` · `#04044A`.

## WhatsApp
Todos los botones abren WhatsApp al +54 9 3873 64-4198. Se cambia en `WHATSAPP_NUMBER` dentro de `main.js`.

## Blog
Listado en `blog/index.html`; cada nota en `blog/nombre-de-la-nota/index.html`. Para sumar una, duplicá la carpeta de una nota, editá el contenido y agregá su tarjeta en `blog/index.html` (y en el bloque Blog de `index.html`).

## Pendiente de completar con contenido real
Logos de marcas, casos de proyectos con imágenes, fotos y nombres del equipo, testimonios autorizados. Conviene reemplazar los logos recortados de `assets/` por los SVG originales.
