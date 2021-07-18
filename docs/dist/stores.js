import localForage from '../_snowpack/pkg/localforage.js';
import { writable, readable } from '../_snowpack/pkg/svelte/store.js';
import { dataURLtoBlob } from './utils/helpers.js';
import { tweened } from '../_snowpack/pkg/svelte/motion.js';
import { cubicInOut } from '../_snowpack/pkg/svelte/easing.js';

export const version = '0.1.02';
console.log('%c%s',
				'color: #ffffff; background: #009df7;padding:4px 8px 4px 8px;border-radius:24px',
				'Kalidoface 2D '+version)
let currentLang = navigator.languages ? navigator.languages[0] : 'en';
export const setLang = writable('en');
export const breakpoint = writable(window.innerWidth > 600 ? 'desktop' : 'mobile');
export const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;

export const isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;

// export const isSafari = false;
export const testSupportOfCanvasCapureStream = () => {
    return 'function' === typeof HTMLCanvasElement.prototype.captureStream;
};
export const hasPIP = document.pictureInPictureEnabled && !isSafari && testSupportOfCanvasCapureStream;

export const DIM = writable({ w: 0, h: 0, s: 1, cw: 0, ch: 0 });
export const urlBase = 'https://yeemachine.github.io/kalidoface-live2d-models/';

export const inactive = writable(false);
export const firstLoad = writable(false);
export const firstLoad0_1 = tweened(0, {
    duration: 2000,
    easing: cubicInOut,
});

export const largeWipe = writable(null);
export const quickNavExpanded = writable(false);
export const subNavExpanded = writable(null);
export const infoExpanded = writable(false);

export const getLocalStorage = async (store, key, fallback, callback) => {
    // console.log(key);
    localForage
        .getItem(key + version)
        .then(function(value) {
            let newValue = value !== null ? value : fallback;

            if (callback) {
                callback(newValue);
            }
            store.set(newValue);
        })
        .catch(function(err) {
            // store.set(fallback)
            console.error(err);
        });
};

export const subLocalStorage = (
    store,
    key,
    exception = e => {
        return false;
    },
) => {
    store.subscribe(value => {
        if (exception(value)) {
            // console.log('break')
            return;
        }

        localForage.setItem(key + version, value);
    });
};
