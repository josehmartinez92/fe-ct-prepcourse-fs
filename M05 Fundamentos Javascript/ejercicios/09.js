function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:

    return valor === null || valor === undefined;
}

console.log(esNuloOIndefinido(null));       // Resultado: true
console.log(esNuloOIndefinido(undefined));  // Resultado: true
console.log(esNuloOIndefinido("Hola"));     // Resultado: false
console.log(esNuloOIndefinido(42));         // Resultado: false

module.exports = esNuloOIndefinido;