/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

function palindromo(text) {
    text = text.replaceAll(' ', '').toLowerCase();
    console.log(text);

    const newText = text.split('').reverse().join('');
    console.log(newText);

    if (text === newText) {
        return true;
    }
    return false;
}

console.log(palindromo('oso'));
