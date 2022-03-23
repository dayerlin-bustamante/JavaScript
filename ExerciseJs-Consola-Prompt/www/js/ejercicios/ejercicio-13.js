/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Una pizerría ofrece pizzas "mitad y mitad".Cada mitad debe corresponderse a una
 * pizza de su catálogo, pero éste cambia constantemente, por lo que el número de
 * combinaciones posibles, también.
 *
 * Escribe una función que reciba el catálogo de pizzas (un array de strings) y
 * devuelva una lista de las combinaciones. Seguramente en tu primera aproximación
 * devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa,
 * barbacoa y carbonara) pero ¡son la misma pizza!
 *
 * De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no
 * sería una combinación, sino una pizza normal.
 *
 * ¿Serías capáz de solucionar eso, sin
 * añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!
 *
 * Ejemplo input:
 *
 *      [
 *          "margarita",
 *          "cuatro quesos",
 *          "prosciutto",
 *          "carbonara",
 *          "barbacoa",
 *          "tropical",
 *      ];
 *
 * Ejemplo output:
 *
 *      [
 *          "margarita y cuatro quesos",
 *          "margarita y prosciutto",
 *          "margarita y carbonara",
 *          "margarita y barbacoa",
 *          "margarita y tropical",
 *          "cuatro quesos y prosciutto",
 *          "cuatro quesos y carbonara",
 *          "cuatro quesos y barbacoa",
 *          "cuatro quesos y tropical",
 *          "prosciutto y carbonara",
 *          "prosciutto y barbacoa",
 *          "prosciutto y tropical",
 *          "carbonara y barbacoa",
 *          "carbonara y tropical",
 *          "barbacoa y tropical",
 *      ];
 *
 */

'use strict';

const menu = [
    'margarita',
    'cuatro quesos',
    'prosciutto',
    'carbonara',
    'barbacoa',
    'tropical',
];

let output = [];

function pizza(menu) {
    for (let i = 1; i < menu.length; i++) {
        output.push(menu[0] + ' y ' + menu[i]);
    }
    for (let e = 2; e < menu.length; e++) {
        output.push(menu[1] + ' y ' + menu[e]);
    }
    for (let a = 3; a < menu.length; a++) {
        output.push(menu[2] + ' y ' + menu[a]);
    }
    for (let o = 4; o < menu.length; o++) {
        output.push(menu[3] + ' y ' + menu[o]);
    }
    return output;
}

console.log(pizza(menu));

// function pizza(menu) {
//     for (let count1 = 0; count1 < menu.length; count1++) {
//         for (let count2 = count1 + 1; count2 < menu.length; count2++) {
//             if (count1 !== count2) {
//                 output.push(`${menu[count1]} y ${menu[count2]}`);
//             }
//         }
//     }
// }
