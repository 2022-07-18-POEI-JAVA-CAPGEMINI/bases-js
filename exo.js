const nombres = [4, 5, 6, 7, 4, 3, 3];
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
  somme += nombres[i];
}

console.log(somme);
const moyenne = somme / nombres.length;
