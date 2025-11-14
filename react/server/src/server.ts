import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import { join } from 'path';
import { fileURLToPath } from 'url';
import client, { enums } from '@nuralogix.ai/dfx-api-client';
import connectLivereload from 'connect-livereload';
import LiveReload from './livereload.js';

const { DeviceTypeID } = enums;
const distPath = fileURLToPath(new URL('../../dist/', import.meta.url));
const { API_URL, LICENSE_KEY, STUDY_ID } = process.env;
const NODE_ENV = process.env.NODE_ENV ?? 'development';

function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export default class Server {
  app: Application;
  appPath = distPath;
  port: number;
  apiUrl = requireEnv('API_URL', API_URL);
  studyId = requireEnv('STUDY_ID', STUDY_ID);
  licenseKey = requireEnv('LICENSE_KEY', LICENSE_KEY);
  apiClient = client({
    url: {
      http: new URL(`https://${this.apiUrl}`),
      wss: new URL(`wss://${this.apiUrl}`),
    },
  });

  constructor(port: string) {
    this.app = express();
    this.port = Number.parseInt(port, 10);
    if (Number.isNaN(this.port)) {
      throw new Error(`Invalid port: ${port}`);
    }

    if (NODE_ENV === 'development') this.initLiveReload();
    this.middlewares();
    this.routes();
  }

  initLiveReload() {
    const liveReload = new LiveReload(join(this.appPath, '.build-done'));
    liveReload.init();
    this.app.use(connectLivereload());
  }

  middlewares() {
    this.app.use(cors({ credentials: true, origin: '*' }));
    if (NODE_ENV === 'production') {
      this.app.use(
        compression() as unknown as (req: Request, res: Response, next: NextFunction) => void
      );
    }
  }

  routes() {
    this.app.get('/health', (_req: Request, res: Response) => {
      res.json({ status: 'ok' });
    });

    this.app.get('/api/studyId', (_req: Request, res: Response) => {
      res.status(200).json({
        status: '200',
        studyId: this.studyId,
      });
    });

    this.app.get('/api/token', async (_req: Request, res: Response) => {
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
        const registerLicense = await this.apiClient.http.organizations.registerLicense(
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

    this.app.use('/', express.static(this.appPath));
    this.app.use('/', express.static(join(this.appPath, 'wmea')));
    this.app.get('/*name', (_req: Request, res: Response) => {
      res.sendFile(join(this.appPath, 'index.html'), (err: Error | null) => {
        if (err) res.status(500).send(err);
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`${NODE_ENV} server is running on port:`, this.port);
    });
  }
}
