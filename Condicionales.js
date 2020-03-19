if (true) {
console.log('hola');

}else {
    console.log('soy falso');
}


if (false) { //el if evalua si es verdadero o no si no no hace nada
    console.log('hola');
    
}else { //como la condicional de arriba es falsa el else se activa
    console.log('soy falso');
}

//ejemplo de votacion

var edad = 18;

if (edad === 18) { //igual puede votar
    console.log('puedes votar');
}else if (edad > 18) { //si es mayor de 18 , se pueden anidar varios else if 
    console.log('puedes votar de nuevo');
}else{ // de lo contrario si el primer if y el segundo es falso entonces no puede votar
    console.log('aun no puedes votar');
    
}

//operador ternario genera un if y else en una sola linea

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? 'si soy un 1' : 'no, soy un 1'
console.log(resultado);
// si soy un 1 

var numero = 2;
var resultado = numero === 1 ? 'si soy un 1' : 'no, soy un 1'
console.log(resultado);
// no, soy un uno 


//Reto piedra papel o tijera

//explicacion funcion:
// La tarea de esta funcion es generar un numero aleatorio entre 0 y 2 que ya vimos para que seran estos numeros, 
//estos numeros seran la opcion de la computadora ,con Math.random() generamos un numero aleatorio … lo multiplicamos
// por 10 para que nos de numeros mayores de 10 porque normalmente esta funcion solo da numeros con punto decimal 
//entre 0 y 3, AL multiplicarlo por 10 obtendremos valores cercanos a los que utilizaremos.
// Y le aplicamos Modulo % 3 para obtener numeros entre 0 y 2.
// Al final redondeamos el resultado para obtener limpiamente el valor que vamos a usar…
// function random(){
//     numerx = (Math.random()*10)%3; //aleatoreo por 10 
//     numero = Math.floor(numerx); //redondeamos numero
//     return numero;
// }


var opcionMaquina = function(numero){
    numerx = (Math.random()*10)%3; //aleatoreo por 10 
    numero = Math.floor(numerx); //redondeamos numero
    return numero;
};

var piedra = 0
var papel = 1
var tijera = 2
var opcionUsuario = papel; // ACA PODEMOS CAMBIAR POR PIEDRA, PAPEL O TIJERA 
var resultado = opcionUsuario === opcionMaquina() ? "empate" : "perdio usuario"
console.log(resultado);

// var opcionUsuario = papel;
// var resultado = opcionUsuario === opcionMaquina() ? "empate" : "perdio usuario"
// var opcionUsuario = tijera;
// var resultado = opcionUsuario === opcionMaquina() ? "empate" : "perdio usuario"


