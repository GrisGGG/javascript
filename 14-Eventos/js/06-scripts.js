//EVENT BUBBLING

//PROPAGACION DE EVENTOS
const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

/**
 * al aplicar un evento a un elemento este se propaga hacia
 * los elementos padres o hijos de estos, podemos detenerlos
 * con la función stopProoagation
 */

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en card");
});

infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info");
});
titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo");
});
