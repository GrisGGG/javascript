//funciones en objetos y accedeer a sus valores
const nombre = "hola";
const precio = 20;
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    ); //this se refiere al contexto dentro del objeto
  }, //Sí no colocaramos this, imprimiria las las variables de hasta arriba
};

producto.mostrarInfo();
