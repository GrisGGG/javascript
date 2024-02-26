const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

//concatenar dos arreglos
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

//spread operator
const resultado2 = [...resultado, ...meses3];

console.log(resultado2);
