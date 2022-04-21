/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un nuevo array cuyos elementos sean los mismos que los del array original
 * pero sumándoles 10.
 *
 */

'use strict';

const nums = [0, 23, 21, 13, 100];

console.warn('RECORRER EL ARRAY CON FOR');

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] + 10);
}

console.warn('RECORRER EL ARRAY CON FOR OF');

for (const num of nums) {
  console.log(num + 10);
}

console.warn('METODO MAP');
const result = nums.map((num) => num + 10);

console.log(result);

console.warn('RECORRER CON WHILE');

let i = 0;
while (i < nums.length) {
  console.log(`la posicion ${i} tiene: ${nums[i] + 10}`);
  i++;
}

console.warn('RECORRER CON DO WHILE');

let e = 0;
do {
  console.log(`la posicion ${e} tiene: ${nums[e] + 10}`);
  e++;
} while (e < nums.length);

console.warn('RECRRORLO CON FOREACH');

nums.forEach((element) => console.log(element + 10));

console.warn(
  'RERRO EL ARRAY CON UN FOR IN "NO ES LO MAS RECOMENDABLE, SE USA CON OBJETOS"'
);

for (const key in nums) {
  console.log(`${key} = ${nums[key] + 10}`);
}
