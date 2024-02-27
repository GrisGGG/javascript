//EVENTOS AL DAR SCROLL

//los eventos de scroll aparecen dentro de window

window.addEventListener("scroll", () => {
  const scrollX = window.scrollY;
  console.log(scrollX);
});

window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premiun");
  //detecta cuando el elemento ya esta visible en pantalla y manda un objeto con datos
  const ubicacion = premium.getBoundingClientRect();

  if (ubicacion.top < 768) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("aún no, da más scrol");
  }
});
