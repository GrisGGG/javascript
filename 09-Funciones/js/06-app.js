//parámetros por default

function saludar(nombre = "Desconocido", apellido = "") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Guadalupe", "garcia");

//Si cuando mandamos a llamar a la función y esta no tiene argumentos o le falta alguno
//entonces tomara el valor que tiene el parametro
