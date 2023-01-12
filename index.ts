import { Server } from 'socket.io';

const io = new Server(80);
var sockets = [];

io.on('connection', (socket) => {
  console.log('Client Connected');
  sockets.push(socket);
});
io.listen(80);
