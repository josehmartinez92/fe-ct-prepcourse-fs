function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  return x >= y ? x : y;
}
console.log(obtenerMayor(10, 5));
console.log(obtenerMayor(7, 7));

module.exports = obtenerMayor;
