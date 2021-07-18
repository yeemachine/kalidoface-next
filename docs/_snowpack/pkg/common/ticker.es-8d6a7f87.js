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

/*!
 * @pixi/ticker - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

/**
 * Target frames per millisecond.
 *
 * @static
 * @name TARGET_FPMS
 * @memberof PIXI.settings
 * @type {number}
 * @default 0.06
 */
settings.TARGET_FPMS = 0.06;

/**
 * Represents the update priorities used by internal PIXI classes when registered with
 * the {@link PIXI.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof PIXI
 * @enum {number}
 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.InteractionManager}
 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.AnimatedSprite}
 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.Ticker#add}.
 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.BasePrepare} utility.
 */
var UPDATE_PRIORITY;
(function (UPDATE_PRIORITY) {
    UPDATE_PRIORITY[UPDATE_PRIORITY["INTERACTION"] = 50] = "INTERACTION";
    UPDATE_PRIORITY[UPDATE_PRIORITY["HIGH"] = 25] = "HIGH";
    UPDATE_PRIORITY[UPDATE_PRIORITY["NORMAL"] = 0] = "NORMAL";
    UPDATE_PRIORITY[UPDATE_PRIORITY["LOW"] = -25] = "LOW";
    UPDATE_PRIORITY[UPDATE_PRIORITY["UTILITY"] = -50] = "UTILITY";
})(UPDATE_PRIORITY || (UPDATE_PRIORITY = {}));

/**
 * Internal class for handling the priority sorting of ticker handlers.
 *
 * @private
 * @class
 * @memberof PIXI
 */
var TickerListener = /** @class */ (function () {
    /**
     * Constructor
     * @private
     * @param {Function} fn - The listener function to be added for one update
     * @param {*} [context=null] - The listener context
     * @param {number} [priority=0] - The priority for emitting
     * @param {boolean} [once=false] - If the handler should fire once
     */
    function TickerListener(fn, context, priority, once) {
        if (context === void 0) { context = null; }
        if (priority === void 0) { priority = 0; }
        if (once === void 0) { once = false; }
        /**
         * The handler function to execute.
         * @private
         * @member {Function}
         */
        this.fn = fn;
        /**
         * The calling to execute.
         * @private
         * @member {*}
         */
        this.context = context;
        /**
         * The current priority.
         * @private
         * @member {number}
         */
        this.priority = priority;
        /**
         * If this should only execute once.
         * @private
         * @member {boolean}
         */
        this.once = once;
        /**
         * The next item in chain.
         * @private
         * @member {TickerListener}
         */
        this.next = null;
        /**
         * The previous item in chain.
         * @private
         * @member {TickerListener}
         */
        this.previous = null;
        /**
         * `true` if this listener has been destroyed already.
         * @member {boolean}
         * @private
         */
        this._destroyed = false;
    }
    /**
     * Simple compare function to figure out if a function and context match.
     * @private
     * @param {Function} fn - The listener function to be added for one update
     * @param {any} [context] - The listener context
     * @return {boolean} `true` if the listener match the arguments
     */
    TickerListener.prototype.match = function (fn, context) {
        if (context === void 0) { context = null; }
        return this.fn === fn && this.context === context;
    };
    /**
     * Emit by calling the current function.
     * @private
     * @param {number} deltaTime - time since the last emit.
     * @return {TickerListener} Next ticker
     */
    TickerListener.prototype.emit = function (deltaTime) {
        if (this.fn) {
            if (this.context) {
                this.fn.call(this.context, deltaTime);
            }
            else {
                this.fn(deltaTime);
            }
        }
        var redirect = this.next;
        if (this.once) {
            this.destroy(true);
        }
        // Soft-destroying should remove
        // the next reference
        if (this._destroyed) {
            this.next = null;
        }
        return redirect;
    };
    /**
     * Connect to the list.
     * @private
     * @param {TickerListener} previous - Input node, previous listener
     */
    TickerListener.prototype.connect = function (previous) {
        this.previous = previous;
        if (previous.next) {
            previous.next.previous = this;
        }
        this.next = previous.next;
        previous.next = this;
    };
    /**
     * Destroy and don't use after this.
     * @private
     * @param {boolean} [hard = false] `true` to remove the `next` reference, this
     *        is considered a hard destroy. Soft destroy maintains the next reference.
     * @return {TickerListener} The listener to redirect while emitting or removing.
     */
    TickerListener.prototype.destroy = function (hard) {
        if (hard === void 0) { hard = false; }
        this._destroyed = true;
        this.fn = null;
        this.context = null;
        // Disconnect, hook up next and previous
        if (this.previous) {
            this.previous.next = this.next;
        }
        if (this.next) {
            this.next.previous = this.previous;
        }
        // Redirect to the next item
        var redirect = this.next;
        // Remove references
        this.next = hard ? null : redirect;
        this.previous = null;
        return redirect;
    };
    return TickerListener;
}());

