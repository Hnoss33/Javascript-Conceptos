# Javascript-Conceptos => https://hnoss33.github.io/Javascript-Conceptos/
Conseptos basicos para entender javscript

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

	function saludar(nombre) {
		console.log(`Hola ${nombre}`);
	}

	saludar('Diego');

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.

	var nombre = function(nombre){
	    console.log(`Hola ${nombre}`)
	}

	nombre(‘Diego’);

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

///////////////////////////////////////////////////// SCOPE /////////////////////////////////////////////////////////////////

¿Qué es el scope?
El scope puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local. A continuación te mostraré un par de ejemplos explicando en qué consiste cada uno de ellos.

Qué es el Scope Local
Cuando puedes acceder a una variable únicamente en cierta parte del código, se dice que esa variable está declarada en el scope local. Estas también son conocidas como variables locales. Un ejemplo de esto es cuando una variable está declarada dentro de un bloque o una función. Si tratas de acceder a esta variable fuera de esta función o bloque, tendrás un error que dirá que la variable no está definida.

	function platzi() {
		const soyEstudiante = true;
		console.log(soyEstudiante);
	}

platzi(); // true
console.log(soyEstudiante); // soyEstudiante is not defined
Qué es el Scope Global
Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque. También son conocidas como variables globales. Puedes acceder a este tipo de variables desde cualquier parte de tu código, ya sea dentro o fuera de una función.

const soyEstudiante = true;

	function platzi() {
		console.log(soyEstudiante);
	}

platzi(); //true
console.log(soyEstudiante); //true
A pesar de que JavaScript nos permite declarar una variable como global, no es una buena práctica. Una de las razones es porque tenemos la posibilidad de declarar dos variables globales en distintas partes del código con el mismo nombre sin notarlo.

Diferencias entre let, const y var
Variables declaradas con let o const. Cuando declaramos una variable let o const dentro de un bloque, el alcance o scope que tendrá será sólo dentro de ese bloque. Además, si existe una colisión de nombres entre dos variables let o const recibiremos un mensaje de error. Esto hace que seamos menos susceptibles a cometer errores al utilizarlas, es por esto que desde que salió ES6 es más recomendable utilizar let o const a la hora de declarar una variable en lugar de usar var.
let platzi = 'Esto está fuera del bloque';

	if (true) {
		let platzi = 'Esto está dentro del bloque';
		console.log(platzi); //Esto está dentro del bloque
	}

console.log(platzi) //Esto está fuera del bloque
Como podemos ver en el código anterior 👆🏻, aún y cuando declaré dos variables con el mismo nombre no se pisaron, ya que una de ellas está declarada dentro de un bloque y sólo es posible acceder a su valor dentro de éste. Por otro lado, si ambas variables estuvieran declaradas dentro del mismo scope, un mensaje de error sería mostrado en nuestra consola.

	let platzi = 'Esto está afuera del bloque';

	if (true) {
		...
	}

let platzi = 'Misma variable declarada dos veces'; // Error, platzi has already been declared
Variables declaradas con var. Si en los ejemplos anteriores, cambiamos las variables declaradas con let por variables declaradas con var, su valor sí se va a rescribir. Obviamente no es nada recomendable utilizar este tipo de variables porque puede ser más susceptible a bugs.
var platzi = 'Esto está afuera del bloque';

	if (true) {
	var platzi = 'Esto está dentro del bloque';
	console.log(platzi); //Esto está dentro del bloque
	}

console.log(platzi); //Esto está dentro del bloque
Otros ejemplos
Puede ser común también que tengas una función dentro de otra. En este caso, la función que está por fuera no tendrá acceso a las variables que se encuentran en la función de adentro, sin embargo, la función de adentro sí tendra acceso a las variables que se encuentran declaradas en la función de afuera.

	function afuera() {
	let variable_afuera = 'Esta variable está declarada afuera';

	function adentro() {
		let variable_adentro = 'Esta variable está declarada adentro';
		console.log(variable_afuera); // Esta variable está declarada afuera
	}

	console.log(variable_adentro); // variable_adentro is not defined
	}
En conclusión, el término scope no es tan extremadamente difícil de entender, es simple una vez que sabes la diferencia entre los distintos tipos que existen. Recuerda: cuando declaras una variable en una función sólo podrás acceder a su valor dentro de esa función. Si después de haber leído este tutorial sigues confundido con este concepto, no dudes en dejar tus preguntas en los comentarios.

