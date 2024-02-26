const pendientes = ["tarea", "comer", "proyecto", "estudiar"];

//foreach recorre el arreglo
pendientes.forEach((pendiente) => console.log(pendiente));

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 200 },
  { nombre: "Telivisióm", precio: 300 },
  { nombre: "Tablet", precio: 450, descuento: true },
  { nombre: "Audifonos", precio: 20 },
  { nombre: "Celular", precio: 250 },
];

//map recorre el arreglo y crea uno nuevo
const nuevoArreglo2 = carrito.map((producto) => console.log(producto.nombre));
