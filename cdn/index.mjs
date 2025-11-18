import Server from './server.mjs';

const PORT = process.env.PORT ?? '7000';
const server = new Server(PORT);
server.listen();
