const socket = io('/');

socket.on('connect', () => {
    console.log('succesfully connected to web server');
    console.log(socket.id)
})