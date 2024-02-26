//FOR OF

const pendientes = ["tarea", "comer", "proyecto", "estudiar"];

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 200 },
  { nombre: "Telivisióm", precio: 300 },
  { nombre: "Tablet", precio: 450, descuento: true },
  { nombre: "Audifonos", precio: 20 },
  { nombre: "Celular", precio: 250 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(producto.nombre);
}
