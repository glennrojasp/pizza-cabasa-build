# Pizza Cabasa — prototipo (Vite + React + Tailwind)

Prototipo del sitio de Pizza Cabasa, reconstruido desde cero a partir del
template Next.js "WellFood" que vive en `../pizza-cabasa-build`. Este
proyecto es independiente — no modifica ni depende de esa carpeta.

## Por qué existe

El sitio original es una plantilla comercial grande (~20 páginas) casi sin
personalizar: shop/carrito/checkout sin backend real, formularios que
apuntan a un PHP inexistente, datos de contacto y menú de relleno en
inglés. Este prototipo se queda solo con lo que un negocio de pizzas por
WhatsApp realmente necesita, migrado a un stack más simple:

- **Vite + React** (sin Next.js, sin SSR — no hace falta para este caso).
- **Tailwind CSS v4** en vez de Bootstrap + Sass.
- **Framer Motion** en vez de AOS para las animaciones al hacer scroll.
- **Swiper** para los carruseles (categorías, testimonios).
- **React Router** para las páginas (SPA con rutas cliente).

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción a dist/
npm run lint
```

## Estructura

```
src/
  components/       Header, Footer, Reveal (animación scroll), Marquee,
                     SectionTitle, MenuItemCard, GalleryGrid, etc.
  components/home/  Secciones exclusivas del home (Hero, sliders...)
  pages/            Una página por ruta (Home, About, History, Chefs,
                     Gallery, Menu, Contact)
  data/             Contenido editable sin tocar componentes
public/assets/      Imágenes e iconos copiados del template original
```

## ⚠️ Contenido pendiente de reemplazar

Todo lo marcado como **"Pendiente"** en el sitio es información real del
negocio que todavía no tengo confirmada. Se muestra así a propósito, para
no inventar datos falsos (dirección, horarios, etc.). Editá estos
archivos con los datos reales antes de lanzar el sitio:

| Archivo | Qué falta |
|---|---|
| `src/data/site.js` | Dirección, horario, Instagram/Facebook, email |
| `src/data/menu.js` | Sabores y precios reales (hoy son de ejemplo) |
| `src/data/chefs.js` | Nombres, roles y fotos reales del equipo |
| `src/data/history.js` | Años e historia real del negocio |
| `src/data/testimonials.js` | Reseñas reales de clientes (no publicar las de ejemplo) |
| `src/data/gallery.js` | Fotos reales del producto/local (hoy son stock del template) |

El número de WhatsApp (+506 8769 7993) y el copy del hero sí son reales —
se tomaron del home actual.

## Decisiones de simplificación

- **Sin shop/carrito/checkout ni blog**: en el sitio original son maquetas
  sin backend. Acá los pedidos van directo por WhatsApp, incluyendo un
  botón "Pedir por WhatsApp" en cada producto del menú (con el nombre del
  producto ya escrito en el mensaje).
- **Formulario de contacto funcional de verdad**: en vez de enviar a un
  PHP que no existe, arma el mensaje y abre WhatsApp con el texto ya
  escrito.
- **Sin páginas duplicadas** (index2–6 del template original).
