/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
 *
 * - Muestra el objeto por medio de un "console.log".
 *
 * - Modifica el valor de la propiedad color y agrega la propiedad año de
 *   matriculación.
 *
 * - Utiliza un "confirm" para mostrar por consola las propiedades, o los
 *   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
 *   de lo contrario, se mostrarán los valores.
 *
 */

'use strict';

const Car = {
    brand: 'Opel',
    model: 'Corsa',
    color: 'red',
};

console.table(Car);

Car.color = 'black';
Car['year'] = 1997;

console.table(Car);

if (
    confirm(
        'Para mostrar las propiedades acepta, para mostrar valores rechaza.'
    )
) {
    console.log(Object.keys(Car));
} else {
    console.log(Object.values(Car));
}
