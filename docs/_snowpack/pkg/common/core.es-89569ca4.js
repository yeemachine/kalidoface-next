import { i as isMobile$2, a as isPow2, B as BaseTextureCache, T as TextureCache, u as uid, g as getResolutionOfUrl, n as nextPow2, d as deprecation, r as removeItems, h as hex2string, b as hex2rgb, p as premultiplyBlendMode, c as premultiplyTint, e as eventemitter3, f as determineCrossOrigin, P as ProgramCache, s as sayHello, j as isWebGLSupported, l as log2 } from './utils.es-3c1074c4.js';
import { T as Ticker } from './ticker.es-8d6a7f87.js';

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
 * @pixi/runner - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
/**
 * A Runner is a highly performant and simple alternative to signals. Best used in situations
 * where events are dispatched to many objects at high frequency (say every frame!)
 *
 *
 * like a signal..
 * ```
 * import { Runner } from '@pixi/runner';
 *
 * const myObject = {
 *     loaded: new Runner('loaded')
 * }
 *
 * const listener = {
 *     loaded: function(){
 *         // thin
 *     }
 * }
 *
 * myObject.update.add(listener);
 *
 * myObject.loaded.emit();
 * ```
 *
 * Or for handling calling the same function on many items
 * ```
 * import { Runner } from '@pixi/runner';
 *
 * const myGame = {
 *     update: new Runner('update')
 * }
 *
 * const gameObject = {
 *     update: function(time){
 *         // update my gamey state
 *     }
 * }
 *
 * myGame.update.add(gameObject1);
 *
 * myGame.update.emit(time);
 * ```
 * @class
 * @memberof PIXI
 */
var Runner = /** @class */ (function () {
    /**
     *  @param {string} name - the function name that will be executed on the listeners added to this Runner.
     */
    function Runner(name) {
        this.items = [];
        this._name = name;
        this._aliasCount = 0;
    }
    /**
     * Dispatch/Broadcast Runner to all listeners added to the queue.
     * @param {...any} params - optional parameters to pass to each listener
     * @return {PIXI.Runner}
     */
    Runner.prototype.emit = function (a0, a1, a2, a3, a4, a5, a6, a7) {
        if (arguments.length > 8) {
            throw new Error('max arguments reached');
        }
        var _a = this, name = _a.name, items = _a.items;
        this._aliasCount++;
        for (var i = 0, len = items.length; i < len; i++) {
            items[i][name](a0, a1, a2, a3, a4, a5, a6, a7);
        }
        if (items === this.items) {
            this._aliasCount--;
        }
        return this;
    };
    Runner.prototype.ensureNonAliasedItems = function () {
        if (this._aliasCount > 0 && this.items.length > 1) {
            this._aliasCount = 0;
            this.items = this.items.slice(0);
        }
    };
    /**
     * Add a listener to the Runner
     *
     * Runners do not need to have scope or functions passed to them.
     * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
     * as the name provided to the Runner when it was created.
     *
     * Eg A listener passed to this Runner will require a 'complete' function.
     *
     * ```
     * import { Runner } from '@pixi/runner';
     *
     * const complete = new Runner('complete');
     * ```
     *
     * The scope used will be the object itself.
     *
     * @param {any} item - The object that will be listening.
     * @return {PIXI.Runner}
     */
    Runner.prototype.add = function (item) {
        if (item[this._name]) {
            this.ensureNonAliasedItems();
            this.remove(item);
            this.items.push(item);
        }
        return this;
    };
    /**
     * Remove a single listener from the dispatch queue.
     * @param {any} item - The listenr that you would like to remove.
     * @return {PIXI.Runner}
     */
    Runner.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.ensureNonAliasedItems();
            this.items.splice(index, 1);
        }
        return this;
    };
    /**
     * Check to see if the listener is already in the Runner
     * @param {any} item - The listener that you would like to check.
     */
    Runner.prototype.contains = function (item) {
        return this.items.indexOf(item) !== -1;
    };
    /**
     * Remove all listeners from the Runner
     * @return {PIXI.Runner}
     */
    Runner.prototype.removeAll = function () {
        this.ensureNonAliasedItems();
        this.items.length = 0;
        return this;
    };
    /**
     * Remove all references, don't use after this.
     */
    Runner.prototype.destroy = function () {
        this.removeAll();
        this.items = null;
        this._name = null;
    };
    Object.defineProperty(Runner.prototype, "empty", {
        /**
         * `true` if there are no this Runner contains no listeners
         *
         * @member {boolean}
         * @readonly
         */
        get: function () {
            return this.items.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Runner.prototype, "name", {
        /**
         * The name of the runner.
         *
         * @member {string}
         * @readonly
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Runner;
}());
Object.defineProperties(Runner.prototype, {
    /**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method dispatch
     * @see PIXI.Runner#emit
     */
    dispatch: { value: Runner.prototype.emit },
    /**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method run
     * @see PIXI.Runner#emit
     */
    run: { value: Runner.prototype.emit },
});

/*!
 * @pixi/math - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
/**
 * Two Pi.
 *
 * @static
 * @constant {number} PI_2
 * @memberof PIXI
 */
var PI_2 = Math.PI * 2;
var SHAPES;
(function (SHAPES) {
    SHAPES[SHAPES["POLY"] = 0] = "POLY";
    SHAPES[SHAPES["RECT"] = 1] = "RECT";
    SHAPES[SHAPES["CIRC"] = 2] = "CIRC";
    SHAPES[SHAPES["ELIP"] = 3] = "ELIP";
    SHAPES[SHAPES["RREC"] = 4] = "RREC";
})(SHAPES || (SHAPES = {}));
/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof PIXI
 * @type {enum}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 * @enum {number}
 */

/**
 * Size object, contains width and height
 *
 * @memberof PIXI
 * @typedef {object} ISize
 * @property {number} width - Width component
 * @property {number} height - Height component
 */
/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 */
var Rectangle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = Number(x);
        /**
         * @member {number}
         * @default 0
         */
        this.y = Number(y);
        /**
         * @member {number}
         * @default 0
         */
        this.width = Number(width);
        /**
         * @member {number}
         * @default 0
         */
        this.height = Number(height);
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.RECT
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.RECT;
    }
    Object.defineProperty(Rectangle.prototype, "left", {
        /**
         * returns the left edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "right", {
        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.x + this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top", {
        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom", {
        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.y + this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle, "EMPTY", {
        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         * @member {PIXI.Rectangle}
         * @return {PIXI.Rectangle} An empty rectangle
         */
        get: function () {
            return new Rectangle(0, 0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a clone of this Rectangle
     *
     * @return {PIXI.Rectangle} a copy of the rectangle
     */
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };
    /**
     * Copies another rectangle to this one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy from.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.copyFrom = function (rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
    };
    /**
     * Copies this rectangle to another one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy to.
     * @return {PIXI.Rectangle} Returns given parameter.
     */
    Rectangle.prototype.copyTo = function (rectangle) {
        rectangle.x = this.x;
        rectangle.y = this.y;
        rectangle.width = this.width;
        rectangle.height = this.height;
        return rectangle;
    };
    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rectangle
     */
    Rectangle.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        if (x >= this.x && x < this.x + this.width) {
            if (y >= this.y && y < this.y + this.height) {
                return true;
            }
        }
        return false;
    };
    /**
     * Pads the rectangle making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     *
     * @param {number} [paddingX=0] - The horizontal padding amount.
     * @param {number} [paddingY=0] - The vertical padding amount.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.pad = function (paddingX, paddingY) {
        if (paddingX === void 0) { paddingX = 0; }
        if (paddingY === void 0) { paddingY = paddingX; }
        this.x -= paddingX;
        this.y -= paddingY;
        this.width += paddingX * 2;
        this.height += paddingY * 2;
        return this;
    };
    /**
     * Fits this rectangle around the passed one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.fit = function (rectangle) {
        var x1 = Math.max(this.x, rectangle.x);
        var x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.max(this.y, rectangle.y);
        var y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = Math.max(x2 - x1, 0);
        this.y = y1;
        this.height = Math.max(y2 - y1, 0);
        return this;
    };
    /**
     * Enlarges rectangle that way its corners lie on grid
     *
     * @param {number} [resolution=1] resolution
     * @param {number} [eps=0.001] precision
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.ceil = function (resolution, eps) {
        if (resolution === void 0) { resolution = 1; }
        if (eps === void 0) { eps = 0.001; }
        var x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
        var y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
        this.x = Math.floor((this.x + eps) * resolution) / resolution;
        this.y = Math.floor((this.y + eps) * resolution) / resolution;
        this.width = x2 - this.x;
        this.height = y2 - this.y;
        return this;
    };
    /**
     * Enlarges this rectangle to include the passed rectangle.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to include.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.enlarge = function (rectangle) {
        var x1 = Math.min(this.x, rectangle.x);
        var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.min(this.y, rectangle.y);
        var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = x2 - x1;
        this.y = y1;
        this.height = y2 - y1;
        return this;
    };
    return Rectangle;
}());

/**
 * Common interface for points. Both Point and ObservablePoint implement it
 * @memberof PIXI
 * @interface IPointData
 */
/**
 * X coord
 * @memberof PIXI.IPointData#
 * @member {number} x
 */
/**
 * Y coord
 * @memberof PIXI.IPointData#
 * @member {number} y
 */

/**
 * Common interface for points. Both Point and ObservablePoint implement it
 * @memberof PIXI
 * @interface IPoint
 * @extends PIXI.IPointData
 */
/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @method set
 * @memberof PIXI.IPoint#
 * @param {number} [x=0] - position of the point on the x axis
 * @param {number} [y=x] - position of the point on the y axis
 */
/**
 * Copies x and y from the given point
 * @method copyFrom
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPointData} p - The point to copy from
 * @returns {this} Returns itself.
 */
/**
 * Copies x and y into the given point
 * @method copyTo
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPoint} p - The point to copy.
 * @returns {PIXI.IPoint} Given point with values updated
 */
/**
 * Returns true if the given point is equal to this point
 *
 * @method equals
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPointData} p - The point to check
 * @returns {boolean} Whether the given point equal to this point
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
var Point = /** @class */ (function () {
    /**
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = x;
        /**
         * @member {number}
         * @default 0
         */
        this.y = y;
    }
    /**
     * Creates a clone of this point
     *
     * @return {PIXI.Point} a copy of the point
     */
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    /**
     * Copies x and y from the given point
     *
     * @param {PIXI.IPointData} p - The point to copy from
     * @returns {this} Returns itself.
     */
    Point.prototype.copyFrom = function (p) {
        this.set(p.x, p.y);
        return this;
    };
    /**
     * Copies x and y into the given point
     *
     * @param {PIXI.IPoint} p - The point to copy.
     * @returns {PIXI.IPoint} Given point with values updated
     */
    Point.prototype.copyTo = function (p) {
        p.set(this.x, this.y);
        return p;
    };
    /**
     * Returns true if the given point is equal to this point
     *
     * @param {PIXI.IPointData} p - The point to check
     * @returns {boolean} Whether the given point equal to this point
     */
    Point.prototype.equals = function (p) {
        return (p.x === this.x) && (p.y === this.y);
    };
    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     * @returns {this} Returns itself.
     */
    Point.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        this.x = x;
        this.y = y;
        return this;
    };
    return Point;
}());

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * An ObservablePoint is a point that triggers a callback when the point's position is changed.
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
var ObservablePoint = /** @class */ (function () {
    /**
     * @param {Function} cb - callback when changed
     * @param {object} scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function ObservablePoint(cb, scope, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
        this.cb = cb;
        this.scope = scope;
    }
    /**
     * Creates a clone of this point.
     * The callback and scope params can be overidden otherwise they will default
     * to the clone object's values.
     *
     * @override
     * @param {Function} [cb=null] - callback when changed
     * @param {object} [scope=null] - owner of callback
     * @return {PIXI.ObservablePoint} a copy of the point
     */
    ObservablePoint.prototype.clone = function (cb, scope) {
        if (cb === void 0) { cb = this.cb; }
        if (scope === void 0) { scope = this.scope; }
        return new ObservablePoint(cb, scope, this._x, this._y);
    };
    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     * @returns {this} Returns itself.
     */
    ObservablePoint.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this.cb.call(this.scope);
        }
        return this;
    };
    /**
     * Copies x and y from the given point
     *
     * @param {PIXI.IPointData} p - The point to copy from.
     * @returns {this} Returns itself.
     */
    ObservablePoint.prototype.copyFrom = function (p) {
        if (this._x !== p.x || this._y !== p.y) {
            this._x = p.x;
            this._y = p.y;
            this.cb.call(this.scope);
        }
        return this;
    };
    /**
     * Copies x and y into the given point
     *
     * @param {PIXI.IPoint} p - The point to copy.
     * @returns {PIXI.IPoint} Given point with values updated
     */
    ObservablePoint.prototype.copyTo = function (p) {
        p.set(this._x, this._y);
        return p;
    };
    /**
     * Returns true if the given point is equal to this point
     *
     * @param {PIXI.IPointData} p - The point to check
     * @returns {boolean} Whether the given point equal to this point
     */
    ObservablePoint.prototype.equals = function (p) {
        return (p.x === this._x) && (p.y === this._y);
    };
    Object.defineProperty(ObservablePoint.prototype, "x", {
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.cb.call(this.scope);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservablePoint.prototype, "y", {
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.cb.call(this.scope);
            }
        },
        enumerable: false,
        configurable: true
    });
    return ObservablePoint;
}());

/**
 * The PixiJS Matrix as a class makes it a lot faster.
 *
 * Here is a representation of it:
 * ```js
 * | a | c | tx|
 * | b | d | ty|
 * | 0 | 0 | 1 |
 * ```
 * @class
 * @memberof PIXI
 */
var Matrix = /** @class */ (function () {
    /**
     * @param {number} [a=1] - x scale
     * @param {number} [b=0] - x skew
     * @param {number} [c=0] - y skew
     * @param {number} [d=1] - y scale
     * @param {number} [tx=0] - x translation
     * @param {number} [ty=0] - y translation
     */
    function Matrix(a, b, c, d, tx, ty) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 1; }
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        this.array = null;
        /**
         * @member {number}
         * @default 1
         */
        this.a = a;
        /**
         * @member {number}
         * @default 0
         */
        this.b = b;
        /**
         * @member {number}
         * @default 0
         */
        this.c = c;
        /**
         * @member {number}
         * @default 1
         */
        this.d = d;
        /**
         * @member {number}
         * @default 0
         */
        this.tx = tx;
        /**
         * @member {number}
         * @default 0
         */
        this.ty = ty;
    }
    /**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     *
     * @param {number[]} array - The array that the matrix will be populated from.
     */
    Matrix.prototype.fromArray = function (array) {
        this.a = array[0];
        this.b = array[1];
        this.c = array[3];
        this.d = array[4];
        this.tx = array[2];
        this.ty = array[5];
    };
    /**
     * sets the matrix properties
     *
     * @param {number} a - Matrix component
     * @param {number} b - Matrix component
     * @param {number} c - Matrix component
     * @param {number} d - Matrix component
     * @param {number} tx - Matrix component
     * @param {number} ty - Matrix component
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.set = function (a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    };
    /**
     * Creates an array from the current Matrix object.
     *
     * @param {boolean} transpose - Whether we need to transpose the matrix or not
     * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @return {number[]} the newly created array which contains the matrix
     */
    Matrix.prototype.toArray = function (transpose, out) {
        if (!this.array) {
            this.array = new Float32Array(9);
        }
        var array = out || this.array;
        if (transpose) {
            array[0] = this.a;
            array[1] = this.b;
            array[2] = 0;
            array[3] = this.c;
            array[4] = this.d;
            array[5] = 0;
            array[6] = this.tx;
            array[7] = this.ty;
            array[8] = 1;
        }
        else {
            array[0] = this.a;
            array[1] = this.c;
            array[2] = this.tx;
            array[3] = this.b;
            array[4] = this.d;
            array[5] = this.ty;
            array[6] = 0;
            array[7] = 0;
            array[8] = 1;
        }
        return array;
    };
    /**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     *
     * @param {PIXI.IPointData} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, transformed through this matrix
     */
    Matrix.prototype.apply = function (pos, newPos) {
        newPos = (newPos || new Point());
        var x = pos.x;
        var y = pos.y;
        newPos.x = (this.a * x) + (this.c * y) + this.tx;
        newPos.y = (this.b * x) + (this.d * y) + this.ty;
        return newPos;
    };
    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     *
     * @param {PIXI.IPointData} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, inverse-transformed through this matrix
     */
    Matrix.prototype.applyInverse = function (pos, newPos) {
        newPos = (newPos || new Point());
        var id = 1 / ((this.a * this.d) + (this.c * -this.b));
        var x = pos.x;
        var y = pos.y;
        newPos.x = (this.d * id * x) + (-this.c * id * y) + (((this.ty * this.c) - (this.tx * this.d)) * id);
        newPos.y = (this.a * id * y) + (-this.b * id * x) + (((-this.ty * this.a) + (this.tx * this.b)) * id);
        return newPos;
    };
    /**
     * Translates the matrix on the x and y.
     *
     * @param {number} x - How much to translate x by
     * @param {number} y - How much to translate y by
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.translate = function (x, y) {
        this.tx += x;
        this.ty += y;
        return this;
    };
    /**
     * Applies a scale transformation to the matrix.
     *
     * @param {number} x - The amount to scale horizontally
     * @param {number} y - The amount to scale vertically
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.scale = function (x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.tx *= x;
        this.ty *= y;
        return this;
    };
    /**
     * Applies a rotation transformation to the matrix.
     *
     * @param {number} angle - The angle in radians.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.rotate = function (angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var a1 = this.a;
        var c1 = this.c;
        var tx1 = this.tx;
        this.a = (a1 * cos) - (this.b * sin);
        this.b = (a1 * sin) + (this.b * cos);
        this.c = (c1 * cos) - (this.d * sin);
        this.d = (c1 * sin) + (this.d * cos);
        this.tx = (tx1 * cos) - (this.ty * sin);
        this.ty = (tx1 * sin) + (this.ty * cos);
        return this;
    };
    /**
     * Appends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to append.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.append = function (matrix) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        this.a = (matrix.a * a1) + (matrix.b * c1);
        this.b = (matrix.a * b1) + (matrix.b * d1);
        this.c = (matrix.c * a1) + (matrix.d * c1);
        this.d = (matrix.c * b1) + (matrix.d * d1);
        this.tx = (matrix.tx * a1) + (matrix.ty * c1) + this.tx;
        this.ty = (matrix.tx * b1) + (matrix.ty * d1) + this.ty;
        return this;
    };
    /**
     * Sets the matrix based on all the available properties
     *
     * @param {number} x - Position on the x axis
     * @param {number} y - Position on the y axis
     * @param {number} pivotX - Pivot on the x axis
     * @param {number} pivotY - Pivot on the y axis
     * @param {number} scaleX - Scale on the x axis
     * @param {number} scaleY - Scale on the y axis
     * @param {number} rotation - Rotation in radians
     * @param {number} skewX - Skew on the x axis
     * @param {number} skewY - Skew on the y axis
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.setTransform = function (x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
        this.a = Math.cos(rotation + skewY) * scaleX;
        this.b = Math.sin(rotation + skewY) * scaleX;
        this.c = -Math.sin(rotation - skewX) * scaleY;
        this.d = Math.cos(rotation - skewX) * scaleY;
        this.tx = x - ((pivotX * this.a) + (pivotY * this.c));
        this.ty = y - ((pivotX * this.b) + (pivotY * this.d));
        return this;
    };
    /**
     * Prepends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to prepend
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.prepend = function (matrix) {
        var tx1 = this.tx;
        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
            var a1 = this.a;
            var c1 = this.c;
            this.a = (a1 * matrix.a) + (this.b * matrix.c);
            this.b = (a1 * matrix.b) + (this.b * matrix.d);
            this.c = (c1 * matrix.a) + (this.d * matrix.c);
            this.d = (c1 * matrix.b) + (this.d * matrix.d);
        }
        this.tx = (tx1 * matrix.a) + (this.ty * matrix.c) + matrix.tx;
        this.ty = (tx1 * matrix.b) + (this.ty * matrix.d) + matrix.ty;
        return this;
    };
    /**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     *
     * @param {PIXI.Transform} transform - The transform to apply the properties to.
     * @return {PIXI.Transform} The transform with the newly applied properties
     */
    Matrix.prototype.decompose = function (transform) {
        // sort out rotation / skew..
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var skewX = -Math.atan2(-c, d);
        var skewY = Math.atan2(b, a);
        var delta = Math.abs(skewX + skewY);
        if (delta < 0.00001 || Math.abs(PI_2 - delta) < 0.00001) {
            transform.rotation = skewY;
            transform.skew.x = transform.skew.y = 0;
        }
        else {
            transform.rotation = 0;
            transform.skew.x = skewX;
            transform.skew.y = skewY;
        }
        // next set scale
        transform.scale.x = Math.sqrt((a * a) + (b * b));
        transform.scale.y = Math.sqrt((c * c) + (d * d));
        // next set position
        transform.position.x = this.tx;
        transform.position.y = this.ty;
        return transform;
    };
    /**
     * Inverts this matrix
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.invert = function () {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var n = (a1 * d1) - (b1 * c1);
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = ((c1 * this.ty) - (d1 * tx1)) / n;
        this.ty = -((a1 * this.ty) - (b1 * tx1)) / n;
        return this;
    };
    /**
     * Resets this Matrix to an identity (default) matrix.
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.identity = function () {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this;
    };
    /**
     * Creates a new Matrix object with the same values as this one.
     *
     * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
     */
    Matrix.prototype.clone = function () {
        var matrix = new Matrix();
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    };
    /**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     *
     * @param {PIXI.Matrix} matrix - The matrix to copy to.
     * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
     */
    Matrix.prototype.copyTo = function (matrix) {
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    };
    /**
     * Changes the values of the matrix to be the same as the ones in given matrix
     *
     * @param {PIXI.Matrix} matrix - The matrix to copy from.
     * @return {PIXI.Matrix} this
     */
    Matrix.prototype.copyFrom = function (matrix) {
        this.a = matrix.a;
        this.b = matrix.b;
        this.c = matrix.c;
        this.d = matrix.d;
        this.tx = matrix.tx;
        this.ty = matrix.ty;
        return this;
    };
    Object.defineProperty(Matrix, "IDENTITY", {
        /**
         * A default (identity) matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        get: function () {
            return new Matrix();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix, "TEMP_MATRIX", {
        /**
         * A temp matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        get: function () {
            return new Matrix();
        },
        enumerable: false,
        configurable: true
    });
    return Matrix;
}());

// Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group
/*
 * Transform matrix for operation n is:
 * | ux | vx |
 * | uy | vy |
 */
var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
/**
 * [Cayley Table]{@link https://en.wikipedia.org/wiki/Cayley_table}
 * for the composition of each rotation in the dihederal group D8.
 *
 * @type number[][]
 * @private
 */
var rotationCayley = [];
/**
 * Matrices for each `GD8Symmetry` rotation.
 *
 * @type Matrix[]
 * @private
 */
var rotationMatrices = [];
/*
 * Alias for {@code Math.sign}.
 */
var signum = Math.sign;
/*
 * Initializes `rotationCayley` and `rotationMatrices`. It is called
 * only once below.
 */
function init() {
    for (var i = 0; i < 16; i++) {
        var row = [];
        rotationCayley.push(row);
        for (var j = 0; j < 16; j++) {
            /* Multiplies rotation matrices i and j. */
            var _ux = signum((ux[i] * ux[j]) + (vx[i] * uy[j]));
            var _uy = signum((uy[i] * ux[j]) + (vy[i] * uy[j]));
            var _vx = signum((ux[i] * vx[j]) + (vx[i] * vy[j]));
            var _vy = signum((uy[i] * vx[j]) + (vy[i] * vy[j]));
            /* Finds rotation matrix matching the product and pushes it. */
            for (var k = 0; k < 16; k++) {
                if (ux[k] === _ux && uy[k] === _uy
                    && vx[k] === _vx && vy[k] === _vy) {
                    row.push(k);
                    break;
                }
            }
        }
    }
    for (var i = 0; i < 16; i++) {
        var mat = new Matrix();
        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
        rotationMatrices.push(mat);
    }
}
init();
/**
 * @memberof PIXI
 * @typedef {number} GD8Symmetry
 * @see PIXI.groupD8
 */
/**
 * Implements the dihedral group D8, which is similar to
 * [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html};
 * D8 is the same but with diagonals, and it is used for texture
 * rotations.
 *
 * The directions the U- and V- axes after rotation
 * of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
 * and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
 *
 * **Origin:**<br>
 *  This is the small part of gameofbombs.com portal system. It works.
 *
 * @see PIXI.groupD8.E
 * @see PIXI.groupD8.SE
 * @see PIXI.groupD8.S
 * @see PIXI.groupD8.SW
 * @see PIXI.groupD8.W
 * @see PIXI.groupD8.NW
 * @see PIXI.groupD8.N
 * @see PIXI.groupD8.NE
 * @author Ivan @ivanpopelyshev
 * @namespace PIXI.groupD8
 * @memberof PIXI
 */
var groupD8 = {
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 0°       | East      |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    E: 0,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 45°↻     | Southeast |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    SE: 1,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 90°↻     | South     |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    S: 2,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 135°↻    | Southwest |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    SW: 3,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 180°     | West      |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    W: 4,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -135°/225°↻ | Northwest    |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    NW: 5,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -90°/270°↻  | North        |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    N: 6,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -45°/315°↻  | Northeast    |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    NE: 7,
    /**
     * Reflection about Y-axis.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MIRROR_VERTICAL: 8,
    /**
     * Reflection about the main diagonal.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MAIN_DIAGONAL: 10,
    /**
     * Reflection about X-axis.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MIRROR_HORIZONTAL: 12,
    /**
     * Reflection about reverse diagonal.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    REVERSE_DIAGONAL: 14,
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The X-component of the U-axis
     *    after rotating the axes.
     */
    uX: function (ind) { return ux[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The Y-component of the U-axis
     *    after rotating the axes.
     */
    uY: function (ind) { return uy[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The X-component of the V-axis
     *    after rotating the axes.
     */
    vX: function (ind) { return vx[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The Y-component of the V-axis
     *    after rotating the axes.
     */
    vY: function (ind) { return vy[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
     *   is needed. Only rotations have opposite symmetries while
     *   reflections don't.
     * @return {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
     */
    inv: function (rotation) {
        if (rotation & 8) // true only if between 8 & 15 (reflections)
         {
            return rotation & 15; // or rotation % 16
        }
        return (-rotation) & 7; // or (8 - rotation) % 8
    },
    /**
     * Composes the two D8 operations.
     *
     * Taking `^` as reflection:
     *
     * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
     * |-------|-----|-----|-----|-----|------|-------|-------|-------|
     * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
     * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
     * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
     * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
     * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
     * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
     * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
     * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
     *
     * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
     *   is the row in the above cayley table.
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
     *   is the column in the above cayley table.
     * @return {PIXI.GD8Symmetry} Composed operation
     */
    add: function (rotationSecond, rotationFirst) { return (rotationCayley[rotationSecond][rotationFirst]); },
    /**
     * Reverse of `add`.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation
     * @return {PIXI.GD8Symmetry} Result
     */
    sub: function (rotationSecond, rotationFirst) { return (rotationCayley[rotationSecond][groupD8.inv(rotationFirst)]); },
    /**
     * Adds 180 degrees to rotation, which is a commutative
     * operation.
     *
     * @memberof PIXI.groupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} Rotated number
     */
    rotate180: function (rotation) { return rotation ^ 4; },
    /**
     * Checks if the rotation angle is vertical, i.e. south
     * or north. It doesn't work for reflections.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - The number to check.
     * @returns {boolean} Whether or not the direction is vertical
     */
    isVertical: function (rotation) { return (rotation & 3) === 2; },
    /**
     * Approximates the vector `V(dx,dy)` into one of the
     * eight directions provided by `groupD8`.
     *
     * @memberof PIXI.groupD8
     * @param {number} dx - X-component of the vector
     * @param {number} dy - Y-component of the vector
     * @return {PIXI.GD8Symmetry} Approximation of the vector into
     *  one of the eight symmetries.
     */
    byDirection: function (dx, dy) {
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
            if (dy >= 0) {
                return groupD8.S;
            }
            return groupD8.N;
        }
        else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
            if (dx > 0) {
                return groupD8.E;
            }
            return groupD8.W;
        }
        else if (dy > 0) {
            if (dx > 0) {
                return groupD8.SE;
            }
            return groupD8.SW;
        }
        else if (dx > 0) {
            return groupD8.NE;
        }
        return groupD8.NW;
    },
    /**
     * Helps sprite to compensate texture packer rotation.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.Matrix} matrix - sprite world matrix
     * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */
    matrixAppendRotationInv: function (matrix, rotation, tx, ty) {
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        // Packer used "rotation", we use "inv(rotation)"
        var mat = rotationMatrices[groupD8.inv(rotation)];
        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
    },
};

/**
 * Transform that takes care about its versions
 *
 * @class
 * @memberof PIXI
 */
var Transform = /** @class */ (function () {
    function Transform() {
        /**
         * The world transformation matrix.
         *
         * @member {PIXI.Matrix}
         */
        this.worldTransform = new Matrix();
        /**
         * The local transformation matrix.
         *
         * @member {PIXI.Matrix}
         */
        this.localTransform = new Matrix();
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.position = new ObservablePoint(this.onChange, this, 0, 0);
        /**
         * The scale factor of the object.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.scale = new ObservablePoint(this.onChange, this, 1, 1);
        /**
         * The pivot point of the displayObject that it rotates around.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
        /**
         * The skew amount, on the x and y axis.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
        /**
         * The rotation amount.
         *
         * @protected
         * @member {number}
         */
        this._rotation = 0;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._cx = 1;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._sx = 0;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._cy = 0;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._sy = 1;
        /**
         * The locally unique ID of the local transform.
         *
         * @protected
         * @member {number}
         */
        this._localID = 0;
        /**
         * The locally unique ID of the local transform
         * used to calculate the current local transformation matrix.
         *
         * @protected
         * @member {number}
         */
        this._currentLocalID = 0;
        /**
         * The locally unique ID of the world transform.
         *
         * @protected
         * @member {number}
         */
        this._worldID = 0;
        /**
         * The locally unique ID of the parent's world transform
         * used to calculate the current world transformation matrix.
         *
         * @protected
         * @member {number}
         */
        this._parentID = 0;
    }
    /**
     * Called when a value changes.
     *
     * @protected
     */
    Transform.prototype.onChange = function () {
        this._localID++;
    };
    /**
     * Called when the skew or the rotation changes.
     *
     * @protected
     */
    Transform.prototype.updateSkew = function () {
        this._cx = Math.cos(this._rotation + this.skew.y);
        this._sx = Math.sin(this._rotation + this.skew.y);
        this._cy = -Math.sin(this._rotation - this.skew.x); // cos, added PI/2
        this._sy = Math.cos(this._rotation - this.skew.x); // sin, added PI/2
        this._localID++;
    };
    /**
     * Updates the local transformation matrix.
     */
    Transform.prototype.updateLocalTransform = function () {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
    };
    /**
     * Updates the local and the world transformation matrices.
     *
     * @param {PIXI.Transform} parentTransform - The parent transform
     */
    Transform.prototype.updateTransform = function (parentTransform) {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
        if (this._parentID !== parentTransform._worldID) {
            // concat the parent matrix with the objects transform.
            var pt = parentTransform.worldTransform;
            var wt = this.worldTransform;
            wt.a = (lt.a * pt.a) + (lt.b * pt.c);
            wt.b = (lt.a * pt.b) + (lt.b * pt.d);
            wt.c = (lt.c * pt.a) + (lt.d * pt.c);
            wt.d = (lt.c * pt.b) + (lt.d * pt.d);
            wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
            wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
            this._parentID = parentTransform._worldID;
            // update the id of the transform..
            this._worldID++;
        }
    };
    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {PIXI.Matrix} matrix - The matrix to decompose
     */
    Transform.prototype.setFromMatrix = function (matrix) {
        matrix.decompose(this);
        this._localID++;
    };
    Object.defineProperty(Transform.prototype, "rotation", {
        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            if (this._rotation !== value) {
                this._rotation = value;
                this.updateSkew();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * A default (identity) transform
     *
     * @static
     * @constant
     * @member {PIXI.Transform}
     */
    Transform.IDENTITY = new Transform();
    return Transform;
}());

/*!
 * @pixi/core - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

/**
 * The maximum support for using WebGL. If a device does not
 * support WebGL version, for instance WebGL 2, it will still
 * attempt to fallback support to WebGL 1. If you want to
 * explicitly remove feature support to target a more stable
 * baseline, prefer a lower environment.
 *
 * Due to {@link https://bugs.chromium.org/p/chromium/issues/detail?id=934823|bug in chromium}
 * we disable webgl2 by default for all non-apple mobile devices.
 *
 * @static
 * @name PREFER_ENV
 * @memberof PIXI.settings
 * @type {number}
 * @default PIXI.ENV.WEBGL2
 */
settings.PREFER_ENV = isMobile$2.any ? ENV.WEBGL : ENV.WEBGL2;
/**
 * If set to `true`, *only* Textures and BaseTexture objects stored
 * in the caches ({@link PIXI.utils.TextureCache TextureCache} and
 * {@link PIXI.utils.BaseTextureCache BaseTextureCache}) can be
 * used when calling {@link PIXI.Texture.from Texture.from} or
 * {@link PIXI.BaseTexture.from BaseTexture.from}.
 * Otherwise, these `from` calls throw an exception. Using this property
 * can be useful if you want to enforce preloading all assets with
 * {@link PIXI.Loader Loader}.
 *
 * @static
 * @name STRICT_TEXTURE_CACHE
 * @memberof PIXI.settings
 * @type {boolean}
 * @default false
 */
settings.STRICT_TEXTURE_CACHE = false;

/**
 * Collection of installed resource types, class must extend {@link PIXI.resources.Resource}.
 * @example
 * class CustomResource extends PIXI.resources.Resource {
 *   // MUST have source, options constructor signature
 *   // for auto-detected resources to be created.
 *   constructor(source, options) {
 *     super();
 *   }
 *   upload(renderer, baseTexture, glTexture) {
 *     // upload with GL
 *     return true;
 *   }
 *   // used to auto-detect resource
 *   static test(source, extension) {
 *     return extension === 'xyz'|| source instanceof SomeClass;
 *   }
 * }
 * // Install the new resource type
 * PIXI.resources.INSTALLED.push(CustomResource);
 *
 * @name PIXI.resources.INSTALLED
 * @type {Array<*>}
 * @static
 * @readonly
 */
var INSTALLED = [];
/**
 * Create a resource element from a single source element. This
 * auto-detects which type of resource to create. All resources that
 * are auto-detectable must have a static `test` method and a constructor
 * with the arguments `(source, options?)`. Currently, the supported
 * resources for auto-detection include:
 *  - {@link PIXI.resources.ImageResource}
 *  - {@link PIXI.resources.CanvasResource}
 *  - {@link PIXI.resources.VideoResource}
 *  - {@link PIXI.resources.SVGResource}
 *  - {@link PIXI.resources.BufferResource}
 * @static
 * @function PIXI.resources.autoDetectResource
 * @param {string|*} source - Resource source, this can be the URL to the resource,
 *        a typed-array (for BufferResource), HTMLVideoElement, SVG data-uri
 *        or any other resource that can be auto-detected. If not resource is
 *        detected, it's assumed to be an ImageResource.
 * @param {object} [options] - Pass-through options to use for Resource
 * @param {number} [options.width] - Width of BufferResource or SVG rasterization
 * @param {number} [options.height] - Height of BufferResource or SVG rasterization
 * @param {boolean} [options.autoLoad=true] - Image, SVG and Video flag to start loading
 * @param {number} [options.scale=1] - SVG source scale. Overridden by width, height
 * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - Image option to create Bitmap object
 * @param {boolean} [options.crossorigin=true] - Image and Video option to set crossOrigin
 * @param {boolean} [options.autoPlay=true] - Video option to start playing video immediately
 * @param {number} [options.updateFPS=0] - Video option to update how many times a second the
 *        texture should be updated from the video. Leave at 0 to update at every render
 * @return {PIXI.resources.Resource} The created resource.
 */
function autoDetectResource(source, options) {
    if (!source) {
        return null;
    }
    var extension = '';
    if (typeof source === 'string') {
        // search for file extension: period, 3-4 chars, then ?, # or EOL
        var result = (/\.(\w{3,4})(?:$|\?|#)/i).exec(source);
        if (result) {
            extension = result[1].toLowerCase();
        }
    }
    for (var i = INSTALLED.length - 1; i >= 0; --i) {
        var ResourcePlugin = INSTALLED[i];
        if (ResourcePlugin.test && ResourcePlugin.test(source, extension)) {
            return new ResourcePlugin(source, options);
        }
    }
    throw new Error('Unrecognized source type to auto-detect Resource');
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Base resource class for textures that manages validation and uploading, depending on its type.
 *
 * Uploading of a base texture to the GPU is required.
 *
 * @class
 * @memberof PIXI.resources
 */
var Resource = /** @class */ (function () {
    /**
     * @param {number} [width=0] - Width of the resource
     * @param {number} [height=0] - Height of the resource
     */
    function Resource(width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        /**
         * Internal width of the resource
         * @member {number}
         * @protected
         */
        this._width = width;
        /**
         * Internal height of the resource
         * @member {number}
         * @protected
         */
        this._height = height;
        /**
         * If resource has been destroyed
         * @member {boolean}
         * @readonly
         * @default false
         */
        this.destroyed = false;
        /**
         * `true` if resource is created by BaseTexture
         * useful for doing cleanup with BaseTexture destroy
         * and not cleaning up resources that were created
         * externally.
         * @member {boolean}
         * @protected
         */
        this.internal = false;
        /**
         * Mini-runner for handling resize events
         * accepts 2 parameters: width, height
         *
         * @member {Runner}
         * @private
         */
        this.onResize = new Runner('setRealSize');
        /**
         * Mini-runner for handling update events
         *
         * @member {Runner}
         * @private
         */
        this.onUpdate = new Runner('update');
        /**
         * Handle internal errors, such as loading errors
         * accepts 1 param: error
         *
         * @member {Runner}
         * @private
         */
        this.onError = new Runner('onError');
    }
    /**
     * Bind to a parent BaseTexture
     *
     * @param {PIXI.BaseTexture} baseTexture - Parent texture
     */
    Resource.prototype.bind = function (baseTexture) {
        this.onResize.add(baseTexture);
        this.onUpdate.add(baseTexture);
        this.onError.add(baseTexture);
        // Call a resize immediate if we already
        // have the width and height of the resource
        if (this._width || this._height) {
            this.onResize.emit(this._width, this._height);
        }
    };
    /**
     * Unbind to a parent BaseTexture
     *
     * @param {PIXI.BaseTexture} baseTexture - Parent texture
     */
    Resource.prototype.unbind = function (baseTexture) {
        this.onResize.remove(baseTexture);
        this.onUpdate.remove(baseTexture);
        this.onError.remove(baseTexture);
    };
    /**
     * Trigger a resize event
     * @param {number} width - X dimension
     * @param {number} height - Y dimension
     */
    Resource.prototype.resize = function (width, height) {
        if (width !== this._width || height !== this._height) {
            this._width = width;
            this._height = height;
            this.onResize.emit(width, height);
        }
    };
    Object.defineProperty(Resource.prototype, "valid", {
        /**
         * Has been validated
         * @readonly
         * @member {boolean}
         */
        get: function () {
            return !!this._width && !!this._height;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Has been updated trigger event
     */
    Resource.prototype.update = function () {
        if (!this.destroyed) {
            this.onUpdate.emit();
        }
    };
    /**
     * This can be overridden to start preloading a resource
     * or do any other prepare step.
     * @protected
     * @return {Promise<void>} Handle the validate event
     */
    Resource.prototype.load = function () {
        return Promise.resolve(this);
    };
    Object.defineProperty(Resource.prototype, "width", {
        /**
         * The width of the resource.
         *
         * @member {number}
         * @readonly
         */
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "height", {
        /**
         * The height of the resource.
         *
         * @member {number}
         * @readonly
         */
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the style, optional to override
     *
     * @param {PIXI.Renderer} renderer - yeah, renderer!
     * @param {PIXI.BaseTexture} baseTexture - the texture
     * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
     * @returns {boolean} `true` is success
     */
    Resource.prototype.style = function (_renderer, _baseTexture, _glTexture) {
        return false;
    };
    /**
     * Clean up anything, this happens when destroying is ready.
     *
     * @protected
     */
    Resource.prototype.dispose = function () {
        // override
    };
    /**
     * Call when destroying resource, unbind any BaseTexture object
     * before calling this method, as reference counts are maintained
     * internally.
     */
    Resource.prototype.destroy = function () {
        if (!this.destroyed) {
            this.destroyed = true;
            this.dispose();
            this.onError.removeAll();
            this.onError = null;
            this.onResize.removeAll();
            this.onResize = null;
            this.onUpdate.removeAll();
            this.onUpdate = null;
        }
    };
    /**
     * Abstract, used to auto-detect resource type
     *
     * @static
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     */
    Resource.test = function (_source, _extension) {
        return false;
    };
    return Resource;
}());

/**
 * @interface SharedArrayBuffer
 */
/**
 * Buffer resource with data of typed array.
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 */
var BufferResource = /** @class */ (function (_super) {
    __extends(BufferResource, _super);
    /**
     * @param {Float32Array|Uint8Array|Uint32Array} source - Source buffer
     * @param {object} options - Options
     * @param {number} options.width - Width of the texture
     * @param {number} options.height - Height of the texture
     */
    function BufferResource(source, options) {
        var _this = this;
        var _a = options || {}, width = _a.width, height = _a.height;
        if (!width || !height) {
            throw new Error('BufferResource width or height invalid');
        }
        _this = _super.call(this, width, height) || this;
        /**
         * Source array
         * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
         *
         * @member {Float32Array|Uint8Array|Uint32Array}
         */
        _this.data = source;
        return _this;
    }
    /**
     * Upload the texture to the GPU.
     * @param {PIXI.Renderer} renderer - Upload to the renderer
     * @param {PIXI.BaseTexture} baseTexture - Reference to parent texture
     * @param {PIXI.GLTexture} glTexture - glTexture
     * @returns {boolean} true is success
     */
    BufferResource.prototype.upload = function (renderer, baseTexture, glTexture) {
        var gl = renderer.gl;
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
        if (glTexture.width === baseTexture.width && glTexture.height === baseTexture.height) {
            gl.texSubImage2D(baseTexture.target, 0, 0, 0, baseTexture.width, baseTexture.height, baseTexture.format, baseTexture.type, this.data);
        }
        else {
            glTexture.width = baseTexture.width;
            glTexture.height = baseTexture.height;
            gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, baseTexture.width, baseTexture.height, 0, baseTexture.format, glTexture.type, this.data);
        }
        return true;
    };
    /**
     * Destroy and don't use after this
     * @override
     */
    BufferResource.prototype.dispose = function () {
        this.data = null;
    };
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @return {boolean} `true` if <canvas>
     */
    BufferResource.test = function (source) {
        return source instanceof Float32Array
            || source instanceof Uint8Array
            || source instanceof Uint32Array;
    };
    return BufferResource;
}(Resource));

var defaultBufferOptions = {
    scaleMode: SCALE_MODES.NEAREST,
    format: FORMATS.RGBA,
    alphaMode: ALPHA_MODES.NPM,
};
/**
 * A Texture stores the information that represents an image.
 * All textures have a base texture, which contains information about the source.
 * Therefore you can have many textures all using a single BaseTexture
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 * @param {PIXI.resources.Resource|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} [resource=null]
 *        The current resource to use, for things that aren't Resource objects, will be converted
 *        into a Resource.
 * @param {Object} [options] - Collection of options
 * @param {PIXI.MIPMAP_MODES} [options.mipmap=PIXI.settings.MIPMAP_TEXTURES] - If mipmapping is enabled for texture
 * @param {number} [options.anisotropicLevel=PIXI.settings.ANISOTROPIC_LEVEL] - Anisotropic filtering level of texture
 * @param {PIXI.WRAP_MODES} [options.wrapMode=PIXI.settings.WRAP_MODE] - Wrap mode for textures
 * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.settings.SCALE_MODE] - Default scale mode, linear, nearest
 * @param {PIXI.FORMATS} [options.format=PIXI.FORMATS.RGBA] - GL format type
 * @param {PIXI.TYPES} [options.type=PIXI.TYPES.UNSIGNED_BYTE] - GL data type
 * @param {PIXI.TARGETS} [options.target=PIXI.TARGETS.TEXTURE_2D] - GL texture target
 * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Pre multiply the image alpha
 * @param {number} [options.width=0] - Width of the texture
 * @param {number} [options.height=0] - Height of the texture
 * @param {number} [options.resolution] - Resolution of the base texture
 * @param {object} [options.resourceOptions] - Optional resource options,
 *        see {@link PIXI.resources.autoDetectResource autoDetectResource}
 */
var BaseTexture = /** @class */ (function (_super) {
    __extends(BaseTexture, _super);
    function BaseTexture(resource, options) {
        if (resource === void 0) { resource = null; }
        if (options === void 0) { options = null; }
        var _this = _super.call(this) || this;
        options = options || {};
        var alphaMode = options.alphaMode, mipmap = options.mipmap, anisotropicLevel = options.anisotropicLevel, scaleMode = options.scaleMode, width = options.width, height = options.height, wrapMode = options.wrapMode, format = options.format, type = options.type, target = options.target, resolution = options.resolution, resourceOptions = options.resourceOptions;
        // Convert the resource to a Resource object
        if (resource && !(resource instanceof Resource)) {
            resource = autoDetectResource(resource, resourceOptions);
            resource.internal = true;
        }
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.width = width || 0;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.height = height || 0;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number}
         * @default PIXI.settings.RESOLUTION
         */
        _this.resolution = resolution || settings.RESOLUTION;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {PIXI.MIPMAP_MODES}
         * @default PIXI.settings.MIPMAP_TEXTURES
         */
        _this.mipmap = mipmap !== undefined ? mipmap : settings.MIPMAP_TEXTURES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number}
         * @default PIXI.settings.ANISOTROPIC_LEVEL
         */
        _this.anisotropicLevel = anisotropicLevel !== undefined ? anisotropicLevel : settings.ANISOTROPIC_LEVEL;
        /**
         * How the texture wraps
         * @member {number}
         */
        _this.wrapMode = wrapMode || settings.WRAP_MODE;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {PIXI.SCALE_MODES}
         * @default PIXI.settings.SCALE_MODE
         */
        _this.scaleMode = scaleMode !== undefined ? scaleMode : settings.SCALE_MODE;
        /**
         * The pixel format of the texture
         *
         * @member {PIXI.FORMATS}
         * @default PIXI.FORMATS.RGBA
         */
        _this.format = format || FORMATS.RGBA;
        /**
         * The type of resource data
         *
         * @member {PIXI.TYPES}
         * @default PIXI.TYPES.UNSIGNED_BYTE
         */
        _this.type = type || TYPES.UNSIGNED_BYTE;
        /**
         * The target type
         *
         * @member {PIXI.TARGETS}
         * @default PIXI.TARGETS.TEXTURE_2D
         */
        _this.target = target || TARGETS.TEXTURE_2D;
        /**
         * How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.
         *
         * @member {PIXI.ALPHA_MODES}
         * @default PIXI.ALPHA_MODES.UNPACK
         */
        _this.alphaMode = alphaMode !== undefined ? alphaMode : ALPHA_MODES.UNPACK;
        if (options.premultiplyAlpha !== undefined) {
            // triggers deprecation
            _this.premultiplyAlpha = options.premultiplyAlpha;
        }
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {number}
         * @protected
         */
        _this.uid = uid();
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number}
         * @protected
         */
        _this.touched = 0;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean}
         * @default false
         */
        _this.isPowerOfTwo = false;
        _this._refreshPOT();
        /**
         * The map of render context textures where this is bound
         *
         * @member {Object}
         * @private
         */
        _this._glTextures = {};
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number}
         */
        _this.dirtyId = 0;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number}
         */
        _this.dirtyStyleId = 0;
        /**
         * Currently default cache ID.
         *
         * @member {string}
         */
        _this.cacheId = null;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean}
         */
        _this.valid = width > 0 && height > 0;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>}
         * @readonly
         */
        _this.textureCacheIds = [];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean}
         * @readonly
         */
        _this.destroyed = false;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {PIXI.resources.Resource}
         * @readonly
         */
        _this.resource = null;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number}
         */
        _this._batchEnabled = 0;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number}
         */
        _this._batchLocation = 0;
        /**
         * Whether its a part of another texture, handled by ArrayResource or CubeResource
         *
         * @member {PIXI.BaseTexture}
         */
        _this.parentTextureArray = null;
        /**
         * Fired when a not-immediately-available source finishes loading.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */
        /**
         * Fired when a not-immediately-available source fails to load.
         *
         * @protected
         * @event PIXI.BaseTexture#error
         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
         * @param {ErrorEvent} event - Load error event.
         */
        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */
        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#update
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
         */
        /**
         * Fired when BaseTexture is destroyed.
         *
         * @protected
         * @event PIXI.BaseTexture#dispose
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
         */
        // Set the resource
        _this.setResource(resource);
        return _this;
    }
    Object.defineProperty(BaseTexture.prototype, "realWidth", {
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        get: function () {
            return Math.ceil((this.width * this.resolution) - 1e-4);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTexture.prototype, "realHeight", {
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        get: function () {
            return Math.ceil((this.height * this.resolution) - 1e-4);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Changes style options of BaseTexture
     *
     * @param {PIXI.SCALE_MODES} [scaleMode] - Pixi scalemode
     * @param {PIXI.MIPMAP_MODES} [mipmap] - enable mipmaps
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setStyle = function (scaleMode, mipmap) {
        var dirty;
        if (scaleMode !== undefined && scaleMode !== this.scaleMode) {
            this.scaleMode = scaleMode;
            dirty = true;
        }
        if (mipmap !== undefined && mipmap !== this.mipmap) {
            this.mipmap = mipmap;
            dirty = true;
        }
        if (dirty) {
            this.dirtyStyleId++;
        }
        return this;
    };
    /**
     * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
     *
     * @param {number} width - Visual width
     * @param {number} height - Visual height
     * @param {number} [resolution] - Optionally set resolution
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setSize = function (width, height, resolution) {
        this.resolution = resolution || this.resolution;
        this.width = width;
        this.height = height;
        this._refreshPOT();
        this.update();
        return this;
    };
    /**
     * Sets real size of baseTexture, preserves current resolution.
     *
     * @param {number} realWidth - Full rendered width
     * @param {number} realHeight - Full rendered height
     * @param {number} [resolution] - Optionally set resolution
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setRealSize = function (realWidth, realHeight, resolution) {
        this.resolution = resolution || this.resolution;
        this.width = realWidth / this.resolution;
        this.height = realHeight / this.resolution;
        this._refreshPOT();
        this.update();
        return this;
    };
    /**
     * Refresh check for isPowerOfTwo texture based on size
     *
     * @private
     */
    BaseTexture.prototype._refreshPOT = function () {
        this.isPowerOfTwo = isPow2(this.realWidth) && isPow2(this.realHeight);
    };
    /**
     * Changes resolution
     *
     * @param {number} resolution - res
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setResolution = function (resolution) {
        var oldResolution = this.resolution;
        if (oldResolution === resolution) {
            return this;
        }
        this.resolution = resolution;
        if (this.valid) {
            this.width = this.width * oldResolution / resolution;
            this.height = this.height * oldResolution / resolution;
            this.emit('update', this);
        }
        this._refreshPOT();
        return this;
    };
    /**
     * Sets the resource if it wasn't set. Throws error if resource already present
     *
     * @param {PIXI.resources.Resource} resource - that is managing this BaseTexture
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setResource = function (resource) {
        if (this.resource === resource) {
            return this;
        }
        if (this.resource) {
            throw new Error('Resource can be set only once');
        }
        resource.bind(this);
        this.resource = resource;
        return this;
    };
    /**
     * Invalidates the object. Texture becomes valid if width and height are greater than zero.
     */
    BaseTexture.prototype.update = function () {
        if (!this.valid) {
            if (this.width > 0 && this.height > 0) {
                this.valid = true;
                this.emit('loaded', this);
                this.emit('update', this);
            }
        }
        else {
            this.dirtyId++;
            this.dirtyStyleId++;
            this.emit('update', this);
        }
    };
    /**
     * Handle errors with resources.
     * @private
     * @param {ErrorEvent} event - Error event emitted.
     */
    BaseTexture.prototype.onError = function (event) {
        this.emit('error', this, event);
    };
    /**
     * Destroys this base texture.
     * The method stops if resource doesn't want this texture to be destroyed.
     * Removes texture from all caches.
     */
    BaseTexture.prototype.destroy = function () {
        // remove and destroy the resource
        if (this.resource) {
            this.resource.unbind(this);
            // only destroy resourced created internally
            if (this.resource.internal) {
                this.resource.destroy();
            }
            this.resource = null;
        }
        if (this.cacheId) {
            delete BaseTextureCache[this.cacheId];
            delete TextureCache[this.cacheId];
            this.cacheId = null;
        }
        // finally let the WebGL renderer know..
        this.dispose();
        BaseTexture.removeFromCache(this);
        this.textureCacheIds = null;
        this.destroyed = true;
    };
    /**
     * Frees the texture from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     * @fires PIXI.BaseTexture#dispose
     */
    BaseTexture.prototype.dispose = function () {
        this.emit('dispose', this);
    };
    /**
     * Utility function for BaseTexture|Texture cast
     */
    BaseTexture.prototype.castToBaseTexture = function () {
        return this;
    };
    /**
     * Helper function that creates a base texture based on the source you provide.
     * The source can be - image url, image element, canvas element. If the
     * source is an image url or an image element and not in the base texture
     * cache, it will be created and loaded.
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement} source - The
     *        source to create base texture from.
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @returns {PIXI.BaseTexture} The new base texture.
     */
    BaseTexture.from = function (source, options, strict) {
        if (strict === void 0) { strict = settings.STRICT_TEXTURE_CACHE; }
        var isFrame = typeof source === 'string';
        var cacheId = null;
        if (isFrame) {
            cacheId = source;
        }
        else {
            if (!source._pixiId) {
                source._pixiId = "pixiid_" + uid();
            }
            cacheId = source._pixiId;
        }
        var baseTexture = BaseTextureCache[cacheId];
        // Strict-mode rejects invalid cacheIds
        if (isFrame && strict && !baseTexture) {
            throw new Error("The cacheId \"" + cacheId + "\" does not exist in BaseTextureCache.");
        }
        if (!baseTexture) {
            baseTexture = new BaseTexture(source, options);
            baseTexture.cacheId = cacheId;
            BaseTexture.addToCache(baseTexture, cacheId);
        }
        return baseTexture;
    };
    /**
     * Create a new BaseTexture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @static
     * @param {Float32Array|Uint8Array} buffer - The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param {number} width - Width of the resource
     * @param {number} height - Height of the resource
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.BaseTexture} The resulting new BaseTexture
     */
    BaseTexture.fromBuffer = function (buffer, width, height, options) {
        buffer = buffer || new Float32Array(width * height * 4);
        var resource = new BufferResource(buffer, { width: width, height: height });
        var type = buffer instanceof Float32Array ? TYPES.FLOAT : TYPES.UNSIGNED_BYTE;
        return new BaseTexture(resource, Object.assign(defaultBufferOptions, options || { width: width, height: height, type: type }));
    };
    /**
     * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
     * @param {string} id - The id that the BaseTexture will be stored against.
     */
    BaseTexture.addToCache = function (baseTexture, id) {
        if (id) {
            if (baseTexture.textureCacheIds.indexOf(id) === -1) {
                baseTexture.textureCacheIds.push(id);
            }
            if (BaseTextureCache[id]) {
                // eslint-disable-next-line no-console
                console.warn("BaseTexture added to the cache with an id [" + id + "] that already had an entry");
            }
            BaseTextureCache[id] = baseTexture;
        }
    };
    /**
     * Remove a BaseTexture from the global BaseTextureCache.
     *
     * @static
     * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
     * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
     */
    BaseTexture.removeFromCache = function (baseTexture) {
        if (typeof baseTexture === 'string') {
            var baseTextureFromCache = BaseTextureCache[baseTexture];
            if (baseTextureFromCache) {
                var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
                if (index > -1) {
                    baseTextureFromCache.textureCacheIds.splice(index, 1);
                }
                delete BaseTextureCache[baseTexture];
                return baseTextureFromCache;
            }
        }
        else if (baseTexture && baseTexture.textureCacheIds) {
            for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
                delete BaseTextureCache[baseTexture.textureCacheIds[i]];
            }
            baseTexture.textureCacheIds.length = 0;
            return baseTexture;
        }
        return null;
    };
    /**
     * Global number of the texture batch, used by multi-texture renderers
     *
     * @static
     * @member {number}
     */
    BaseTexture._globalBatch = 0;
    return BaseTexture;
}(eventemitter3));

/**
 * Resource that can manage several resource (items) inside.
 * All resources need to have the same pixel size.
 * Parent class for CubeResource and ArrayResource
 *
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 * @param {object} [options] Options to for Resource constructor
 * @param {number} [options.width] - Width of the resource
 * @param {number} [options.height] - Height of the resource
 */
var AbstractMultiResource = /** @class */ (function (_super) {
    __extends(AbstractMultiResource, _super);
    function AbstractMultiResource(length, options) {
        var _this = this;
        var _a = options || {}, width = _a.width, height = _a.height;
        _this = _super.call(this, width, height) || this;
        /**
         * Collection of partial baseTextures that correspond to resources
         * @member {Array<PIXI.BaseTexture>}
         * @readonly
         */
        _this.items = [];
        /**
         * Dirty IDs for each part
         * @member {Array<number>}
         * @readonly
         */
        _this.itemDirtyIds = [];
        for (var i = 0; i < length; i++) {
            var partTexture = new BaseTexture();
            _this.items.push(partTexture);
            // -2 - first run of texture array upload
            // -1 - texture item was allocated
            // >=0 - texture item uploaded , in sync with items[i].dirtyId
            _this.itemDirtyIds.push(-2);
        }
        /**
         * Number of elements in array
         *
         * @member {number}
         * @readonly
         */
        _this.length = length;
        /**
         * Promise when loading
         * @member {Promise}
         * @private
         * @default null
         */
        _this._load = null;
        /**
         * Bound baseTexture, there can only be one
         * @member {PIXI.BaseTexture}
         */
        _this.baseTexture = null;
        return _this;
    }
    /**
     * used from ArrayResource and CubeResource constructors
     * @param {Array<*>} resources - Can be resources, image elements, canvas, etc. ,
     *  length should be same as constructor length
     * @param {object} [options] - detect options for resources
     * @protected
     */
    AbstractMultiResource.prototype.initFromArray = function (resources, options) {
        for (var i = 0; i < this.length; i++) {
            if (!resources[i]) {
                continue;
            }
            if (resources[i].castToBaseTexture) {
                this.addBaseTextureAt(resources[i].castToBaseTexture(), i);
            }
            else if (resources[i] instanceof Resource) {
                this.addResourceAt(resources[i], i);
            }
            else {
                this.addResourceAt(autoDetectResource(resources[i], options), i);
            }
        }
    };
    /**
     * Destroy this BaseImageResource
     * @override
     */
    AbstractMultiResource.prototype.dispose = function () {
        for (var i = 0, len = this.length; i < len; i++) {
            this.items[i].destroy();
        }
        this.items = null;
        this.itemDirtyIds = null;
        this._load = null;
    };
    /**
     * Set a resource by ID
     *
     * @param {PIXI.resources.Resource} resource
     * @param {number} index - Zero-based index of resource to set
     * @return {PIXI.resources.ArrayResource} Instance for chaining
     */
    AbstractMultiResource.prototype.addResourceAt = function (resource, index) {
        if (!this.items[index]) {
            throw new Error("Index " + index + " is out of bounds");
        }
        // Inherit the first resource dimensions
        if (resource.valid && !this.valid) {
            this.resize(resource.width, resource.height);
        }
        this.items[index].setResource(resource);
        return this;
    };
    /**
     * Set the parent base texture
     * @member {PIXI.BaseTexture}
     * @override
     */
    AbstractMultiResource.prototype.bind = function (baseTexture) {
        if (this.baseTexture !== null) {
            throw new Error('Only one base texture per TextureArray is allowed');
        }
        _super.prototype.bind.call(this, baseTexture);
        for (var i = 0; i < this.length; i++) {
            this.items[i].parentTextureArray = baseTexture;
            this.items[i].on('update', baseTexture.update, baseTexture);
        }
    };
    /**
     * Unset the parent base texture
     * @member {PIXI.BaseTexture}
     * @override
     */
    AbstractMultiResource.prototype.unbind = function (baseTexture) {
        _super.prototype.unbind.call(this, baseTexture);
        for (var i = 0; i < this.length; i++) {
            this.items[i].parentTextureArray = null;
            this.items[i].off('update', baseTexture.update, baseTexture);
        }
    };
    /**
     * Load all the resources simultaneously
     * @override
     * @return {Promise<void>} When load is resolved
     */
    AbstractMultiResource.prototype.load = function () {
        var _this = this;
        if (this._load) {
            return this._load;
        }
        var resources = this.items.map(function (item) { return item.resource; }).filter(function (item) { return item; });
        // TODO: also implement load part-by-part strategy
        var promises = resources.map(function (item) { return item.load(); });
        this._load = Promise.all(promises)
            .then(function () {
            var _a = _this.items[0], realWidth = _a.realWidth, realHeight = _a.realHeight;
            _this.resize(realWidth, realHeight);
            return Promise.resolve(_this);
        });
        return this._load;
    };
    return AbstractMultiResource;
}(Resource));

/**
 * A resource that contains a number of sources.
 *
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 * @param {number|Array<*>} source - Number of items in array or the collection
 *        of image URLs to use. Can also be resources, image elements, canvas, etc.
 * @param {object} [options] - Options to apply to {@link PIXI.resources.autoDetectResource}
 * @param {number} [options.width] - Width of the resource
 * @param {number} [options.height] - Height of the resource
 */
var ArrayResource = /** @class */ (function (_super) {
    __extends(ArrayResource, _super);
    function ArrayResource(source, options) {
        var _this = this;
        var _a = options || {}, width = _a.width, height = _a.height;
        var urls;
        var length;
        if (Array.isArray(source)) {
            urls = source;
            length = source.length;
        }
        else {
            length = source;
        }
        _this = _super.call(this, length, { width: width, height: height }) || this;
        if (urls) {
            _this.initFromArray(urls, options);
        }
        return _this;
    }
    /**
     * Set a baseTexture by ID,
     * ArrayResource just takes resource from it, nothing more
     *
     * @param {PIXI.BaseTexture} baseTexture
     * @param {number} index - Zero-based index of resource to set
     * @return {PIXI.resources.ArrayResource} Instance for chaining
     */
    ArrayResource.prototype.addBaseTextureAt = function (baseTexture, index) {
        if (baseTexture.resource) {
            this.addResourceAt(baseTexture.resource, index);
        }
        else {
            throw new Error('ArrayResource does not support RenderTexture');
        }
        return this;
    };
    /**
     * Add binding
     * @member {PIXI.BaseTexture}
     * @override
     */
    ArrayResource.prototype.bind = function (baseTexture) {
        _super.prototype.bind.call(this, baseTexture);
        baseTexture.target = TARGETS.TEXTURE_2D_ARRAY;
    };
    /**
     * Upload the resources to the GPU.
     * @param {PIXI.Renderer} renderer
     * @param {PIXI.BaseTexture} texture
     * @param {PIXI.GLTexture} glTexture
     * @returns {boolean} whether texture was uploaded
     */
    ArrayResource.prototype.upload = function (renderer, texture, glTexture) {
        var _a = this, length = _a.length, itemDirtyIds = _a.itemDirtyIds, items = _a.items;
        var gl = renderer.gl;
        if (glTexture.dirtyId < 0) {
            gl.texImage3D(gl.TEXTURE_2D_ARRAY, 0, texture.format, this._width, this._height, length, 0, texture.format, texture.type, null);
        }
        for (var i = 0; i < length; i++) {
            var item = items[i];
            if (itemDirtyIds[i] < item.dirtyId) {
                itemDirtyIds[i] = item.dirtyId;
                if (item.valid) {
                    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, // xoffset
                    0, // yoffset
                    i, // zoffset
                    item.resource.width, item.resource.height, 1, texture.format, texture.type, item.resource.source);
                }
            }
        }
        return true;
    };
    return ArrayResource;
}(AbstractMultiResource));

/**
 * Base for all the image/canvas resources
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 */
var BaseImageResource = /** @class */ (function (_super) {
    __extends(BaseImageResource, _super);
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} source
     */
    function BaseImageResource(source) {
        var _this = this;
        var sourceAny = source;
        var width = sourceAny.naturalWidth || sourceAny.videoWidth || sourceAny.width;
        var height = sourceAny.naturalHeight || sourceAny.videoHeight || sourceAny.height;
        _this = _super.call(this, width, height) || this;
        /**
         * The source element
         * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement}
         * @readonly
         */
        _this.source = source;
        /**
         * If set to `true`, will force `texImage2D` over `texSubImage2D` for uploading.
         * Certain types of media (e.g. video) using `texImage2D` is more performant.
         * @member {boolean}
         * @default false
         * @private
         */
        _this.noSubImage = false;
        return _this;
    }
    /**
     * Set cross origin based detecting the url and the crossorigin
     * @protected
     * @param {HTMLElement} element - Element to apply crossOrigin
     * @param {string} url - URL to check
     * @param {boolean|string} [crossorigin=true] - Cross origin value to use
     */
    BaseImageResource.crossOrigin = function (element, url, crossorigin) {
        if (crossorigin === undefined && url.indexOf('data:') !== 0) {
            element.crossOrigin = determineCrossOrigin(url);
        }
        else if (crossorigin !== false) {
            element.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
        }
    };
    /**
     * Upload the texture to the GPU.
     * @param {PIXI.Renderer} renderer - Upload to the renderer
     * @param {PIXI.BaseTexture} baseTexture - Reference to parent texture
     * @param {PIXI.GLTexture} glTexture
     * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
     * @returns {boolean} true is success
     */
    BaseImageResource.prototype.upload = function (renderer, baseTexture, glTexture, source) {
        var gl = renderer.gl;
        var width = baseTexture.realWidth;
        var height = baseTexture.realHeight;
        source = source || this.source;
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
        if (!this.noSubImage
            && baseTexture.target === gl.TEXTURE_2D
            && glTexture.width === width
            && glTexture.height === height) {
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, baseTexture.type, source);
        }
        else {
            glTexture.width = width;
            glTexture.height = height;
            gl.texImage2D(baseTexture.target, 0, baseTexture.format, baseTexture.format, baseTexture.type, source);
        }
        return true;
    };
    /**
     * Checks if source width/height was changed, resize can cause extra baseTexture update.
     * Triggers one update in any case.
     */
    BaseImageResource.prototype.update = function () {
        if (this.destroyed) {
            return;
        }
        var source = this.source;
        var width = source.naturalWidth || source.videoWidth || source.width;
        var height = source.naturalHeight || source.videoHeight || source.height;
        this.resize(width, height);
        _super.prototype.update.call(this);
    };
    /**
     * Destroy this BaseImageResource
     * @override
     */
    BaseImageResource.prototype.dispose = function () {
        this.source = null;
    };
    return BaseImageResource;
}(Resource));

/**
 * @interface OffscreenCanvas
 */
/**
 * Resource type for HTMLCanvasElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {HTMLCanvasElement} source - Canvas element to use
 */
var CanvasResource = /** @class */ (function (_super) {
    __extends(CanvasResource, _super);
    function CanvasResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {HTMLCanvasElement|OffscreenCanvas} source - The source object
     * @return {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
     */
    CanvasResource.test = function (source) {
        var OffscreenCanvas = window.OffscreenCanvas;
        // Check for browsers that don't yet support OffscreenCanvas
        if (OffscreenCanvas && source instanceof OffscreenCanvas) {
            return true;
        }
        return source instanceof HTMLCanvasElement;
    };
    return CanvasResource;
}(BaseImageResource));

/**
 * Resource for a CubeTexture which contains six resources.
 *
 * @class
 * @extends PIXI.resources.ArrayResource
 * @memberof PIXI.resources
 * @param {Array<string|PIXI.resources.Resource>} [source] - Collection of URLs or resources
 *        to use as the sides of the cube.
 * @param {object} [options] - ImageResource options
 * @param {number} [options.width] - Width of resource
 * @param {number} [options.height] - Height of resource
 * @param {number} [options.autoLoad=true] - Whether to auto-load resources
 * @param {number} [options.linkBaseTexture=true] - In case BaseTextures are supplied,
 *   whether to copy them or use
 */
var CubeResource = /** @class */ (function (_super) {
    __extends(CubeResource, _super);
    function CubeResource(source, options) {
        var _this = this;
        var _a = options || {}, width = _a.width, height = _a.height, autoLoad = _a.autoLoad, linkBaseTexture = _a.linkBaseTexture;
        if (source && source.length !== CubeResource.SIDES) {
            throw new Error("Invalid length. Got " + source.length + ", expected 6");
        }
        _this = _super.call(this, 6, { width: width, height: height }) || this;
        for (var i = 0; i < CubeResource.SIDES; i++) {
            _this.items[i].target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + i;
        }
        /**
         * In case BaseTextures are supplied, whether to use same resource or bind baseTexture itself
         * @member {boolean}
         * @protected
         */
        _this.linkBaseTexture = linkBaseTexture !== false;
        if (source) {
            _this.initFromArray(source, options);
        }
        if (autoLoad !== false) {
            _this.load();
        }
        return _this;
    }
    /**
     * Add binding
     *
     * @override
     * @param {PIXI.BaseTexture} baseTexture - parent base texture
     */
    CubeResource.prototype.bind = function (baseTexture) {
        _super.prototype.bind.call(this, baseTexture);
        baseTexture.target = TARGETS.TEXTURE_CUBE_MAP;
    };
    CubeResource.prototype.addBaseTextureAt = function (baseTexture, index, linkBaseTexture) {
        if (linkBaseTexture === undefined) {
            linkBaseTexture = this.linkBaseTexture;
        }
        if (!this.items[index]) {
            throw new Error("Index " + index + " is out of bounds");
        }
        if (!this.linkBaseTexture
            || baseTexture.parentTextureArray
            || Object.keys(baseTexture._glTextures).length > 0) {
            // copy mode
            if (baseTexture.resource) {
                this.addResourceAt(baseTexture.resource, index);
            }
            else {
                throw new Error("CubeResource does not support copying of renderTexture.");
            }
        }
        else {
            // link mode, the difficult one!
            baseTexture.target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + index;
            baseTexture.parentTextureArray = this.baseTexture;
            this.items[index] = baseTexture;
        }
        if (baseTexture.valid && !this.valid) {
            this.resize(baseTexture.realWidth, baseTexture.realHeight);
        }
        this.items[index] = baseTexture;
        return this;
    };
    /**
     * Upload the resource
     *
     * @returns {boolean} true is success
     */
    CubeResource.prototype.upload = function (renderer, _baseTexture, glTexture) {
        var dirty = this.itemDirtyIds;
        for (var i = 0; i < CubeResource.SIDES; i++) {
            var side = this.items[i];
            if (dirty[i] < side.dirtyId) {
                if (side.valid && side.resource) {
                    side.resource.upload(renderer, side, glTexture);
                    dirty[i] = side.dirtyId;
                }
                else if (dirty[i] < -1) {
                    // either item is not valid yet, either its a renderTexture
                    // allocate the memory
                    renderer.gl.texImage2D(side.target, 0, glTexture.internalFormat, _baseTexture.realWidth, _baseTexture.realHeight, 0, _baseTexture.format, glTexture.type, null);
                    dirty[i] = -1;
                }
            }
        }
        return true;
    };
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {object} source - The source object
     * @return {boolean} `true` if source is an array of 6 elements
     */
    CubeResource.test = function (source) {
        return Array.isArray(source) && source.length === CubeResource.SIDES;
    };
    /**
     * Number of texture sides to store for CubeResources
     *
     * @name PIXI.resources.CubeResource.SIDES
     * @static
     * @member {number}
     * @default 6
     */
    CubeResource.SIDES = 6;
    return CubeResource;
}(AbstractMultiResource));

/**
 * Resource type for HTMLImageElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 */
var ImageResource = /** @class */ (function (_super) {
    __extends(ImageResource, _super);
    /**
     * @param {HTMLImageElement|string} source - image source or URL
     * @param {object} [options]
     * @param {boolean} [options.autoLoad=true] - start loading process
     * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - whether its required to create
     *        a bitmap before upload
     * @param {boolean} [options.crossorigin=true] - Load image using cross origin
     * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Premultiply image alpha in bitmap
     */
    function ImageResource(source, options) {
        var _this = this;
        options = options || {};
        if (!(source instanceof HTMLImageElement)) {
            var imageElement = new Image();
            BaseImageResource.crossOrigin(imageElement, source, options.crossorigin);
            imageElement.src = source;
            source = imageElement;
        }
        _this = _super.call(this, source) || this;
        // FireFox 68, and possibly other versions, seems like setting the HTMLImageElement#width and #height
        // to non-zero values before its loading completes if images are in a cache.
        // Because of this, need to set the `_width` and the `_height` to zero to avoid uploading incomplete images.
        // Please refer to the issue #5968 (https://github.com/pixijs/pixi.js/issues/5968).
        if (!source.complete && !!_this._width && !!_this._height) {
            _this._width = 0;
            _this._height = 0;
        }
        /**
         * URL of the image source
         * @member {string}
         */
        _this.url = source.src;
        /**
         * When process is completed
         * @member {Promise<void>}
         * @private
         */
        _this._process = null;
        /**
         * If the image should be disposed after upload
         * @member {boolean}
         * @default false
         */
        _this.preserveBitmap = false;
        /**
         * If capable, convert the image using createImageBitmap API
         * @member {boolean}
         * @default PIXI.settings.CREATE_IMAGE_BITMAP
         */
        _this.createBitmap = (options.createBitmap !== undefined
            ? options.createBitmap : settings.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap;
        /**
         * Controls texture alphaMode field
         * Copies from options
         * Default is `null`, copies option from baseTexture
         *
         * @member {PIXI.ALPHA_MODES|null}
         * @readonly
         */
        _this.alphaMode = typeof options.alphaMode === 'number' ? options.alphaMode : null;
        if (options.premultiplyAlpha !== undefined) {
            // triggers deprecation
            _this.premultiplyAlpha = options.premultiplyAlpha;
        }
        /**
         * The ImageBitmap element created for HTMLImageElement
         * @member {ImageBitmap}
         * @default null
         */
        _this.bitmap = null;
        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        _this._load = null;
        if (options.autoLoad !== false) {
            _this.load();
        }
        return _this;
    }
    /**
     * returns a promise when image will be loaded and processed
     *
     * @param {boolean} [createBitmap] - whether process image into bitmap
     * @returns {Promise<void>}
     */
    ImageResource.prototype.load = function (createBitmap) {
        var _this = this;
        if (this._load) {
            return this._load;
        }
        if (createBitmap !== undefined) {
            this.createBitmap = createBitmap;
        }
        this._load = new Promise(function (resolve, reject) {
            var source = _this.source;
            _this.url = source.src;
            var completed = function () {
                if (_this.destroyed) {
                    return;
                }
                source.onload = null;
                source.onerror = null;
                _this.resize(source.width, source.height);
                _this._load = null;
                if (_this.createBitmap) {
                    resolve(_this.process());
                }
                else {
                    resolve(_this);
                }
            };
            if (source.complete && source.src) {
                completed();
            }
            else {
                source.onload = completed;
                source.onerror = function (event) {
                    // Avoids Promise freezing when resource broken
                    reject(event);
                    _this.onError.emit(event);
                };
            }
        });
        return this._load;
    };
    /**
     * Called when we need to convert image into BitmapImage.
     * Can be called multiple times, real promise is cached inside.
     *
     * @returns {Promise<void>} cached promise to fill that bitmap
     */
    ImageResource.prototype.process = function () {
        var _this = this;
        var source = this.source;
        if (this._process !== null) {
            return this._process;
        }
        if (this.bitmap !== null || !window.createImageBitmap) {
            return Promise.resolve(this);
        }
        this._process = window.createImageBitmap(source, 0, 0, source.width, source.height, {
            premultiplyAlpha: this.alphaMode === ALPHA_MODES.UNPACK ? 'premultiply' : 'none',
        })
            .then(function (bitmap) {
            if (_this.destroyed) {
                return Promise.reject();
            }
            _this.bitmap = bitmap;
            _this.update();
            _this._process = null;
            return Promise.resolve(_this);
        });
        return this._process;
    };
    /**
     * Upload the image resource to GPU.
     *
     * @param {PIXI.Renderer} renderer - Renderer to upload to
     * @param {PIXI.BaseTexture} baseTexture - BaseTexture for this resource
     * @param {PIXI.GLTexture} glTexture - GLTexture to use
     * @returns {boolean} true is success
     */
    ImageResource.prototype.upload = function (renderer, baseTexture, glTexture) {
        if (typeof this.alphaMode === 'number') {
            // bitmap stores unpack premultiply flag, we dont have to notify texImage2D about it
            baseTexture.alphaMode = this.alphaMode;
        }
        if (!this.createBitmap) {
            return _super.prototype.upload.call(this, renderer, baseTexture, glTexture);
        }
        if (!this.bitmap) {
            // yeah, ignore the output
            this.process();
            if (!this.bitmap) {
                return false;
            }
        }
        _super.prototype.upload.call(this, renderer, baseTexture, glTexture, this.bitmap);
        if (!this.preserveBitmap) {
            // checks if there are other renderers that possibly need this bitmap
            var flag = true;
            var glTextures = baseTexture._glTextures;
            for (var key in glTextures) {
                var otherTex = glTextures[key];
                if (otherTex !== glTexture && otherTex.dirtyId !== baseTexture.dirtyId) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (this.bitmap.close) {
                    this.bitmap.close();
                }
                this.bitmap = null;
            }
        }
        return true;
    };
    /**
     * Destroys this texture
     * @override
     */
    ImageResource.prototype.dispose = function () {
        this.source.onload = null;
        this.source.onerror = null;
        _super.prototype.dispose.call(this);
        if (this.bitmap) {
            this.bitmap.close();
            this.bitmap = null;
        }
        this._process = null;
        this._load = null;
    };
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {string|HTMLImageElement} source - The source object
     * @return {boolean} `true` if source is string or HTMLImageElement
     */
    ImageResource.test = function (source) {
        return typeof source === 'string' || source instanceof HTMLImageElement;
    };
    return ImageResource;
}(BaseImageResource));

/**
 * Resource type for SVG elements and graphics.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {string} source - Base64 encoded SVG element or URL for SVG file.
 * @param {object} [options] - Options to use
 * @param {number} [options.scale=1] - Scale to apply to SVG. Overridden by...
 * @param {number} [options.width] - Rasterize SVG this wide. Aspect ratio preserved if height not specified.
 * @param {number} [options.height] - Rasterize SVG this high. Aspect ratio preserved if width not specified.
 * @param {boolean} [options.autoLoad=true] - Start loading right away.
 */
var SVGResource = /** @class */ (function (_super) {
    __extends(SVGResource, _super);
    function SVGResource(sourceBase64, options) {
        var _this = this;
        options = options || {};
        _this = _super.call(this, document.createElement('canvas')) || this;
        _this._width = 0;
        _this._height = 0;
        /**
         * Base64 encoded SVG element or URL for SVG file
         * @readonly
         * @member {string}
         */
        _this.svg = sourceBase64;
        /**
         * The source scale to apply when rasterizing on load
         * @readonly
         * @member {number}
         */
        _this.scale = options.scale || 1;
        /**
         * A width override for rasterization on load
         * @readonly
         * @member {number}
         */
        _this._overrideWidth = options.width;
        /**
         * A height override for rasterization on load
         * @readonly
         * @member {number}
         */
        _this._overrideHeight = options.height;
        /**
         * Call when completely loaded
         * @private
         * @member {function}
         */
        _this._resolve = null;
        /**
         * Cross origin value to use
         * @private
         * @member {boolean|string}
         */
        _this._crossorigin = options.crossorigin;
        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        _this._load = null;
        if (options.autoLoad !== false) {
            _this.load();
        }
        return _this;
    }
    SVGResource.prototype.load = function () {
        var _this = this;
        if (this._load) {
            return this._load;
        }
        this._load = new Promise(function (resolve) {
            // Save this until after load is finished
            _this._resolve = function () {
                _this.resize(_this.source.width, _this.source.height);
                resolve(_this);
            };
            // Convert SVG inline string to data-uri
            if ((/^\<svg/).test(_this.svg.trim())) {
                if (!btoa) {
                    throw new Error('Your browser doesn\'t support base64 conversions.');
                }
                _this.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(_this.svg)));
            }
            _this._loadSvg();
        });
        return this._load;
    };
    /**
     * Loads an SVG image from `imageUrl` or `data URL`.
     *
     * @private
     */
    SVGResource.prototype._loadSvg = function () {
        var _this = this;
        var tempImage = new Image();
        BaseImageResource.crossOrigin(tempImage, this.svg, this._crossorigin);
        tempImage.src = this.svg;
        tempImage.onerror = function (event) {
            if (!_this._resolve) {
                return;
            }
            tempImage.onerror = null;
            _this.onError.emit(event);
        };
        tempImage.onload = function () {
            if (!_this._resolve) {
                return;
            }
            var svgWidth = tempImage.width;
            var svgHeight = tempImage.height;
            if (!svgWidth || !svgHeight) {
                throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
            }
            // Set render size
            var width = svgWidth * _this.scale;
            var height = svgHeight * _this.scale;
            if (_this._overrideWidth || _this._overrideHeight) {
                width = _this._overrideWidth || _this._overrideHeight / svgHeight * svgWidth;
                height = _this._overrideHeight || _this._overrideWidth / svgWidth * svgHeight;
            }
            width = Math.round(width);
            height = Math.round(height);
            // Create a canvas element
            var canvas = _this.source;
            canvas.width = width;
            canvas.height = height;
            canvas._pixiId = "canvas_" + uid();
            // Draw the Svg to the canvas
            canvas
                .getContext('2d')
                .drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, width, height);
            _this._resolve();
            _this._resolve = null;
        };
    };
    /**
     * Get size from an svg string using regexp.
     *
     * @method
     * @param {string} svgString - a serialized svg element
     * @return {PIXI.ISize} image extension
     */
    SVGResource.getSize = function (svgString) {
        var sizeMatch = SVGResource.SVG_SIZE.exec(svgString);
        var size = {};
        if (sizeMatch) {
            size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
            size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
        }
        return size;
    };
    /**
     * Destroys this texture
     * @override
     */
    SVGResource.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._resolve = null;
        this._crossorigin = null;
    };
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     */
    SVGResource.test = function (source, extension) {
        // url file extension is SVG
        return extension === 'svg'
            // source is SVG data-uri
            || (typeof source === 'string' && (/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/).test(source))
            // source is SVG inline
            || (typeof source === 'string' && source.indexOf('<svg') === 0);
    };
    /**
     * RegExp for SVG size.
     *
     * @static
     * @constant {RegExp|string} SVG_SIZE
     * @memberof PIXI.resources.SVGResource
     * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
     */
    SVGResource.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len
    return SVGResource;
}(BaseImageResource));

/**
 * Resource type for HTMLVideoElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
 * @param {object} [options] - Options to use
 * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
 * @param {boolean} [options.autoPlay=true] - Start playing video immediately
 * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
 * Leave at 0 to update at every render.
 * @param {boolean} [options.crossorigin=true] - Load image using cross origin
 */
var VideoResource = /** @class */ (function (_super) {
    __extends(VideoResource, _super);
    function VideoResource(source, options) {
        var _this = this;
        options = options || {};
        if (!(source instanceof HTMLVideoElement)) {
            var videoElement = document.createElement('video');
            // workaround for https://github.com/pixijs/pixi.js/issues/5996
            videoElement.setAttribute('preload', 'auto');
            videoElement.setAttribute('webkit-playsinline', '');
            videoElement.setAttribute('playsinline', '');
            if (typeof source === 'string') {
                source = [source];
            }
            var firstSrc = source[0].src || source[0];
            BaseImageResource.crossOrigin(videoElement, firstSrc, options.crossorigin);
            // array of objects or strings
            for (var i = 0; i < source.length; ++i) {
                var sourceElement = document.createElement('source');
                var _a = source[i], src = _a.src, mime = _a.mime;
                src = src || source[i];
                var baseSrc = src.split('?').shift().toLowerCase();
                var ext = baseSrc.substr(baseSrc.lastIndexOf('.') + 1);
                mime = mime || VideoResource.MIME_TYPES[ext] || "video/" + ext;
                sourceElement.src = src;
                sourceElement.type = mime;
                videoElement.appendChild(sourceElement);
            }
            // Override the source
            source = videoElement;
        }
        _this = _super.call(this, source) || this;
        _this.noSubImage = true;
        /**
         * `true` to use PIXI.Ticker.shared to auto update the base texture.
         *
         * @type {boolean}
         * @default true
         * @private
         */
        _this._autoUpdate = true;
        /**
         * `true` if the instance is currently connected to PIXI.Ticker.shared to auto update the base texture.
         *
         * @type {boolean}
         * @default false
         * @private
         */
        _this._isConnectedToTicker = false;
        _this._updateFPS = options.updateFPS || 0;
        _this._msToNextUpdate = 0;
        /**
         * When set to true will automatically play videos used by this texture once
         * they are loaded. If false, it will not modify the playing state.
         *
         * @member {boolean}
         * @default true
         */
        _this.autoPlay = options.autoPlay !== false;
        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        _this._load = null;
        /**
         * Callback when completed with load.
         * @member {function}
         * @private
         */
        _this._resolve = null;
        // Bind for listeners
        _this._onCanPlay = _this._onCanPlay.bind(_this);
        _this._onError = _this._onError.bind(_this);
        if (options.autoLoad !== false) {
            _this.load();
        }
        return _this;
    }
    /**
     * Trigger updating of the texture
     *
     * @param {number} [deltaTime=0] - time delta since last tick
     */
    VideoResource.prototype.update = function (_deltaTime) {
        if (!this.destroyed) {
            // account for if video has had its playbackRate changed
            var elapsedMS = Ticker.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
            if (!this._updateFPS || this._msToNextUpdate <= 0) {
                _super.prototype.update.call(this);
                this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0;
            }
        }
    };
    /**
     * Start preloading the video resource.
     *
     * @protected
     * @return {Promise<void>} Handle the validate event
     */
    VideoResource.prototype.load = function () {
        var _this = this;
        if (this._load) {
            return this._load;
        }
        var source = this.source;
        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA)
            && source.width && source.height) {
            source.complete = true;
        }
        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));
        if (!this._isSourceReady()) {
            source.addEventListener('canplay', this._onCanPlay);
            source.addEventListener('canplaythrough', this._onCanPlay);
            source.addEventListener('error', this._onError, true);
        }
        else {
            this._onCanPlay();
        }
        this._load = new Promise(function (resolve) {
            if (_this.valid) {
                resolve(_this);
            }
            else {
                _this._resolve = resolve;
                source.load();
            }
        });
        return this._load;
    };
    /**
     * Handle video error events.
     *
     * @private
     */
    VideoResource.prototype._onError = function (event) {
        this.source.removeEventListener('error', this._onError, true);
        this.onError.emit(event);
    };
    /**
     * Returns true if the underlying source is playing.
     *
     * @private
     * @return {boolean} True if playing.
     */
    VideoResource.prototype._isSourcePlaying = function () {
        var source = this.source;
        return (source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2);
    };
    /**
     * Returns true if the underlying source is ready for playing.
     *
     * @private
     * @return {boolean} True if ready.
     */
    VideoResource.prototype._isSourceReady = function () {
        var source = this.source;
        return source.readyState === 3 || source.readyState === 4;
    };
    /**
     * Runs the update loop when the video is ready to play
     *
     * @private
     */
    VideoResource.prototype._onPlayStart = function () {
        // Just in case the video has not received its can play even yet..
        if (!this.valid) {
            this._onCanPlay();
        }
        if (this.autoUpdate && !this._isConnectedToTicker) {
            Ticker.shared.add(this.update, this);
            this._isConnectedToTicker = true;
        }
    };
    /**
     * Fired when a pause event is triggered, stops the update loop
     *
     * @private
     */
    VideoResource.prototype._onPlayStop = function () {
        if (this._isConnectedToTicker) {
            Ticker.shared.remove(this.update, this);
            this._isConnectedToTicker = false;
        }
    };
    /**
     * Fired when the video is loaded and ready to play
     *
     * @private
     */
    VideoResource.prototype._onCanPlay = function () {
        var source = this.source;
        source.removeEventListener('canplay', this._onCanPlay);
        source.removeEventListener('canplaythrough', this._onCanPlay);
        var valid = this.valid;
        this.resize(source.videoWidth, source.videoHeight);
        // prevent multiple loaded dispatches..
        if (!valid && this._resolve) {
            this._resolve(this);
            this._resolve = null;
        }
        if (this._isSourcePlaying()) {
            this._onPlayStart();
        }
        else if (this.autoPlay) {
            source.play();
        }
    };
    /**
     * Destroys this texture
     * @override
     */
    VideoResource.prototype.dispose = function () {
        if (this._isConnectedToTicker) {
            Ticker.shared.remove(this.update, this);
        }
        var source = this.source;
        if (source) {
            source.removeEventListener('error', this._onError, true);
            source.pause();
            source.src = '';
            source.load();
        }
        _super.prototype.dispose.call(this);
    };
    Object.defineProperty(VideoResource.prototype, "autoUpdate", {
        /**
         * Should the base texture automatically update itself, set to true by default
         *
         * @member {boolean}
         */
        get: function () {
            return this._autoUpdate;
        },
        set: function (value) {
            if (value !== this._autoUpdate) {
                this._autoUpdate = value;
                if (!this._autoUpdate && this._isConnectedToTicker) {
                    Ticker.shared.remove(this.update, this);
                    this._isConnectedToTicker = false;
                }
                else if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
                    Ticker.shared.add(this.update, this);
                    this._isConnectedToTicker = true;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoResource.prototype, "updateFPS", {
        /**
         * How many times a second to update the texture from the video. Leave at 0 to update at every render.
         * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
         *
         * @member {number}
         */
        get: function () {
            return this._updateFPS;
        },
        set: function (value) {
            if (value !== this._updateFPS) {
                this._updateFPS = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     * @return {boolean} `true` if video source
     */
    VideoResource.test = function (source, extension) {
        return (source instanceof HTMLVideoElement)
            || VideoResource.TYPES.indexOf(extension) > -1;
    };
    /**
     * List of common video file extensions supported by VideoResource.
     * @constant
     * @member {Array<string>}
     * @static
     * @readonly
     */
    VideoResource.TYPES = ['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov'];
    /**
     * Map of video MIME types that can't be directly derived from file extensions.
     * @constant
     * @member {object}
     * @static
     * @readonly
     */
    VideoResource.MIME_TYPES = {
        ogv: 'video/ogg',
        mov: 'video/quicktime',
        m4v: 'video/mp4',
    };
    return VideoResource;
}(BaseImageResource));

/**
 * Resource type for ImageBitmap.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {ImageBitmap} source - Image element to use
 */
var ImageBitmapResource = /** @class */ (function (_super) {
    __extends(ImageBitmapResource, _super);
    function ImageBitmapResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {ImageBitmap} source - The source object
     * @return {boolean} `true` if source is an ImageBitmap
     */
    ImageBitmapResource.test = function (source) {
        return !!window.createImageBitmap && source instanceof ImageBitmap;
    };
    return ImageBitmapResource;
}(BaseImageResource));

INSTALLED.push(ImageResource, ImageBitmapResource, CanvasResource, VideoResource, SVGResource, BufferResource, CubeResource, ArrayResource);

var index = ({
    Resource: Resource,
    BaseImageResource: BaseImageResource,
    INSTALLED: INSTALLED,
    autoDetectResource: autoDetectResource,
    AbstractMultiResource: AbstractMultiResource,
    ArrayResource: ArrayResource,
    BufferResource: BufferResource,
    CanvasResource: CanvasResource,
    CubeResource: CubeResource,
    ImageResource: ImageResource,
    SVGResource: SVGResource,
    VideoResource: VideoResource,
    ImageBitmapResource: ImageBitmapResource
});

/**
 * System is a base class used for extending systems used by the {@link PIXI.Renderer}
 *
 * @see PIXI.Renderer#addSystem
 * @class
 * @memberof PIXI
 */
var System = /** @class */ (function () {
    /**
     * @param {PIXI.Renderer} renderer - The renderer this manager works for.
     */
    function System(renderer) {
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer}
         */
        this.renderer = renderer;
    }
    /**
     * Generic destroy methods to be overridden by the subclass
     */
    System.prototype.destroy = function () {
        this.renderer = null;
    };
    return System;
}());

/**
 * Resource type for DepthTexture.
 * @class
 * @extends PIXI.resources.BufferResource
 * @memberof PIXI.resources
 */
var DepthResource = /** @class */ (function (_super) {
    __extends(DepthResource, _super);
    function DepthResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Upload the texture to the GPU.
     * @param {PIXI.Renderer} renderer - Upload to the renderer
     * @param {PIXI.BaseTexture} baseTexture - Reference to parent texture
     * @param {PIXI.GLTexture} glTexture - glTexture
     * @returns {boolean} true is success
     */
    DepthResource.prototype.upload = function (renderer, baseTexture, glTexture) {
        var gl = renderer.gl;
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
        if (glTexture.width === baseTexture.width && glTexture.height === baseTexture.height) {
            gl.texSubImage2D(baseTexture.target, 0, 0, 0, baseTexture.width, baseTexture.height, baseTexture.format, baseTexture.type, this.data);
        }
        else {
            glTexture.width = baseTexture.width;
            glTexture.height = baseTexture.height;
            gl.texImage2D(baseTexture.target, 0, 
            //  gl.DEPTH_COMPONENT16 Needed for depth to render properly in webgl2.0
            renderer.context.webGLVersion === 1 ? gl.DEPTH_COMPONENT : gl.DEPTH_COMPONENT16, baseTexture.width, baseTexture.height, 0, baseTexture.format, baseTexture.type, this.data);
        }
        return true;
    };
    return DepthResource;
}(BufferResource));

/**
 * Frame buffer used by the BaseRenderTexture
 *
 * @class
 * @memberof PIXI
 */
var Framebuffer = /** @class */ (function () {
    /**
     * @param {number} width - Width of the frame buffer
     * @param {number} height - Height of the frame buffer
     */
    function Framebuffer(width, height) {
        /**
         * Width of framebuffer in pixels
         * @member {number}
         */
        this.width = Math.ceil(width || 100);
        /**
         * Height of framebuffer in pixels
         * @member {number}
         */
        this.height = Math.ceil(height || 100);
        this.stencil = false;
        this.depth = false;
        this.dirtyId = 0;
        this.dirtyFormat = 0;
        this.dirtySize = 0;
        this.depthTexture = null;
        this.colorTextures = [];
        this.glFramebuffers = {};
        this.disposeRunner = new Runner('disposeFramebuffer');
        /**
         * Desired number of samples for antialiasing. 0 means AA should not be used.
         *
         * Experimental WebGL2 feature, allows to use antialiasing in individual renderTextures.
         * Antialiasing is the same as for main buffer with renderer `antialias:true` options.
         * Seriously affects GPU memory consumption and GPU performance.
         *
         *```js
         * renderTexture.framebuffer.multisample = PIXI.MSAA_QUALITY.HIGH;
         * //...
         * renderer.render(renderTexture, myContainer);
         * renderer.framebuffer.blit(); // copies data from MSAA framebuffer to texture
         *  ```
         *
         * @member {PIXI.MSAA_QUALITY}
         * @default PIXI.MSAA_QUALITY.NONE
         */
        this.multisample = MSAA_QUALITY.NONE;
    }
    Object.defineProperty(Framebuffer.prototype, "colorTexture", {
        /**
         * Reference to the colorTexture.
         *
         * @member {PIXI.BaseTexture[]}
         * @readonly
         */
        get: function () {
            return this.colorTextures[0];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add texture to the colorTexture array
     *
     * @param {number} [index=0] - Index of the array to add the texture to
     * @param {PIXI.BaseTexture} [texture] - Texture to add to the array
     */
    Framebuffer.prototype.addColorTexture = function (index, texture) {
        if (index === void 0) { index = 0; }
        // TODO add some validation to the texture - same width / height etc?
        this.colorTextures[index] = texture || new BaseTexture(null, {
            scaleMode: SCALE_MODES.NEAREST,
            resolution: 1,
            mipmap: MIPMAP_MODES.OFF,
            width: this.width,
            height: this.height,
        });
        this.dirtyId++;
        this.dirtyFormat++;
        return this;
    };
    /**
     * Add a depth texture to the frame buffer
     *
     * @param {PIXI.BaseTexture} [texture] - Texture to add
     */
    Framebuffer.prototype.addDepthTexture = function (texture) {
        /* eslint-disable max-len */
        this.depthTexture = texture || new BaseTexture(new DepthResource(null, { width: this.width, height: this.height }), {
            scaleMode: SCALE_MODES.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: MIPMAP_MODES.OFF,
            format: FORMATS.DEPTH_COMPONENT,
            type: TYPES.UNSIGNED_SHORT,
        });
        this.dirtyId++;
        this.dirtyFormat++;
        return this;
    };
    /**
     * Enable depth on the frame buffer
     */
    Framebuffer.prototype.enableDepth = function () {
        this.depth = true;
        this.dirtyId++;
        this.dirtyFormat++;
        return this;
    };
    /**
     * Enable stencil on the frame buffer
     */
    Framebuffer.prototype.enableStencil = function () {
        this.stencil = true;
        this.dirtyId++;
        this.dirtyFormat++;
        return this;
    };
    /**
     * Resize the frame buffer
     *
     * @param {number} width - Width of the frame buffer to resize to
     * @param {number} height - Height of the frame buffer to resize to
     */
    Framebuffer.prototype.resize = function (width, height) {
        width = Math.ceil(width);
        height = Math.ceil(height);
        if (width === this.width && height === this.height)
            { return; }
        this.width = width;
        this.height = height;
        this.dirtyId++;
        this.dirtySize++;
        for (var i = 0; i < this.colorTextures.length; i++) {
            var texture = this.colorTextures[i];
            var resolution = texture.resolution;
            // take into acount the fact the texture may have a different resolution..
            texture.setSize(width / resolution, height / resolution);
        }
        if (this.depthTexture) {
            var resolution = this.depthTexture.resolution;
            this.depthTexture.setSize(width / resolution, height / resolution);
        }
    };
    /**
     * Disposes WebGL resources that are connected to this geometry
     */
    Framebuffer.prototype.dispose = function () {
        this.disposeRunner.emit(this, false);
    };
    /**
     * Destroys and removes the depth texture added to this framebuffer.
     */
    Framebuffer.prototype.destroyDepthTexture = function () {
        if (this.depthTexture) {
            this.depthTexture.destroy();
            this.depthTexture = null;
            ++this.dirtyId;
            ++this.dirtyFormat;
        }
    };
    return Framebuffer;
}());

/**
 * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer();
 * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 800, height: 600 });
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 * let sprite = PIXI.Sprite.from("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 100, height: 100 });
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */
var BaseRenderTexture = /** @class */ (function (_super) {
    __extends(BaseRenderTexture, _super);
    /**
     * @param {object} [options]
     * @param {number} [options.width=100] - The width of the base render texture.
     * @param {number} [options.height=100] - The height of the base render texture.
     * @param {PIXI.SCALE_MODES} [options.scaleMode] - See {@link PIXI.SCALE_MODES} for possible values.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated.
     */
    function BaseRenderTexture(options) {
        var _this = this;
        if (typeof options === 'number') {
            /* eslint-disable prefer-rest-params */
            // Backward compatibility of signature
            var width_1 = arguments[0];
            var height_1 = arguments[1];
            var scaleMode = arguments[2];
            var resolution = arguments[3];
            options = { width: width_1, height: height_1, scaleMode: scaleMode, resolution: resolution };
            /* eslint-enable prefer-rest-params */
        }
        _this = _super.call(this, null, options) || this;
        var _a = options || {}, width = _a.width, height = _a.height;
        // Set defaults
        _this.mipmap = 0;
        _this.width = Math.ceil(width) || 100;
        _this.height = Math.ceil(height) || 100;
        _this.valid = true;
        _this.clearColor = [0, 0, 0, 0];
        _this.framebuffer = new Framebuffer(_this.width * _this.resolution, _this.height * _this.resolution)
            .addColorTexture(0, _this);
        // TODO - could this be added the systems?
        /**
         * The data structure for the stencil masks.
         *
         * @member {PIXI.MaskData[]}
         */
        _this.maskStack = [];
        /**
         * The data structure for the filters.
         *
         * @member {Object[]}
         */
        _this.filterStack = [{}];
        return _this;
    }
    /**
     * Resizes the BaseRenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     */
    BaseRenderTexture.prototype.resize = function (width, height) {
        width = Math.ceil(width);
        height = Math.ceil(height);
        this.framebuffer.resize(width * this.resolution, height * this.resolution);
    };
    /**
     * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     * @fires PIXI.BaseTexture#dispose
     */
    BaseRenderTexture.prototype.dispose = function () {
        this.framebuffer.dispose();
        _super.prototype.dispose.call(this);
    };
    /**
     * Destroys this texture.
     */
    BaseRenderTexture.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.framebuffer.destroyDepthTexture();
        this.framebuffer = null;
    };
    return BaseRenderTexture;
}(BaseTexture));

/**
 * Stores a texture's frame in UV coordinates, in
 * which everything lies in the rectangle `[(0,0), (1,0),
 * (1,1), (0,1)]`.
 *
 * | Corner       | Coordinates |
 * |--------------|-------------|
 * | Top-Left     | `(x0,y0)`   |
 * | Top-Right    | `(x1,y1)`   |
 * | Bottom-Right | `(x2,y2)`   |
 * | Bottom-Left  | `(x3,y3)`   |
 *
 * @class
 * @protected
 * @memberof PIXI
 */
var TextureUvs = /** @class */ (function () {
    function TextureUvs() {
        /**
         * X-component of top-left corner `(x0,y0)`.
         *
         * @member {number}
         */
        this.x0 = 0;
        /**
         * Y-component of top-left corner `(x0,y0)`.
         *
         * @member {number}
         */
        this.y0 = 0;
        /**
         * X-component of top-right corner `(x1,y1)`.
         *
         * @member {number}
         */
        this.x1 = 1;
        /**
         * Y-component of top-right corner `(x1,y1)`.
         *
         * @member {number}
         */
        this.y1 = 0;
        /**
         * X-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number}
         */
        this.x2 = 1;
        /**
         * Y-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number}
         */
        this.y2 = 1;
        /**
         * X-component of bottom-left corner `(x3,y3)`.
         *
         * @member {number}
         */
        this.x3 = 0;
        /**
         * Y-component of bottom-right corner `(x3,y3)`.
         *
         * @member {number}
         */
        this.y3 = 1;
        this.uvsFloat32 = new Float32Array(8);
    }
    /**
     * Sets the texture Uvs based on the given frame information.
     *
     * @protected
     * @param {PIXI.Rectangle} frame - The frame of the texture
     * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
     * @param {number} rotate - Rotation of frame, see {@link PIXI.groupD8}
     */
    TextureUvs.prototype.set = function (frame, baseFrame, rotate) {
        var tw = baseFrame.width;
        var th = baseFrame.height;
        if (rotate) {
            // width and height div 2 div baseFrame size
            var w2 = frame.width / 2 / tw;
            var h2 = frame.height / 2 / th;
            // coordinates of center
            var cX = (frame.x / tw) + w2;
            var cY = (frame.y / th) + h2;
            rotate = groupD8.add(rotate, groupD8.NW); // NW is top-left corner
            this.x0 = cX + (w2 * groupD8.uX(rotate));
            this.y0 = cY + (h2 * groupD8.uY(rotate));
            rotate = groupD8.add(rotate, 2); // rotate 90 degrees clockwise
            this.x1 = cX + (w2 * groupD8.uX(rotate));
            this.y1 = cY + (h2 * groupD8.uY(rotate));
            rotate = groupD8.add(rotate, 2);
            this.x2 = cX + (w2 * groupD8.uX(rotate));
            this.y2 = cY + (h2 * groupD8.uY(rotate));
            rotate = groupD8.add(rotate, 2);
            this.x3 = cX + (w2 * groupD8.uX(rotate));
            this.y3 = cY + (h2 * groupD8.uY(rotate));
        }
        else {
            this.x0 = frame.x / tw;
            this.y0 = frame.y / th;
            this.x1 = (frame.x + frame.width) / tw;
            this.y1 = frame.y / th;
            this.x2 = (frame.x + frame.width) / tw;
            this.y2 = (frame.y + frame.height) / th;
            this.x3 = frame.x / tw;
            this.y3 = (frame.y + frame.height) / th;
        }
        this.uvsFloat32[0] = this.x0;
        this.uvsFloat32[1] = this.y0;
        this.uvsFloat32[2] = this.x1;
        this.uvsFloat32[3] = this.y1;
        this.uvsFloat32[4] = this.x2;
        this.uvsFloat32[5] = this.y2;
        this.uvsFloat32[6] = this.x3;
        this.uvsFloat32[7] = this.y3;
    };
    return TextureUvs;
}());

var DEFAULT_UVS = new TextureUvs();
/**
 * A texture stores the information that represents an image or part of an image.
 *
 * It cannot be added to the display list directly; instead use it as the texture for a Sprite.
 * If no frame is provided for a texture, then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = PIXI.Texture.from('assets/image.png');
 * let sprite1 = new PIXI.Sprite(texture);
 * let sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * If you didnt pass the texture frame to constructor, it enables `noFrame` mode:
 * it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = PIXI.Texture.from('assets/image.svg');
 * var sprite1 = new PIXI.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 */
var Texture = /** @class */ (function (_super) {
    __extends(Texture, _super);
    /**
     * @param {PIXI.BaseTexture} baseTexture - The base texture source to create the texture from
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     * @param {PIXI.Rectangle} [orig] - The area of original texture
     * @param {PIXI.Rectangle} [trim] - Trimmed rectangle of original texture
     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link PIXI.groupD8}
     * @param {PIXI.IPointData} [anchor] - Default anchor point used for sprite placement / rotation
     */
    function Texture(baseTexture, frame, orig, trim, rotate, anchor) {
        var _this = _super.call(this) || this;
        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean}
         */
        _this.noFrame = false;
        if (!frame) {
            _this.noFrame = true;
            frame = new Rectangle(0, 0, 1, 1);
        }
        if (baseTexture instanceof Texture) {
            baseTexture = baseTexture.baseTexture;
        }
        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture}
         */
        _this.baseTexture = baseTexture;
        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle}
         */
        _this._frame = frame;
        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {PIXI.Rectangle}
         */
        _this.trim = trim;
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = false;
        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {PIXI.TextureUvs}
         * @protected
         */
        _this._uvs = DEFAULT_UVS;
        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {PIXI.TextureMatrix}
         */
        _this.uvMatrix = null;
        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle}
         */
        _this.orig = orig || frame; // new Rectangle(0, 0, 1, 1);
        _this._rotate = Number(rotate || 0);
        if (rotate === true) {
            // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
            _this._rotate = 2;
        }
        else if (_this._rotate % 2 !== 0) {
            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
        }
        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {PIXI.Point}
         * @default {0,0}
         */
        _this.defaultAnchor = anchor ? new Point(anchor.x, anchor.y) : new Point(0, 0);
        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number}
         * @protected
         */
        _this._updateID = 0;
        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]}
         */
        _this.textureCacheIds = [];
        if (!baseTexture.valid) {
            baseTexture.once('loaded', _this.onBaseTextureUpdated, _this);
        }
        else if (_this.noFrame) {
            // if there is no frame we should monitor for any base texture changes..
            if (baseTexture.valid) {
                _this.onBaseTextureUpdated(baseTexture);
            }
        }
        else {
            _this.frame = frame;
        }
        if (_this.noFrame) {
            baseTexture.on('update', _this.onBaseTextureUpdated, _this);
        }
        return _this;
    }
    /**
     * Updates this texture on the gpu.
     *
     * Calls the TextureResource update.
     *
     * If you adjusted `frame` manually, please call `updateUvs()` instead.
     *
     */
    Texture.prototype.update = function () {
        if (this.baseTexture.resource) {
            this.baseTexture.resource.update();
        }
    };
    /**
     * Called when the base texture is updated
     *
     * @protected
     * @param {PIXI.BaseTexture} baseTexture - The base texture.
     */
    Texture.prototype.onBaseTextureUpdated = function (baseTexture) {
        if (this.noFrame) {
            if (!this.baseTexture.valid) {
                return;
            }
            this._frame.width = baseTexture.width;
            this._frame.height = baseTexture.height;
            this.valid = true;
            this.updateUvs();
        }
        else {
            // TODO this code looks confusing.. boo to abusing getters and setters!
            // if user gave us frame that has bigger size than resized texture it can be a problem
            this.frame = this._frame;
        }
        this.emit('update', this);
    };
    /**
     * Destroys this texture
     *
     * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
     */
    Texture.prototype.destroy = function (destroyBase) {
        if (this.baseTexture) {
            if (destroyBase) {
                var resource = this.baseTexture;
                // delete the texture if it exists in the texture cache..
                // this only needs to be removed if the base texture is actually destroyed too..
                if (resource && resource.url && TextureCache[resource.url]) {
                    Texture.removeFromCache(resource.url);
                }
                this.baseTexture.destroy();
            }
            this.baseTexture.off('loaded', this.onBaseTextureUpdated, this);
            this.baseTexture.off('update', this.onBaseTextureUpdated, this);
            this.baseTexture = null;
        }
        this._frame = null;
        this._uvs = null;
        this.trim = null;
        this.orig = null;
        this.valid = false;
        Texture.removeFromCache(this);
        this.textureCacheIds = null;
    };
    /**
     * Creates a new texture object that acts the same as this one.
     *
     * @return {PIXI.Texture} The new texture
     */
    Texture.prototype.clone = function () {
        return new Texture(this.baseTexture, this.frame.clone(), this.orig.clone(), this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
    };
    /**
     * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
     * Call it after changing the frame
     */
    Texture.prototype.updateUvs = function () {
        if (this._uvs === DEFAULT_UVS) {
            this._uvs = new TextureUvs();
        }
        this._uvs.set(this._frame, this.baseTexture, this.rotate);
        this._updateID++;
    };
    /**
     * Helper function that creates a new Texture based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture} source
     *        Source to create texture from
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @return {PIXI.Texture} The newly created texture
     */
    Texture.from = function (source, options, strict) {
        if (options === void 0) { options = {}; }
        if (strict === void 0) { strict = settings.STRICT_TEXTURE_CACHE; }
        var isFrame = typeof source === 'string';
        var cacheId = null;
        if (isFrame) {
            cacheId = source;
        }
        else {
            if (!source._pixiId) {
                source._pixiId = "pixiid_" + uid();
            }
            cacheId = source._pixiId;
        }
        var texture = TextureCache[cacheId];
        // Strict-mode rejects invalid cacheIds
        if (isFrame && strict && !texture) {
            throw new Error("The cacheId \"" + cacheId + "\" does not exist in TextureCache.");
        }
        if (!texture) {
            if (!options.resolution) {
                options.resolution = getResolutionOfUrl(source);
            }
            texture = new Texture(new BaseTexture(source, options));
            texture.baseTexture.cacheId = cacheId;
            BaseTexture.addToCache(texture.baseTexture, cacheId);
            Texture.addToCache(texture, cacheId);
        }
        // lets assume its a base texture!
        return texture;
    };
    /**
     * Useful for loading textures via URLs. Use instead of `Texture.from` because
     * it does a better job of handling failed URLs more effectively. This also ignores
     * `PIXI.settings.STRICT_TEXTURE_CACHE`. Works for Videos, SVGs, Images.
     * @param {string} url The remote URL to load.
     * @param {object} [options] Optional options to include
     * @return {Promise<PIXI.Texture>} A Promise that resolves to a Texture.
     */
    Texture.fromURL = function (url, options) {
        var resourceOptions = Object.assign({ autoLoad: false }, options === null || options === void 0 ? void 0 : options.resourceOptions);
        var texture = Texture.from(url, Object.assign({ resourceOptions: resourceOptions }, options), false);
        var resource = texture.baseTexture.resource;
        // The texture was already loaded
        if (texture.baseTexture.valid) {
            return Promise.resolve(texture);
        }
        // Manually load the texture, this should allow users to handle load errors
        return resource.load().then(function () { return Promise.resolve(texture); });
    };
    /**
     * Create a new Texture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @static
     * @param {Float32Array|Uint8Array} buffer - The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param {number} width - Width of the resource
     * @param {number} height - Height of the resource
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.Texture} The resulting new BaseTexture
     */
    Texture.fromBuffer = function (buffer, width, height, options) {
        return new Texture(BaseTexture.fromBuffer(buffer, width, height, options));
    };
    /**
     * Create a texture from a source and add to the cache.
     *
     * @static
     * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
     * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
     * @param {String} [name] - Human readable name for the texture cache. If no name is
     *        specified, only `imageUrl` will be used as the cache ID.
     * @return {PIXI.Texture} Output texture
     */
    Texture.fromLoader = function (source, imageUrl, name) {
        var resource = new ImageResource(source);
        resource.url = imageUrl;
        var baseTexture = new BaseTexture(resource, {
            scaleMode: settings.SCALE_MODE,
            resolution: getResolutionOfUrl(imageUrl),
        });
        var texture = new Texture(baseTexture);
        // No name, use imageUrl instead
        if (!name) {
            name = imageUrl;
        }
        // lets also add the frame to pixi's global cache for 'fromLoader' function
        BaseTexture.addToCache(texture.baseTexture, name);
        Texture.addToCache(texture, name);
        // also add references by url if they are different.
        if (name !== imageUrl) {
            BaseTexture.addToCache(texture.baseTexture, imageUrl);
            Texture.addToCache(texture, imageUrl);
        }
        return texture;
    };
    /**
     * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.Texture} texture - The Texture to add to the cache.
     * @param {string} id - The id that the Texture will be stored against.
     */
    Texture.addToCache = function (texture, id) {
        if (id) {
            if (texture.textureCacheIds.indexOf(id) === -1) {
                texture.textureCacheIds.push(id);
            }
            if (TextureCache[id]) {
                // eslint-disable-next-line no-console
                console.warn("Texture added to the cache with an id [" + id + "] that already had an entry");
            }
            TextureCache[id] = texture;
        }
    };
    /**
     * Remove a Texture from the global TextureCache.
     *
     * @static
     * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
     * @return {PIXI.Texture|null} The Texture that was removed
     */
    Texture.removeFromCache = function (texture) {
        if (typeof texture === 'string') {
            var textureFromCache = TextureCache[texture];
            if (textureFromCache) {
                var index = textureFromCache.textureCacheIds.indexOf(texture);
                if (index > -1) {
                    textureFromCache.textureCacheIds.splice(index, 1);
                }
                delete TextureCache[texture];
                return textureFromCache;
            }
        }
        else if (texture && texture.textureCacheIds) {
            for (var i = 0; i < texture.textureCacheIds.length; ++i) {
                // Check that texture matches the one being passed in before deleting it from the cache.
                if (TextureCache[texture.textureCacheIds[i]] === texture) {
                    delete TextureCache[texture.textureCacheIds[i]];
                }
            }
            texture.textureCacheIds.length = 0;
            return texture;
        }
        return null;
    };
    Object.defineProperty(Texture.prototype, "resolution", {
        /**
         * Returns resolution of baseTexture
         *
         * @member {number}
         * @readonly
         */
        get: function () {
            return this.baseTexture.resolution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "frame", {
        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {PIXI.Rectangle}
         */
        get: function () {
            return this._frame;
        },
        set: function (frame) {
            this._frame = frame;
            this.noFrame = false;
            var x = frame.x, y = frame.y, width = frame.width, height = frame.height;
            var xNotFit = x + width > this.baseTexture.width;
            var yNotFit = y + height > this.baseTexture.height;
            if (xNotFit || yNotFit) {
                var relationship = xNotFit && yNotFit ? 'and' : 'or';
                var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + this.baseTexture.width;
                var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + this.baseTexture.height;
                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: '
                    + (errorX + " " + relationship + " " + errorY));
            }
            this.valid = width && height && this.baseTexture.valid;
            if (!this.trim && !this.rotate) {
                this.orig = frame;
            }
            if (this.valid) {
                this.updateUvs();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "rotate", {
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.groupD8} for explanation
         *
         * @member {number}
         */
        get: function () {
            return this._rotate;
        },
        set: function (rotate) {
            this._rotate = rotate;
            if (this.valid) {
                this.updateUvs();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "width", {
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
        get: function () {
            return this.orig.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "height", {
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
        get: function () {
            return this.orig.height;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Utility function for BaseTexture|Texture cast
     */
    Texture.prototype.castToBaseTexture = function () {
        return this.baseTexture;
    };
    return Texture;
}(eventemitter3));
function createWhiteTexture() {
    var canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    var context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, 16, 16);
    return new Texture(new BaseTexture(new CanvasResource(canvas)));
}
function removeAllHandlers(tex) {
    tex.destroy = function _emptyDestroy() { };
    tex.on = function _emptyOn() { };
    tex.once = function _emptyOnce() { };
    tex.emit = function _emptyEmit() { };
}
/**
 * An empty texture, used often to not have to create multiple empty textures.
 * Can not be destroyed.
 *
 * @static
 * @constant
 * @member {PIXI.Texture}
 */
Texture.EMPTY = new Texture(new BaseTexture());
removeAllHandlers(Texture.EMPTY);
removeAllHandlers(Texture.EMPTY.baseTexture);
/**
 * A white texture of 16x16 size, used for graphics and other things
 * Can not be destroyed.
 *
 * @static
 * @constant
 * @member {PIXI.Texture}
 */
Texture.WHITE = createWhiteTexture();
removeAllHandlers(Texture.WHITE);
removeAllHandlers(Texture.WHITE.baseTexture);

/**
 * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * __Hint-2__: The actual memory allocation will happen on first render.
 * You shouldn't create renderTextures each frame just to delete them after, try to reuse them.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer();
 * let renderTexture = PIXI.RenderTexture.create({ width: 800, height: 600 });
 * let sprite = PIXI.Sprite.from("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let renderTexture = new PIXI.RenderTexture.create(100, 100);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.Texture
 * @memberof PIXI
 */
var RenderTexture = /** @class */ (function (_super) {
    __extends(RenderTexture, _super);
    /**
     * @param {PIXI.BaseRenderTexture} baseRenderTexture - The base texture object that this texture uses
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     */
    function RenderTexture(baseRenderTexture, frame) {
        var _this = this;
        // support for legacy..
        var _legacyRenderer = null;
        if (!(baseRenderTexture instanceof BaseRenderTexture)) {
            /* eslint-disable prefer-rest-params, no-console */
            var width = arguments[1];
            var height = arguments[2];
            var scaleMode = arguments[3];
            var resolution = arguments[4];
            // we have an old render texture..
            console.warn("Please use RenderTexture.create(" + width + ", " + height + ") instead of the ctor directly.");
            _legacyRenderer = arguments[0];
            /* eslint-enable prefer-rest-params, no-console */
            frame = null;
            baseRenderTexture = new BaseRenderTexture({
                width: width,
                height: height,
                scaleMode: scaleMode,
                resolution: resolution,
            });
        }
        /**
         * The base texture object that this texture uses
         *
         * @member {PIXI.BaseTexture}
         */
        _this = _super.call(this, baseRenderTexture, frame) || this;
        _this.legacyRenderer = _legacyRenderer;
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = true;
        /**
         * Stores `sourceFrame` when this texture is inside current filter stack.
         * You can read it inside filters.
         *
         * @readonly
         * @member {PIXI.Rectangle}
         */
        _this.filterFrame = null;
        /**
         * The key for pooled texture of FilterSystem
         * @protected
         * @member {string}
         */
        _this.filterPoolKey = null;
        _this.updateUvs();
        return _this;
    }
    Object.defineProperty(RenderTexture.prototype, "framebuffer", {
        /**
         * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
         * @member {PIXI.Framebuffer}
         * @readonly
         */
        get: function () {
            return this.baseTexture.framebuffer;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Resizes the RenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     * @param {boolean} [resizeBaseTexture=true] - Should the baseTexture.width and height values be resized as well?
     */
    RenderTexture.prototype.resize = function (width, height, resizeBaseTexture) {
        if (resizeBaseTexture === void 0) { resizeBaseTexture = true; }
        width = Math.ceil(width);
        height = Math.ceil(height);
        // TODO - could be not required..
        this.valid = (width > 0 && height > 0);
        this._frame.width = this.orig.width = width;
        this._frame.height = this.orig.height = height;
        if (resizeBaseTexture) {
            this.baseTexture.resize(width, height);
        }
        this.updateUvs();
    };
    /**
     * Changes the resolution of baseTexture, but does not change framebuffer size.
     *
     * @param {number} resolution - The new resolution to apply to RenderTexture
     */
    RenderTexture.prototype.setResolution = function (resolution) {
        var baseTexture = this.baseTexture;
        if (baseTexture.resolution === resolution) {
            return;
        }
        baseTexture.setResolution(resolution);
        this.resize(baseTexture.width, baseTexture.height, false);
    };
    /**
     * A short hand way of creating a render texture.
     *
     * @param {object} [options] - Options
     * @param {number} [options.width=100] - The width of the render texture
     * @param {number} [options.height=100] - The height of the render texture
     * @param {number} [options.scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated
     * @return {PIXI.RenderTexture} The new render texture
     */
    RenderTexture.create = function (options) {
        // fallback, old-style: create(width, height, scaleMode, resolution)
        if (typeof options === 'number') {
            /* eslint-disable prefer-rest-params */
            options = {
                width: options,
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3],
            };
            /* eslint-enable prefer-rest-params */
        }
        return new RenderTexture(new BaseRenderTexture(options));
    };
    return RenderTexture;
}(Texture));

/**
 * Experimental!
 *
 * Texture pool, used by FilterSystem and plugins
 * Stores collection of temporary pow2 or screen-sized renderTextures
 *
 * If you use custom RenderTexturePool for your filters, you can use methods
 * `getFilterTexture` and `returnFilterTexture` same as in
 *
 * @class
 * @memberof PIXI
 */
var RenderTexturePool = /** @class */ (function () {
    /**
     * @param {object} [textureOptions] - options that will be passed to BaseRenderTexture constructor
     * @param {PIXI.SCALE_MODES} [textureOptions.scaleMode] - See {@link PIXI.SCALE_MODES} for possible values.
     */
    function RenderTexturePool(textureOptions) {
        this.texturePool = {};
        this.textureOptions = textureOptions || {};
        /**
         * Allow renderTextures of the same size as screen, not just pow2
         *
         * Automatically sets to true after `setScreenSize`
         *
         * @member {boolean}
         * @default false
         */
        this.enableFullScreen = false;
        this._pixelsWidth = 0;
        this._pixelsHeight = 0;
    }
    /**
     * creates of texture with params that were specified in pool constructor
     *
     * @param {number} realWidth - width of texture in pixels
     * @param {number} realHeight - height of texture in pixels
     * @returns {RenderTexture}
     */
    RenderTexturePool.prototype.createTexture = function (realWidth, realHeight) {
        var baseRenderTexture = new BaseRenderTexture(Object.assign({
            width: realWidth,
            height: realHeight,
            resolution: 1,
        }, this.textureOptions));
        return new RenderTexture(baseRenderTexture);
    };
    /**
     * Gets a Power-of-Two render texture or fullScreen texture
     *
     * @protected
     * @param {number} minWidth - The minimum width of the render texture in real pixels.
     * @param {number} minHeight - The minimum height of the render texture in real pixels.
     * @param {number} [resolution=1] - The resolution of the render texture.
     * @return {PIXI.RenderTexture} The new render texture.
     */
    RenderTexturePool.prototype.getOptimalTexture = function (minWidth, minHeight, resolution) {
        if (resolution === void 0) { resolution = 1; }
        var key = RenderTexturePool.SCREEN_KEY;
        minWidth *= resolution;
        minHeight *= resolution;
        if (!this.enableFullScreen || minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight) {
            minWidth = nextPow2(minWidth);
            minHeight = nextPow2(minHeight);
            key = ((minWidth & 0xFFFF) << 16) | (minHeight & 0xFFFF);
        }
        if (!this.texturePool[key]) {
            this.texturePool[key] = [];
        }
        var renderTexture = this.texturePool[key].pop();
        if (!renderTexture) {
            renderTexture = this.createTexture(minWidth, minHeight);
        }
        renderTexture.filterPoolKey = key;
        renderTexture.setResolution(resolution);
        return renderTexture;
    };
    /**
     * Gets extra texture of the same size as input renderTexture
     *
     * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
     *
     * @param {PIXI.RenderTexture} input - renderTexture from which size and resolution will be copied
     * @param {number} [resolution] - override resolution of the renderTexture
     *  It overrides, it does not multiply
     * @returns {PIXI.RenderTexture}
     */
    RenderTexturePool.prototype.getFilterTexture = function (input, resolution) {
        var filterTexture = this.getOptimalTexture(input.width, input.height, resolution || input.resolution);
        filterTexture.filterFrame = input.filterFrame;
        return filterTexture;
    };
    /**
     * Place a render texture back into the pool.
     * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
     */
    RenderTexturePool.prototype.returnTexture = function (renderTexture) {
        var key = renderTexture.filterPoolKey;
        renderTexture.filterFrame = null;
        this.texturePool[key].push(renderTexture);
    };
    /**
     * Alias for returnTexture, to be compliant with FilterSystem interface
     * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
     */
    RenderTexturePool.prototype.returnFilterTexture = function (renderTexture) {
        this.returnTexture(renderTexture);
    };
    /**
     * Clears the pool
     *
     * @param {boolean} [destroyTextures=true] - destroy all stored textures
     */
    RenderTexturePool.prototype.clear = function (destroyTextures) {
        destroyTextures = destroyTextures !== false;
        if (destroyTextures) {
            for (var i in this.texturePool) {
                var textures = this.texturePool[i];
                if (textures) {
                    for (var j = 0; j < textures.length; j++) {
                        textures[j].destroy(true);
                    }
                }
            }
        }
        this.texturePool = {};
    };
    /**
     * If screen size was changed, drops all screen-sized textures,
     * sets new screen size, sets `enableFullScreen` to true
     *
     * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
     *
     * @param {PIXI.ISize} size - Initial size of screen
     */
    RenderTexturePool.prototype.setScreenSize = function (size) {
        if (size.width === this._pixelsWidth
            && size.height === this._pixelsHeight) {
            return;
        }
        var screenKey = RenderTexturePool.SCREEN_KEY;
        var textures = this.texturePool[screenKey];
        this.enableFullScreen = size.width > 0 && size.height > 0;
        if (textures) {
            for (var j = 0; j < textures.length; j++) {
                textures[j].destroy(true);
            }
        }
        this.texturePool[screenKey] = [];
        this._pixelsWidth = size.width;
        this._pixelsHeight = size.height;
    };
    /**
     * Key that is used to store fullscreen renderTextures in a pool
     *
     * @static
     * @const {string}
     */
    RenderTexturePool.SCREEN_KEY = 'screen';
    return RenderTexturePool;
}());

/* eslint-disable max-len */
/**
 * Holds the information for a single attribute structure required to render geometry.
 *
 * This does not contain the actual data, but instead has a buffer id that maps to a {@link PIXI.Buffer}
 * This can include anything from positions, uvs, normals, colors etc.
 *
 * @class
 * @memberof PIXI
 */
var Attribute = /** @class */ (function () {
    /**
     * @param {string} buffer - the id of the buffer that this attribute will look for
     * @param {Number} [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2.
     * @param {Boolean} [normalized=false] - should the data be normalized.
     * @param {Number} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
     * @param {Number} [stride=0] - How far apart (in floats) the start of each value is. (used for interleaving data)
     * @param {Number} [start=0] - How far into the array to start reading values (used for interleaving data)
     */
    function Attribute(buffer, size, normalized, type, stride, start, instance) {
        if (size === void 0) { size = 0; }
        if (normalized === void 0) { normalized = false; }
        if (type === void 0) { type = 5126; }
        this.buffer = buffer;
        this.size = size;
        this.normalized = normalized;
        this.type = type;
        this.stride = stride;
        this.start = start;
        this.instance = instance;
    }
    /**
     * Destroys the Attribute.
     */
    Attribute.prototype.destroy = function () {
        this.buffer = null;
    };
    /**
     * Helper function that creates an Attribute based on the information provided
     *
     * @static
     * @param {string} buffer - the id of the buffer that this attribute will look for
     * @param {Number} [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
     * @param {Boolean} [normalized=false] - should the data be normalized.
     * @param {Number} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
     * @param {Number} [stride=0] - How far apart (in floats) the start of each value is. (used for interleaving data)
     *
     * @returns {PIXI.Attribute} A new {@link PIXI.Attribute} based on the information provided
     */
    Attribute.from = function (buffer, size, normalized, type, stride) {
        return new Attribute(buffer, size, normalized, type, stride);
    };
    return Attribute;
}());

var UID = 0;
/**
 * A wrapper for data so that it can be used and uploaded by WebGL
 *
 * @class
 * @memberof PIXI
 */
var Buffer = /** @class */ (function () {
    /**
     * @param {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} data - the data to store in the buffer.
     * @param {boolean} [_static=true] - `true` for static buffer
     * @param {boolean} [index=false] - `true` for index buffer
     */
    function Buffer(data, _static, index) {
        if (_static === void 0) { _static = true; }
        if (index === void 0) { index = false; }
        /**
         * The data in the buffer, as a typed array
         *
         * @member {ArrayBuffer| SharedArrayBuffer | ArrayBufferView}
         */
        this.data = (data || new Float32Array(1));
        /**
         * A map of renderer IDs to webgl buffer
         *
         * @private
         * @member {object<number, GLBuffer>}
         */
        this._glBuffers = {};
        this._updateID = 0;
        this.index = index;
        this.static = _static;
        this.id = UID++;
        this.disposeRunner = new Runner('disposeBuffer');
    }
    // TODO could explore flagging only a partial upload?
    /**
     * flags this buffer as requiring an upload to the GPU
     * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} [data] - the data to update in the buffer.
     */
    Buffer.prototype.update = function (data) {
        this.data = data || this.data;
        this._updateID++;
    };
    /**
     * disposes WebGL resources that are connected to this geometry
     */
    Buffer.prototype.dispose = function () {
        this.disposeRunner.emit(this, false);
    };
    /**
     * Destroys the buffer
     */
    Buffer.prototype.destroy = function () {
        this.dispose();
        this.data = null;
    };
    /**
     * Helper function that creates a buffer based on an array or TypedArray
     *
     * @static
     * @param {ArrayBufferView | number[]} data - the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
     * @return {PIXI.Buffer} A new Buffer based on the data provided.
     */
    Buffer.from = function (data) {
        if (data instanceof Array) {
            data = new Float32Array(data);
        }
        return new Buffer(data);
    };
    return Buffer;
}());

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
var map = {
    Float32Array: Float32Array,
    Uint32Array: Uint32Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
};
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
        var type = getBufferType(array);
        if (!views[type]) {
            views[type] = new map[type](buffer);
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

var byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
var UID$1 = 0;
/* eslint-disable object-shorthand */
var map$1 = {
    Float32Array: Float32Array,
    Uint32Array: Uint32Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
    Uint16Array: Uint16Array,
};
/* eslint-disable max-len */
/**
 * The Geometry represents a model. It consists of two components:
 * - GeometryStyle - The structure of the model such as the attributes layout
 * - GeometryData - the data of the model - this consists of buffers.
 * This can include anything from positions, uvs, normals, colors etc.
 *
 * Geometry can be defined without passing in a style or data if required (thats how I prefer!)
 *
 * ```js
 * let geometry = new PIXI.Geometry();
 *
 * geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);
 * geometry.addAttribute('uvs', [0,0,1,0,1,1,0,1],2)
 * geometry.addIndex([0,1,2,1,3,2])
 *
 * ```
 * @class
 * @memberof PIXI
 */
var Geometry = /** @class */ (function () {
    /**
     * @param {PIXI.Buffer[]} [buffers] - an array of buffers. optional.
     * @param {object} [attributes] - of the geometry, optional structure of the attributes layout
     */
    function Geometry(buffers, attributes) {
        if (buffers === void 0) { buffers = []; }
        if (attributes === void 0) { attributes = {}; }
        this.buffers = buffers;
        this.indexBuffer = null;
        this.attributes = attributes;
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        this.glVertexArrayObjects = {};
        this.id = UID$1++;
        this.instanced = false;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number}
         * @default 1
         */
        this.instanceCount = 1;
        this.disposeRunner = new Runner('disposeGeometry');
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number}
         */
        this.refCount = 0;
    }
    /**
    *
    * Adds an attribute to the geometry
    * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
    *
    * @param {String} id - the name of the attribute (matching up to a shader)
    * @param {PIXI.Buffer|number[]} [buffer] - the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
    * @param {Number} [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
    * @param {Boolean} [normalized=false] - should the data be normalized.
    * @param {Number} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
    * @param {Number} [stride] - How far apart (in floats) the start of each value is. (used for interleaving data)
    * @param {Number} [start] - How far into the array to start reading values (used for interleaving data)
    * @param {boolean} [instance=false] - Instancing flag
    *
    * @return {PIXI.Geometry} returns self, useful for chaining.
    */
    Geometry.prototype.addAttribute = function (id, buffer, size, normalized, type, stride, start, instance) {
        if (size === void 0) { size = 0; }
        if (normalized === void 0) { normalized = false; }
        if (instance === void 0) { instance = false; }
        if (!buffer) {
            throw new Error('You must pass a buffer when creating an attribute');
        }
        // check if this is a buffer!
        if (!(buffer instanceof Buffer)) {
            // its an array!
            if (buffer instanceof Array) {
                buffer = new Float32Array(buffer);
            }
            buffer = new Buffer(buffer);
        }
        var ids = id.split('|');
        if (ids.length > 1) {
            for (var i = 0; i < ids.length; i++) {
                this.addAttribute(ids[i], buffer, size, normalized, type);
            }
            return this;
        }
        var bufferIndex = this.buffers.indexOf(buffer);
        if (bufferIndex === -1) {
            this.buffers.push(buffer);
            bufferIndex = this.buffers.length - 1;
        }
        this.attributes[id] = new Attribute(bufferIndex, size, normalized, type, stride, start, instance);
        // assuming that if there is instanced data then this will be drawn with instancing!
        this.instanced = this.instanced || instance;
        return this;
    };
    /**
     * returns the requested attribute
     *
     * @param {String} id - the name of the attribute required
     * @return {PIXI.Attribute} the attribute requested.
     */
    Geometry.prototype.getAttribute = function (id) {
        return this.attributes[id];
    };
    /**
     * returns the requested buffer
     *
     * @param {String} id - the name of the buffer required
     * @return {PIXI.Buffer} the buffer requested.
     */
    Geometry.prototype.getBuffer = function (id) {
        return this.buffers[this.getAttribute(id).buffer];
    };
    /**
    *
    * Adds an index buffer to the geometry
    * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
    *
    * @param {PIXI.Buffer|number[]} [buffer] - the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
    * @return {PIXI.Geometry} returns self, useful for chaining.
    */
    Geometry.prototype.addIndex = function (buffer) {
        if (!(buffer instanceof Buffer)) {
            // its an array!
            if (buffer instanceof Array) {
                buffer = new Uint16Array(buffer);
            }
            buffer = new Buffer(buffer);
        }
        buffer.index = true;
        this.indexBuffer = buffer;
        if (this.buffers.indexOf(buffer) === -1) {
            this.buffers.push(buffer);
        }
        return this;
    };
    /**
     * returns the index buffer
     *
     * @return {PIXI.Buffer} the index buffer.
     */
    Geometry.prototype.getIndex = function () {
        return this.indexBuffer;
    };
    /**
     * this function modifies the structure so that all current attributes become interleaved into a single buffer
     * This can be useful if your model remains static as it offers a little performance boost
     *
     * @return {PIXI.Geometry} returns self, useful for chaining.
     */
    Geometry.prototype.interleave = function () {
        // a simple check to see if buffers are already interleaved..
        if (this.buffers.length === 1 || (this.buffers.length === 2 && this.indexBuffer))
            { return this; }
        // assume already that no buffers are interleaved
        var arrays = [];
        var sizes = [];
        var interleavedBuffer = new Buffer();
        var i;
        for (i in this.attributes) {
            var attribute = this.attributes[i];
            var buffer = this.buffers[attribute.buffer];
            arrays.push(buffer.data);
            sizes.push((attribute.size * byteSizeMap[attribute.type]) / 4);
            attribute.buffer = 0;
        }
        interleavedBuffer.data = interleaveTypedArrays(arrays, sizes);
        for (i = 0; i < this.buffers.length; i++) {
            if (this.buffers[i] !== this.indexBuffer) {
                this.buffers[i].destroy();
            }
        }
        this.buffers = [interleavedBuffer];
        if (this.indexBuffer) {
            this.buffers.push(this.indexBuffer);
        }
        return this;
    };
    Geometry.prototype.getSize = function () {
        for (var i in this.attributes) {
            var attribute = this.attributes[i];
            var buffer = this.buffers[attribute.buffer];
            return buffer.data.length / ((attribute.stride / 4) || attribute.size);
        }
        return 0;
    };
    /**
     * disposes WebGL resources that are connected to this geometry
     */
    Geometry.prototype.dispose = function () {
        this.disposeRunner.emit(this, false);
    };
    /**
     * Destroys the geometry.
     */
    Geometry.prototype.destroy = function () {
        this.dispose();
        this.buffers = null;
        this.indexBuffer = null;
        this.attributes = null;
    };
    /**
     * returns a clone of the geometry
     *
     * @returns {PIXI.Geometry} a new clone of this geometry
     */
    Geometry.prototype.clone = function () {
        var geometry = new Geometry();
        for (var i = 0; i < this.buffers.length; i++) {
            geometry.buffers[i] = new Buffer(this.buffers[i].data.slice(0));
        }
        for (var i in this.attributes) {
            var attrib = this.attributes[i];
            geometry.attributes[i] = new Attribute(attrib.buffer, attrib.size, attrib.normalized, attrib.type, attrib.stride, attrib.start, attrib.instance);
        }
        if (this.indexBuffer) {
            geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
            geometry.indexBuffer.index = true;
        }
        return geometry;
    };
    /**
     * merges an array of geometries into a new single one
     * geometry attribute styles must match for this operation to work
     *
     * @param {PIXI.Geometry[]} geometries - array of geometries to merge
     * @returns {PIXI.Geometry} shiny new geometry!
     */
    Geometry.merge = function (geometries) {
        // todo add a geometry check!
        // also a size check.. cant be too big!]
        var geometryOut = new Geometry();
        var arrays = [];
        var sizes = [];
        var offsets = [];
        var geometry;
        // pass one.. get sizes..
        for (var i = 0; i < geometries.length; i++) {
            geometry = geometries[i];
            for (var j = 0; j < geometry.buffers.length; j++) {
                sizes[j] = sizes[j] || 0;
                sizes[j] += geometry.buffers[j].data.length;
                offsets[j] = 0;
            }
        }
        // build the correct size arrays..
        for (var i = 0; i < geometry.buffers.length; i++) {
            // TODO types!
            arrays[i] = new map$1[getBufferType(geometry.buffers[i].data)](sizes[i]);
            geometryOut.buffers[i] = new Buffer(arrays[i]);
        }
        // pass to set data..
        for (var i = 0; i < geometries.length; i++) {
            geometry = geometries[i];
            for (var j = 0; j < geometry.buffers.length; j++) {
                arrays[j].set(geometry.buffers[j].data, offsets[j]);
                offsets[j] += geometry.buffers[j].data.length;
            }
        }
        geometryOut.attributes = geometry.attributes;
        if (geometry.indexBuffer) {
            geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
            geometryOut.indexBuffer.index = true;
            var offset = 0;
            var stride = 0;
            var offset2 = 0;
            var bufferIndexToCount = 0;
            // get a buffer
            for (var i = 0; i < geometry.buffers.length; i++) {
                if (geometry.buffers[i] !== geometry.indexBuffer) {
                    bufferIndexToCount = i;
                    break;
                }
            }
            // figure out the stride of one buffer..
            for (var i in geometry.attributes) {
                var attribute = geometry.attributes[i];
                if ((attribute.buffer | 0) === bufferIndexToCount) {
                    stride += ((attribute.size * byteSizeMap[attribute.type]) / 4);
                }
            }
            // time to off set all indexes..
            for (var i = 0; i < geometries.length; i++) {
                var indexBufferData = geometries[i].indexBuffer.data;
                for (var j = 0; j < indexBufferData.length; j++) {
                    geometryOut.indexBuffer.data[j + offset2] += offset;
                }
                offset += geometry.buffers[bufferIndexToCount].data.length / (stride);
                offset2 += indexBufferData.length;
            }
        }
        return geometryOut;
    };
    return Geometry;
}());

/**
 * Helper class to create a quad
 *
 * @class
 * @memberof PIXI
 */
var Quad = /** @class */ (function (_super) {
    __extends(Quad, _super);
    function Quad() {
        var _this = _super.call(this) || this;
        _this.addAttribute('aVertexPosition', new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1 ]))
            .addIndex([0, 1, 3, 2]);
        return _this;
    }
    return Quad;
}(Geometry));

/**
 * Helper class to create a quad with uvs like in v4
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Geometry
 */
var QuadUv = /** @class */ (function (_super) {
    __extends(QuadUv, _super);
    function QuadUv() {
        var _this = _super.call(this) || this;
        /**
         * An array of vertices
         *
         * @member {Float32Array}
         */
        _this.vertices = new Float32Array([
            -1, -1,
            1, -1,
            1, 1,
            -1, 1 ]);
        /**
         * The Uvs of the quad
         *
         * @member {Float32Array}
         */
        _this.uvs = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1 ]);
        _this.vertexBuffer = new Buffer(_this.vertices);
        _this.uvBuffer = new Buffer(_this.uvs);
        _this.addAttribute('aVertexPosition', _this.vertexBuffer)
            .addAttribute('aTextureCoord', _this.uvBuffer)
            .addIndex([0, 1, 2, 0, 2, 3]);
        return _this;
    }
    /**
     * Maps two Rectangle to the quad.
     *
     * @param {PIXI.Rectangle} targetTextureFrame - the first rectangle
     * @param {PIXI.Rectangle} destinationFrame - the second rectangle
     * @return {PIXI.Quad} Returns itself.
     */
    QuadUv.prototype.map = function (targetTextureFrame, destinationFrame) {
        var x = 0; // destinationFrame.x / targetTextureFrame.width;
        var y = 0; // destinationFrame.y / targetTextureFrame.height;
        this.uvs[0] = x;
        this.uvs[1] = y;
        this.uvs[2] = x + (destinationFrame.width / targetTextureFrame.width);
        this.uvs[3] = y;
        this.uvs[4] = x + (destinationFrame.width / targetTextureFrame.width);
        this.uvs[5] = y + (destinationFrame.height / targetTextureFrame.height);
        this.uvs[6] = x;
        this.uvs[7] = y + (destinationFrame.height / targetTextureFrame.height);
        x = destinationFrame.x;
        y = destinationFrame.y;
        this.vertices[0] = x;
        this.vertices[1] = y;
        this.vertices[2] = x + destinationFrame.width;
        this.vertices[3] = y;
        this.vertices[4] = x + destinationFrame.width;
        this.vertices[5] = y + destinationFrame.height;
        this.vertices[6] = x;
        this.vertices[7] = y + destinationFrame.height;
        this.invalidate();
        return this;
    };
    /**
     * legacy upload method, just marks buffers dirty
     * @returns {PIXI.QuadUv} Returns itself.
     */
    QuadUv.prototype.invalidate = function () {
        this.vertexBuffer._updateID++;
        this.uvBuffer._updateID++;
        return this;
    };
    return QuadUv;
}(Geometry));

var UID$2 = 0;
/**
 * Uniform group holds uniform map and some ID's for work
 *
 * @class
 * @memberof PIXI
 */
var UniformGroup = /** @class */ (function () {
    /**
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     * @param {boolean} [_static] - Uniforms wont be changed after creation
     */
    function UniformGroup(uniforms, _static) {
        /**
         * uniform values
         * @member {object}
         * @readonly
         */
        this.uniforms = uniforms;
        /**
         * Its a group and not a single uniforms
         * @member {boolean}
         * @readonly
         * @default true
         */
        this.group = true;
        // lets generate this when the shader ?
        this.syncUniforms = {};
        /**
         * dirty version
         * @protected
         * @member {number}
         */
        this.dirtyId = 0;
        /**
         * unique id
         * @protected
         * @member {number}
         */
        this.id = UID$2++;
        /**
         * Uniforms wont be changed after creation
         * @member {boolean}
         */
        this.static = !!_static;
    }
    UniformGroup.prototype.update = function () {
        this.dirtyId++;
    };
    UniformGroup.prototype.add = function (name, uniforms, _static) {
        this.uniforms[name] = new UniformGroup(uniforms, _static);
    };
    UniformGroup.from = function (uniforms, _static) {
        return new UniformGroup(uniforms, _static);
    };
    return UniformGroup;
}());

/**
 * System plugin to the renderer to manage filter states.
 *
 * @class
 * @private
 */
var FilterState = /** @class */ (function () {
    function FilterState() {
        this.renderTexture = null;
        /**
         * Target of the filters
         * We store for case when custom filter wants to know the element it was applied on
         * @member {PIXI.DisplayObject}
         * @private
         */
        this.target = null;
        /**
         * Compatibility with PixiJS v4 filters
         * @member {boolean}
         * @default false
         * @private
         */
        this.legacy = false;
        /**
         * Resolution of filters
         * @member {number}
         * @default 1
         * @private
         */
        this.resolution = 1;
        // next three fields are created only for root
        // re-assigned for everything else
        /**
         * Source frame
         * @member {PIXI.Rectangle}
         * @private
         */
        this.sourceFrame = new Rectangle();
        /**
         * Destination frame
         * @member {PIXI.Rectangle}
         * @private
         */
        this.destinationFrame = new Rectangle();
        /**
         * Collection of filters
         * @member {PIXI.Filter[]}
         * @private
         */
        this.filters = [];
    }
    /**
     * clears the state
     * @private
     */
    FilterState.prototype.clear = function () {
        this.target = null;
        this.filters = null;
        this.renderTexture = null;
    };
    return FilterState;
}());

/**
 * System plugin to the renderer to manage the filters.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var FilterSystem = /** @class */ (function (_super) {
    __extends(FilterSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function FilterSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * List of filters for the FilterSystem
         * @member {Object[]}
         * @readonly
         */
        _this.defaultFilterStack = [{}];
        /**
         * stores a bunch of PO2 textures used for filtering
         * @member {Object}
         */
        _this.texturePool = new RenderTexturePool();
        _this.texturePool.setScreenSize(renderer.view);
        /**
         * a pool for storing filter states, save us creating new ones each tick
         * @member {Object[]}
         */
        _this.statePool = [];
        /**
         * A very simple geometry used when drawing a filter effect to the screen
         * @member {PIXI.Quad}
         */
        _this.quad = new Quad();
        /**
         * Quad UVs
         * @member {PIXI.QuadUv}
         */
        _this.quadUv = new QuadUv();
        /**
         * Temporary rect for maths
         * @type {PIXI.Rectangle}
         */
        _this.tempRect = new Rectangle();
        /**
         * Active state
         * @member {object}
         */
        _this.activeState = {};
        /**
         * This uniform group is attached to filter uniforms when used
         * @member {PIXI.UniformGroup}
         * @property {PIXI.Rectangle} outputFrame
         * @property {Float32Array} inputSize
         * @property {Float32Array} inputPixel
         * @property {Float32Array} inputClamp
         * @property {Number} resolution
         * @property {Float32Array} filterArea
         * @property {Fload32Array} filterClamp
         */
        _this.globalUniforms = new UniformGroup({
            outputFrame: _this.tempRect,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            // legacy variables
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4),
        }, true);
        /**
         * Whether to clear output renderTexture in AUTO/BLIT mode. See {@link PIXI.CLEAR_MODES}
         * @member {boolean}
         */
        _this.forceClear = false;
        /**
         * Old padding behavior is to use the max amount instead of sum padding.
         * Use this flag if you need the old behavior.
         * @member {boolean}
         * @default false
         */
        _this.useMaxPadding = false;
        return _this;
    }
    /**
     * Adds a new filter to the System.
     *
     * @param {PIXI.DisplayObject} target - The target of the filter to render.
     * @param {PIXI.Filter[]} filters - The filters to apply.
     */
    FilterSystem.prototype.push = function (target, filters) {
        var renderer = this.renderer;
        var filterStack = this.defaultFilterStack;
        var state = this.statePool.pop() || new FilterState();
        var resolution = filters[0].resolution;
        var padding = filters[0].padding;
        var autoFit = filters[0].autoFit;
        var legacy = filters[0].legacy;
        for (var i = 1; i < filters.length; i++) {
            var filter = filters[i];
            // lets use the lowest resolution..
            resolution = Math.min(resolution, filter.resolution);
            // figure out the padding required for filters
            padding = this.useMaxPadding
                // old behavior: use largest amount of padding!
                ? Math.max(padding, filter.padding)
                // new behavior: sum the padding
                : padding + filter.padding;
            // only auto fit if all filters are autofit
            autoFit = autoFit && filter.autoFit;
            legacy = legacy || filter.legacy;
        }
        if (filterStack.length === 1) {
            this.defaultFilterStack[0].renderTexture = renderer.renderTexture.current;
        }
        filterStack.push(state);
        state.resolution = resolution;
        state.legacy = legacy;
        state.target = target;
        state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));
        state.sourceFrame.pad(padding);
        if (autoFit) {
            state.sourceFrame.fit(this.renderer.renderTexture.sourceFrame);
        }
        // round to whole number based on resolution
        state.sourceFrame.ceil(resolution);
        state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution);
        state.filters = filters;
        state.destinationFrame.width = state.renderTexture.width;
        state.destinationFrame.height = state.renderTexture.height;
        var destinationFrame = this.tempRect;
        destinationFrame.width = state.sourceFrame.width;
        destinationFrame.height = state.sourceFrame.height;
        state.renderTexture.filterFrame = state.sourceFrame;
        renderer.renderTexture.bind(state.renderTexture, state.sourceFrame, destinationFrame);
        renderer.renderTexture.clear();
    };
    /**
     * Pops off the filter and applies it.
     *
     */
    FilterSystem.prototype.pop = function () {
        var filterStack = this.defaultFilterStack;
        var state = filterStack.pop();
        var filters = state.filters;
        this.activeState = state;
        var globalUniforms = this.globalUniforms.uniforms;
        globalUniforms.outputFrame = state.sourceFrame;
        globalUniforms.resolution = state.resolution;
        var inputSize = globalUniforms.inputSize;
        var inputPixel = globalUniforms.inputPixel;
        var inputClamp = globalUniforms.inputClamp;
        inputSize[0] = state.destinationFrame.width;
        inputSize[1] = state.destinationFrame.height;
        inputSize[2] = 1.0 / inputSize[0];
        inputSize[3] = 1.0 / inputSize[1];
        inputPixel[0] = inputSize[0] * state.resolution;
        inputPixel[1] = inputSize[1] * state.resolution;
        inputPixel[2] = 1.0 / inputPixel[0];
        inputPixel[3] = 1.0 / inputPixel[1];
        inputClamp[0] = 0.5 * inputPixel[2];
        inputClamp[1] = 0.5 * inputPixel[3];
        inputClamp[2] = (state.sourceFrame.width * inputSize[2]) - (0.5 * inputPixel[2]);
        inputClamp[3] = (state.sourceFrame.height * inputSize[3]) - (0.5 * inputPixel[3]);
        // only update the rect if its legacy..
        if (state.legacy) {
            var filterArea = globalUniforms.filterArea;
            filterArea[0] = state.destinationFrame.width;
            filterArea[1] = state.destinationFrame.height;
            filterArea[2] = state.sourceFrame.x;
            filterArea[3] = state.sourceFrame.y;
            globalUniforms.filterClamp = globalUniforms.inputClamp;
        }
        this.globalUniforms.update();
        var lastState = filterStack[filterStack.length - 1];
        if (state.renderTexture.framebuffer.multisample > 1) {
            this.renderer.framebuffer.blit();
        }
        if (filters.length === 1) {
            filters[0].apply(this, state.renderTexture, lastState.renderTexture, CLEAR_MODES.BLEND, state);
            this.returnFilterTexture(state.renderTexture);
        }
        else {
            var flip = state.renderTexture;
            var flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
            flop.filterFrame = flip.filterFrame;
            var i = 0;
            for (i = 0; i < filters.length - 1; ++i) {
                filters[i].apply(this, flip, flop, CLEAR_MODES.CLEAR, state);
                var t = flip;
                flip = flop;
                flop = t;
            }
            filters[i].apply(this, flip, lastState.renderTexture, CLEAR_MODES.BLEND, state);
            this.returnFilterTexture(flip);
            this.returnFilterTexture(flop);
        }
        state.clear();
        this.statePool.push(state);
    };
    /**
     * Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.
     * @param {PIXI.RenderTexture} filterTexture - renderTexture to bind, should belong to filter pool or filter stack
     * @param {PIXI.CLEAR_MODES} [clearMode] - clearMode, by default its CLEAR/YES. See {@link PIXI.CLEAR_MODES}
     */
    FilterSystem.prototype.bindAndClear = function (filterTexture, clearMode) {
        if (clearMode === void 0) { clearMode = CLEAR_MODES.CLEAR; }
        if (filterTexture && filterTexture.filterFrame) {
            var destinationFrame = this.tempRect;
            destinationFrame.width = filterTexture.filterFrame.width;
            destinationFrame.height = filterTexture.filterFrame.height;
            this.renderer.renderTexture.bind(filterTexture, filterTexture.filterFrame, destinationFrame);
        }
        else {
            this.renderer.renderTexture.bind(filterTexture);
        }
        // TODO: remove in next major version
        if (typeof clearMode === 'boolean') {
            clearMode = clearMode ? CLEAR_MODES.CLEAR : CLEAR_MODES.BLEND;
            // get deprecation function from utils
            deprecation('5.2.1', 'Use CLEAR_MODES when using clear applyFilter option');
        }
        if (clearMode === CLEAR_MODES.CLEAR
            || (clearMode === CLEAR_MODES.BLIT && this.forceClear)) {
            this.renderer.renderTexture.clear();
        }
    };
    /**
     * Draws a filter.
     *
     * @param {PIXI.Filter} filter - The filter to draw.
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {PIXI.CLEAR_MODES} [clearMode] - Should the output be cleared before rendering to it
     */
    FilterSystem.prototype.applyFilter = function (filter, input, output, clearMode) {
        var renderer = this.renderer;
        this.bindAndClear(output, clearMode);
        // set the uniforms..
        filter.uniforms.uSampler = input;
        filter.uniforms.filterGlobals = this.globalUniforms;
        // TODO make it so that the order of this does not matter..
        // because it does at the moment cos of global uniforms.
        // they need to get resynced
        renderer.state.set(filter.state);
        renderer.shader.bind(filter);
        if (filter.legacy) {
            this.quadUv.map(input._frame, input.filterFrame);
            renderer.geometry.bind(this.quadUv);
            renderer.geometry.draw(DRAW_MODES.TRIANGLES);
        }
        else {
            renderer.geometry.bind(this.quad);
            renderer.geometry.draw(DRAW_MODES.TRIANGLE_STRIP);
        }
    };
    /**
     * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
     *
     * Use `outputMatrix * vTextureCoord` in the shader.
     *
     * @param {PIXI.Matrix} outputMatrix - The matrix to output to.
     * @param {PIXI.Sprite} sprite - The sprite to map to.
     * @return {PIXI.Matrix} The mapped matrix.
     */
    FilterSystem.prototype.calculateSpriteMatrix = function (outputMatrix, sprite) {
        var _a = this.activeState, sourceFrame = _a.sourceFrame, destinationFrame = _a.destinationFrame;
        var orig = sprite._texture.orig;
        var mappedMatrix = outputMatrix.set(destinationFrame.width, 0, 0, destinationFrame.height, sourceFrame.x, sourceFrame.y);
        var worldTransform = sprite.worldTransform.copyTo(Matrix.TEMP_MATRIX);
        worldTransform.invert();
        mappedMatrix.prepend(worldTransform);
        mappedMatrix.scale(1.0 / orig.width, 1.0 / orig.height);
        mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
        return mappedMatrix;
    };
    /**
     * Destroys this Filter System.
     */
    FilterSystem.prototype.destroy = function () {
        // Those textures has to be destroyed by RenderTextureSystem or FramebufferSystem
        this.texturePool.clear(false);
    };
    /**
     * Gets a Power-of-Two render texture or fullScreen texture
     *
     * @protected
     * @param {number} minWidth - The minimum width of the render texture in real pixels.
     * @param {number} minHeight - The minimum height of the render texture in real pixels.
     * @param {number} [resolution=1] - The resolution of the render texture.
     * @return {PIXI.RenderTexture} The new render texture.
     */
    FilterSystem.prototype.getOptimalFilterTexture = function (minWidth, minHeight, resolution) {
        if (resolution === void 0) { resolution = 1; }
        return this.texturePool.getOptimalTexture(minWidth, minHeight, resolution);
    };
    /**
     * Gets extra render texture to use inside current filter
     * To be compliant with older filters, you can use params in any order
     *
     * @param {PIXI.RenderTexture} [input] - renderTexture from which size and resolution will be copied
     * @param {number} [resolution] - override resolution of the renderTexture
     * @returns {PIXI.RenderTexture}
     */
    FilterSystem.prototype.getFilterTexture = function (input, resolution) {
        if (typeof input === 'number') {
            var swap = input;
            input = resolution;
            resolution = swap;
        }
        input = input || this.activeState.renderTexture;
        var filterTexture = this.texturePool.getOptimalTexture(input.width, input.height, resolution || input.resolution);
        filterTexture.filterFrame = input.filterFrame;
        return filterTexture;
    };
    /**
     * Frees a render texture back into the pool.
     *
     * @param {PIXI.RenderTexture} renderTexture - The renderTarget to free
     */
    FilterSystem.prototype.returnFilterTexture = function (renderTexture) {
        this.texturePool.returnTexture(renderTexture);
    };
    /**
     * Empties the texture pool.
     */
    FilterSystem.prototype.emptyPool = function () {
        this.texturePool.clear(true);
    };
    /**
     * calls `texturePool.resize()`, affects fullScreen renderTextures
     */
    FilterSystem.prototype.resize = function () {
        this.texturePool.setScreenSize(this.renderer.view);
    };
    return FilterSystem;
}(System));

/**
 * Base for a common object renderer that can be used as a
 * system renderer plugin.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI
 */
var ObjectRenderer = /** @class */ (function () {
    /**
     * @param {PIXI.Renderer} renderer - The renderer this manager works for.
     */
    function ObjectRenderer(renderer) {
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer}
         */
        this.renderer = renderer;
    }
    /**
     * Stub method that should be used to empty the current
     * batch by rendering objects now.
     */
    ObjectRenderer.prototype.flush = function () {
        // flush!
    };
    /**
     * Generic destruction method that frees all resources. This
     * should be called by subclasses.
     */
    ObjectRenderer.prototype.destroy = function () {
        this.renderer = null;
    };
    /**
     * Stub method that initializes any state required before
     * rendering starts. It is different from the `prerender`
     * signal, which occurs every frame, in that it is called
     * whenever an object requests _this_ renderer specifically.
     */
    ObjectRenderer.prototype.start = function () {
        // set the shader..
    };
    /**
     * Stops the renderer. It should free up any state and
     * become dormant.
     */
    ObjectRenderer.prototype.stop = function () {
        this.flush();
    };
    /**
     * Keeps the object to render. It doesn't have to be
     * rendered immediately.
     *
     * @param {PIXI.DisplayObject} object - The object to render.
     */
    ObjectRenderer.prototype.render = function (_object) {
        // render the object
    };
    return ObjectRenderer;
}());

/**
 * System plugin to the renderer to manage batching.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var BatchSystem = /** @class */ (function (_super) {
    __extends(BatchSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function BatchSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * An empty renderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        _this.emptyRenderer = new ObjectRenderer(renderer);
        /**
         * The currently active ObjectRenderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        _this.currentRenderer = _this.emptyRenderer;
        return _this;
    }
    /**
     * Changes the current renderer to the one given in parameter
     *
     * @param {PIXI.ObjectRenderer} objectRenderer - The object renderer to use.
     */
    BatchSystem.prototype.setObjectRenderer = function (objectRenderer) {
        if (this.currentRenderer === objectRenderer) {
            return;
        }
        this.currentRenderer.stop();
        this.currentRenderer = objectRenderer;
        this.currentRenderer.start();
    };
    /**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     */
    BatchSystem.prototype.flush = function () {
        this.setObjectRenderer(this.emptyRenderer);
    };
    /**
     * Reset the system to an empty renderer
     */
    BatchSystem.prototype.reset = function () {
        this.setObjectRenderer(this.emptyRenderer);
    };
    /**
     * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
     * sets actual _batchLocation for them
     *
     * @param {PIXI.BaseTexture[]} - arr copy destination
     * @param {number} maxTextures - number of copied elements
     */
    BatchSystem.prototype.copyBoundTextures = function (arr, maxTextures) {
        var boundTextures = this.renderer.texture.boundTextures;
        for (var i = maxTextures - 1; i >= 0; --i) {
            arr[i] = boundTextures[i] || null;
            if (arr[i]) {
                arr[i]._batchLocation = i;
            }
        }
    };
    /**
     * Assigns batch locations to textures in array based on boundTextures state.
     * All textures in texArray should have `_batchEnabled = _batchId`,
     * and their count should be less than `maxTextures`.
     *
     * @param {PIXI.BatchTextureArray} texArray - textures to bound
     * @param {PIXI.BaseTexture[]} boundTextures - current state of bound textures
     * @param {number} batchId - marker for _batchEnabled param of textures in texArray
     * @param {number} maxTextures - number of texture locations to manipulate
     */
    BatchSystem.prototype.boundArray = function (texArray, boundTextures, batchId, maxTextures) {
        var elements = texArray.elements, ids = texArray.ids, count = texArray.count;
        var j = 0;
        for (var i = 0; i < count; i++) {
            var tex = elements[i];
            var loc = tex._batchLocation;
            if (loc >= 0 && loc < maxTextures
                && boundTextures[loc] === tex) {
                ids[i] = loc;
                continue;
            }
            while (j < maxTextures) {
                var bound = boundTextures[j];
                if (bound && bound._batchEnabled === batchId
                    && bound._batchLocation === j) {
                    j++;
                    continue;
                }
                ids[i] = j;
                tex._batchLocation = j;
                boundTextures[j] = tex;
                break;
            }
        }
    };
    return BatchSystem;
}(System));

var CONTEXT_UID_COUNTER = 0;
/**
 * System plugin to the renderer to manage the context.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var ContextSystem = /** @class */ (function (_super) {
    __extends(ContextSystem, _super);
    /* eslint-enable camelcase */
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function ContextSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * Either 1 or 2 to reflect the WebGL version being used
         * @member {number}
         * @readonly
         */
        _this.webGLVersion = 1;
        /**
         * Extensions being used
         * @member {object}
         * @readonly
         * @property {WEBGL_draw_buffers} drawBuffers - WebGL v1 extension
         * @property {WEBGL_depth_texture} depthTexture - WebGL v1 extension
         * @property {OES_texture_float} floatTexture - WebGL v1 extension
         * @property {WEBGL_lose_context} loseContext - WebGL v1 extension
         * @property {OES_vertex_array_object} vertexArrayObject - WebGL v1 extension
         * @property {EXT_texture_filter_anisotropic} anisotropicFiltering - WebGL v1 and v2 extension
         */
        _this.extensions = {};
        /**
         * Features supported by current context
         * @member {object}
         * @private
         * @readonly
         * @property {boolean} uint32Indices - Supports of 32-bit indices buffer
         */
        _this.supports = {
            uint32Indices: false,
        };
        // Bind functions
        _this.handleContextLost = _this.handleContextLost.bind(_this);
        _this.handleContextRestored = _this.handleContextRestored.bind(_this);
        renderer.view.addEventListener('webglcontextlost', _this.handleContextLost, false);
        renderer.view.addEventListener('webglcontextrestored', _this.handleContextRestored, false);
        return _this;
    }
    Object.defineProperty(ContextSystem.prototype, "isLost", {
        /**
         * `true` if the context is lost
         * @member {boolean}
         * @readonly
         */
        get: function () {
            return (!this.gl || this.gl.isContextLost());
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle the context change event
     * @param {WebGLRenderingContext} gl - new webgl context
     */
    ContextSystem.prototype.contextChange = function (gl) {
        this.gl = gl;
        this.renderer.gl = gl;
        this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
        // restore a context if it was previously lost
        if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context')) {
            gl.getExtension('WEBGL_lose_context').restoreContext();
        }
    };
    /**
     * Initialize the context
     *
     * @protected
     * @param {WebGLRenderingContext} gl - WebGL context
     */
    ContextSystem.prototype.initFromContext = function (gl) {
        this.gl = gl;
        this.validateContext(gl);
        this.renderer.gl = gl;
        this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
        this.renderer.runners.contextChange.emit(gl);
    };
    /**
     * Initialize from context options
     *
     * @protected
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     * @param {object} options - context attributes
     */
    ContextSystem.prototype.initFromOptions = function (options) {
        var gl = this.createContext(this.renderer.view, options);
        this.initFromContext(gl);
    };
    /**
     * Helper class to create a WebGL Context
     *
     * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
     * @param options {object} An options object that gets passed in to the canvas element containing the context attributes
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
     * @return {WebGLRenderingContext} the WebGL context
     */
    ContextSystem.prototype.createContext = function (canvas, options) {
        var gl;
        if (settings.PREFER_ENV >= ENV.WEBGL2) {
            gl = canvas.getContext('webgl2', options);
        }
        if (gl) {
            this.webGLVersion = 2;
        }
        else {
            this.webGLVersion = 1;
            gl = canvas.getContext('webgl', options)
                || canvas.getContext('experimental-webgl', options);
            if (!gl) {
                // fail, not able to get a context
                throw new Error('This browser does not support WebGL. Try using the canvas renderer');
            }
        }
        this.gl = gl;
        this.getExtensions();
        return this.gl;
    };
    /**
     * Auto-populate the extensions
     *
     * @protected
     */
    ContextSystem.prototype.getExtensions = function () {
        // time to set up default extensions that Pixi uses.
        var gl = this.gl;
        if (this.webGLVersion === 1) {
            Object.assign(this.extensions, {
                drawBuffers: gl.getExtension('WEBGL_draw_buffers'),
                depthTexture: gl.getExtension('WEBGL_depth_texture'),
                loseContext: gl.getExtension('WEBGL_lose_context'),
                vertexArrayObject: gl.getExtension('OES_vertex_array_object')
                    || gl.getExtension('MOZ_OES_vertex_array_object')
                    || gl.getExtension('WEBKIT_OES_vertex_array_object'),
                anisotropicFiltering: gl.getExtension('EXT_texture_filter_anisotropic'),
                uint32ElementIndex: gl.getExtension('OES_element_index_uint'),
                // Floats and half-floats
                floatTexture: gl.getExtension('OES_texture_float'),
                floatTextureLinear: gl.getExtension('OES_texture_float_linear'),
                textureHalfFloat: gl.getExtension('OES_texture_half_float'),
                textureHalfFloatLinear: gl.getExtension('OES_texture_half_float_linear'),
            });
        }
        else if (this.webGLVersion === 2) {
            Object.assign(this.extensions, {
                anisotropicFiltering: gl.getExtension('EXT_texture_filter_anisotropic'),
                // Floats and half-floats
                colorBufferFloat: gl.getExtension('EXT_color_buffer_float'),
                floatTextureLinear: gl.getExtension('OES_texture_float_linear'),
            });
        }
    };
    /**
     * Handles a lost webgl context
     *
     * @protected
     * @param {WebGLContextEvent} event - The context lost event.
     */
    ContextSystem.prototype.handleContextLost = function (event) {
        event.preventDefault();
    };
    /**
     * Handles a restored webgl context
     *
     * @protected
     */
    ContextSystem.prototype.handleContextRestored = function () {
        this.renderer.runners.contextChange.emit(this.gl);
    };
    ContextSystem.prototype.destroy = function () {
        var view = this.renderer.view;
        // remove listeners
        view.removeEventListener('webglcontextlost', this.handleContextLost);
        view.removeEventListener('webglcontextrestored', this.handleContextRestored);
        this.gl.useProgram(null);
        if (this.extensions.loseContext) {
            this.extensions.loseContext.loseContext();
        }
    };
    /**
     * Handle the post-render runner event
     *
     * @protected
     */
    ContextSystem.prototype.postrender = function () {
        if (this.renderer.renderingToScreen) {
            this.gl.flush();
        }
    };
    /**
     * Validate context
     *
     * @protected
     * @param {WebGLRenderingContext} gl - Render context
     */
    ContextSystem.prototype.validateContext = function (gl) {
        var attributes = gl.getContextAttributes();
        var isWebGl2 = 'WebGL2RenderingContext' in window && gl instanceof window.WebGL2RenderingContext;
        if (isWebGl2) {
            this.webGLVersion = 2;
        }
        // this is going to be fairly simple for now.. but at least we have room to grow!
        if (!attributes.stencil) {
            /* eslint-disable max-len, no-console */
            console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
            /* eslint-enable max-len, no-console */
        }
        var hasuint32 = isWebGl2 || !!gl.getExtension('OES_element_index_uint');
        this.supports.uint32Indices = hasuint32;
        if (!hasuint32) {
            /* eslint-disable max-len, no-console */
            console.warn('Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly');
            /* eslint-enable max-len, no-console */
        }
    };
    return ContextSystem;
}(System));

/**
 * Internal framebuffer for WebGL context
 * @class
 * @memberof PIXI
 */
var GLFramebuffer = /** @class */ (function () {
    function GLFramebuffer(framebuffer) {
        /**
         * The WebGL framebuffer
         * @member {WebGLFramebuffer}
         */
        this.framebuffer = framebuffer;
        /**
         * stencil+depth , usually costs 32bits per pixel
         * @member {WebGLRenderbuffer}
         */
        this.stencil = null;
        /**
         * latest known version of framebuffer
         * @member {number}
         * @protected
         */
        this.dirtyId = 0;
        /**
         * latest known version of framebuffer format
         * @member {number}
         * @protected
         */
        this.dirtyFormat = 0;
        /**
         * latest known version of framebuffer size
         * @member {number}
         * @protected
         */
        this.dirtySize = 0;
        /**
         * Detected AA samples number
         * @member {PIXI.MSAA_QUALITY}
         */
        this.multisample = MSAA_QUALITY.NONE;
        /**
         * In case MSAA, we use this Renderbuffer instead of colorTextures[0] when we write info
         * @member {WebGLRenderbuffer}
         */
        this.msaaBuffer = null;
        /**
         * In case we use MSAA, this is actual framebuffer that has colorTextures[0]
         * The contents of that framebuffer are read when we use that renderTexture in sprites
         * @member {PIXI.Framebuffer}
         */
        this.blitFramebuffer = null;
    }
    return GLFramebuffer;
}());

var tempRectangle = new Rectangle();
/**
 * System plugin to the renderer to manage framebuffers.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var FramebufferSystem = /** @class */ (function (_super) {
    __extends(FramebufferSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function FramebufferSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * A list of managed framebuffers
         * @member {PIXI.Framebuffer[]}
         * @readonly
         */
        _this.managedFramebuffers = [];
        /**
         * Framebuffer value that shows that we don't know what is bound
         * @member {Framebuffer}
         * @readonly
         */
        _this.unknownFramebuffer = new Framebuffer(10, 10);
        _this.msaaSamples = null;
        return _this;
    }
    /**
     * Sets up the renderer context and necessary buffers.
     */
    FramebufferSystem.prototype.contextChange = function () {
        var gl = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.current = this.unknownFramebuffer;
        this.viewport = new Rectangle();
        this.hasMRT = true;
        this.writeDepthTexture = true;
        this.disposeAll(true);
        // webgl2
        if (this.renderer.context.webGLVersion === 1) {
            // webgl 1!
            var nativeDrawBuffersExtension_1 = this.renderer.context.extensions.drawBuffers;
            var nativeDepthTextureExtension = this.renderer.context.extensions.depthTexture;
            if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
                nativeDrawBuffersExtension_1 = null;
                nativeDepthTextureExtension = null;
            }
            if (nativeDrawBuffersExtension_1) {
                gl.drawBuffers = function (activeTextures) {
                    return nativeDrawBuffersExtension_1.drawBuffersWEBGL(activeTextures);
                };
            }
            else {
                this.hasMRT = false;
                gl.drawBuffers = function () {
                    // empty
                };
            }
            if (!nativeDepthTextureExtension) {
                this.writeDepthTexture = false;
            }
        }
        else {
            // WebGL2
            // cache possible MSAA samples
            this.msaaSamples = gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA8, gl.SAMPLES);
        }
    };
    /**
     * Bind a framebuffer
     *
     * @param {PIXI.Framebuffer} framebuffer
     * @param {PIXI.Rectangle} [frame] frame, default is framebuffer size
     */
    FramebufferSystem.prototype.bind = function (framebuffer, frame) {
        var gl = this.gl;
        if (framebuffer) {
            // TODO caching layer!
            var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);
            if (this.current !== framebuffer) {
                this.current = framebuffer;
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
            }
            // make sure all textures are unbound..
            // now check for updates...
            if (fbo.dirtyId !== framebuffer.dirtyId) {
                fbo.dirtyId = framebuffer.dirtyId;
                if (fbo.dirtyFormat !== framebuffer.dirtyFormat) {
                    fbo.dirtyFormat = framebuffer.dirtyFormat;
                    this.updateFramebuffer(framebuffer);
                }
                else if (fbo.dirtySize !== framebuffer.dirtySize) {
                    fbo.dirtySize = framebuffer.dirtySize;
                    this.resizeFramebuffer(framebuffer);
                }
            }
            for (var i = 0; i < framebuffer.colorTextures.length; i++) {
                var tex = framebuffer.colorTextures[i];
                this.renderer.texture.unbind(tex.parentTextureArray || tex);
            }
            if (framebuffer.depthTexture) {
                this.renderer.texture.unbind(framebuffer.depthTexture);
            }
            if (frame) {
                this.setViewport(frame.x, frame.y, frame.width, frame.height);
            }
            else {
                this.setViewport(0, 0, framebuffer.width, framebuffer.height);
            }
        }
        else {
            if (this.current) {
                this.current = null;
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
            if (frame) {
                this.setViewport(frame.x, frame.y, frame.width, frame.height);
            }
            else {
                this.setViewport(0, 0, this.renderer.width, this.renderer.height);
            }
        }
    };
    /**
     * Set the WebGLRenderingContext's viewport.
     *
     * @param {Number} x - X position of viewport
     * @param {Number} y - Y position of viewport
     * @param {Number} width - Width of viewport
     * @param {Number} height - Height of viewport
     */
    FramebufferSystem.prototype.setViewport = function (x, y, width, height) {
        var v = this.viewport;
        if (v.width !== width || v.height !== height || v.x !== x || v.y !== y) {
            v.x = x;
            v.y = y;
            v.width = width;
            v.height = height;
            this.gl.viewport(x, y, width, height);
        }
    };
    Object.defineProperty(FramebufferSystem.prototype, "size", {
        /**
         * Get the size of the current width and height. Returns object with `width` and `height` values.
         *
         * @member {object}
         * @readonly
         */
        get: function () {
            if (this.current) {
                // TODO store temp
                return { x: 0, y: 0, width: this.current.width, height: this.current.height };
            }
            return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clear the color of the context
     *
     * @param {Number} r - Red value from 0 to 1
     * @param {Number} g - Green value from 0 to 1
     * @param {Number} b - Blue value from 0 to 1
     * @param {Number} a - Alpha value from 0 to 1
     * @param {PIXI.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
     *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
     */
    FramebufferSystem.prototype.clear = function (r, g, b, a, mask) {
        if (mask === void 0) { mask = BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH; }
        var gl = this.gl;
        // TODO clear color can be set only one right?
        gl.clearColor(r, g, b, a);
        gl.clear(mask);
    };
    /**
     * Initialize framebuffer for this context
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     * @returns {PIXI.GLFramebuffer} created GLFramebuffer
     */
    FramebufferSystem.prototype.initFramebuffer = function (framebuffer) {
        var gl = this.gl;
        var fbo = new GLFramebuffer(gl.createFramebuffer());
        fbo.multisample = this.detectSamples(framebuffer.multisample);
        framebuffer.glFramebuffers[this.CONTEXT_UID] = fbo;
        this.managedFramebuffers.push(framebuffer);
        framebuffer.disposeRunner.add(this);
        return fbo;
    };
    /**
     * Resize the framebuffer
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     */
    FramebufferSystem.prototype.resizeFramebuffer = function (framebuffer) {
        var gl = this.gl;
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
        if (fbo.stencil) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }
        var colorTextures = framebuffer.colorTextures;
        for (var i = 0; i < colorTextures.length; i++) {
            this.renderer.texture.bind(colorTextures[i], 0);
        }
        if (framebuffer.depthTexture) {
            this.renderer.texture.bind(framebuffer.depthTexture, 0);
        }
    };
    /**
     * Update the framebuffer
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     */
    FramebufferSystem.prototype.updateFramebuffer = function (framebuffer) {
        var gl = this.gl;
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
        // bind the color texture
        var colorTextures = framebuffer.colorTextures;
        var count = colorTextures.length;
        if (!gl.drawBuffers) {
            count = Math.min(count, 1);
        }
        if (fbo.multisample > 1) {
            fbo.msaaBuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
            gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.RGBA8, framebuffer.width, framebuffer.height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, fbo.msaaBuffer);
        }
        var activeTextures = [];
        for (var i = 0; i < count; i++) {
            if (i === 0 && fbo.multisample > 1) {
                continue;
            }
            var texture = framebuffer.colorTextures[i];
            var parentTexture = texture.parentTextureArray || texture;
            this.renderer.texture.bind(parentTexture, 0);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, texture.target, parentTexture._glTextures[this.CONTEXT_UID].texture, 0);
            activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
        }
        if (activeTextures.length > 1) {
            gl.drawBuffers(activeTextures);
        }
        if (framebuffer.depthTexture) {
            var writeDepthTexture = this.writeDepthTexture;
            if (writeDepthTexture) {
                var depthTexture = framebuffer.depthTexture;
                this.renderer.texture.bind(depthTexture, 0);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTexture._glTextures[this.CONTEXT_UID].texture, 0);
            }
        }
        if (!fbo.stencil && (framebuffer.stencil || framebuffer.depth)) {
            fbo.stencil = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
            // TODO.. this is depth AND stencil?
            if (!framebuffer.depthTexture) { // you can't have both, so one should take priority if enabled
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
            }
        }
    };
    /**
     * Detects number of samples that is not more than a param but as close to it as possible
     *
     * @param {PIXI.MSAA_QUALITY} samples - number of samples
     * @returns {PIXI.MSAA_QUALITY} - recommended number of samples
     */
    FramebufferSystem.prototype.detectSamples = function (samples) {
        var msaaSamples = this.msaaSamples;
        var res = MSAA_QUALITY.NONE;
        if (samples <= 1 || msaaSamples === null) {
            return res;
        }
        for (var i = 0; i < msaaSamples.length; i++) {
            if (msaaSamples[i] <= samples) {
                res = msaaSamples[i];
                break;
            }
        }
        if (res === 1) {
            res = MSAA_QUALITY.NONE;
        }
        return res;
    };
    /**
     * Only works with WebGL2
     *
     * blits framebuffer to another of the same or bigger size
     * after that target framebuffer is bound
     *
     * Fails with WebGL warning if blits multisample framebuffer to different size
     *
     * @param {PIXI.Framebuffer} [framebuffer] - by default it blits "into itself", from renderBuffer to texture.
     * @param {PIXI.Rectangle} [sourcePixels] - source rectangle in pixels
     * @param {PIXI.Rectangle} [destPixels] - dest rectangle in pixels, assumed to be the same as sourcePixels
     */
    FramebufferSystem.prototype.blit = function (framebuffer, sourcePixels, destPixels) {
        var _a = this, current = _a.current, renderer = _a.renderer, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
        if (renderer.context.webGLVersion !== 2) {
            return;
        }
        if (!current) {
            return;
        }
        var fbo = current.glFramebuffers[CONTEXT_UID];
        if (!fbo) {
            return;
        }
        if (!framebuffer) {
            if (fbo.multisample <= 1) {
                return;
            }
            if (!fbo.blitFramebuffer) {
                fbo.blitFramebuffer = new Framebuffer(current.width, current.height);
                fbo.blitFramebuffer.addColorTexture(0, current.colorTextures[0]);
            }
            framebuffer = fbo.blitFramebuffer;
            framebuffer.width = current.width;
            framebuffer.height = current.height;
        }
        if (!sourcePixels) {
            sourcePixels = tempRectangle;
            sourcePixels.width = current.width;
            sourcePixels.height = current.height;
        }
        if (!destPixels) {
            destPixels = sourcePixels;
        }
        var sameSize = sourcePixels.width === destPixels.width && sourcePixels.height === destPixels.height;
        this.bind(framebuffer);
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, fbo.framebuffer);
        gl.blitFramebuffer(sourcePixels.x, sourcePixels.y, sourcePixels.width, sourcePixels.height, destPixels.x, destPixels.y, destPixels.width, destPixels.height, gl.COLOR_BUFFER_BIT, sameSize ? gl.NEAREST : gl.LINEAR);
    };
    /**
     * Disposes framebuffer
     * @param {PIXI.Framebuffer} framebuffer - framebuffer that has to be disposed of
     * @param {boolean} [contextLost=false] - If context was lost, we suppress all delete function calls
     */
    FramebufferSystem.prototype.disposeFramebuffer = function (framebuffer, contextLost) {
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
        var gl = this.gl;
        if (!fbo) {
            return;
        }
        delete framebuffer.glFramebuffers[this.CONTEXT_UID];
        var index = this.managedFramebuffers.indexOf(framebuffer);
        if (index >= 0) {
            this.managedFramebuffers.splice(index, 1);
        }
        framebuffer.disposeRunner.remove(this);
        if (!contextLost) {
            gl.deleteFramebuffer(fbo.framebuffer);
            if (fbo.stencil) {
                gl.deleteRenderbuffer(fbo.stencil);
            }
        }
    };
    /**
     * Disposes all framebuffers, but not textures bound to them
     * @param {boolean} [contextLost=false] - If context was lost, we suppress all delete function calls
     */
    FramebufferSystem.prototype.disposeAll = function (contextLost) {
        var list = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (var i = 0; i < list.length; i++) {
            this.disposeFramebuffer(list[i], contextLost);
        }
    };
    /**
     * Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
     * Used by MaskSystem, when its time to use stencil mask for Graphics element.
     *
     * Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.
     *
     * @private
     */
    FramebufferSystem.prototype.forceStencil = function () {
        var framebuffer = this.current;
        if (!framebuffer) {
            return;
        }
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
        if (!fbo || fbo.stencil) {
            return;
        }
        framebuffer.enableStencil();
        var w = framebuffer.width;
        var h = framebuffer.height;
        var gl = this.gl;
        var stencil = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, stencil);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, w, h);
        fbo.stencil = stencil;
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencil);
    };
    /**
     * resets framebuffer stored state, binds screen framebuffer
     *
     * should be called before renderTexture reset()
     */
    FramebufferSystem.prototype.reset = function () {
        this.current = this.unknownFramebuffer;
        this.viewport = new Rectangle();
    };
    return FramebufferSystem;
}(System));

var GLBuffer = /** @class */ (function () {
    function GLBuffer(buffer) {
        this.buffer = buffer || null;
        this.updateID = -1;
        this.byteLength = -1;
        this.refCount = 0;
    }
    return GLBuffer;
}());

var byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };
/**
 * System plugin to the renderer to manage geometry.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var GeometrySystem = /** @class */ (function (_super) {
    __extends(GeometrySystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function GeometrySystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this._activeGeometry = null;
        _this._activeVao = null;
        /**
         * `true` if we has `*_vertex_array_object` extension
         * @member {boolean}
         * @readonly
         */
        _this.hasVao = true;
        /**
         * `true` if has `ANGLE_instanced_arrays` extension
         * @member {boolean}
         * @readonly
         */
        _this.hasInstance = true;
        /**
         * `true` if support `gl.UNSIGNED_INT` in `gl.drawElements` or `gl.drawElementsInstanced`
         * @member {boolean}
         * @readonly
         */
        _this.canUseUInt32ElementIndex = false;
        /**
         * Cache for all geometries by id, used in case renderer gets destroyed or for profiling
         * @member {object}
         * @readonly
         */
        _this.managedGeometries = {};
        /**
         * Cache for all buffers by id, used in case renderer gets destroyed or for profiling
         * @member {object}
         * @readonly
         */
        _this.managedBuffers = {};
        return _this;
    }
    /**
     * Sets up the renderer context and necessary buffers.
     */
    GeometrySystem.prototype.contextChange = function () {
        this.disposeAll(true);
        var gl = this.gl = this.renderer.gl;
        var context = this.renderer.context;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        // webgl2
        if (context.webGLVersion !== 2) {
            // webgl 1!
            var nativeVaoExtension_1 = this.renderer.context.extensions.vertexArrayObject;
            if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
                nativeVaoExtension_1 = null;
            }
            if (nativeVaoExtension_1) {
                gl.createVertexArray = function () {
                    return nativeVaoExtension_1.createVertexArrayOES();
                };
                gl.bindVertexArray = function (vao) {
                    return nativeVaoExtension_1.bindVertexArrayOES(vao);
                };
                gl.deleteVertexArray = function (vao) {
                    return nativeVaoExtension_1.deleteVertexArrayOES(vao);
                };
            }
            else {
                this.hasVao = false;
                gl.createVertexArray = function () {
                    return null;
                };
                gl.bindVertexArray = function () {
                    return null;
                };
                gl.deleteVertexArray = function () {
                    return null;
                };
            }
        }
        if (context.webGLVersion !== 2) {
            var instanceExt_1 = gl.getExtension('ANGLE_instanced_arrays');
            if (instanceExt_1) {
                gl.vertexAttribDivisor = function (a, b) {
                    return instanceExt_1.vertexAttribDivisorANGLE(a, b);
                };
                gl.drawElementsInstanced = function (a, b, c, d, e) {
                    return instanceExt_1.drawElementsInstancedANGLE(a, b, c, d, e);
                };
                gl.drawArraysInstanced = function (a, b, c, d) {
                    return instanceExt_1.drawArraysInstancedANGLE(a, b, c, d);
                };
            }
            else {
                this.hasInstance = false;
            }
        }
        this.canUseUInt32ElementIndex = context.webGLVersion === 2 || !!context.extensions.uint32ElementIndex;
    };
    /**
     * Binds geometry so that is can be drawn. Creating a Vao if required
     *
     * @param {PIXI.Geometry} geometry - instance of geometry to bind
     * @param {PIXI.Shader} [shader] - instance of shader to use vao for
     */
    GeometrySystem.prototype.bind = function (geometry, shader) {
        shader = shader || this.renderer.shader.shader;
        var gl = this.gl;
        // not sure the best way to address this..
        // currently different shaders require different VAOs for the same geometry
        // Still mulling over the best way to solve this one..
        // will likely need to modify the shader attribute locations at run time!
        var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
        var incRefCount = false;
        if (!vaos) {
            this.managedGeometries[geometry.id] = geometry;
            geometry.disposeRunner.add(this);
            geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
            incRefCount = true;
        }
        var vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader.program, incRefCount);
        this._activeGeometry = geometry;
        if (this._activeVao !== vao) {
            this._activeVao = vao;
            if (this.hasVao) {
                gl.bindVertexArray(vao);
            }
            else {
                this.activateVao(geometry, shader.program);
            }
        }
        // TODO - optimise later!
        // don't need to loop through if nothing changed!
        // maybe look to add an 'autoupdate' to geometry?
        this.updateBuffers();
    };
    /**
     * Reset and unbind any active VAO and geometry
     */
    GeometrySystem.prototype.reset = function () {
        this.unbind();
    };
    /**
     * Update buffers
     * @protected
     */
    GeometrySystem.prototype.updateBuffers = function () {
        var geometry = this._activeGeometry;
        var gl = this.gl;
        for (var i = 0; i < geometry.buffers.length; i++) {
            var buffer = geometry.buffers[i];
            var glBuffer = buffer._glBuffers[this.CONTEXT_UID];
            if (buffer._updateID !== glBuffer.updateID) {
                glBuffer.updateID = buffer._updateID;
                // TODO can cache this on buffer! maybe added a getter / setter?
                var type = buffer.index ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
                // TODO this could change if the VAO changes...
                // need to come up with a better way to cache..
                // if (this.boundBuffers[type] !== glBuffer)
                // {
                // this.boundBuffers[type] = glBuffer;
                gl.bindBuffer(type, glBuffer.buffer);
                // }
                this._boundBuffer = glBuffer;
                if (glBuffer.byteLength >= buffer.data.byteLength) {
                    // offset is always zero for now!
                    gl.bufferSubData(type, 0, buffer.data);
                }
                else {
                    var drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;
                    glBuffer.byteLength = buffer.data.byteLength;
                    gl.bufferData(type, buffer.data, drawType);
                }
            }
        }
    };
    /**
     * Check compability between a geometry and a program
     * @protected
     * @param {PIXI.Geometry} geometry - Geometry instance
     * @param {PIXI.Program} program - Program instance
     */
    GeometrySystem.prototype.checkCompatibility = function (geometry, program) {
        // geometry must have at least all the attributes that the shader requires.
        var geometryAttributes = geometry.attributes;
        var shaderAttributes = program.attributeData;
        for (var j in shaderAttributes) {
            if (!geometryAttributes[j]) {
                throw new Error("shader and geometry incompatible, geometry missing the \"" + j + "\" attribute");
            }
        }
    };
    /**
     * Takes a geometry and program and generates a unique signature for them.
     *
     * @param {PIXI.Geometry} geometry - to get signature from
     * @param {PIXI.Program} program - to test geometry against
     * @returns {String} Unique signature of the geometry and program
     * @protected
     */
    GeometrySystem.prototype.getSignature = function (geometry, program) {
        var attribs = geometry.attributes;
        var shaderAttributes = program.attributeData;
        var strings = ['g', geometry.id];
        for (var i in attribs) {
            if (shaderAttributes[i]) {
                strings.push(i);
            }
        }
        return strings.join('-');
    };
    /**
     * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
     * If vao is created, it is bound automatically.
     *
     * @protected
     * @param {PIXI.Geometry} geometry - Instance of geometry to to generate Vao for
     * @param {PIXI.Program} program - Instance of program
     * @param {boolean} [incRefCount=false] - Increment refCount of all geometry buffers
     */
    GeometrySystem.prototype.initGeometryVao = function (geometry, program, incRefCount) {
        if (incRefCount === void 0) { incRefCount = true; }
        this.checkCompatibility(geometry, program);
        var gl = this.gl;
        var CONTEXT_UID = this.CONTEXT_UID;
        var signature = this.getSignature(geometry, program);
        var vaoObjectHash = geometry.glVertexArrayObjects[this.CONTEXT_UID];
        var vao = vaoObjectHash[signature];
        if (vao) {
            // this will give us easy access to the vao
            vaoObjectHash[program.id] = vao;
            return vao;
        }
        var buffers = geometry.buffers;
        var attributes = geometry.attributes;
        var tempStride = {};
        var tempStart = {};
        for (var j in buffers) {
            tempStride[j] = 0;
            tempStart[j] = 0;
        }
        for (var j in attributes) {
            if (!attributes[j].size && program.attributeData[j]) {
                attributes[j].size = program.attributeData[j].size;
            }
            else if (!attributes[j].size) {
                console.warn("PIXI Geometry attribute '" + j + "' size cannot be determined (likely the bound shader does not have the attribute)"); // eslint-disable-line
            }
            tempStride[attributes[j].buffer] += attributes[j].size * byteSizeMap$1[attributes[j].type];
        }
        for (var j in attributes) {
            var attribute = attributes[j];
            var attribSize = attribute.size;
            if (attribute.stride === undefined) {
                if (tempStride[attribute.buffer] === attribSize * byteSizeMap$1[attribute.type]) {
                    attribute.stride = 0;
                }
                else {
                    attribute.stride = tempStride[attribute.buffer];
                }
            }
            if (attribute.start === undefined) {
                attribute.start = tempStart[attribute.buffer];
                tempStart[attribute.buffer] += attribSize * byteSizeMap$1[attribute.type];
            }
        }
        vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        // first update - and create the buffers!
        // only create a gl buffer if it actually gets
        for (var i = 0; i < buffers.length; i++) {
            var buffer = buffers[i];
            if (!buffer._glBuffers[CONTEXT_UID]) {
                buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
                this.managedBuffers[buffer.id] = buffer;
                buffer.disposeRunner.add(this);
            }
            if (incRefCount) {
                buffer._glBuffers[CONTEXT_UID].refCount++;
            }
        }
        // TODO - maybe make this a data object?
        // lets wait to see if we need to first!
        this.activateVao(geometry, program);
        this._activeVao = vao;
        // add it to the cache!
        vaoObjectHash[program.id] = vao;
        vaoObjectHash[signature] = vao;
        return vao;
    };
    /**
     * Disposes buffer
     * @param {PIXI.Buffer} buffer - buffer with data
     * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */
    GeometrySystem.prototype.disposeBuffer = function (buffer, contextLost) {
        if (!this.managedBuffers[buffer.id]) {
            return;
        }
        delete this.managedBuffers[buffer.id];
        var glBuffer = buffer._glBuffers[this.CONTEXT_UID];
        var gl = this.gl;
        buffer.disposeRunner.remove(this);
        if (!glBuffer) {
            return;
        }
        if (!contextLost) {
            gl.deleteBuffer(glBuffer.buffer);
        }
        delete buffer._glBuffers[this.CONTEXT_UID];
    };
    /**
     * Disposes geometry
     * @param {PIXI.Geometry} geometry - Geometry with buffers. Only VAO will be disposed
     * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */
    GeometrySystem.prototype.disposeGeometry = function (geometry, contextLost) {
        if (!this.managedGeometries[geometry.id]) {
            return;
        }
        delete this.managedGeometries[geometry.id];
        var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
        var gl = this.gl;
        var buffers = geometry.buffers;
        geometry.disposeRunner.remove(this);
        if (!vaos) {
            return;
        }
        for (var i = 0; i < buffers.length; i++) {
            var buf = buffers[i]._glBuffers[this.CONTEXT_UID];
            buf.refCount--;
            if (buf.refCount === 0 && !contextLost) {
                this.disposeBuffer(buffers[i], contextLost);
            }
        }
        if (!contextLost) {
            for (var vaoId in vaos) {
                // delete only signatures, everything else are copies
                if (vaoId[0] === 'g') {
                    var vao = vaos[vaoId];
                    if (this._activeVao === vao) {
                        this.unbind();
                    }
                    gl.deleteVertexArray(vao);
                }
            }
        }
        delete geometry.glVertexArrayObjects[this.CONTEXT_UID];
    };
    /**
     * dispose all WebGL resources of all managed geometries and buffers
     * @param {boolean} [contextLost=false] - If context was lost, we suppress `gl.delete` calls
     */
    GeometrySystem.prototype.disposeAll = function (contextLost) {
        var all = Object.keys(this.managedGeometries);
        for (var i = 0; i < all.length; i++) {
            this.disposeGeometry(this.managedGeometries[all[i]], contextLost);
        }
        all = Object.keys(this.managedBuffers);
        for (var i = 0; i < all.length; i++) {
            this.disposeBuffer(this.managedBuffers[all[i]], contextLost);
        }
    };
    /**
     * Activate vertex array object
     *
     * @protected
     * @param {PIXI.Geometry} geometry - Geometry instance
     * @param {PIXI.Program} program - Shader program instance
     */
    GeometrySystem.prototype.activateVao = function (geometry, program) {
        var gl = this.gl;
        var CONTEXT_UID = this.CONTEXT_UID;
        var buffers = geometry.buffers;
        var attributes = geometry.attributes;
        if (geometry.indexBuffer) {
            // first update the index buffer if we have one..
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indexBuffer._glBuffers[CONTEXT_UID].buffer);
        }
        var lastBuffer = null;
        // add a new one!
        for (var j in attributes) {
            var attribute = attributes[j];
            var buffer = buffers[attribute.buffer];
            var glBuffer = buffer._glBuffers[CONTEXT_UID];
            if (program.attributeData[j]) {
                if (lastBuffer !== glBuffer) {
                    gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer.buffer);
                    lastBuffer = glBuffer;
                }
                var location = program.attributeData[j].location;
                // TODO introduce state again
                // we can optimise this for older devices that have no VAOs
                gl.enableVertexAttribArray(location);
                gl.vertexAttribPointer(location, attribute.size, attribute.type || gl.FLOAT, attribute.normalized, attribute.stride, attribute.start);
                if (attribute.instance) {
                    // TODO calculate instance count based of this...
                    if (this.hasInstance) {
                        gl.vertexAttribDivisor(location, 1);
                    }
                    else {
                        throw new Error('geometry error, GPU Instancing is not supported on this device');
                    }
                }
            }
        }
    };
    /**
     * Draw the geometry
     *
     * @param {Number} type - the type primitive to render
     * @param {Number} [size] - the number of elements to be rendered
     * @param {Number} [start] - Starting index
     * @param {Number} [instanceCount] - the number of instances of the set of elements to execute
     */
    GeometrySystem.prototype.draw = function (type, size, start, instanceCount) {
        var gl = this.gl;
        var geometry = this._activeGeometry;
        // TODO.. this should not change so maybe cache the function?
        if (geometry.indexBuffer) {
            var byteSize = geometry.indexBuffer.data.BYTES_PER_ELEMENT;
            var glType = byteSize === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
            if (byteSize === 2 || (byteSize === 4 && this.canUseUInt32ElementIndex)) {
                if (geometry.instanced) {
                    /* eslint-disable max-len */
                    gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize, instanceCount || 1);
                    /* eslint-enable max-len */
                }
                else {
                    /* eslint-disable max-len */
                    gl.drawElements(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize);
                    /* eslint-enable max-len */
                }
            }
            else {
                console.warn('unsupported index buffer type: uint32');
            }
        }
        else if (geometry.instanced) {
            // TODO need a better way to calculate size..
            gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
        }
        else {
            gl.drawArrays(type, start, size || geometry.getSize());
        }
        return this;
    };
    /**
     * Unbind/reset everything
     * @protected
     */
    GeometrySystem.prototype.unbind = function () {
        this.gl.bindVertexArray(null);
        this._activeVao = null;
        this._activeGeometry = null;
    };
    return GeometrySystem;
}(System));

/**
 * Component for masked elements
 *
 * Holds mask mode and temporary data about current mask
 *
 * @class
 * @memberof PIXI
 */
var MaskData = /** @class */ (function () {
    /**
     * Create MaskData
     *
     * @param {PIXI.DisplayObject} [maskObject=null] - object that describes the mask
     */
    function MaskData(maskObject) {
        if (maskObject === void 0) { maskObject = null; }
        /**
         * Mask type
         * @member {PIXI.MASK_TYPES}
         */
        this.type = MASK_TYPES.NONE;
        /**
         * Whether we know the mask type beforehand
         * @member {boolean}
         * @default true
         */
        this.autoDetect = true;
        /**
         * Which element we use to mask
         * @member {PIXI.DisplayObject}
         */
        this.maskObject = maskObject || null;
        /**
         * Whether it belongs to MaskSystem pool
         * @member {boolean}
         */
        this.pooled = false;
        /**
         * Indicator of the type
         * @member {boolean}
         */
        this.isMaskData = true;
        /**
         * Stencil counter above the mask in stack
         * @member {number}
         * @private
         */
        this._stencilCounter = 0;
        /**
         * Scissor counter above the mask in stack
         * @member {number}
         * @private
         */
        this._scissorCounter = 0;
        /**
         * Scissor operation above the mask in stack.
         * Null if _scissorCounter is zero, rectangle instance if positive.
         * @member {PIXI.Rectangle}
         */
        this._scissorRect = null;
        /**
         * Targeted element. Temporary variable set by MaskSystem
         * @member {PIXI.DisplayObject}
         * @private
         */
        this._target = null;
    }
    /**
     * resets the mask data after popMask()
     */
    MaskData.prototype.reset = function () {
        if (this.pooled) {
            this.maskObject = null;
            this.type = MASK_TYPES.NONE;
            this.autoDetect = true;
        }
        this._target = null;
    };
    /**
     * copies counters from maskData above, called from pushMask()
     * @param {PIXI.MaskData|null} maskAbove
     */
    MaskData.prototype.copyCountersOrReset = function (maskAbove) {
        if (maskAbove) {
            this._stencilCounter = maskAbove._stencilCounter;
            this._scissorCounter = maskAbove._scissorCounter;
            this._scissorRect = maskAbove._scissorRect;
        }
        else {
            this._stencilCounter = 0;
            this._scissorCounter = 0;
            this._scissorRect = null;
        }
    };
    return MaskData;
}());

/**
 * @private
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param src {string} The vertex shader source as an array of strings.
 * @return {WebGLShader} the shader
 */
function compileShader(gl, type, src) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
}
/**
 * @method compileProgram
 * @private
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
 * @return {WebGLProgram} the shader program
 */
function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
    var program = gl.createProgram();
    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);
    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    if (attributeLocations) {
        for (var i in attributeLocations) {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }
    gl.linkProgram(program);
    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        if (!gl.getShaderParameter(glVertShader, gl.COMPILE_STATUS)) {
            console.warn(vertexSrc);
            console.error(gl.getShaderInfoLog(glVertShader));
        }
        if (!gl.getShaderParameter(glFragShader, gl.COMPILE_STATUS)) {
            console.warn(fragmentSrc);
            console.error(gl.getShaderInfoLog(glFragShader));
        }
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());
        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '') {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }
        gl.deleteProgram(program);
        program = null;
    }
    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);
    return program;
}

function booleanArray(size) {
    var array = new Array(size);
    for (var i = 0; i < array.length; i++) {
        array[i] = false;
    }
    return array;
}
/**
 * @method defaultValue
 * @memberof PIXI.glCore.shader
 * @param type {String} Type of value
 * @param size {Number}
 * @private
 */
function defaultValue(type, size) {
    switch (type) {
        case 'float':
            return 0;
        case 'vec2':
            return new Float32Array(2 * size);
        case 'vec3':
            return new Float32Array(3 * size);
        case 'vec4':
            return new Float32Array(4 * size);
        case 'int':
        case 'sampler2D':
        case 'sampler2DArray':
            return 0;
        case 'ivec2':
            return new Int32Array(2 * size);
        case 'ivec3':
            return new Int32Array(3 * size);
        case 'ivec4':
            return new Int32Array(4 * size);
        case 'bool':
            return false;
        case 'bvec2':
            return booleanArray(2 * size);
        case 'bvec3':
            return booleanArray(3 * size);
        case 'bvec4':
            return booleanArray(4 * size);
        case 'mat2':
            return new Float32Array([1, 0,
                0, 1]);
        case 'mat3':
            return new Float32Array([1, 0, 0,
                0, 1, 0,
                0, 0, 1]);
        case 'mat4':
            return new Float32Array([1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1]);
    }
    return null;
}

var unknownContext = {};
var context = unknownContext;
/**
 * returns a little WebGL context to use for program inspection.
 *
 * @static
 * @private
 * @returns {WebGLRenderingContext} a gl context to test with
 */
function getTestContext() {
    if (context === unknownContext || (context && context.isContextLost())) {
        var canvas = document.createElement('canvas');
        var gl = void 0;
        if (settings.PREFER_ENV >= ENV.WEBGL2) {
            gl = canvas.getContext('webgl2', {});
        }
        if (!gl) {
            gl = canvas.getContext('webgl', {})
                || canvas.getContext('experimental-webgl', {});
            if (!gl) {
                // fail, not able to get a context
                gl = null;
            }
            else {
                // for shader testing..
                gl.getExtension('WEBGL_draw_buffers');
            }
        }
        context = gl;
    }
    return context;
}

var maxFragmentPrecision;
function getMaxFragmentPrecision() {
    if (!maxFragmentPrecision) {
        maxFragmentPrecision = PRECISION.MEDIUM;
        var gl = getTestContext();
        if (gl) {
            if (gl.getShaderPrecisionFormat) {
                var shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
                maxFragmentPrecision = shaderFragment.precision ? PRECISION.HIGH : PRECISION.MEDIUM;
            }
        }
    }
    return maxFragmentPrecision;
}

/**
 * Sets the float precision on the shader, ensuring the device supports the request precision.
 * If the precision is already present, it just ensures that the device is able to handle it.
 *
 * @private
 * @param {string} src - The shader source
 * @param {string} requestedPrecision - The request float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 * @param {string} maxSupportedPrecision - The maximum precision the shader supports.
 *
 * @return {string} modified shader source
 */
function setPrecision(src, requestedPrecision, maxSupportedPrecision) {
    if (src.substring(0, 9) !== 'precision') {
        // no precision supplied, so PixiJS will add the requested level.
        var precision = requestedPrecision;
        // If highp is requested but not supported, downgrade precision to a level all devices support.
        if (requestedPrecision === PRECISION.HIGH && maxSupportedPrecision !== PRECISION.HIGH) {
            precision = PRECISION.MEDIUM;
        }
        return "precision " + precision + " float;\n" + src;
    }
    else if (maxSupportedPrecision !== PRECISION.HIGH && src.substring(0, 15) === 'precision highp') {
        // precision was supplied, but at a level this device does not support, so downgrading to mediump.
        return src.replace('precision highp', 'precision mediump');
    }
    return src;
}

var GLSL_TO_SIZE = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1,
};
/**
 * @private
 * @method mapSize
 * @memberof PIXI.glCore.shader
 * @param type {String}
 * @return {Number}
 */
function mapSize(type) {
    return GLSL_TO_SIZE[type];
}

var GL_TABLE = null;
var GL_TO_GLSL_TYPES = {
    FLOAT: 'float',
    FLOAT_VEC2: 'vec2',
    FLOAT_VEC3: 'vec3',
    FLOAT_VEC4: 'vec4',
    INT: 'int',
    INT_VEC2: 'ivec2',
    INT_VEC3: 'ivec3',
    INT_VEC4: 'ivec4',
    BOOL: 'bool',
    BOOL_VEC2: 'bvec2',
    BOOL_VEC3: 'bvec3',
    BOOL_VEC4: 'bvec4',
    FLOAT_MAT2: 'mat2',
    FLOAT_MAT3: 'mat3',
    FLOAT_MAT4: 'mat4',
    SAMPLER_2D: 'sampler2D',
    INT_SAMPLER_2D: 'sampler2D',
    UNSIGNED_INT_SAMPLER_2D: 'sampler2D',
    SAMPLER_CUBE: 'samplerCube',
    INT_SAMPLER_CUBE: 'samplerCube',
    UNSIGNED_INT_SAMPLER_CUBE: 'samplerCube',
    SAMPLER_2D_ARRAY: 'sampler2DArray',
    INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
    UNSIGNED_INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function mapType(gl, type) {
    if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);
        GL_TABLE = {};
        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }
    return GL_TABLE[type];
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Parsers, each one of these will take a look at the type of shader property and uniform.
// if they pass the test function then the code function is called that returns a the shader upload code for that uniform.
// Shader upload code is automagically generated with these parsers.
// If no parser is valid then the default upload functions are used.
// exposing Parsers means that custom upload logic can be added to pixi's shaders.
// A good example would be a pixi rectangle can be directly set on a uniform.
// If the shader sees it it knows how to upload the rectangle structure as a vec4
// format is as follows:
//
// {
//     test: (data, uniform) => {} <--- test is this code should be used for this uniform
//     code: (name, uniform) => {} <--- returns the string of the piece of code that uploads the uniform
// }
var uniformParsers = [
    // a float cache layer
    {
        test: function (data) {
            return data.type === 'float' && data.size === 1;
        },
        code: function (name) {
            return "\n            if(uv[\"" + name + "\"] !== ud[\"" + name + "\"].value)\n            {\n                ud[\"" + name + "\"].value = uv[\"" + name + "\"]\n                gl.uniform1f(ud[\"" + name + "\"].location, uv[\"" + name + "\"])\n            }\n            ";
        },
    },
    // handling samplers
    {
        test: function (data) {
            // eslint-disable-next-line max-len
            return (data.type === 'sampler2D' || data.type === 'samplerCube' || data.type === 'sampler2DArray') && data.size === 1 && !data.isArray;
        },
        code: function (name) { return "t = syncData.textureCount++;\n\n            renderer.texture.bind(uv[\"" + name + "\"], t);\n\n            if(ud[\"" + name + "\"].value !== t)\n            {\n                ud[\"" + name + "\"].value = t;\n                gl.uniform1i(ud[\"" + name + "\"].location, t);\n; // eslint-disable-line max-len\n            }"; },
    },
    // uploading pixi matrix object to mat3
    {
        test: function (data, uniform) {
            return data.type === 'mat3' && data.size === 1 && uniform.a !== undefined;
        },
        code: function (name) {
            // TODO and some smart caching dirty ids here!
            return "\n            gl.uniformMatrix3fv(ud[\"" + name + "\"].location, false, uv[\"" + name + "\"].toArray(true));\n            ";
        },
    },
    // uploading a pixi point as a vec2 with caching layer
    {
        test: function (data, uniform) {
            return data.type === 'vec2' && data.size === 1 && uniform.x !== undefined;
        },
        code: function (name) {
            return "\n                cv = ud[\"" + name + "\"].value;\n                v = uv[\"" + name + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud[\"" + name + "\"].location, v.x, v.y);\n                }";
        },
    },
    // caching layer for a vec2
    {
        test: function (data) {
            return data.type === 'vec2' && data.size === 1;
        },
        code: function (name) {
            return "\n                cv = ud[\"" + name + "\"].value;\n                v = uv[\"" + name + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud[\"" + name + "\"].location, v[0], v[1]);\n                }\n            ";
        },
    },
    // upload a pixi rectangle as a vec4 with caching layer
    {
        test: function (data, uniform) {
            return data.type === 'vec4' && data.size === 1 && uniform.width !== undefined;
        },
        code: function (name) {
            return "\n                cv = ud[\"" + name + "\"].value;\n                v = uv[\"" + name + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud[\"" + name + "\"].location, v.x, v.y, v.width, v.height)\n                }";
        },
    },
    // a caching layer for vec4 uploading
    {
        test: function (data) {
            return data.type === 'vec4' && data.size === 1;
        },
        code: function (name) {
            return "\n                cv = ud[\"" + name + "\"].value;\n                v = uv[\"" + name + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud[\"" + name + "\"].location, v[0], v[1], v[2], v[3])\n                }";
        },
    } ];

// cv = CachedValue
// v = value
// ud = uniformData
// uv = uniformValue
// l = location
var GLSL_TO_SINGLE_SETTERS_CACHED = {
    float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
    vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
    vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
    vec4: 'gl.uniform4f(location, v[0], v[1], v[2], v[3])',
    int: 'gl.uniform1i(location, v)',
    ivec2: 'gl.uniform2i(location, v[0], v[1])',
    ivec3: 'gl.uniform3i(location, v[0], v[1], v[2])',
    ivec4: 'gl.uniform4i(location, v[0], v[1], v[2], v[3])',
    bool: 'gl.uniform1i(location, v)',
    bvec2: 'gl.uniform2i(location, v[0], v[1])',
    bvec3: 'gl.uniform3i(location, v[0], v[1], v[2])',
    bvec4: 'gl.uniform4i(location, v[0], v[1], v[2], v[3])',
    mat2: 'gl.uniformMatrix2fv(location, false, v)',
    mat3: 'gl.uniformMatrix3fv(location, false, v)',
    mat4: 'gl.uniformMatrix4fv(location, false, v)',
    sampler2D: 'gl.uniform1i(location, v)',
    samplerCube: 'gl.uniform1i(location, v)',
    sampler2DArray: 'gl.uniform1i(location, v)',
};
var GLSL_TO_ARRAY_SETTERS = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: 'gl.uniform4fv(location, v)',
    mat4: 'gl.uniformMatrix4fv(location, false, v)',
    mat3: 'gl.uniformMatrix3fv(location, false, v)',
    mat2: 'gl.uniformMatrix2fv(location, false, v)',
    int: 'gl.uniform1iv(location, v)',
    ivec2: 'gl.uniform2iv(location, v)',
    ivec3: 'gl.uniform3iv(location, v)',
    ivec4: 'gl.uniform4iv(location, v)',
    bool: 'gl.uniform1iv(location, v)',
    bvec2: 'gl.uniform2iv(location, v)',
    bvec3: 'gl.uniform3iv(location, v)',
    bvec4: 'gl.uniform4iv(location, v)',
    sampler2D: 'gl.uniform1iv(location, v)',
    samplerCube: 'gl.uniform1iv(location, v)',
    sampler2DArray: 'gl.uniform1iv(location, v)',
};
function generateUniformsSync(group, uniformData) {
    var funcFragments = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "];
    for (var i in group.uniforms) {
        var data = uniformData[i];
        if (!data) {
            if (group.uniforms[i].group) {
                funcFragments.push("\n                    renderer.shader.syncUniformGroup(uv[\"" + i + "\"], syncData);\n                ");
            }
            continue;
        }
        var uniform = group.uniforms[i];
        var parsed = false;
        for (var j = 0; j < uniformParsers.length; j++) {
            if (uniformParsers[j].test(data, uniform)) {
                funcFragments.push(uniformParsers[j].code(i, uniform));
                parsed = true;
                break;
            }
        }
        if (!parsed) {
            var templateType = (data.size === 1) ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;
            var template = templateType[data.type].replace('location', "ud[\"" + i + "\"].location");
            funcFragments.push("\n            cv = ud[\"" + i + "\"].value;\n            v = uv[\"" + i + "\"];\n            " + template + ";");
        }
    }
    /**
     * the introduction of syncData is to solve an issue where textures in uniform groups are not set correctly
     * the texture count was always starting from 0 in each group. This needs to increment each time a texture is used
     * no matter which group is being used
     *
     */
    // eslint-disable-next-line no-new-func
    return new Function('ud', 'uv', 'renderer', 'syncData', funcFragments.join('\n'));
}

var fragTemplate = [
    'precision mediump float;',
    'void main(void){',
    'float test = 0.1;',
    '%forloop%',
    'gl_FragColor = vec4(0.0);',
    '}' ].join('\n');
function generateIfTestSrc(maxIfs) {
    var src = '';
    for (var i = 0; i < maxIfs; ++i) {
        if (i > 0) {
            src += '\nelse ';
        }
        if (i < maxIfs - 1) {
            src += "if(test == " + i + ".0){}";
        }
    }
    return src;
}
function checkMaxIfStatementsInShader(maxIfs, gl) {
    if (maxIfs === 0) {
        throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
    }
    var shader = gl.createShader(gl.FRAGMENT_SHADER);
    while (true) // eslint-disable-line no-constant-condition
     {
        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
        gl.shaderSource(shader, fragmentSrc);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            maxIfs = (maxIfs / 2) | 0;
        }
        else {
            // valid!
            break;
        }
    }
    return maxIfs;
}

// Cache the result to prevent running this over and over
var unsafeEval;
/**
 * Not all platforms allow to generate function code (e.g., `new Function`).
 * this provides the platform-level detection.
 *
 * @private
 * @returns {boolean}
 */
function unsafeEvalSupported() {
    if (typeof unsafeEval === 'boolean') {
        return unsafeEval;
    }
    try {
        /* eslint-disable no-new-func */
        var func = new Function('param1', 'param2', 'param3', 'return param1[param2] === param3;');
        /* eslint-enable no-new-func */
        unsafeEval = func({ a: 'b' }, 'a', 'b') === true;
    }
    catch (e) {
        unsafeEval = false;
    }
    return unsafeEval;
}

var defaultFragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";

var defaultVertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";

var UID$3 = 0;
var nameCache = {};
/**
 * Helper class to create a shader program.
 *
 * @class
 * @memberof PIXI
 */
var Program = /** @class */ (function () {
    /**
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {string} [name] - Name for shader
     */
    function Program(vertexSrc, fragmentSrc, name) {
        if (name === void 0) { name = 'pixi-shader'; }
        this.id = UID$3++;
        /**
         * The vertex shader.
         *
         * @member {string}
         */
        this.vertexSrc = vertexSrc || Program.defaultVertexSrc;
        /**
         * The fragment shader.
         *
         * @member {string}
         */
        this.fragmentSrc = fragmentSrc || Program.defaultFragmentSrc;
        this.vertexSrc = this.vertexSrc.trim();
        this.fragmentSrc = this.fragmentSrc.trim();
        if (this.vertexSrc.substring(0, 8) !== '#version') {
            name = name.replace(/\s+/g, '-');
            if (nameCache[name]) {
                nameCache[name]++;
                name += "-" + nameCache[name];
            }
            else {
                nameCache[name] = 1;
            }
            this.vertexSrc = "#define SHADER_NAME " + name + "\n" + this.vertexSrc;
            this.fragmentSrc = "#define SHADER_NAME " + name + "\n" + this.fragmentSrc;
            this.vertexSrc = setPrecision(this.vertexSrc, settings.PRECISION_VERTEX, PRECISION.HIGH);
            this.fragmentSrc = setPrecision(this.fragmentSrc, settings.PRECISION_FRAGMENT, getMaxFragmentPrecision());
        }
        // currently this does not extract structs only default types
        this.extractData(this.vertexSrc, this.fragmentSrc);
        // this is where we store shader references..
        this.glPrograms = {};
        this.syncUniforms = null;
    }
    /**
     * Extracts the data for a buy creating a small test program
     * or reading the src directly.
     * @protected
     *
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     */
    Program.prototype.extractData = function (vertexSrc, fragmentSrc) {
        var gl = getTestContext();
        if (gl) {
            var program = compileProgram(gl, vertexSrc, fragmentSrc);
            this.attributeData = this.getAttributeData(program, gl);
            this.uniformData = this.getUniformData(program, gl);
            gl.deleteProgram(program);
        }
        else {
            this.uniformData = {};
            this.attributeData = {};
        }
    };
    /**
     * returns the attribute data from the program
     * @private
     *
     * @param {WebGLProgram} [program] - the WebGL program
     * @param {WebGLRenderingContext} [gl] - the WebGL context
     *
     * @returns {object} the attribute data for this program
     */
    Program.prototype.getAttributeData = function (program, gl) {
        var attributes = {};
        var attributesArray = [];
        var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < totalAttributes; i++) {
            var attribData = gl.getActiveAttrib(program, i);
            var type = mapType(gl, attribData.type);
            /*eslint-disable */
            var data = {
                type: type,
                name: attribData.name,
                size: mapSize(type),
                location: 0,
            };
            /* eslint-enable */
            attributes[attribData.name] = data;
            attributesArray.push(data);
        }
        attributesArray.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; }); // eslint-disable-line no-confusing-arrow
        for (var i = 0; i < attributesArray.length; i++) {
            attributesArray[i].location = i;
        }
        return attributes;
    };
    /**
     * returns the uniform data from the program
     * @private
     *
     * @param {webGL-program} [program] - the webgl program
     * @param {context} [gl] - the WebGL context
     *
     * @returns {object} the uniform data for this program
     */
    Program.prototype.getUniformData = function (program, gl) {
        var uniforms = {};
        var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        // TODO expose this as a prop?
        // const maskRegex = new RegExp('^(projectionMatrix|uSampler|translationMatrix)$');
        // const maskRegex = new RegExp('^(projectionMatrix|uSampler|translationMatrix)$');
        for (var i = 0; i < totalUniforms; i++) {
            var uniformData = gl.getActiveUniform(program, i);
            var name = uniformData.name.replace(/\[.*?\]$/, '');
            var isArray = uniformData.name.match(/\[.*?\]$/);
            var type = mapType(gl, uniformData.type);
            /*eslint-disable */
            uniforms[name] = {
                type: type,
                size: uniformData.size,
                isArray: isArray,
                value: defaultValue(type, uniformData.size),
            };
            /* eslint-enable */
        }
        return uniforms;
    };
    Object.defineProperty(Program, "defaultVertexSrc", {
        /**
         * The default vertex shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        get: function () {
            return defaultVertex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Program, "defaultFragmentSrc", {
        /**
         * The default fragment shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        get: function () {
            return defaultFragment;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * A short hand function to create a program based of a vertex and fragment shader
     * this method will also check to see if there is a cached program.
     *
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {string} [name=pixi-shader] - Name for shader
     *
     * @returns {PIXI.Program} an shiny new Pixi shader!
     */
    Program.from = function (vertexSrc, fragmentSrc, name) {
        var key = vertexSrc + fragmentSrc;
        var program = ProgramCache[key];
        if (!program) {
            ProgramCache[key] = program = new Program(vertexSrc, fragmentSrc, name);
        }
        return program;
    };
    return Program;
}());

/**
 * A helper class for shaders
 *
 * @class
 * @memberof PIXI
 */
var Shader = /** @class */ (function () {
    /**
     * @param {PIXI.Program} [program] - The program the shader will use.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     */
    function Shader(program, uniforms) {
        /**
         * Program that the shader uses
         *
         * @member {PIXI.Program}
         */
        this.program = program;
        // lets see whats been passed in
        // uniforms should be converted to a uniform group
        if (uniforms) {
            if (uniforms instanceof UniformGroup) {
                this.uniformGroup = uniforms;
            }
            else {
                this.uniformGroup = new UniformGroup(uniforms);
            }
        }
        else {
            this.uniformGroup = new UniformGroup({});
        }
        // time to build some getters and setters!
        // I guess down the line this could sort of generate an instruction list rather than use dirty ids?
        // does the trick for now though!
        for (var i in program.uniformData) {
            if (this.uniformGroup.uniforms[i] instanceof Array) {
                this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]);
            }
        }
    }
    // TODO move to shader system..
    Shader.prototype.checkUniformExists = function (name, group) {
        if (group.uniforms[name]) {
            return true;
        }
        for (var i in group.uniforms) {
            var uniform = group.uniforms[i];
            if (uniform.group) {
                if (this.checkUniformExists(name, uniform)) {
                    return true;
                }
            }
        }
        return false;
    };
    Shader.prototype.destroy = function () {
        // usage count on programs?
        // remove if not used!
        this.uniformGroup = null;
    };
    Object.defineProperty(Shader.prototype, "uniforms", {
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        get: function () {
            return this.uniformGroup.uniforms;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * A short hand function to create a shader based of a vertex and fragment shader
     *
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     *
     * @returns {PIXI.Shader} an shiny new Pixi shader!
     */
    Shader.from = function (vertexSrc, fragmentSrc, uniforms) {
        var program = Program.from(vertexSrc, fragmentSrc);
        return new Shader(program, uniforms);
    };
    return Shader;
}());

/* eslint-disable max-len */
var BLEND = 0;
var OFFSET = 1;
var CULLING = 2;
var DEPTH_TEST = 3;
var WINDING = 4;
/**
 * This is a WebGL state, and is is passed The WebGL StateManager.
 *
 * Each mesh rendered may require WebGL to be in a different state.
 * For example you may want different blend mode or to enable polygon offsets
 *
 * @class
 * @memberof PIXI
 */
var State = /** @class */ (function () {
    function State() {
        this.data = 0;
        this.blendMode = BLEND_MODES.NORMAL;
        this.polygonOffset = 0;
        this.blend = true;
        //  this.depthTest = true;
    }
    Object.defineProperty(State.prototype, "blend", {
        /**
         * Activates blending of the computed fragment color values
         *
         * @member {boolean}
         */
        get: function () {
            return !!(this.data & (1 << BLEND));
        },
        set: function (value) {
            if (!!(this.data & (1 << BLEND)) !== value) {
                this.data ^= (1 << BLEND);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "offsets", {
        /**
         * Activates adding an offset to depth values of polygon's fragments
         *
         * @member {boolean}
         * @default false
         */
        get: function () {
            return !!(this.data & (1 << OFFSET));
        },
        set: function (value) {
            if (!!(this.data & (1 << OFFSET)) !== value) {
                this.data ^= (1 << OFFSET);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "culling", {
        /**
         * Activates culling of polygons.
         *
         * @member {boolean}
         * @default false
         */
        get: function () {
            return !!(this.data & (1 << CULLING));
        },
        set: function (value) {
            if (!!(this.data & (1 << CULLING)) !== value) {
                this.data ^= (1 << CULLING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "depthTest", {
        /**
         * Activates depth comparisons and updates to the depth buffer.
         *
         * @member {boolean}
         * @default false
         */
        get: function () {
            return !!(this.data & (1 << DEPTH_TEST));
        },
        set: function (value) {
            if (!!(this.data & (1 << DEPTH_TEST)) !== value) {
                this.data ^= (1 << DEPTH_TEST);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "clockwiseFrontFace", {
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @member {boolean}
         * @default false
         */
        get: function () {
            return !!(this.data & (1 << WINDING));
        },
        set: function (value) {
            if (!!(this.data & (1 << WINDING)) !== value) {
                this.data ^= (1 << WINDING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "blendMode", {
        /**
         * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        get: function () {
            return this._blendMode;
        },
        set: function (value) {
            this.blend = (value !== BLEND_MODES.NONE);
            this._blendMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(State.prototype, "polygonOffset", {
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         *
         * @member {number}
         * @default 0
         */
        get: function () {
            return this._polygonOffset;
        },
        set: function (value) {
            this.offsets = !!value;
            this._polygonOffset = value;
        },
        enumerable: false,
        configurable: true
    });
    State.for2d = function () {
        var state = new State();
        state.depthTest = false;
        state.blend = true;
        return state;
    };
    return State;
}());

var defaultVertex$1 = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

var defaultFragment$1 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";

/**
 * Filter is a special type of WebGL shader that is applied to the screen.
 *
 * {@link http://pixijs.io/examples/#/filters/blur-filter.js Example} of the
 * {@link PIXI.filters.BlurFilter BlurFilter}.
 *
 * ### Usage
 * Filters can be applied to any DisplayObject or Container.
 * PixiJS' `FilterSystem` renders the container into temporary Framebuffer,
 * then filter renders it to the screen.
 * Multiple filters can be added to the `filters` array property and stacked on each other.
 *
 * ```
 * const filter = new PIXI.Filter(myShaderVert, myShaderFrag, { myUniform: 0.5 });
 * const container = new PIXI.Container();
 * container.filters = [filter];
 * ```
 *
 * ### Previous Version Differences
 *
 * In PixiJS **v3**, a filter was always applied to _whole screen_.
 *
 * In PixiJS **v4**, a filter can be applied _only part of the screen_.
 * Developers had to create a set of uniforms to deal with coordinates.
 *
 * In PixiJS **v5** combines _both approaches_.
 * Developers can use normal coordinates of v3 and then allow filter to use partial Framebuffers,
 * bringing those extra uniforms into account.
 *
 * Also be aware that we have changed default vertex shader, please consult
 * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
 *
 * ### Built-in Uniforms
 *
 * PixiJS viewport uses screen (CSS) coordinates, `(0, 0, renderer.screen.width, renderer.screen.height)`,
 * and `projectionMatrix` uniform maps it to the gl viewport.
 *
 * **uSampler**
 *
 * The most important uniform is the input texture that container was rendered into.
 * _Important note: as with all Framebuffers in PixiJS, both input and output are
 * premultiplied by alpha._
 *
 * By default, input normalized coordinates are passed to fragment shader with `vTextureCoord`.
 * Use it to sample the input.
 *
 * ```
 * const fragment = `
 * varying vec2 vTextureCoord;
 * uniform sampler2D uSampler;
 * void main(void)
 * {
 *    gl_FragColor = texture2D(uSampler, vTextureCoord);
 * }
 * `;
 *
 * const myFilter = new PIXI.Filter(null, fragment);
 * ```
 *
 * This filter is just one uniform less than {@link PIXI.filters.AlphaFilter AlphaFilter}.
 *
 * **outputFrame**
 *
 * The `outputFrame` holds the rectangle where filter is applied in screen (CSS) coordinates.
 * It's the same as `renderer.screen` for a fullscreen filter.
 * Only a part of  `outputFrame.zw` size of temporary Framebuffer is used,
 * `(0, 0, outputFrame.width, outputFrame.height)`,
 *
 * Filters uses this quad to normalized (0-1) space, its passed into `aVertexPosition` attribute.
 * To calculate vertex position in screen space using normalized (0-1) space:
 *
 * ```
 * vec4 filterVertexPosition( void )
 * {
 *     vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
 *     return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
 * }
 * ```
 *
 * **inputSize**
 *
 * Temporary framebuffer is different, it can be either the size of screen, either power-of-two.
 * The `inputSize.xy` are size of temporary framebuffer that holds input.
 * The `inputSize.zw` is inverted, it's a shortcut to evade division inside the shader.
 *
 * Set `inputSize.xy = outputFrame.zw` for a fullscreen filter.
 *
 * To calculate input normalized coordinate, you have to map it to filter normalized space.
 * Multiply by `outputFrame.zw` to get input coordinate.
 * Divide by `inputSize.xy` to get input normalized coordinate.
 *
 * ```
 * vec2 filterTextureCoord( void )
 * {
 *     return aVertexPosition * (outputFrame.zw * inputSize.zw); // same as /inputSize.xy
 * }
 * ```
 * **resolution**
 *
 * The `resolution` is the ratio of screen (CSS) pixels to real pixels.
 *
 * **inputPixel**
 *
 * `inputPixel.xy` is the size of framebuffer in real pixels, same as `inputSize.xy * resolution`
 * `inputPixel.zw` is inverted `inputPixel.xy`.
 *
 * It's handy for filters that use neighbour pixels, like {@link PIXI.filters.FXAAFilter FXAAFilter}.
 *
 * **inputClamp**
 *
 * If you try to get info from outside of used part of Framebuffer - you'll get undefined behaviour.
 * For displacements, coordinates has to be clamped.
 *
 * The `inputClamp.xy` is left-top pixel center, you may ignore it, because we use left-top part of Framebuffer
 * `inputClamp.zw` is bottom-right pixel center.
 *
 * ```
 * vec4 color = texture2D(uSampler, clamp(modifigedTextureCoord, inputClamp.xy, inputClamp.zw))
 * ```
 * OR
 * ```
 * vec4 color = texture2D(uSampler, min(modifigedTextureCoord, inputClamp.zw))
 * ```
 *
 * ### Additional Information
 *
 * Complete documentation on Filter usage is located in the
 * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
 *
 * Since PixiJS only had a handful of built-in filters, additional filters can be downloaded
 * {@link https://github.com/pixijs/pixi-filters here} from the PixiJS Filters repository.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 */
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    /**
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     */
    function Filter(vertexSrc, fragmentSrc, uniforms) {
        var _this = this;
        var program = Program.from(vertexSrc || Filter.defaultVertexSrc, fragmentSrc || Filter.defaultFragmentSrc);
        _this = _super.call(this, program, uniforms) || this;
        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number}
         */
        _this.padding = 0;
        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number}
         */
        _this.resolution = settings.FILTER_RESOLUTION;
        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean}
         */
        _this.enabled = true;
        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean}
         */
        _this.autoFit = true;
        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean}
         * @readonly
         */
        _this.legacy = !!_this.program.attributeData.aTextureCoord;
        /**
         * The WebGL state the filter requires to render
         * @member {PIXI.State}
         */
        _this.state = new State();
        return _this;
    }
    /**
     * Applies the filter
     *
     * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {PIXI.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
     * @param {object} [currentState] - It's current state of filter.
     *        There are some useful properties in the currentState :
     *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
     */
    Filter.prototype.apply = function (filterManager, input, output, clearMode, _currentState) {
        // do as you please!
        filterManager.applyFilter(this, input, output, clearMode);
        // or just do a regular render..
    };
    Object.defineProperty(Filter.prototype, "blendMode", {
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         */
        get: function () {
            return this.state.blendMode;
        },
        set: function (value) {
            this.state.blendMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter, "defaultVertexSrc", {
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        get: function () {
            return defaultVertex$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter, "defaultFragmentSrc", {
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        get: function () {
            return defaultFragment$1;
        },
        enumerable: false,
        configurable: true
    });
    return Filter;
}(Shader));

var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";

var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";

var tempMat = new Matrix();
/**
 * Class controls uv mapping from Texture normal space to BaseTexture normal space.
 *
 * Takes `trim` and `rotate` into account. May contain clamp settings for Meshes and TilingSprite.
 *
 * Can be used in Texture `uvMatrix` field, or separately, you can use different clamp settings on the same texture.
 * If you want to add support for texture region of certain feature or filter, that's what you're looking for.
 *
 * Takes track of Texture changes through `_lastTextureID` private field.
 * Use `update()` method call to track it from outside.
 *
 * @see PIXI.Texture
 * @see PIXI.Mesh
 * @see PIXI.TilingSprite
 * @class
 * @memberof PIXI
 */
var TextureMatrix = /** @class */ (function () {
    /**
     *
     * @param {PIXI.Texture} texture - observed texture
     * @param {number} [clampMargin] - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     * @constructor
     */
    function TextureMatrix(texture, clampMargin) {
        this._texture = texture;
        /**
         * Matrix operation that converts texture region coords to texture coords
         * @member {PIXI.Matrix}
         * @readonly
         */
        this.mapCoord = new Matrix();
        /**
         * Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.
         * Calculated based on clampOffset.
         * @member {Float32Array}
         * @readonly
         */
        this.uClampFrame = new Float32Array(4);
        /**
         * Normalized clamp offset.
         * Calculated based on clampOffset.
         * @member {Float32Array}
         * @readonly
         */
        this.uClampOffset = new Float32Array(2);
        /**
         * Tracks Texture frame changes
         * @member {number}
         * @protected
         */
        this._textureID = -1;
        /**
         * Tracks Texture frame changes
         * @member {number}
         * @protected
         */
        this._updateID = 0;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
         *
         * @default 0
         * @member {number}
         */
        this.clampOffset = 0;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number}
         */
        this.clampMargin = (typeof clampMargin === 'undefined') ? 0.5 : clampMargin;
        /**
         * If texture size is the same as baseTexture
         * @member {boolean}
         * @default false
         * @readonly
         */
        this.isSimple = false;
    }
    Object.defineProperty(TextureMatrix.prototype, "texture", {
        /**
         * texture property
         * @member {PIXI.Texture}
         */
        get: function () {
            return this._texture;
        },
        set: function (value) {
            this._texture = value;
            this._textureID = -1;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Multiplies uvs array to transform
     * @param {Float32Array} uvs - mesh uvs
     * @param {Float32Array} [out=uvs] output
     * @returns {Float32Array} output
     */
    TextureMatrix.prototype.multiplyUvs = function (uvs, out) {
        if (out === undefined) {
            out = uvs;
        }
        var mat = this.mapCoord;
        for (var i = 0; i < uvs.length; i += 2) {
            var x = uvs[i];
            var y = uvs[i + 1];
            out[i] = (x * mat.a) + (y * mat.c) + mat.tx;
            out[i + 1] = (x * mat.b) + (y * mat.d) + mat.ty;
        }
        return out;
    };
    /**
     * updates matrices if texture was changed
     * @param {boolean} [forceUpdate=false] - if true, matrices will be updated any case
     * @returns {boolean} whether or not it was updated
     */
    TextureMatrix.prototype.update = function (forceUpdate) {
        var tex = this._texture;
        if (!tex || !tex.valid) {
            return false;
        }
        if (!forceUpdate
            && this._textureID === tex._updateID) {
            return false;
        }
        this._textureID = tex._updateID;
        this._updateID++;
        var uvs = tex._uvs;
        this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
        var orig = tex.orig;
        var trim = tex.trim;
        if (trim) {
            tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
            this.mapCoord.append(tempMat);
        }
        var texBase = tex.baseTexture;
        var frame = this.uClampFrame;
        var margin = this.clampMargin / texBase.resolution;
        var offset = this.clampOffset;
        frame[0] = (tex._frame.x + margin + offset) / texBase.width;
        frame[1] = (tex._frame.y + margin + offset) / texBase.height;
        frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
        frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
        this.uClampOffset[0] = offset / texBase.realWidth;
        this.uClampOffset[1] = offset / texBase.realHeight;
        this.isSimple = tex._frame.width === texBase.width
            && tex._frame.height === texBase.height
            && tex.rotate === 0;
        return true;
    };
    return TextureMatrix;
}());

/**
 * This handles a Sprite acting as a mask, as opposed to a Graphic.
 *
 * WebGL only.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 */
var SpriteMaskFilter = /** @class */ (function (_super) {
    __extends(SpriteMaskFilter, _super);
    /**
     * @param {PIXI.Sprite} sprite - the target sprite
     */
    function SpriteMaskFilter(sprite) {
        var _this = this;
        var maskMatrix = new Matrix();
        _this = _super.call(this, vertex, fragment) || this;
        sprite.renderable = false;
        /**
         * Sprite mask
         * @member {PIXI.Sprite}
         */
        _this.maskSprite = sprite;
        /**
         * Mask matrix
         * @member {PIXI.Matrix}
         */
        _this.maskMatrix = maskMatrix;
        return _this;
    }
    /**
     * Applies the filter
     *
     * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {PIXI.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
     */
    SpriteMaskFilter.prototype.apply = function (filterManager, input, output, clearMode) {
        var maskSprite = this.maskSprite;
        var tex = maskSprite._texture;
        if (!tex.valid) {
            return;
        }
        if (!tex.uvMatrix) {
            // margin = 0.0, let it bleed a bit, shader code becomes easier
            // assuming that atlas textures were made with 1-pixel padding
            tex.uvMatrix = new TextureMatrix(tex, 0.0);
        }
        tex.uvMatrix.update();
        this.uniforms.npmAlpha = tex.baseTexture.alphaMode ? 0.0 : 1.0;
        this.uniforms.mask = tex;
        // get _normalized sprite texture coords_ and convert them to _normalized atlas texture coords_ with `prepend`
        this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite)
            .prepend(tex.uvMatrix.mapCoord);
        this.uniforms.alpha = maskSprite.worldAlpha;
        this.uniforms.maskClamp = tex.uvMatrix.uClampFrame;
        filterManager.applyFilter(this, input, output, clearMode);
    };
    return SpriteMaskFilter;
}(Filter));

/**
 * System plugin to the renderer to manage masks.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var MaskSystem = /** @class */ (function (_super) {
    __extends(MaskSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function MaskSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * Enable scissor
         * @member {boolean}
         * @readonly
         */
        _this.enableScissor = false;
        /**
         * Pool of used sprite mask filters
         * @member {PIXI.SpriteMaskFilter[]}
         * @readonly
         */
        _this.alphaMaskPool = [];
        /**
         * Pool of mask data
         * @member {PIXI.MaskData[]}
         * @readonly
         */
        _this.maskDataPool = [];
        _this.maskStack = [];
        /**
         * Current index of alpha mask pool
         * @member {number}
         * @default 0
         * @readonly
         */
        _this.alphaMaskIndex = 0;
        return _this;
    }
    /**
     * Changes the mask stack that is used by this System.
     *
     * @param {PIXI.MaskData[]} maskStack - The mask stack
     */
    MaskSystem.prototype.setMaskStack = function (maskStack) {
        this.maskStack = maskStack;
        this.renderer.scissor.setMaskStack(maskStack);
        this.renderer.stencil.setMaskStack(maskStack);
    };
    /**
     * Applies the Mask and adds it to the current filter stack.
     * Renderer batch must be flushed beforehand.
     *
     * @param {PIXI.DisplayObject} target - Display Object to push the mask to
     * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskData - The masking data.
     */
    MaskSystem.prototype.push = function (target, maskDataOrTarget) {
        var maskData = maskDataOrTarget;
        if (!maskData.isMaskData) {
            var d = this.maskDataPool.pop() || new MaskData();
            d.pooled = true;
            d.maskObject = maskDataOrTarget;
            maskData = d;
        }
        if (maskData.autoDetect) {
            this.detect(maskData);
        }
        maskData.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]);
        maskData._target = target;
        switch (maskData.type) {
            case MASK_TYPES.SCISSOR:
                this.maskStack.push(maskData);
                this.renderer.scissor.push(maskData);
                break;
            case MASK_TYPES.STENCIL:
                this.maskStack.push(maskData);
                this.renderer.stencil.push(maskData);
                break;
            case MASK_TYPES.SPRITE:
                maskData.copyCountersOrReset(null);
                this.pushSpriteMask(maskData);
                this.maskStack.push(maskData);
                break;
        }
    };
    /**
     * Removes the last mask from the mask stack and doesn't return it.
     * Renderer batch must be flushed beforehand.
     *
     * @param {PIXI.DisplayObject} target - Display Object to pop the mask from
     */
    MaskSystem.prototype.pop = function (target) {
        var maskData = this.maskStack.pop();
        if (!maskData || maskData._target !== target) {
            // TODO: add an assert when we have it
            return;
        }
        switch (maskData.type) {
            case MASK_TYPES.SCISSOR:
                this.renderer.scissor.pop();
                break;
            case MASK_TYPES.STENCIL:
                this.renderer.stencil.pop(maskData.maskObject);
                break;
            case MASK_TYPES.SPRITE:
                this.popSpriteMask();
                break;
        }
        maskData.reset();
        if (maskData.pooled) {
            this.maskDataPool.push(maskData);
        }
    };
    /**
     * Sets type of MaskData based on its maskObject
     * @param {PIXI.MaskData} maskData
     */
    MaskSystem.prototype.detect = function (maskData) {
        var maskObject = maskData.maskObject;
        if (maskObject.isSprite) {
            maskData.type = MASK_TYPES.SPRITE;
            return;
        }
        maskData.type = MASK_TYPES.STENCIL;
        // detect scissor in graphics
        if (this.enableScissor
            && maskObject.isFastRect
            && maskObject.isFastRect()) {
            var matrix = maskObject.worldTransform;
            // TODO: move the check to the matrix itself
            // we are checking that its orthogonal and x rotation is 0 90 180 or 270
            var rotX = Math.atan2(matrix.b, matrix.a);
            var rotXY = Math.atan2(matrix.d, matrix.c);
            // use the nearest degree to 0.01
            rotX = Math.round(rotX * (180 / Math.PI) * 100);
            rotXY = Math.round(rotXY * (180 / Math.PI) * 100) - rotX;
            rotX = ((rotX % 9000) + 9000) % 9000;
            rotXY = ((rotXY % 18000) + 18000) % 18000;
            if (rotX === 0 && rotXY === 9000) {
                maskData.type = MASK_TYPES.SCISSOR;
            }
        }
    };
    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {PIXI.MaskData} maskData - Sprite to be used as the mask
     */
    MaskSystem.prototype.pushSpriteMask = function (maskData) {
        var maskObject = maskData.maskObject;
        var target = maskData._target;
        var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
        if (!alphaMaskFilter) {
            alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter(maskObject)];
        }
        alphaMaskFilter[0].resolution = this.renderer.resolution;
        alphaMaskFilter[0].maskSprite = maskObject;
        var stashFilterArea = target.filterArea;
        target.filterArea = maskObject.getBounds(true);
        this.renderer.filter.push(target, alphaMaskFilter);
        target.filterArea = stashFilterArea;
        this.alphaMaskIndex++;
    };
    /**
     * Removes the last filter from the filter stack and doesn't return it.
     */
    MaskSystem.prototype.popSpriteMask = function () {
        this.renderer.filter.pop();
        this.alphaMaskIndex--;
    };
    return MaskSystem;
}(System));

/**
 * System plugin to the renderer to manage masks of certain type
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var AbstractMaskSystem = /** @class */ (function (_super) {
    __extends(AbstractMaskSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function AbstractMaskSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * The mask stack
         * @member {PIXI.MaskData[]}
         */
        _this.maskStack = [];
        /**
         * Constant for gl.enable
         * @member {number}
         * @private
         */
        _this.glConst = 0;
        return _this;
    }
    /**
     * gets count of masks of certain type
     * @returns {number}
     */
    AbstractMaskSystem.prototype.getStackLength = function () {
        return this.maskStack.length;
    };
    /**
     * Changes the mask stack that is used by this System.
     *
     * @param {PIXI.MaskData[]} maskStack - The mask stack
     */
    AbstractMaskSystem.prototype.setMaskStack = function (maskStack) {
        var gl = this.renderer.gl;
        var curStackLen = this.getStackLength();
        this.maskStack = maskStack;
        var newStackLen = this.getStackLength();
        if (newStackLen !== curStackLen) {
            if (newStackLen === 0) {
                gl.disable(this.glConst);
            }
            else {
                gl.enable(this.glConst);
                this._useCurrent();
            }
        }
    };
    /**
     * Setup renderer to use the current mask data.
     * @private
     */
    AbstractMaskSystem.prototype._useCurrent = function () {
        // OVERWRITE;
    };
    /**
     * Destroys the mask stack.
     *
     */
    AbstractMaskSystem.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.maskStack = null;
    };
    return AbstractMaskSystem;
}(System));

/**
 * System plugin to the renderer to manage scissor rects (used for masks).
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var ScissorSystem = /** @class */ (function (_super) {
    __extends(ScissorSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function ScissorSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.glConst = WebGLRenderingContext.SCISSOR_TEST;
        return _this;
    }
    ScissorSystem.prototype.getStackLength = function () {
        var maskData = this.maskStack[this.maskStack.length - 1];
        if (maskData) {
            return maskData._scissorCounter;
        }
        return 0;
    };
    /**
     * Applies the Mask and adds it to the current stencil stack. @alvin
     *
     * @param {PIXI.MaskData} maskData - The mask data
     */
    ScissorSystem.prototype.push = function (maskData) {
        var maskObject = maskData.maskObject;
        maskObject.renderable = true;
        var prevData = maskData._scissorRect;
        var bounds = maskObject.getBounds(true);
        var gl = this.renderer.gl;
        maskObject.renderable = false;
        if (prevData) {
            bounds.fit(prevData);
        }
        else {
            gl.enable(gl.SCISSOR_TEST);
        }
        maskData._scissorCounter++;
        maskData._scissorRect = bounds;
        this._useCurrent();
    };
    /**
     * Pops scissor mask. MaskData is already removed from stack
     */
    ScissorSystem.prototype.pop = function () {
        var gl = this.renderer.gl;
        if (this.getStackLength() > 0) {
            this._useCurrent();
        }
        else {
            gl.disable(gl.SCISSOR_TEST);
        }
    };
    /**
     * Setup renderer to use the current scissor data.
     * @private
     */
    ScissorSystem.prototype._useCurrent = function () {
        var rect = this.maskStack[this.maskStack.length - 1]._scissorRect;
        var rt = this.renderer.renderTexture.current;
        var _a = this.renderer.projection, transform = _a.transform, sourceFrame = _a.sourceFrame, destinationFrame = _a.destinationFrame;
        var resolution = rt ? rt.resolution : this.renderer.resolution;
        var x = ((rect.x - sourceFrame.x) * resolution) + destinationFrame.x;
        var y = ((rect.y - sourceFrame.y) * resolution) + destinationFrame.y;
        var width = rect.width * resolution;
        var height = rect.height * resolution;
        if (transform) {
            x += transform.tx * resolution;
            y += transform.ty * resolution;
        }
        if (!rt) {
            // flipY. In future we'll have it over renderTextures as an option
            y = this.renderer.height - height - y;
        }
        this.renderer.gl.scissor(x, y, width, height);
    };
    return ScissorSystem;
}(AbstractMaskSystem));

/**
 * System plugin to the renderer to manage stencils (used for masks).
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var StencilSystem = /** @class */ (function (_super) {
    __extends(StencilSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function StencilSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.glConst = WebGLRenderingContext.STENCIL_TEST;
        return _this;
    }
    StencilSystem.prototype.getStackLength = function () {
        var maskData = this.maskStack[this.maskStack.length - 1];
        if (maskData) {
            return maskData._stencilCounter;
        }
        return 0;
    };
    /**
     * Applies the Mask and adds it to the current stencil stack.
     *
     * @param {PIXI.MaskData} maskData - The mask data
     */
    StencilSystem.prototype.push = function (maskData) {
        var maskObject = maskData.maskObject;
        var gl = this.renderer.gl;
        var prevMaskCount = maskData._stencilCounter;
        if (prevMaskCount === 0) {
            // force use stencil texture in current framebuffer
            this.renderer.framebuffer.forceStencil();
            gl.enable(gl.STENCIL_TEST);
        }
        maskData._stencilCounter++;
        // Increment the reference stencil value where the new mask overlaps with the old ones.
        gl.colorMask(false, false, false, false);
        gl.stencilFunc(gl.EQUAL, prevMaskCount, this._getBitwiseMask());
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
        maskObject.renderable = true;
        maskObject.render(this.renderer);
        this.renderer.batch.flush();
        maskObject.renderable = false;
        this._useCurrent();
    };
    /**
     * Pops stencil mask. MaskData is already removed from stack
     *
     * @param {PIXI.DisplayObject} maskObject - object of popped mask data
     */
    StencilSystem.prototype.pop = function (maskObject) {
        var gl = this.renderer.gl;
        if (this.getStackLength() === 0) {
            // the stack is empty!
            gl.disable(gl.STENCIL_TEST);
            gl.clear(gl.STENCIL_BUFFER_BIT);
            gl.clearStencil(0);
        }
        else {
            // Decrement the reference stencil value where the popped mask overlaps with the other ones
            gl.colorMask(false, false, false, false);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
            maskObject.renderable = true;
            maskObject.render(this.renderer);
            this.renderer.batch.flush();
            maskObject.renderable = false;
            this._useCurrent();
        }
    };
    /**
     * Setup renderer to use the current stencil data.
     * @private
     */
    StencilSystem.prototype._useCurrent = function () {
        var gl = this.renderer.gl;
        gl.colorMask(true, true, true, true);
        gl.stencilFunc(gl.EQUAL, this.getStackLength(), this._getBitwiseMask());
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };
    /**
     * Fill 1s equal to the number of acitve stencil masks.
     * @private
     * @return {number} The bitwise mask.
     */
    StencilSystem.prototype._getBitwiseMask = function () {
        return (1 << this.getStackLength()) - 1;
    };
    return StencilSystem;
}(AbstractMaskSystem));

/**
 * System plugin to the renderer to manage the projection matrix.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var ProjectionSystem = /** @class */ (function (_super) {
    __extends(ProjectionSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function ProjectionSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * Destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        _this.destinationFrame = null;
        /**
         * Source frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        _this.sourceFrame = null;
        /**
         * Default destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        _this.defaultFrame = null;
        /**
         * Project matrix
         * @member {PIXI.Matrix}
         * @readonly
         */
        _this.projectionMatrix = new Matrix();
        /**
         * A transform that will be appended to the projection matrix
         * if null, nothing will be applied
         * @member {PIXI.Matrix}
         */
        _this.transform = null;
        return _this;
    }
    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle).
     *
     * Make sure to run `renderer.framebuffer.setViewport(destinationFrame)` after calling this.
     *
     * @param {PIXI.Rectangle} destinationFrame - The destination frame.
     * @param {PIXI.Rectangle} sourceFrame - The source frame.
     * @param {Number} resolution - Resolution
     * @param {boolean} root - If is root
     */
    ProjectionSystem.prototype.update = function (destinationFrame, sourceFrame, resolution, root) {
        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
        this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
        // Calculate object-space to clip-space projection
        this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);
        if (this.transform) {
            this.projectionMatrix.append(this.transform);
        }
        var renderer = this.renderer;
        renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
        renderer.globalUniforms.update();
        // this will work for now
        // but would be sweet to stick and even on the global uniforms..
        if (renderer.shader.shader) {
            renderer.shader.syncUniformGroup(renderer.shader.shader.uniforms.globals);
        }
    };
    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle)
     *
     * @param {PIXI.Rectangle} destinationFrame - The destination frame.
     * @param {PIXI.Rectangle} sourceFrame - The source frame.
     * @param {Number} resolution - Resolution
     * @param {boolean} root - If is root
     */
    ProjectionSystem.prototype.calculateProjection = function (_destinationFrame, sourceFrame, _resolution, root) {
        var pm = this.projectionMatrix;
        var sign = !root ? 1 : -1;
        pm.identity();
        pm.a = (1 / sourceFrame.width * 2);
        pm.d = sign * (1 / sourceFrame.height * 2);
        pm.tx = -1 - (sourceFrame.x * pm.a);
        pm.ty = -sign - (sourceFrame.y * pm.d);
    };
    /**
     * Sets the transform of the active render target to the given matrix
     *
     * @param {PIXI.Matrix} matrix - The transformation matrix
     */
    ProjectionSystem.prototype.setTransform = function (_matrix) {
        // this._activeRenderTarget.transform = matrix;
    };
    return ProjectionSystem;
}(System));

// Temporary rectangle for assigned sourceFrame or destinationFrame
var tempRect = new Rectangle();
// Temporary rectangle for renderTexture destinationFrame
var tempRect2 = new Rectangle();
// Temporary rectangle for passing the framebuffer viewport
var viewportFrame = new Rectangle();
/**
 * System plugin to the renderer to manage render textures.
 *
 * Should be added after FramebufferSystem
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var RenderTextureSystem = /** @class */ (function (_super) {
    __extends(RenderTextureSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function RenderTextureSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * The clear background color as rgba
         * @member {number[]}
         */
        _this.clearColor = renderer._backgroundColorRgba;
        // TODO move this property somewhere else!
        /**
         * List of masks for the StencilSystem
         * @member {PIXI.Graphics[]}
         * @readonly
         */
        _this.defaultMaskStack = [];
        // empty render texture?
        /**
         * Render texture
         * @member {PIXI.RenderTexture}
         * @readonly
         */
        _this.current = null;
        /**
         * Source frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        _this.sourceFrame = new Rectangle();
        /**
         * Destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        _this.destinationFrame = new Rectangle();
        return _this;
    }
    /**
     * Bind the current render texture
     *
     * @param {PIXI.RenderTexture} [renderTexture] - RenderTexture to bind, by default its `null`, the screen
     * @param {PIXI.Rectangle} [sourceFrame] - part of screen that is mapped to the renderTexture
     * @param {PIXI.Rectangle} [destinationFrame] - part of renderTexture, by default it has the same size as sourceFrame
     */
    RenderTextureSystem.prototype.bind = function (renderTexture, sourceFrame, destinationFrame) {
        if (renderTexture === void 0) { renderTexture = null; }
        var renderer = this.renderer;
        this.current = renderTexture;
        var baseTexture;
        var framebuffer;
        var resolution;
        if (renderTexture) {
            baseTexture = renderTexture.baseTexture;
            resolution = baseTexture.resolution;
            if (!sourceFrame) {
                tempRect.width = renderTexture.frame.width;
                tempRect.height = renderTexture.frame.height;
                sourceFrame = tempRect;
            }
            if (!destinationFrame) {
                tempRect2.x = renderTexture.frame.x;
                tempRect2.y = renderTexture.frame.y;
                tempRect2.width = sourceFrame.width;
                tempRect2.height = sourceFrame.height;
                destinationFrame = tempRect2;
            }
            framebuffer = baseTexture.framebuffer;
        }
        else {
            resolution = renderer.resolution;
            if (!sourceFrame) {
                tempRect.width = renderer.screen.width;
                tempRect.height = renderer.screen.height;
                sourceFrame = tempRect;
            }
            if (!destinationFrame) {
                destinationFrame = tempRect;
                destinationFrame.width = sourceFrame.width;
                destinationFrame.height = sourceFrame.height;
            }
        }
        viewportFrame.x = destinationFrame.x * resolution;
        viewportFrame.y = destinationFrame.y * resolution;
        viewportFrame.width = destinationFrame.width * resolution;
        viewportFrame.height = destinationFrame.height * resolution;
        this.renderer.framebuffer.bind(framebuffer, viewportFrame);
        this.renderer.projection.update(destinationFrame, sourceFrame, resolution, !framebuffer);
        if (renderTexture) {
            this.renderer.mask.setMaskStack(baseTexture.maskStack);
        }
        else {
            this.renderer.mask.setMaskStack(this.defaultMaskStack);
        }
        this.sourceFrame.copyFrom(sourceFrame);
        this.destinationFrame.copyFrom(destinationFrame);
    };
    /**
     * Erases the render texture and fills the drawing area with a colour
     *
     * @param {number[]} [clearColor] - The color as rgba, default to use the renderer backgroundColor
     * @param {PIXI.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
     *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
     * @return {PIXI.Renderer} Returns itself.
     */
    RenderTextureSystem.prototype.clear = function (clearColor, mask) {
        if (this.current) {
            clearColor = clearColor || this.current.baseTexture.clearColor;
        }
        else {
            clearColor = clearColor || this.clearColor;
        }
        this.renderer.framebuffer.clear(clearColor[0], clearColor[1], clearColor[2], clearColor[3], mask);
    };
    RenderTextureSystem.prototype.resize = function () {
        // resize the root only!
        this.bind(null);
    };
    /**
     * Resets renderTexture state
     */
    RenderTextureSystem.prototype.reset = function () {
        this.bind(null);
    };
    return RenderTextureSystem;
}(System));

var IGLUniformData = /** @class */ (function () {
    function IGLUniformData() {
    }
    return IGLUniformData;
}());
/**
 * Helper class to create a WebGL Program
 *
 * @class
 * @memberof PIXI
 */
var GLProgram = /** @class */ (function () {
    /**
     * Makes a new Pixi program
     *
     * @param program {WebGLProgram} webgl program
     * @param uniformData {Object} uniforms
     */
    function GLProgram(program, uniformData) {
        /**
         * The shader program
         *
         * @member {WebGLProgram}
         */
        this.program = program;
        /**
         * holds the uniform data which contains uniform locations
         * and current uniform values used for caching and preventing unneeded GPU commands
         * @member {Object}
         */
        this.uniformData = uniformData;
        /**
         * uniformGroups holds the various upload functions for the shader. Each uniform group
         * and program have a unique upload function generated.
         * @member {Object}
         */
        this.uniformGroups = {};
    }
    /**
     * Destroys this program
     */
    GLProgram.prototype.destroy = function () {
        this.uniformData = null;
        this.uniformGroups = null;
        this.program = null;
    };
    return GLProgram;
}());

var UID$4 = 0;
// defualt sync data so we don't create a new one each time!
var defaultSyncData = { textureCount: 0 };
/**
 * System plugin to the renderer to manage shaders.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var ShaderSystem = /** @class */ (function (_super) {
    __extends(ShaderSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function ShaderSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.destroyed = false;
        // Validation check that this environment support `new Function`
        _this.systemCheck();
        /**
         * The current WebGL rendering context
         *
         * @member {WebGLRenderingContext}
         */
        _this.gl = null;
        _this.shader = null;
        _this.program = null;
        /**
         * Cache to holds the generated functions. Stored against UniformObjects unique signature
         * @type {Object}
         * @private
         */
        _this.cache = {};
        _this.id = UID$4++;
        return _this;
    }
    /**
     * Overrideable function by `@pixi/unsafe-eval` to silence
     * throwing an error if platform doesn't support unsafe-evals.
     *
     * @private
     */
    ShaderSystem.prototype.systemCheck = function () {
        if (!unsafeEvalSupported()) {
            throw new Error('Current environment does not allow unsafe-eval, '
                + 'please use @pixi/unsafe-eval module to enable support.');
        }
    };
    ShaderSystem.prototype.contextChange = function (gl) {
        this.gl = gl;
        this.reset();
    };
    /**
     * Changes the current shader to the one given in parameter
     *
     * @param {PIXI.Shader} shader - the new shader
     * @param {boolean} [dontSync] - false if the shader should automatically sync its uniforms.
     * @returns {PIXI.GLProgram} the glProgram that belongs to the shader.
     */
    ShaderSystem.prototype.bind = function (shader, dontSync) {
        shader.uniforms.globals = this.renderer.globalUniforms;
        var program = shader.program;
        var glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(shader);
        this.shader = shader;
        // TODO - some current Pixi plugins bypass this.. so it not safe to use yet..
        if (this.program !== program) {
            this.program = program;
            this.gl.useProgram(glProgram.program);
        }
        if (!dontSync) {
            defaultSyncData.textureCount = 0;
            this.syncUniformGroup(shader.uniformGroup, defaultSyncData);
        }
        return glProgram;
    };
    /**
     * Uploads the uniforms values to the currently bound shader.
     *
     * @param {object} uniforms - the uniforms values that be applied to the current shader
     */
    ShaderSystem.prototype.setUniforms = function (uniforms) {
        var shader = this.shader.program;
        var glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];
        shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
    };
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    /**
     *
     * syncs uniforms on the group
     * @param {*} group - the uniform group to sync
     * @param {*} [syncData] - this is data that is passed to the sync function and any nested sync functions
     */
    ShaderSystem.prototype.syncUniformGroup = function (group, syncData) {
        var glProgram = this.getglProgram();
        if (!group.static || group.dirtyId !== glProgram.uniformGroups[group.id]) {
            glProgram.uniformGroups[group.id] = group.dirtyId;
            this.syncUniforms(group, glProgram, syncData);
        }
    };
    /**
     * Overrideable by the @pixi/unsafe-eval package to use static
     * syncUnforms instead.
     *
     * @private
     */
    ShaderSystem.prototype.syncUniforms = function (group, glProgram, syncData) {
        var syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);
        syncFunc(glProgram.uniformData, group.uniforms, this.renderer, syncData);
    };
    /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
    ShaderSystem.prototype.createSyncGroups = function (group) {
        var id = this.getSignature(group, this.shader.program.uniformData);
        if (!this.cache[id]) {
            this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
        }
        group.syncUniforms[this.shader.program.id] = this.cache[id];
        return group.syncUniforms[this.shader.program.id];
    };
    /**
     * Takes a uniform group and data and generates a unique signature for them.
     *
     * @param {PIXI.UniformGroup} group - the uniform group to get signature of
     * @param {Object} uniformData - uniform information generated by the shader
     * @returns {String} Unique signature of the uniform group
     * @private
     */
    ShaderSystem.prototype.getSignature = function (group, uniformData) {
        var uniforms = group.uniforms;
        var strings = [];
        for (var i in uniforms) {
            strings.push(i);
            if (uniformData[i]) {
                strings.push(uniformData[i].type);
            }
        }
        return strings.join('-');
    };
    /**
     * Returns the underlying GLShade rof the currently bound shader.
     * This can be handy for when you to have a little more control over the setting of your uniforms.
     *
     * @return {PIXI.GLProgram} the glProgram for the currently bound Shader for this context
     */
    ShaderSystem.prototype.getglProgram = function () {
        if (this.shader) {
            return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
        }
        return null;
    };
    /**
     * Generates a glProgram version of the Shader provided.
     *
     * @private
     * @param {PIXI.Shader} shader - the shader that the glProgram will be based on.
     * @return {PIXI.GLProgram} A shiny new glProgram!
     */
    ShaderSystem.prototype.generateShader = function (shader) {
        var gl = this.gl;
        var program = shader.program;
        var attribMap = {};
        for (var i in program.attributeData) {
            attribMap[i] = program.attributeData[i].location;
        }
        var shaderProgram = compileProgram(gl, program.vertexSrc, program.fragmentSrc, attribMap);
        var uniformData = {};
        for (var i in program.uniformData) {
            var data = program.uniformData[i];
            uniformData[i] = {
                location: gl.getUniformLocation(shaderProgram, i),
                value: defaultValue(data.type, data.size),
            };
        }
        var glProgram = new GLProgram(shaderProgram, uniformData);
        program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;
        return glProgram;
    };
    /**
     * Resets ShaderSystem state, does not affect WebGL state
     */
    ShaderSystem.prototype.reset = function () {
        this.program = null;
        this.shader = null;
    };
    /**
     * Destroys this System and removes all its textures
     */
    ShaderSystem.prototype.destroy = function () {
        // TODO implement destroy method for ShaderSystem
        this.destroyed = true;
    };
    return ShaderSystem;
}(System));

/**
 * Maps gl blend combinations to WebGL.
 *
 * @memberof PIXI
 * @function mapWebGLBlendModesToPixi
 * @private
 * @param {WebGLRenderingContext} gl - The rendering context.
 * @param {number[][]} [array=[]] - The array to output into.
 * @return {number[][]} Mapped modes.
 */
function mapWebGLBlendModesToPixi(gl, array) {
    if (array === void 0) { array = []; }
    // TODO - premultiply alpha would be different.
    // add a boolean for that!
    array[BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD] = [gl.ONE, gl.ONE];
    array[BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.NONE] = [0, 0];
    // not-premultiplied blend modes
    array[BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
    array[BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    // composite operations
    array[BLEND_MODES.SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
    array[BLEND_MODES.DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
    array[BLEND_MODES.DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
    array[BLEND_MODES.XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    // SUBTRACT from flash
    array[BLEND_MODES.SUBTRACT] = [gl.ONE, gl.ONE, gl.ONE, gl.ONE, gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD];
    return array;
}

var BLEND$1 = 0;
var OFFSET$1 = 1;
var CULLING$1 = 2;
var DEPTH_TEST$1 = 3;
var WINDING$1 = 4;
/**
 * System plugin to the renderer to manage WebGL state machines.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var StateSystem = /** @class */ (function (_super) {
    __extends(StateSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function StateSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * GL context
         * @member {WebGLRenderingContext}
         * @readonly
         */
        _this.gl = null;
        /**
         * State ID
         * @member {number}
         * @readonly
         */
        _this.stateId = 0;
        /**
         * Polygon offset
         * @member {number}
         * @readonly
         */
        _this.polygonOffset = 0;
        /**
         * Blend mode
         * @member {number}
         * @default PIXI.BLEND_MODES.NONE
         * @readonly
         */
        _this.blendMode = BLEND_MODES.NONE;
        /**
         * Whether current blend equation is different
         * @member {boolean}
         * @protected
         */
        _this._blendEq = false;
        /**
         * Collection of calls
         * @member {function[]}
         * @readonly
         */
        _this.map = [];
        // map functions for when we set state..
        _this.map[BLEND$1] = _this.setBlend;
        _this.map[OFFSET$1] = _this.setOffset;
        _this.map[CULLING$1] = _this.setCullFace;
        _this.map[DEPTH_TEST$1] = _this.setDepthTest;
        _this.map[WINDING$1] = _this.setFrontFace;
        /**
         * Collection of check calls
         * @member {function[]}
         * @readonly
         */
        _this.checks = [];
        /**
         * Default WebGL State
         * @member {PIXI.State}
         * @readonly
         */
        _this.defaultState = new State();
        _this.defaultState.blend = true;
        return _this;
    }
    StateSystem.prototype.contextChange = function (gl) {
        this.gl = gl;
        this.blendModes = mapWebGLBlendModesToPixi(gl);
        this.set(this.defaultState);
        this.reset();
    };
    /**
     * Sets the current state
     *
     * @param {*} state - The state to set.
     */
    StateSystem.prototype.set = function (state) {
        state = state || this.defaultState;
        // TODO maybe to an object check? ( this.state === state )?
        if (this.stateId !== state.data) {
            var diff = this.stateId ^ state.data;
            var i = 0;
            // order from least to most common
            while (diff) {
                if (diff & 1) {
                    // state change!
                    this.map[i].call(this, !!(state.data & (1 << i)));
                }
                diff = diff >> 1;
                i++;
            }
            this.stateId = state.data;
        }
        // based on the above settings we check for specific modes..
        // for example if blend is active we check and set the blend modes
        // or of polygon offset is active we check the poly depth.
        for (var i = 0; i < this.checks.length; i++) {
            this.checks[i](this, state);
        }
    };
    /**
     * Sets the state, when previous state is unknown
     *
     * @param {*} state - The state to set
     */
    StateSystem.prototype.forceState = function (state) {
        state = state || this.defaultState;
        for (var i = 0; i < this.map.length; i++) {
            this.map[i].call(this, !!(state.data & (1 << i)));
        }
        for (var i = 0; i < this.checks.length; i++) {
            this.checks[i](this, state);
        }
        this.stateId = state.data;
    };
    /**
     * Enables or disabled blending.
     *
     * @param {boolean} value - Turn on or off webgl blending.
     */
    StateSystem.prototype.setBlend = function (value) {
        this.updateCheck(StateSystem.checkBlendMode, value);
        this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
    };
    /**
     * Enables or disable polygon offset fill
     *
     * @param {boolean} value - Turn on or off webgl polygon offset testing.
     */
    StateSystem.prototype.setOffset = function (value) {
        this.updateCheck(StateSystem.checkPolygonOffset, value);
        this.gl[value ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
    };
    /**
     * Sets whether to enable or disable depth test.
     *
     * @param {boolean} value - Turn on or off webgl depth testing.
     */
    StateSystem.prototype.setDepthTest = function (value) {
        this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
    };
    /**
     * Sets whether to enable or disable cull face.
     *
     * @param {boolean} value - Turn on or off webgl cull face.
     */
    StateSystem.prototype.setCullFace = function (value) {
        this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
    };
    /**
     * Sets the gl front face.
     *
     * @param {boolean} value - true is clockwise and false is counter-clockwise
     */
    StateSystem.prototype.setFrontFace = function (value) {
        this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
    };
    /**
     * Sets the blend mode.
     *
     * @param {number} value - The blend mode to set to.
     */
    StateSystem.prototype.setBlendMode = function (value) {
        if (value === this.blendMode) {
            return;
        }
        this.blendMode = value;
        var mode = this.blendModes[value];
        var gl = this.gl;
        if (mode.length === 2) {
            gl.blendFunc(mode[0], mode[1]);
        }
        else {
            gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
        }
        if (mode.length === 6) {
            this._blendEq = true;
            gl.blendEquationSeparate(mode[4], mode[5]);
        }
        else if (this._blendEq) {
            this._blendEq = false;
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
        }
    };
    /**
     * Sets the polygon offset.
     *
     * @param {number} value - the polygon offset
     * @param {number} scale - the polygon offset scale
     */
    StateSystem.prototype.setPolygonOffset = function (value, scale) {
        this.gl.polygonOffset(value, scale);
    };
    // used
    /**
     * Resets all the logic and disables the vaos
     */
    StateSystem.prototype.reset = function () {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
        this.forceState(this.defaultState);
        this._blendEq = true;
        this.blendMode = -1;
        this.setBlendMode(0);
    };
    /**
     * checks to see which updates should be checked based on which settings have been activated.
     * For example, if blend is enabled then we should check the blend modes each time the state is changed
     * or if polygon fill is activated then we need to check if the polygon offset changes.
     * The idea is that we only check what we have too.
     *
     * @param {Function} func - the checking function to add or remove
     * @param {boolean} value - should the check function be added or removed.
     */
    StateSystem.prototype.updateCheck = function (func, value) {
        var index = this.checks.indexOf(func);
        if (value && index === -1) {
            this.checks.push(func);
        }
        else if (!value && index !== -1) {
            this.checks.splice(index, 1);
        }
    };
    /**
     * A private little wrapper function that we call to check the blend mode.
     *
     * @static
     * @private
     * @param {PIXI.StateSystem} System - the System to perform the state check on
     * @param {PIXI.State} state - the state that the blendMode will pulled from
     */
    StateSystem.checkBlendMode = function (system, state) {
        system.setBlendMode(state.blendMode);
    };
    /**
     * A private little wrapper function that we call to check the polygon offset.
     *
     * @static
     * @private
     * @param {PIXI.StateSystem} System - the System to perform the state check on
     * @param {PIXI.State} state - the state that the blendMode will pulled from
     */
    StateSystem.checkPolygonOffset = function (system, state) {
        system.setPolygonOffset(1, state.polygonOffset);
    };
    return StateSystem;
}(System));

/**
 * System plugin to the renderer to manage texture garbage collection on the GPU,
 * ensuring that it does not get clogged up with textures that are no longer being used.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var TextureGCSystem = /** @class */ (function (_super) {
    __extends(TextureGCSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function TextureGCSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * Count
         * @member {number}
         * @readonly
         */
        _this.count = 0;
        /**
         * Check count
         * @member {number}
         * @readonly
         */
        _this.checkCount = 0;
        /**
         * Maximum idle time, in seconds
         * @member {number}
         * @see PIXI.settings.GC_MAX_IDLE
         */
        _this.maxIdle = settings.GC_MAX_IDLE;
        /**
         * Maximum number of item to check
         * @member {number}
         * @see PIXI.settings.GC_MAX_CHECK_COUNT
         */
        _this.checkCountMax = settings.GC_MAX_CHECK_COUNT;
        /**
         * Current garabage collection mode
         * @member {PIXI.GC_MODES}
         * @see PIXI.settings.GC_MODE
         */
        _this.mode = settings.GC_MODE;
        return _this;
    }
    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    TextureGCSystem.prototype.postrender = function () {
        if (!this.renderer.renderingToScreen) {
            return;
        }
        this.count++;
        if (this.mode === GC_MODES.MANUAL) {
            return;
        }
        this.checkCount++;
        if (this.checkCount > this.checkCountMax) {
            this.checkCount = 0;
            this.run();
        }
    };
    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    TextureGCSystem.prototype.run = function () {
        var tm = this.renderer.texture;
        var managedTextures = tm.managedTextures;
        var wasRemoved = false;
        for (var i = 0; i < managedTextures.length; i++) {
            var texture = managedTextures[i];
            // only supports non generated textures at the moment!
            if (!texture.framebuffer && this.count - texture.touched > this.maxIdle) {
                tm.destroyTexture(texture, true);
                managedTextures[i] = null;
                wasRemoved = true;
            }
        }
        if (wasRemoved) {
            var j = 0;
            for (var i = 0; i < managedTextures.length; i++) {
                if (managedTextures[i] !== null) {
                    managedTextures[j++] = managedTextures[i];
                }
            }
            managedTextures.length = j;
        }
    };
    /**
     * Removes all the textures within the specified displayObject and its children from the GPU
     *
     * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
     */
    TextureGCSystem.prototype.unload = function (displayObject) {
        var _a;
        var tm = this.renderer.texture;
        // only destroy non generated textures
        if ((_a = displayObject._texture) === null || _a === void 0 ? void 0 : _a.framebuffer) {
            tm.destroyTexture(displayObject._texture);
        }
        for (var i = displayObject.children.length - 1; i >= 0; i--) {
            this.unload(displayObject.children[i]);
        }
    };
    return TextureGCSystem;
}(System));

/**
 * Internal texture for WebGL context
 * @class
 * @memberof PIXI
 */
var GLTexture = /** @class */ (function () {
    function GLTexture(texture) {
        /**
         * The WebGL texture
         * @member {WebGLTexture}
         */
        this.texture = texture;
        /**
         * Width of texture that was used in texImage2D
         * @member {number}
         */
        this.width = -1;
        /**
         * Height of texture that was used in texImage2D
         * @member {number}
         */
        this.height = -1;
        /**
         * Texture contents dirty flag
         * @member {number}
         */
        this.dirtyId = -1;
        /**
         * Texture style dirty flag
         * @member {number}
         */
        this.dirtyStyleId = -1;
        /**
         * Whether mip levels has to be generated
         * @member {boolean}
         */
        this.mipmap = false;
        /**
         * WrapMode copied from baseTexture
         * @member {number}
         */
        this.wrapMode = 33071;
        /**
         * Type copied from baseTexture
         * @member {number}
         */
        this.type = 6408;
        /**
         * Type copied from baseTexture
         * @member {number}
         */
        this.internalFormat = 5121;
    }
    return GLTexture;
}());

/**
 * System plugin to the renderer to manage textures.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var TextureSystem = /** @class */ (function (_super) {
    __extends(TextureSystem, _super);
    /**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */
    function TextureSystem(renderer) {
        var _this = _super.call(this, renderer) || this;
        // TODO set to max textures...
        /**
         * Bound textures
         * @member {PIXI.BaseTexture[]}
         * @readonly
         */
        _this.boundTextures = [];
        /**
         * Current location
         * @member {number}
         * @readonly
         */
        _this.currentLocation = -1;
        /**
         * List of managed textures
         * @member {PIXI.BaseTexture[]}
         * @readonly
         */
        _this.managedTextures = [];
        /**
         * Did someone temper with textures state? We'll overwrite them when we need to unbind something.
         * @member {boolean}
         * @private
         */
        _this._unknownBoundTextures = false;
        /**
         * BaseTexture value that shows that we don't know what is bound
         * @member {PIXI.BaseTexture}
         * @readonly
         */
        _this.unknownTexture = new BaseTexture();
        return _this;
    }
    /**
     * Sets up the renderer context and necessary buffers.
     */
    TextureSystem.prototype.contextChange = function () {
        var gl = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.webGLVersion = this.renderer.context.webGLVersion;
        var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = maxTextures;
        for (var i = 0; i < maxTextures; i++) {
            this.boundTextures[i] = null;
        }
        // TODO move this.. to a nice make empty textures class..
        this.emptyTextures = {};
        var emptyTexture2D = new GLTexture(gl.createTexture());
        gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
        this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
        this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);
        for (var i = 0; i < 6; i++) {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        for (var i = 0; i < this.boundTextures.length; i++) {
            this.bind(null, i);
        }
    };
    /**
     * Bind a texture to a specific location
     *
     * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
     *
     * @param {PIXI.Texture|PIXI.BaseTexture} texture_ - Texture to bind
     * @param {number} [location=0] - Location to bind at
     */
    TextureSystem.prototype.bind = function (texture, location) {
        if (location === void 0) { location = 0; }
        var gl = this.gl;
        if (texture) {
            texture = texture.castToBaseTexture();
            if (texture.parentTextureArray) {
                // cannot bind partial texture
                // TODO: report a warning
                return;
            }
            if (texture.valid) {
                texture.touched = this.renderer.textureGC.count;
                var glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);
                if (this.boundTextures[location] !== texture) {
                    if (this.currentLocation !== location) {
                        this.currentLocation = location;
                        gl.activeTexture(gl.TEXTURE0 + location);
                    }
                    gl.bindTexture(texture.target, glTexture.texture);
                }
                if (glTexture.dirtyId !== texture.dirtyId) {
                    if (this.currentLocation !== location) {
                        this.currentLocation = location;
                        gl.activeTexture(gl.TEXTURE0 + location);
                    }
                    this.updateTexture(texture);
                }
                this.boundTextures[location] = texture;
            }
        }
        else {
            if (this.currentLocation !== location) {
                this.currentLocation = location;
                gl.activeTexture(gl.TEXTURE0 + location);
            }
            gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
            this.boundTextures[location] = null;
        }
    };
    /**
     * Resets texture location and bound textures
     *
     * Actual `bind(null, i)` calls will be performed at next `unbind()` call
     */
    TextureSystem.prototype.reset = function () {
        this._unknownBoundTextures = true;
        this.currentLocation = -1;
        for (var i = 0; i < this.boundTextures.length; i++) {
            this.boundTextures[i] = this.unknownTexture;
        }
    };
    /**
     * Unbind a texture
     * @param {PIXI.BaseTexture} texture - Texture to bind
     */
    TextureSystem.prototype.unbind = function (texture) {
        var _a = this, gl = _a.gl, boundTextures = _a.boundTextures;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = false;
            // someone changed webGL state,
            // we have to be sure that our texture does not appear in multi-texture renderer samplers
            for (var i = 0; i < boundTextures.length; i++) {
                if (boundTextures[i] === this.unknownTexture) {
                    this.bind(null, i);
                }
            }
        }
        for (var i = 0; i < boundTextures.length; i++) {
            if (boundTextures[i] === texture) {
                if (this.currentLocation !== i) {
                    gl.activeTexture(gl.TEXTURE0 + i);
                    this.currentLocation = i;
                }
                gl.bindTexture(texture.target, this.emptyTextures[texture.target].texture);
                boundTextures[i] = null;
            }
        }
    };
    /**
     * Initialize a texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to initialize
     */
    TextureSystem.prototype.initTexture = function (texture) {
        var glTexture = new GLTexture(this.gl.createTexture());
        // guarantee an update..
        glTexture.dirtyId = -1;
        texture._glTextures[this.CONTEXT_UID] = glTexture;
        this.managedTextures.push(texture);
        texture.on('dispose', this.destroyTexture, this);
        return glTexture;
    };
    TextureSystem.prototype.initTextureType = function (texture, glTexture) {
        glTexture.internalFormat = texture.format;
        glTexture.type = texture.type;
        if (this.webGLVersion !== 2) {
            return;
        }
        var gl = this.renderer.gl;
        if (texture.type === gl.FLOAT
            && texture.format === gl.RGBA) {
            glTexture.internalFormat = gl.RGBA32F;
        }
        // that's WebGL1 HALF_FLOAT_OES
        // we have to convert it to WebGL HALF_FLOAT
        if (texture.type === TYPES.HALF_FLOAT) {
            glTexture.type = gl.HALF_FLOAT;
        }
        if (glTexture.type === gl.HALF_FLOAT
            && texture.format === gl.RGBA) {
            glTexture.internalFormat = gl.RGBA16F;
        }
    };
    /**
     * Update a texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to initialize
     */
    TextureSystem.prototype.updateTexture = function (texture) {
        var glTexture = texture._glTextures[this.CONTEXT_UID];
        if (!glTexture) {
            return;
        }
        var renderer = this.renderer;
        this.initTextureType(texture, glTexture);
        if (texture.resource && texture.resource.upload(renderer, texture, glTexture)) ;
        else {
            // default, renderTexture-like logic
            var width = texture.realWidth;
            var height = texture.realHeight;
            var gl = renderer.gl;
            if (glTexture.width !== width
                || glTexture.height !== height
                || glTexture.dirtyId < 0) {
                glTexture.width = width;
                glTexture.height = height;
                gl.texImage2D(texture.target, 0, glTexture.internalFormat, width, height, 0, texture.format, glTexture.type, null);
            }
        }
        // lets only update what changes..
        if (texture.dirtyStyleId !== glTexture.dirtyStyleId) {
            this.updateTextureStyle(texture);
        }
        glTexture.dirtyId = texture.dirtyId;
    };
    /**
     * Deletes the texture from WebGL
     *
     * @private
     * @param {PIXI.BaseTexture|PIXI.Texture} texture_ - the texture to destroy
     * @param {boolean} [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */
    TextureSystem.prototype.destroyTexture = function (texture, skipRemove) {
        var gl = this.gl;
        texture = texture.castToBaseTexture();
        if (texture._glTextures[this.CONTEXT_UID]) {
            this.unbind(texture);
            gl.deleteTexture(texture._glTextures[this.CONTEXT_UID].texture);
            texture.off('dispose', this.destroyTexture, this);
            delete texture._glTextures[this.CONTEXT_UID];
            if (!skipRemove) {
                var i = this.managedTextures.indexOf(texture);
                if (i !== -1) {
                    removeItems(this.managedTextures, i, 1);
                }
            }
        }
    };
    /**
     * Update texture style such as mipmap flag
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to update
     */
    TextureSystem.prototype.updateTextureStyle = function (texture) {
        var glTexture = texture._glTextures[this.CONTEXT_UID];
        if (!glTexture) {
            return;
        }
        if ((texture.mipmap === MIPMAP_MODES.POW2 || this.webGLVersion !== 2) && !texture.isPowerOfTwo) {
            glTexture.mipmap = false;
        }
        else {
            glTexture.mipmap = texture.mipmap >= 1;
        }
        if (this.webGLVersion !== 2 && !texture.isPowerOfTwo) {
            glTexture.wrapMode = WRAP_MODES.CLAMP;
        }
        else {
            glTexture.wrapMode = texture.wrapMode;
        }
        if (texture.resource && texture.resource.style(this.renderer, texture, glTexture)) ;
        else {
            this.setStyle(texture, glTexture);
        }
        glTexture.dirtyStyleId = texture.dirtyStyleId;
    };
    /**
     * Set style for texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to update
     * @param {PIXI.GLTexture} glTexture
     */
    TextureSystem.prototype.setStyle = function (texture, glTexture) {
        var gl = this.gl;
        if (glTexture.mipmap) {
            gl.generateMipmap(texture.target);
        }
        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, glTexture.wrapMode);
        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, glTexture.wrapMode);
        if (glTexture.mipmap) {
            /* eslint-disable max-len */
            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
            /* eslint-disable max-len */
            var anisotropicExt = this.renderer.context.extensions.anisotropicFiltering;
            if (anisotropicExt && texture.anisotropicLevel > 0 && texture.scaleMode === SCALE_MODES.LINEAR) {
                var level = Math.min(texture.anisotropicLevel, gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                gl.texParameterf(texture.target, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, level);
            }
        }
        else {
            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
        }
        gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    };
    return TextureSystem;
}(System));

/**
 * Systems are individual components to the Renderer pipeline.
 * @namespace PIXI.systems
 */

var systems = ({
    FilterSystem: FilterSystem,
    BatchSystem: BatchSystem,
    ContextSystem: ContextSystem,
    FramebufferSystem: FramebufferSystem,
    GeometrySystem: GeometrySystem,
    MaskSystem: MaskSystem,
    ScissorSystem: ScissorSystem,
    StencilSystem: StencilSystem,
    ProjectionSystem: ProjectionSystem,
    RenderTextureSystem: RenderTextureSystem,
    ShaderSystem: ShaderSystem,
    StateSystem: StateSystem,
    TextureGCSystem: TextureGCSystem,
    TextureSystem: TextureSystem
});

var tempMatrix = new Matrix();
/**
 * The AbstractRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
 * and {@link PIXI.Renderer} which can be used for rendering a PixiJS scene.
 *
 * @abstract
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 */
var AbstractRenderer = /** @class */ (function (_super) {
    __extends(AbstractRenderer, _super);
    /**
     * @param {string} system - The name of the system this renderer is for.
     * @param {object} [options] - The optional renderer parameters.
     * @param {number} [options.width=800] - The width of the screen.
     * @param {number} [options.height=600] - The height of the screen.
     * @param {HTMLCanvasElement} [options.view] - The canvas to use as a view, optional.
     * @param {boolean} [options.transparent=false] - If the render view is transparent.
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1.
     * @param {boolean} [options.antialias=false] - Sets antialias
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
     *  resolution of the renderer retina would be 2.
     * @param {boolean} [options.preserveDrawingBuffer=false] - Enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the WebGL context.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *      not before the new render pass.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     */
    function AbstractRenderer(type, options) {
        if (type === void 0) { type = RENDERER_TYPE.UNKNOWN; }
        var _this = _super.call(this) || this;
        // Add the default render options
        options = Object.assign({}, settings.RENDER_OPTIONS, options);
        // Deprecation notice for renderer roundPixels option
        if (options.roundPixels) {
            settings.ROUND_PIXELS = options.roundPixels;
            deprecation('5.0.0', 'Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS', 2);
        }
        /**
         * The supplied constructor options.
         *
         * @member {Object}
         * @readOnly
         */
        _this.options = options;
        /**
         * The type of the renderer.
         *
         * @member {number}
         * @default PIXI.RENDERER_TYPE.UNKNOWN
         * @see PIXI.RENDERER_TYPE
         */
        _this.type = type;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {PIXI.Rectangle}
         */
        _this.screen = new Rectangle(0, 0, options.width, options.height);
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement}
         */
        _this.view = options.view || document.createElement('canvas');
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number}
         * @default 1
         */
        _this.resolution = options.resolution || settings.RESOLUTION;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean}
         */
        _this.transparent = options.transparent;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean}
         */
        _this.autoDensity = options.autoDensity || options.autoResize || false;
        // autoResize is deprecated, provides fallback support
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean}
         */
        _this.preserveDrawingBuffer = options.preserveDrawingBuffer;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean}
         * @default
         */
        _this.clearBeforeRender = options.clearBeforeRender;
        /**
         * The background color as a number.
         *
         * @member {number}
         * @protected
         */
        _this._backgroundColor = 0x000000;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]}
         * @protected
         */
        _this._backgroundColorRgba = [0, 0, 0, 0];
        /**
         * The background color as a string.
         *
         * @member {string}
         * @protected
         */
        _this._backgroundColorString = '#000000';
        _this.backgroundColor = options.backgroundColor || _this._backgroundColor; // run bg color setter
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {PIXI.DisplayObject}
         * @protected
         */
        _this._lastObjectRendered = null;
        /**
         * Collection of plugins.
         * @readonly
         * @member {object}
         */
        _this.plugins = {};
        return _this;
    }
    /**
     * Initialize the plugins.
     *
     * @protected
     * @param {object} staticMap - The dictionary of statically saved plugins.
     */
    AbstractRenderer.prototype.initPlugins = function (staticMap) {
        for (var o in staticMap) {
            this.plugins[o] = new (staticMap[o])(this);
        }
    };
    Object.defineProperty(AbstractRenderer.prototype, "width", {
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        get: function () {
            return this.view.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractRenderer.prototype, "height", {
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        get: function () {
            return this.view.height;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Resizes the screen and canvas to the specified width and height.
     * Canvas dimensions are multiplied by resolution.
     *
     * @param {number} screenWidth - The new width of the screen.
     * @param {number} screenHeight - The new height of the screen.
     */
    AbstractRenderer.prototype.resize = function (screenWidth, screenHeight) {
        this.screen.width = screenWidth;
        this.screen.height = screenHeight;
        this.view.width = screenWidth * this.resolution;
        this.view.height = screenHeight * this.resolution;
        if (this.autoDensity) {
            this.view.style.width = screenWidth + "px";
            this.view.style.height = screenHeight + "px";
        }
        /**
         * Fired after view has been resized.
         *
         * @event PIXI.Renderer#resize
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */
        this.emit('resize', screenWidth, screenHeight);
    };
    /**
     * Useful function that returns a texture of the display object that can then be used to create sprites
     * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
     *
     * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from.
     * @param {PIXI.SCALE_MODES} scaleMode - The scale mode of the texture.
     * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
     * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
     *        if no region is specified, defaults to the local bounds of the displayObject.
     * @return {PIXI.RenderTexture} A texture of the graphics object.
     */
    AbstractRenderer.prototype.generateTexture = function (displayObject, scaleMode, resolution, region) {
        region = region || displayObject.getLocalBounds(null, true);
        // minimum texture size is 1x1, 0x0 will throw an error
        if (region.width === 0)
            { region.width = 1; }
        if (region.height === 0)
            { region.height = 1; }
        var renderTexture = RenderTexture.create({
            width: region.width | 0,
            height: region.height | 0,
            scaleMode: scaleMode,
            resolution: resolution,
        });
        tempMatrix.tx = -region.x;
        tempMatrix.ty = -region.y;
        this.render(displayObject, renderTexture, false, tempMatrix, !!displayObject.parent);
        return renderTexture;
    };
    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */
    AbstractRenderer.prototype.destroy = function (removeView) {
        for (var o in this.plugins) {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }
        if (removeView && this.view.parentNode) {
            this.view.parentNode.removeChild(this.view);
        }
        var thisAny = this;
        // null-ing all objects, that's a tradition!
        thisAny.plugins = null;
        thisAny.type = RENDERER_TYPE.UNKNOWN;
        thisAny.view = null;
        thisAny.screen = null;
        thisAny._tempDisplayObjectParent = null;
        thisAny.options = null;
        this._backgroundColorRgba = null;
        this._backgroundColorString = null;
        this._lastObjectRendered = null;
    };
    Object.defineProperty(AbstractRenderer.prototype, "backgroundColor", {
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            this._backgroundColor = value;
            this._backgroundColorString = hex2string(value);
            hex2rgb(value, this._backgroundColorRgba);
        },
        enumerable: false,
        configurable: true
    });
    return AbstractRenderer;
}(eventemitter3));

/**
 * The Renderer draws the scene and all its content onto a WebGL enabled canvas.
 *
 * This renderer should be used for browsers that support WebGL.
 *
 * This renderer works by automatically managing WebGLBatchesm, so no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything!
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.AbstractRenderer
 */
var Renderer = /** @class */ (function (_super) {
    __extends(Renderer, _super);
    /**
     * @param {object} [options] - The optional renderer parameters.
     * @param {number} [options.width=800] - The width of the screen.
     * @param {number} [options.height=600] - The height of the screen.
     * @param {HTMLCanvasElement} [options.view] - The canvas to use as a view, optional.
     * @param {boolean} [options.transparent=false] - If the render view is transparent.
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1.
     * @param {boolean} [options.antialias=false] - Sets antialias. If not available natively then FXAA
     *  antialiasing is used.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer.
     *  The resolution of the renderer retina would be 2.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear
     *  the canvas or not before the new render pass. If you wish to set this to false, you *must* set
     *  preserveDrawingBuffer to `true`.
     * @param {boolean} [options.preserveDrawingBuffer=false] - Enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the WebGL context.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {string} [options.powerPreference] - Parameter passed to WebGL context, set to "high-performance"
     *  for devices with dual graphics card.
     * @param {object} [options.context] - If WebGL context already exists, all parameters must be taken from it.
     * @public
     */
    function Renderer(options) {
        var _this = _super.call(this, RENDERER_TYPE.WEBGL, options) || this;
        // the options will have been modified here in the super constructor with pixi's default settings..
        options = _this.options;
        /**
         * WebGL context, set by the contextSystem (this.context)
         *
         * @readonly
         * @member {WebGLRenderingContext}
         */
        _this.gl = null;
        _this.CONTEXT_UID = 0;
        // TODO legacy!
        /**
         * Internal signal instances of **runner**, these
         * are assigned to each system created.
         * @see PIXI.Runner
         * @name PIXI.Renderer#runners
         * @private
         * @type {object}
         * @readonly
         * @property {PIXI.Runner} destroy - Destroy runner
         * @property {PIXI.Runner} contextChange - Context change runner
         * @property {PIXI.Runner} reset - Reset runner
         * @property {PIXI.Runner} update - Update runner
         * @property {PIXI.Runner} postrender - Post-render runner
         * @property {PIXI.Runner} prerender - Pre-render runner
         * @property {PIXI.Runner} resize - Resize runner
         */
        _this.runners = {
            destroy: new Runner('destroy'),
            contextChange: new Runner('contextChange'),
            reset: new Runner('reset'),
            update: new Runner('update'),
            postrender: new Runner('postrender'),
            prerender: new Runner('prerender'),
            resize: new Runner('resize'),
        };
        /**
         * Global uniforms
         * @member {PIXI.UniformGroup}
         */
        _this.globalUniforms = new UniformGroup({
            projectionMatrix: new Matrix(),
        }, true);
        /**
         * Mask system instance
         * @member {PIXI.systems.MaskSystem} mask
         * @memberof PIXI.Renderer#
         * @readonly
         */
        _this.addSystem(MaskSystem, 'mask')
            /**
             * Context system instance
             * @member {PIXI.systems.ContextSystem} context
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ContextSystem, 'context')
            /**
             * State system instance
             * @member {PIXI.systems.StateSystem} state
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(StateSystem, 'state')
            /**
             * Shader system instance
             * @member {PIXI.systems.ShaderSystem} shader
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ShaderSystem, 'shader')
            /**
             * Texture system instance
             * @member {PIXI.systems.TextureSystem} texture
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(TextureSystem, 'texture')
            /**
             * Geometry system instance
             * @member {PIXI.systems.GeometrySystem} geometry
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(GeometrySystem, 'geometry')
            /**
             * Framebuffer system instance
             * @member {PIXI.systems.FramebufferSystem} framebuffer
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(FramebufferSystem, 'framebuffer')
            /**
             * Scissor system instance
             * @member {PIXI.systems.ScissorSystem} scissor
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ScissorSystem, 'scissor')
            /**
             * Stencil system instance
             * @member {PIXI.systems.StencilSystem} stencil
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(StencilSystem, 'stencil')
            /**
             * Projection system instance
             * @member {PIXI.systems.ProjectionSystem} projection
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ProjectionSystem, 'projection')
            /**
             * Texture garbage collector system instance
             * @member {PIXI.systems.TextureGCSystem} textureGC
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(TextureGCSystem, 'textureGC')
            /**
             * Filter system instance
             * @member {PIXI.systems.FilterSystem} filter
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(FilterSystem, 'filter')
            /**
             * RenderTexture system instance
             * @member {PIXI.systems.RenderTextureSystem} renderTexture
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(RenderTextureSystem, 'renderTexture')
            /**
             * Batch system instance
             * @member {PIXI.systems.BatchSystem} batch
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(BatchSystem, 'batch');
        _this.initPlugins(Renderer.__plugins);
        /**
         * The options passed in to create a new WebGL context.
         */
        if (options.context) {
            _this.context.initFromContext(options.context);
        }
        else {
            _this.context.initFromOptions({
                alpha: !!_this.transparent,
                antialias: options.antialias,
                premultipliedAlpha: _this.transparent && _this.transparent !== 'notMultiplied',
                stencil: true,
                preserveDrawingBuffer: options.preserveDrawingBuffer,
                powerPreference: _this.options.powerPreference,
            });
        }
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @member {boolean}
         * @readonly
         * @default true
         */
        _this.renderingToScreen = true;
        sayHello(_this.context.webGLVersion === 2 ? 'WebGL 2' : 'WebGL 1');
        _this.resize(_this.options.width, _this.options.height);
        return _this;
    }
    /**
     * Create renderer if WebGL is available. Overrideable
     * by the **@pixi/canvas-renderer** package to allow fallback.
     * throws error if WebGL is not available.
     * @static
     * @private
     */
    Renderer.create = function (options) {
        if (isWebGLSupported()) {
            return new Renderer(options);
        }
        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
    };
    /**
     * Add a new system to the renderer.
     * @param {Function} ClassRef - Class reference
     * @param {string} [name] - Property name for system, if not specified
     *        will use a static `name` property on the class itself. This
     *        name will be assigned as s property on the Renderer so make
     *        sure it doesn't collide with properties on Renderer.
     * @return {PIXI.Renderer} Return instance of renderer
     */
    Renderer.prototype.addSystem = function (ClassRef, name) {
        if (!name) {
            name = ClassRef.name;
        }
        var system = new ClassRef(this);
        if (this[name]) {
            throw new Error("Whoops! The name \"" + name + "\" is already in use");
        }
        this[name] = system;
        for (var i in this.runners) {
            this.runners[i].add(system);
        }
        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.Renderer#postrender
         */
        /**
         * Fired before rendering starts.
         *
         * @event PIXI.Renderer#prerender
         */
        /**
         * Fired when the WebGL context is set.
         *
         * @event PIXI.Renderer#context
         * @param {WebGLRenderingContext} gl - WebGL context.
         */
        return this;
    };
    /**
     * Renders the object to its WebGL view
     *
     * @param {PIXI.DisplayObject} displayObject - The object to be rendered.
     * @param {PIXI.RenderTexture} [renderTexture] - The render texture to render to.
     * @param {boolean} [clear=true] - Should the canvas be cleared before the new render.
     * @param {PIXI.Matrix} [transform] - A transform to apply to the render texture before rendering.
     * @param {boolean} [skipUpdateTransform=false] - Should we skip the update transform pass?
     */
    Renderer.prototype.render = function (displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        // can be handy to know!
        this.renderingToScreen = !renderTexture;
        this.runners.prerender.emit();
        this.emit('prerender');
        // apply a transform at a GPU level
        this.projection.transform = transform;
        // no point rendering if our context has been blown up!
        if (this.context.isLost) {
            return;
        }
        if (!renderTexture) {
            this._lastObjectRendered = displayObject;
        }
        if (!skipUpdateTransform) {
            // update the scene graph
            var cacheParent = displayObject.enableTempParent();
            displayObject.updateTransform();
            displayObject.disableTempParent(cacheParent);
            // displayObject.hitArea = //TODO add a temp hit area
        }
        this.renderTexture.bind(renderTexture);
        this.batch.currentRenderer.start();
        if (clear !== undefined ? clear : this.clearBeforeRender) {
            this.renderTexture.clear();
        }
        displayObject.render(this);
        // apply transform..
        this.batch.currentRenderer.flush();
        if (renderTexture) {
            renderTexture.baseTexture.update();
        }
        this.runners.postrender.emit();
        // reset transform after render
        this.projection.transform = null;
        this.emit('postrender');
    };
    /**
     * Resizes the WebGL view to the specified width and height.
     *
     * @param {number} screenWidth - The new width of the screen.
     * @param {number} screenHeight - The new height of the screen.
     */
    Renderer.prototype.resize = function (screenWidth, screenHeight) {
        _super.prototype.resize.call(this, screenWidth, screenHeight);
        this.runners.resize.emit(screenWidth, screenHeight);
    };
    /**
     * Resets the WebGL state so you can render things however you fancy!
     *
     * @return {PIXI.Renderer} Returns itself.
     */
    Renderer.prototype.reset = function () {
        this.runners.reset.emit();
        return this;
    };
    /**
     * Clear the frame buffer
     */
    Renderer.prototype.clear = function () {
        this.renderTexture.bind();
        this.renderTexture.clear();
    };
    /**
     * Removes everything from the renderer (event listeners, spritebatch, etc...)
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     *  See: https://github.com/pixijs/pixi.js/issues/2233
     */
    Renderer.prototype.destroy = function (removeView) {
        this.runners.destroy.emit();
        for (var r in this.runners) {
            this.runners[r].destroy();
        }
        // call base destroy
        _super.prototype.destroy.call(this, removeView);
        // TODO nullify all the managers..
        this.gl = null;
    };
    /**
     * Adds a plugin to the renderer.
     *
     * @method
     * @param {string} pluginName - The name of the plugin.
     * @param {Function} ctor - The constructor function or class for the plugin.
     */
    Renderer.registerPlugin = function (pluginName, ctor) {
        Renderer.__plugins = Renderer.__plugins || {};
        Renderer.__plugins[pluginName] = ctor;
    };
    return Renderer;
}(AbstractRenderer));

/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If WebGL is not supported by
 * the browser then this function will return a canvas renderer
 *
 * @memberof PIXI
 * @function autoDetectRenderer
 * @param {object} [options] - The optional renderer parameters
 * @param {number} [options.width=800] - the width of the renderers view
 * @param {number} [options.height=600] - the height of the renderers view
 * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
 * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
 * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
 *   resolutions other than 1
 * @param {boolean} [options.antialias=false] - sets antialias
 * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
 *  need to call toDataUrl on the webgl context
 * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 *  (shown if not transparent).
 * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
 *   not before the new render pass.
 * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
 * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present, this
 *   option only is available when using **pixi.js-legacy** or **@pixi/canvas-renderer** modules, otherwise
 *   it is ignored.
 * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
 *  for devices with dual graphics card **webgl only**
 * @return {PIXI.Renderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
 */
function autoDetectRenderer(options) {
    return Renderer.create(options);
}

var _default = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

var defaultFilter = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

/**
 * Used by the batcher to draw batches.
 * Each one of these contains all information required to draw a bound geometry.
 *
 * @class
 * @memberof PIXI
 */
var BatchDrawCall = /** @class */ (function () {
    function BatchDrawCall() {
        this.texArray = null;
        this.blend = 0;
        this.type = DRAW_MODES.TRIANGLES;
        this.start = 0;
        this.size = 0;
        /**
         * data for uniforms or custom webgl state
         * @member {object}
         */
        this.data = null;
    }
    return BatchDrawCall;
}());

/**
 * Used by the batcher to build texture batches.
 * Holds list of textures and their respective locations.
 *
 * @class
 * @memberof PIXI
 */
var BatchTextureArray = /** @class */ (function () {
    function BatchTextureArray() {
        /**
         * inside textures array
         * @member {PIXI.BaseTexture[]}
         */
        this.elements = [];
        /**
         * Respective locations for textures
         * @member {number[]}
         */
        this.ids = [];
        /**
         * number of filled elements
         * @member {number}
         */
        this.count = 0;
    }
    BatchTextureArray.prototype.clear = function () {
        for (var i = 0; i < this.count; i++) {
            this.elements[i] = null;
        }
        this.count = 0;
    };
    return BatchTextureArray;
}());

/**
 * Flexible wrapper around `ArrayBuffer` that also provides
 * typed array views on demand.
 *
 * @class
 * @memberof PIXI
 */
var ViewableBuffer = /** @class */ (function () {
    /**
     * @param {number} size - The size of the buffer in bytes.
     */
    function ViewableBuffer(size) {
        /**
         * Underlying `ArrayBuffer` that holds all the data
         * and is of capacity `size`.
         *
         * @member {ArrayBuffer}
         */
        this.rawBinaryData = new ArrayBuffer(size);
        /**
         * View on the raw binary data as a `Uint32Array`.
         *
         * @member {Uint32Array}
         */
        this.uint32View = new Uint32Array(this.rawBinaryData);
        /**
         * View on the raw binary data as a `Float32Array`.
         *
         * @member {Float32Array}
         */
        this.float32View = new Float32Array(this.rawBinaryData);
    }
    Object.defineProperty(ViewableBuffer.prototype, "int8View", {
        /**
         * View on the raw binary data as a `Int8Array`.
         *
         * @member {Int8Array}
         */
        get: function () {
            if (!this._int8View) {
                this._int8View = new Int8Array(this.rawBinaryData);
            }
            return this._int8View;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewableBuffer.prototype, "uint8View", {
        /**
         * View on the raw binary data as a `Uint8Array`.
         *
         * @member {Uint8Array}
         */
        get: function () {
            if (!this._uint8View) {
                this._uint8View = new Uint8Array(this.rawBinaryData);
            }
            return this._uint8View;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewableBuffer.prototype, "int16View", {
        /**
         * View on the raw binary data as a `Int16Array`.
         *
         * @member {Int16Array}
         */
        get: function () {
            if (!this._int16View) {
                this._int16View = new Int16Array(this.rawBinaryData);
            }
            return this._int16View;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewableBuffer.prototype, "uint16View", {
        /**
         * View on the raw binary data as a `Uint16Array`.
         *
         * @member {Uint16Array}
         */
        get: function () {
            if (!this._uint16View) {
                this._uint16View = new Uint16Array(this.rawBinaryData);
            }
            return this._uint16View;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewableBuffer.prototype, "int32View", {
        /**
         * View on the raw binary data as a `Int32Array`.
         *
         * @member {Int32Array}
         */
        get: function () {
            if (!this._int32View) {
                this._int32View = new Int32Array(this.rawBinaryData);
            }
            return this._int32View;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the view of the given type.
     *
     * @param {string} type - One of `int8`, `uint8`, `int16`,
     *    `uint16`, `int32`, `uint32`, and `float32`.
     * @return {object} typed array of given type
     */
    ViewableBuffer.prototype.view = function (type) {
        return this[type + "View"];
    };
    /**
     * Destroys all buffer references. Do not use after calling
     * this.
     */
    ViewableBuffer.prototype.destroy = function () {
        this.rawBinaryData = null;
        this._int8View = null;
        this._uint8View = null;
        this._int16View = null;
        this._uint16View = null;
        this._int32View = null;
        this.uint32View = null;
        this.float32View = null;
    };
    ViewableBuffer.sizeOf = function (type) {
        switch (type) {
            case 'int8':
            case 'uint8':
                return 1;
            case 'int16':
            case 'uint16':
                return 2;
            case 'int32':
            case 'uint32':
            case 'float32':
                return 4;
            default:
                throw new Error(type + " isn't a valid view type");
        }
    };
    return ViewableBuffer;
}());

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * This is the default batch renderer. It buffers objects
 * with texture-based geometries and renders them in
 * batches. It uploads multiple textures to the GPU to
 * reduce to the number of draw calls.
 *
 * @class
 * @protected
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 */
var AbstractBatchRenderer = /** @class */ (function (_super) {
    __extends(AbstractBatchRenderer, _super);
    /**
     * This will hook onto the renderer's `contextChange`
     * and `prerender` signals.
     *
     * @param {PIXI.Renderer} renderer - The renderer this works for.
     */
    function AbstractBatchRenderer(renderer) {
        var _this = _super.call(this, renderer) || this;
        /**
         * This is used to generate a shader that can
         * color each vertex based on a `aTextureId`
         * attribute that points to an texture in `uSampler`.
         *
         * This enables the objects with different textures
         * to be drawn in the same draw call.
         *
         * You can customize your shader by creating your
         * custom shader generator.
         *
         * @member {PIXI.BatchShaderGenerator}
         * @protected
         */
        _this.shaderGenerator = null;
        /**
         * The class that represents the geometry of objects
         * that are going to be batched with this.
         *
         * @member {object}
         * @default PIXI.BatchGeometry
         * @protected
         */
        _this.geometryClass = null;
        /**
         * Size of data being buffered per vertex in the
         * attribute buffers (in floats). By default, the
         * batch-renderer plugin uses 6:
         *
         * | aVertexPosition | 2 |
         * |-----------------|---|
         * | aTextureCoords  | 2 |
         * | aColor          | 1 |
         * | aTextureId      | 1 |
         *
         * @member {number}
         * @readonly
         */
        _this.vertexSize = null;
        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {PIXI.State}
         * @readonly
         */
        _this.state = State.for2d();
        /**
         * The number of bufferable objects before a flush
         * occurs automatically.
         *
         * @member {number}
         * @default settings.SPRITE_BATCH_SIZE * 4
         */
        _this.size = settings.SPRITE_BATCH_SIZE * 4;
        /**
         * Total count of all vertices used by the currently
         * buffered objects.
         *
         * @member {number}
         * @private
         */
        _this._vertexCount = 0;
        /**
         * Total count of all indices used by the currently
         * buffered objects.
         *
         * @member {number}
         * @private
         */
        _this._indexCount = 0;
        /**
         * Buffer of objects that are yet to be rendered.
         *
         * @member {PIXI.DisplayObject[]}
         * @private
         */
        _this._bufferedElements = [];
        /**
         * Data for texture batch builder, helps to save a bit of CPU on a pass.
         * @type {PIXI.BaseTexture[]}
         * @private
         */
        _this._bufferedTextures = [];
        /**
         * Number of elements that are buffered and are
         * waiting to be flushed.
         *
         * @member {number}
         * @private
         */
        _this._bufferSize = 0;
        /**
         * This shader is generated by `this.shaderGenerator`.
         *
         * It is generated specifically to handle the required
         * number of textures being batched together.
         *
         * @member {PIXI.Shader}
         * @protected
         */
        _this._shader = null;
        /**
         * Pool of `this.geometryClass` geometry objects
         * that store buffers. They are used to pass data
         * to the shader on each draw call.
         *
         * These are never re-allocated again, unless a
         * context change occurs; however, the pool may
         * be expanded if required.
         *
         * @member {PIXI.Geometry[]}
         * @private
         * @see PIXI.AbstractBatchRenderer.contextChange
         */
        _this._packedGeometries = [];
        /**
         * Size of `this._packedGeometries`. It can be expanded
         * if more than `this._packedGeometryPoolSize` flushes
         * occur in a single frame.
         *
         * @member {number}
         * @private
         */
        _this._packedGeometryPoolSize = 2;
        /**
         * A flush may occur multiple times in a single
         * frame. On iOS devices or when
         * `settings.CAN_UPLOAD_SAME_BUFFER` is false, the
         * batch renderer does not upload data to the same
         * `WebGLBuffer` for performance reasons.
         *
         * This is the index into `packedGeometries` that points to
         * geometry holding the most recent buffers.
         *
         * @member {number}
         * @private
         */
        _this._flushId = 0;
        /**
         * Pool of `ViewableBuffer` objects that are sorted in
         * order of increasing size. The flush method uses
         * the buffer with the least size above the amount
         * it requires. These are used for passing attributes.
         *
         * The first buffer has a size of 8; each subsequent
         * buffer has double capacity of its previous.
         *
         * @member {PIXI.ViewableBuffer[]}
         * @private
         * @see PIXI.AbstractBatchRenderer#getAttributeBuffer
         */
        _this._aBuffers = {};
        /**
         * Pool of `Uint16Array` objects that are sorted in
         * order of increasing size. The flush method uses
         * the buffer with the least size above the amount
         * it requires. These are used for passing indices.
         *
         * The first buffer has a size of 12; each subsequent
         * buffer has double capacity of its previous.
         *
         * @member {Uint16Array[]}
         * @private
         * @see PIXI.AbstractBatchRenderer#getIndexBuffer
         */
        _this._iBuffers = {};
        /**
         * Maximum number of textures that can be uploaded to
         * the GPU under the current context. It is initialized
         * properly in `this.contextChange`.
         *
         * @member {number}
         * @see PIXI.AbstractBatchRenderer#contextChange
         * @readonly
         */
        _this.MAX_TEXTURES = 1;
        _this.renderer.on('prerender', _this.onPrerender, _this);
        renderer.runners.contextChange.add(_this);
        _this._dcIndex = 0;
        _this._aIndex = 0;
        _this._iIndex = 0;
        _this._attributeBuffer = null;
        _this._indexBuffer = null;
        _this._tempBoundTextures = [];
        return _this;
    }
    /**
     * Handles the `contextChange` signal.
     *
     * It calculates `this.MAX_TEXTURES` and allocating the
     * packed-geometry object pool.
     */
    AbstractBatchRenderer.prototype.contextChange = function () {
        var gl = this.renderer.gl;
        if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
            this.MAX_TEXTURES = 1;
        }
        else {
            // step 1: first check max textures the GPU can handle.
            this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), settings.SPRITE_MAX_TEXTURES);
            // step 2: check the maximum number of if statements the shader can have too..
            this.MAX_TEXTURES = checkMaxIfStatementsInShader(this.MAX_TEXTURES, gl);
        }
        this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
        // we use the second shader as the first one depending on your browser
        // may omit aTextureId as it is not used by the shader so is optimized out.
        for (var i = 0; i < this._packedGeometryPoolSize; i++) {
            /* eslint-disable max-len */
            this._packedGeometries[i] = new (this.geometryClass)();
        }
        this.initFlushBuffers();
    };
    /**
     * Makes sure that static and dynamic flush pooled objects have correct dimensions
     */
    AbstractBatchRenderer.prototype.initFlushBuffers = function () {
        var _drawCallPool = AbstractBatchRenderer._drawCallPool, _textureArrayPool = AbstractBatchRenderer._textureArrayPool;
        // max draw calls
        var MAX_SPRITES = this.size / 4;
        // max texture arrays
        var MAX_TA = Math.floor(MAX_SPRITES / this.MAX_TEXTURES) + 1;
        while (_drawCallPool.length < MAX_SPRITES) {
            _drawCallPool.push(new BatchDrawCall());
        }
        while (_textureArrayPool.length < MAX_TA) {
            _textureArrayPool.push(new BatchTextureArray());
        }
        for (var i = 0; i < this.MAX_TEXTURES; i++) {
            this._tempBoundTextures[i] = null;
        }
    };
    /**
     * Handles the `prerender` signal.
     *
     * It ensures that flushes start from the first geometry
     * object again.
     */
    AbstractBatchRenderer.prototype.onPrerender = function () {
        this._flushId = 0;
    };
    /**
     * Buffers the "batchable" object. It need not be rendered
     * immediately.
     *
     * @param {PIXI.DisplayObject} element - the element to render when
     *    using this renderer
     */
    AbstractBatchRenderer.prototype.render = function (element) {
        if (!element._texture.valid) {
            return;
        }
        if (this._vertexCount + (element.vertexData.length / 2) > this.size) {
            this.flush();
        }
        this._vertexCount += element.vertexData.length / 2;
        this._indexCount += element.indices.length;
        this._bufferedTextures[this._bufferSize] = element._texture.baseTexture;
        this._bufferedElements[this._bufferSize++] = element;
    };
    AbstractBatchRenderer.prototype.buildTexturesAndDrawCalls = function () {
        var _a = this, textures = _a._bufferedTextures, MAX_TEXTURES = _a.MAX_TEXTURES;
        var textureArrays = AbstractBatchRenderer._textureArrayPool;
        var batch = this.renderer.batch;
        var boundTextures = this._tempBoundTextures;
        var touch = this.renderer.textureGC.count;
        var TICK = ++BaseTexture._globalBatch;
        var countTexArrays = 0;
        var texArray = textureArrays[0];
        var start = 0;
        batch.copyBoundTextures(boundTextures, MAX_TEXTURES);
        for (var i = 0; i < this._bufferSize; ++i) {
            var tex = textures[i];
            textures[i] = null;
            if (tex._batchEnabled === TICK) {
                continue;
            }
            if (texArray.count >= MAX_TEXTURES) {
                batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
                this.buildDrawCalls(texArray, start, i);
                start = i;
                texArray = textureArrays[++countTexArrays];
                ++TICK;
            }
            tex._batchEnabled = TICK;
            tex.touched = touch;
            texArray.elements[texArray.count++] = tex;
        }
        if (texArray.count > 0) {
            batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
            this.buildDrawCalls(texArray, start, this._bufferSize);
            ++countTexArrays;
            ++TICK;
        }
        // Clean-up
        for (var i = 0; i < boundTextures.length; i++) {
            boundTextures[i] = null;
        }
        BaseTexture._globalBatch = TICK;
    };
    /**
     * Populating drawcalls for rendering
     *
     * @param {PIXI.BatchTextureArray} texArray
     * @param {number} start
     * @param {number} finish
     */
    AbstractBatchRenderer.prototype.buildDrawCalls = function (texArray, start, finish) {
        var _a = this, elements = _a._bufferedElements, _attributeBuffer = _a._attributeBuffer, _indexBuffer = _a._indexBuffer, vertexSize = _a.vertexSize;
        var drawCalls = AbstractBatchRenderer._drawCallPool;
        var dcIndex = this._dcIndex;
        var aIndex = this._aIndex;
        var iIndex = this._iIndex;
        var drawCall = drawCalls[dcIndex];
        drawCall.start = this._iIndex;
        drawCall.texArray = texArray;
        for (var i = start; i < finish; ++i) {
            var sprite = elements[i];
            var tex = sprite._texture.baseTexture;
            var spriteBlendMode = premultiplyBlendMode[tex.alphaMode ? 1 : 0][sprite.blendMode];
            elements[i] = null;
            if (start < i && drawCall.blend !== spriteBlendMode) {
                drawCall.size = iIndex - drawCall.start;
                start = i;
                drawCall = drawCalls[++dcIndex];
                drawCall.texArray = texArray;
                drawCall.start = iIndex;
            }
            this.packInterleavedGeometry(sprite, _attributeBuffer, _indexBuffer, aIndex, iIndex);
            aIndex += sprite.vertexData.length / 2 * vertexSize;
            iIndex += sprite.indices.length;
            drawCall.blend = spriteBlendMode;
        }
        if (start < finish) {
            drawCall.size = iIndex - drawCall.start;
            ++dcIndex;
        }
        this._dcIndex = dcIndex;
        this._aIndex = aIndex;
        this._iIndex = iIndex;
    };
    /**
     * Bind textures for current rendering
     *
     * @param {PIXI.BatchTextureArray} texArray
     */
    AbstractBatchRenderer.prototype.bindAndClearTexArray = function (texArray) {
        var textureSystem = this.renderer.texture;
        for (var j = 0; j < texArray.count; j++) {
            textureSystem.bind(texArray.elements[j], texArray.ids[j]);
            texArray.elements[j] = null;
        }
        texArray.count = 0;
    };
    AbstractBatchRenderer.prototype.updateGeometry = function () {
        var _a = this, packedGeometries = _a._packedGeometries, attributeBuffer = _a._attributeBuffer, indexBuffer = _a._indexBuffer;
        if (!settings.CAN_UPLOAD_SAME_BUFFER) { /* Usually on iOS devices, where the browser doesn't
            like uploads to the same buffer in a single frame. */
            if (this._packedGeometryPoolSize <= this._flushId) {
                this._packedGeometryPoolSize++;
                packedGeometries[this._flushId] = new (this.geometryClass)();
            }
            packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
            packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
            this.renderer.geometry.bind(packedGeometries[this._flushId]);
            this.renderer.geometry.updateBuffers();
            this._flushId++;
        }
        else {
            // lets use the faster option, always use buffer number 0
            packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
            packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
            this.renderer.geometry.updateBuffers();
        }
    };
    AbstractBatchRenderer.prototype.drawBatches = function () {
        var dcCount = this._dcIndex;
        var _a = this.renderer, gl = _a.gl, stateSystem = _a.state;
        var drawCalls = AbstractBatchRenderer._drawCallPool;
        var curTexArray = null;
        // Upload textures and do the draw calls
        for (var i = 0; i < dcCount; i++) {
            var _b = drawCalls[i], texArray = _b.texArray, type = _b.type, size = _b.size, start = _b.start, blend = _b.blend;
            if (curTexArray !== texArray) {
                curTexArray = texArray;
                this.bindAndClearTexArray(texArray);
            }
            this.state.blendMode = blend;
            stateSystem.set(this.state);
            gl.drawElements(type, size, gl.UNSIGNED_SHORT, start * 2);
        }
    };
    /**
     * Renders the content _now_ and empties the current batch.
     */
    AbstractBatchRenderer.prototype.flush = function () {
        if (this._vertexCount === 0) {
            return;
        }
        this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
        this._indexBuffer = this.getIndexBuffer(this._indexCount);
        this._aIndex = 0;
        this._iIndex = 0;
        this._dcIndex = 0;
        this.buildTexturesAndDrawCalls();
        this.updateGeometry();
        this.drawBatches();
        // reset elements buffer for the next flush
        this._bufferSize = 0;
        this._vertexCount = 0;
        this._indexCount = 0;
    };
    /**
     * Starts a new sprite batch.
     */
    AbstractBatchRenderer.prototype.start = function () {
        this.renderer.state.set(this.state);
        this.renderer.shader.bind(this._shader);
        if (settings.CAN_UPLOAD_SAME_BUFFER) {
            // bind buffer #0, we don't need others
            this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
        }
    };
    /**
     * Stops and flushes the current batch.
     */
    AbstractBatchRenderer.prototype.stop = function () {
        this.flush();
    };
    /**
     * Destroys this `AbstractBatchRenderer`. It cannot be used again.
     */
    AbstractBatchRenderer.prototype.destroy = function () {
        for (var i = 0; i < this._packedGeometryPoolSize; i++) {
            if (this._packedGeometries[i]) {
                this._packedGeometries[i].destroy();
            }
        }
        this.renderer.off('prerender', this.onPrerender, this);
        this._aBuffers = null;
        this._iBuffers = null;
        this._packedGeometries = null;
        this._attributeBuffer = null;
        this._indexBuffer = null;
        if (this._shader) {
            this._shader.destroy();
            this._shader = null;
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Fetches an attribute buffer from `this._aBuffers` that
     * can hold atleast `size` floats.
     *
     * @param {number} size - minimum capacity required
     * @return {ViewableBuffer} - buffer than can hold atleast `size` floats
     * @private
     */
    AbstractBatchRenderer.prototype.getAttributeBuffer = function (size) {
        // 8 vertices is enough for 2 quads
        var roundedP2 = nextPow2(Math.ceil(size / 8));
        var roundedSizeIndex = log2(roundedP2);
        var roundedSize = roundedP2 * 8;
        if (this._aBuffers.length <= roundedSizeIndex) {
            this._iBuffers.length = roundedSizeIndex + 1;
        }
        var buffer = this._aBuffers[roundedSize];
        if (!buffer) {
            this._aBuffers[roundedSize] = buffer = new ViewableBuffer(roundedSize * this.vertexSize * 4);
        }
        return buffer;
    };
    /**
     * Fetches an index buffer from `this._iBuffers` that can
     * have at least `size` capacity.
     *
     * @param {number} size - minimum required capacity
     * @return {Uint16Array} - buffer that can fit `size`
     *    indices.
     * @private
     */
    AbstractBatchRenderer.prototype.getIndexBuffer = function (size) {
        // 12 indices is enough for 2 quads
        var roundedP2 = nextPow2(Math.ceil(size / 12));
        var roundedSizeIndex = log2(roundedP2);
        var roundedSize = roundedP2 * 12;
        if (this._iBuffers.length <= roundedSizeIndex) {
            this._iBuffers.length = roundedSizeIndex + 1;
        }
        var buffer = this._iBuffers[roundedSizeIndex];
        if (!buffer) {
            this._iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
        }
        return buffer;
    };
    /**
     * Takes the four batching parameters of `element`, interleaves
     * and pushes them into the batching attribute/index buffers given.
     *
     * It uses these properties: `vertexData` `uvs`, `textureId` and
     * `indicies`. It also uses the "tint" of the base-texture, if
     * present.
     *
     * @param {PIXI.Sprite} element - element being rendered
     * @param {PIXI.ViewableBuffer} attributeBuffer - attribute buffer.
     * @param {Uint16Array} indexBuffer - index buffer
     * @param {number} aIndex - number of floats already in the attribute buffer
     * @param {number} iIndex - number of indices already in `indexBuffer`
     */
    AbstractBatchRenderer.prototype.packInterleavedGeometry = function (element, attributeBuffer, indexBuffer, aIndex, iIndex) {
        var uint32View = attributeBuffer.uint32View, float32View = attributeBuffer.float32View;
        var packedVertices = aIndex / this.vertexSize;
        var uvs = element.uvs;
        var indicies = element.indices;
        var vertexData = element.vertexData;
        var textureId = element._texture.baseTexture._batchLocation;
        var alpha = Math.min(element.worldAlpha, 1.0);
        var argb = (alpha < 1.0
            && element._texture.baseTexture.alphaMode)
            ? premultiplyTint(element._tintRGB, alpha)
            : element._tintRGB + (alpha * 255 << 24);
        // lets not worry about tint! for now..
        for (var i = 0; i < vertexData.length; i += 2) {
            float32View[aIndex++] = vertexData[i];
            float32View[aIndex++] = vertexData[i + 1];
            float32View[aIndex++] = uvs[i];
            float32View[aIndex++] = uvs[i + 1];
            uint32View[aIndex++] = argb;
            float32View[aIndex++] = textureId;
        }
        for (var i = 0; i < indicies.length; i++) {
            indexBuffer[iIndex++] = packedVertices + indicies[i];
        }
    };
    /**
     * Pool of `BatchDrawCall` objects that `flush` used
     * to create "batches" of the objects being rendered.
     *
     * These are never re-allocated again.
     * Shared between all batch renderers because it can be only one "flush" working at the moment.
     *
     * @static
     * @member {PIXI.BatchDrawCall[]}
     */
    AbstractBatchRenderer._drawCallPool = [];
    /**
     * Pool of `BatchDrawCall` objects that `flush` used
     * to create "batches" of the objects being rendered.
     *
     * These are never re-allocated again.
     * Shared between all batch renderers because it can be only one "flush" working at the moment.
     *
     * @static
     * @member {PIXI.BatchTextureArray[]}
     */
    AbstractBatchRenderer._textureArrayPool = [];
    return AbstractBatchRenderer;
}(ObjectRenderer));

/**
 * Helper that generates batching multi-texture shader. Use it with your new BatchRenderer
 *
 * @class
 * @memberof PIXI
 */
var BatchShaderGenerator = /** @class */ (function () {
    /**
     * @param {string} vertexSrc - Vertex shader
     * @param {string} fragTemplate - Fragment shader template
     */
    function BatchShaderGenerator(vertexSrc, fragTemplate) {
        /**
         * Reference to the vertex shader source.
         *
         * @member {string}
         */
        this.vertexSrc = vertexSrc;
        /**
         * Reference to the fragement shader template. Must contain "%count%" and "%forloop%".
         *
         * @member {string}
         */
        this.fragTemplate = fragTemplate;
        this.programCache = {};
        this.defaultGroupCache = {};
        if (fragTemplate.indexOf('%count%') < 0) {
            throw new Error('Fragment template must contain "%count%".');
        }
        if (fragTemplate.indexOf('%forloop%') < 0) {
            throw new Error('Fragment template must contain "%forloop%".');
        }
    }
    BatchShaderGenerator.prototype.generateShader = function (maxTextures) {
        if (!this.programCache[maxTextures]) {
            var sampleValues = new Int32Array(maxTextures);
            for (var i = 0; i < maxTextures; i++) {
                sampleValues[i] = i;
            }
            this.defaultGroupCache[maxTextures] = UniformGroup.from({ uSamplers: sampleValues }, true);
            var fragmentSrc = this.fragTemplate;
            fragmentSrc = fragmentSrc.replace(/%count%/gi, "" + maxTextures);
            fragmentSrc = fragmentSrc.replace(/%forloop%/gi, this.generateSampleSrc(maxTextures));
            this.programCache[maxTextures] = new Program(this.vertexSrc, fragmentSrc);
        }
        var uniforms = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new Matrix(),
            default: this.defaultGroupCache[maxTextures],
        };
        return new Shader(this.programCache[maxTextures], uniforms);
    };
    BatchShaderGenerator.prototype.generateSampleSrc = function (maxTextures) {
        var src = '';
        src += '\n';
        src += '\n';
        for (var i = 0; i < maxTextures; i++) {
            if (i > 0) {
                src += '\nelse ';
            }
            if (i < maxTextures - 1) {
                src += "if(vTextureId < " + i + ".5)";
            }
            src += '\n{';
            src += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);";
            src += '\n}';
        }
        src += '\n';
        src += '\n';
        return src;
    };
    return BatchShaderGenerator;
}());

/**
 * Geometry used to batch standard PIXI content (e.g. Mesh, Sprite, Graphics objects).
 *
 * @class
 * @memberof PIXI
 */
var BatchGeometry = /** @class */ (function (_super) {
    __extends(BatchGeometry, _super);
    /**
     * @param {boolean} [_static=false] - Optimization flag, where `false`
     *        is updated every frame, `true` doesn't change frame-to-frame.
     */
    function BatchGeometry(_static) {
        if (_static === void 0) { _static = false; }
        var _this = _super.call(this) || this;
        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {PIXI.Buffer}
         * @protected
         */
        _this._buffer = new Buffer(null, _static, false);
        /**
         * Index buffer data
         *
         * @member {PIXI.Buffer}
         * @protected
         */
        _this._indexBuffer = new Buffer(null, _static, true);
        _this.addAttribute('aVertexPosition', _this._buffer, 2, false, TYPES.FLOAT)
            .addAttribute('aTextureCoord', _this._buffer, 2, false, TYPES.FLOAT)
            .addAttribute('aColor', _this._buffer, 4, true, TYPES.UNSIGNED_BYTE)
            .addAttribute('aTextureId', _this._buffer, 1, true, TYPES.FLOAT)
            .addIndex(_this._indexBuffer);
        return _this;
    }
    return BatchGeometry;
}(Geometry));

var defaultVertex$2 = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";

var defaultFragment$2 = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";

/**
 * @class
 * @memberof PIXI
 * @hideconstructor
 */
var BatchPluginFactory = /** @class */ (function () {
    function BatchPluginFactory() {
    }
    /**
     * Create a new BatchRenderer plugin for Renderer. this convenience can provide an easy way
     * to extend BatchRenderer with all the necessary pieces.
     * @example
     * const fragment = `
     * varying vec2 vTextureCoord;
     * varying vec4 vColor;
     * varying float vTextureId;
     * uniform sampler2D uSamplers[%count%];
     *
     * void main(void){
     *     vec4 color;
     *     %forloop%
     *     gl_FragColor = vColor * vec4(color.a - color.rgb, color.a);
     * }
     * `;
     * const InvertBatchRenderer = PIXI.BatchPluginFactory.create({ fragment });
     * PIXI.Renderer.registerPlugin('invert', InvertBatchRenderer);
     * const sprite = new PIXI.Sprite();
     * sprite.pluginName = 'invert';
     *
     * @static
     * @param {object} [options]
     * @param {string} [options.vertex=PIXI.BatchPluginFactory.defaultVertexSrc] - Vertex shader source
     * @param {string} [options.fragment=PIXI.BatchPluginFactory.defaultFragmentTemplate] - Fragment shader template
     * @param {number} [options.vertexSize=6] - Vertex size
     * @param {object} [options.geometryClass=PIXI.BatchGeometry]
     * @return {*} New batch renderer plugin
     */
    BatchPluginFactory.create = function (options) {
        var _a = Object.assign({
            vertex: defaultVertex$2,
            fragment: defaultFragment$2,
            geometryClass: BatchGeometry,
            vertexSize: 6,
        }, options), vertex = _a.vertex, fragment = _a.fragment, vertexSize = _a.vertexSize, geometryClass = _a.geometryClass;
        return /** @class */ (function (_super) {
            __extends(BatchPlugin, _super);
            function BatchPlugin(renderer) {
                var _this = _super.call(this, renderer) || this;
                _this.shaderGenerator = new BatchShaderGenerator(vertex, fragment);
                _this.geometryClass = geometryClass;
                _this.vertexSize = vertexSize;
                return _this;
            }
            return BatchPlugin;
        }(AbstractBatchRenderer));
    };
    Object.defineProperty(BatchPluginFactory, "defaultVertexSrc", {
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        get: function () {
            return defaultVertex$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchPluginFactory, "defaultFragmentTemplate", {
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        get: function () {
            return defaultFragment$2;
        },
        enumerable: false,
        configurable: true
    });
    return BatchPluginFactory;
}());
// Setup the default BatchRenderer plugin, this is what
// we'll actually export at the root level
var BatchRenderer = BatchPluginFactory.create();

var core_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbstractBatchRenderer: AbstractBatchRenderer,
    AbstractRenderer: AbstractRenderer,
    Attribute: Attribute,
    BaseRenderTexture: BaseRenderTexture,
    BaseTexture: BaseTexture,
    BatchDrawCall: BatchDrawCall,
    BatchGeometry: BatchGeometry,
    BatchPluginFactory: BatchPluginFactory,
    BatchRenderer: BatchRenderer,
    BatchShaderGenerator: BatchShaderGenerator,
    BatchTextureArray: BatchTextureArray,
    Buffer: Buffer,
    Filter: Filter,
    FilterState: FilterState,
    Framebuffer: Framebuffer,
    GLFramebuffer: GLFramebuffer,
    GLProgram: GLProgram,
    GLTexture: GLTexture,
    Geometry: Geometry,
    IGLUniformData: IGLUniformData,
    MaskData: MaskData,
    ObjectRenderer: ObjectRenderer,
    Program: Program,
    Quad: Quad,
    QuadUv: QuadUv,
    RenderTexture: RenderTexture,
    RenderTexturePool: RenderTexturePool,
    Renderer: Renderer,
    Shader: Shader,
    SpriteMaskFilter: SpriteMaskFilter,
    State: State,
    System: System,
    Texture: Texture,
    TextureMatrix: TextureMatrix,
    TextureUvs: TextureUvs,
    UniformGroup: UniformGroup,
    ViewableBuffer: ViewableBuffer,
    autoDetectRenderer: autoDetectRenderer,
    checkMaxIfStatementsInShader: checkMaxIfStatementsInShader,
    defaultFilterVertex: defaultFilter,
    defaultVertex: _default,
    resources: index,
    systems: systems,
    uniformParsers: uniformParsers
});

export { BatchRenderer as B, Renderer as R, Shader as S, Texture as T, UniformGroup as U, autoDetectRenderer as a, BaseTexture as b, BatchDrawCall as c, BatchTextureArray as d, BatchGeometry as e, State as f, core_es as g };
