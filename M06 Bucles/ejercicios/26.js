function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const cadena1 = str1.toLowerCase().replace(/\s/g, '');
  const cadena2 = str2.toLowerCase().replace(/\s/g, '');

  if (cadena1.length !== cadena2.length) {
    return false;
  }

  const cadenaOrdenada1 = cadena1.split('').sort().join('');
  const cadenaOrdenada2 = cadena2.split('').sort().join('');

  return cadenaOrdenada1 === cadenaOrdenada2;
}
console.log(esAnagrama('listen', 'silent'));
module.exports = esAnagrama;
