// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  const resultado = Math.pow(num, exponent);
  // o tambien se puede usar const resultado = num ** exponent;
  return resultado;
}
console.log(elevar(2, 3));
module.exports = elevar;