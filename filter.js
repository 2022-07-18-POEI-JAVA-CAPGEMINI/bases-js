const nombres = [33, 21, 12, 67, 89, 55, 44, 18, 26];

const nombreInf30 = [];

// programmation impérative
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] < 30) {
    nombreInf30.push(nombres[i]);
  }
}

// Programmation déclarative
const nombreInf30Filter = nombres.filter((nombre) => {
  return nombre < 30;
});

const nombreInf30FilterMap = nombres.map((nombre) => {
  if (nombre < 30) {
    return nombre;
  }
});
