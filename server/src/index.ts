import Server from './server.ts';

const PORT = process.env.PORT || '3000';
const server = new Server(PORT);
server.listen();
