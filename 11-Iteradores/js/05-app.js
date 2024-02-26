//DO WHILE

let i = 0;

do {
  console.log(`numero ${i}`);

  i++; //Incremento
} while (i < 100); //condición

//El código al menos se ejecuta una vez ya despues depende de la condición

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i} BUZZ`);
  }
  i++; //Incremento
} while (i < 100); //condición
