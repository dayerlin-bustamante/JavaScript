/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';

const text = 'Tres tristes tigres tragan trigo en un trigal.';
let indices = [];

for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 't') indices.push(i);
}

console.log(indices);

console.log('SUSTITUYE e por i');

let newstring = '';
newstring = text.replaceAll('e', 'i');
console.log(newstring);
/* 
console.log(text.replaceAll('e', 'i'));
 */
