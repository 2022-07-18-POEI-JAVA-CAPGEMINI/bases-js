// Création d'un tableau vide
const monTableau = [];
monTableau.push(1);
monTableau.push(2);
// const monTableau2 = new Array();

// Déclaration et initialisation
const fruits = ["pommes", "mangues", "bananes", "oranges"];
// Sans boucle
// console.log(`fruits[0] : ${fruits[0]}`);
// console.log(`fruits[1] : ${fruits[1]}`);
// console.log(`fruits[2] : ${fruits[2]}`);
// console.log(`fruits[3] : ${fruits[3]}`);

// Avec une boucle for
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits[${i}] : ${fruits[i]}`);
}

fruits.push("citrons");

// Copie de la référence et non du tableau
const fruits2 = fruits;
console.log(fruits);

// Créer un nouveau tableau à partir d'un tableau existant
// sans copier la référence
const fruits3 = [...fruits];
