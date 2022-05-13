'use strick';

/* RECURSION PARA CREAR RANGO NUMERICO */

// Continuando con el desafío anterior, te ofrecemos otra oportunidad de crear una función recursiva para resolver un problema.

// Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    console.log([startNum]);
  } else {
    var myArr = rangeOfNumbers(startNum + 1, endNum);
    myArr.unshift(startNum);
    console.log(myArr);
  }
}

rangeOfNumbers(4, 4);
