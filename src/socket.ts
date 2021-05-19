import { Server, Socket } from 'socket.io';
import https from 'https';
import app, { session } from './app';
import sharedsession from 'express-socket.io-session';
import config from './config';

const server = https.createServer(config.https ,app);
const io = new Server(server);

io.use(sharedsession(session));

const map = new Map();
io.on('connection', (socket: Socket) => {
  
  map.set(socket.id, socket.handshake.session?.username);
  console.log(socket.id + 'connect');
  io.emit('someone has connected', {
    name: 'system', 
    message: `${socket.handshake.session?.username}님이 접속하셨습니다.`,
    members: Array.from(map.values()),
  });

  socket.on('disconnect', () => {
    map.delete(socket.id);
    io.emit('someone has disconnected', { 
      name: 'system', 
      message: `${socket.handshake.session?.username}님이 떠났습니다.`,
      members: Array.from(map.values())
    });
    console.log(socket.id + 'disconnect');
  });

  socket.on('message', message => {
    const info = {
      username: socket.handshake.session?.username,
      message: message,
    };
    io.emit('message', info);
  })
})

export default server;