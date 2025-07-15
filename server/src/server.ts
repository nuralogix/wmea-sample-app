import express,
{ type NextFunction, type Application, type Request, type Response }
from 'express';
import cors from 'cors' ;
import compression from 'compression';
import { join } from 'path';
import { fileURLToPath } from 'url';
import client, { enums } from '@nuralogix.ai/dfx-api-client';
import connectLivereload from 'connect-livereload';
import LiveReload from './livereload.ts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const { DeviceTypeID } = enums;
const distFolder = '../../dist';
const {
    API_URL,
    LICENSE_KEY,
    STUDY_ID,
    NODE_ENV
} = process.env;

export default class Server {
    app: Application;
    appPath = join(__dirname, distFolder);
    port: number;
    apiClient = client({
        url: {
            http: new URL(`https://${API_URL}`),
            wss: new URL(`wss://${API_URL}`),
        },
    });

    constructor(port: string) {
        this.app = express();
        this.port = parseInt(port);
        // The connect-livereload middleware should be placed before serving static files,
        // ensuring that it can inject the livereload script into your HTML. The middleware
        // order matters because Express executes middleware in the order it's defined.
        if (NODE_ENV==='development') this.initLiveReload();
        this.middlewares();
        this.routes();
    }

    initLiveReload() {
        const liveReload = new LiveReload(join(this.appPath, '.build-done'));
        liveReload.init();
        this.app.use(connectLivereload());
    }

    middlewares() {
        this.app.use(function(_req: Request, res: Response, next: NextFunction) {
            // These two headers are needed for shared array buffer to work
            res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            next();
        });
        this.app.use(cors({ credentials: true, origin: '*' }));
        if (NODE_ENV==='production') this.app.use(
            compression() as unknown as express.RequestHandler
        );
    }

    routes() {
        this.app.get('/health', function (_req: Request, res: Response) {
            res.json({
                status: 'ok',
            });
        });

        // return Study ID
        this.app.get('/api/studyId', (_req: Request, res: Response) => {
            res.status(200).json({
                status: '200',
                studyId: STUDY_ID || ''
            });
        });

        // Register License return token and refreshToken
        this.app.get('/api/token', async (_req: Request, res: Response) => {
            const tokenExpiresIn = 60 * 60; // 1 hour
            const payload = {
                Key: LICENSE_KEY || '',
                DeviceTypeID: DeviceTypeID.WIN32,
                Name: 'Anura Web Core SDK',
                Identifier: 'ANURA_WEB_CORE_SDK',
                Version: '0.1.0-alpha.22',
                TokenExpiresIn: tokenExpiresIn
            };
            const registerLicense = await this.apiClient.http.organizations.registerLicense(payload, true);
            const { status, body } = registerLicense;
            if (status === '200') {
                const { Token, RefreshToken } = body;
                res.json({
                    status: status,
                    token: Token,
                    refreshToken: RefreshToken,
                });
            } else {
                res.json({
                    status: status,
                    error: body,
                });
            }
        });

        this.app.use('/', express.static(join(__dirname, distFolder)));
        this.app.use('/', express.static(join(__dirname, distFolder, 'anura-online')));
        this.app.get('/*name', (_req: Request, res: Response) => {
            res.sendFile(join(__dirname, `${distFolder}/index.html`), function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });        
    }

    listen() {
        this.app.listen(this.port, () => {
            // eslint-disable-next-line no-console
            console.log(`${NODE_ENV} server is running on port: `, this.port);
        });
    }    
}