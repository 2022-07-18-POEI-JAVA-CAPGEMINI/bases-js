const fruits = ["oranges", "pommes", "mangues", "ananas", "bananes"];

// Boucle for classique
// for (let i = 0; i < fruits.length; i++) {
//   console.lo(fruits[i]);
// }

//for of
// for(String fruit:fruits){
//   System.out.print(fruit)
// }
for (let fruit of fruits) {
  console.log(fruit);
}

// Java
// int[] nombres={1,2,3,4,5,6,7,8}
// for(int nombre:nombres){
//   System.out.print(fruit)
// }
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somme = 0;
for (let nombre of nombres) {
  somme += nombre;
}
console.log(somme);
