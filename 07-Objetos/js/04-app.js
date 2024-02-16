//destructuting de objetos
const producto = {
  //keys del objeto
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};

//antes se hacia asi
// const nombre = producto.nombre;

//ahora se usa destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
