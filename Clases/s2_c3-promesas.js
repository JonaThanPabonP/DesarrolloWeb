function saludarPersona(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (nombre === 'Carolina') {
                console.log('Hola', nombre);
                resolve(nombre);
            } else{
                reject('Hey, qué hace usando mi método!');
            }
        }, 1000)
    })
}

function conversarPersona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Conversando con', nombre);
            resolve();
        })
    }, 2000)
}

function despedidaPersona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Chao', nombre);
            resolve();
        })
    }, 2000)
}

console.log('Inicio Proceso');
saludarPersona('Mariana')
    .then(conversarPersona)
    .then(despedidaPersona)
    .then(function(string){
        console.log('Terminando el proceso');
    })
    .catch(function(err){
        console.log('Ocurrió un error');
        console.log(err);
    })