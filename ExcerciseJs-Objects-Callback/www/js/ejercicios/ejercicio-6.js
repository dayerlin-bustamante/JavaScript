/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza el método filter para dejar pasar únicamente los nº
 * impares y mayores que 5.
 *
 */

'use strict';

const nums = [1, 5, 23, 4, 12, 45, 78, 8, 9, 10, 11];

const result = nums.filter((num) => num > 5 && num % 2 !== 0);

console.log(result);
