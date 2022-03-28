'use strict';

const Dog = {
    name: 'Firulais',
    colors: ['negro', 'blanco', 'marrón'],
    sayHello: function () {
        console.log(`Soy ${Dog.name}! Guau, guau! `);
    },
};

// Copia poco profunda - Spread operator (...)
const DogClon_1 = {
    ...Dog,
    year: 2019,
};

// Copia profunda - Paso 1: convertir el objeto a texto JSON.
const stringifiedDog = JSON.stringify(Dog);

// Copia profunda - Paso 2: convertir el texto JSON nuevamente a
// un objeto en memoria JavaScript.
const DogClon_2 = JSON.parse(stringifiedDog);

// Pusheamos el color amarillo en el clon 2.
DogClon_2.colors.push('amarillo');

// Comprobamos que en el objeto principal no hayamos pusheado nada.
console.log(DogClon_2);

// La copia profunda la podemos simplificar en un paso.
// const DogClon_2 = JSON.parse(JSON.stringify(Dog));
