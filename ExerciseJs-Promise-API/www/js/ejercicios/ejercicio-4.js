/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

const getProvs = async () => {
    try {
        let response = await fetch(
            'https://www.el-tiempo.net/api/json/v2/provincias'
        );

        let data = await response.json();

        const { provincias: results } = data;

        const provNames = results.map((prov) => prov.NOMBRE_PROVINCIA);

        console.log(provNames);
    } catch (error) {
        console.log(error);
    }
};

getProvs();
