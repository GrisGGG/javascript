const producto = {
  //keys del objeto
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};
//aunque esta declarado con una costante si se puede "manipular"
producto.disponible = false;

delete producto.precio;
console.log(producto);
