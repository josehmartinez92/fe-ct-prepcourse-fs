function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:

    return num % 2 === 0;
  
}
console.log(esPar(4));   // Resultado: true
console.log(esPar(7));   // Resultado: false
console.log(esPar(0));   // Resultado: true

module.exports = esPar;
