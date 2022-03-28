const Car = {
    brand: 'Opel',
    model: 'Corsa',
};

// Con el operador "in" podemos comprobar si una propiedad existe
// dentro de un objeto. Para tal fin utilizamos el nombre de la propiedad
// que queremos comprobar como string seguido del operador "in" y el nombre
// del objeto.
if ('model' in Car) {
    console.log('La propiedad existe');
} else {
    console.log('La propiedad no existe');
}
