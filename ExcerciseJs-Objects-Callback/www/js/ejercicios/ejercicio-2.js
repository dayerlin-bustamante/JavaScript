/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado un array de frutas, genera un nuevo objeto en el que cada fruta pase a ser una
 * nueva propiedad del objeto. El valor asignado a esta propiedad debe ser el nº de veces
 * que la fruta se repite en el array.
 *
 *      const fruitBasket = ['naranja', 'naranja', 'limón', 'pera', 'limón', 'plátano', 'naranja'];
 *
 * Para el array anterior, el objeto resultante debería ser:
 *
 *      const fruits = {
 *          naranja: 3,
 *          limón: 2,
 *          pera: 1,
 *          plátano: 1
 *      };
 */

'use strict';

const fruitBasket = [
  'naranja',
  'naranja',
  'limón',
  'pera',
  'limón',
  'plátano',
  'naranja',
];

// Creamos un objeto donde iremos almacenando las frutas y sus cantidades.

const objFruits = {};

// Recorremos el array de frutas.

for (const i of fruitBasket) {
  // Comprobamos si la fruta actual existe dentro del objeto que hemos creado en el primer paso.
  if (i in objFruits) {
    // Si existe aumentamos en +1 la cantidad.
    objFruits[i]++;
  } else {
    // Si no existe creamos la propiedad y le asignamos como valor el 1.
    objFruits[i] = 1;
  }
}

console.table(objFruits);

console.warn('CON FOR');

for (i = 0; i < fruitBasket.lenght; i++) {
  if (i in fruitBasket) {
    objFruits[i]++;
  } else {
    objFruits[i] = 1;
  }
}
