//Diferencia entre estas funciones.

//Declaración de Función || hoisting se puede llamar antes de declararse
function sumar() {
  console.log(2 + 2);
}

sumar();

//Expresión de Función || esta función es tomada como una variable

const sumar2 = function () {
  console.log(3 + 3);
};
