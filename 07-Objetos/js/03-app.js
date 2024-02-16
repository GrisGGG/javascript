//agregar eliminar propiedades /keys
const producto = {
  //keys del objeto
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};
//agregar nuevas propiedades
producto.imagen = "Imagen.jpg";

//eliminar
delete producto.disponible;

console.log(producto.nombre);
