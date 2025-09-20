// DEFINIENDO UNA FUNCION

//esta variable const llamada cuadrado tiene una funcion, esta funcion solicita un parametro, y despues realiza
//un algoritmo, ahora cada que querramos obtener el cuadrado de un numero solo es necesario llamar a la funcion
//y darle el parametro (El numero del que queremos sacar el cuadrado).
const cuadrado = function(x){
    return x * x ;
};
console.log(cuadrado(12));

//La funcion comienza con la palabra reservada function, las funciones pueden tener ningun o varios parametros.

//ejemplos:

//Funcion sin parametros

const makeNoise = function(){
    console.log("!Pling¡");
};

makeNoise();

//Funcion con 2 parametros

const roundTo = function(n, step){
    // Aqui se hace la division entre parametros y se almacenan en other
    let other = n % step;
    console.log(other);
    // Aqui es donde se decide si se redondea hacia arriba o hacia abajo nuestro numero
    return n - other + (other < step / 2 ? 0 : step);
};

console.log(roundTo(11,4));
// -> 20

const roundTo1 = function(n, step) {
  // Calcula el resto de la división
  let remainder = n % step;
  console.log(remainder);
  
  // Si el resto es mayor o igual a la mitad del paso, redondea hacia arriba
  if (remainder >= step / 2) {
    return n - remainder + step;
  }
  // De lo contrario, redondea hacia abajo
  else {
    return n - remainder;
  }
};

console.log(roundTo1(23,10));


//Ambito anidado

const  hummus = function ( factor ) {
   const  ingrediente = function ( cantidad , unidad , nombre ) {
     let  cantidadIngrediente = cantidad * factor;
     if (cantidadIngrediente > 1 ) { 
      unidad += "s" ; 
    } 
    console.log( ` ${cantidadIngrediente}  ${unidad}  ${nombre} ` ); 
  }; 
  ingrediente( 1 , "lata" , "garbanzos" ); 
  ingrediente( 0.25 , "taza" , "tahini" ); 
  ingrediente( 0.25 , "taza" , "jugo de limón" ); 
  ingrediente( 1 , "clavo" , "ajo" ); 
  ingrediente( 2 , "cucharada" , "aceite de oliva" ); 
  ingrediente( 0.5 , "cucharadita" , "comino" ); 
};

console.log(hummus(2));

// Funciones como valores
/*
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
//  launchMissiles = function() {/* do nothing */ //};
//}

// Funciones de flecha
/* En lugar de ocupar la palabra reservada function usamos una flecha => */

/* En lugar de ustar este codigo con function, usamos la flecha =>

const roundTo = function(n, step){
    let other = n % step;
    return n - other + (other < step / 2 ? 0 : step);
};
*/

const  roundTo3 = ( n , paso ) => {
   let  resto = n % paso;
   return n - resto + (resto < paso / 2 ? 0 : paso);
};

console.log(roundTo3(11,3));

// Las funciones flecha se ocupan mejor para las expreciones pequeñas como:

const  cuadrado1 = ( x ) => { return x * x; };
 const  cuadrado2 = x => x * x;

// Cuando una funcion flecha no tiene ningun parametro, su lista de parametros es solo un conjunto de parentesis vcios

const cuerno = () => {
  console.log( "Toot" );
};



function  menos ( a , b ) {
   if (b === undefined) return -a;
   else  return a - b;
}

console.log(menos(10,5));

console.log("C", "0", 2);


function  findSolution ( objetivo ) {
   function  find ( actual , historial ) {
     if (actual == objetivo) {
       return historial; 
    } else  if (actual > objetivo) {
       return  null ; 
    } else {
       return find(actual + 5 , `( ${historial} + 5)` ) ?? 
             find(actual * 3 , `( ${historial} * 3)` ); 
    } 
  } return find( 1 , "1" ); 
} 


//console.log(findSolution(11 ));

// Funciones de crecimiento

// Esta funcion nos permite hacer un conteo de los animales que hay en una granja, con la condicion de que si el numero
// de animales es menor de tres digitos se le asignaran 0 hasta ocupar el minimo de tres digitos


// La funcion pide tres parametros
function printFarmInventory (cow , chiken, pig){
    // aquí obtenemos el valor del primer parametro 
    let cowString = String(cow);
    // despues comparamos si el valor pbtenido es mayor o menor a tres digitos
    while (cowString.length < 3 ){
        // si es menor a tres digitos se le agregaran los ceros necesarios para que este ocupe el espacio minimo requerido
        cowString = "0" + cowString;
    }
    // por ultimo para imprimir el resultado, en caso de ser necesario se le suman los digitos mas el nombre del animal
    // que estamos inventareando
    console.log( ` ${cowString} cow`);
    // Repetiremos la misma condicion para cada uno de los animales
    let chikenString = String(chiken);
    while (chikenString.length < 3){
        chikenString = "0" + chikenString;
    }
    console.log( `${chikenString} chiken`);
    let pigString = String(pig);
    while (pigString.length < 3){
        pigString = "0" + pigString;
    }
    console.log( `${pigString} pig`);
}

printFarmInventory(7,20, 3);

