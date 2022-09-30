const fruits = ["pommes", "bananes", "pommes", "mangues", "ananas", "orange"];

let resultat = "";

// for classique
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "pommes") {
    resultat = fruits[i];
    break;
  }
}

// find
const resultat2 = fruits.find((fruit) => fruit === "pommes");
