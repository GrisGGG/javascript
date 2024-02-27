//EVENTOS DEL TECLADO
const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", () => {
  console.log("escribiendo");
});

busqueda.addEventListener("keyup", () => {
  console.log("presionas pero sueltas una tecla");
});

busqueda.addEventListener("blur", () => {
  console.log("entrar al input y salir");
});

busqueda.addEventListener("copy", () => {
  console.log("copiar");
});
busqueda.addEventListener("paste", () => {
  console.log("pegar");
});
busqueda.addEventListener("cut", () => {
  console.log("cortar");
});
busqueda.addEventListener("input", () => {
  console.log("cuando realizar cualquier de los otros eventos excepto blur");
});
busqueda.addEventListener("input", (e) => {
  console.log(e.type); //te dice sobre que elemento estas escribiendo
});
busqueda.addEventListener("input", (e) => {
  console.log(e.target.value); //te dice que estas escribiendo
});

busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("Fallo la validación");
  }
});
