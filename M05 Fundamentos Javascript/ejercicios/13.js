function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:

    return x === y;
 
}

console.log(sonIguales(5, 5));   // Resultado: true
console.log(sonIguales("abc", "xyz"));  // Resultado: false
console.log(sonIguales(true, false));    // Resultado: false

module.exports = sonIguales;