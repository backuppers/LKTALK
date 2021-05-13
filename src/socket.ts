import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import app from './app';

const server = createServer(app);
const io = new Server(server);

export default server;