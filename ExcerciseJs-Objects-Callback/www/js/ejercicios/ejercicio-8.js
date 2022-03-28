/**
 * ##################
 * ## Ejercicio 5 ##
 * ##################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

'use strict';

const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

const cars = [
  {
    id: 'LU9286V',
    brand: 'Citroen',
    model: 'Xsara',
  },
  {
    id: 'GB2913U',
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    id: 'GB8722N',
    brand: 'Opel',
    model: 'Astra',
  },
  {
    id: 'FT5386P',
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: 'MD4578T',
    brand: 'Opel',
    model: 'Corsa',
  },
  {
    id: 'LP6572I',
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: 'FU8929P',
    brand: 'Fiat',
    model: 'Uno',
  },
];

// 1. Obtén la suma total de todas las edades de las personas.

console.warn('SUMA DE TODAS LAS EDADES');

const result1 = persons.reduce((acc, person) => {
  return (acc += person.age);
}, 0);

console.log(result1);

// 2. Obtén la suma total de todas las edades de las personas francesas.

console.warn('SUMA DE LAS EDADES DE PERSONAS FR');

const frances = persons.filter((person) => person.country === 'FR');
const result2 = frances.reduce((acc, person) => {
  return (acc += person.age);
}, 0);

console.log(result2);

// 3. Obtén un array con el nombre de todas las mascotas.

console.warn('ARRAY CON LAS MASCOTAS');

const pets = persons.map((allPet) => allPet.pet.type);

console.table(pets);

// 4. Obtén un array con las personas que tengan gato.

console.warn('ARRAY CON LAS PERSONAS QUE TENGAS GATO');

const gato = persons.filter((gato) => gato.pet.type === 'gato');

console.table(gato);
/* console.table(gato.map((cat) => cat.pet.type)); */
