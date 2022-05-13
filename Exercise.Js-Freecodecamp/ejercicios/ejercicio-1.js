'use strick';

// Comprobar si una palabra es Palindrome

function palindrome(str) {
  str = str
    .replaceAll(/[^0-9a-z]/g, '')
    .replaceAll('_', '')
    .toLowerCase();
  let newStr = str.split('').reverse().join('');

  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

palindrome('eye');
