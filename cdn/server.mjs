import express from 'express';
import cors from 'cors';
import client, { enums } from '@nuralogix.ai/dfx-api-client';
import { join } from 'path';
import { fileURLToPath } from 'url';

const { DeviceTypeID } = enums;
const clientPath = fileURLToPath(new URL('./client/', import.meta.url));
const { API_URL, LICENSE_KEY, STUDY_ID } = process.env;

function requireEnv(name, value) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export default class Server {
  constructor(port) {
    this.app = express();
    this.port = Number.parseInt(port, 10);
    if (Number.isNaN(this.port)) {
      throw new Error(`Invalid port: ${port}`);
    }

    this.appPath = clientPath;
    this.apiUrl = requireEnv('API_URL', API_URL);
    this.studyId = requireEnv('STUDY_ID', STUDY_ID);
    this.licenseKey = requireEnv('LICENSE_KEY', LICENSE_KEY);
    this.apiClient = client({
      url: {
        http: new URL(`https://${this.apiUrl}`),
        wss: new URL(`wss://${this.apiUrl}`),
      },
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({ credentials: true, origin: '*' }));
  }

  routes() {
    this.app.get('/health', (_req, res) => {
      res.json({ status: 'ok' });
    });

    this.app.get('/api/studyId', (_req, res) => {
      res.status(200).json({
        status: '200',
        studyId: this.studyId,
      });
    });

    this.app.get('/api/token', async (_req, res) => {
      try {
        const tokenExpiresIn = 60 * 60; // 1 hour
        const payload = {
          Key: this.licenseKey,
          DeviceTypeID: DeviceTypeID.WIN32,
          Name: 'Anura Web Core SDK',
          Identifier: 'ANURA_WEB_CORE_SDK',
          Version: '0.1.0-alpha.36',
          TokenExpiresIn: tokenExpiresIn,
        };
        const registerLicense =
          await this.apiClient.http.organizations.registerLicense(
            payload,
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

    this.app.use('/', express.static(this.appPath, { extensions: ['html'] }));
    this.app.get('/*name', (_req, res) => {
      res.sendFile(join(this.appPath, 'index.html'), (err) => {
        if (err) res.status(500).send(err);
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`CDN sample running at http://localhost:${this.port}`);
    });
  }
}
