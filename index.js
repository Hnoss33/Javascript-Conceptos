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
    function saludar(estudiante){
        console.log(estudiante);
        
    }