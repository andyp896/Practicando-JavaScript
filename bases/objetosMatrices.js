/* Objetos y Matrices */

// Conjuntos de datos

let listaDeNumeros = [2,3,5,7,11];
console.log(listaDeNumeros);
console.log([listaDeNumeros]);
console.log(listaDeNumeros[2]);
// -> 5
console.log(listaDeNumeros[0]);
// -> 2
console.log(listaDeNumeros[2 - 1]);
// -> 3

// Objetos

let day1 = {
    ardilla : false,
    events : ["trabajo" , "tocó arbol", "pizza", "corriendo"]
};
console.log(day1.ardilla);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false
console.log(day1.events);

/*
Entre llaves se escribe una lista de propiedades estas se separan por comas, cada propiedad tiene un nombre
seguido por dos puntos y una coma que la divide de la siguiente propiedad, work : "El valor de la propiedad", 
(segunda propiedad) "touched tree" : "Touched a tree"
*/

let descriptions = {
    work : "Wen to work",
    "touched tree" : "Touched a tree"
};

console.log(descriptions["touched tree"]);

