//destructurin con objetos
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};
const { nombre } = producto;
console.log(nombre);

//destructurin con arreglos

const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;

const [uno, , tres, , cinco] = numeros;

const [unox, ...tercerox] = numros; //extrae la primera pocision y lo demas lo guarda en un arreglo llamadao tercero
