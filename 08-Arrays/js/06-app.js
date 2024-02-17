//eliminar

const carrito = [];

const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 600,
};
const producto2 = {
  nombre: "celular",
  precio: 450,
};
const producto3 = {
  nombre: "teclado",
  precio: 50,
};

let resultado;

resultado = [...carrito, producto]; //agrega producto al final
resultado = [...resultado, producto2]; //agrega producto2 al final
resultado = [producto3, ...resultado]; //agrega el producto al inicio

//para eliminar del final de arreglo
// resultado.pop();

// console.table(resultado);

// //eliminar del inicio
// resultado.shift();

resultado.splice(1, 1); //empieza a cortar a partir de la pocision uno, 1 elemento
console.log(resultado);
console.table(resultado);
