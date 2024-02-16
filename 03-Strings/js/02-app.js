const producto = "Monitor de 20 pulgadas";

console.log(producto);

//conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

//Busca si existe la palabra y devuelve la posición en la que la encontro
console.log(producto.indexOf("Monitor")); //0

//Devuelve true o false si encuentra algún valor estrictamente igual
console.log(producto.includes("Monitor")); //true
console.log(producto.includes("Tablet")); //false
console.log(producto.includes("Pulgadas")); //false distingue minusculas de mayúsculas
