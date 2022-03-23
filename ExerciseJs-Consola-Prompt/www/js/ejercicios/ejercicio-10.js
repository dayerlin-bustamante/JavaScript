/* 
Solicita a un usuario su nombre y su primer apellido. Posteriormente pregúntale 
si le apetece un café.

- Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@ Juan Campos! 
  En breves recibirá su café calentito en casa."

- Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Hoy no hay café."
 */
'use strict'


let user_name;
let cafe;
let tries=3;

user_name=prompt('Escribe tu nombre y Apellido')


do {

    cafe=prompt('Quieres un cafe SI o NO')
    let user='';
        
    if (cafe==='si') {
        user +=  user_name;
        alert (`Bienvenido ${user} en breve recibiras un cafe calentito en casa.` )
        break;
        
        
    }
    
    else if (cafe==='no') {
        user +=  user_name;
        alert (`Bienvenido ${user} Hoy no hay cafe.` )
        break;
        
    }

    else if (cafe!=='si' && cafe!=='no'){
        tries--
        user +=  user_name;
        alert (`Bienvenido ${user} Por favor introduce SI o NO` )
    }


} while (tries!==0) 

    if (tries===0){
        alert ('ya has acabado todos los intentos')
    }
   

    




/* 
cafe=prompt('Quieres un cafe SI o NO')

    
    if (cafe==='si') {
        user +=  user_name;
        alert (`Bienvenido ${user} en breve recibiras un cafe calentito en casa.` )
        
        
    }
    
    else if (cafe==='no') {
        user +=  user_name;
        alert (`Bienvenido ${user} Hoy no hay cafe.` )
        
    } */
    


    
   




