import express from 'express';
import cors from 'cors';
import client, { enums } from '@nuralogix.ai/dfx-api-client';
import { resolve, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const clientRoot = resolve(__dirname, 'client');
const { DeviceTypeID } = enums;
const { API_URL, LICENSE_KEY, STUDY_ID } = process.env;

function assertEnv(name, value) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function createApiClient() {
  const apiUrl = assertEnv('API_URL', API_URL);
  return client({
    url: {
      http: new URL(`https://${apiUrl}`),
      wss: new URL(`wss://${apiUrl}`),
    },
  });
}

export function createApp() {
  const app = express();
  const apiClient = createApiClient();

  app.use(cors({ credentials: true, origin: '*' }));

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/studyId', (_req, res) => {
    res.status(200).json({
      status: '200',
      studyId: assertEnv('STUDY_ID', STUDY_ID),
    });
  });

  app.get('/api/token', async (_req, res) => {
    try {
      const registerLicense =
        await apiClient.http.organizations.registerLicense(
          {
            Key: assertEnv('LICENSE_KEY', LICENSE_KEY),
            DeviceTypeID: DeviceTypeID.WIN32,
            Name: 'Anura Web Core SDK',
            Identifier: 'ANURA_WEB_CORE_SDK',
            Version: '0.1.0-alpha.36',
            TokenExpiresIn: 60 * 60,
          },
          false
        );

      const { status, body } = registerLicense;
      if (status === '200') {
        const { Token, RefreshToken } = body;
        res.json({ status, token: Token, refreshToken: RefreshToken });
      } else {
        res.status(Number.parseInt(status, 10)).json({ status, error: body });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : error;
      res.status(500).json({ status: '500', error: message });
    }
  });

  app.use(express.static(clientRoot, { extensions: ['html'] }));
  app.use((_req, res) => {
    res.sendFile(join(clientRoot, 'index.html'));
  });

  return app;
}

export function startServer() {
  const port = Number.parseInt(process.env.PORT ?? '7000', 10);
  const app = createApp();

  const server = app.listen(port, () => {
    console.log(`CDN sample running at http://localhost:${port}`);
  });

  return server;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  startServer();
}
