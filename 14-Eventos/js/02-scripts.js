//EVENTOS CON EL MOUSE

const nav = document.querySelector(".navegacion");

nav.addEventListener("click", () => {
  console.log("Diste click");
});

nav.addEventListener("mouseenter", () => {
  console.log("Estas sobre el navegador");
});

nav.addEventListener("mouseup", () => {
  console.log("diste click y soltaste el mouse");
});

nav.addEventListener("dbclick", () => {
  console.log("doble click");
});
