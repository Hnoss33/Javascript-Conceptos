var miCarro = { // esta variable es un objeto y le damos un nombre, se va a guardar un objeto
    marca: 'toyota', //las propiedades son una conbinacion de palabras claves y valores el valor es toyota
    modelo: 'corolla',
    year: 2020,
    detalleDelAuto: function(){ //cuando trabajamos la estructura de un objeto, podemos generar una funcion en una de las propiedades 
        console.log(`Auto ${this.modelo} ${this.year}`);
        
    }
};

miCarro.marca //si queremos traer el valor de este objeto o acceder a ellos utilizamos el punto y la palabra clave
// "toyota"
miCarro.year 
// 2020
miAuto.detalleDelAuto(); // la forma para ingresar al metodo que creamos que es la funcion que esta en uno de los objetos
//mandamos a llamar el objeto despues el punto y despues detalles del auto como si fuera una funcion porque el valor es una funcion
//el this es una variable que hace referencia al padre del objeto, la forma de acceder a ciertos valores del objeto


////// FUNCION CONTRUCTORA//////

function auto(marca, modelo, year) { //funcion constructora o template de los nuevos objetos
this.marca = marca; //propiedad del obbjeto
this.modelo = modelo;
this.year = year;
};

var autoNuevo1 = new auto('tesla', 'model3', 2020)
var autoNuevo2 = new auto('mercedez', 'AMG45', 2019)
var autoNuevo3 = new auto('mitsubishi', 'Lanzer', 2020)
var autoNuevo4 = new auto('toyota', 'corolla', 2019)

var marcas

/////Reto////
// var marca = ["Toyota","Chevrolet","Mazda","Ferrari","Ford"];
// var modelo = ["Sedan","Camioneta","Deportivo","qp"];
// var year = ["2019","2020","2021","2018"];
// var Lista = [];
let cars = 
   [{ make: "audi", model: "r8", year: "2012"},
    { make: "audi", model: "rs5", year: "2013"},
    { make: "ford", model: "mustang", year: "2012"},
    { make: "ford", model: "fusion", year: "2015"},
    { make: "kia", model: "optima", year: "2012"}];

function auto(cars) { //funcion constructora o template de los nuevos objetos, parametros.
    this.make = cars; //propiedad del obbjeto, this es una variable especifica enfocada al objeto, 
};// esto es un template de los nuevos objetos
    
for (let i = 0; i < cars.length; i++) {
        list = new auto(cars[i]);
        // var newList = new auto();
        console.log(list);
}
// (cars[i])
// (make[i], model[i], year[i] )


////////////////////////Métodos de recorridos de Arrays
var articulos = [
	{nombre:'Bici',costo:800000},
	{nombre:'Tv',costo:2000000},
	{nombre:'Radio',costo:350000},
	{nombre:'Movil',costo:3000000},
	{nombre:'Cuaderno',costo:50000},
	{nombre:'PC',costo:1900000},
	{nombre:'Mouse',costo:30000},
	{nombre:'Escoba',costo:10000}
];
//metodo para filtrar en el array =>
var articulosFiltrados = articulos.filter(function(){ // el flter lo que hace es agregar a un nuevo array 
return articulos.costo <= 500// los articulos que cumplen esta validacion. 
});

var mapearArticulos = articulosComprados.map(function(articulo){ //esto genera un nuevo array 
    return articulo.nombre;// para traer los articulos que tenemos adentro, el map ayuda a mapear algunos articulos, no modifica el array que ya esta.
});
var encuentraArticulo = articulo.find(function(articulo){ // no modifica el array solo nos encuentra 
return articulo.nombre === "Laptop" //regresa el articulo extrictamente igual a laptop con este find()
});

articulos.forEach(function(){ // el parametro debe ser la variable que contiene el array
console.log(articulos.nombre); // este foreach() nos regresa los articulos que tienen nombbre en una lista
});

var articulosBaratos = articulos.some(function(articulo){ // este some va a hacer una validacion en el array de verdadero o falso
    return articulo.costo <= 700; //osea que si existen en articulos menores iguales a 700 si se cumple la condicion nos regresa un true, nos valida el articulo con cierta especificacion
});




