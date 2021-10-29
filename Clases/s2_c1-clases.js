class producto{
    constructor(nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }

    cambiarPrecio(valor){
        this.precio = valor;
    }
}

var producto1 = new producto('Chocorramo', 'lkjas7f', '1500');

console.log(producto1);

producto1.cambiarPrecio(2000);

console.log(producto1);