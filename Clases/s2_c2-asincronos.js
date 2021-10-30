function saludarPersona(nombre, UnCallback){
    setTimeout(function(){
        console.log('Hola', nombre);
        UnCallback(nombre);
    }, 2000)
}

function conversarPersona(UnCallback3){
    setTimeout(function(){
        console.log('Conversando con la persona...');
        UnCallback3();
    }, 3000)
}

function despedirPersona(nombre, UnCallback2){
    setTimeout(function(){
        console.log('Adiós', nombre);
        UnCallback2();
    }, 1000)
}

/* Ser asíncrono no significa que sea bloqueante */

console.log('Inicio proceso');
saludarPersona('Mariana', function(nombre){
    conversarPersona(function(){
        despedirPersona('Mariana', function(){
            console.log('Finalización de la conversación');
        });
    });
});
