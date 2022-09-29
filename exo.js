/**
 * Écrire un programme Javascript qui demande l’âge d’un enfant. Ensuite, il l’informe de sa catégorie :

« Poussin » de 7 à 9 ans

« Pupille » de 10 à 11 ans

« Benjamin » de 12 à 13 ans

« Minime » de 14 à 15 ans

« Cadet » 16 à 17 ans

 */
const age = parseInt(prompt("Votre age: "));
if (typeof age !== "number") {
  console.log("Age invalid.");
} else {
  if (age >= 7 && age <= 9) {
    console.log("Poussin.");
  } else if (age > 9 && age <= 11) {
    console.log("Pupille.");
  } else if (age > 11 && age <= 13) {
    console.log("Benjamin.");
  } else if (age > 13 && age <= 15) {
    console.log("Minime.");
  } else if (age > 15 && age <= 17) {
    console.log("Cadet.");
  } else {
    console.log("Catégorie introuvable.");
  }
}
