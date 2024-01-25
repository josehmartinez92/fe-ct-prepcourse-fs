function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

    const fechaNacimientoObjeto = new Date(fechaNacimiento);
    const añoActual = new Date().getFullYear();
  
    // Calcula la edad restando el año de nacimiento al año actual.
    const edad = añoActual - fechaNacimientoObjeto.getFullYear();
  
    // Verifica si la persona tiene 18 años o más.
    return edad >= 18;
  
}

console.log(esMayorDeEdad("2000-01-15")); // Resultado: true (si la fecha de prueba es 2000-01-15)
console.log(esMayorDeEdad("2010-03-20")); // Resultado: false (si la fecha de prueba es 2010-03-20)

module.exports = esMayorDeEdad;