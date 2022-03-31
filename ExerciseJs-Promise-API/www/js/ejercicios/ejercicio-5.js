/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

const getMun = async () => {
    try {
        let response = await fetch(
            'https://www.el-tiempo.net/api/json/v2/municipios'
        );

        let data = await response.json();

        const lugoMunicipalities = data.filter(
            (mun) => mun.NOMBRE_PROVINCIA === 'Lugo'
        );

        const lugoMunNames = lugoMunicipalities.map((mun) => mun.NOMBRE);

        console.log(lugoMunNames.sort().reverse());
    } catch (error) {
        console.log(error);
    }
};

getMun();
