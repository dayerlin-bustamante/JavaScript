/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */

'use strict';

function Burbuja() {
    const lista = [5, 4, 3, 2, 1];
    let n, i, k, aux;
    n = lista.length;

    // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja

    console.log(lista);
    for (k = 1; k < n; k++) {
        for (i = 0; i < n - k; i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}

console.log(Burbuja());
