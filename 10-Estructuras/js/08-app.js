const autenticado = true;

if (autenticado) {
  console.log("El usuario esta autenticado");
}
const puntaje = 450;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("excelente");
    return;
  }
  if (puntaje > 300) {
    console.log("buen puntaje");
    return;
  }
}

revisarPuntaje();
