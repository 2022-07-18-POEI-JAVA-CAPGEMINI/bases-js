const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// somme avec for..of
let somme = 0;
for (let nombre of nombres) {
  somme += nombre;
}
console.log(somme);

// somme avec forEach
let somme2 = 0;
nombres.forEach((nombre) => {
  somme2 += nombre;
});

// somme avec reduce
const somme3 = nombres.reduce((somme, nombre) => {
  return somme + nombre;
}, 0);
