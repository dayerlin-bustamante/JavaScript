'use strick';

// ANIDAR BUCLES

function multiplyAll(arr) {
  let product = 1;
  // iterando cada elemento del array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // multiplicamos cada numero
      product *= arr[i][j];
    }
  }

  console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
