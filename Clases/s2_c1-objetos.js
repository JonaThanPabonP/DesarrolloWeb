var Hotel = {
    "nombre" : "Hilton",
    "estrellas" : 5,
    "Presentacion":function(){
        console.log(`El hotel ${this.nombre} tiene ${this.estrellas} estrellas`);
    }
};

console.log(Hotel.nombre);
Hotel.Presentacion();