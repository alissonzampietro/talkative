import * as store from './store.js';

const socket = io('/');

socket.on('connect', () => {
    console.log('succesfully connected to web server: ',socket.id);
    store.setSocketId(socket.id);
})