const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//FIND: Regresa el valor que cumple una condición, regresa el
//primer elemento que cumpla la condiciónS
const resultado = carrito.find((producto) => producto.precio === 100);
