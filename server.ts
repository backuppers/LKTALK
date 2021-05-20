import server from './src/socket';
const PORT: number = 3000;

server.listen(PORT, () => console.log(`${PORT} on server!!!`));

