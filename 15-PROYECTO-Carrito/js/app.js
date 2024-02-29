const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody ");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListenners();
function cargarEventListenners() {
  //Cuando agregas un curso presionando "Agregar al Carrito"
  listaCursos.addEventListener("click", agregarCurso);

  carrito.addEventListener("click", eliminarCurso);
}

//Funciones

function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    //eliminamos del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => cursoId !== curso.id);
    carritoHTML(); //iterar sobre el carrito y mostrar su html
  }
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//Lee el contenido del html que se clickeo
function leerDatosCurso(curso) {
  console.log(curso);

  const InfoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === InfoCurso.id);
  if (existe) {
    //actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === InfoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
  } else {
    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, InfoCurso];
  }
  carritoHTML(articulosCarrito);
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${imagen}" width="100"/></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
    contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML(contenedor) {
  //forma lenta de limpiar html
  //   contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
