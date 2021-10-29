function miFuncion(){
    console.log(a+z);
}

try {
    miFuncion();
} catch (e) {
    console.error('Error');
    console.log(e.message);
}

console.log('Hola Mundo');