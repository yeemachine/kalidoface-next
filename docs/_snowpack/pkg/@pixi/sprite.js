import { T as Texture } from '../common/core.es-89569ca4.js';
import { C as Container } from '../common/display.es-a4efb68b.js';
import { m as sign } from '../common/utils.es-3c1074c4.js';
import '../common/ticker.es-8d6a7f87.js';
import '../common/_commonjsHelpers-8a10f9bf.js';

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
    }
}
init();

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
 * @pixi/sprite - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

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

var tempPoint = new Point();
var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
*
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * let sprite = PIXI.Sprite.from('assets/image.png');
 * ```
 *
 * The more efficient way to create sprites is using a {@link PIXI.Spritesheet},
 * as swapping base textures when rendering to the screen is inefficient.
 *
 * ```js
 * PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
 *
 * function setup() {
 *   let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
 *   let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
 *   ...
 * }
 * ```
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    /**
     * @param {PIXI.Texture} [texture] - The texture for this sprite.
     */
    function Sprite(texture) {
        var _this = _super.call(this) || this;
        /**
         * The anchor point defines the normalized coordinates
         * in the texture that map to the position of this
         * sprite.
         *
         * By default, this is `(0,0)` (or `texture.defaultAnchor`
         * if you have modified that), which means the position
         * `(x,y)` of this `Sprite` will be the top-left corner.
         *
         * Note: Updating `texture.defaultAnchor` after
         * constructing a `Sprite` does _not_ update its anchor.
         *
         * {@link https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html}
         *
         * @default `texture.defaultAnchor`
         * @member {PIXI.ObservablePoint}
         * @private
         */
        _this._anchor = new ObservablePoint(_this._onAnchorUpdate, _this, (texture ? texture.defaultAnchor.x : 0), (texture ? texture.defaultAnchor.y : 0));
        /**
         * The texture that the sprite is using
         *
         * @private
         * @member {PIXI.Texture}
         */
        _this._texture = null;
        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number}
         */
        _this._width = 0;
        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number}
         */
        _this._height = 0;
        /**
         * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        _this._tint = null;
        /**
         * The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @private
         * @member {number}
         * @default 16777215
         */
        _this._tintRGB = null;
        _this.tint = 0xFFFFFF;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        _this.blendMode = BLEND_MODES.NORMAL;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number}
         * @default 0xFFFFFF
         */
        _this._cachedTint = 0xFFFFFF;
        /**
         * this is used to store the uvs data of the sprite, assigned at the same time
         * as the vertexData in calculateVertices()
         *
         * @private
         * @member {Float32Array}
         */
        _this.uvs = null;
        // call texture setter
        _this.texture = texture || Texture.EMPTY;
        /**
         * this is used to store the vertex data of the sprite (basically a quad)
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexData = new Float32Array(8);
        /**
         * This is used to calculate the bounds of the object IF it is a trimmed sprite
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexTrimmedData = null;
        _this._transformID = -1;
        _this._textureID = -1;
        _this._transformTrimmedID = -1;
        _this._textureTrimmedID = -1;
        // Batchable stuff..
        // TODO could make this a mixin?
        _this.indices = indices;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string}
         * @default 'batch'
         */
        _this.pluginName = 'batch';
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean}
         */
        _this.isSprite = true;
        /**
         * Internal roundPixels field
         *
         * @member {boolean}
         * @private
         */
        _this._roundPixels = settings.ROUND_PIXELS;
        return _this;
    }
    /**
     * When the texture is updated, this event will fire to update the scale and frame
     *
     * @protected
     */
    Sprite.prototype._onTextureUpdate = function () {
        this._textureID = -1;
        this._textureTrimmedID = -1;
        this._cachedTint = 0xFFFFFF;
        // so if _width is 0 then width was not set..
        if (this._width) {
            this.scale.x = sign(this.scale.x) * this._width / this._texture.orig.width;
        }
        if (this._height) {
            this.scale.y = sign(this.scale.y) * this._height / this._texture.orig.height;
        }
    };
    /**
     * Called when the anchor position updates.
     *
     * @private
     */
    Sprite.prototype._onAnchorUpdate = function () {
        this._transformID = -1;
        this._transformTrimmedID = -1;
    };
    /**
     * calculates worldTransform * vertices, store it in vertexData
     */
    Sprite.prototype.calculateVertices = function () {
        var texture = this._texture;
        if (this._transformID === this.transform._worldID && this._textureID === texture._updateID) {
            return;
        }
        // update texture UV here, because base texture can be changed without calling `_onTextureUpdate`
        if (this._textureID !== texture._updateID) {
            this.uvs = this._texture._uvs.uvsFloat32;
        }
        this._transformID = this.transform._worldID;
        this._textureID = texture._updateID;
        // set the vertex data
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var vertexData = this.vertexData;
        var trim = texture.trim;
        var orig = texture.orig;
        var anchor = this._anchor;
        var w0 = 0;
        var w1 = 0;
        var h0 = 0;
        var h1 = 0;
        if (trim) {
            // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
            // space before transforming the sprite coords.
            w1 = trim.x - (anchor._x * orig.width);
            w0 = w1 + trim.width;
            h1 = trim.y - (anchor._y * orig.height);
            h0 = h1 + trim.height;
        }
        else {
            w1 = -anchor._x * orig.width;
            w0 = w1 + orig.width;
            h1 = -anchor._y * orig.height;
            h0 = h1 + orig.height;
        }
        // xy
        vertexData[0] = (a * w1) + (c * h1) + tx;
        vertexData[1] = (d * h1) + (b * w1) + ty;
        // xy
        vertexData[2] = (a * w0) + (c * h1) + tx;
        vertexData[3] = (d * h1) + (b * w0) + ty;
        // xy
        vertexData[4] = (a * w0) + (c * h0) + tx;
        vertexData[5] = (d * h0) + (b * w0) + ty;
        // xy
        vertexData[6] = (a * w1) + (c * h0) + tx;
        vertexData[7] = (d * h0) + (b * w1) + ty;
        if (this._roundPixels) {
            var resolution = settings.RESOLUTION;
            for (var i = 0; i < vertexData.length; ++i) {
                vertexData[i] = Math.round((vertexData[i] * resolution | 0) / resolution);
            }
        }
    };
    /**
     * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
     * This is used to ensure that the true width and height of a trimmed texture is respected
     */
    Sprite.prototype.calculateTrimmedVertices = function () {
        if (!this.vertexTrimmedData) {
            this.vertexTrimmedData = new Float32Array(8);
        }
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
            return;
        }
        this._transformTrimmedID = this.transform._worldID;
        this._textureTrimmedID = this._texture._updateID;
        // lets do some special trim code!
        var texture = this._texture;
        var vertexData = this.vertexTrimmedData;
        var orig = texture.orig;
        var anchor = this._anchor;
        // lets calculate the new untrimmed bounds..
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var w1 = -anchor._x * orig.width;
        var w0 = w1 + orig.width;
        var h1 = -anchor._y * orig.height;
        var h0 = h1 + orig.height;
        // xy
        vertexData[0] = (a * w1) + (c * h1) + tx;
        vertexData[1] = (d * h1) + (b * w1) + ty;
        // xy
        vertexData[2] = (a * w0) + (c * h1) + tx;
        vertexData[3] = (d * h1) + (b * w0) + ty;
        // xy
        vertexData[4] = (a * w0) + (c * h0) + tx;
        vertexData[5] = (d * h0) + (b * w0) + ty;
        // xy
        vertexData[6] = (a * w1) + (c * h0) + tx;
        vertexData[7] = (d * h0) + (b * w1) + ty;
    };
    /**
    *
    * Renders the object using the WebGL renderer
    *
    * @protected
    * @param {PIXI.Renderer} renderer - The webgl renderer to use.
    */
    Sprite.prototype._render = function (renderer) {
        this.calculateVertices();
        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
    };
    /**
     * Updates the bounds of the sprite.
     *
     * @protected
     */
    Sprite.prototype._calculateBounds = function () {
        var trim = this._texture.trim;
        var orig = this._texture.orig;
        // First lets check to see if the current texture has a trim..
        if (!trim || (trim.width === orig.width && trim.height === orig.height)) {
            // no trim! lets use the usual calculations..
            this.calculateVertices();
            this._bounds.addQuad(this.vertexData);
        }
        else {
            // lets calculate a special trimmed bounds...
            this.calculateTrimmedVertices();
            this._bounds.addQuad(this.vertexTrimmedData);
        }
    };
    /**
     * Gets the local bounds of the sprite object.
     *
     * @param {PIXI.Rectangle} [rect] - The output rectangle.
     * @return {PIXI.Rectangle} The bounds.
     */
    Sprite.prototype.getLocalBounds = function (rect) {
        // we can do a fast local bounds if the sprite has no children!
        if (this.children.length === 0) {
            this._bounds.minX = this._texture.orig.width * -this._anchor._x;
            this._bounds.minY = this._texture.orig.height * -this._anchor._y;
            this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
            this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
            if (!rect) {
                if (!this._localBoundsRect) {
                    this._localBoundsRect = new Rectangle();
                }
                rect = this._localBoundsRect;
            }
            return this._bounds.getRectangle(rect);
        }
        return _super.prototype.getLocalBounds.call(this, rect);
    };
    /**
     * Tests if a point is inside this sprite
     *
     * @param {PIXI.IPointData} point - the point to test
     * @return {boolean} the result of the test
     */
    Sprite.prototype.containsPoint = function (point) {
        this.worldTransform.applyInverse(point, tempPoint);
        var width = this._texture.orig.width;
        var height = this._texture.orig.height;
        var x1 = -width * this.anchor.x;
        var y1 = 0;
        if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
            y1 = -height * this.anchor.y;
            if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
                return true;
            }
        }
        return false;
    };
    /**
     * Destroys this sprite and optionally its texture and children
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */
    Sprite.prototype.destroy = function (options) {
        _super.prototype.destroy.call(this, options);
        this._texture.off('update', this._onTextureUpdate, this);
        this._anchor = null;
        var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;
        if (destroyTexture) {
            var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;
            this._texture.destroy(!!destroyBaseTexture);
        }
        this._texture = null;
    };
    // some helper functions..
    /**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
     * @param {object} [options] - See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.Sprite} The newly created sprite
     */
    Sprite.from = function (source, options) {
        var texture = (source instanceof Texture)
            ? source
            : Texture.from(source, options);
        return new Sprite(texture);
    };
    Object.defineProperty(Sprite.prototype, "roundPixels", {
        get: function () {
            return this._roundPixels;
        },
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        set: function (value) {
            if (this._roundPixels !== value) {
                this._transformID = -1;
            }
            this._roundPixels = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "width", {
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        get: function () {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function (value) {
            var s = sign(this.scale.x) || 1;
            this.scale.x = s * value / this._texture.orig.width;
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "height", {
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        get: function () {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function (value) {
            var s = sign(this.scale.y) || 1;
            this.scale.y = s * value / this._texture.orig.height;
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "anchor", {
        /**
         * The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the sprite's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {PIXI.ObservablePoint}
         */
        get: function () {
            return this._anchor;
        },
        set: function (value) {
            this._anchor.copyFrom(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "tint", {
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        get: function () {
            return this._tint;
        },
        set: function (value) {
            this._tint = value;
            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "texture", {
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
        get: function () {
            return this._texture;
        },
        set: function (value) {
            if (this._texture === value) {
                return;
            }
            if (this._texture) {
                this._texture.off('update', this._onTextureUpdate, this);
            }
            this._texture = value || Texture.EMPTY;
            this._cachedTint = 0xFFFFFF;
            this._textureID = -1;
            this._textureTrimmedID = -1;
            if (value) {
                // wait for the texture to load
                if (value.baseTexture.valid) {
                    this._onTextureUpdate();
                }
                else {
                    value.once('update', this._onTextureUpdate, this);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    return Sprite;
}(Container));

export { Sprite };
