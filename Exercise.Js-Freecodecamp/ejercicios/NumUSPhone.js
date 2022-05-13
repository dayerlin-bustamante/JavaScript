'use strict';

//  Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
  if (str[0] === '-') {
    return false;
  }
  if (str.indexOf('(') === -1 && str.indexOf(')') > -1) {
    return false;
  }
  if (str.indexOf(')') - str.indexOf('(') > 6) {
    return false;
  }
  let num = str.replaceAll(/-| /g, '');
  if (num.indexOf('(') < num.indexOf(')')) {
    num = num.replaceAll('(', '').replaceAll(')', '');
  }
  if (num.length === 10) {
    return true;
  } else if (num.length === 11 && num[0] === '1') {
    return true;
  }
  return false;
}

console.log(telephoneCheck('555)-555-5555'));

// O regular exprecion.

function telephoneCheck(str) {
  let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regExp.test(str);
}
console.log(telephoneCheck('555-555-5555'));
