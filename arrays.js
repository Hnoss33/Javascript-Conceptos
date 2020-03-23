var frutas = ['manzana', 'platano', 'uva', 'sandia'];
console.log(frutas.length); //este length nos dice cuantos elementos hay en el array

var masFrutas = frutas.push('papaya'); //agregar elementos al array
console.log(frutas);

var borrarFruta = frutas.pop(); //elimina el ultimo elemento del array
console.log(frutas);

var nuevaFruta = frutas.unshift('mango'); // el elemento que coloquemos aca con esto lo manda al inicio del array pocicion 0
console.log(frutas);

var eliminarNuevaFruta = frutas.shift(); // esto nos ayuda a eliminar el elemento que este al inicio del array
console.log(frutas);

var positionFruta = frutas.indexOf('platano'); // esto nos ayuda a a traer la pocicion del elemento del array, nos dice la pocicion exacta en numeros enteros
console.log(positionFruta);

console.log(frutas[1]); // posicionamiento para ingresar a los elementos del array