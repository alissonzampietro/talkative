import express from 'express';
import http from 'http';
const app = express();
import routes from './src/routes.mjs';
import socket from './src/socket.mjs';
routes(app);

const PORT = process.env.PORT || 3000;


const server = http.createServer(app);
import {Server} from 'socket.io';

const io = new Server(server);

socket(io);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});