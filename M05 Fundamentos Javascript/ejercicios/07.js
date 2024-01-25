function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

    return typeof valor;
}

console.log(esTipoDato("Hola")); // Resultado: "string"
console.log(esTipoDato(42));      // Resultado: "number"
console.log(esTipoDato(true));    // Resultado: "boolean"
console.log(esTipoDato({}));      // Resultado: "object"

module.exports = esTipoDato;