//como se comunican las funciones
function iniciarApp() {
  console.log("Iniciando app");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("desde la 2da funcion");
  usuarioAutenticado();
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere");
  console.log("usuario autenticado exitosamente");
}
