//objeto literal
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};

//El objeto constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor de 24 pulgadas", 400);
console.log(producto2);

const producto3 = new Producto("Televisión", 430);
console.log(producto3);
