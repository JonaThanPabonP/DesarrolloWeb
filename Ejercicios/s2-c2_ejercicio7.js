/*
Crea una clase Chiste, que tenga un método que al ser llamado, retorna un chiste al azar entre 5 chistes predefinidos como atributos en la clase.
*/

class Chiste{
    constructor(ch1, ch2, ch3, ch4, ch5){
        this.ch1 = ch1;
        this.ch2 = ch2;
        this.ch3 = ch3;
        this.ch4 = ch4;
        this.ch5 = ch5;
    }

    chisteAleatorio(min, max){
        var aleatorio = Math.floor(Math.random()*(max-min)+min);
        var arreglo = [this.ch1, this.ch2, this.ch3, this.ch4, this.ch5];
        console.log(arreglo[aleatorio-1]);
    }
}

var objeto = new Chiste('chiste escrito completo 1', 'chiste escrito completo 2', 'chiste escrito completo 3', 'chiste escrito completo 4', 'chiste escrito completo 5');
objeto.chisteAleatorio(1,6);