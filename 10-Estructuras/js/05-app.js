//switch

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    pagar();
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago}`);
  default:
    console.log("Aún no has seleccionado método de pago");
    break;
}

function pagar() {
  console.log("pagando...");
}
