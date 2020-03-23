var estudiantes = ["horacio",  "maria", "Rosa", "Daniel"];
function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiante}`);
}
for (let i = 0; i < estudiantes.length; i++) { 
    saludarEstudiantes(estudiantes[i])  //aca man damos a llamar a la funcion y adentro el array que es adentro de las comas
//este for es para crear un loop, empieza con la variable i que es cero,
// i es menor a la cantidad de elementos en el array osea que es menor que 4 
//(true) luego incrementa con el i++
}

//segunda forma 
for(var estudiante of estudintes){ // la variable estudiante es el singular se convierte en el index del array osea que sera el 0 del array
    saludarEstudiantes(estudiante); // inicializa una variable que esta en singular de nuestro array que esta en prural, y miestras sigan existiendo elementos en el array, se va a seguir generando el loop
}

//////loops => While

var estudiantes = ["horacio",  "maria", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiante}`);
}
while(estudiantes.length > 0){ //mientras la longitud del array sea mayor a 0, cuando llega a 0 la cantidad de elementos del array se rompe el ciclo
    var estudiante = estudiantes.shift(); //metodo de mutacion shift que va a llamar elementos del array 
saludarEstudiantes(estudiante) //mandamos a llamar la funcion 
}

