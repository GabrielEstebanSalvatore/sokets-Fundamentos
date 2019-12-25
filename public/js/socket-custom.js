var soket = io();
        soket.on('connect', function(){
            console.log('Conectado al servido');
        });
        //Escuchar
        soket.on('disconnect', function(){
            console.log('Perdimos conexión con el servidor')
        });
        //Enviar información
        soket.emit('enviarMensaje', {
            usuario: 'Gabriel',
            mensaje: 'Hola'
        }, function(resp){
            console.log('Respuesta server', resp);
        });
        //Escuchar información
        soket.on('enviarMensaje', function(mensaje){
            console.log('Info del servidor: ', mensaje);
        });