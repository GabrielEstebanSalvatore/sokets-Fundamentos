
const {io} = require('../server')

//IO = esta es la comunicacion del backend

io.on('connection', (client)=>{
    
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario : 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback)=>{


        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
        /*if (mensaje.usuario){
            callback({
                resp: '¡TODO SALIÓ BIEN!'
            });
        }else{
            callback({
                resp: '¡TODO SALIÓ MAL!'
            });
        }*/

    });
});