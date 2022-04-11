let app = require('./config/server');

let server = app.listen(5000, function() {
    console.log('Servidor está online');
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
    console.log("Usuário se conectou");

    socket.on('disconnect', () => {
        console.log("O usuário se desconectou");
    })
});