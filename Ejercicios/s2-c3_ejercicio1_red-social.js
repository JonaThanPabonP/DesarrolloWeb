function agregarAmigo(callback){
    setTimeout(function(){
        console.log('Agregar al amigo');
        callback();
    }, 2000)
}

function recibirNotificacion(callback2){
    setTimeout(function(){
        console.log('Tienes una notificación de ...', );
        callback2();
    }, 3500)
}

function chatear(callback3){
    setTimeout(function(){
        console.log('Chateando...');
        callback3();
    }, 2500)
}


console.log('Iniciando proceso ...');
agregarAmigo(function(){
    recibirNotificacion(function () {
        chatear(function () {
            console.log('Terminando proceso ...');
        })
    });
});