// Esta funcion hace lo mismo que la anterior nos ayuda a hacer un inventario de los animales,
// pero sin tanta repeticion de codigo.

// Ocuparemos 2 funciones la primera nos pedira dos parametros, la cantidad y el nombre del animal que sera registrado
function printZeroPaddedWhitLabel (number, label){
    // la cantidad se almacenara en nuestra variable declarada dentro de la funcion
    let numberString = String(number);
    // hara la comparación de si tiene los digitos minimos que le pedimos
    while (numberString.length < 3){
        //en caso de no tenerlos se le suman 0 para que cumpla con el requisito
        numberString = "0" + numberString;
    }
    // por ultimo imprimimremos el resultado y el nombre 
    console.log( ` ${numberString} ${label}`);
}

// Para que nuestro codigo anterior funcione es necesario otra funcion para mandar los parametros
// esta nueva funcion tendra los animales que quieran ser agregados, entonces puedes colocar tantos parametros como necesites
function printFarmInventory2 (cow, chiken, pig){
    // Ahora llamaremos a la funcion que ara la logica, dandole 2 parametros, que son la cantidad y el nombre
    printZeroPaddedWhitLabel(cow, "Vacas");
    printZeroPaddedWhitLabel(chiken, "Pollos");
    printZeroPaddedWhitLabel(pig, "Cerdos");
}
// aqui llamaremos a nuestra funcion dandole la cantidad de animales que hay.
printFarmInventory2(70, 2, 3);

// Nuestra ultima funcion nos regresara los valores para que la segunda funcion sea quien imprima el inventario
// esto hace que nuestra funcion 1 sea mas versatil

// primero obtenemos dos parametros cantidad y ancho minimo
function zeroPad (number, withe ){
    // almacernamos la cantidad 
    let string = String(number);
    // comparamos la cantidad y el ancho minimo
    while (string.length < withe){
        // si la cantidad es menor al ancho entonces le agregamos los 0 necesarios
        string = "0" + string;
    }
    // regresamos el resultado 
    return string;
}

// en la 2da funcion solicitaremos los paramtros que sean necesarios, cuantos animales vayamos a contar
function printFarmInventory3 (cow, chiken, pig){
    // al llamar a nuestra funcion 2 le daremos los parametros que necesita que son el numero de animales y el ancho minimo
    // el monbre se lo daremos al mandar a imprimir
    console.log( ` ${zeroPad(cow,3)} Vacas `);
    console.log( ` ${zeroPad(chiken,3)} Pollos `);
    console.log( ` ${zeroPad(pig,3)} Pig `);
}
// al llamar a la funcion 2 le estaremos dando la cantidad de animales que estamos contando
printFarmInventory3(7, 16 , 8);

// Resumen 

/*
Tenemos tres tipos de funciones las cuales nos sirven para diferentes tipos de casos, ya sea por si ocupamos
un valor o un resultado o incluso si necesitamos hacer una mini funcion.
*/

// Define F para contener un valor de funcion
const f = function (a){
    console.log(a + 2);
};

f(3); // llamamos a la funcion y imprimira el resultado 

// Declara g como una funcion
function g (a,b){
    return a * b * 3.5 ;
}

console.log( `${g(2,2)}`); //llamamos a la funcion y le damos los parametros, nos regresara el resultado

// Un valor de funcion menos detallado 
let h = a => a % 3;

console.log(h(10)); // esta funcion flecha es para realizar problemas pequeños 


/* Minimo */

// escribe una funcion que tome dos argumentos y regrese el minimo

function minimo(x , y){
    if( x < y){
        return console.log("El numero más pequeño es " + x);
    }else if(y > x){
        console.log("El numero más pequeño es " + y)
        return; 
    }else if(x == y){
        console.log("Ambos digitos son de la misma cantidad:  " + x); 
    }
}

minimo(1, 4);

/* Recursión */

// Define una función recursiva que nos diga si el numero es par o impar pero que nos entregue un valor booleano

function isEven(number){
    if( number % 2 == 0){
        return true;
    }else if(number % 2 != 0 ){
        return false;
    }else{
        console.log("Solo se aceptan numeros enteros positivos");
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Una funcion recursiva comprueba cada si se a cumplido alguna de nuestras condiciones, si no es así,
// nuestra parte recursiva se llamara asi misma con una modificacion para volver a ser comparada esperando se cumpla 
// alguna condicion o hasta que se desborde nuestra pila.

function isEven1(n){
    if(n == 0){
        return true;
    }else if(n == 1 ){
        return false;
    }else{
        return isEven1(n-2);
    }
}

console.log(isEven1(50));
console.log(isEven1(75));
// console.log(isEven1(-1)) al ser un numero negativo lo que hace la recursividad es sumar el numero 
// negativo lo que provoca que nuestro numero se aleje mas y mas de algun resultado esperado


/* Contando frijoles */



function countBS (string, n){
    let count = 0;
    console.log(count);
    for(let i = 0; i < string.length; i++){
        if(string[i] == n){
            count++;
        }
    } return count;
}

console.log(countBS("Hola camarada", "H"));

