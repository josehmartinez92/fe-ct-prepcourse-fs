function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:

    return num < 90;
  }
  console.log(menosQueNoventa(80));   // Resultado: true
console.log(menosQueNoventa(100));  // Resultado: false
console.log(menosQueNoventa(90));   // Resultado: false

module.exports = menosQueNoventa;