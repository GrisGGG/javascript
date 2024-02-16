//sellar objeto

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};

Object.seal(producto);
//Se puede modificar lo que existe pero no agregar

producto.disponible = false;

//saber si un objeto esta sellado
console.log(Object.isSealed(producto)); //true
