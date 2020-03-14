
var miNombre = 'Horacio'//esta funcion solo se encuentra en el SCOPE global no en el local 

 function nombre(){
     var miApellido = 'Garcia' //esta variable apellido existe en el SCOPE local
     console.log(miNombre + ' ' + miApellido);
}
nombre()
