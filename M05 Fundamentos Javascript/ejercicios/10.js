function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    const fechaObj = new Date(fecha);

    const esValida = !isNaN(fechaObj.getTime()) && fecha === fechaObj.toISOString().split('T')[0];
  
    return esValida;
}
console.log(esFechaValida("2022-01-30"));
console.log(esFechaValida("2022/02/26"));
module.exports = esFechaValida;