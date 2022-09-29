// Boucle for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Boucle while : v1
// const codePin = parseInt(prompt("Définir un code PIN: "));

// let codePinATester;
// codePIN : 1234
// codePinATester : 442
// while (codePinATester !== codePin) {
//   codePinATester = parseInt(
//     prompt("Veuillez entrer un code pour débloquer l'appareil : ")
//   );
//   if (codePinATester !== codePin) {
//     alert("Code PIN erroné, veuillez recommencer.");
//   } else {
//     alert("Bienvenue!!!!!!!");
//   }
// }

//1. Limiter les essais
// 2. Entrer que des chiffres
// 3. Duplication du test(Faire un premier test en dehors de la boucle)
// Boucle while : v1
// const codePin = parseInt(prompt("Définir un code PIN: "));

// let codePinATester;
// while (true) {
//   codePinATester = parseInt(
//     prompt("Veuillez entrer un code pour débloquer l'appareil : ")
//   );
//   if (codePinATester !== codePin) {
//     alert("Code PIN erroné, veuillez recommencer.");
//   } else {
//     alert("Bienvenue!!!!!!!");
//     break;
//   }
// }

// v3
const codePin = parseInt(prompt("Définir un code PIN: "));
let nombreEssais = 3;

let codePinATester;
while (true) {
  codePinATester = parseInt(
    prompt("Veuillez entrer un code pour débloquer l'appareil : ")
  );
  nombreEssais--;
  if (codePinATester === codePin) {
    alert("Bienvenue!!!!!!!");
    break;
  }
  if (nombreEssais === 0) {
    alert(
      "Téléphone bloqué, car vous avez entrez 3 fois de mauvaises valeurs."
    );
    break;
  }
  alert("Code PIN erroné, veuillez recommencer.");
  alert(`${nombreEssais} tentative(s) restante(s).`);
}
