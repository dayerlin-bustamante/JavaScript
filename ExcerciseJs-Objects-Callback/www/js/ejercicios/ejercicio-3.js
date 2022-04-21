/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * ¿Te suena el juego piedra, papel o tijera? Pues manos a la obra.
 *
 *      - Tu oponente será la computadora.
 *
 *      - El ganador se decide al mejor de 3.
 *
 *      - Almacena la puntuación del jugador y de la computadora
 *        en el objeto Game como propiedades del mismo. Ejemplo:
 *
 *          const Game = {
 *              player: 0,
 *              computer: 0
 *          }
 *
 */

'use strict';

// En este objeto almacenaremos las puntuaciones.

// piedra = 0;
// papel = 1;
// tijeta = 2;

/* 0 le gana a 2
   0 pierde con 1
   */

/* 1 gana a 0
      1 pierde 2 */

/* 2 pierde 0
        2 gana 1 */

const Game = {
  player: 0,
  computer: 0,
};

function game(limit) {
  for (let i = 0; i < limit; i++) {
    const user = prompt('piedra, papel o tijera?');
    const compu = Math.floor(Math.random() * 3);

    let result = user + compu;

    if (result == 'piedra0') {
      alert('Empate');
    } else if (result == 'piedra1') {
      alert('perdiste');
      computer++;
    } else if (result == 'piedra2') {
      alert('ganaste');
      player++;
    }
  }
}

game(3);
