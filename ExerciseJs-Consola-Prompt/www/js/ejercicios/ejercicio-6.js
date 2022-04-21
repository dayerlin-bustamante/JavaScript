/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';

const text = 'Hola que (tal)';

function getContet(str) {
    //Localizamos la posicion de los parentesis
    const leftPar = str.indexOf('(');
    const rightPar = str.lastIndexOf(')');
    //Si existe ambos parentesis
    if (leftPar > -1 && rightPar > -1) {
        return str.slice(leftPar + 1, rightPar);
    }
    // Si solo tenemos el parentecis de apertura
    else if (leftPar > -1) {
        return str.slice(leftPar + 1);
    }
    // Si solo tenemos el parentesis de cierre
    else if (rightPar > -1) {
        return str.slice(0, rightPar);
    }

    // else {
    //     return str.slice(0, rightPar);
    // }

    return;
}

console.log(getContet(text));
