import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import './hmr.js';
import App from './App.svelte.js';
// import '@pwabuilder/pwaupdate'

const app = new App({
  target: document.body
});

window.app = app;

export default app;

const initSW = () => {
  if ('serviceWorker' in navigator) {
    // Register service worker
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
      }).catch((e) => {
        console.log(e);
    });
  }
}
initSW()

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (undefined /* [snowpack] import.meta.hot */ ) {
//   undefined /* [snowpack] import.meta.hot */ .accept();
//   undefined /* [snowpack] import.meta.hot */ .dispose(() => {
//     app.$destroy();
//   });
// }
