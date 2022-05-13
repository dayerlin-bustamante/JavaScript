//////////////////////////////////////
//EJERCICIO #1

// Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

// 1.- Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

// 2.- Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

// 3.- Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

// 4.- Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

// Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.

let username = 'JackOfAllTrades';

// 3.- Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.
//  = /i

// 2.- ...............El nombre de usuario no puede iniciar con un número.
// = /^[a-z] => INICIO

//  4.- Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.
// = ([a-z]+) => MEDIO la seccion la señalo/divido con parentesis  el + aclara que deben ser  ///////////////dos letras  o mas

// 4.- LA seccion del medio tambien aclara que pueden ser dos numero (siempre que se cumpla la condicion de iniciar con letas 2.-) usamos | OR para colocar dos condiciones.
// = (....|\d\d)

// // 1.- Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.
// al usar solo a-z y \d idicamos que es alfanumerico

//2.- Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final.
// = )\d*$ => FINAL todods los numeros deben estar al final.

let userCheck = /^[a-z]([a-z]+|\d\d)\d*$/i;
let result = userCheck.test(username);

/////////////////////////////////////////
//EJERCICIOS #2

//Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

//OJO :
// Tu expresión regular no debe coincidir con la cadena astronaut

// Tu expresión regular no debe coincidir con la cadena banan1

// Tu expresión regular debe coincidir con la cadena bana12

// Tu expresión regular debe coincidir con la cadena abc123

// Tu expresión regular no debe coincidir con la cadena 12345

// Tu expresión regular debe coincidir con la cadena 8pass99

// Tu expresión regular no debe coincidir con la cadena 1a2bcde

// Tu expresión regular debe coincidir con la cadena astr1on11aut

let sampleWord = 'astronaut';
let pwRegex = /\D(?=\w{4,})(?=\w*\d{2})/; // Cambia esta línea
let result1 = pwRegex.test(sampleWord);
