import { T as Texture, b as BaseTexture, c as BatchDrawCall, d as BatchTextureArray, e as BatchGeometry, U as UniformGroup, S as Shader, f as State } from '../common/core.es-89569ca4.js';
import { d as deprecation, b as hex2rgb, k as earcut_1, c as premultiplyTint } from '../common/utils.es-3c1074c4.js';
import { C as Container, B as Bounds } from '../common/display.es-a4efb68b.js';
import '../common/ticker.es-8d6a7f87.js';
import '../common/_commonjsHelpers-8a10f9bf.js';

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
 * The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *
 * @class
 * @memberof PIXI
 */
var Circle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the center of this circle
     * @param {number} [y=0] - The Y coordinate of the center of this circle
     * @param {number} [radius=0] - The radius of the circle
     */
    function Circle(x, y, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radius === void 0) { radius = 0; }
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
        /**
         * @member {number}
         * @default 0
         */
        this.radius = radius;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.CIRC
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.CIRC;
    }
    /**
     * Creates a clone of this Circle instance
     *
     * @return {PIXI.Circle} a copy of the Circle
     */
    Circle.prototype.clone = function () {
        return new Circle(this.x, this.y, this.radius);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this circle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Circle
     */
    Circle.prototype.contains = function (x, y) {
        if (this.radius <= 0) {
            return false;
        }
        var r2 = this.radius * this.radius;
        var dx = (this.x - x);
        var dy = (this.y - y);
        dx *= dx;
        dy *= dy;
        return (dx + dy <= r2);
    };
    /**
    * Returns the framing rectangle of the circle as a Rectangle object
    *
    * @return {PIXI.Rectangle} the framing rectangle
    */
    Circle.prototype.getBounds = function () {
        return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    };
    return Circle;
}());

/**
 * The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *
 * @class
 * @memberof PIXI
 */
var Ellipse = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the center of this ellipse
     * @param {number} [y=0] - The Y coordinate of the center of this ellipse
     * @param {number} [halfWidth=0] - The half width of this ellipse
     * @param {number} [halfHeight=0] - The half height of this ellipse
     */
    function Ellipse(x, y, halfWidth, halfHeight) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (halfWidth === void 0) { halfWidth = 0; }
        if (halfHeight === void 0) { halfHeight = 0; }
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
        /**
         * @member {number}
         * @default 0
         */
        this.width = halfWidth;
        /**
         * @member {number}
         * @default 0
         */
        this.height = halfHeight;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.ELIP
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.ELIP;
    }
    /**
     * Creates a clone of this Ellipse instance
     *
     * @return {PIXI.Ellipse} a copy of the ellipse
     */
    Ellipse.prototype.clone = function () {
        return new Ellipse(this.x, this.y, this.width, this.height);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */
    Ellipse.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        // normalize the coords to an ellipse with center 0,0
        var normx = ((x - this.x) / this.width);
        var normy = ((y - this.y) / this.height);
        normx *= normx;
        normy *= normy;
        return (normx + normy <= 1);
    };
    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return {PIXI.Rectangle} the framing rectangle
     */
    Ellipse.prototype.getBounds = function () {
        return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    };
    return Ellipse;
}());

/**
 * A class to define a shape via user defined co-orinates.
 *
 * @class
 * @memberof PIXI
 */
var Polygon = /** @class */ (function () {
    /**
     * @param {PIXI.IPoint[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    function Polygon() {
        var arguments$1 = arguments;

        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments$1[_i];
        }
        var flat = Array.isArray(points[0]) ? points[0] : points;
        // if this is an array of points, convert it to a flat array of numbers
        if (typeof flat[0] !== 'number') {
            var p = [];
            for (var i = 0, il = flat.length; i < il; i++) {
                p.push(flat[i].x, flat[i].y);
            }
            flat = p;
        }
        /**
         * An array of the points of this polygon
         *
         * @member {number[]}
         */
        this.points = flat;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.POLY;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean}
         * @default true
         */
        this.closeStroke = true;
    }
    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */
    Polygon.prototype.clone = function () {
        var points = this.points.slice();
        var polygon = new Polygon(points);
        polygon.closeStroke = this.closeStroke;
        return polygon;
    };
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */
    Polygon.prototype.contains = function (x, y) {
        var inside = false;
        // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js
        var length = this.points.length / 2;
        for (var i = 0, j = length - 1; i < length; j = i++) {
            var xi = this.points[i * 2];
            var yi = this.points[(i * 2) + 1];
            var xj = this.points[j * 2];
            var yj = this.points[(j * 2) + 1];
            var intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        return inside;
    };
    return Polygon;
}());

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 */
var RoundedRectangle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    function RoundedRectangle(x, y, width, height, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (radius === void 0) { radius = 20; }
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
        /**
         * @member {number}
         * @default 0
         */
        this.width = width;
        /**
         * @member {number}
         * @default 0
         */
        this.height = height;
        /**
         * @member {number}
         * @default 20
         */
        this.radius = radius;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readonly
         * @default PIXI.SHAPES.RREC
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.RREC;
    }
    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
     */
    RoundedRectangle.prototype.clone = function () {
        return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
     */
    RoundedRectangle.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        if (x >= this.x && x <= this.x + this.width) {
            if (y >= this.y && y <= this.y + this.height) {
                if ((y >= this.y + this.radius && y <= this.y + this.height - this.radius)
                    || (x >= this.x + this.radius && x <= this.x + this.width - this.radius)) {
                    return true;
                }
                var dx = x - (this.x + this.radius);
                var dy = y - (this.y + this.radius);
                var radius2 = this.radius * this.radius;
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.width - this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dy = y - (this.y + this.height - this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
            }
        }
        return false;
    };
    return RoundedRectangle;
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
 * @pixi/graphics - v5.3.7
 * Compiled Tue, 29 Dec 2020 19:30:11 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */

/**
 * Supported line joints in `PIXI.LineStyle` for graphics.
 *
 * @see PIXI.Graphics#lineStyle
 * @see https://graphicdesign.stackexchange.com/questions/59018/what-is-a-bevel-join-of-two-lines-exactly-illustrator
 *
 * @name LINE_JOIN
 * @memberof PIXI
 * @static
 * @enum {string}
 * @property {string} MITER - 'miter': make a sharp corner where outer part of lines meet
 * @property {string} BEVEL - 'bevel': add a square butt at each end of line segment and fill the triangle at turn
 * @property {string} ROUND - 'round': add an arc at the joint
 */
var LINE_JOIN;
(function (LINE_JOIN) {
    LINE_JOIN["MITER"] = "miter";
    LINE_JOIN["BEVEL"] = "bevel";
    LINE_JOIN["ROUND"] = "round";
})(LINE_JOIN || (LINE_JOIN = {}));
/**
 * Support line caps in `PIXI.LineStyle` for graphics.
 *
 * @see PIXI.Graphics#lineStyle
 *
 * @name LINE_CAP
 * @memberof PIXI
 * @static
 * @enum {string}
 * @property {string} BUTT - 'butt': don't add any cap at line ends (leaves orthogonal edges)
 * @property {string} ROUND - 'round': add semicircle at ends
 * @property {string} SQUARE - 'square': add square at end (like `BUTT` except more length at end)
 */
var LINE_CAP;
(function (LINE_CAP) {
    LINE_CAP["BUTT"] = "butt";
    LINE_CAP["ROUND"] = "round";
    LINE_CAP["SQUARE"] = "square";
})(LINE_CAP || (LINE_CAP = {}));
/**
 * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
 * the resolution is calculated based on the curve's length to ensure better visual quality.
 * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name GRAPHICS_CURVES
 * @type {object}
 * @property {boolean} adaptive=false - flag indicating if the resolution should be adaptive
 * @property {number} maxLength=10 - maximal length of a single segment of the curve (if adaptive = false, ignored)
 * @property {number} minSegments=8 - minimal number of segments in the curve (if adaptive = false, ignored)
 * @property {number} maxSegments=2048 - maximal number of segments in the curve (if adaptive = false, ignored)
 */
var GRAPHICS_CURVES = {
    adaptive: true,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    epsilon: 0.0001,
    _segmentsCount: function (length, defaultSegments) {
        if (defaultSegments === void 0) { defaultSegments = 20; }
        if (!this.adaptive || !length || isNaN(length)) {
            return defaultSegments;
        }
        var result = Math.ceil(length / this.maxLength);
        if (result < this.minSegments) {
            result = this.minSegments;
        }
        else if (result > this.maxSegments) {
            result = this.maxSegments;
        }
        return result;
    },
};

/**
 * Fill style object for Graphics.
 *
 * @class
 * @memberof PIXI
 */
var FillStyle = /** @class */ (function () {
    function FillStyle() {
        /**
         * The hex color value used when coloring the Graphics object.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        this.color = 0xFFFFFF;
        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number}
         * @default 1
         */
        this.alpha = 1.0;
        /**
         * The texture to be used for the fill.
         *
         * @member {PIXI.Texture}
         * @default 0
         */
        this.texture = Texture.WHITE;
        /**
         * The transform aplpied to the texture.
         *
         * @member {PIXI.Matrix}
         * @default null
         */
        this.matrix = null;
        /**
         * If the current fill is visible.
         *
         * @member {boolean}
         * @default false
         */
        this.visible = false;
        this.reset();
    }
    /**
     * Clones the object
     *
     * @return {PIXI.FillStyle}
     */
    FillStyle.prototype.clone = function () {
        var obj = new FillStyle();
        obj.color = this.color;
        obj.alpha = this.alpha;
        obj.texture = this.texture;
        obj.matrix = this.matrix;
        obj.visible = this.visible;
        return obj;
    };
    /**
     * Reset
     */
    FillStyle.prototype.reset = function () {
        this.color = 0xFFFFFF;
        this.alpha = 1;
        this.texture = Texture.WHITE;
        this.matrix = null;
        this.visible = false;
    };
    /**
     * Destroy and don't use after this
     */
    FillStyle.prototype.destroy = function () {
        this.texture = null;
        this.matrix = null;
    };
    return FillStyle;
}());

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
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildPoly = {
    build: function (graphicsData) {
        graphicsData.points = graphicsData.shape.points.slice();
    },
    triangulate: function (graphicsData, graphicsGeometry) {
        var points = graphicsData.points;
        var holes = graphicsData.holes;
        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;
        if (points.length >= 6) {
            var holeArray = [];
            // Process holes..
            for (var i = 0; i < holes.length; i++) {
                var hole = holes[i];
                holeArray.push(points.length / 2);
                points = points.concat(hole.points);
            }
            // sort color
            var triangles = earcut_1(points, holeArray, 2);
            if (!triangles) {
                return;
            }
            var vertPos = verts.length / 2;
            for (var i = 0; i < triangles.length; i += 3) {
                indices.push(triangles[i] + vertPos);
                indices.push(triangles[i + 1] + vertPos);
                indices.push(triangles[i + 2] + vertPos);
            }
            for (var i = 0; i < points.length; i++) {
                verts.push(points[i]);
            }
        }
    },
};

// for type only
/**
 * Builds a circle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object to draw
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildCircle = {
    build: function (graphicsData) {
        // need to convert points to a nice regular data
        var circleData = graphicsData.shape;
        var points = graphicsData.points;
        var x = circleData.x;
        var y = circleData.y;
        var width;
        var height;
        points.length = 0;
        // TODO - bit hacky??
        if (graphicsData.type === SHAPES.CIRC) {
            width = circleData.radius;
            height = circleData.radius;
        }
        else {
            var ellipseData = graphicsData.shape;
            width = ellipseData.width;
            height = ellipseData.height;
        }
        if (width === 0 || height === 0) {
            return;
        }
        var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius))
            || Math.floor(15 * Math.sqrt(width + height));
        totalSegs /= 2.3;
        var seg = (Math.PI * 2) / totalSegs;
        for (var i = 0; i < totalSegs - 0.5; i++) {
            points.push(x + (Math.sin(-seg * i) * width), y + (Math.cos(-seg * i) * height));
        }
        points.push(points[0], points[1]);
    },
    triangulate: function (graphicsData, graphicsGeometry) {
        var points = graphicsData.points;
        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;
        var vertPos = verts.length / 2;
        var center = vertPos;
        var circle = (graphicsData.shape);
        var matrix = graphicsData.matrix;
        var x = circle.x;
        var y = circle.y;
        // Push center (special point)
        verts.push(graphicsData.matrix ? (matrix.a * x) + (matrix.c * y) + matrix.tx : x, graphicsData.matrix ? (matrix.b * x) + (matrix.d * y) + matrix.ty : y);
        for (var i = 0; i < points.length; i += 2) {
            verts.push(points[i], points[i + 1]);
            // add some uvs
            indices.push(vertPos++, center, vertPos);
        }
    },
};

/**
 * Builds a rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildRectangle = {
    build: function (graphicsData) {
        // --- //
        // need to convert points to a nice regular data
        //
        var rectData = graphicsData.shape;
        var x = rectData.x;
        var y = rectData.y;
        var width = rectData.width;
        var height = rectData.height;
        var points = graphicsData.points;
        points.length = 0;
        points.push(x, y, x + width, y, x + width, y + height, x, y + height);
    },
    triangulate: function (graphicsData, graphicsGeometry) {
        var points = graphicsData.points;
        var verts = graphicsGeometry.points;
        var vertPos = verts.length / 2;
        verts.push(points[0], points[1], points[2], points[3], points[6], points[7], points[4], points[5]);
        graphicsGeometry.indices.push(vertPos, vertPos + 1, vertPos + 2, vertPos + 1, vertPos + 2, vertPos + 3);
    },
};

/**
 * Calculate a single point for a quadratic bezier curve.
 * Utility function used by quadraticBezierCurve.
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @param {number} perc - percentage
 * @return {number} the result
 *
 */
function getPt(n1, n2, perc) {
    var diff = n2 - n1;
    return n1 + (diff * perc);
}
/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} fromX - Origin point x
 * @param {number} fromY - Origin point x
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [out=[]] - The output array to add points into. If not passed, a new array is created.
 * @return {number[]} an array of points
 */
