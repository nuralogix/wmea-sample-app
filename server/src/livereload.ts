import { watch } from 'fs';
import { createServer, type LiveReloadServer } from 'livereload';

export default class LiveReload {
  liveReloadServer: LiveReloadServer;

  constructor(watchedFile: string) {
    this.liveReloadServer = createServer({ extraExts: ['mjs'] });

    const httpServer = this.liveReloadServer.config.server;
    if (httpServer) {
      httpServer.prependListener('request', (_req, res) => {
        // Cross-Origin-Embedder-Policy and Cross-Origin-Opener-Policy headers are needed
        // for shared array buffer to work. Since livereload.js is served from a different
        // origin, the request will be blocked by the browser.
        // As a workaround, we set the cross-origin headers to allow the request
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
      });
    }

    // Watch for the `dist/.build-done` file change
    watch(watchedFile, () => {
      this.refresh();
    });
  }

  refresh() {
    console.log('Build completed. Reloading page...');
    this.liveReloadServer.refresh('/');
  }

  init() {
    this.liveReloadServer.server.once('connection', () => {
      setTimeout(() => {
        this.liveReloadServer.refresh('/');
      }, 100);
    });
  }
}
