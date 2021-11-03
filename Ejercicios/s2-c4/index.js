const estud = require('./estudiante.js');
const { printTable } = require('console-table-printer');



var est1 = new estud('Mariana','123',20);
// console.log(est1);
var est2 = new estud('Andrés','234',22);
// console.log(est2);
var est3 = new estud('Ana','345',21);
// console.log(est3);

const listaEstud = [est1, est2, est3];

printTable(listaEstud);