function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out) {
    if (out === void 0) { out = []; }
    var n = 20;
    var points = out;
    var xa = 0;
    var ya = 0;
    var xb = 0;
    var yb = 0;
    var x = 0;
    var y = 0;
    for (var i = 0, j = 0; i <= n; ++i) {
        j = i / n;
        // The Green Line
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);
        // The Black Dot
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);
        points.push(x, y);
    }
    return points;
}
/**
 * Builds a rounded rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildRoundedRectangle = {
    build: function (graphicsData) {
        var rrectData = graphicsData.shape;
        var points = graphicsData.points;
        var x = rrectData.x;
        var y = rrectData.y;
        var width = rrectData.width;
        var height = rrectData.height;
        // Don't allow negative radius or greater than half the smallest width
        var radius = Math.max(0, Math.min(rrectData.radius, Math.min(width, height) / 2));
        points.length = 0;
        // No radius, do a simple rectangle
        if (!radius) {
            points.push(x, y, x + width, y, x + width, y + height, x, y + height);
        }
        else {
            quadraticBezierCurve(x, y + radius, x, y, x + radius, y, points);
            quadraticBezierCurve(x + width - radius, y, x + width, y, x + width, y + radius, points);
            quadraticBezierCurve(x + width, y + height - radius, x + width, y + height, x + width - radius, y + height, points);
            quadraticBezierCurve(x + radius, y + height, x, y + height, x, y + height - radius, points);
        }
        // this tiny number deals with the issue that occurs when points overlap and earcut fails to triangulate the item.
        // TODO - fix this properly, this is not very elegant.. but it works for now.
    },
    triangulate: function (graphicsData, graphicsGeometry) {
        var points = graphicsData.points;
        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;
        var vecPos = verts.length / 2;
        var triangles = earcut_1(points, null, 2);
        for (var i = 0, j = triangles.length; i < j; i += 3) {
            indices.push(triangles[i] + vecPos);
            //     indices.push(triangles[i] + vecPos);
            indices.push(triangles[i + 1] + vecPos);
            //   indices.push(triangles[i + 2] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
        }
        for (var i = 0, j = points.length; i < j; i++) {
            verts.push(points[i], points[++i]);
        }
    },
};

/**
 * Buffers vertices to draw a square cap.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} x - X-coord of end point
 * @param {number} y - Y-coord of end point
 * @param {number} nx - X-coord of line normal pointing inside
 * @param {number} ny - Y-coord of line normal pointing inside
 * @param {Array<number>} verts - vertex buffer
 * @returns {}
 */
function square(x, y, nx, ny, innerWeight, outerWeight, clockwise, /* rotation for square (true at left end, false at right end) */ verts) {
    var ix = x - (nx * innerWeight);
    var iy = y - (ny * innerWeight);
    var ox = x + (nx * outerWeight);
    var oy = y + (ny * outerWeight);
    /* Rotate nx,ny for extension vector */
    var exx;
    var eyy;
    if (clockwise) {
        exx = ny;
        eyy = -nx;
    }
    else {
        exx = -ny;
        eyy = nx;
    }
    /* [i|0]x,y extended at cap */
    var eix = ix + exx;
    var eiy = iy + eyy;
    var eox = ox + exx;
    var eoy = oy + eyy;
    /* Square itself must be inserted clockwise*/
    verts.push(eix, eiy);
    verts.push(eox, eoy);
    return 2;
}
/**
 * Buffers vertices to draw an arc at the line joint or cap.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} cx - X-coord of center
 * @param {number} cy - Y-coord of center
 * @param {number} sx - X-coord of arc start
 * @param {number} sy - Y-coord of arc start
 * @param {number} ex - X-coord of arc end
 * @param {number} ey - Y-coord of arc end
 * @param {Array<number>} verts - buffer of vertices
 * @param {boolean} clockwise - orientation of vertices
 * @returns {number} - no. of vertices pushed
 */
