import { a as createCommonjsModule } from './_commonjsHelpers-8a10f9bf.js';

var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}

/*!
 * @pixi/settings - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

// The ESM/CJS versions of ismobilejs only
var isMobile$1 = isMobile(window.navigator);

/**
 * The maximum recommended texture units to use.
 * In theory the bigger the better, and for desktop we'll use as many as we can.
 * But some mobile devices slow down if there is to many branches in the shader.
 * So in practice there seems to be a sweet spot size that varies depending on the device.
 *
 * In v4, all mobile devices were limited to 4 texture units because for this.
 * In v5, we allow all texture units to be used on modern Apple or Android devices.
 *
 * @private
 * @param {number} max
 * @returns {number}
 */
function maxRecommendedTextures(max) {
    var allowMax = true;
    if (isMobile$1.tablet || isMobile$1.phone) {
        if (isMobile$1.apple.device) {
            var match = (navigator.userAgent).match(/OS (\d+)_(\d+)?/);
            if (match) {
                var majorVersion = parseInt(match[1], 10);
                // Limit texture units on devices below iOS 11, which will be older hardware
                if (majorVersion < 11) {
                    allowMax = false;
                }
            }
        }
        if (isMobile$1.android.device) {
            var match = (navigator.userAgent).match(/Android\s([0-9.]*)/);
            if (match) {
                var majorVersion = parseInt(match[1], 10);
                // Limit texture units on devices below Android 7 (Nougat), which will be older hardware
                if (majorVersion < 7) {
                    allowMax = false;
                }
            }
        }
    }
    return allowMax ? max : 4;
}

/**
 * Uploading the same buffer multiple times in a single frame can cause performance issues.
 * Apparent on iOS so only check for that at the moment
 * This check may become more complex if this issue pops up elsewhere.
 *
 * @private
 * @returns {boolean}
 */
function canUploadSameBuffer() {
    return !isMobile$1.apple.device;
}

/**
 * User's customizable globals for overriding the default PIXI settings, such
 * as a renderer's default resolution, framerate, float precision, etc.
 * @example
 * // Use the native window resolution as the default resolution
 * // will support high-density displays when rendering
 * PIXI.settings.RESOLUTION = window.devicePixelRatio;
 *
 * // Disable interpolation when scaling, will make texture be pixelated
 * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
 * @namespace PIXI.settings
 */
var settings = {
    /**
     * If set to true WebGL will attempt make textures mimpaped by default.
     * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
     *
     * @static
     * @name MIPMAP_TEXTURES
     * @memberof PIXI.settings
     * @type {PIXI.MIPMAP_MODES}
     * @default PIXI.MIPMAP_MODES.POW2
     */
    MIPMAP_TEXTURES: 1,
    /**
     * Default anisotropic filtering level of textures.
     * Usually from 0 to 16
     *
     * @static
     * @name ANISOTROPIC_LEVEL
     * @memberof PIXI.settings
     * @type {number}
     * @default 0
     */
    ANISOTROPIC_LEVEL: 0,
    /**
     * Default resolution / device pixel ratio of the renderer.
     *
     * @static
     * @name RESOLUTION
     * @memberof PIXI.settings
     * @type {number}
     * @default 1
     */
    RESOLUTION: 1,
    /**
     * Default filter resolution.
     *
     * @static
     * @name FILTER_RESOLUTION
     * @memberof PIXI.settings
     * @type {number}
     * @default 1
     */
    FILTER_RESOLUTION: 1,
    /**
     * The maximum textures that this device supports.
     *
     * @static
     * @name SPRITE_MAX_TEXTURES
     * @memberof PIXI.settings
     * @type {number}
     * @default 32
     */
    SPRITE_MAX_TEXTURES: maxRecommendedTextures(32),
    // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
    // TODO: maybe add PARTICLE.BATCH_SIZE: 15000
    /**
     * The default sprite batch size.
     *
     * The default aims to balance desktop and mobile devices.
     *
     * @static
     * @name SPRITE_BATCH_SIZE
     * @memberof PIXI.settings
     * @type {number}
     * @default 4096
     */
    SPRITE_BATCH_SIZE: 4096,
    /**
     * The default render options if none are supplied to {@link PIXI.Renderer}
     * or {@link PIXI.CanvasRenderer}.
     *
     * @static
     * @name RENDER_OPTIONS
     * @memberof PIXI.settings
     * @type {object}
     * @property {HTMLCanvasElement} view=null
     * @property {number} resolution=1
     * @property {boolean} antialias=false
     * @property {boolean} autoDensity=false
     * @property {boolean} transparent=false
     * @property {number} backgroundColor=0x000000
     * @property {boolean} clearBeforeRender=true
     * @property {boolean} preserveDrawingBuffer=false
     * @property {number} width=800
     * @property {number} height=600
     * @property {boolean} legacy=false
     */
    RENDER_OPTIONS: {
        view: null,
        antialias: false,
        autoDensity: false,
        transparent: false,
        backgroundColor: 0x000000,
        clearBeforeRender: true,
        preserveDrawingBuffer: false,
        width: 800,
        height: 600,
        legacy: false,
    },
    /**
     * Default Garbage Collection mode.
     *
     * @static
     * @name GC_MODE
     * @memberof PIXI.settings
     * @type {PIXI.GC_MODES}
     * @default PIXI.GC_MODES.AUTO
     */
    GC_MODE: 0,
    /**
     * Default Garbage Collection max idle.
     *
     * @static
     * @name GC_MAX_IDLE
     * @memberof PIXI.settings
     * @type {number}
     * @default 3600
     */
    GC_MAX_IDLE: 60 * 60,
    /**
     * Default Garbage Collection maximum check count.
     *
     * @static
     * @name GC_MAX_CHECK_COUNT
     * @memberof PIXI.settings
     * @type {number}
     * @default 600
     */
    GC_MAX_CHECK_COUNT: 60 * 10,
    /**
     * Default wrap modes that are supported by pixi.
     *
     * @static
     * @name WRAP_MODE
     * @memberof PIXI.settings
     * @type {PIXI.WRAP_MODES}
     * @default PIXI.WRAP_MODES.CLAMP
     */
    WRAP_MODE: 33071,
    /**
     * Default scale mode for textures.
     *
     * @static
     * @name SCALE_MODE
     * @memberof PIXI.settings
     * @type {PIXI.SCALE_MODES}
     * @default PIXI.SCALE_MODES.LINEAR
     */
    SCALE_MODE: 1,
    /**
     * Default specify float precision in vertex shader.
     *
     * @static
     * @name PRECISION_VERTEX
     * @memberof PIXI.settings
     * @type {PIXI.PRECISION}
     * @default PIXI.PRECISION.HIGH
     */
    PRECISION_VERTEX: 'highp',
    /**
     * Default specify float precision in fragment shader.
     * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
     *
     * @static
     * @name PRECISION_FRAGMENT
     * @memberof PIXI.settings
     * @type {PIXI.PRECISION}
     * @default PIXI.PRECISION.MEDIUM
     */
    PRECISION_FRAGMENT: isMobile$1.apple.device ? 'highp' : 'mediump',
    /**
     * Can we upload the same buffer in a single frame?
     *
     * @static
     * @name CAN_UPLOAD_SAME_BUFFER
     * @memberof PIXI.settings
     * @type {boolean}
     */
    CAN_UPLOAD_SAME_BUFFER: canUploadSameBuffer(),
    /**
     * Enables bitmap creation before image load. This feature is experimental.
     *
     * @static
     * @name CREATE_IMAGE_BITMAP
     * @memberof PIXI.settings
     * @type {boolean}
     * @default false
     */
    CREATE_IMAGE_BITMAP: false,
    /**
     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Advantages can include sharper image quality (like text) and faster rendering on canvas.
     * The main disadvantage is movement of objects may appear less smooth.
     *
     * @static
     * @constant
     * @memberof PIXI.settings
     * @type {boolean}
     * @default false
     */
    ROUND_PIXELS: false,
};

