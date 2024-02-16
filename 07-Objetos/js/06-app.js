//destructuring de objetos anidados

//Objetos dentro de objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
  fabricacion: {
    pais: "china",
  },
};

const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

console.log(producto);
console.log(informacion);
console.log(pais);
