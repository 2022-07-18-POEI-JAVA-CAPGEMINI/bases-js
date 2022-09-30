const obj = {
  prenom: "Christian",
  nom: "Lisangola",
  age: 19,
  nomComplet() {
    return `${this.prenom} ${this.nom}`;
  },
};

console.log(`Prenom : ${obj.prenom}`);
console.log(`Nom : ${obj.nom}`);
console.log(`Nom complet : ${obj.nomComplet()}`);

const article = {
  nom: "Macbook Pro 2021",
  fabricant: "Apple",
  prix: 3500,
  description: "Meilleur laptop du moment",
  quantiteEnStock: 670,
};
