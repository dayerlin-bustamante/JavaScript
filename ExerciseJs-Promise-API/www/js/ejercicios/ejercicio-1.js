/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "alarm" que reciba como argumento un número de
 * segundos.
 *
 * La función deberá mostrar por consola una cuenta atrás hasta llegar
 * a 0, en ese momento muestra un mensaje que indique que la alarma está
 * sonando.
 *
 */

'use strict';

let i = 5;
const time = setInterval(() => {
    console.log(i--);

    if (i === 0) {
        alert('La alarma está sonando.');
        return;
    }
}, 1000);

console.log(time);

// EN FUNCTION

function alarm(sec) {
    // Declaras la variable de Setinterval dentro de fuction
    const interval = setInterval(() => {
        if (sec > 0) {
            console.log(sec--);
        } else {
            clearInterval(interval);
            console.log('ALARM!!!');
        }
    }, 1000);
}

console.log(alarm);
