// {
//     nom:"Apple Macbok Pro 16 2021",
//     prix:`3500€`
// }
const articles = [
  {
    id: 1,
    nom: "Macbook Pro 16 2021",
    fabricant: "Apple",
    prix: 3500,
    description: "Meilleur laptop du moment",
    quantiteEnStock: 670,
  },
  {
    id: 2,
    nom: "Asus Rog",
    fabricant: "Asus",
    prix: 4000,
    description: "Meilleur laptop pour les graphistes",
    quantiteEnStock: 45,
  },
  {
    id: 3,
    nom: "IPhone 14 Pro Max",
    fabricant: "Apple",
    prix: 1600,
    description: "sfnsdjkf",
    quantiteEnStock: 5,
  },
];

// For classique
console.log("For classique\n=================");
for (let i = 0; i < articles.length; i++) {
  console.log(`Fabricant : ${articles[i].fabricant}`);
  console.log(`Nom : ${articles[i].nom}`);
  console.log(`Prix : ${articles[i].prix} €`);
  console.log(`Quantité en stock : ${articles[i].quantiteEnStock} €`);
  console.log("\n\n");
}

// For of
console.log("For of\n=================");
for (let article of articles) {
  console.log(`Fabricant : ${article.fabricant}`);
  console.log(`Nom : ${article.nom}`);
  console.log(`Prix : ${article.prix} €`);
  console.log(`Quantité en stock : ${article.quantiteEnStock} €`);
  console.log("\n\n");
}

// forEach
console.log("For Each\n=================");
articles.forEach((article) => {
  console.log(`Fabricant : ${article.fabricant}`);
  console.log(`Nom : ${article.nom}`);
  console.log(`Prix : ${article.prix} €`);
  console.log(`Quantité en stock : ${article.quantiteEnStock} €`);
  console.log("\n\n");
});

const article2 = articles.map((article) => {
  return {
    id: article.id,
    designation: `${article.fabricant} ${article.nom}`,
    prix: `${article.prix} €`,
  };
});

// Destrcuturation
const article3 = articles.map((article) => {
  const { id, fabricant, nom, prix } = article;
  return {
    id: id,
    designation: `${fabricant} ${nom}`,
    prix: `${prix} €`,
  };
});

// Destrcuturation v2
const article4 = articles.map(({ id, nom, fabricant, prix }) => {
  return {
    id, // id:id
    designation: `${fabricant} ${nom}`,
    prix: `${prix} €`,
  };
});
