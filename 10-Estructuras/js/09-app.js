//OPERADOR TERNARIO
const autenticado = true;
const puedePagar = false;

console.log(
  autenticado || puedePagar ? "Si puede pagar" : "No esta autenticado"
);

console.log(
  autenticado
    ? puedePagar
      ? "si esta autenticado y puede pagar"
      : "si esta autenticado no puede pagar"
    : "No esta autenticado"
);
