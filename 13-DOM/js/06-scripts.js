const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

console.log(encabezado.innerText); //Sí en el CSS - visibility:hidden; no lo va a encontrar
console.log(encabezado.textContent); //Si lo va a encontrar
console.log(encabezado.innerHTML); //Se trae el HTML

const nuevoHeading = "Nuevo Heading";
document.querySelector(".contenido.hero h1").textContent = nuevoHeading;
