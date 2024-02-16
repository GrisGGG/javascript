//congelar un objeto para no poderlo modificar
"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 200,
  disponible: true,
};

//use stric evita las malas practicas así que no deja que se altere el objeto
producto.disponible = false;

Object.freeze(producto); //no deja modificar ni agregar propiedades

//para saber si esta congelado
console.log(Object.isFrozen(producto));
