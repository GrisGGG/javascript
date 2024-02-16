//copiar dos objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medidas: "1m",
};

//crea un solo objeto con assign
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//spread operator o rest operator
const resultado2 = { ...producto, ...medidas };
