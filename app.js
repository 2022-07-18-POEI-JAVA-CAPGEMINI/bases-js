// Addtion 2 nombres
function addition(nombre1, nombre2) {
  return nombre1 + nombre2;
}

const addition2 = function (nombre1, nombre2) {
  return nombre1 + nombre2;
};

console.log(addition(5, 6));
console.log(addition2(11, 12));

function calculerLaSommeDuTableau(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

const monTableau = [2, 3, 4, 5, 6];
console.log(calculerLaSommeDuTableau(monTableau));
