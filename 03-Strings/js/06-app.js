//Mostraar un texto varias veces
const texto = " en promoción".repeat(3);
const texto1 = " en promoción".repeat(2.4); //se redondea a dos

//split, dividir un string
const actividad = "Estoy aprendiendo Js Moderno";
console.log(actividad.split("c")); //Se divide cada que haya un espacio

const hobbies =
  "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript #JSMODENOCONJUAN";
console.log(tweet.split("#"));
