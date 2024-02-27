const btnFlotante = document.querySelector(".bbtn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo"); //this es igual a botonflotante
    this.textContent = "Idioma y Moneada";
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "X Cerrar";
  }
}
