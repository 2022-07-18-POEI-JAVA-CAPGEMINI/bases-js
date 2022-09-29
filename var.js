// Mauvaises pratiques

// Cas 1 : Hoisting
console.log("Pays : ", pays);
var pays = "France";

// Accède à i en dehors de sa portée

// Cas 2 : Problème de portée
for (var i = 1; i <= 10; i++) {
  console.log("Dans la boucle : ", i);
}
console.log("En dehors la boucle : ", i); //problème

// Cas 3
if (true) {
  let pays = "France";
  console.log("Pays(dans IF) : ", pays);
}
console.log("Pays(En dehors de IF) : ", pays); //problème
