function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
    return str1.length === str2.length;
}

console.log(tienenMismaLongitud("hola", "adios"));   // Resultado: false
console.log(tienenMismaLongitud("abc", "xyz"));      // Resultado: true
console.log(tienenMismaLongitud("123", "456"));      // Resultado: true

module.exports = tienenMismaLongitud;