function round(cx, cy, sx, sy, ex, ey, verts, clockwise) {
    var cx2p0x = sx - cx;
    var cy2p0y = sy - cy;
    var angle0 = Math.atan2(cx2p0x, cy2p0y);
    var angle1 = Math.atan2(ex - cx, ey - cy);
    if (clockwise && angle0 < angle1) {
        angle0 += Math.PI * 2;
    }
    else if (!clockwise && angle0 > angle1) {
        angle1 += Math.PI * 2;
    }
    var startAngle = angle0;
    var angleDiff = angle1 - angle0;
    var absAngleDiff = Math.abs(angleDiff);
    /* if (absAngleDiff >= PI_LBOUND && absAngleDiff <= PI_UBOUND)
    {
        const r1x = cx - nxtPx;
        const r1y = cy - nxtPy;

        if (r1x === 0)
        {
            if (r1y > 0)
            {
                angleDiff = -angleDiff;
            }
        }
        else if (r1x >= -GRAPHICS_CURVES.epsilon)
        {
            angleDiff = -angleDiff;
        }
    }*/
    var radius = Math.sqrt((cx2p0x * cx2p0x) + (cy2p0y * cy2p0y));
    var segCount = ((15 * absAngleDiff * Math.sqrt(radius) / Math.PI) >> 0) + 1;
    var angleInc = angleDiff / segCount;
    startAngle += angleInc;
    if (clockwise) {
        verts.push(cx, cy);
        verts.push(sx, sy);
        for (var i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
            verts.push(cx, cy);
            verts.push(cx + ((Math.sin(angle) * radius)), cy + ((Math.cos(angle) * radius)));
        }
        verts.push(cx, cy);
        verts.push(ex, ey);
    }
    else {
        verts.push(sx, sy);
        verts.push(cx, cy);
        for (var i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
            verts.push(cx + ((Math.sin(angle) * radius)), cy + ((Math.cos(angle) * radius)));
            verts.push(cx, cy);
        }
        verts.push(ex, ey);
        verts.push(cx, cy);
    }
    return segCount * 2;
}
/**
 * Builds a line to draw using the polygon method.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildNonNativeLine(graphicsData, graphicsGeometry) {
    var shape = graphicsData.shape;
    var points = graphicsData.points || shape.points.slice();
    var eps = graphicsGeometry.closePointEps;
    if (points.length === 0) {
        return;
    }
    // if the line width is an odd number add 0.5 to align to a whole pixel
    // commenting this out fixes #711 and #1620
    // if (graphicsData.lineWidth%2)
    // {
    //     for (i = 0; i < points.length; i++)
    //     {
    //         points[i] += 0.5;
    //     }
    // }
    var style = graphicsData.lineStyle;
    // get first and last point.. figure out the middle!
    var firstPoint = new Point(points[0], points[1]);
    var lastPoint = new Point(points[points.length - 2], points[points.length - 1]);
    var closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
    var closedPath = Math.abs(firstPoint.x - lastPoint.x) < eps
        && Math.abs(firstPoint.y - lastPoint.y) < eps;
    // if the first point is the last point - gonna have issues :)
    if (closedShape) {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();
        if (closedPath) {
            points.pop();
            points.pop();
            lastPoint.set(points[points.length - 2], points[points.length - 1]);
        }
        var midPointX = (firstPoint.x + lastPoint.x) * 0.5;
        var midPointY = (lastPoint.y + firstPoint.y) * 0.5;
        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }
    var verts = graphicsGeometry.points;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length / 2;
    // Max. inner and outer width
    var width = style.width / 2;
    var widthSquared = width * width;
    var miterLimitSquared = style.miterLimit * style.miterLimit;
    /* Line segments of interest where (x1,y1) forms the corner. */
    var x0 = points[0];
    var y0 = points[1];
    var x1 = points[2];
    var y1 = points[3];
    var x2 = 0;
    var y2 = 0;
    /* perp[?](x|y) = the line normal with magnitude lineWidth. */
    var perpx = -(y0 - y1);
    var perpy = x0 - x1;
    var perp1x = 0;
    var perp1y = 0;
    var dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    var ratio = style.alignment; // 0.5;
    var innerWeight = (1 - ratio) * 2;
    var outerWeight = ratio * 2;
    if (!closedShape) {
        if (style.cap === LINE_CAP.ROUND) {
            indexCount += round(x0 - (perpx * (innerWeight - outerWeight) * 0.5), y0 - (perpy * (innerWeight - outerWeight) * 0.5), x0 - (perpx * innerWeight), y0 - (perpy * innerWeight), x0 + (perpx * outerWeight), y0 + (perpy * outerWeight), verts, true) + 2;
        }
        else if (style.cap === LINE_CAP.SQUARE) {
            indexCount += square(x0, y0, perpx, perpy, innerWeight, outerWeight, true, verts);
        }
    }
    // Push first point (below & above vertices)
    verts.push(x0 - (perpx * innerWeight), y0 - (perpy * innerWeight));
    verts.push(x0 + (perpx * outerWeight), y0 + (perpy * outerWeight));
    for (var i = 1; i < length - 1; ++i) {
        x0 = points[(i - 1) * 2];
        y0 = points[((i - 1) * 2) + 1];
        x1 = points[i * 2];
        y1 = points[(i * 2) + 1];
        x2 = points[(i + 1) * 2];
        y2 = points[((i + 1) * 2) + 1];
        perpx = -(y0 - y1);
        perpy = x0 - x1;
        dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;
        perp1x = -(y1 - y2);
        perp1y = x1 - x2;
        dist = Math.sqrt((perp1x * perp1x) + (perp1y * perp1y));
        perp1x /= dist;
        perp1y /= dist;
        perp1x *= width;
        perp1y *= width;
        /* d[x|y](0|1) = the component displacment between points p(0,1|1,2) */
        var dx0 = x1 - x0;
        var dy0 = y0 - y1;
        var dx1 = x1 - x2;
        var dy1 = y2 - y1;
        /* +ve if internal angle counterclockwise, -ve if internal angle clockwise. */
        var cross = (dy0 * dx1) - (dy1 * dx0);
        var clockwise = (cross < 0);
        /* Going nearly straight? */
        if (Math.abs(cross) < 0.1) {
            verts.push(x1 - (perpx * innerWeight), y1 - (perpy * innerWeight));
            verts.push(x1 + (perpx * outerWeight), y1 + (perpy * outerWeight));
            continue;
        }
        /* p[x|y] is the miter point. pdist is the distance between miter point and p1. */
        var c1 = ((-perpx + x0) * (-perpy + y1)) - ((-perpx + x1) * (-perpy + y0));
        var c2 = ((-perp1x + x2) * (-perp1y + y1)) - ((-perp1x + x1) * (-perp1y + y2));
        var px = ((dx0 * c2) - (dx1 * c1)) / cross;
        var py = ((dy1 * c1) - (dy0 * c2)) / cross;
        var pdist = ((px - x1) * (px - x1)) + ((py - y1) * (py - y1));
        /* Inner miter point */
        var imx = x1 + ((px - x1) * innerWeight);
        var imy = y1 + ((py - y1) * innerWeight);
        /* Outer miter point */
        var omx = x1 - ((px - x1) * outerWeight);
        var omy = y1 - ((py - y1) * outerWeight);
        /* Is the inside miter point too far away, creating a spike? */
        var smallerInsideSegmentSq = Math.min((dx0 * dx0) + (dy0 * dy0), (dx1 * dx1) + (dy1 * dy1));
        var insideWeight = clockwise ? innerWeight : outerWeight;
        var smallerInsideDiagonalSq = smallerInsideSegmentSq + (insideWeight * insideWeight * widthSquared);
        var insideMiterOk = pdist <= smallerInsideDiagonalSq;
        if (insideMiterOk) {
            if (style.join === LINE_JOIN.BEVEL || pdist / widthSquared > miterLimitSquared) {
                if (clockwise) /* rotating at inner angle */ {
                    verts.push(imx, imy); // inner miter point
                    verts.push(x1 + (perpx * outerWeight), y1 + (perpy * outerWeight)); // first segment's outer vertex
                    verts.push(imx, imy); // inner miter point
                    verts.push(x1 + (perp1x * outerWeight), y1 + (perp1y * outerWeight)); // second segment's outer vertex
                }
                else /* rotating at outer angle */ {
                    verts.push(x1 - (perpx * innerWeight), y1 - (perpy * innerWeight)); // first segment's inner vertex
                    verts.push(omx, omy); // outer miter point
                    verts.push(x1 - (perp1x * innerWeight), y1 - (perp1y * innerWeight)); // second segment's outer vertex
                    verts.push(omx, omy); // outer miter point
                }
                indexCount += 2;
            }
            else if (style.join === LINE_JOIN.ROUND) {
                if (clockwise) /* arc is outside */ {
                    verts.push(imx, imy);
                    verts.push(x1 + (perpx * outerWeight), y1 + (perpy * outerWeight));
                    indexCount += round(x1, y1, x1 + (perpx * outerWeight), y1 + (perpy * outerWeight), x1 + (perp1x * outerWeight), y1 + (perp1y * outerWeight), verts, true) + 4;
                    verts.push(imx, imy);
                    verts.push(x1 + (perp1x * outerWeight), y1 + (perp1y * outerWeight));
                }
                else /* arc is inside */ {
                    verts.push(x1 - (perpx * innerWeight), y1 - (perpy * innerWeight));
                    verts.push(omx, omy);
                    indexCount += round(x1, y1, x1 - (perpx * innerWeight), y1 - (perpy * innerWeight), x1 - (perp1x * innerWeight), y1 - (perp1y * innerWeight), verts, false) + 4;
                    verts.push(x1 - (perp1x * innerWeight), y1 - (perp1y * innerWeight));
                    verts.push(omx, omy);
                }
            }
            else {
                verts.push(imx, imy);
                verts.push(omx, omy);
            }
        }
        else // inside miter is NOT ok
         {
            verts.push(x1 - (perpx * innerWeight), y1 - (perpy * innerWeight)); // first segment's inner vertex
            verts.push(x1 + (perpx * outerWeight), y1 + (perpy * outerWeight)); // first segment's outer vertex
            if (style.join === LINE_JOIN.BEVEL || pdist / widthSquared > miterLimitSquared) ;
            else if (style.join === LINE_JOIN.ROUND) {
                if (clockwise) /* arc is outside */ {
                    indexCount += round(x1, y1, x1 + (perpx * outerWeight), y1 + (perpy * outerWeight), x1 + (perp1x * outerWeight), y1 + (perp1y * outerWeight), verts, true) + 2;
                }
                else /* arc is inside */ {
                    indexCount += round(x1, y1, x1 - (perpx * innerWeight), y1 - (perpy * innerWeight), x1 - (perp1x * innerWeight), y1 - (perp1y * innerWeight), verts, false) + 2;
                }
            }
            else {
                if (clockwise) {
                    verts.push(omx, omy); // inner miter point
                    verts.push(omx, omy); // inner miter point
                }
                else {
                    verts.push(imx, imy); // outer miter point
                    verts.push(imx, imy); // outer miter point
                }
                indexCount += 2;
            }
            verts.push(x1 - (perp1x * innerWeight), y1 - (perp1y * innerWeight)); // second segment's inner vertex
            verts.push(x1 + (perp1x * outerWeight), y1 + (perp1y * outerWeight)); // second segment's outer vertex
            indexCount += 2;
        }
    }
    x0 = points[(length - 2) * 2];
    y0 = points[((length - 2) * 2) + 1];
    x1 = points[(length - 1) * 2];
    y1 = points[((length - 1) * 2) + 1];
    perpx = -(y0 - y1);
    perpy = x0 - x1;
    dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    verts.push(x1 - (perpx * innerWeight), y1 - (perpy * innerWeight));
    verts.push(x1 + (perpx * outerWeight), y1 + (perpy * outerWeight));
    if (!closedShape) {
        if (style.cap === LINE_CAP.ROUND) {
            indexCount += round(x1 - (perpx * (innerWeight - outerWeight) * 0.5), y1 - (perpy * (innerWeight - outerWeight) * 0.5), x1 - (perpx * innerWeight), y1 - (perpy * innerWeight), x1 + (perpx * outerWeight), y1 + (perpy * outerWeight), verts, false) + 2;
        }
        else if (style.cap === LINE_CAP.SQUARE) {
            indexCount += square(x1, y1, perpx, perpy, innerWeight, outerWeight, false, verts);
        }
    }
    var indices = graphicsGeometry.indices;
    var eps2 = GRAPHICS_CURVES.epsilon * GRAPHICS_CURVES.epsilon;
    // indices.push(indexStart);
    for (var i = indexStart; i < indexCount + indexStart - 2; ++i) {
        x0 = verts[(i * 2)];
        y0 = verts[(i * 2) + 1];
        x1 = verts[(i + 1) * 2];
        y1 = verts[((i + 1) * 2) + 1];
        x2 = verts[(i + 2) * 2];
        y2 = verts[((i + 2) * 2) + 1];
        /* Skip zero area triangles */
        if (Math.abs((x0 * (y1 - y2)) + (x1 * (y2 - y0)) + (x2 * (y0 - y1))) < eps2) {
            continue;
        }
        indices.push(i, i + 1, i + 2);
    }
}
/**
 * Builds a line to draw using the gl.drawArrays(gl.LINES) method
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildNativeLine(graphicsData, graphicsGeometry) {
    var i = 0;
    var shape = graphicsData.shape;
    var points = graphicsData.points || shape.points;
    var closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
    if (points.length === 0)
        { return; }
    var verts = graphicsGeometry.points;
    var indices = graphicsGeometry.indices;
    var length = points.length / 2;
    var startIndex = verts.length / 2;
    var currentIndex = startIndex;
    verts.push(points[0], points[1]);
    for (i = 1; i < length; i++) {
        verts.push(points[i * 2], points[(i * 2) + 1]);
        indices.push(currentIndex, currentIndex + 1);
        currentIndex++;
    }
    if (closedShape) {
        indices.push(currentIndex, startIndex);
    }
}
/**
 * Builds a line to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildLine(graphicsData, graphicsGeometry) {
    if (graphicsData.lineStyle.native) {
        buildNativeLine(graphicsData, graphicsGeometry);
    }
    else {
        buildNonNativeLine(graphicsData, graphicsGeometry);
    }
}

/**
 * Draw a star shape with an arbitrary number of points.
 *
 * @class
 * @extends PIXI.Polygon
 * @memberof PIXI.graphicsUtils
 * @param {number} x - Center X position of the star
 * @param {number} y - Center Y position of the star
 * @param {number} points - The number of points of the star, must be > 1
 * @param {number} radius - The outer radius of the star
 * @param {number} [innerRadius] - The inner radius between points, default half `radius`
 * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
 * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
 */
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(x, y, points, radius, innerRadius, rotation) {
        if (rotation === void 0) { rotation = 0; }
        var _this = this;
        innerRadius = innerRadius || radius / 2;
        var startAngle = (-1 * Math.PI / 2) + rotation;
        var len = points * 2;
        var delta = PI_2 / len;
        var polygon = [];
        for (var i = 0; i < len; i++) {
            var r = i % 2 ? innerRadius : radius;
            var angle = (i * delta) + startAngle;
            polygon.push(x + (r * Math.cos(angle)), y + (r * Math.sin(angle)));
        }
        _this = _super.call(this, polygon) || this;
        return _this;
    }
    return Star;
}(Polygon));

/**
 * Utilities for arc curves
 * @class
 * @private
 */
var ArcUtils = /** @class */ (function () {
    function ArcUtils() {
    }
    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @private
     * @param {number} x1 - The x-coordinate of the beginning of the arc
     * @param {number} y1 - The y-coordinate of the beginning of the arc
     * @param {number} x2 - The x-coordinate of the end of the arc
     * @param {number} y2 - The y-coordinate of the end of the arc
     * @param {number} radius - The radius of the arc
     * @return {object} If the arc length is valid, return center of circle, radius and other info otherwise `null`.
     */
    ArcUtils.curveTo = function (x1, y1, x2, y2, radius, points) {
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        var a1 = fromY - y1;
        var b1 = fromX - x1;
        var a2 = y2 - y1;
        var b2 = x2 - x1;
        var mm = Math.abs((a1 * b2) - (b1 * a2));
        if (mm < 1.0e-8 || radius === 0) {
            if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
                points.push(x1, y1);
            }
            return null;
        }
        var dd = (a1 * a1) + (b1 * b1);
        var cc = (a2 * a2) + (b2 * b2);
        var tt = (a1 * a2) + (b1 * b2);
        var k1 = radius * Math.sqrt(dd) / mm;
        var k2 = radius * Math.sqrt(cc) / mm;
        var j1 = k1 * tt / dd;
        var j2 = k2 * tt / cc;
        var cx = (k1 * b2) + (k2 * b1);
        var cy = (k1 * a2) + (k2 * a1);
        var px = b1 * (k2 + j1);
        var py = a1 * (k2 + j1);
        var qx = b2 * (k1 + j2);
        var qy = a2 * (k1 + j2);
        var startAngle = Math.atan2(py - cy, px - cx);
        var endAngle = Math.atan2(qy - cy, qx - cx);
        return {
            cx: (cx + x1),
            cy: (cy + y1),
            radius: radius,
            startAngle: startAngle,
            endAngle: endAngle,
            anticlockwise: (b1 * a2 > b2 * a1),
        };
    };
    /* eslint-disable max-len */
    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @private
     * @param {number} startX - Start x location of arc
     * @param {number} startY - Start y location of arc
     * @param {number} cx - The x-coordinate of the center of the circle
     * @param {number} cy - The y-coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param {number} endAngle - The ending angle, in radians
     * @param {boolean} anticlockwise - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @param {number[]} points - Collection of points to add to
     */
    ArcUtils.arc = function (_startX, _startY, cx, cy, radius, startAngle, endAngle, _anticlockwise, points) {
        var sweep = endAngle - startAngle;
        var n = GRAPHICS_CURVES._segmentsCount(Math.abs(sweep) * radius, Math.ceil(Math.abs(sweep) / PI_2) * 40);
        var theta = (sweep) / (n * 2);
        var theta2 = theta * 2;
        var cTheta = Math.cos(theta);
        var sTheta = Math.sin(theta);
        var segMinus = n - 1;
        var remainder = (segMinus % 1) / segMinus;
        for (var i = 0; i <= segMinus; ++i) {
            var real = i + (remainder * i);
            var angle = ((theta) + startAngle + (theta2 * real));
            var c = Math.cos(angle);
            var s = -Math.sin(angle);
            points.push((((cTheta * c) + (sTheta * s)) * radius) + cx, (((cTheta * -s) + (sTheta * c)) * radius) + cy);
        }
    };
    return ArcUtils;
}());

