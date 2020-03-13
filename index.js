//FUNCIONES DECLARATIVAS: inicia un valor en memoria que guarda en este caso return 3;
function mifuncion() { // esta funcion NO ES ANONIMA porque si le estoy generando un nombre
    return 3:
    }
    miFuncion();

    //FUNCIONES DE EXPRECION: esta variabble guarda una funcion
    //lo que esta funcion necesita se llama parametros para que la funcion entienda que esta pasando 
    var miFuncion = function(){ // en este caso esta funcion es anonima porque no tiene ningun parametro
    }
    /////
    var miFuncion = function(a,b){
    return a + b; 
    }
    miFuncion(); //la variable se llama como si fuera una funcion

    //EXAMPLE 2: 
    function saludar(estudiante){ //Parametro estudiante 
        console.log(estudiante);
        }
     saludar('Diego') //aca llamo la funcion para darle
                        //valor al parametro de la funcion
    function saludar(estudiante){
        console.log(`hola ${estudiante}`) // esta funcion agrega un saludo por cada alumno que entre a la clase
    }
    saludar('horacio'); //si se conencta a una base de datos esto traeria los nombres pero ya tendriamos la funcion que agregaria el HOLA

    function sumar(a,b){
        var resultado = a + b;
        return resultado; //con este return devolbbemos el resultado
    }
    sumar(1,2) //aca invocamos la variable con los parametros que le estamos dando

    function sumar(a,b){ //es lo mismo que arriba pero sin la variable que es igual al reulstado 
        return a + b; // aca solo retornamos
    }
    sumar(1,2) //invocamos la funcion

//Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

// Funciones Declarativas:
// En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

// Expresión de función:
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);

// En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.