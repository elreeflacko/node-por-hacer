const descripcion = {
    demand : true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'    
};

const completado = {
    default : true,
    alias : 'c',
    desc: 'Marca como completado o pendiente la tarea'  
}

const argv = require('yargs')
                .command('crear', 'Crea una tarea por hacer', {
                        descripcion
                })
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                        descripcion,
                        completado  
                })
                .command('borrar', 'Borra una tarea de la base de datos', {
                        descripcion  
                })
                .help()   
                .argv;

module.exports = {
    argv
}