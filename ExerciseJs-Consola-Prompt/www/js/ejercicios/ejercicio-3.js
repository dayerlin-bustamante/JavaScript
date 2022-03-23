/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';

function chainText(text) {
    text = text.split('').reverse().join('');
    console.log(text);
}

console.log(chainText('camiseta rojas'));
