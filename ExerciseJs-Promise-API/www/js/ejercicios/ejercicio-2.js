/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then((response) => response.json())
    .then((provincias) => {
        // .provincias es la propiedad del objeto la cual voy a recorrer
        const results = provincias.provincias;

        for (const char of results) {
            console.log(char.NOMBRE_PROVINCIA);
        }
    })
    .catch((error) => console.log(error));
