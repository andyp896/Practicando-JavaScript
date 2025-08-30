 // Estructura del programa

//Expresiones y Declaraciones

//El tipo más simple de declaracion es un aexpresión con punto y coma al final.


1;
!false;

// Sin embargo esto no nos es util

// Bindings 
// ¿Cómo mantiene un programa un estado interno? ¿Cómo recuerda las cosas?
//Para atrapar y retener valores, JS proporciona una cosa llamada un (enlace, o variable)

let caught = 5*5;

//nuestro enlace es <caught> este va a estar enlazado al resultado de nuestra operacion, o bien puede tener algun,
//otro dato que se le asigne, una vez creado el enlace el nombre se puede usar como expression.
//El valor que contiene esta expression es el valor que el enlace mantiene actualmente
//ejemplo:

let ten = 10;
console.log(ten * ten);
//-> 100

//Los enlaces pueden no estar atados siempre al mismo valor, el operador = sepuede usar en cualquier momento en enlaces
//existentes para desconectarlos y que apunten a uno nuevo, ejemplo:

let mod = "light";
console.log(mod);
//--> light
mod = "dark";
console.log(mod);
//--> dark

//Veamos otro ejemplo

let luigisDebt = 140;
luigisDebt = luigisDebt -35;
console.log(luigisDebt);
// -> 105

//Una sola instruccion de let puede definir múltiples enlaces. Las definiciones deben estar separadas por comas.

let one = 1, two = 2;
console.log(one + two);
// -> 3

// Ejercicios

let gato = "#";

for (gato = 0; ;gato <= 7, gato + gato) {
    console.log(gato);
    break
}

// prompt("ingrese el codigo")

// prompt("Comete un pan")


/*
// let number = Number(prompt("Elige un número"));
    if(!Number.isNaN(number)){
    console.log("Tu numero es la raíz cuadrada de " + number * number);
}else{
    console.log("Oye. por que no me diste un numero");      
}
*/

/*
// let num = Number(prompt("Elija un numero "));
if(num < 10 ){
    console.log("Pequeño");
} else if(num < 100){
    console.log("Mediano");
} else {
    console.log("Grande")
}
*/

let numero = 0;
let conta = 0;

/*

while (conta <= 10){
    console.log(numero);
    console.log(conta);
    numero = numero + 2;
    contador = conta + 1;
}
*/

// Con do se tiene que cumplir la funcion para que pueda continuar el codigo

/*
let nombre;
do{
    nombre = prompt("Quien eres?" );
} while (!nombre);
console.log( "Hola " + nombre);
*/

// un bucle con for 
/*
for(let numero = 0; numero <= 12; numero = numero + 2){
console.log(numero);
}

let resultado = 1;

for(let contador = 0; contador < 10; contador = contador + 1 ){
    resultado = resultado * 2;
}
console.log(resultado);
*/


/*
// Salir de un bucle

for(let actual = 20; ;actual = actual + 1){
    if(actual % 7 == 0){
        console.log(actual); breakl;
    }
}
*/



//Despacho de un valor con interruptor (switch)


/*
switch(prompt("Cómo está el clima?")){
    case "rainy" :
        console.log("Recuerda traer paraguas");
        break;
    case "sunny" :
        console.log("Vistete ligero.");
        break   // puede no llevar el brake para dar mas opciones
    case "cloudy" :
        console.log("Sal afuera.");
        break;
    default:
        console.log("!Tipo de clima desconocido¡"); 
}
*/


// Hacer un bucle en triangulo
/*
*
**
***
****
*****
 */

// imprimir el asterisco, cada vez sumar uno y volver a imprimir hasta llegar a 7



/*

let asterisco = "*";
for(let contador = 0; contador < 6; contador ++){
    console.log(asterisco);
    if(asterisco.length < 6){
        asterisco = asterisco + "#";
    }
}
*/


/*

let contador = 0; 
while(contador < 6){
    console.log(asterisco);
    asterisco = asterisco + "*";
    contador++;
}
*/

//  hacer un programa que nos imprima los numeros del 1 al 100
// del programa crear dos excepciones para los numeros % por 3 en lugar de imprimir el numero se imprimira "Fizz"
// y para los numeros % por 5 (y no por tres) imprimir "Buzz"

// primero imprimer numeros del 1 al 100
/*
let fizz = "fizz";
let buzz = "buzz";

for(let num = 0; num <= 100; num++){
    //console.log(num);
    if(num % 3 == 0){
        console.log(num + fizz);
    }else if(num % 5 == 0){
        console.log(num + buzz);
    }else {
        console.log(num);
    }
}
*/

/*

// El for se va a encargar de recorrer los numeros del 1 al 100
for(let num = 0; num <= 100; num++){
    // Nuestra primer condicion sera comparar si es divisible entre 3 y 5, para evitar 
    // que se ejecuten las otras funciones
    if(num % 3 == 0 && num % 5 == 0 ){
        console.log(num + "FizzBuzz");
    // si no es divisible entre 3 y 5, verificamos si es divisible por 3
    }if(num % 3 == 0){
        console.log(num + "fizz");
    // si no es divisible por 3 o por 3 y 5 verificamos si es divisible por 5
    }else if(num % 5 == 0){
        console.log(num + "buzz");
    // y por ultimo si no cumple con alguna condicion solo imprimiremos el numero
    }else{
        console.log(num);
    }
}

*/

// Escribir una cadena de 8 X 8; usando saltos de linea 
/*
Ejemplo: 
# # # #
 # # # #
# # # #
 # # # #
 */
/*
si el numero es impar poner un # 
si el numero es par poner un " "
*/

console.log("Pedro");

// Genera un tablero de ajedrez

// Aquí se va a almacenar el patrón del tablero de ajedrez
let tablero = "";
// Se define el tamaño del tablero de ajedrez 8x8
let tamaño = 8;

//Bucle para las filas
for(let fila = 0; fila <= tamaño; fila++){
    // Bucle para las columnas 
    for(let columna = 0; columna <= tamaño; columna++){
        //Si la suma de la fila y la columna es par 
        // La casilla sera un espacio en blanco
        if((fila + columna) % 2 == 0){
            tablero += " ";
        // Si no la casilla se llenara con un #
        }else{
            tablero += "#";
        }
    }
    // Al final de cada fila se agrega un salto de linea
    tablero += "\n";
}
//Se imprime el resultado en consola
console.log(tablero);


