/*
Crea un arreglo de 10 posiciones de enúmeros con valores aleatorios
*/

var arreglo = [];

function generarAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}


function llenar(){
    for (let i = 0; i < 10; i++) {
        arreglo.push(generarAleatorio(1,250));
    }
    return arreglo;
}

function imprimirArreglo(arreglo){
    for (let i = 0; i < 10; i++) {
        console.log(i + '->' + arreglo[i]);
    }
}

imprimirArreglo(llenar());