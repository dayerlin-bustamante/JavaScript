/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un programa que simule las tiradas de un dado:
 *
 *      - El dado debe generar en cada tirada un valor entre 1 y 6 (incluídos).
 *
 *      - En cada tirada mostrar el valor del dado y el total acumulado. Por ejemplo:
 *        "Tirada nº 4: ha salido un 6, tienes un total de 15 puntos"
 *
 *      - Cuando el total de tiradas supere o iguale los 100 puntos muestra
 *        un mensaje indicando que se han alcanzado los 100 puntos y que el juego
 *        ha finalizado.
 *
 */

'use strict';

let total = 0;

function tirada(num) {
    for (let i = 1; i <= num; i++) {
        let dado = Math.ceil(Math.random() * 6);
        console.log(`esta es tu tirada ${i} y sacaste un ${dado}`);
        total += dado;
        console.log(`Tienes un total de ${total}`);

        if (total >= 100) {
            console.warn('se han alcanzado los 100 puntos');
            return 'Juego Finalizado';
        }
    }
}

console.log(tirada(30));

/* let lanzada = 0;
let puntaje = 0;

while (puntaje < 100) {
    let dado = Math.ceil(Math.random() * 6);
    puntaje += dado;
    lanzada++;
    console.log(
        `Tirada nº ${lanzada}: ha salido un Ç${dado}, tienes un total de ${puntaje} puntos`
    );
}

console.log('TERMINO EL JUEGO');
 */
