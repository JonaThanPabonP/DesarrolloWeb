// Crea una clase Paciente que tenga los atributos nombre, edad, tipo de sangre y género. Debe contener un método de mostrar datos del paciente.

class Paciente{
    constructor(nombre, edad, tipoSangre, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.tipoSangre = tipoSangre;
        this.genero = genero;
    }

    imprimirDatosPaciente(){
        console.log(`El paciente ${this.nombre} tiene ${this.edad} años, tipo de sangre ${this.tipoSangre} y es de género ${this.genero}`);
    }

}

var Paciente1 = new Paciente('Pepito', 28, 'A+', 'Masculino');

console.log(Paciente1);
Paciente1.imprimirDatosPaciente();