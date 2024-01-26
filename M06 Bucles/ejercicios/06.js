function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return String(num).length === 3;
}
console.log(tieneTresDigitos(456));
console.log(tieneTresDigitos(23));
console.log(tieneTresDigitos(1256));

module.exports = tieneTresDigitos;
