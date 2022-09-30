const nombres = [2, 3, 4, 5, 6, 7];
const nombresAuCarre = [];

for (let i = 0; i < nombres.length; i++) {
  nombresAuCarre.push(Math.pow(nombres[i], 2));
}

// const temp=[]
// itérer sur le tableau fourni
// Pour chaque elements, la valeur retournée est ajouté au tableau créé en
let nbCarre = nombres.map((nombre) => {
  return Math.pow(nombre, 2);
});
