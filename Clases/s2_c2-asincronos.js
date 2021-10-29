function saludarPersona(nombre, Uncallback){
    setTimeout(function(){
        console.log('Hola', nombre);
        console.log(a);
    }, 2000)
}

function Uncallback(){
    
}

/* Ser asíncrono no significa que sea bloqueante */

console.log('Inicio proceso');
saludarPersona('Mariana');
console.log('Finalización del proceso');