/**
 * A Ticker class that runs an update loop that other objects listen to.
 *
 * This class is composed around listeners meant for execution on the next requested animation frame.
 * Animation frames are requested only when necessary, e.g. When the ticker is started and the emitter has listeners.
 *
 * @class
 * @memberof PIXI
 */
var Ticker = /** @class */ (function () {
    function Ticker() {
        var _this = this;
        /**
         * The first listener. All new listeners added are chained on this.
         * @private
         * @type {TickerListener}
         */
        this._head = new TickerListener(null, null, Infinity);
        /**
         * Internal current frame request ID
         * @type {?number}
         * @private
         */
        this._requestId = null;
        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         * @type {number}
         * @private
         */
        this._maxElapsedMS = 100;
        /**
         * Internal value managed by maxFPS property setter and getter.
         * This is the minimum allowed milliseconds between updates.
         * @type {number}
         * @private
         */
        this._minElapsedMS = 0;
        /**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.autoStart = false;
        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number}
         * @default 1
         */
        this.deltaTime = 1;
        /**
         * Scaler time elapsed in milliseconds from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.deltaMS = 1 / settings.TARGET_FPMS;
        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link PIXI.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.elapsedMS = 1 / settings.TARGET_FPMS;
        /**
         * The last time {@link PIXI.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number}
         * @default -1
         */
        this.lastTime = -1;
        /**
         * Factor of current {@link PIXI.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number}
         * @default 1
         */
        this.speed = 1;
        /**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.Ticker#start} has been called.
         * `false` if {@link PIXI.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.started = false;
        /**
         * If enabled, deleting is disabled.
         * @member {boolean}
         * @default false
         * @private
         */
        this._protected = false;
        /**
         * The last time keyframe was executed.
         * Maintains a relatively fixed interval with the previous value.
         * @member {number}
         * @default -1
         * @private
         */
        this._lastFrame = -1;
        /**
         * Internal tick method bound to ticker instance.
         * This is because in early 2015, Function.bind
         * is still 60% slower in high performance scenarios.
         * Also separating frame requests from update method
         * so listeners may be called at any time and with
         * any animation API, just invoke ticker.update(time).
         *
         * @private
         * @param {number} time - Time since last tick.
         */
        this._tick = function (time) {
            _this._requestId = null;
            if (_this.started) {
                // Invoke listeners now
                _this.update(time);
                // Listener side effects may have modified ticker state.
                if (_this.started && _this._requestId === null && _this._head.next) {
                    _this._requestId = requestAnimationFrame(_this._tick);
                }
            }
        };
    }
    /**
     * Conditionally requests a new animation frame.
     * If a frame has not already been requested, and if the internal
     * emitter has listeners, a new frame is requested.
     *
     * @private
     */
    Ticker.prototype._requestIfNeeded = function () {
        if (this._requestId === null && this._head.next) {
            // ensure callbacks get correct delta
            this.lastTime = performance.now();
            this._lastFrame = this.lastTime;
            this._requestId = requestAnimationFrame(this._tick);
        }
    };
    /**
     * Conditionally cancels a pending animation frame.
     *
     * @private
     */
    Ticker.prototype._cancelIfNeeded = function () {
        if (this._requestId !== null) {
            cancelAnimationFrame(this._requestId);
            this._requestId = null;
        }
    };
    /**
     * Conditionally requests a new animation frame.
     * If the ticker has been started it checks if a frame has not already
     * been requested, and if the internal emitter has listeners. If these
     * conditions are met, a new frame is requested. If the ticker has not
     * been started, but autoStart is `true`, then the ticker starts now,
     * and continues with the previous conditions to request a new frame.
     *
     * @private
     */
    Ticker.prototype._startIfPossible = function () {
        if (this.started) {
            this._requestIfNeeded();
        }
        else if (this.autoStart) {
            this.start();
        }
    };
    /**
     * Register a handler for tick events. Calls continuously unless
     * it is removed or the ticker is stopped.
     *
     * @param {Function} fn - The listener function to be added for updates
     * @param {*} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.add = function (fn, context, priority) {
        if (priority === void 0) { priority = UPDATE_PRIORITY.NORMAL; }
        return this._addListener(new TickerListener(fn, context, priority));
    };
    /**
     * Add a handler for the tick event which is only execute once.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {*} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.addOnce = function (fn, context, priority) {
        if (priority === void 0) { priority = UPDATE_PRIORITY.NORMAL; }
        return this._addListener(new TickerListener(fn, context, priority, true));
    };
    /**
     * Internally adds the event handler so that it can be sorted by priority.
     * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
     * before the rendering.
     *
     * @private
     * @param {TickerListener} listener - Current listener being added.
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype._addListener = function (listener) {
        // For attaching to head
        var current = this._head.next;
        var previous = this._head;
        // Add the first item
        if (!current) {
            listener.connect(previous);
        }
        else {
            // Go from highest to lowest priority
            while (current) {
                if (listener.priority > current.priority) {
                    listener.connect(previous);
                    break;
                }
                previous = current;
                current = current.next;
            }
            // Not yet connected
            if (!listener.previous) {
                listener.connect(previous);
            }
        }
        this._startIfPossible();
        return this;
    };
    /**
     * Removes any handlers matching the function and context parameters.
     * If no handlers are left after removing, then it cancels the animation frame.
     *
     * @param {Function} fn - The listener function to be removed
     * @param {*} [context] - The listener context to be removed
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.remove = function (fn, context) {
        var listener = this._head.next;
        while (listener) {
            // We found a match, lets remove it
            // no break to delete all possible matches
            // incase a listener was added 2+ times
            if (listener.match(fn, context)) {
                listener = listener.destroy();
            }
            else {
                listener = listener.next;
            }
        }
        if (!this._head.next) {
            this._cancelIfNeeded();
        }
        return this;
    };
    Object.defineProperty(Ticker.prototype, "count", {
        /**
         * The number of listeners on this ticker, calculated by walking through linked list
         *
         * @readonly
         * @member {number}
         */
        get: function () {
            if (!this._head) {
                return 0;
            }
            var count = 0;
            var current = this._head;
            while ((current = current.next)) {
                count++;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Starts the ticker. If the ticker has listeners
     * a new animation frame is requested at this point.
     */
    Ticker.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this._requestIfNeeded();
        }
    };
    /**
     * Stops the ticker. If the ticker has requested
     * an animation frame it is canceled at this point.
     */
    Ticker.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this._cancelIfNeeded();
        }
    };
    /**
     * Destroy the ticker and don't use after this. Calling
     * this method removes all references to internal events.
     */
    Ticker.prototype.destroy = function () {
        if (!this._protected) {
            this.stop();
            var listener = this._head.next;
            while (listener) {
                listener = listener.destroy(true);
            }
            this._head.destroy();
            this._head = null;
        }
    };
    /**
     * Triggers an update. An update entails setting the
     * current {@link PIXI.Ticker#elapsedMS},
     * the current {@link PIXI.Ticker#deltaTime},
     * invoking all listeners with current deltaTime,
     * and then finally setting {@link PIXI.Ticker#lastTime}
     * with the value of currentTime that was provided.
     * This method will be called automatically by animation
     * frame callbacks if the ticker instance has been started
     * and listeners are added.
     *
     * @param {number} [currentTime=performance.now()] - the current time of execution
     */
    Ticker.prototype.update = function (currentTime) {
        if (currentTime === void 0) { currentTime = performance.now(); }
        var elapsedMS;
        // If the difference in time is zero or negative, we ignore most of the work done here.
        // If there is no valid difference, then should be no reason to let anyone know about it.
        // A zero delta, is exactly that, nothing should update.
        //
        // The difference in time can be negative, and no this does not mean time traveling.
        // This can be the result of a race condition between when an animation frame is requested
        // on the current JavaScript engine event loop, and when the ticker's start method is invoked
        // (which invokes the internal _requestIfNeeded method). If a frame is requested before
        // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
        // can receive a time argument that can be less than the lastTime value that was set within
        // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
        //
        // This check covers this browser engine timing issue, as well as if consumers pass an invalid
        // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
        if (currentTime > this.lastTime) {
            // Save uncapped elapsedMS for measurement
            elapsedMS = this.elapsedMS = currentTime - this.lastTime;
            // cap the milliseconds elapsed used for deltaTime
            if (elapsedMS > this._maxElapsedMS) {
                elapsedMS = this._maxElapsedMS;
            }
            elapsedMS *= this.speed;
            // If not enough time has passed, exit the function.
            // Get ready for next frame by setting _lastFrame, but based on _minElapsedMS
            // adjustment to ensure a relatively stable interval.
            if (this._minElapsedMS) {
                var delta = currentTime - this._lastFrame | 0;
                if (delta < this._minElapsedMS) {
                    return;
                }
                this._lastFrame = currentTime - (delta % this._minElapsedMS);
            }
            this.deltaMS = elapsedMS;
            this.deltaTime = this.deltaMS * settings.TARGET_FPMS;
            // Cache a local reference, in-case ticker is destroyed
            // during the emit, we can still check for head.next
            var head = this._head;
            // Invoke listeners added to internal emitter
            var listener = head.next;
            while (listener) {
                listener = listener.emit(this.deltaTime);
            }
            if (!head.next) {
                this._cancelIfNeeded();
            }
        }
        else {
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        }
        this.lastTime = currentTime;
    };
    Object.defineProperty(Ticker.prototype, "FPS", {
        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link PIXI.Ticker#speed}, which is specific
         * to scaling {@link PIXI.Ticker#deltaTime}.
         *
         * @member {number}
         * @readonly
         */
        get: function () {
            return 1000 / this.elapsedMS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticker.prototype, "minFPS", {
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This value is used to cap {@link PIXI.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */
        get: function () {
            return 1000 / this._maxElapsedMS;
        },
        set: function (fps) {
            // Minimum must be below the maxFPS
            var minFPS = Math.min(this.maxFPS, fps);
            // Must be at least 0, but below 1 / settings.TARGET_FPMS
            var minFPMS = Math.min(Math.max(0, minFPS) / 1000, settings.TARGET_FPMS);
            this._maxElapsedMS = 1 / minFPMS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticker.prototype, "maxFPS", {
        /**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This will effect the measured value of {@link PIXI.Ticker#FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         *
         * @member {number}
         * @default 0
         */
        get: function () {
            if (this._minElapsedMS) {
                return Math.round(1000 / this._minElapsedMS);
            }
            return 0;
        },
        set: function (fps) {
            if (fps === 0) {
                this._minElapsedMS = 0;
            }
            else {
                // Max must be at least the minFPS
                var maxFPS = Math.max(this.minFPS, fps);
                this._minElapsedMS = 1 / (maxFPS / 1000);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticker, "shared", {
        /**
         * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
         * {@link PIXI.VideoResource} to update animation frames / video textures.
         *
         * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
         *
         * @example
         * let ticker = PIXI.Ticker.shared;
         * // Set this to prevent starting this ticker when listeners are added.
         * // By default this is true only for the PIXI.Ticker.shared instance.
         * ticker.autoStart = false;
         * // FYI, call this to ensure the ticker is stopped. It should be stopped
         * // if you have not attempted to render anything yet.
         * ticker.stop();
         * // Call this when you are ready for a running shared ticker.
         * ticker.start();
         *
         * @example
         * // You may use the shared ticker to render...
         * let renderer = PIXI.autoDetectRenderer();
         * let stage = new PIXI.Container();
         * document.body.appendChild(renderer.view);
         * ticker.add(function (time) {
         *     renderer.render(stage);
         * });
         *
         * @example
         * // Or you can just update it manually.
         * ticker.autoStart = false;
         * ticker.stop();
         * function animate(time) {
         *     ticker.update(time);
         *     renderer.render(stage);
         *     requestAnimationFrame(animate);
         * }
         * animate(performance.now());
         *
         * @member {PIXI.Ticker}
         * @static
         */
        get: function () {
            if (!Ticker._shared) {
                var shared = Ticker._shared = new Ticker();
                shared.autoStart = true;
                shared._protected = true;
            }
            return Ticker._shared;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticker, "system", {
        /**
         * The system ticker instance used by {@link PIXI.InteractionManager} and by
         * {@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
         * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         *
         * @member {PIXI.Ticker}
         * @static
         */
        get: function () {
            if (!Ticker._system) {
                var system = Ticker._system = new Ticker();
                system.autoStart = true;
                system._protected = true;
            }
            return Ticker._system;
        },
        enumerable: false,
        configurable: true
    });
    return Ticker;
}());

/**
 * Middleware for for Application Ticker.
 *
 * @example
 * import {TickerPlugin} from '@pixi/ticker';
 * import {Application} from '@pixi/app';
 * Application.registerPlugin(TickerPlugin);
 *
 * @class
 * @memberof PIXI
 */
var TickerPlugin = /** @class */ (function () {
    function TickerPlugin() {
    }
    /**
     * Initialize the plugin with scope of application instance
     *
     * @static
     * @private
     * @param {object} [options] - See application options
     */
    TickerPlugin.init = function (options) {
        var _this = this;
        // Set default
        options = Object.assign({
            autoStart: true,
            sharedTicker: false,
        }, options);
        // Create ticker setter
        Object.defineProperty(this, 'ticker', {
            set: function (ticker) {
                if (this._ticker) {
                    this._ticker.remove(this.render, this);
                }
                this._ticker = ticker;
                if (ticker) {
                    ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
                }
            },
            get: function () {
                return this._ticker;
            },
        });
        /**
         * Convenience method for stopping the render.
         *
         * @method PIXI.Application#stop
         */
        this.stop = function () {
            _this._ticker.stop();
        };
        /**
         * Convenience method for starting the render.
         *
         * @method PIXI.Application#start
         */
        this.start = function () {
            _this._ticker.start();
        };
        /**
         * Internal reference to the ticker.
         *
         * @type {PIXI.Ticker}
         * @name _ticker
         * @memberof PIXI.Application#
         * @private
         */
        this._ticker = null;
        /**
         * Ticker for doing render updates.
         *
         * @type {PIXI.Ticker}
         * @name ticker
         * @memberof PIXI.Application#
         * @default PIXI.Ticker.shared
         */
        this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
        // Start the rendering
        if (options.autoStart) {
            this.start();
        }
    };
    /**
     * Clean up the ticker, scoped to application.
     *
     * @static
     * @private
     */
    TickerPlugin.destroy = function () {
        if (this._ticker) {
            var oldTicker = this._ticker;
            this.ticker = null;
            oldTicker.destroy();
        }
    };
    return TickerPlugin;
}());

export { Ticker as T, UPDATE_PRIORITY as U, TickerPlugin as a };
