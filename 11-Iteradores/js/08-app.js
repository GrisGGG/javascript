const automovil = {
  modelo: "Camaro",
  year: 1969,
  motor: "6.0",
};

//Imprime las propiedades del objeto
for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`${llave}: ${valor}`);
}
