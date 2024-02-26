const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Suma los datos de precio de todos los elementos del carrito
//los dos parametros que ocupan es el valor anterior y elvalor que se va a sumar
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);
