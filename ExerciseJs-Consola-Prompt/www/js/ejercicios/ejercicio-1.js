/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función que reciba una cadena de texto y la muestre poniendo
 * el signo "–" entre cada carácter sin usar el método replace ni replaceAll.
 *
 * Por ejemplo, si tecleo "hola qué tal", deberá salir "h-o-l-a- -q-u-e- -t-a-l".
 *
 */

'use strict';

function cadena(text) {
    return text.split('').join('-');
}

console.log(cadena('carlos jose'));
