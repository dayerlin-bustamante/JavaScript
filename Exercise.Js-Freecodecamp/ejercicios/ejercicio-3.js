'use strick';

// La función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) y la propiedad (prop) dada es una propiedad de ese contacto.

// Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.

// Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.

// Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces devuelve la cadena No such property.

// Configuración
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]['firstName'] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact.';
}

console.log(lookUpProfile('Bob', 'number'));
