/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';

fetch('https://www.el-tiempo.net/api/json/v2/municipios')
    .then((response) => response.json())
    .then((municipalities) => {
        const lugoMunicipalities = municipalities.filter(
            (mun) => mun.NOMBRE_PROVINCIA === 'Lugo'
        );

        const lugoMunNames = lugoMunicipalities.map((mun) => mun.NOMBRE);

        console.log(lugoMunNames.sort().reverse());
    })
    .catch((error) => console.error(error));
