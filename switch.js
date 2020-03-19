
var numero = 1;
switch (numero) { // EL SWITCH ESTA HECHO MPARA VALIDAR CASOS!

case 1:  // si el caso 1 es verdad entonces pasa lo siguiente abajo
     console.log("soy uno"); //tarea que se valida
         break; //si el primer caso se cumple entra el break y nos salimosdel switch
case 10: //aso # 2
       console.log("soy un 10");
       break;
case 100:
    console.log("si soy un 100");
    break; //! es importante el break.

    default: // si ningun caso se cumple entonces =>
      console.log("no soy nada");
      
}

////reto piedra papel o tijera 
// var jugador1 = prompt("Elije: piedra | papel | tijeras")
var piedra = 0;
var papel = 1;
var tijera = 2;
var jugador = prompt("elije una opcion")

function Robot() {
    numerx = (Math.random()*10)%3; //aleatoreo por 10 
    numero = Math.floor(numerx); //redondeamos numero
    return numero;
};

switch (Robot()){
    case 1: (Robot === jugador) 
                console.log("win 1");
                break;
    case 2: ((Robot === 0) && (jugador ===1)) 
                console.log("win 2");
                break;
    case 3: ((Robot === 1) && (jugador ===2)) 
                console.log("win 2");
                break;
    case 4: ((Robot === 2) && (jugador ===0)) 
                console.log("win 3");
                break;
            default:
        console.log("WTF!!");
}



