//BREAK: Rompe la ejecución del loop

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    break;
  }
  console.log(`Numero: ${i}`);
}

//CONTINUE: Salta la siguiente linea y sigue con la ejecución del loop

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    continue;
  }
  console.log(`Numero: ${i}`);
}

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 200 },
  { nombre: "Telivisióm", precio: 300 },
  { nombre: "Tablet", precio: 450, descuento: true },
  { nombre: "Audifonos", precio: 20 },
  { nombre: "Celular", precio: 250 },
];

//USOS DEL CONTINUE
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
  }
  console.log(carrito[i].nombre);
}
