/**
 * ─────────────────────────────────────────────────────────────
 *  ÚNICO ARCHIVO QUE HAY QUE EDITAR
 * ─────────────────────────────────────────────────────────────
 *  Todo el contenido de la página vive acá: perfil, portada,
 *  membresías (con sus links de Mercado Pago), preguntas
 *  frecuentes y links del footer.
 *
 *  Las imágenes van en /public/images y se referencian como
 *  "/images/archivo.jpg".
 */

export type Membership = {
  /** Identificador interno, sólo para React keys. */
  id: string;
  /** Monto que se muestra en la tarjeta, ya formateado. */
  amount: string;
  /** Texto chico al lado del monto. */
  period: string;
  /** Link de suscripción de Mercado Pago. */
  url: string;
  /** Imagen que se muestra al elegir este monto. */
  image: string | null;
  /** alt de la imagen. */
  imageAlt?: string;
  /** Texto del botón, antes del monto. Por defecto "Colaborar con". */
  cta?: string;
};

export type Faq = { q: string; a: string };

export type SocialLink = {
  label: string;
  href: string;
  /** Nombre del glifo de Material Symbols, o "instagram" / "facebook" para los SVG de marca. */
  icon: "instagram" | "facebook" | "language" | "mail" | (string & {});
};

export const site = {
  profile: {
    name: "Centro de estudios Proyecto Axel Presidente",
    location: "Tandil, Buenos Aires · Belgrano 432",
    note: "Con tu aporte mensual ayudás a pagar el alquiler y el mantenimiento de este espacio.",
    avatar: "/images/mano-v.webp",
    avatarAlt: "Mano haciendo la V",
    cover: "/images/portada.jpeg",
    coverAlt: "Encuentro en el centro cultural",
  },

  share: {
    label: "Compartir",
    copiedLabel: "Link copiado",
    title: "Centro de estudios Proyecto Axel Presidente",
    text: "Sumate como socia o socio del Centro de estudios Proyecto Axel Presidente, Tandil.",
  },

  sections: {
    membershipsTitle: "Elegí cuánto aportar",
    membershipsNote: "Elegí un monto y confirmá abajo. Te lleva a Mercado Pago para suscribirte.",
    membershipsFinePrint:
      "Se debita una vez por mes por Mercado Pago y lo cancelás cuando quieras, sin permanencia mínima.",
    faqTitle: "Preguntas frecuentes",
  },

  /** Encuadre de las imágenes. height/size en px; null = alto responsive. */
  layout: {
    cover: { height: 320, focusX: 100, focusY: 37, zoom: 100 },
    avatar: { size: null as number | null, focusX: 50, focusY: 50 },
    cards: { focusX: 50, focusY: 66 },
  },

  /**
   * Orden de los montos = orden de este array. El primero viene
   * seleccionado al abrir la página.
   */
  memberships: [
    {
      id: "10k",
      amount: "$10.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=14a8eb09a67b4c37a38d627b3610d0f3",
      image: "/images/plan-10k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "15k",
      amount: "$15.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=7257e64ab7ef439bbe4861b65ed48c91",
      image: "/images/plan-15k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "20k",
      amount: "$20.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=666d20af5f2440e18f5452d1cac93353",
      image: "/images/plan-20k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "30k",
      amount: "$30.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=21fd8fd7ee5c4ca9b3570a12f5ad95e7",
      image: "/images/plan-30k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "50k",
      amount: "$50.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=91c5c755596a41ca92aec5164fd9d46f",
      image: "/images/plan-50k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "80k",
      amount: "$80.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=4cd4ee3a66eb424693a7db0a14a5b601",
      image: "/images/plan-80k.webp",
      imageAlt: "Actividad en el centro cultural",
    },
    {
      id: "100k",
      amount: "$100.000",
      period: "/mes",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=053a272fd2c4421f84d1a4bf4b250b65",
      image: "/images/plan-100k.png",
      imageAlt: "Collage con brazos en alto",
    },
  ] satisfies Membership[],

  faqs: [
    {
      q: "¿Cómo funciona la membresía?",
      a: "Elegís un plan y te suscribís por Mercado Pago. Todos los meses se debita el mismo monto y con eso sostenemos talleres, materiales y actividades abiertas del centro.",
    },
    {
      q: "¿Puedo cancelarla cuando quiera?",
      a: "Sí. La cancelás desde tu cuenta de Mercado Pago, en Suscripciones, sin avisarnos ni dar explicaciones. No hay permanencia mínima.",
    },
    {
      q: "¿Cómo se realiza el cobro?",
      a: "Mercado Pago debita el monto una vez por mes, el mismo día que te asociaste, con tarjeta o dinero en cuenta.",
    },
    {
      q: "¿Recibo comprobante?",
      a: "Sí. Mercado Pago te manda el comprobante por mail después de cada cobro y queda guardado en tu cuenta.",
    },
    {
      q: "¿Puedo cambiar de plan?",
      a: "Cuando quieras. Cancelás el actual y te asociás al nuevo desde esta misma página. Si necesitás ayuda, escribinos al 2494 572256.",
    },
  ] satisfies Faq[],

  /**
   * Footer oculto hasta tener los links definitivos.
   * Poner enabled: true y revisar los href de abajo.
   */
  footer: {
    enabled: false,
    note: "Gracias por ayudar a sostener este espacio cultural.",
    legal: "Pagos con Mercado Pago",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/arteypartetandil/?hl=es", icon: "instagram" },
      { label: "Facebook", href: "https://www.facebook.com/arteypartecc", icon: "facebook" },
      { label: "Sitio web", href: "https://ccarteyparte.com.ar/", icon: "language" },
      { label: "Mail", href: "mailto:hola@ccarteyparte.com.ar", icon: "mail" },
    ] satisfies SocialLink[],
  },
};
