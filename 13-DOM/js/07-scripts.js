//Cambiando el CSS con Javascript

const encabezado = document.querySelector("h1");

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
console.log(card);

card.classList.add("nueva-clase", "segunda-clase");
card.classList.remove("card");
console.log(card.classList);
