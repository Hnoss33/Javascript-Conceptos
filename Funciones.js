//FUNCIONES DECLARATIVAS: inicia un valor en memoria que guarda en este caso return 3;
function mifuncion() { // esta funcion NO ES ANONIMA porque si le estoy generando un nombre
    return 3;
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
        return resultado; //con este return devolbemos el resultado
    }
    sumar(1,2) //aca invocamos la variable con los parametros que le estamos dando

    function sumar(a,b){ //es lo mismo que arriba pero sin la variable que es igual al reulstado 
        return a + b; // aca solo retornamos
    }
    sumar(1,2) //invocamos la funcion

