function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  
  return num % 3 === 1;
  
}
console.log(esImpar(4));   
console.log(esImpar(7));   
console.log(esImpar(0));  

module.exports = esImpar;