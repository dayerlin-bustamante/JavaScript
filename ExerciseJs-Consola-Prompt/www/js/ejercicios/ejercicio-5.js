/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético inverso, ¿método "sort"? ;)
 *
 * Resultado esperado: ["sit", "lorem", "ipsum", "elit", "dolor", "consectetur", "amet", "adipisicing"]
 *
 */

'use strict';

const text = '¡Lorem Ipsum Dolor Sit Amet, Consectetur Elit Adipisicing!';
let word = [];

word = text
    .toLowerCase()
    .replace(',', '')
    .replace('!', '')
    .replace('¡', '')
    .split(' ')
    .sort();

word = word.reverse();

console.log(word);

/* 
console.log(word.reverse());
 */

/* 
const text = '¡Lorem Ipsum Dolor Sit Amet, Consectetur Elit Adipisicing!';

const word = text
    .toLowerCase()
    .replace(',', '')
    .replace('!', '')
    .replace('¡', '');

const arr = word.split(' ').sort().reverse();

console.log(arr);
 */
