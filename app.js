

// Colocamos al inicio los Requireds. Hay 3 tipos
/*
    -- paquetes no nativos de nodejs que ha hecho otra persona
    const fs = require('express');
    
    -- paquetes que tenemos nosotros y hemos escrito 
    const fs = require('./fs');

    -- paquetes que son de node js
    const fs = require('fs');
*/

// const fs = require('fs');

//let base = 5;

/*
let data = '';

for (let i = 1; i <= 10; i++) {

    // Suma y sigue 
    data += `${base} * ${i} = ${base * i}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) 
        throw err;
    console.log(`The file tabla-${base}.txt has been saved!`);
});
*/





// ************************************************************* */
// ************************************************************* */
// IMPORTAR ARCHIVOS DE NUESTRO PROYECTO, por ejemplo usamos el codigo anterior llamado desde multplicar.js

// -- > lo pasaremos por la terminal como argumento ***    let base = 'a';

// Objeto global disponible a lo largo de toda la aplicacion

// RECUERDA, Despues de una constante o un let vienen unas llaves quiere decir que se trata de una destructuracion

// const multiplicar = require('./multiplicar/multiplicar') // El.js es redundante no se pone

// multiplicar.crearArchivo;

// Lo anterior puede destructurarse mucho mejor visto
/*
const { crearArchivo } = require('./multiplicar/multiplicar')
*/
/* ------- Vamos a introducir la base a traves de un comando directamente en la terminal
                node app --base=5(mandar un argumento)
    * Se va a utilizar el paquete integrado process en concreo process.argv
    * console.log(process) -> asi podemos ver que es este pkg
    * En concreto console.log(process.argv);
*/

//console.log(process.argv);
/*
//Creo el tercer parametro
let argv = process.argv;
let parametro = argv[2]; // Los argumentos en js empiezan en 0 por lo que este nuevo parametro estaria en posicion 2  'tercera posicion'

let base = parametro.split('=')[1]; // separa elementos por ese igual y seleccionamos el primer arg

console.log(base); // Con esto vamos viendo el parametro que es

crearArchivo(base)
    .then( archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err)) ;
*/










// ************************************************************* */
// ************************************************************* */
// UTILIZANDO LA LIBRERIA YARGS PARA ACOMODAR LA ENTRADA DE PARAMETROS Y QUE NOS HAGA LA TABLA DE MULTIPLICAR 
// Si utilizamos las declaraciones let anteriores es bastante engorro para usar mas de un argumento
// Colocamos los require al principio de nuestra aplicacion, Optimizamos codigo

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar')
//const { listarArchivo } = require('./multiplicar/multiplicar')

// En concreto usaras el argv exportado
const argv = require('./config/yargs').argv;

// MIRA EN YARGS.JS, el codigo antes estaba aqui

const colors = require('colors');

let comando = argv._[0]   //Los comandos independientes vienen en un arreglo _: [aqui] ver en   consolelog de -- yargs  // > console.log(argv);

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err)) ;
        break;

    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;

//process
//console.log(argv2);

//yargs
// console.log(argv);

/*

*/