var eventemitter3 = createCommonjsModule(function (module) {

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
{
  module.exports = EventEmitter;
}
});

var earcut_1 = earcut;
var _default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    var bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }

    var bridgeReverse = splitPolygon(bridge, hole);

    // filter collinear points around the cuts
    var filteredBridge = filterPoints(bridge, bridge.next);
    filterPoints(bridgeReverse, bridgeReverse.next);

    // Check if input node was removed by the filtering
    return outerNode === bridge ? filteredBridge : outerNode;
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};
earcut_1.default = _default;

/*! https://mths.be/punycode v1.4.1 by @mathias */


/** Highest positive signed 32-bit float value */
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\x20-\x7E]/; // unprintable ASCII chars + non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors = {
  'overflow': 'Overflow: input needs wider integers to process',
  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
  throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
  var parts = string.split('@');
  var result = '';
  if (parts.length > 1) {
    // In email addresses, only the domain name should be punycoded. Leave
    // the local part (i.e. everything up to `@`) intact.
    result = parts[0] + '@';
    string = parts[1];
  }
  // Avoid `split(regex)` for IE8 compatibility. See #17.
  string = string.replace(regexSeparators, '\x2E');
  var labels = string.split('.');
  var encoded = map(labels, fn).join('.');
  return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
  var output = [],
    counter = 0,
    length = string.length,
    value,
    extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
function digitToBasic(digit, flag) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for ( /* no initialization */ ; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
function encode(input) {
  var n,
    delta,
    handledCPCount,
    basicLength,
    bias,
    j,
    m,
    q,
    k,
    t,
    currentValue,
    output = [],
    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,
    /** Cached calculation results */
    handledCPCountPlusOne,
    baseMinusT,
    qMinusT;

  // Convert the input in UCS-2 to Unicode
  input = ucs2decode(input);

  // Cache the length
  inputLength = input.length;

  // Initialize the state
  n = initialN;
  delta = 0;
  bias = initialBias;

  // Handle the basic code points
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  handledCPCount = basicLength = output.length;

  // `handledCPCount` is the number of code points that have been handled;
  // `basicLength` is the number of basic code points.

  // Finish the basic string - if it is not empty - with a delimiter
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {

    // All non-basic code points < n have been handled already. Find the next
    // larger one:
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    // but guard against overflow
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error('overflow');
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < n && ++delta > maxInt) {
        error('overflow');
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer
        for (q = delta, k = base; /* no condition */ ; k += base) {
          t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(
            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;

  }
  return output.join('');
}

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ?
      'xn--' + encode(string) :
      string;
  });
}

