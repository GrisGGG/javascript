//Concatenar Strings
const producto = "Monitor de 20 pulgadas";
const precio = "30 usd";

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

console.log(producto + " con un precio de " + precio);
console.log(producto, " con un precio de ", precio);

//template strings
console.log(`El ${producto} tiene un precio de ${precio}`);