/**
 * Utilities for bezier curves
 * @class
 * @private
 */
var BezierUtils = /** @class */ (function () {
    function BezierUtils() {
    }
    /**
     * Calculate length of bezier curve.
     * Analytical solution is impossible, since it involves an integral that does not integrate in general.
     * Therefore numerical solution is used.
     *
     * @private
     * @param {number} fromX - Starting point x
     * @param {number} fromY - Starting point y
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {number} Length of bezier curve
     */
    BezierUtils.curveLength = function (fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
        var n = 10;
        var result = 0.0;
        var t = 0.0;
        var t2 = 0.0;
        var t3 = 0.0;
        var nt = 0.0;
        var nt2 = 0.0;
        var nt3 = 0.0;
        var x = 0.0;
        var y = 0.0;
        var dx = 0.0;
        var dy = 0.0;
        var prevX = fromX;
        var prevY = fromY;
        for (var i = 1; i <= n; ++i) {
            t = i / n;
            t2 = t * t;
            t3 = t2 * t;
            nt = (1.0 - t);
            nt2 = nt * nt;
            nt3 = nt2 * nt;
            x = (nt3 * fromX) + (3.0 * nt2 * t * cpX) + (3.0 * nt * t2 * cpX2) + (t3 * toX);
            y = (nt3 * fromY) + (3.0 * nt2 * t * cpY) + (3 * nt * t2 * cpY2) + (t3 * toY);
            dx = prevX - x;
            dy = prevY - y;
            prevX = x;
            prevY = y;
            result += Math.sqrt((dx * dx) + (dy * dy));
        }
        return result;
    };
    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * Ignored from docs since it is not directly exposed.
     *
     * @ignore
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @param {number[]} points - Path array to push points into
     */
    BezierUtils.curveTo = function (cpX, cpY, cpX2, cpY2, toX, toY, points) {
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        points.length -= 2;
        var n = GRAPHICS_CURVES._segmentsCount(BezierUtils.curveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY));
        var dt = 0;
        var dt2 = 0;
        var dt3 = 0;
        var t2 = 0;
        var t3 = 0;
        points.push(fromX, fromY);
        for (var i = 1, j = 0; i <= n; ++i) {
            j = i / n;
            dt = (1 - j);
            dt2 = dt * dt;
            dt3 = dt2 * dt;
            t2 = j * j;
            t3 = t2 * j;
            points.push((dt3 * fromX) + (3 * dt2 * j * cpX) + (3 * dt * t2 * cpX2) + (t3 * toX), (dt3 * fromY) + (3 * dt2 * j * cpY) + (3 * dt * t2 * cpY2) + (t3 * toY));
        }
    };
    return BezierUtils;
}());

/**
 * Utilities for quadratic curves
 * @class
 * @private
 */
var QuadraticUtils = /** @class */ (function () {
    function QuadraticUtils() {
    }
    /**
     * Calculate length of quadratic curve
     * @see {@link http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/}
     * for the detailed explanation of math behind this.
     *
     * @private
     * @param {number} fromX - x-coordinate of curve start point
     * @param {number} fromY - y-coordinate of curve start point
     * @param {number} cpX - x-coordinate of curve control point
     * @param {number} cpY - y-coordinate of curve control point
     * @param {number} toX - x-coordinate of curve end point
     * @param {number} toY - y-coordinate of curve end point
     * @return {number} Length of quadratic curve
     */
    QuadraticUtils.curveLength = function (fromX, fromY, cpX, cpY, toX, toY) {
        var ax = fromX - (2.0 * cpX) + toX;
        var ay = fromY - (2.0 * cpY) + toY;
        var bx = (2.0 * cpX) - (2.0 * fromX);
        var by = (2.0 * cpY) - (2.0 * fromY);
        var a = 4.0 * ((ax * ax) + (ay * ay));
        var b = 4.0 * ((ax * bx) + (ay * by));
        var c = (bx * bx) + (by * by);
        var s = 2.0 * Math.sqrt(a + b + c);
        var a2 = Math.sqrt(a);
        var a32 = 2.0 * a * a2;
        var c2 = 2.0 * Math.sqrt(c);
        var ba = b / a2;
        return ((a32 * s)
            + (a2 * b * (s - c2))
            + (((4.0 * c * a) - (b * b))
                * Math.log(((2.0 * a2) + ba + s) / (ba + c2)))) / (4.0 * a32);
    };
    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @private
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @param {number[]} points - Points to add segments to.
     */
    QuadraticUtils.curveTo = function (cpX, cpY, toX, toY, points) {
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        var n = GRAPHICS_CURVES._segmentsCount(QuadraticUtils.curveLength(fromX, fromY, cpX, cpY, toX, toY));
        var xa = 0;
        var ya = 0;
        for (var i = 1; i <= n; ++i) {
            var j = i / n;
            xa = fromX + ((cpX - fromX) * j);
            ya = fromY + ((cpY - fromY) * j);
            points.push(xa + (((cpX + ((toX - cpX) * j)) - xa) * j), ya + (((cpY + ((toY - cpY) * j)) - ya) * j));
        }
    };
    return QuadraticUtils;
}());

/**
 * A structure to hold interim batch objects for Graphics.
 * @class
 * @memberof PIXI.graphicsUtils
 */
var BatchPart = /** @class */ (function () {
    function BatchPart() {
        this.reset();
    }
    /**
     * Begin batch part
     *
     * @param {PIXI.FillStyle | PIXI.LineStyle} style
     * @param {number} startIndex
     * @param {number} attribStart
     */
    BatchPart.prototype.begin = function (style, startIndex, attribStart) {
        this.reset();
        this.style = style;
        this.start = startIndex;
        this.attribStart = attribStart;
    };
    /**
     * End batch part
     *
     * @param {number} endIndex
     * @param {number} endAttrib
     */
    BatchPart.prototype.end = function (endIndex, endAttrib) {
        this.attribSize = endAttrib - this.attribStart;
        this.size = endIndex - this.start;
    };
    BatchPart.prototype.reset = function () {
        this.style = null;
        this.size = 0;
        this.start = 0;
        this.attribStart = 0;
        this.attribSize = 0;
    };
    return BatchPart;
}());

/**
 * Generalized convenience utilities for Graphics.
 *
 * @namespace graphicsUtils
 * @memberof PIXI
 */
var _a;
/**
 * Map of fill commands for each shape type.
 *
 * @memberof PIXI.graphicsUtils
 * @member {Object} FILL_COMMANDS
 */
var FILL_COMMANDS = (_a = {},
    _a[SHAPES.POLY] = buildPoly,
    _a[SHAPES.CIRC] = buildCircle,
    _a[SHAPES.ELIP] = buildCircle,
    _a[SHAPES.RECT] = buildRectangle,
    _a[SHAPES.RREC] = buildRoundedRectangle,
    _a);
/**
 * Batch pool, stores unused batches for preventing allocations.
 *
 * @memberof PIXI.graphicsUtils
 * @member {Array<PIXI.graphicsUtils.BatchPart>} BATCH_POOL
 */
var BATCH_POOL = [];
/**
 * Draw call pool, stores unused draw calls for preventing allocations.
 *
 * @memberof PIXI.graphicsUtils
 * @member {Array<PIXI.BatchDrawCall>} DRAW_CALL_POOL
 */
var DRAW_CALL_POOL = [];

/**
 * A class to contain data useful for Graphics objects
 *
 * @class
 * @memberof PIXI
 */
var GraphicsData = /** @class */ (function () {
    /**
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param {PIXI.FillStyle} [fillStyle] - the width of the line to draw
     * @param {PIXI.LineStyle} [lineStyle] - the color of the line to draw
     * @param {PIXI.Matrix} [matrix] - Transform matrix
     */
    function GraphicsData(shape, fillStyle, lineStyle, matrix) {
        if (fillStyle === void 0) { fillStyle = null; }
        if (lineStyle === void 0) { lineStyle = null; }
        if (matrix === void 0) { matrix = null; }
        /**
         * The shape object to draw.
         * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle}
         */
        this.shape = shape;
        /**
         * The style of the line.
         * @member {PIXI.LineStyle}
         */
        this.lineStyle = lineStyle;
        /**
         * The style of the fill.
         * @member {PIXI.FillStyle}
         */
        this.fillStyle = fillStyle;
        /**
         * The transform matrix.
         * @member {PIXI.Matrix}
         */
        this.matrix = matrix;
        /**
         * The type of the shape, see the Const.Shapes file for all the existing types,
         * @member {number}
         */
        this.type = shape.type;
        /**
         * The collection of points.
         * @member {number[]}
         */
        this.points = [];
        /**
         * The collection of holes.
         * @member {PIXI.GraphicsData[]}
         */
        this.holes = [];
    }
    /**
     * Creates a new GraphicsData object with the same values as this one.
     *
     * @return {PIXI.GraphicsData} Cloned GraphicsData object
     */
    GraphicsData.prototype.clone = function () {
        return new GraphicsData(this.shape, this.fillStyle, this.lineStyle, this.matrix);
    };
    /**
     * Destroys the Graphics data.
     *
     */
    GraphicsData.prototype.destroy = function () {
        this.shape = null;
        this.holes.length = 0;
        this.holes = null;
        this.points.length = 0;
        this.points = null;
        this.lineStyle = null;
        this.fillStyle = null;
    };
    return GraphicsData;
}());

var tmpPoint = new Point();
var tmpBounds = new Bounds();
/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * GraphicsGeometry is designed to not be continually updating the geometry since it's expensive
 * to re-tesselate using **earcut**. Consider using {@link PIXI.Mesh} for this use-case, it's much faster.
 *
 * @class
 * @extends PIXI.BatchGeometry
 * @memberof PIXI
 */
