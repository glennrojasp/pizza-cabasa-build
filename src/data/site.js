// Datos centrales del negocio.
// Todo lo marcado "Pendiente" es información real que aún no tengo confirmada:
// se muestra tal cual en la UI para no inventar direcciones/horarios falsos.
// Editá este archivo cuando tengas los datos definitivos.

export const site = {
  name: "Pizza Cabasa",
  shortTagline: "Pizzas congeladas artesanales",
  description:
    "Pizzas congeladas artesanales, panninis y foccacia con ingredientes frescos. Entrega a domicilio en Costa Rica.",

  whatsappNumber: "50687697993", // usado para el enlace wa.me
  whatsappDisplay: "+506 8769 7993",

  email: "Pendiente",
  address: "Pendiente",
  hours: "Pendiente",

  social: {
    instagram: "", // ej: "https://instagram.com/pizzacabasa"
    facebook: "",
  },
};

export const buildWhatsAppLink = (message) => {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
