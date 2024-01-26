function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do {
    if (mes < 1 || mes > 12) {
      console.log("Mes no válido. Ingrese un número entre 1 y 12.");
      
      return;
    }
  } while (false); 

  switch (mes) {
    case 1:
    case 3:
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12: 
      return 31;
    case 4: 
    case 6: 
    case 9: 
    case 11: 
      return 30;
    case 2:
      return 28; 
    default:
      return "Error";
  }
}
console.log(diasEnMes(5));
module.exports = diasEnMes;
