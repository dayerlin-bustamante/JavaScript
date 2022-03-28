/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';


















// /**
//  * Función que genera un valor entero aleatorio entre 1 y un valor
//  * máximo que pasamos como argumento.
//  *
//  * @param {Number} max - Valor máximo para el número aleatorio.
//  */
// const getRandom = (max) => Math.ceil(Math.random() * max);

// /**
//  *
//  * @param {Number} limit - Número de intentos que tendrá el usuario.
//  * @param {Number} bombCode - Código de desactivación de la bomba.
//  * @returns Boolean
//  */
// function deactivateBomb(limit, bombCode) {
//     // Damos "limit" intentos al usuario para desactivar la bomba.
//     for (let i = limit; i > 0; i--) {
//         // Permitimos al usuario insertar una contraseña.
//         const userPass = Number(
//             prompt(`Intento ${i} - Inserte una contraseña:`)
//         );

//         // Comprobamos si el usuario ha acertado.
//         if (bombCode === userPass) return true;

//         // Mostramos un mensaje indicando que ha fallado el inteno.
//         alert('¡Incorrecto!');
//     }

//     // Si el bucle for finaliza quiere decir que el usuario no ha acertado
//     // la contraseña ninguna vez por lo tanto...
//     return false;
// }

// // Llamamos a la función de la bomba y almacenamos lo que retorna en una variable.
// const win = deactivateBomb(6, getRandom(10));

// // Si el usuario ha acertado...
// if (win) {
//     alert('¡Vives un día más!');
// } else {
//     alert('¡BOOOOOOOM!');
// }
