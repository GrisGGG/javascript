//recorrer un areglo
const carrito = [
  { nombre: "monitor 27 p", precio: 500 },
  { nombre: "television", precio: 100 },
  { nombre: "tablet", precio: 200 },
];

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio ${producto.precio}`);
});

//map recorre el areglo y crea uno nuevo
const nuevoArreglo = carrito.map(function (p) {
  return `${p.nombre} - Precio: ${p.precio}`;
});
