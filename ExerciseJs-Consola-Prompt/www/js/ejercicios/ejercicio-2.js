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

console.warn('EJERCICIO EN FUNCTION BUSCAR LA LETRA');

let letras = [];

function buscador(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === 'r') {
            letras.push(i);
        }
    }

    console.log(letras);
}

buscador('Tres tristes tigres tragan trigo en un trigal.');

console.warn('EJERCICIO SIN FUNCION BUSCAR LA LETRA');

const text = 'Tres tristes tigres tragan trigo en un trigal.';
let indices = [];

for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 't') indices.push(i);
}

console.log(indices);

console.warn(' EJERCICIO CON FUNTION SUSTITUYE e por i');

function newletters(a, b) {
    let newstring = '';
    newstring = text.replaceAll(a, b);
    console.log(newstring);
}

newletters('e', 'i');

console.warn('EJERCICIO SIN FUNTION SUSTITUYE e por i');

let newstring = '';
newstring = text.replaceAll('e', 'i');
console.log(newstring);

console.warn('EJERCICIO CORTO');

console.log(text.replaceAll('e', 'i'));
