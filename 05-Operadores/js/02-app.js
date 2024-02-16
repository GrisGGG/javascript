const numero1 = 20;
const numero2 = "20";
const numero3 = 20;

//Revisar si 2 números son iguales
console.log(numero1 == numero3); //true
console.log(numero1 == numero2); //true

//Comparador extricto(verifica que el valor y el tipo de dato sean iguales)
console.log(numero1 === numero2); //false
console.log(numero1 === parseInt(numero2)); //true

//diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false
console.log(numero1 !== numero2); //true
