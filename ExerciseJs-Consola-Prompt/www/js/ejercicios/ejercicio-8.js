/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Algoritmo que calcule la letra del DNI:
 *
 * - El número debe ser entre 10000000 y 99999999.
 *
 * - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
 *   ¿Qué ocurre cuando obtenemos un valor NaN? JavaScript lo considera un número. Busca una
 *   forma de comprobar que el valor es realmente numérico.
 *
 * - Debemos calcular el resto de la división entera entre el DNI y
 *   el número 23.
 *
 * - Según el resultado, de 0 a 22, le corresponderá una letra de las
 *   siguientes:  [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E]
 *
 */

'use strict';

const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
];

function letra(num) {
    for (let i = 0; i < num; i++) {
        let DNI = Number(prompt('Dime tu DNI'));

        if (
            DNI < 10000000 ||
            DNI > 99999999 ||
            (Number.isNaN(DNI) && i === num)
        ) {
            alert('Incorrecto');
        } else if (DNI > 10000000 && DNI < 99999999) {
            DNI = DNI % 23;
            let word = letters[DNI];
            alert(word);
            return 'Muchas Gracias';
        }
    }
    return 'Acabastes tus intentos';
}

alert(letra(3));

/* 
function letra(num) {
    let DNI = Number(prompt('Dime tu DNI'));

    for (let i = 0; i < num; i++) {
        if (DNI > 10000000 && DNI < 99999999) {
            DNI = DNI % 23;
            let word = letters[DNI];
            alert(word);
            return 'Muchas Gracias';
        } else if (DNI < 10000000 || (DNI > 99999999 && i === num)) {
            alert('Incorrecto Introduce de nuevo tu DNI');
        }
    }
} */
