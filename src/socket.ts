import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import app from './app';

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
  io.emit('message', { name: 'admin', message: '누군가 접속했습니다.'})

  socket.on('disconnect', () => {
    io.emit('message', { name: 'admin', message: '누군가 나갔습니다.'})
  })

  socket.on('message', data => {
    io.emit('message', data);
  })
})

export default server;