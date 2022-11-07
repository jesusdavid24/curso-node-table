const argv = require('yargs')
                .options('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                })
                .options('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption: true,
                    default:false
                })
                .options('h',{
                    alias:'hasta',
                    type:'number',
                    default: 10,
                })
                .check((argv, options) => {
                    console.log('yargs', argv)
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    return true;
                })     
                .argv;

module.exports = argv;