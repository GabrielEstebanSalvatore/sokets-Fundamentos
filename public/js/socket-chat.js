var soket = io();

var params = new URLSearchParams (window.location.search);
if (!params.has('nombre' ) || !params.has('sala')){
    window.location = 'index.html'
    throw new Error('El nombre y sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}
soket.on('connect', function () {
    console.log('Conectado al servido');

    soket.emit('entrarChat', usuario, function (resp){
        console.log('Usuarios conectados', resp);
    })
});
//Escuchar
soket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor')
});
//Enviar información
/*soket.emit('crearMensaje', {
    usuario: 'Gabriel',
    mensaje: 'Hola'
}, function (resp) {
    console.log('Respuesta server', resp);
});*/

//Escuchar información
soket.on('crearMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});

//Escuchar canbuis de usuarios
//Cuando un usuario entra o sale
soket.on('listaPersona', function (personas) {
    console.log(personas);
});

//Mensajes privados
soket.on('mensajePrivado', function(mensaje){
    console.log('Mensaje Privado:', mensaje);
    
})
