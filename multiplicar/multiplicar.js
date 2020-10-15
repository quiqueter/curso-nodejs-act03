

const fs = require('fs');
const { resolve } = require('path');
// voy a usar colors aqui tambien
const colors = require('colors');

// EJERCICIO creamos un listado mostrado por consola llamado desde apo.js
let listarArchivo = (base, limite = 10 /* por defecto */) => {

    
    console.log('===================================================='.green);
    console.log('===================================================='.green);
    console.log(`=======   TABLA DEL ${base }                   `.green);
    console.log('===================================================='.green);
    console.log('===================================================='.green);

        for (let i = 1; i <= (limite); i++) {

            console.log(`${base} * ${i} = ${base * i}`);
        }

}


let /*module.exports.*/crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Revisamos que la base sea un numero 
        if (!Number(base) ) {
            reject (`La base introducida no es numero: ${base}`);
            return; // Sale del codigo
        } 

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (err)
            else
                resolve(`tabla-${base}.txt`.rainbow);
                //console.log(`The file tabla-${base}.txt has been saved!`);
        });

    })
}

// Objeto global disponible a lo largo de toda la aplicacion
// Podemos hacer que la funcion se use para tod ala app de esta forma o poniendolo al definir la funcionc
module.exports = {
    crearArchivo,
    listarArchivo
}
