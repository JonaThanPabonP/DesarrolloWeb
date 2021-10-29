var cadena = "TextoSuperLargo";
var caracter = "a";
var pos = 0;

for(car in cadena){
    
    console.log('Las posiciones son:');
    if(car === caracter){
        console.log(pos);
    }
    pos++;

    // console.log('No existe');
    
}

if(cadena.length > 10){
    console.log('Cadena Larga');
}else{
    console.log('Cadena Corta');
}