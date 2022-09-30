const fruits = ["oranges", "pommes", "mangues", "ananas", "bananes"];

// Boucle for classique
// for (let i = 0; i < fruits.length; i++) {
//   console.lo(fruits[i]);
// }


const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somme = 0;

// forEach
// fruits.forEach(function (fruit) {
//   console.log(`Foreach : ${fruit}`);
// });

// Equivalent Java
// List<String> fruits=new ArrayList();
// fruits.add("pommes");
// fruits.add("bananes");
// fruits.stream().forEach((fruit)->{
//   System.out.printf("Foreach : %s",fruit)
// })

fruits.forEach((fruit) => {
  console.log(`Foreach : ${fruit}`);
});

// Avec index
fruits.forEach((fruit, i /*, tb*/) => {
  console.log(tb);
  console.log(`${i} => ${fruit}`);
});

// caclul de la somme
let somme2 = 0;
nombres.forEach((nombre) => {
  somme2 += nombre;
});
