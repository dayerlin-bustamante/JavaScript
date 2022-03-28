/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   5. Obtén la suma total de todos los precios.
 *
 *   Opcional: obtén un array con las distintas marca de coches (no se pueden repetir).
 *
 */

'use strict';

const cars = [
  {
    brand: 'BMW',
    model: 'Serie 3',
    year: 2012,
    price: 30000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2018,
    price: 40000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2015,
    price: 20000,
    doors: 2,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A6',
    year: 2010,
    price: 35000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2016,
    price: 70000,
    doors: 4,
    color: 'Rojo',
    transmition: 'automatico',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2015,
    price: 25000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    price: 60000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 80000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2017,
    price: 40000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A3',
    year: 2017,
    price: 55000,
    doors: 2,
    color: 'Negro',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2012,
    price: 25000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2018,
    price: 45000,
    doors: 4,
    color: 'Azul',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2019,
    price: 90000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2017,
    price: 60000,
    doors: 2,
    color: 'Negro',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2015,
    price: 35000,
    doors: 2,
    color: 'Azul',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 3',
    year: 2018,
    price: 50000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2017,
    price: 80000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2018,
    price: 40000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2016,
    price: 30000,
    doors: 4,
    color: 'Azul',
    transmition: 'automatico',
  },
];

// 1. Obtén todos los coches de la brand Audi.

console.warn('TODOS LOS COCHES AUDIS');

const result = cars.filter((car) => car.brand[0] === 'A');
console.table(result);

// 2. Obtén una lista con todos los colores de los coches de brand BMW.

console.warn('LISTA DE TODOS LOS COLORES DE BMW');

const result2 = cars.filter((car) => car.brand === 'BMW');
console.log(result2.map((colores) => colores.color));

// 3. Obtén la media de price de los coches de brand Ford.

console.warn('MEDIA DE LOS PRECIOS DE LOS FORDS');

const result3 = cars.filter((car) => car.brand === 'Ford');
const allprices = result3.map((prices) => prices.price);
let sum = 0;
for (let i = 0; i < allprices.length; i++) {
  sum += allprices[i] / allprices.length;
}

console.log(sum);

// 4. Obtén un array con los coches de transmisión manual y de color negro.

console.warn('ARRAY MANUAL Y BLACK');

const manual = cars.filter((car) => car.transmition === 'manual');
const black = manual.filter((arr) => arr.color === 'Negro');

console.table(black);
console.table(black.map((car) => car.model));

console.warn('2da FORMA ARRAY MANUAL Y BLACK');

const manualBlack = cars.filter(
  (car) => car.transmition === 'manual' && car.color === 'Negro'
);

console.log(manualBlack);

// 5. Obtén la suma total de todos los prices.

console.warn('SUMA DE TODOS LOS PRICES');

const onlyPrices = cars.map((car) => car.price);
const result5 = onlyPrices.reduce((acc, price) => {
  return (acc += price);
});

console.log(result5);

// Opcional: obtén un array con las distintas brands de coches (no se pueden repetir).
