const producto = "       Monitor de 20 pulgadas";
console.log(producto.length);

//Eliminar spacios blancos del inicio
console.log(producto.trimStart());

//Eliminar del final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());

console.log(producto.trim());
