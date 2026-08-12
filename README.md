# Membresías · Centro de estudios Proyecto Axel Presidente

Página única de membresías (estilo link-in-bio) en **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.
Sin backend, sin base de datos, sin API: todo el contenido es estático.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel

1. Subí esta carpeta a un repo de GitHub.
2. En Vercel: **Add New → Project → Import** ese repo.
3. Framework preset: **Next.js**. No hace falta configurar nada más
   (no hay variables de entorno ni backend).
4. Deploy.

## Qué editar

**Todo el contenido está en un solo archivo: [`data/site.ts`](./data/site.ts).**

| Quiero cambiar… | Dónde |
| --- | --- |
| Nombre, ubicación, texto del aporte | `site.profile` |
| Foto de portada y foto de perfil | `site.profile.cover` / `site.profile.avatar` |
| Encuadre y alto de las imágenes | `site.layout` |
| Montos y links de Mercado Pago | `site.memberships` |
| Preguntas frecuentes | `site.faqs` |
| Resumen de montos del encabezado | `site.summary` |
| Links de redes / footer | `site.footer` |
| Texto al compartir | `site.share` |

### Agregar o quitar una membresía

Agregá (o borrá) un objeto en `site.memberships`. No hay carrusel: todas las
tarjetas están visibles y **todas miden lo mismo** (1 columna en mobile, 2 en
tablet, 3 en desktop; las que sobran en la última fila quedan centradas).
`featured: true` sólo cambia el borde y el color del botón, no el tamaño.

```ts
{
  id: "25k",
  amount: "$25.000",
  period: "/mes",
  url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=...",
  image: "/images/mi-foto.jpg", // o null para el placeholder aqua
  featured: false,               // true = borde aqua + botón lleno
}
```

### Imágenes

Ya están todas puestas en `public/images/` (portada, foto de perfil y las 7 tarjetas).
Para cambiar una: copiá el archivo nuevo a `public/images/` y actualizá `image` en
`data/site.ts`. Con `image: null` la tarjeta muestra un placeholder aqua.

### Mostrar el footer

Está oculto a propósito hasta tener los links definitivos. En `data/site.ts`:

```ts
footer: { enabled: true, ... }
```

## Estructura

```
app/
  layout.tsx        fuentes (Nunito + Material Symbols), metadata, OG
  page.tsx          entrada
  globals.css       tokens del design system Arte y Parte + resets
components/
  MembershipPage.tsx      shell responsive (520px mobile / 1040px tablet+)
  ProfileHeader.tsx       portada, foto de perfil animada, título, aporte
  ShareButton.tsx         Web Share API con fallback a portapapeles
  MembershipGrid.tsx      grilla responsive de membresías (sin carrusel)
  MembershipCard.tsx      tarjeta de membresía (normal y destacada)
  FaqList.tsx             acordeón
  SiteFooter.tsx          tiles de links (oculto por config)
  Icon.tsx                glifo de Material Symbols Rounded
data/
  site.ts           ← ÚNICO archivo de contenido
```

## Notas de diseño

- Los tokens del design system (colores aqua, tinta cálida, sombras, easings)
  están en `app/globals.css` y expuestos a Tailwind en `tailwind.config.ts`
  (`bg-aqua-600`, `text-text-muted`, `shadow-card`, `ease-standard`…).
- Tipografía Nunito vía `next/font/google`; iconos Material Symbols Rounded.
- La grilla usa breakpoints CSS propios (`tablet`: 700px, `desktop`: 1040px),
  sin JavaScript: no hay salto de layout ni error de hidratación.
- Todas las tarjetas comparten el mismo tamaño; la destacada se diferencia sólo
  por el borde aqua y el botón lleno.
