let age = 17;

if (age >= 18) {
  console.log("Grand garçon!!!");
} else {
  console.log("Petit garçon!!!");
}

// Ici, on ne compare que les valeurs, et non les types
// Pas recommandée
if (age == "17") {
  console.log("Ouii");
}

// Ici,  il s'agit d'une égalité stricte.Parce qu'on compare les types
// et les valeurs
if (age === "17") {
  console.log("Noonnn");
}

/**
 * Opérateurs de comparaison & logiques
 *   == : égalité
 *   === : égalité stricte
 *   >= : Supérieur ou égal
 *  <= : Inférieur ou égal
 *   != : Différent
 *   !== : Différence strict
 *   && : ET/AND
 *   || : OU/OR
 *   ! 
 */
