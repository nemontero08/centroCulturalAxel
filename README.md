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
| Montos, imágenes y links de Mercado Pago | `site.memberships` |
| Títulos y textos de la sección de aporte | `site.sections` |
| Preguntas frecuentes | `site.faqs` |
| Links de redes / footer | `site.footer` |
| Texto al compartir | `site.share` |

### Agregar o quitar un monto

Agregá (o borrá) un objeto en `site.memberships`. Cada uno es una pill; el
primero del array viene seleccionado al abrir la página.

```ts
{
  id: "25k",
  amount: "$25.000",
  period: "/mes",
  url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=...",
  image: "/images/mi-foto.jpg",
  imageAlt: "Descripción de la foto",
}
```


### Imágenes

Ya están todas puestas en `public/images/` (portada, foto de perfil y una por monto).
Para cambiar una: copiá el archivo nuevo a `public/images/` y actualizá `image` en
`data/site.ts`.

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
  MembershipSelector.tsx  pills de montos + panel con imagen y botón
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
- El selector usa breakpoints CSS propios (`tablet`: 700px, `desktop`: 1040px);
  el panel es horizontal en tablet/desktop y vertical en mobile.
- Las 7 imágenes se montan juntas y se alterna la visible, así cambiar de monto
  es instantáneo y no parpadea.
