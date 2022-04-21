'use strick';

const btnAug = document.querySelector('.btn-info');
const btnDis = document.querySelector('.btn-danger');
const span = document.getElementById('span');

let count = 0;

btnAug.addEventListener('click', () => {
  count++;
  //   OJO es necesario usar .textContent para que modifique el texto dentro de span,
  span.textContent = count;
  console.log(`Me diste click Aumento a ${count}`);
});

btnDis.addEventListener('click', () => {
  count--;
  //   Repito el texto de span por que necesito mover el texto de la etiqueta de acuerdo al contador
  span.textContent = count;
  console.log(`Me diste click disminuyo a ${count}`);
});

/* EVENT DELEGATION */

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  //  e es el nombre del la delegacion del evento
  // .target lees todas las tag
  // .classList lee las clases
  // .contains selecciona el contenido

  if (e.target.classList.contains('btn-info')) {
    count++;
    span.textContent = count;
  }

  if (e.target.classList.contains('btn-danger')) {
    count--;
    span.textContent = count;
  }
});
