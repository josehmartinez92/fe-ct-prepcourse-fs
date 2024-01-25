function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
    const tasaDeCambio = 1.20;
  
    const valorEnDolares = euro * tasaDeCambio;
  
    return valorEnDolares;
    
}
const resultado = deEuroAdolar(400);
    console.log(resultado);
module.exports = deEuroAdolar;
