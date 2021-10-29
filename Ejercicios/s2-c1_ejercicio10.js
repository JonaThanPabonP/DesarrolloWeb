var cadena = "TextoSuperLargo";
cadena = cadena.toLowerCase();
var caracter = "a";
caracter = caracter.toLowerCase();
var pos;
var existe = false;
var arreglo = [];

for(pos = 0; pos<cadena.length; pos++){
    
    if(caracter === cadena[pos]){
        arreglo.push(pos);
    }
}

if (arreglo.length>0) {
    console.log("Las posiciones son: ",arreglo);
}else{
    console.log('No existe');
}

if(cadena.length > 10){
    console.log('Cadena Larga');
}else{
    console.log('Cadena Corta');
}