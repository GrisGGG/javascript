const navegacion = document.querySelector(".navegacion");

console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacios en blanco son considerados elementos

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");

card.children[1].children[1].textContent =
  "Nuevo heading desde traversing the doom";
card.children[0].src = "img/hacer3.jpg";
