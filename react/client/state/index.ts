import { proxy } from 'valtio';
import measurementState from './measurement/state';
import demographicsState from './demographics/state';
import generalState from './general/state';
import authState from './auth/state';

const appState = {
  general: generalState,
  measurement: measurementState,
  demographics: demographicsState,
  auth: authState,
};

const state = proxy(appState);
// Enable Redux DevTools Extension for Valtio — OPT-IN ONLY (REDUX_DEV_TOOLS=true), not on by
// default in development. valtio's devtools() serializes the entire state tree to the Redux
// DevTools extension on EVERY mutation; with the extension installed and browser DevTools open,
// that per-mutation cost saturates the main thread where the ONNX frame pipeline runs, starving
// detection and breaking measurements. Turn it on (REDUX_DEV_TOOLS env, e.g. in .dev.env) only
// when you specifically need time-travel debugging. REDUX_DEV_TOOLS env is injected from rollup.config.mjs.
// To enable it, uncomment both lines below.
// import { devtools } from 'valtio/utils';
// if (process.env.REDUX_DEV_TOOLS) devtools(state, { name: 'WMEA Sample App', enabled: true });
export default state;
