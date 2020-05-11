// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

var params = new URLSearchParams(window.location.search);
if(!params.has('nombre') || !params.has('sala')){
    window.location = 'index.html';
    throw new Error('El nombre o sala es necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function(resp){
        console.log('usuarios conectados', resp);
    });
});

// socket.on('crearMensaje', function(mensaje){
//     console.log('mensaje: ', mensaje);
// });

socket.on('listaPersonas', function(mensaje){
    console.log('Listado de personas: ', mensaje);
});

//Mensajes privados
socket.on('mensajePrivado', function(mensaje){
    console.log('mensaje privado: ', mensaje);
});