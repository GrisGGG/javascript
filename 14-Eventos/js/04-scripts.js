//EVENTOS DE UN FORMULARIO

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {});

function validarFormulario(e) {
  e.preventDefault(); //prevenir la accion que realizaria el formulario
  console.log(e);
  console.log(e.target.method);
}
