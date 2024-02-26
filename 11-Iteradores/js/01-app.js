for (let i = 0; i <= 10; i++) {
  console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 200 },
  { nombre: "Telivisióm", precio: 300 },
  { nombre: "Tablet", precio: 450 },
  { nombre: "Audifonos", precio: 20 },
  { nombre: "Celular", precio: 250 },
];

for (let i = 0; carrito.length; i++) {
  console.log(carrito[i].nombre);
}
