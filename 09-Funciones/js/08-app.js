//return
let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(300);

console.log(total);
