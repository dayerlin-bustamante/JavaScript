'use strict';

// Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

// Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

// Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

function rot13(str) {
  let inicioLetras = 'abcdefghijklm'.toUpperCase();
  let finalLetras = 'nopqrstuvwxyz'.toUpperCase();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (inicioLetras.indexOf(str[i]) >= 0) {
      result += finalLetras[inicioLetras.indexOf(str[i])];
    } else if (finalLetras.indexOf(str[i]) >= 0) {
      result += inicioLetras[finalLetras.indexOf(str[i])];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(rot13('SERR PBQR PNZC'));
