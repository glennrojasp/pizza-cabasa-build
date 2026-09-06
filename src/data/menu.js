// Menú de ejemplo. Los nombres de categoría ("Pizza Congelada", "Panninis",
// "Foccacia") salen del contenido real que ya tenías en el home actual.
// Los sabores y precios son de relleno — reemplazá con tu carta real y tus
// precios en colones. Dejé `price: null` en vez de inventar un monto.

export const menuCategories = [
  {
    id: "pizzas",
    title: "Pizzas Congeladas",
    icon: "fas fa-pizza-slice",
    items: [
      { id: 1, title: "Pack 1 pizza", desc: "Salsa de tomate, mozzarella y albahaca", img: "/assets/images/food/pm-food1.png", price: 4200, type: "pack", sabores: ["sabor1", "sabor2"] },
      { id: 2, title: "Pack 3 pizzas", desc: "Salsa de tomate, mozzarella y pepperoni", img: "/assets/images/food/pm-food2.png", price: null, type: "pack", sabores: ["sabor2"] },
      { id: 3, title: "Pack 5 pizzas", desc: "Jamón, piña y mozzarella", img: "/assets/images/food/pm-food3.png", price: null, type: "pack", sabores: ["sabor3"] },
      { id: 4, title: "Pack 10 pizzas", desc: "Mezcla de quesos artesanales", img: "/assets/images/food/pm-food4.png", price: null, type: "pack", sabores: ["sabor4"] },
      { id: 5, title: "10 mini pizzas", desc: "Vegetales frescos de temporada", img: "/assets/images/food/pm-food5.png", price: null, type: "pack", sabores: ["sabor5"] },
    ],
  },
  {
    id: "panninis",
    title: "Panninis",
    icon: "fas fa-utensils",
    items: [
      { id: 7, title: "Pannini Jamón y Queso", desc: "Jamón, queso y pan artesanal", img: "/assets/images/food/pm-food7.png", price: null },
      { id: 8, title: "Pannini Pollo", desc: "Pollo desmenuzado con vegetales", img: "/assets/images/food/pm-food8.png", price: null },
    ],
  },
  {
    id: "foccacia",
    title: "Foccacia",
    icon: "fas fa-bread-slice",
    items: [
      { id: 9, title: "Foccacia Clásica", desc: "Aceite de oliva, romero y sal marina", img: "/assets/images/food/rm-food1.png", price: null },
      { id: 10, title: "Foccacia de Ajo", desc: "Ajo confitado y hierbas", img: "/assets/images/food/rm-food2.png", price: null },
    ],
  },
  {
    id: "masas",
    title: "Masas y Bases",
    icon: "fas fa-bread-slice",
    items: [
      { id: 9, title: "Foccacia Clásica", desc: "Aceite de oliva, romero y sal marina", img: "/assets/images/food/rm-food1.png", price: null },
      { id: 10, title: "Foccacia de Ajo", desc: "Ajo confitado y hierbas", img: "/assets/images/food/rm-food2.png", price: null },
    ],
  },
  {
    id: "gourmet",
    title: "Gourmet",
    icon: "fas fa-bread-slice",
    items: [
      { id: 9, title: "Foccacia Clásica", desc: "Aceite de oliva, romero y sal marina", img: "/assets/images/food/rm-food1.png", price: null },
      { id: 10, title: "Foccacia de Ajo", desc: "Ajo confitado y hierbas", img: "/assets/images/food/rm-food2.png", price: null },
    ],
  },
];


export const sabopres = [
  {
    id: "sabor1",
    title: "Jamón y Queso",
    desc: "pizza con jamón, queso y salsa de tomate",
    img: "/assets/images/food/pm-food1.png",
  },
  {
    id: "sabor2",
    title: "Pepperoni",
    desc: "pizza con pepperoni, queso y salsa de tomate",
    img: "/assets/images/food/pm-food2.png",
  },]