function isNull(arg) {
  return arg === null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function isString(arg) {
  return typeof arg === 'string';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};
function stringifyPrimitive(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
}

function stringify (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map$1(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map$1(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
}
function map$1 (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

function parse(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
}

// Copyright Joyent, Inc. and other Node contributors.
var _polyfillNode_url = {
  parse: urlParse,
  resolve: urlResolve,
  resolveObject: urlResolveObject,
  format: urlFormat,
  Url: Url
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
  portPattern = /:[0-9]*$/,

  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

  // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),
  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
  hostEndingChars = ['/', '?', '#'],
  hostnameMaxLen = 255,
  hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
  hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  },
  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },
  // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  };

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  return parse$1(this, url, parseQueryString, slashesDenoteHost);
};

function parse$1(self, url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError('Parameter \'url\' must be a string, not ' + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
    splitter =
    (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
    uSplit = url.split(splitter),
    slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self.path = rest;
      self.href = rest;
      self.pathname = simplePath[1];
      if (simplePath[2]) {
        self.search = simplePath[2];
        if (parseQueryString) {
          self.query = parse(self.search.substr(1));
        } else {
          self.query = self.search.substr(1);
        }
      } else if (parseQueryString) {
        self.search = '';
        self.query = {};
      }
      return self;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] &&
    (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    self.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    parseHost(self);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    self.hostname = self.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = self.hostname[0] === '[' &&
      self.hostname[self.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = self.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            self.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (self.hostname.length > hostnameMaxLen) {
      self.hostname = '';
    } else {
      // hostnames are always lower case.
      self.hostname = self.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      self.hostname = toASCII(self.hostname);
    }

    p = self.port ? ':' + self.port : '';
    var h = self.hostname || '';
    self.host = h + p;
    self.href += self.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      self.hostname = self.hostname.substr(1, self.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    self.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    self.search = rest.substr(qm);
    self.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self.query = parse(self.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    self.search = '';
    self.query = {};
  }
  if (rest) self.pathname = rest;
  if (slashedProtocol[lowerProto] &&
    self.hostname && !self.pathname) {
    self.pathname = '/';
  }

  //to support http.request
  if (self.pathname || self.search) {
    p = self.pathname || '';
    var s = self.search || '';
    self.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  self.href = format(self);
  return self;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (isString(obj)) obj = parse$1({}, obj);
  return format(obj);
}

function format(self) {
  var auth = self.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = self.protocol || '',
    pathname = self.pathname || '',
    hash = self.hash || '',
    host = false,
    query = '';

  if (self.host) {
    host = auth + self.host;
  } else if (self.hostname) {
    host = auth + (self.hostname.indexOf(':') === -1 ?
      self.hostname :
      '[' + this.hostname + ']');
    if (self.port) {
      host += ':' + self.port;
    }
  }

  if (self.query &&
    isObject(self.query) &&
    Object.keys(self.query).length) {
    query = stringify(self.query);
  }

  var search = self.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (self.slashes ||
    (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
}

Url.prototype.format = function() {
  return format(this);
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
      result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }
  var relPath;
  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
    isRelAbs = (
      relative.host ||
      relative.pathname && relative.pathname.charAt(0) === '/'
    ),
    mustEndAbs = (isRelAbs || isSourceAbs ||
      (result.host && relative.pathname)),
    removeAllDots = mustEndAbs,
    srcPath = result.pathname && result.pathname.split('/') || [],
    psychotic = result.protocol && !slashedProtocol[result.protocol];
  relPath = relative.pathname && relative.pathname.split('/') || [];
  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }
  var authInHost;
  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
      relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      authInHost = result.host && result.host.indexOf('@') > 0 ?
        result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
        (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
    (result.host || relative.host || srcPath.length > 1) &&
    (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
    (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
    (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
      srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    authInHost = result.host && result.host.indexOf('@') > 0 ?
      result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
      (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  return parseHost(this);
};

function parseHost(self) {
  var host = self.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      self.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) self.hostname = host;
}

/*!
 * @pixi/constants - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
/**
 * Different types of environments for WebGL.
 *
 * @static
 * @memberof PIXI
 * @name ENV
 * @enum {number}
 * @property {number} WEBGL_LEGACY - Used for older v1 WebGL devices. PixiJS will aim to ensure compatibility
 *  with older / less advanced devices. If you experience unexplained flickering prefer this environment.
 * @property {number} WEBGL - Version 1 of WebGL
 * @property {number} WEBGL2 - Version 2 of WebGL
 */
var ENV;
(function (ENV) {
    ENV[ENV["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
    ENV[ENV["WEBGL"] = 1] = "WEBGL";
    ENV[ENV["WEBGL2"] = 2] = "WEBGL2";
})(ENV || (ENV = {}));
/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @memberof PIXI
 * @name RENDERER_TYPE
 * @enum {number}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
var RENDERER_TYPE;
(function (RENDERER_TYPE) {
    RENDERER_TYPE[RENDERER_TYPE["UNKNOWN"] = 0] = "UNKNOWN";
    RENDERER_TYPE[RENDERER_TYPE["WEBGL"] = 1] = "WEBGL";
    RENDERER_TYPE[RENDERER_TYPE["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE || (RENDERER_TYPE = {}));
/**
 * Bitwise OR of masks that indicate the buffers to be cleared.
 *
 * @static
 * @memberof PIXI
 * @name BUFFER_BITS
 * @enum {number}
 * @property {number} COLOR - Indicates the buffers currently enabled for color writing.
 * @property {number} DEPTH - Indicates the depth buffer.
 * @property {number} STENCIL - Indicates the stencil buffer.
 */
var BUFFER_BITS;
(function (BUFFER_BITS) {
    BUFFER_BITS[BUFFER_BITS["COLOR"] = 16384] = "COLOR";
    BUFFER_BITS[BUFFER_BITS["DEPTH"] = 256] = "DEPTH";
    BUFFER_BITS[BUFFER_BITS["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS || (BUFFER_BITS = {}));
/**
 * Various blend modes supported by PIXI.
 *
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @memberof PIXI
 * @name BLEND_MODES
 * @enum {number}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 * @property {number} NORMAL_NPM
 * @property {number} ADD_NPM
 * @property {number} SCREEN_NPM
 * @property {number} NONE
 * @property {number} SRC_IN
 * @property {number} SRC_OUT
 * @property {number} SRC_ATOP
 * @property {number} DST_OVER
 * @property {number} DST_IN
 * @property {number} DST_OUT
 * @property {number} DST_ATOP
 * @property {number} SUBTRACT
 * @property {number} SRC_OVER
 * @property {number} ERASE
 * @property {number} XOR
 */
var BLEND_MODES;
(function (BLEND_MODES) {
    BLEND_MODES[BLEND_MODES["NORMAL"] = 0] = "NORMAL";
    BLEND_MODES[BLEND_MODES["ADD"] = 1] = "ADD";
    BLEND_MODES[BLEND_MODES["MULTIPLY"] = 2] = "MULTIPLY";
    BLEND_MODES[BLEND_MODES["SCREEN"] = 3] = "SCREEN";
    BLEND_MODES[BLEND_MODES["OVERLAY"] = 4] = "OVERLAY";
    BLEND_MODES[BLEND_MODES["DARKEN"] = 5] = "DARKEN";
    BLEND_MODES[BLEND_MODES["LIGHTEN"] = 6] = "LIGHTEN";
    BLEND_MODES[BLEND_MODES["COLOR_DODGE"] = 7] = "COLOR_DODGE";
    BLEND_MODES[BLEND_MODES["COLOR_BURN"] = 8] = "COLOR_BURN";
    BLEND_MODES[BLEND_MODES["HARD_LIGHT"] = 9] = "HARD_LIGHT";
    BLEND_MODES[BLEND_MODES["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
    BLEND_MODES[BLEND_MODES["DIFFERENCE"] = 11] = "DIFFERENCE";
    BLEND_MODES[BLEND_MODES["EXCLUSION"] = 12] = "EXCLUSION";
    BLEND_MODES[BLEND_MODES["HUE"] = 13] = "HUE";
    BLEND_MODES[BLEND_MODES["SATURATION"] = 14] = "SATURATION";
    BLEND_MODES[BLEND_MODES["COLOR"] = 15] = "COLOR";
    BLEND_MODES[BLEND_MODES["LUMINOSITY"] = 16] = "LUMINOSITY";
    BLEND_MODES[BLEND_MODES["NORMAL_NPM"] = 17] = "NORMAL_NPM";
    BLEND_MODES[BLEND_MODES["ADD_NPM"] = 18] = "ADD_NPM";
    BLEND_MODES[BLEND_MODES["SCREEN_NPM"] = 19] = "SCREEN_NPM";
    BLEND_MODES[BLEND_MODES["NONE"] = 20] = "NONE";
    BLEND_MODES[BLEND_MODES["SRC_OVER"] = 0] = "SRC_OVER";
    BLEND_MODES[BLEND_MODES["SRC_IN"] = 21] = "SRC_IN";
    BLEND_MODES[BLEND_MODES["SRC_OUT"] = 22] = "SRC_OUT";
    BLEND_MODES[BLEND_MODES["SRC_ATOP"] = 23] = "SRC_ATOP";
    BLEND_MODES[BLEND_MODES["DST_OVER"] = 24] = "DST_OVER";
    BLEND_MODES[BLEND_MODES["DST_IN"] = 25] = "DST_IN";
    BLEND_MODES[BLEND_MODES["DST_OUT"] = 26] = "DST_OUT";
    BLEND_MODES[BLEND_MODES["DST_ATOP"] = 27] = "DST_ATOP";
    BLEND_MODES[BLEND_MODES["ERASE"] = 26] = "ERASE";
    BLEND_MODES[BLEND_MODES["SUBTRACT"] = 28] = "SUBTRACT";
    BLEND_MODES[BLEND_MODES["XOR"] = 29] = "XOR";
})(BLEND_MODES || (BLEND_MODES = {}));
/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @memberof PIXI
 * @static
 * @name DRAW_MODES
 * @enum {number}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
var DRAW_MODES;
(function (DRAW_MODES) {
    DRAW_MODES[DRAW_MODES["POINTS"] = 0] = "POINTS";
    DRAW_MODES[DRAW_MODES["LINES"] = 1] = "LINES";
    DRAW_MODES[DRAW_MODES["LINE_LOOP"] = 2] = "LINE_LOOP";
    DRAW_MODES[DRAW_MODES["LINE_STRIP"] = 3] = "LINE_STRIP";
    DRAW_MODES[DRAW_MODES["TRIANGLES"] = 4] = "TRIANGLES";
    DRAW_MODES[DRAW_MODES["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    DRAW_MODES[DRAW_MODES["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES || (DRAW_MODES = {}));
/**
 * Various GL texture/resources formats.
 *
 * @memberof PIXI
 * @static
 * @name FORMATS
 * @enum {number}
 * @property {number} RGBA=6408
 * @property {number} RGB=6407
 * @property {number} ALPHA=6406
 * @property {number} LUMINANCE=6409
 * @property {number} LUMINANCE_ALPHA=6410
 * @property {number} DEPTH_COMPONENT=6402
 * @property {number} DEPTH_STENCIL=34041
 */
var FORMATS;
(function (FORMATS) {
    FORMATS[FORMATS["RGBA"] = 6408] = "RGBA";
    FORMATS[FORMATS["RGB"] = 6407] = "RGB";
    FORMATS[FORMATS["ALPHA"] = 6406] = "ALPHA";
    FORMATS[FORMATS["LUMINANCE"] = 6409] = "LUMINANCE";
    FORMATS[FORMATS["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
    FORMATS[FORMATS["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
    FORMATS[FORMATS["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS || (FORMATS = {}));
/**
 * Various GL target types.
 *
 * @memberof PIXI
 * @static
 * @name TARGETS
 * @enum {number}
 * @property {number} TEXTURE_2D=3553
 * @property {number} TEXTURE_CUBE_MAP=34067
 * @property {number} TEXTURE_2D_ARRAY=35866
 * @property {number} TEXTURE_CUBE_MAP_POSITIVE_X=34069
 * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_X=34070
 * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Y=34071
 * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Y=34072
 * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Z=34073
 * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Z=34074
 */
var TARGETS;
(function (TARGETS) {
    TARGETS[TARGETS["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
    TARGETS[TARGETS["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
    TARGETS[TARGETS["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS || (TARGETS = {}));
/**
 * Various GL data format types.
 *
 * @memberof PIXI
 * @static
 * @name TYPES
 * @enum {number}
 * @property {number} UNSIGNED_BYTE=5121
 * @property {number} UNSIGNED_SHORT=5123
 * @property {number} UNSIGNED_SHORT_5_6_5=33635
 * @property {number} UNSIGNED_SHORT_4_4_4_4=32819
 * @property {number} UNSIGNED_SHORT_5_5_5_1=32820
 * @property {number} FLOAT=5126
 * @property {number} HALF_FLOAT=36193
 */
var TYPES;
(function (TYPES) {
    TYPES[TYPES["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    TYPES[TYPES["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    TYPES[TYPES["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
    TYPES[TYPES["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
    TYPES[TYPES["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
    TYPES[TYPES["FLOAT"] = 5126] = "FLOAT";
    TYPES[TYPES["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES || (TYPES = {}));
/**
 * The scale modes that are supported by pixi.
 *
 * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @memberof PIXI
 * @static
 * @name SCALE_MODES
 * @enum {number}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
var SCALE_MODES;
(function (SCALE_MODES) {
    SCALE_MODES[SCALE_MODES["NEAREST"] = 0] = "NEAREST";
    SCALE_MODES[SCALE_MODES["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES || (SCALE_MODES = {}));
/**
 * The wrap modes that are supported by pixi.
 *
 * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as WebGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @name WRAP_MODES
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
var WRAP_MODES;
(function (WRAP_MODES) {
    WRAP_MODES[WRAP_MODES["CLAMP"] = 33071] = "CLAMP";
    WRAP_MODES[WRAP_MODES["REPEAT"] = 10497] = "REPEAT";
    WRAP_MODES[WRAP_MODES["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES || (WRAP_MODES = {}));
/**
 * Mipmap filtering modes that are supported by pixi.
 *
 * The {@link PIXI.settings.MIPMAP_TEXTURES} affects default texture filtering.
 * Mipmaps are generated for a baseTexture if its `mipmap` field is `ON`,
 * or its `POW2` and texture dimensions are powers of 2.
 * Due to platform restriction, `ON` option will work like `POW2` for webgl-1.
 *
 * This property only affects WebGL.
 *
 * @name MIPMAP_MODES
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} OFF - No mipmaps
 * @property {number} POW2 - Generate mipmaps if texture dimensions are pow2
 * @property {number} ON - Always generate mipmaps
 */
var MIPMAP_MODES;
(function (MIPMAP_MODES) {
    MIPMAP_MODES[MIPMAP_MODES["OFF"] = 0] = "OFF";
    MIPMAP_MODES[MIPMAP_MODES["POW2"] = 1] = "POW2";
    MIPMAP_MODES[MIPMAP_MODES["ON"] = 2] = "ON";
})(MIPMAP_MODES || (MIPMAP_MODES = {}));
/**
 * How to treat textures with premultiplied alpha
 *
 * @name ALPHA_MODES
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} NO_PREMULTIPLIED_ALPHA - Source is not premultiplied, leave it like that.
 *  Option for compressed and data textures that are created from typed arrays.
 * @property {number} PREMULTIPLY_ON_UPLOAD - Source is not premultiplied, premultiply on upload.
 *  Default option, used for all loaded images.
 * @property {number} PREMULTIPLIED_ALPHA - Source is already premultiplied
 *  Example: spine atlases with `_pma` suffix.
 * @property {number} NPM - Alias for NO_PREMULTIPLIED_ALPHA.
 * @property {number} UNPACK - Default option, alias for PREMULTIPLY_ON_UPLOAD.
 * @property {number} PMA - Alias for PREMULTIPLIED_ALPHA.
 */
var ALPHA_MODES;
(function (ALPHA_MODES) {
    ALPHA_MODES[ALPHA_MODES["NPM"] = 0] = "NPM";
    ALPHA_MODES[ALPHA_MODES["UNPACK"] = 1] = "UNPACK";
    ALPHA_MODES[ALPHA_MODES["PMA"] = 2] = "PMA";
    ALPHA_MODES[ALPHA_MODES["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
    ALPHA_MODES[ALPHA_MODES["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
    ALPHA_MODES[ALPHA_MODES["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
})(ALPHA_MODES || (ALPHA_MODES = {}));
/**
 * How to clear renderTextures in filter
 *
 * @name CLEAR_MODES
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} BLEND - Preserve the information in the texture, blend above
 * @property {number} CLEAR - Must use `gl.clear` operation
 * @property {number} BLIT - Clear or blit it, depends on device and level of paranoia
 * @property {number} NO - Alias for BLEND, same as `false` in earlier versions
 * @property {number} YES - Alias for CLEAR, same as `true` in earlier versions
 * @property {number} AUTO - Alias for BLIT
 */
var CLEAR_MODES;
(function (CLEAR_MODES) {
    CLEAR_MODES[CLEAR_MODES["NO"] = 0] = "NO";
    CLEAR_MODES[CLEAR_MODES["YES"] = 1] = "YES";
    CLEAR_MODES[CLEAR_MODES["AUTO"] = 2] = "AUTO";
    CLEAR_MODES[CLEAR_MODES["BLEND"] = 0] = "BLEND";
    CLEAR_MODES[CLEAR_MODES["CLEAR"] = 1] = "CLEAR";
    CLEAR_MODES[CLEAR_MODES["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES || (CLEAR_MODES = {}));
/**
 * The gc modes that are supported by pixi.
 *
 * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
 * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @name GC_MODES
 * @enum {number}
 * @static
 * @memberof PIXI
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
var GC_MODES;
(function (GC_MODES) {
    GC_MODES[GC_MODES["AUTO"] = 0] = "AUTO";
    GC_MODES[GC_MODES["MANUAL"] = 1] = "MANUAL";
})(GC_MODES || (GC_MODES = {}));
/**
 * Constants that specify float precision in shaders.
 *
 * @name PRECISION
 * @memberof PIXI
 * @constant
 * @static
 * @enum {string}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
var PRECISION;
(function (PRECISION) {
    PRECISION["LOW"] = "lowp";
    PRECISION["MEDIUM"] = "mediump";
    PRECISION["HIGH"] = "highp";
})(PRECISION || (PRECISION = {}));
/**
 * Constants for mask implementations.
 * We use `type` suffix because it leads to very different behaviours
 *
 * @name MASK_TYPES
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} NONE - Mask is ignored
 * @property {number} SCISSOR - Scissor mask, rectangle on screen, cheap
 * @property {number} STENCIL - Stencil mask, 1-bit, medium, works only if renderer supports stencil
 * @property {number} SPRITE - Mask that uses SpriteMaskFilter, uses temporary RenderTexture
 */
var MASK_TYPES;
(function (MASK_TYPES) {
    MASK_TYPES[MASK_TYPES["NONE"] = 0] = "NONE";
    MASK_TYPES[MASK_TYPES["SCISSOR"] = 1] = "SCISSOR";
    MASK_TYPES[MASK_TYPES["STENCIL"] = 2] = "STENCIL";
    MASK_TYPES[MASK_TYPES["SPRITE"] = 3] = "SPRITE";
})(MASK_TYPES || (MASK_TYPES = {}));
/**
 * Constants for multi-sampling antialiasing.
 *
 * @see PIXI.Framebuffer#multisample
 *
 * @name MSAA_QUALITY
 * @memberof PIXI
 * @static
 * @enum {number}
 * @property {number} NONE - No multisampling for this renderTexture
 * @property {number} LOW - Try 2 samples
 * @property {number} MEDIUM - Try 4 samples
 * @property {number} HIGH - Try 8 samples
 */
var MSAA_QUALITY;
(function (MSAA_QUALITY) {
    MSAA_QUALITY[MSAA_QUALITY["NONE"] = 0] = "NONE";
    MSAA_QUALITY[MSAA_QUALITY["LOW"] = 2] = "LOW";
    MSAA_QUALITY[MSAA_QUALITY["MEDIUM"] = 4] = "MEDIUM";
    MSAA_QUALITY[MSAA_QUALITY["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY || (MSAA_QUALITY = {}));

/*!
 * @pixi/utils - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

/**
 * The prefix that denotes a URL is for a retina asset.
 *
 * @static
 * @name RETINA_PREFIX
 * @memberof PIXI.settings
 * @type {RegExp}
 * @default /@([0-9\.]+)x/
 * @example `@2x`
 */
settings.RETINA_PREFIX = /@([0-9\.]+)x/;
/**
 * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported` function.
 * For most scenarios this should be left as true, as otherwise the user may have a poor experience.
 * However, it can be useful to disable under certain scenarios, such as headless unit tests.
 *
 * @static
 * @name FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
 * @memberof PIXI.settings
 * @type {boolean}
 * @default true
 */
settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = true;

var saidHello = false;
var VERSION = '5.3.7';
/**
 * Skips the hello message of renderers that are created after this is run.
 *
 * @function skipHello
 * @memberof PIXI.utils
 */
function skipHello() {
    saidHello = true;
}
/**
 * Logs out the version and renderer information for this running instance of PIXI.
 * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
 * creating your renderer. Keep in mind that doing that will forever make you a jerk face.
 *
 * @static
 * @function sayHello
 * @memberof PIXI.utils
 * @param {string} type - The string renderer type to log.
 */
function sayHello(type) {
    var _a;
    if (saidHello) {
        return;
    }
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = [
            "\n %c %c %c PixiJS " + VERSION + " - \u2730 " + type + " \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n",
            'background: #ff66a5; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'color: #ff66a5; background: #030307; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'background: #ffc3dc; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;' ];
        (_a = window.console).log.apply(_a, args);
    }
    else if (window.console) {
        window.console.log("PixiJS " + VERSION + " - " + type + " - http://www.pixijs.com/");
    }
    saidHello = true;
}

var supported;
/**
 * Helper for checking for WebGL support.
 *
 * @memberof PIXI.utils
 * @function isWebGLSupported
 * @return {boolean} Is WebGL supported.
 */
function isWebGLSupported() {
    if (typeof supported === 'undefined') {
        supported = (function supported() {
            var contextOptions = {
                stencil: true,
                failIfMajorPerformanceCaveat: settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
            };
            try {
                if (!window.WebGLRenderingContext) {
                    return false;
                }
                var canvas = document.createElement('canvas');
                var gl = (canvas.getContext('webgl', contextOptions)
                    || canvas.getContext('experimental-webgl', contextOptions));
                var success = !!(gl && gl.getContextAttributes().stencil);
                if (gl) {
                    var loseContext = gl.getExtension('WEBGL_lose_context');
                    if (loseContext) {
                        loseContext.loseContext();
                    }
                }
                gl = null;
                return success;
            }
            catch (e) {
                return false;
            }
        })();
    }
    return supported;
}

/**
 * Converts a hexadecimal color number to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).
 *
 * @example
 * PIXI.utils.hex2rgb(0xffffff); // returns [1, 1, 1]
 * @memberof PIXI.utils
 * @function hex2rgb
 * @param {number} hex - The hexadecimal number to convert
 * @param  {number[]} [out=[]] - If supplied, this array will be used rather than returning a new one
 * @return {number[]} An array representing the [R, G, B] of the color where all values are floats.
 */
function hex2rgb(hex, out) {
    if (out === void 0) { out = []; }
    out[0] = ((hex >> 16) & 0xFF) / 255;
    out[1] = ((hex >> 8) & 0xFF) / 255;
    out[2] = (hex & 0xFF) / 255;
    return out;
}
/**
 * Converts a hexadecimal color number to a string.
 *
 * @example
 * PIXI.utils.hex2string(0xffffff); // returns "#ffffff"
 * @memberof PIXI.utils
 * @function hex2string
 * @param {number} hex - Number in hex (e.g., `0xffffff`)
 * @return {string} The string color (e.g., `"#ffffff"`).
 */
function hex2string(hex) {
    var hexString = hex.toString(16);
    hexString = '000000'.substr(0, 6 - hexString.length) + hexString;
    return "#" + hexString;
}
/**
 * Converts a hexadecimal string to a hexadecimal color number.
 *
 * @example
 * PIXI.utils.string2hex("#ffffff"); // returns 0xffffff
 * @memberof PIXI.utils
 * @function string2hex
 * @param {string} string - The string color (e.g., `"#ffffff"`)
 * @return {number} Number in hexadecimal.
 */
function string2hex(string) {
    if (typeof string === 'string' && string[0] === '#') {
        string = string.substr(1);
    }
    return parseInt(string, 16);
}
/**
 * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
 *
 * @example
 * PIXI.utils.rgb2hex([1, 1, 1]); // returns 0xffffff
 * @memberof PIXI.utils
 * @function rgb2hex
 * @param {number[]} rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
 * @return {number} Number in hexadecimal.
 */
function rgb2hex(rgb) {
    return (((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + (rgb[2] * 255 | 0));
}

/**
 * Corrects PixiJS blend, takes premultiplied alpha into account
 *
 * @memberof PIXI.utils
 * @function mapPremultipliedBlendModes
 * @private
 * @return {Array<number[]>} Mapped modes.
 */
function mapPremultipliedBlendModes() {
    var pm = [];
    var npm = [];
    for (var i = 0; i < 32; i++) {
        pm[i] = i;
        npm[i] = i;
    }
    pm[BLEND_MODES.NORMAL_NPM] = BLEND_MODES.NORMAL;
    pm[BLEND_MODES.ADD_NPM] = BLEND_MODES.ADD;
    pm[BLEND_MODES.SCREEN_NPM] = BLEND_MODES.SCREEN;
    npm[BLEND_MODES.NORMAL] = BLEND_MODES.NORMAL_NPM;
    npm[BLEND_MODES.ADD] = BLEND_MODES.ADD_NPM;
    npm[BLEND_MODES.SCREEN] = BLEND_MODES.SCREEN_NPM;
    var array = [];
    array.push(npm);
    array.push(pm);
    return array;
}
/**
 * maps premultiply flag and blendMode to adjusted blendMode
 * @memberof PIXI.utils
 * @const premultiplyBlendMode
 * @type {Array<number[]>}
 */
var premultiplyBlendMode = mapPremultipliedBlendModes();
/**
 * changes blendMode according to texture format
 *
 * @memberof PIXI.utils
 * @function correctBlendMode
 * @param {number} blendMode - supposed blend mode
 * @param {boolean} premultiplied - whether source is premultiplied
 * @returns {number} true blend mode for this texture
 */
function correctBlendMode(blendMode, premultiplied) {
    return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
}
/**
 * combines rgb and alpha to out array
 *
 * @memberof PIXI.utils
 * @function premultiplyRgba
 * @param {Float32Array|number[]} rgb - input rgb
 * @param {number} alpha - alpha param
 * @param {Float32Array} [out] - output
 * @param {boolean} [premultiply=true] - do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyRgba(rgb, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    if (premultiply || premultiply === undefined) {
        out[0] = rgb[0] * alpha;
        out[1] = rgb[1] * alpha;
        out[2] = rgb[2] * alpha;
    }
    else {
        out[0] = rgb[0];
        out[1] = rgb[1];
        out[2] = rgb[2];
    }
    out[3] = alpha;
    return out;
}
/**
 * premultiplies tint
 *
 * @memberof PIXI.utils
 * @function premultiplyTint
 * @param {number} tint - integer RGB
 * @param {number} alpha - floating point alpha (0.0-1.0)
 * @returns {number} tint multiplied by alpha
 */
function premultiplyTint(tint, alpha) {
    if (alpha === 1.0) {
        return (alpha * 255 << 24) + tint;
    }
    if (alpha === 0.0) {
        return 0;
    }
    var R = ((tint >> 16) & 0xFF);
    var G = ((tint >> 8) & 0xFF);
    var B = (tint & 0xFF);
    R = ((R * alpha) + 0.5) | 0;
    G = ((G * alpha) + 0.5) | 0;
    B = ((B * alpha) + 0.5) | 0;
    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
}
/**
 * converts integer tint and float alpha to vec4 form, premultiplies by default
 *
 * @memberof PIXI.utils
 * @function premultiplyTintToRgba
 * @param {number} tint - input tint
 * @param {number} alpha - alpha param
 * @param {Float32Array} [out] output
 * @param {boolean} [premultiply=true] - do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyTintToRgba(tint, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    out[0] = ((tint >> 16) & 0xFF) / 255.0;
    out[1] = ((tint >> 8) & 0xFF) / 255.0;
    out[2] = (tint & 0xFF) / 255.0;
    if (premultiply || premultiply === undefined) {
        out[0] *= alpha;
        out[1] *= alpha;
        out[2] *= alpha;
    }
    out[3] = alpha;
    return out;
}

/**
 * Generic Mask Stack data structure
 *
 * @memberof PIXI.utils
 * @function createIndicesForQuads
 * @param {number} size - Number of quads
 * @param {Uint16Array|Uint32Array} [outBuffer] - Buffer for output, length has to be `6 * size`
 * @return {Uint16Array|Uint32Array} - Resulting index buffer
 */
function createIndicesForQuads(size, outBuffer) {
    if (outBuffer === void 0) { outBuffer = null; }
    // the total number of indices in our array, there are 6 points per quad.
    var totalIndices = size * 6;
    outBuffer = outBuffer || new Uint16Array(totalIndices);
    if (outBuffer.length !== totalIndices) {
        throw new Error("Out buffer length is incorrect, got " + outBuffer.length + " and expected " + totalIndices);
    }
    // fill the indices with the quads to draw
    for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
        outBuffer[i + 0] = j + 0;
        outBuffer[i + 1] = j + 1;
        outBuffer[i + 2] = j + 2;
        outBuffer[i + 3] = j + 0;
        outBuffer[i + 4] = j + 2;
        outBuffer[i + 5] = j + 3;
    }
    return outBuffer;
}

function getBufferType(array) {
    if (array.BYTES_PER_ELEMENT === 4) {
        if (array instanceof Float32Array) {
            return 'Float32Array';
        }
        else if (array instanceof Uint32Array) {
            return 'Uint32Array';
        }
        return 'Int32Array';
    }
    else if (array.BYTES_PER_ELEMENT === 2) {
        if (array instanceof Uint16Array) {
            return 'Uint16Array';
        }
    }
    else if (array.BYTES_PER_ELEMENT === 1) {
        if (array instanceof Uint8Array) {
            return 'Uint8Array';
        }
    }
    // TODO map out the rest of the array elements!
    return null;
}

/* eslint-disable object-shorthand */
var map$2 = { Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array };
function interleaveTypedArrays(arrays, sizes) {
    var outSize = 0;
    var stride = 0;
    var views = {};
    for (var i = 0; i < arrays.length; i++) {
        stride += sizes[i];
        outSize += arrays[i].length;
    }
    var buffer = new ArrayBuffer(outSize * 4);
    var out = null;
    var littleOffset = 0;
    for (var i = 0; i < arrays.length; i++) {
        var size = sizes[i];
        var array = arrays[i];
        /*
        @todo This is unsafe casting but consistent with how the code worked previously. Should it stay this way
              or should and `getBufferTypeUnsafe` function be exposed that throws an Error if unsupported type is passed?
         */
        var type = getBufferType(array);
        if (!views[type]) {
            views[type] = new map$2[type](buffer);
        }
        out = views[type];
        for (var j = 0; j < array.length; j++) {
            var indexStart = ((j / size | 0) * stride) + littleOffset;
            var index = j % size;
            out[indexStart + index] = array[j];
        }
        littleOffset += size;
    }
    return new Float32Array(buffer);
}

// Taken from the bit-twiddle package
/**
 * Rounds to next power of two.
 *
 * @function nextPow2
 * @memberof PIXI.utils
 * @param {number} v - input value
 * @return {number}
 */
function nextPow2(v) {
    v += v === 0 ? 1 : 0;
    --v;
    v |= v >>> 1;
    v |= v >>> 2;
    v |= v >>> 4;
    v |= v >>> 8;
    v |= v >>> 16;
    return v + 1;
}
/**
 * Checks if a number is a power of two.
 *
 * @function isPow2
 * @memberof PIXI.utils
 * @param {number} v - input value
 * @return {boolean} `true` if value is power of two
 */
function isPow2(v) {
    return !(v & (v - 1)) && (!!v);
}
/**
 * Computes ceil of log base 2
 *
 * @function log2
 * @memberof PIXI.utils
 * @param {number} v - input value
 * @return {number} logarithm base 2
 */
function log2(v) {
    var r = (v > 0xFFFF ? 1 : 0) << 4;
    v >>>= r;
    var shift = (v > 0xFF ? 1 : 0) << 3;
    v >>>= shift;
    r |= shift;
    shift = (v > 0xF ? 1 : 0) << 2;
    v >>>= shift;
    r |= shift;
    shift = (v > 0x3 ? 1 : 0) << 1;
    v >>>= shift;
    r |= shift;
    return r | (v >> 1);
}

/**
 * Remove items from a javascript array without generating garbage
 *
 * @function removeItems
 * @memberof PIXI.utils
 * @param {Array<any>} arr - Array to remove elements from
 * @param {number} startIdx - starting index
 * @param {number} removeCount - how many to remove
 */
function removeItems(arr, startIdx, removeCount) {
    var length = arr.length;
    var i;
    if (startIdx >= length || removeCount === 0) {
        return;
    }
    removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
    var len = length - removeCount;
    for (i = startIdx; i < len; ++i) {
        arr[i] = arr[i + removeCount];
    }
    arr.length = len;
}

/**
 * Returns sign of number
 *
 * @memberof PIXI.utils
 * @function sign
 * @param {number} n - the number to check the sign of
 * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
 */
function sign$1(n) {
    if (n === 0)
        { return 0; }
    return n < 0 ? -1 : 1;
}

var nextUid = 0;
/**
 * Gets the next unique identifier
 *
 * @memberof PIXI.utils
 * @function uid
 * @return {number} The next unique identifier to use.
 */
function uid() {
    return ++nextUid;
}

// A map of warning messages already fired
var warnings = {};
/**
 * Helper for warning developers about deprecated features & settings.
 * A stack track for warnings is given; useful for tracking-down where
 * deprecated methods/properties/classes are being used within the code.
 *
 * @memberof PIXI.utils
 * @function deprecation
 * @param {string} version - The version where the feature became deprecated
 * @param {string} message - Message should include what is deprecated, where, and the new solution
 * @param {number} [ignoreDepth=3] - The number of steps to ignore at the top of the error stack
 *        this is mostly to ignore internal deprecation calls.
 */
function deprecation(version, message, ignoreDepth) {
    if (ignoreDepth === void 0) { ignoreDepth = 3; }
    // Ignore duplicat
    if (warnings[message]) {
        return;
    }
    /* eslint-disable no-console */
    var stack = new Error().stack;
    // Handle IE < 10 and Safari < 6
    if (typeof stack === 'undefined') {
        console.warn('PixiJS Deprecation Warning: ', message + "\nDeprecated since v" + version);
    }
    else {
        // chop off the stack trace which includes PixiJS internal calls
        stack = stack.split('\n').splice(ignoreDepth).join('\n');
        if (console.groupCollapsed) {
            console.groupCollapsed('%cPixiJS Deprecation Warning: %c%s', 'color:#614108;background:#fffbe6', 'font-weight:normal;color:#614108;background:#fffbe6', message + "\nDeprecated since v" + version);
            console.warn(stack);
            console.groupEnd();
        }
        else {
            console.warn('PixiJS Deprecation Warning: ', message + "\nDeprecated since v" + version);
            console.warn(stack);
        }
    }
    /* eslint-enable no-console */
    warnings[message] = true;
}

/**
 * @todo Describe property usage
 *
 * @static
 * @name ProgramCache
 * @memberof PIXI.utils
 * @type {Object}
 */
var ProgramCache = {};
/**
 * @todo Describe property usage
 *
 * @static
 * @name TextureCache
 * @memberof PIXI.utils
 * @type {Object}
 */
var TextureCache = Object.create(null);
/**
 * @todo Describe property usage
 *
 * @static
 * @name BaseTextureCache
 * @memberof PIXI.utils
 * @type {Object}
 */
var BaseTextureCache = Object.create(null);
/**
 * Destroys all texture in the cache
 *
 * @memberof PIXI.utils
 * @function destroyTextureCache
 */
function destroyTextureCache() {
    var key;
    for (key in TextureCache) {
        TextureCache[key].destroy();
    }
    for (key in BaseTextureCache) {
        BaseTextureCache[key].destroy();
    }
}
/**
 * Removes all textures from cache, but does not destroy them
 *
 * @memberof PIXI.utils
 * @function clearTextureCache
 */
function clearTextureCache() {
    var key;
    for (key in TextureCache) {
        delete TextureCache[key];
    }
    for (key in BaseTextureCache) {
        delete BaseTextureCache[key];
    }
}

/**
 * Creates a Canvas element of the given size to be used as a target for rendering to.
 *
 * @class
 * @memberof PIXI.utils
 */
var CanvasRenderTarget = /** @class */ (function () {
    /**
     * @param {number} width - the width for the newly created canvas
     * @param {number} height - the height for the newly created canvas
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
     */
    function CanvasRenderTarget(width, height, resolution) {
        /**
         * The Canvas object that belongs to this CanvasRenderTarget.
         *
         * @member {HTMLCanvasElement}
         */
        this.canvas = document.createElement('canvas');
        /**
         * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
         *
         * @member {CanvasRenderingContext2D}
         */
        this.context = this.canvas.getContext('2d');
        this.resolution = resolution || settings.RESOLUTION;
        this.resize(width, height);
    }
    /**
     * Clears the canvas that was created by the CanvasRenderTarget class.
     *
     * @private
     */
    CanvasRenderTarget.prototype.clear = function () {
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    /**
     * Resizes the canvas to the specified width and height.
     *
     * @param {number} width - the new width of the canvas
     * @param {number} height - the new height of the canvas
     */
    CanvasRenderTarget.prototype.resize = function (width, height) {
        this.canvas.width = width * this.resolution;
        this.canvas.height = height * this.resolution;
    };
    /**
     * Destroys this canvas.
     *
     */
    CanvasRenderTarget.prototype.destroy = function () {
        this.context = null;
        this.canvas = null;
    };
    Object.defineProperty(CanvasRenderTarget.prototype, "width", {
        /**
         * The width of the canvas buffer in pixels.
         *
         * @member {number}
         */
        get: function () {
            return this.canvas.width;
        },
        set: function (val) {
            this.canvas.width = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderTarget.prototype, "height", {
        /**
         * The height of the canvas buffer in pixels.
         *
         * @member {number}
         */
        get: function () {
            return this.canvas.height;
        },
        set: function (val) {
            this.canvas.height = val;
        },
        enumerable: false,
        configurable: true
    });
    return CanvasRenderTarget;
}());

/**
 * Trim transparent borders from a canvas
 *
 * @memberof PIXI.utils
 * @function trimCanvas
 * @param {HTMLCanvasElement} canvas - the canvas to trim
 * @returns {object} Trim data
 */
function trimCanvas(canvas) {
    // https://gist.github.com/remy/784508
    var width = canvas.width;
    var height = canvas.height;
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, width, height);
    var pixels = imageData.data;
    var len = pixels.length;
    var bound = {
        top: null,
        left: null,
        right: null,
        bottom: null,
    };
    var data = null;
    var i;
    var x;
    var y;
    for (i = 0; i < len; i += 4) {
        if (pixels[i + 3] !== 0) {
            x = (i / 4) % width;
            y = ~~((i / 4) / width);
            if (bound.top === null) {
                bound.top = y;
            }
            if (bound.left === null) {
                bound.left = x;
            }
            else if (x < bound.left) {
                bound.left = x;
            }
            if (bound.right === null) {
                bound.right = x + 1;
            }
            else if (bound.right < x) {
                bound.right = x + 1;
            }
            if (bound.bottom === null) {
                bound.bottom = y;
            }
            else if (bound.bottom < y) {
                bound.bottom = y;
            }
        }
    }
    if (bound.top !== null) {
        width = bound.right - bound.left;
        height = bound.bottom - bound.top + 1;
        data = context.getImageData(bound.left, bound.top, width, height);
    }
    return {
        height: height,
        width: width,
        data: data,
    };
}

/**
 * Regexp for data URI.
 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
 *
 * @static
 * @constant {RegExp|string} DATA_URI
 * @memberof PIXI
 * @example data:image/png;base64
 */
var DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

/**
 * @memberof PIXI.utils
 * @interface DecomposedDataUri
 */
/**
 * type, eg. `image`
 * @memberof PIXI.utils.DecomposedDataUri#
 * @member {string} mediaType
 */
/**
 * Sub type, eg. `png`
 * @memberof PIXI.utils.DecomposedDataUri#
 * @member {string} subType
 */
/**
 * @memberof PIXI.utils.DecomposedDataUri#
 * @member {string} charset
 */
/**
 * Data encoding, eg. `base64`
 * @memberof PIXI.utils.DecomposedDataUri#
 * @member {string} encoding
 */
/**
 * The actual data
 * @memberof PIXI.utils.DecomposedDataUri#
 * @member {string} data
 */
/**
 * Split a data URI into components. Returns undefined if
 * parameter `dataUri` is not a valid data URI.
 *
 * @memberof PIXI.utils
 * @function decomposeDataUri
 * @param {string} dataUri - the data URI to check
 * @return {PIXI.utils.DecomposedDataUri|undefined} The decomposed data uri or undefined
 */
function decomposeDataUri(dataUri) {
    var dataUriMatch = DATA_URI.exec(dataUri);
    if (dataUriMatch) {
        return {
            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
            charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
            encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : undefined,
            data: dataUriMatch[5],
        };
    }
    return undefined;
}

var tempAnchor;
/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 *
 * @ignore
 * @param {string} url - The url to test.
 * @param {object} [loc=window.location] - The location object to test against.
 * @return {string} The crossOrigin value to use (or empty string for none).
 */
function determineCrossOrigin(url, loc) {
    if (loc === void 0) { loc = window.location; }
    // data: and javascript: urls are considered same-origin
    if (url.indexOf('data:') === 0) {
        return '';
    }
    // default is window.location
    loc = loc || window.location;
    if (!tempAnchor) {
        tempAnchor = document.createElement('a');
    }
    // let the browser determine the full href for the url of this resource and then
    // parse with the node url lib, we can't use the properties of the anchor element
    // because they don't work in IE9 :(
    tempAnchor.href = url;
    var parsedUrl = urlParse(tempAnchor.href);
    var samePort = (!parsedUrl.port && loc.port === '') || (parsedUrl.port === loc.port);
    // if cross origin
    if (parsedUrl.hostname !== loc.hostname || !samePort || parsedUrl.protocol !== loc.protocol) {
        return 'anonymous';
    }
    return '';
}

/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 *
 * @memberof PIXI.utils
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @return {number} resolution / device pixel ratio of an asset
 */
function getResolutionOfUrl(url, defaultValue) {
    var resolution = settings.RETINA_PREFIX.exec(url);
    if (resolution) {
        return parseFloat(resolution[1]);
    }
    return defaultValue !== undefined ? defaultValue : 1;
}

var utils_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BaseTextureCache: BaseTextureCache,
    CanvasRenderTarget: CanvasRenderTarget,
    DATA_URI: DATA_URI,
    ProgramCache: ProgramCache,
    TextureCache: TextureCache,
    clearTextureCache: clearTextureCache,
    correctBlendMode: correctBlendMode,
    createIndicesForQuads: createIndicesForQuads,
    decomposeDataUri: decomposeDataUri,
    deprecation: deprecation,
    destroyTextureCache: destroyTextureCache,
    determineCrossOrigin: determineCrossOrigin,
    getBufferType: getBufferType,
    getResolutionOfUrl: getResolutionOfUrl,
    hex2rgb: hex2rgb,
    hex2string: hex2string,
    interleaveTypedArrays: interleaveTypedArrays,
    isPow2: isPow2,
    isWebGLSupported: isWebGLSupported,
    log2: log2,
    nextPow2: nextPow2,
    premultiplyBlendMode: premultiplyBlendMode,
    premultiplyRgba: premultiplyRgba,
    premultiplyTint: premultiplyTint,
    premultiplyTintToRgba: premultiplyTintToRgba,
    removeItems: removeItems,
    rgb2hex: rgb2hex,
    sayHello: sayHello,
    sign: sign$1,
    skipHello: skipHello,
    string2hex: string2hex,
    trimCanvas: trimCanvas,
    uid: uid,
    isMobile: isMobile$1,
    EventEmitter: eventemitter3,
    earcut: earcut_1,
    url: _polyfillNode_url
});

export { BaseTextureCache as B, ProgramCache as P, TextureCache as T, isPow2 as a, hex2rgb as b, premultiplyTint as c, deprecation as d, eventemitter3 as e, determineCrossOrigin as f, getResolutionOfUrl as g, hex2string as h, isMobile$1 as i, isWebGLSupported as j, earcut_1 as k, log2 as l, sign$1 as m, nextPow2 as n, string2hex as o, premultiplyBlendMode as p, utils_es as q, removeItems as r, sayHello as s, uid as u };
