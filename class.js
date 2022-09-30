const article = {
  nom: "Macbook Pro 2021",
  fabricant: "Apple",
  prix: 3500,
  description: "Meilleur laptop du moment",
  quantiteEnStock: 670,
};

// interfaces
// classes abstraites
// surchage
// la visible




class Article {
  constructor(nom, fabricant, prix, description, quantiteEnStock) {
    this.nom = nom;
    this.fabricant = fabricant;
    this.prix = prix;
    this.description = description;
    this.quantiteEnStock = quantiteEnStock;
  }

  getNom() {
    return this.nom;
  }

  setNom(nom) {
    this.nom = nom;
  }

  getPrix() {
    return this.prix;
  }

  setPrix(prix) {
    this.prix = prix;
  }
}

class Article2 extends Article {
  constructor(
    nom,
    fabricant,
    prix,
    description,
    quantiteEnStock,
    dateFabrication
  ) {
    super(nom, fabricant, prix, description, quantiteEnStock);
    this.dateFabrication = dateFabrication;
  }
}

const macbook = new Article(
  "Macbook Pro",
  "Apple",
  3000,
  "Meilleur laptop du moment",
  45
);

const asus = new Article(
  "Asus Rog",
  "Asus",
  5000,
  "Meilleur laptop pour le graphiste",
  43
);
