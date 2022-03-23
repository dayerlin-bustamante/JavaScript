/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que reciba como parámetro un array cualquiera y retorne
 * otro array con los elementos del primero en orden inverso.
 *
 * ¡No vale utilizar el método "reverse"!
 *
 */

'use strict';

// function newArray(arr) {
//     /* EL PRIMERO ES EL FIJO Y EL SEGUNDO EL QUE VA ROTANDO */
//     let n = arr.sort(function (a, b) {
//         return b - a;
//     });

//     return n;
// }

// console.log(newArray([3, 5, 8, 12, 456, 345]));

const colors = ['azul', 'naranja', 'rojo', 'amarillo'];
const reverseColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reverseColors.push(colors[i]);
}
console.log(reverseColors);

console.table(reverseColors);
