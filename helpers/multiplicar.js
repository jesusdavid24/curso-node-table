const colors = require('colors')
const fs = require('fs');


const crearArchivo = async (base = 5, listar=false, hasta=10) =>{
    
    try { 
        let salida = '';
        let consola = '';

        for (let i = 1; i<=hasta; i++) {
            const multiplicar = base*[i];
            salida += `${base} x ${i} = ${multiplicar}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${multiplicar}\n`;
        
    }
        if(listar, hasta){
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.csv`, salida);

        return `tabla-${base}.csv `
    } catch (err) {
        throw err
        
    }
    
    
}

module.exports = {
    crearArchivo
}