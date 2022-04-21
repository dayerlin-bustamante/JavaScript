/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';

alert(
    'Hola hay una bomba en tu casa, decifra el codigo de desactivacion entre el 1 y el 6 para salvarte'
);

function bomba(limit, bombCode) {
    alert(`Tendras solo ${limit} intentos, Buena Suerte`);
    for (let i = 1; i <= limit; i++) {
        let passUsuario = Number(prompt(` Intento ${i} Ingrese la contraseña`));

        if (passUsuario === bombCode) {
            alert('Vives un dia mas');
            return;
        } else if (passUsuario !== bombCode) {
            alert(`Contraseña incorrecta`);
        }
    }
    alert('BOOMMM');
}

bomba(Math.ceil(Math.random() * 4), Math.ceil(Math.random() * 6));