var GraphicsGeometry = /** @class */ (function (_super) {
    __extends(GraphicsGeometry, _super);
    function GraphicsGeometry() {
        var _this = _super.call(this) || this;
        _this.uvsFloat32 = null;
        _this.indicesUint16 = null;
        /**
         * An array of points to draw, 2 numbers per point
         *
         * @member {number[]}
         * @protected
         */
        _this.points = [];
        /**
         * The collection of colors
         *
         * @member {number[]}
         * @protected
         */
        _this.colors = [];
        /**
         * The UVs collection
         *
         * @member {number[]}
         * @protected
         */
        _this.uvs = [];
        /**
         * The indices of the vertices
         *
         * @member {number[]}
         * @protected
         */
        _this.indices = [];
        /**
         * Reference to the texture IDs.
         *
         * @member {number[]}
         * @protected
         */
        _this.textureIds = [];
        /**
         * The collection of drawn shapes.
         *
         * @member {PIXI.GraphicsData[]}
         * @protected
         */
        _this.graphicsData = [];
        /**
         * Used to detect if the graphics object has changed.
         *
         * @member {number}
         * @protected
         */
        _this.dirty = 0;
        /**
         * Batches need to regenerated if the geometry is updated.
         *
         * @member {number}
         * @protected
         */
        _this.batchDirty = -1;
        /**
         * Used to check if the cache is dirty.
         *
         * @member {number}
         * @protected
         */
        _this.cacheDirty = -1;
        /**
         * Used to detect if we cleared the graphicsData.
         *
         * @member {number}
         * @default 0
         * @protected
         */
        _this.clearDirty = 0;
        /**
         * List of current draw calls drived from the batches.
         *
         * @member {object[]}
         * @protected
         */
        _this.drawCalls = [];
        /**
         * Intermediate abstract format sent to batch system.
         * Can be converted to drawCalls or to batchable objects.
         *
         * @member {PIXI.graphicsUtils.BatchPart[]}
         * @protected
         */
        _this.batches = [];
        /**
         * Index of the last batched shape in the stack of calls.
         *
         * @member {number}
         * @protected
         */
        _this.shapeIndex = 0;
        /**
         * Cached bounds.
         *
         * @member {PIXI.Bounds}
         * @protected
         */
        _this._bounds = new Bounds();
        /**
         * The bounds dirty flag.
         *
         * @member {number}
         * @protected
         */
        _this.boundsDirty = -1;
        /**
         * Padding to add to the bounds.
         *
         * @member {number}
         * @default 0
         */
        _this.boundsPadding = 0;
        _this.batchable = false;
        _this.indicesUint16 = null;
        _this.uvsFloat32 = null;
        /**
         * Minimal distance between points that are considered different.
         * Affects line tesselation.
         *
         * @member {number}
         */
        _this.closePointEps = 1e-4;
        return _this;
    }
    Object.defineProperty(GraphicsGeometry.prototype, "bounds", {
        /**
         * Get the current bounds of the graphic geometry.
         *
         * @member {PIXI.Bounds}
         * @readonly
         */
        get: function () {
            if (this.boundsDirty !== this.dirty) {
                this.boundsDirty = this.dirty;
                this.calculateBounds();
            }
            return this._bounds;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Call if you changed graphicsData manually.
     * Empties all batch buffers.
     */
    GraphicsGeometry.prototype.invalidate = function () {
        this.boundsDirty = -1;
        this.dirty++;
        this.batchDirty++;
        this.shapeIndex = 0;
        this.points.length = 0;
        this.colors.length = 0;
        this.uvs.length = 0;
        this.indices.length = 0;
        this.textureIds.length = 0;
        for (var i = 0; i < this.drawCalls.length; i++) {
            this.drawCalls[i].texArray.clear();
            DRAW_CALL_POOL.push(this.drawCalls[i]);
        }
        this.drawCalls.length = 0;
        for (var i = 0; i < this.batches.length; i++) {
            var batchPart = this.batches[i];
            batchPart.reset();
            BATCH_POOL.push(batchPart);
        }
        this.batches.length = 0;
    };
    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {PIXI.GraphicsGeometry} This GraphicsGeometry object. Good for chaining method calls
     */
    GraphicsGeometry.prototype.clear = function () {
        if (this.graphicsData.length > 0) {
            this.invalidate();
            this.clearDirty++;
            this.graphicsData.length = 0;
        }
        return this;
    };
    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param {PIXI.FillStyle} fillStyle - Defines style of the fill.
     * @param {PIXI.LineStyle} lineStyle - Defines style of the lines.
     * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
     * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
     */
    GraphicsGeometry.prototype.drawShape = function (shape, fillStyle, lineStyle, matrix) {
        if (fillStyle === void 0) { fillStyle = null; }
        if (lineStyle === void 0) { lineStyle = null; }
        if (matrix === void 0) { matrix = null; }
        var data = new GraphicsData(shape, fillStyle, lineStyle, matrix);
        this.graphicsData.push(data);
        this.dirty++;
        return this;
    };
    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
     * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
     */
    GraphicsGeometry.prototype.drawHole = function (shape, matrix) {
        if (matrix === void 0) { matrix = null; }
        if (!this.graphicsData.length) {
            return null;
        }
        var data = new GraphicsData(shape, null, null, matrix);
        var lastShape = this.graphicsData[this.graphicsData.length - 1];
        data.lineStyle = lastShape.lineStyle;
        lastShape.holes.push(data);
        this.dirty++;
        return this;
    };
    /**
     * Destroys the GraphicsGeometry object.
     *
     */
    GraphicsGeometry.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        // destroy each of the GraphicsData objects
        for (var i = 0; i < this.graphicsData.length; ++i) {
            this.graphicsData[i].destroy();
        }
        this.points.length = 0;
        this.points = null;
        this.colors.length = 0;
        this.colors = null;
        this.uvs.length = 0;
        this.uvs = null;
        this.indices.length = 0;
        this.indices = null;
        this.indexBuffer.destroy();
        this.indexBuffer = null;
        this.graphicsData.length = 0;
        this.graphicsData = null;
        this.drawCalls.length = 0;
        this.drawCalls = null;
        this.batches.length = 0;
        this.batches = null;
        this._bounds = null;
    };
    /**
     * Check to see if a point is contained within this geometry.
     *
     * @param {PIXI.IPointData} point - Point to check if it's contained.
     * @return {Boolean} `true` if the point is contained within geometry.
     */
    GraphicsGeometry.prototype.containsPoint = function (point) {
        var graphicsData = this.graphicsData;
        for (var i = 0; i < graphicsData.length; ++i) {
            var data = graphicsData[i];
            if (!data.fillStyle.visible) {
                continue;
            }
            // only deal with fills..
            if (data.shape) {
                if (data.matrix) {
                    data.matrix.applyInverse(point, tmpPoint);
                }
                else {
                    tmpPoint.copyFrom(point);
                }
                if (data.shape.contains(tmpPoint.x, tmpPoint.y)) {
                    var hitHole = false;
                    if (data.holes) {
                        for (var i_1 = 0; i_1 < data.holes.length; i_1++) {
                            var hole = data.holes[i_1];
                            if (hole.shape.contains(tmpPoint.x, tmpPoint.y)) {
                                hitHole = true;
                                break;
                            }
                        }
                    }
                    if (!hitHole) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Generates intermediate batch data. Either gets converted to drawCalls
     * or used to convert to batch objects directly by the Graphics object.
     *
     * @param {boolean} [aloow32Indices] - Allow using 32-bit indices for preventings artefacts when more that 65535 vertices
     */
    GraphicsGeometry.prototype.updateBatches = function (allow32Indices) {
        if (!this.graphicsData.length) {
            this.batchable = true;
            return;
        }
        if (!this.validateBatching()) {
            return;
        }
        this.cacheDirty = this.dirty;
        var uvs = this.uvs;
        var graphicsData = this.graphicsData;
        var batchPart = null;
        var currentStyle = null;
        if (this.batches.length > 0) {
            batchPart = this.batches[this.batches.length - 1];
            currentStyle = batchPart.style;
        }
        for (var i = this.shapeIndex; i < graphicsData.length; i++) {
            this.shapeIndex++;
            var data = graphicsData[i];
            var fillStyle = data.fillStyle;
            var lineStyle = data.lineStyle;
            var command = FILL_COMMANDS[data.type];
            // build out the shapes points..
            command.build(data);
            if (data.matrix) {
                this.transformPoints(data.points, data.matrix);
            }
            for (var j = 0; j < 2; j++) {
                var style = (j === 0) ? fillStyle : lineStyle;
                if (!style.visible)
                    { continue; }
                var nextTexture = style.texture.baseTexture;
                var index_1 = this.indices.length;
                var attribIndex = this.points.length / 2;
                nextTexture.wrapMode = WRAP_MODES.REPEAT;
                if (j === 0) {
                    this.processFill(data);
                }
                else {
                    this.processLine(data);
                }
                var size = (this.points.length / 2) - attribIndex;
                if (size === 0)
                    { continue; }
                // close batch if style is different
                if (batchPart && !this._compareStyles(currentStyle, style)) {
                    batchPart.end(index_1, attribIndex);
                    batchPart = null;
                }
                // spawn new batch if its first batch or previous was closed
                if (!batchPart) {
                    batchPart = BATCH_POOL.pop() || new BatchPart();
                    batchPart.begin(style, index_1, attribIndex);
                    this.batches.push(batchPart);
                    currentStyle = style;
                }
                this.addUvs(this.points, uvs, style.texture, attribIndex, size, style.matrix);
            }
        }
        var index = this.indices.length;
        var attrib = this.points.length / 2;
        if (batchPart) {
            batchPart.end(index, attrib);
        }
        if (this.batches.length === 0) {
            // there are no visible styles in GraphicsData
            // its possible that someone wants Graphics just for the bounds
            this.batchable = true;
            return;
        }
        // prevent allocation when length is same as buffer
        if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) {
            this.indicesUint16.set(this.indices);
        }
        else {
            var need32 = attrib > 0xffff && allow32Indices;
            this.indicesUint16 = need32 ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
        }
        // TODO make this a const..
        this.batchable = this.isBatchable();
        if (this.batchable) {
            this.packBatches();
        }
        else {
            this.buildDrawCalls();
        }
    };
    /**
     * Affinity check
     *
     * @param {PIXI.FillStyle | PIXI.LineStyle} styleA
     * @param {PIXI.FillStyle | PIXI.LineStyle} styleB
     */
    GraphicsGeometry.prototype._compareStyles = function (styleA, styleB) {
        if (!styleA || !styleB) {
            return false;
        }
        if (styleA.texture.baseTexture !== styleB.texture.baseTexture) {
            return false;
        }
        if (styleA.color + styleA.alpha !== styleB.color + styleB.alpha) {
            return false;
        }
        if (!!styleA.native !== !!styleB.native) {
            return false;
        }
        return true;
    };
    /**
     * Test geometry for batching process.
     *
     * @protected
     */
    GraphicsGeometry.prototype.validateBatching = function () {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
            return false;
        }
        for (var i = 0, l = this.graphicsData.length; i < l; i++) {
            var data = this.graphicsData[i];
            var fill = data.fillStyle;
            var line = data.lineStyle;
            if (fill && !fill.texture.baseTexture.valid)
                { return false; }
            if (line && !line.texture.baseTexture.valid)
                { return false; }
        }
        return true;
    };
    /**
     * Offset the indices so that it works with the batcher.
     *
     * @protected
     */
    GraphicsGeometry.prototype.packBatches = function () {
        this.batchDirty++;
        this.uvsFloat32 = new Float32Array(this.uvs);
        var batches = this.batches;
        for (var i = 0, l = batches.length; i < l; i++) {
            var batch = batches[i];
            for (var j = 0; j < batch.size; j++) {
                var index = batch.start + j;
                this.indicesUint16[index] = this.indicesUint16[index] - batch.attribStart;
            }
        }
    };
    /**
     * Checks to see if this graphics geometry can be batched.
     * Currently it needs to be small enough and not contain any native lines.
     *
     * @protected
     */
    GraphicsGeometry.prototype.isBatchable = function () {
        // prevent heavy mesh batching
        if (this.points.length > 0xffff * 2) {
            return false;
        }
        var batches = this.batches;
        for (var i = 0; i < batches.length; i++) {
            if (batches[i].style.native) {
                return false;
            }
        }
        return (this.points.length < GraphicsGeometry.BATCHABLE_SIZE * 2);
    };
    /**
     * Converts intermediate batches data to drawCalls.
     *
     * @protected
     */
    GraphicsGeometry.prototype.buildDrawCalls = function () {
        var TICK = ++BaseTexture._globalBatch;
        for (var i = 0; i < this.drawCalls.length; i++) {
            this.drawCalls[i].texArray.clear();
            DRAW_CALL_POOL.push(this.drawCalls[i]);
        }
        this.drawCalls.length = 0;
        var colors = this.colors;
        var textureIds = this.textureIds;
        var currentGroup = DRAW_CALL_POOL.pop();
        if (!currentGroup) {
            currentGroup = new BatchDrawCall();
            currentGroup.texArray = new BatchTextureArray();
        }
        currentGroup.texArray.count = 0;
        currentGroup.start = 0;
        currentGroup.size = 0;
        currentGroup.type = DRAW_MODES.TRIANGLES;
        var textureCount = 0;
        var currentTexture = null;
        var textureId = 0;
        var native = false;
        var drawMode = DRAW_MODES.TRIANGLES;
        var index = 0;
        this.drawCalls.push(currentGroup);
        // TODO - this can be simplified
        for (var i = 0; i < this.batches.length; i++) {
            var data = this.batches[i];
            // TODO add some full on MAX_TEXTURE CODE..
            var MAX_TEXTURES = 8;
            // Forced cast for checking `native` without errors
            var style = data.style;
            var nextTexture = style.texture.baseTexture;
            if (native !== !!style.native) {
                native = !!style.native;
                drawMode = native ? DRAW_MODES.LINES : DRAW_MODES.TRIANGLES;
                // force the batch to break!
                currentTexture = null;
                textureCount = MAX_TEXTURES;
                TICK++;
            }
            if (currentTexture !== nextTexture) {
                currentTexture = nextTexture;
                if (nextTexture._batchEnabled !== TICK) {
                    if (textureCount === MAX_TEXTURES) {
                        TICK++;
                        textureCount = 0;
                        if (currentGroup.size > 0) {
                            currentGroup = DRAW_CALL_POOL.pop();
                            if (!currentGroup) {
                                currentGroup = new BatchDrawCall();
                                currentGroup.texArray = new BatchTextureArray();
                            }
                            this.drawCalls.push(currentGroup);
                        }
                        currentGroup.start = index;
                        currentGroup.size = 0;
                        currentGroup.texArray.count = 0;
                        currentGroup.type = drawMode;
                    }
                    // TODO add this to the render part..
                    // Hack! Because texture has protected `touched`
                    nextTexture.touched = 1; // touch;
                    nextTexture._batchEnabled = TICK;
                    nextTexture._batchLocation = textureCount;
                    nextTexture.wrapMode = 10497;
                    currentGroup.texArray.elements[currentGroup.texArray.count++] = nextTexture;
                    textureCount++;
                }
            }
            currentGroup.size += data.size;
            index += data.size;
            textureId = nextTexture._batchLocation;
            this.addColors(colors, style.color, style.alpha, data.attribSize);
            this.addTextureIds(textureIds, textureId, data.attribSize);
        }
        BaseTexture._globalBatch = TICK;
        // upload..
        // merge for now!
        this.packAttributes();
    };
    /**
     * Packs attributes to single buffer.
     *
     * @protected
     */
    GraphicsGeometry.prototype.packAttributes = function () {
        var verts = this.points;
        var uvs = this.uvs;
        var colors = this.colors;
        var textureIds = this.textureIds;
        // verts are 2 positions.. so we * by 3 as there are 6 properties.. then 4 cos its bytes
        var glPoints = new ArrayBuffer(verts.length * 3 * 4);
        var f32 = new Float32Array(glPoints);
        var u32 = new Uint32Array(glPoints);
        var p = 0;
        for (var i = 0; i < verts.length / 2; i++) {
            f32[p++] = verts[i * 2];
            f32[p++] = verts[(i * 2) + 1];
            f32[p++] = uvs[i * 2];
            f32[p++] = uvs[(i * 2) + 1];
            u32[p++] = colors[i];
            f32[p++] = textureIds[i];
        }
        this._buffer.update(glPoints);
        this._indexBuffer.update(this.indicesUint16);
    };
    /**
     * Process fill part of Graphics.
     *
     * @param {PIXI.GraphicsData} data
     * @protected
     */
    GraphicsGeometry.prototype.processFill = function (data) {
        if (data.holes.length) {
            this.processHoles(data.holes);
            buildPoly.triangulate(data, this);
        }
        else {
            var command = FILL_COMMANDS[data.type];
            command.triangulate(data, this);
        }
    };
    /**
     * Process line part of Graphics.
     *
     * @param {PIXI.GraphicsData} data
     * @protected
     */
    GraphicsGeometry.prototype.processLine = function (data) {
        buildLine(data, this);
        for (var i = 0; i < data.holes.length; i++) {
            buildLine(data.holes[i], this);
        }
    };
    /**
     * Process the holes data.
     *
     * @param {PIXI.GraphicsData[]} holes - Holes to render
     * @protected
     */
    GraphicsGeometry.prototype.processHoles = function (holes) {
        for (var i = 0; i < holes.length; i++) {
            var hole = holes[i];
            var command = FILL_COMMANDS[hole.type];
            command.build(hole);
            if (hole.matrix) {
                this.transformPoints(hole.points, hole.matrix);
            }
        }
    };
    /**
     * Update the local bounds of the object. Expensive to use performance-wise.
     *
     * @protected
     */
    GraphicsGeometry.prototype.calculateBounds = function () {
        var bounds = this._bounds;
        var sequenceBounds = tmpBounds;
        var curMatrix = Matrix.IDENTITY;
        this._bounds.clear();
        sequenceBounds.clear();
        for (var i = 0; i < this.graphicsData.length; i++) {
            var data = this.graphicsData[i];
            var shape = data.shape;
            var type = data.type;
            var lineStyle = data.lineStyle;
            var nextMatrix = data.matrix || Matrix.IDENTITY;
            var lineWidth = 0.0;
            if (lineStyle && lineStyle.visible) {
                var alignment = lineStyle.alignment;
                lineWidth = lineStyle.width;
                if (type === SHAPES.POLY) {
                    lineWidth = lineWidth * (0.5 + Math.abs(0.5 - alignment));
                }
                else {
                    lineWidth = lineWidth * Math.max(0, alignment);
                }
            }
            if (curMatrix !== nextMatrix) {
                if (!sequenceBounds.isEmpty()) {
                    bounds.addBoundsMatrix(sequenceBounds, curMatrix);
                    sequenceBounds.clear();
                }
                curMatrix = nextMatrix;
            }
            if (type === SHAPES.RECT || type === SHAPES.RREC) {
                var rect = shape;
                sequenceBounds.addFramePad(rect.x, rect.y, rect.x + rect.width, rect.y + rect.height, lineWidth, lineWidth);
            }
            else if (type === SHAPES.CIRC) {
                var circle = shape;
                sequenceBounds.addFramePad(circle.x, circle.y, circle.x, circle.y, circle.radius + lineWidth, circle.radius + lineWidth);
            }
            else if (type === SHAPES.ELIP) {
                var ellipse = shape;
                sequenceBounds.addFramePad(ellipse.x, ellipse.y, ellipse.x, ellipse.y, ellipse.width + lineWidth, ellipse.height + lineWidth);
            }
            else {
                var poly = shape;
                // adding directly to the bounds
                bounds.addVerticesMatrix(curMatrix, poly.points, 0, poly.points.length, lineWidth, lineWidth);
            }
        }
        if (!sequenceBounds.isEmpty()) {
            bounds.addBoundsMatrix(sequenceBounds, curMatrix);
        }
        bounds.pad(this.boundsPadding, this.boundsPadding);
    };
    /**
     * Transform points using matrix.
     *
     * @protected
     * @param {number[]} points - Points to transform
     * @param {PIXI.Matrix} matrix - Transform matrix
     */
    GraphicsGeometry.prototype.transformPoints = function (points, matrix) {
        for (var i = 0; i < points.length / 2; i++) {
            var x = points[(i * 2)];
            var y = points[(i * 2) + 1];
            points[(i * 2)] = (matrix.a * x) + (matrix.c * y) + matrix.tx;
            points[(i * 2) + 1] = (matrix.b * x) + (matrix.d * y) + matrix.ty;
        }
    };
    /**
     * Add colors.
     *
     * @protected
     * @param {number[]} colors - List of colors to add to
     * @param {number} color - Color to add
     * @param {number} alpha - Alpha to use
     * @param {number} size - Number of colors to add
     */
    GraphicsGeometry.prototype.addColors = function (colors, color, alpha, size) {
        // TODO use the premultiply bits Ivan added
        var rgb = (color >> 16) + (color & 0xff00) + ((color & 0xff) << 16);
        var rgba = premultiplyTint(rgb, alpha);
        while (size-- > 0) {
            colors.push(rgba);
        }
    };
    /**
     * Add texture id that the shader/fragment wants to use.
     *
     * @protected
     * @param {number[]} textureIds
     * @param {number} id
     * @param {number} size
     */
    GraphicsGeometry.prototype.addTextureIds = function (textureIds, id, size) {
        while (size-- > 0) {
            textureIds.push(id);
        }
    };
    /**
     * Generates the UVs for a shape.
     *
     * @protected
     * @param {number[]} verts - Vertices
     * @param {number[]} uvs - UVs
     * @param {PIXI.Texture} texture - Reference to Texture
     * @param {number} start - Index buffer start index.
     * @param {number} size - The size/length for index buffer.
     * @param {PIXI.Matrix} [matrix] - Optional transform for all points.
     */
    GraphicsGeometry.prototype.addUvs = function (verts, uvs, texture, start, size, matrix) {
        if (matrix === void 0) { matrix = null; }
        var index = 0;
        var uvsStart = uvs.length;
        var frame = texture.frame;
        while (index < size) {
            var x = verts[(start + index) * 2];
            var y = verts[((start + index) * 2) + 1];
            if (matrix) {
                var nx = (matrix.a * x) + (matrix.c * y) + matrix.tx;
                y = (matrix.b * x) + (matrix.d * y) + matrix.ty;
                x = nx;
            }
            index++;
            uvs.push(x / frame.width, y / frame.height);
        }
        var baseTexture = texture.baseTexture;
        if (frame.width < baseTexture.width
            || frame.height < baseTexture.height) {
            this.adjustUvs(uvs, texture, uvsStart, size);
        }
    };
    /**
     * Modify uvs array according to position of texture region
     * Does not work with rotated or trimmed textures
     *
     * @param {number[]} uvs - array
     * @param {PIXI.Texture} texture - region
     * @param {number} start - starting index for uvs
     * @param {number} size - how many points to adjust
     */
    GraphicsGeometry.prototype.adjustUvs = function (uvs, texture, start, size) {
        var baseTexture = texture.baseTexture;
        var eps = 1e-6;
        var finish = start + (size * 2);
        var frame = texture.frame;
        var scaleX = frame.width / baseTexture.width;
        var scaleY = frame.height / baseTexture.height;
        var offsetX = frame.x / frame.width;
        var offsetY = frame.y / frame.height;
        var minX = Math.floor(uvs[start] + eps);
        var minY = Math.floor(uvs[start + 1] + eps);
        for (var i = start + 2; i < finish; i += 2) {
            minX = Math.min(minX, Math.floor(uvs[i] + eps));
            minY = Math.min(minY, Math.floor(uvs[i + 1] + eps));
        }
        offsetX -= minX;
        offsetY -= minY;
        for (var i = start; i < finish; i += 2) {
            uvs[i] = (uvs[i] + offsetX) * scaleX;
            uvs[i + 1] = (uvs[i + 1] + offsetY) * scaleY;
        }
    };
    /**
     * The maximum number of points to consider an object "batchable",
     * able to be batched by the renderer's batch system.
     *
     * @memberof PIXI.GraphicsGeometry
     * @static
     * @member {number} BATCHABLE_SIZE
     * @default 100
     */
    GraphicsGeometry.BATCHABLE_SIZE = 100;
    return GraphicsGeometry;
}(BatchGeometry));

/**
 * Represents the line style for Graphics.
 * @memberof PIXI
 * @class
 * @extends PIXI.FillStyle
 */
var LineStyle = /** @class */ (function (_super) {
    __extends(LineStyle, _super);
    function LineStyle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number}
         * @default 0
         */
        _this.width = 0;
        /**
         * The alignment of any lines drawn (0.5 = middle, 1 = outer, 0 = inner).
         *
         * @member {number}
         * @default 0.5
         */
        _this.alignment = 0.5;
        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean}
         * @default false
         */
        _this.native = false;
        /**
         * Line cap style.
         *
         * @member {PIXI.LINE_CAP}
         * @default PIXI.LINE_CAP.BUTT
         */
        _this.cap = LINE_CAP.BUTT;
        /**
         * Line join style.
         *
         * @member {PIXI.LINE_JOIN}
         * @default PIXI.LINE_JOIN.MITER
         */
        _this.join = LINE_JOIN.MITER;
        /**
         * Miter limit.
         *
         * @member {number}
         * @default 10
         */
        _this.miterLimit = 10;
        return _this;
    }
    /**
     * Clones the object
     *
     * @return {PIXI.LineStyle}
     */
    LineStyle.prototype.clone = function () {
        var obj = new LineStyle();
        obj.color = this.color;
        obj.alpha = this.alpha;
        obj.texture = this.texture;
        obj.matrix = this.matrix;
        obj.visible = this.visible;
        obj.width = this.width;
        obj.alignment = this.alignment;
        obj.native = this.native;
        obj.cap = this.cap;
        obj.join = this.join;
        obj.miterLimit = this.miterLimit;
        return obj;
    };
    /**
     * Reset the line style to default.
     */
    LineStyle.prototype.reset = function () {
        _super.prototype.reset.call(this);
        // Override default line style color
        this.color = 0x0;
        this.alignment = 0.5;
        this.width = 0;
        this.native = false;
    };
    return LineStyle;
}(FillStyle));

var temp = new Float32Array(3);
// a default shaders map used by graphics..
var DEFAULT_SHADERS = {};
/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * Note that because Graphics can share a GraphicsGeometry with other instances,
 * it is necessary to call `destroy()` to properly dereference the underlying
 * GraphicsGeometry and avoid a memory leak. Alternatively, keep using the same
 * Graphics instance and call `clear()` between redraws.
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */
var Graphics = /** @class */ (function (_super) {
    __extends(Graphics, _super);
    /**
     * @param {PIXI.GraphicsGeometry} [geometry=null] - Geometry to use, if omitted
     *        will create a new GraphicsGeometry instance.
     */
    function Graphics(geometry) {
        if (geometry === void 0) { geometry = null; }
        var _this = _super.call(this) || this;
        _this._geometry = geometry || new GraphicsGeometry();
        _this._geometry.refCount++;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Graphics objects.
         *
         * @member {PIXI.Shader}
         */
        _this.shader = null;
        /**
         * Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         *
         * @member {PIXI.State}
         */
        _this.state = State.for2d();
        /**
         * Current fill style
         *
         * @member {PIXI.FillStyle}
         * @protected
         */
        _this._fillStyle = new FillStyle();
        /**
         * Current line style
         *
         * @member {PIXI.LineStyle}
         * @protected
         */
        _this._lineStyle = new LineStyle();
        /**
         * Current shape transform matrix.
         *
         * @member {PIXI.Matrix}
         * @protected
         */
        _this._matrix = null;
        /**
         * Current hole mode is enabled.
         *
         * @member {boolean}
         * @default false
         * @protected
         */
        _this._holeMode = false;
        /**
         * Current path
         *
         * @member {PIXI.Polygon}
         * @protected
         */
        _this.currentPath = null;
        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */
        /**
         * A collections of batches! These can be drawn by the renderer batch system.
         *
         * @protected
         * @member {object[]}
         */
        _this.batches = [];
        /**
         * Update dirty for limiting calculating tints for batches.
         *
         * @protected
         * @member {number}
         * @default -1
         */
        _this.batchTint = -1;
        /**
         * Update dirty for limiting calculating batches.
         *
         * @protected
         * @member {number}
         * @default -1
         */
        _this.batchDirty = -1;
        /**
         * Copy of the object vertex data.
         *
         * @protected
         * @member {Float32Array}
         */
        _this.vertexData = null;
        /**
         * Renderer plugin for batching
         *
         * @member {string}
         * @default 'batch'
         */
        _this.pluginName = 'batch';
        _this._transformID = -1;
        // Set default
        _this.tint = 0xFFFFFF;
        _this.blendMode = BLEND_MODES.NORMAL;
        return _this;
    }
    Object.defineProperty(Graphics.prototype, "geometry", {
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
         *
         * @member {PIXI.GraphicsGeometry}
         * @readonly
         */
        get: function () {
            return this._geometry;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a new Graphics object with the same values as this one.
     * Note that only the geometry of the object is cloned, not its transform (position,scale,etc)
     *
     * @return {PIXI.Graphics} A clone of the graphics object
     */
    Graphics.prototype.clone = function () {
        this.finishPoly();
        return new Graphics(this._geometry);
    };
    Object.defineProperty(Graphics.prototype, "blendMode", {
        get: function () {
            return this.state.blendMode;
        },
        /**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        set: function (value) {
            this.state.blendMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics.prototype, "tint", {
        /**
         * The tint applied to the graphic shape. This is a hex value. A value of
         * 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        get: function () {
            return this._tint;
        },
        set: function (value) {
            this._tint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics.prototype, "fill", {
        /**
         * The current fill style.
         *
         * @member {PIXI.FillStyle}
         * @readonly
         */
        get: function () {
            return this._fillStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics.prototype, "line", {
        /**
         * The current line style.
         *
         * @member {PIXI.LineStyle}
         * @readonly
         */
        get: function () {
            return this._lineStyle;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @method PIXI.Graphics#lineStyle
     * @param {number} [width=0] - width of the line to draw, will update the objects stored style
     * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
     * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @param {object} [options] - Line style options
     * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
     * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style
     * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @param {PIXI.LINE_CAP}[options.cap=PIXI.LINE_CAP.BUTT] - line cap style
     * @param {PIXI.LINE_JOIN}[options.join=PIXI.LINE_JOIN.MITER] - line join style
     * @param {number}[options.miterLimit=10] - miter limit ratio
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineStyle = function (options) {
        if (options === void 0) { options = null; }
        // Support non-object params: (width, color, alpha, alignment, native)
        if (typeof options === 'number') {
            // eslint-disable-next-line
            var args = arguments;
            options = {
                width: args[0] || 0,
                color: args[1] || 0x0,
                alpha: args[2] !== undefined ? args[2] : 1,
                alignment: args[3] !== undefined ? args[3] : 0.5,
                native: !!args[4],
            };
        }
        return this.lineTextureStyle(options);
    };
    /**
     * Like line style but support texture for line fill.
     *
     * @param {object} [options] - Collection of options for setting line style.
     * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
     * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style.
     *  Default 0xFFFFFF if texture present.
     * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {PIXI.Matrix} [options.matrix=null] - Texture matrix to transform texture
     * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @param {PIXI.LINE_CAP}[options.cap=PIXI.LINE_CAP.BUTT] - line cap style
     * @param {PIXI.LINE_JOIN}[options.join=PIXI.LINE_JOIN.MITER] - line join style
     * @param {number}[options.miterLimit=10] - miter limit ratio
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineTextureStyle = function (options) {
        // backward compatibility with params: (width, texture,
        // color, alpha, matrix, alignment, native)
        if (typeof options === 'number') {
            deprecation('v5.2.0', 'Please use object-based options for Graphics#lineTextureStyle');
            // eslint-disable-next-line
            var _a = arguments, width = _a[0], texture = _a[1], color = _a[2], alpha = _a[3], matrix = _a[4], alignment = _a[5], native = _a[6];
            options = { width: width, texture: texture, color: color, alpha: alpha, matrix: matrix, alignment: alignment, native: native };
            // Remove undefined keys
            Object.keys(options).forEach(function (key) { return options[key] === undefined && delete options[key]; });
        }
        // Apply defaults
        options = Object.assign({
            width: 0,
            texture: Texture.WHITE,
            color: (options && options.texture) ? 0xFFFFFF : 0x0,
            alpha: 1,
            matrix: null,
            alignment: 0.5,
            native: false,
            cap: LINE_CAP.BUTT,
            join: LINE_JOIN.MITER,
            miterLimit: 10,
        }, options);
        if (this.currentPath) {
            this.startPoly();
        }
        var visible = options.width > 0 && options.alpha > 0;
        if (!visible) {
            this._lineStyle.reset();
        }
        else {
            if (options.matrix) {
                options.matrix = options.matrix.clone();
                options.matrix.invert();
            }
            Object.assign(this._lineStyle, { visible: visible }, options);
        }
        return this;
    };
    /**
     * Start a polygon object internally
     * @protected
     */
    Graphics.prototype.startPoly = function () {
        if (this.currentPath) {
            var points = this.currentPath.points;
            var len = this.currentPath.points.length;
            if (len > 2) {
                this.drawShape(this.currentPath);
                this.currentPath = new Polygon();
                this.currentPath.closeStroke = false;
                this.currentPath.points.push(points[len - 2], points[len - 1]);
            }
        }
        else {
            this.currentPath = new Polygon();
            this.currentPath.closeStroke = false;
        }
    };
    /**
     * Finish the polygon object.
     * @protected
     */
    Graphics.prototype.finishPoly = function () {
        if (this.currentPath) {
            if (this.currentPath.points.length > 2) {
                this.drawShape(this.currentPath);
                this.currentPath = null;
            }
            else {
                this.currentPath.points.length = 0;
            }
        }
    };
    /**
     * Moves the current drawing position to x, y.
     *
     * @param {number} x - the X coordinate to move to
     * @param {number} y - the Y coordinate to move to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.moveTo = function (x, y) {
        this.startPoly();
        this.currentPath.points[0] = x;
        this.currentPath.points[1] = y;
        return this;
    };
    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     *
     * @param {number} x - the X coordinate to draw to
     * @param {number} y - the Y coordinate to draw to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineTo = function (x, y) {
        if (!this.currentPath) {
            this.moveTo(0, 0);
        }
        // remove duplicates..
        var points = this.currentPath.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        if (fromX !== x || fromY !== y) {
            points.push(x, y);
        }
        return this;
    };
    /**
     * Initialize the curve
     *
     * @protected
     * @param {number} [x=0]
     * @param {number} [y=0]
     */
    Graphics.prototype._initCurve = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (this.currentPath) {
            if (this.currentPath.points.length === 0) {
                this.currentPath.points = [x, y];
            }
        }
        else {
            this.moveTo(x, y);
        }
    };
    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {
        this._initCurve();
        var points = this.currentPath.points;
        if (points.length === 0) {
            this.moveTo(0, 0);
        }
        QuadraticUtils.curveTo(cpX, cpY, toX, toY, points);
        return this;
    };
    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {
        this._initCurve();
        BezierUtils.curveTo(cpX, cpY, cpX2, cpY2, toX, toY, this.currentPath.points);
        return this;
    };
    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param {number} x1 - The x-coordinate of the first tangent point of the arc
     * @param {number} y1 - The y-coordinate of the first tangent point of the arc
     * @param {number} x2 - The x-coordinate of the end of the arc
     * @param {number} y2 - The y-coordinate of the end of the arc
     * @param {number} radius - The radius of the arc
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {
        this._initCurve(x1, y1);
        var points = this.currentPath.points;
        var result = ArcUtils.curveTo(x1, y1, x2, y2, radius, points);
        if (result) {
            var cx = result.cx, cy = result.cy, radius_1 = result.radius, startAngle = result.startAngle, endAngle = result.endAngle, anticlockwise = result.anticlockwise;
            this.arc(cx, cy, radius_1, startAngle, endAngle, anticlockwise);
        }
        return this;
    };
    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param {number} cx - The x-coordinate of the center of the circle
     * @param {number} cy - The y-coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param {number} endAngle - The ending angle, in radians
     * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.arc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
        if (anticlockwise === void 0) { anticlockwise = false; }
        if (startAngle === endAngle) {
            return this;
        }
        if (!anticlockwise && endAngle <= startAngle) {
            endAngle += PI_2;
        }
        else if (anticlockwise && startAngle <= endAngle) {
            startAngle += PI_2;
        }
        var sweep = endAngle - startAngle;
        if (sweep === 0) {
            return this;
        }
        var startX = cx + (Math.cos(startAngle) * radius);
        var startY = cy + (Math.sin(startAngle) * radius);
        var eps = this._geometry.closePointEps;
        // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
        var points = this.currentPath ? this.currentPath.points : null;
        if (points) {
            // TODO: make a better fix.
            // We check how far our start is from the last existing point
            var xDiff = Math.abs(points[points.length - 2] - startX);
            var yDiff = Math.abs(points[points.length - 1] - startY);
            if (xDiff < eps && yDiff < eps) ;
            else {
                points.push(startX, startY);
            }
        }
        else {
            this.moveTo(startX, startY);
            points = this.currentPath.points;
        }
        ArcUtils.arc(startX, startY, cx, cy, radius, startAngle, endAngle, anticlockwise, points);
        return this;
    };
    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param {number} [color=0] - the color of the fill
     * @param {number} [alpha=1] - the alpha of the fill
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.beginFill = function (color, alpha) {
        if (color === void 0) { color = 0; }
        if (alpha === void 0) { alpha = 1; }
        return this.beginTextureFill({ texture: Texture.WHITE, color: color, alpha: alpha });
    };
    /**
     * Begin the texture fill
     *
     * @param {object} [options] - Object object.
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
     * @param {number} [options.color=0xffffff] - Background to fill behind texture
     * @param {number} [options.alpha=1] - Alpha of fill
     * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.beginTextureFill = function (options) {
        // backward compatibility with params: (texture, color, alpha, matrix)
        if (options instanceof Texture) {
            deprecation('v5.2.0', 'Please use object-based options for Graphics#beginTextureFill');
            // eslint-disable-next-line
            var _a = arguments, texture = _a[0], color = _a[1], alpha = _a[2], matrix = _a[3];
            options = { texture: texture, color: color, alpha: alpha, matrix: matrix };
            // Remove undefined keys
            Object.keys(options).forEach(function (key) { return options[key] === undefined && delete options[key]; });
        }
        // Apply defaults
        options = Object.assign({
            texture: Texture.WHITE,
            color: 0xFFFFFF,
            alpha: 1,
            matrix: null,
        }, options);
        if (this.currentPath) {
            this.startPoly();
        }
        var visible = options.alpha > 0;
        if (!visible) {
            this._fillStyle.reset();
        }
        else {
            if (options.matrix) {
                options.matrix = options.matrix.clone();
                options.matrix.invert();
            }
            Object.assign(this._fillStyle, { visible: visible }, options);
        }
        return this;
    };
    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.endFill = function () {
        this.finishPoly();
        this._fillStyle.reset();
        return this;
    };
    /**
     * Draws a rectangle shape.
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawRect = function (x, y, width, height) {
        return this.drawShape(new Rectangle(x, y, width, height));
    };
    /**
     * Draw a rectangle shape with rounded/beveled corners.
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @param {number} radius - Radius of the rectangle corners
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawRoundedRect = function (x, y, width, height, radius) {
        return this.drawShape(new RoundedRectangle(x, y, width, height, radius));
    };
    /**
     * Draws a circle.
     *
     * @param {number} x - The X coordinate of the center of the circle
     * @param {number} y - The Y coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawCircle = function (x, y, radius) {
        return this.drawShape(new Circle(x, y, radius));
    };
    /**
     * Draws an ellipse.
     *
     * @param {number} x - The X coordinate of the center of the ellipse
     * @param {number} y - The Y coordinate of the center of the ellipse
     * @param {number} width - The half width of the ellipse
     * @param {number} height - The half height of the ellipse
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawEllipse = function (x, y, width, height) {
        return this.drawShape(new Ellipse(x, y, width, height));
    };
    /**
     * Draws a polygon using the given path.
     *
     * @param {number[]|PIXI.Point[]|PIXI.Polygon} path - The path data used to construct the polygon.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawPolygon = function () {
        var arguments$1 = arguments;

        var path = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            path[_i] = arguments$1[_i];
        }
        var points;
        var closeStroke = true; // !!this._fillStyle;
        var poly = path[0];
        // check if data has points..
        if (poly.points) {
            closeStroke = poly.closeStroke;
            points = poly.points;
        }
        else if (Array.isArray(path[0])) {
            points = path[0];
        }
        else {
            points = path;
        }
        var shape = new Polygon(points);
        shape.closeStroke = closeStroke;
        this.drawShape(shape);
        return this;
    };
    /**
     * Draw any shape.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawShape = function (shape) {
        if (!this._holeMode) {
            this._geometry.drawShape(shape, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix);
        }
        else {
            this._geometry.drawHole(shape, this._matrix);
        }
        return this;
    };
    /**
     * Draw a star shape with an arbitrary number of points.
     *
     * @param {number} x - Center X position of the star
     * @param {number} y - Center Y position of the star
     * @param {number} points - The number of points of the star, must be > 1
     * @param {number} radius - The outer radius of the star
     * @param {number} [innerRadius] - The inner radius between points, default half `radius`
     * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawStar = function (x, y, points, radius, innerRadius, rotation) {
        if (rotation === void 0) { rotation = 0; }
        return this.drawPolygon(new Star(x, y, points, radius, innerRadius, rotation));
    };
    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.clear = function () {
        this._geometry.clear();
        this._lineStyle.reset();
        this._fillStyle.reset();
        this._boundsID++;
        this._matrix = null;
        this._holeMode = false;
        this.currentPath = null;
        return this;
    };
    /**
     * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
     * masked with gl.scissor.
     *
     * @returns {boolean} True if only 1 rect.
     */
    Graphics.prototype.isFastRect = function () {
        var data = this._geometry.graphicsData;
        return data.length === 1
            && data[0].shape.type === SHAPES.RECT
            && !(data[0].lineStyle.visible && data[0].lineStyle.width);
    };
    /**
     * Renders the object using the WebGL renderer
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._render = function (renderer) {
        this.finishPoly();
        var geometry = this._geometry;
        var hasuint32 = renderer.context.supports.uint32Indices;
        // batch part..
        // batch it!
        geometry.updateBatches(hasuint32);
        if (geometry.batchable) {
            if (this.batchDirty !== geometry.batchDirty) {
                this._populateBatches();
            }
            this._renderBatched(renderer);
        }
        else {
            // no batching...
            renderer.batch.flush();
            this._renderDirect(renderer);
        }
    };
    /**
     * Populating batches for rendering
     *
     * @protected
     */
    Graphics.prototype._populateBatches = function () {
        var geometry = this._geometry;
        var blendMode = this.blendMode;
        var len = geometry.batches.length;
        this.batchTint = -1;
        this._transformID = -1;
        this.batchDirty = geometry.batchDirty;
        this.batches.length = len;
        this.vertexData = new Float32Array(geometry.points);
        for (var i = 0; i < len; i++) {
            var gI = geometry.batches[i];
            var color = gI.style.color;
            var vertexData = new Float32Array(this.vertexData.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
            var uvs = new Float32Array(geometry.uvsFloat32.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
            var indices = new Uint16Array(geometry.indicesUint16.buffer, gI.start * 2, gI.size);
            var batch = {
                vertexData: vertexData,
                blendMode: blendMode,
                indices: indices,
                uvs: uvs,
                _batchRGB: hex2rgb(color),
                _tintRGB: color,
                _texture: gI.style.texture,
                alpha: gI.style.alpha,
                worldAlpha: 1
            };
            this.batches[i] = batch;
        }
    };
    /**
     * Renders the batches using the BathedRenderer plugin
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._renderBatched = function (renderer) {
        if (!this.batches.length) {
            return;
        }
        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
        this.calculateVertices();
        this.calculateTints();
        for (var i = 0, l = this.batches.length; i < l; i++) {
            var batch = this.batches[i];
            batch.worldAlpha = this.worldAlpha * batch.alpha;
            renderer.plugins[this.pluginName].render(batch);
        }
    };
    /**
     * Renders the graphics direct
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._renderDirect = function (renderer) {
        var shader = this._resolveDirectShader(renderer);
        var geometry = this._geometry;
        var tint = this.tint;
        var worldAlpha = this.worldAlpha;
        var uniforms = shader.uniforms;
        var drawCalls = geometry.drawCalls;
        // lets set the transfomr
        uniforms.translationMatrix = this.transform.worldTransform;
        // and then lets set the tint..
        uniforms.tint[0] = (((tint >> 16) & 0xFF) / 255) * worldAlpha;
        uniforms.tint[1] = (((tint >> 8) & 0xFF) / 255) * worldAlpha;
        uniforms.tint[2] = ((tint & 0xFF) / 255) * worldAlpha;
        uniforms.tint[3] = worldAlpha;
        // the first draw call, we can set the uniforms of the shader directly here.
        // this means that we can tack advantage of the sync function of pixi!
        // bind and sync uniforms..
        // there is a way to optimise this..
        renderer.shader.bind(shader);
        renderer.geometry.bind(geometry, shader);
        // set state..
        renderer.state.set(this.state);
        // then render the rest of them...
        for (var i = 0, l = drawCalls.length; i < l; i++) {
            this._renderDrawCallDirect(renderer, geometry.drawCalls[i]);
        }
    };
    /**
     * Renders specific DrawCall
     *
     * @param {PIXI.Renderer} renderer
     * @param {PIXI.BatchDrawCall} drawCall
     */
    Graphics.prototype._renderDrawCallDirect = function (renderer, drawCall) {
        var texArray = drawCall.texArray, type = drawCall.type, size = drawCall.size, start = drawCall.start;
        var groupTextureCount = texArray.count;
        for (var j = 0; j < groupTextureCount; j++) {
            renderer.texture.bind(texArray.elements[j], j);
        }
        renderer.geometry.draw(type, size, start);
    };
    /**
     * Resolves shader for direct rendering
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._resolveDirectShader = function (renderer) {
        var shader = this.shader;
        var pluginName = this.pluginName;
        if (!shader) {
            // if there is no shader here, we can use the default shader.
            // and that only gets created if we actually need it..
            // but may be more than one plugins for graphics
            if (!DEFAULT_SHADERS[pluginName]) {
                var MAX_TEXTURES = renderer.plugins.batch.MAX_TEXTURES;
                var sampleValues = new Int32Array(MAX_TEXTURES);
                for (var i = 0; i < MAX_TEXTURES; i++) {
                    sampleValues[i] = i;
                }
                var uniforms = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new Matrix(),
                    default: UniformGroup.from({ uSamplers: sampleValues }, true),
                };
                var program = renderer.plugins[pluginName]._shader.program;
                DEFAULT_SHADERS[pluginName] = new Shader(program, uniforms);
            }
            shader = DEFAULT_SHADERS[pluginName];
        }
        return shader;
    };
    /**
     * Retrieves the bounds of the graphic shape as a rectangle object
     *
     * @protected
     */
    Graphics.prototype._calculateBounds = function () {
        this.finishPoly();
        var geometry = this._geometry;
        // skipping when graphics is empty, like a container
        if (!geometry.graphicsData.length) {
            return;
        }
        var _a = geometry.bounds, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
    };
    /**
     * Tests if a point is inside this graphics object
     *
     * @param {PIXI.IPointData} point - the point to test
     * @return {boolean} the result of the test
     */
    Graphics.prototype.containsPoint = function (point) {
        this.worldTransform.applyInverse(point, Graphics._TEMP_POINT);
        return this._geometry.containsPoint(Graphics._TEMP_POINT);
    };
    /**
     * Recalcuate the tint by applying tin to batches using Graphics tint.
     * @protected
     */
    Graphics.prototype.calculateTints = function () {
        if (this.batchTint !== this.tint) {
            this.batchTint = this.tint;
            var tintRGB = hex2rgb(this.tint, temp);
            for (var i = 0; i < this.batches.length; i++) {
                var batch = this.batches[i];
                var batchTint = batch._batchRGB;
                var r = (tintRGB[0] * batchTint[0]) * 255;
                var g = (tintRGB[1] * batchTint[1]) * 255;
                var b = (tintRGB[2] * batchTint[2]) * 255;
                // TODO Ivan, can this be done in one go?
                var color = (r << 16) + (g << 8) + (b | 0);
                batch._tintRGB = (color >> 16)
                    + (color & 0xff00)
                    + ((color & 0xff) << 16);
            }
        }
    };
    /**
     * If there's a transform update or a change to the shape of the
     * geometry, recaculate the vertices.
     * @protected
     */
    Graphics.prototype.calculateVertices = function () {
        var wtID = this.transform._worldID;
        if (this._transformID === wtID) {
            return;
        }
        this._transformID = wtID;
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var data = this._geometry.points; // batch.vertexDataOriginal;
        var vertexData = this.vertexData;
        var count = 0;
        for (var i = 0; i < data.length; i += 2) {
            var x = data[i];
            var y = data[i + 1];
            vertexData[count++] = (a * x) + (c * y) + tx;
            vertexData[count++] = (d * y) + (b * x) + ty;
        }
    };
    /**
     * Closes the current path.
     *
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.closePath = function () {
        var currentPath = this.currentPath;
        if (currentPath) {
            // we don't need to add extra point in the end because buildLine will take care of that
            currentPath.closeStroke = true;
        }
        return this;
    };
    /**
     * Apply a matrix to the positional data.
     *
     * @param {PIXI.Matrix} matrix - Matrix to use for transform current shape.
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.setMatrix = function (matrix) {
        this._matrix = matrix;
        return this;
    };
    /**
     * Begin adding holes to the last draw shape
     * IMPORTANT: holes must be fully inside a shape to work
     * Also weirdness ensues if holes overlap!
     * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
     * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.beginHole = function () {
        this.finishPoly();
        this._holeMode = true;
        return this;
    };
    /**
     * End adding holes to the last draw shape
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.endHole = function () {
        this.finishPoly();
        this._holeMode = false;
        return this;
    };
    /**
     * Destroys the Graphics object.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    Graphics.prototype.destroy = function (options) {
        this._geometry.refCount--;
        if (this._geometry.refCount === 0) {
            this._geometry.dispose();
        }
        this._matrix = null;
        this.currentPath = null;
        this._lineStyle.destroy();
        this._lineStyle = null;
        this._fillStyle.destroy();
        this._fillStyle = null;
        this._geometry = null;
        this.shader = null;
        this.vertexData = null;
        this.batches.length = 0;
        this.batches = null;
        _super.prototype.destroy.call(this, options);
    };
    /**
     * Temporary point to use for containsPoint
     *
     * @static
     * @private
     * @member {PIXI.Point}
     */
    Graphics._TEMP_POINT = new Point();
    return Graphics;
}(Container));

export { Graphics };
