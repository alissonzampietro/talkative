export default function(io) {
    let peers = new Array();
    io.on('connection', (socket) => {
        peers.push(socket.id);
        console.log('user connected', peers);
        socket.on('disconnect', () => {
            console.log('user disconnected', peers);
            peers.splice(peers.indexOf(socket.id), 1);
        })
    });
}