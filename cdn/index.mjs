import express from 'express';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const clientRoot = resolve(__dirname, 'client');

export function startServer() {
  const port = parseInt(process.env.PORT ?? '7000', 10);
  const app = express();

  app.use(express.static(clientRoot, { extensions: ['html'] }));

  app.use((req, res) => {
    res.status(404).send('Not Found');
  });

  const server = app.listen(port, () => {
    console.log(`CDN demo server running at http://localhost:${port} (serving ${clientRoot})`);
    console.log('Remember to start the API proxy via "yarn serve:dev" in ./server');
  });

  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer();
}
