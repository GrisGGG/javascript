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
console.log(producto);
console.log(producto.informacion);
console.log(producto.fabricacion.pais);
