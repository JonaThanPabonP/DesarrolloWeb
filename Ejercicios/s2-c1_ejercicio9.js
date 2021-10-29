/*
Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular, número de cuenta y cantidad(puede tener decimales).
Tendrá dos métodos especiales:
- ingresar: Se ingresa la cantidad a la cuenta, si la cantidad introducida es negatia, no se hará nada.
- retirar: si se intenta retirar más de lo que hay de saldo, imprimir que no es posible retirar.
*/

class Cuenta{
    constructor(titular, numeroCuenta, cantidad){
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.cantidad = cantidad;
    }

    ingresar(cantidad){
        if (cantidad>0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad){
        if (cantidad>this.cantidad) {
            console.log('No es posible retirar');
        } else{
            this.cantidad -= cantidad;
        }
    }

}

var cuenta1 = new Cuenta('Pepito', '2891723', 128900);

cuenta1.ingresar(83289);
console.log(cuenta1.cantidad);
cuenta1.retirar(100000);
console.log(cuenta1.cantidad);
cuenta1.retirar(10000000000);