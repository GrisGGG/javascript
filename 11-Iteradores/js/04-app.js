let i = 0; //Inicializar el while

while (i < 10) {
  //condición

  console.log(`Numero ${i}`);

  i++; //incremento
}
//esto solo imprimira hasta 9

while (i < 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i} BUZZ`);
  }
  i++;
}
