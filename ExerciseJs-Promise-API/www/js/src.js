'use strict';

// setTimeout
setTimeout(() => console.log('Esto tarda 3 segundos'), 3000);

let seconds = 1;

// setInterval
const timer = setInterval(() => {
    console.log(seconds++);
}, 1000);

// Limpiamos el intervalo anterior.
setTimeout(() => clearInterval(timer), 5000);

console.log('Me ejecuto antes que el código asíncrono');
