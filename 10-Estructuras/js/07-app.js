//OR - Con una condición se ejecuta la condición
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (
  efectivo > totalAPagar || //efectivo es mayor que totalapagar O
  credito > totalAPagar || //credito es mayor que totalapagar
  disponible > totalAPagar
) {
  console.log("Si podemos pagar");
} else {
  console.log("fondos insucicientes");
}
