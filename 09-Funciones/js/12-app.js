//Arrow function en foreach y map

const carrito = [
  { nombre: "monitor 27 p", precio: 500 },
  { nombre: "television", precio: 100 },
  { nombre: "tablet", precio: 200 },
];

const nuevoArreglo = carrito.map((producto) => {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);

carrito.forEach(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);
