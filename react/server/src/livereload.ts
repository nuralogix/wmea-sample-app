import { watch } from 'fs';
import { createServer, type LiveReloadServer } from 'livereload';

export default class LiveReload {
  liveReloadServer: LiveReloadServer;

  constructor(watchedFile: string) {
    this.liveReloadServer = createServer({ extraExts: ['mjs'] });

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
