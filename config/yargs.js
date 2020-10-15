

const opts = {
    base: {
        demand : true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', //ayuda descr para usuario
    // //Objeto que va a tener la informacion de los parametros que se deben insertar
    // {
    //     base/* argumento */: {
    //         demand: true,
    //         /* Obligatorio */
    //         alias: 'b'/* Ahora puedes escribir node app listar -b 5 */
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10 // valor por degecto
    //     }
    // }
    opts)
    .command('crear', 'Exporta un txt con la tabla de multipicar', opts)
        // {
        //     base: {
        //         demand : true,
        //         alias: 'b'
        //     },
        //     limite: {
        //         alias: 'l',
        //         default: 10
        //     }
        // }
    .help() //Esta funcion enseña la ayuda  node app --help
    .argv;

module.exports = {
    argv
}