//métodos añadir elementos al final o al inicio
//forma imperativa yaa uqe modifica la variable original

const carrito = [];

const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 600,
};
const producto2 = {
  nombre: "celular",
  precio: 450,
};

//agregar al final
carrito.push(producto);
carrito.push(producto2);

console.log(carrito);

const producto3 = {
  nombre: "teclado",
  precio: 50,
};

//agregar al principio
carrito.unshift(producto3);

console.log(carrito);

//forma declarativa de agregar al inicio o al final
//no modifica a la variable si no que crea una nueva

let resultado;

resultado = [...carrito, producto]; //agrega producto al final
resultado = [...resultado, producto2]; //agrega producto2 al final
resultado = [producto3, ...resultado]; //agrega el producto al inicio

console.table(resultado);
