const producto = "Monitor de 20 pulgadas";
//Remplaza texto
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

//cortar text0 (iniicio, final)
console.log(producto.slice(0, 10)); // de la posicion 0 al 10
console.log(producto.slice(8)); //de la posicion 8 al fin
console.log(producto.slice(2, 1)); //no corta nada

//Alternativa de slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //Esta es la diferencia con slice aqui intercambia los valores para que estos si puedan cortar algo

//obtener el primer elemento de una cadena de texto
const nombreUsuario = "Guadalupe";
console.log(nombreUsuario.charAt(0));