////////////////////////////////////////////////////// BOOLEANS /////////////////////////////////////////////////////////////

El objeto Boolean es un objeto envoltorio para un valor booleano (boolean).

	new Boolean(valor)
	
valor
El valor inicial del objeto Boolean. El valor es convertido a un valor boolean, si es necesario. Si se omite el valor o es 0, -0, null, false, NaN, undefined, o la cadena vacía (""), el objeto tiene un valor inicial de false. Todos los demás valores, incluyendo cualquier objeto o la cadena "false", crea un objeto con el valor inicial de true.
No se deben confundir los valores primitivos booleanos true y false con los valores true y false del objeto Boolean.

Cualquier objeto cuyo valor no sea undefined o null, incluyendo un objeto Boolean cuyo valor sea false, se evalua como true cuando se pasa a una sentencia condicional. Por ejemplo, la condición de la siguiente sentencia se evalúa como true:


/////////////////////////////////////////////////////CONDITIONALS ////////////////////////////////////////////////////////////

If
En un programa podemos realizar el mismo tipo de decisiones gracias a la instrucción if:

	if (condición) {
	   código_A
	}
	else {
	   código_B
	}
Veamos lo que tenemos aquí. Primero, comprobamos la condición en la que vamos a basar nuestra decisión (veremos más adelante cómo crear condiciones). Si la condición es válida (si es verdadera), se ejecutará el primer bloque de código que está entre llaves ({}); si no, se ejecutará el siguiente bloque de código, el que se encuentra debajo de la palabra else. Es decir, si la condición es verdadera, ejecutamos código_A, y si no, código_B.

De esta forma, podemos tomar decisiones simples que nos permiten cambiar el código que ejecuta el navegador, de forma que podemos controlar su ejecución fácilmente. Un ejemplo es este:

	var edad = 18;
	if (edad >= 18) {
	   alert("Eres mayor de edad");
	}
	else {
	   alert("Eres menor de edad");
	}
Primero definimos la variable edad con el valor numérico 18. Después comprobamos si el sujeto es o no mayor de edad leyendo el valor de la variable: si edad es mayor o igual que 18, entonces le decimos que es mayor de edad; si no, le decimos que es menor de edad.

alert es una función de Javascript que nos permite mostrar un mensaje en pantalla.

Pero, ¿qué ocurre cuando queremos hacer varias comprobaciones al mismo tiempo? Entonces podemos usar la instrucción else if.

	if (edad > 18) {
	   alert("Tienes más de 18 años");
	}
	else if (edad == 18) {
	   alert("Tienes 18 años");
	}
	else {
	   alert("Tienes menos de 18 años");
	}
De esta forma, podemos extender las condiciones todo lo que queramos para cubrir todos los casos necesarios. Hay que destacar que todas las condiciones son sucesivas y que sólo se ejecuta una de ellas. Además, el último else es el que se ejecuta en el caso de que ninguno de los if anteriores sea válido.

Switch
Hemos visto cómo gracias a if-else podemos decidir qué hacer en determinadas situaciones. Pero a veces sólo querremos decidir entre unos valores, y ejecutar código dependiendo de los posibles valores de una variable o devueltos por una función. Para no ensuciar tanto el codigo usando muchas sentencias if podemos usar la sentencia switch-case:

	switch (variable) {
	   case valor1:
	      // codigo para valor 1
	      break;
	   case valor2:
	      // codigo para valor 2
	      break;
	   case valor3:
	   case valor4:
	   case valor5:
	      // codigo para valor 3, valor 4 y valor 5
	      break;
	   default:
	      // código si no es ninguno de los anteriores
	}
En este ejemplo, comprobamos varios valores de la variable variable, de forma que cada uno de ellos permite ejecutar un código diferente dependiendo de la situación. Ahora bien, si nos fijamos en valor3, valor4 y valor5, comprobamos que sólo se ejecutará el código que aparece bajo valor5, porque los otros valores están vacíos, pero también porque no tienen una cláusula break. Esta palabra reservada corta la ejecución del código Javascript en el punto en que aparece, saliendo del bloque de código en el que se encuentra. Esto también nos servirá, por ejemplo, cuando veamos bucles.

Con esto, comprobamos que switch nos puede ayudar a ejecutar código de forma condicional, pero sin las complicadas operaciones que debemos realizar en if. Sin embargo, switch no puede nunca sustituir a if, situación que a la inversa sí ocurre.
