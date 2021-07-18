import { c as commonjsGlobal, a as createCommonjsModule, b as getDefaultExportFromCjs } from './common/_commonjsHelpers-8a10f9bf.js';
import { q as utils_es } from './common/utils.es-14f1c904.js';
import { g as core_es } from './common/core.es-e8c084f6.js';
import { d as display_es } from './common/display.es-e1a4b9cd.js';
import './common/ticker.es-d925a065.js';

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
/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant {number} RAD_TO_DEG
 * @memberof PIXI
 */
var RAD_TO_DEG = 180 / Math.PI;
/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant {number} DEG_TO_RAD
 * @memberof PIXI
 */
var DEG_TO_RAD = Math.PI / 180;
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

var math_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Circle: Circle,
    DEG_TO_RAD: DEG_TO_RAD,
    Ellipse: Ellipse,
    Matrix: Matrix,
    ObservablePoint: ObservablePoint,
    PI_2: PI_2,
    Point: Point,
    Polygon: Polygon,
    RAD_TO_DEG: RAD_TO_DEG,
    Rectangle: Rectangle,
    RoundedRectangle: RoundedRectangle,
    get SHAPES () { return SHAPES; },
    Transform: Transform,
    groupD8: groupD8
});

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

var _baseIndexOfWith = baseIndexOfWith;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? _baseIndexOfWith : _baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = _copyArray(values);
  }
  if (iteratee) {
    seen = _arrayMap(array, _baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

var _basePullAll = basePullAll;

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? _basePullAll(array, values)
    : array;
}

var pullAll_1 = pullAll;

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = _baseRest(pullAll_1);

var pull_1 = pull;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

var mapKeys_1 = mapKeys;

var lib = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(utils_es, math_es, core_es, pull_1, display_es, mapKeys_1);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ log_logger; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ clamp; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ rand; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ copyProperty; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ copyArray; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ applyMixins; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ folderName; });

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);

// CONCATENATED MODULE: ./src/utils/log.ts

/**
 * A simple tagged logger.
 *
 * You can replace the methods with your own ones.
 *
 * ```js
 * import { logger } from 'pixi-live2d-display';
 *
 * logger.log = (tag, ...messages) => {
 *     console.log(tag, 'says:', ...messages);
 * };
 * ```
 */
var log_logger;
(function (logger) {
    function log(tag, ...messages) {
        if (config["b" /* config */].logLevel <= config["b" /* config */].LOG_LEVEL_VERBOSE) {
            console.log(`[${tag}]`, ...messages);
        }
    }
    logger.log = log;
    function warn(tag, ...messages) {
        if (config["b" /* config */].logLevel <= config["b" /* config */].LOG_LEVEL_WARNING) {
            console.warn(`[${tag}]`, ...messages);
        }
    }
    logger.warn = warn;
    function error(tag, ...messages) {
        if (config["b" /* config */].logLevel <= config["b" /* config */].LOG_LEVEL_ERROR) {
            console.error(`[${tag}]`, ...messages);
        }
    }
    logger.error = error;
})(log_logger || (log_logger = {}));

// CONCATENATED MODULE: ./src/utils/math.ts
/**
 * These functions can be slightly faster than the ones in Lodash.
 * @packageDocumentation
 */
function clamp(num, lower, upper) {
    return num < lower ? lower : num > upper ? upper : num;
}
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// CONCATENATED MODULE: ./src/utils/obj.ts
/**
 * Copies a property at only if it matches the `type`.
 * @param type - Type expected to match `typeof` on the property.
 * @param from - Source object.
 * @param to - Destination object.
 * @param fromKey - Key of the property in source object.
 * @param toKey - Key of the property in destination object.
 */
// TODO: lint and fix the formatting!
function copyProperty(type, from, to, fromKey, toKey) {
    const value = from[fromKey];
    if (value !== null && typeof value === type) {
        // a type error will occur here, have no idea
        to[toKey] = value;
    }
}
/**
 * Copies an array at `key`, filtering the items that match the `type`.
 * @param type - Type expected to match `typeof` on the items.
 * @param from - Source object.
 * @param to - Destination object.
 * @param fromKey - Key of the array property in source object.
 * @param toKey - Key of the array property in destination object.
 */
function copyArray(type, from, to, fromKey, toKey) {
    const array = from[fromKey];
    if (Array.isArray(array)) {
        to[toKey] = array.filter(item => item !== null && typeof item === type);
    }
}
/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/mixins.html}
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            }
        });
    });
}

// CONCATENATED MODULE: ./src/utils/string.ts
/**
 * Gets the name of parent folder in a url.
 * @param url - URL of a file.
 * @return Name of the parent folder, or the file itself if it has no parent folder.
 */
function folderName(url) {
    let lastSlashIndex = url.lastIndexOf('/');
    if (lastSlashIndex != -1) {
        url = url.slice(0, lastSlashIndex);
    }
    lastSlashIndex = url.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
        url = url.slice(lastSlashIndex + 1);
    }
    return url;
}

// CONCATENATED MODULE: ./src/utils/index.ts






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
/**
 * Global configs.
 */
var config;
(function (config) {
    config.LOG_LEVEL_VERBOSE = 0;
    config.LOG_LEVEL_WARNING = 1;
    config.LOG_LEVEL_ERROR = 2;
    config.LOG_LEVEL_NONE = 999;
    /**
     * Global log level.
     * @default {@link LOG_LEVEL_WARNING}
     */
    config.logLevel =   config.LOG_LEVEL_WARNING ;
    /**
     * Enabling sound for motions.
     */
    config.sound = true;
    /**
     * Deferring motion and corresponding sound until both are loaded.
     */
    config.motionSync = true;
    /**
     * Default fading duration for motions without such value specified.
     */
    config.motionFadingDuration = 500;
    /**
     * Default fading duration for idle motions without such value specified.
     */
    config.idleMotionFadingDuration = 2000;
    /**
     * Default fading duration for expressions without such value specified.
     */
    config.expressionFadingDuration = 500;
})(config || (config = {}));
/**
 * Consistent with the `version` in package.json.
 */
const VERSION = "0.3.1";


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Live2DLoader; });
/* harmony import */ var _factory_XHRLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


class Live2DLoader {
    /**
     * Loads a resource.
     * @return Promise that resolves with the loaded data in a format that's consistent with the specified `type`.
     */
    static load(context) {
        return Object(_utils_middleware__WEBPACK_IMPORTED_MODULE_1__[/* runMiddlewares */ "a"])(this.middlewares, context).then(() => context.result);
    }
}
Live2DLoader.middlewares = [_factory_XHRLoader__WEBPACK_IMPORTED_MODULE_0__[/* XHRLoader */ "a"].loader];


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Live2DFactory_Live2DFactory; });

// EXTERNAL MODULE: ./src/cubism-common/index.ts
var cubism_common = __webpack_require__(6);

// EXTERNAL MODULE: ./src/factory/Live2DLoader.ts
var Live2DLoader = __webpack_require__(3);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/middleware.ts
var middleware = __webpack_require__(16);

// EXTERNAL MODULE: external {"commonjs":"@pixi/core","commonjs2":"@pixi/core","amd":"@pixi/core","root":"PIXI"}
var core_root_PIXI_ = __webpack_require__(17);

// CONCATENATED MODULE: ./src/factory/texture.ts

function createTexture(url, options = {}) {
    var _a;
    const textureOptions = { resourceOptions: { crossorigin: options.crossOrigin } };
    // there's already such a method since Pixi v5.3.0
    if (core_root_PIXI_["Texture"].fromURL) {
        return core_root_PIXI_["Texture"].fromURL(url, textureOptions).catch(e => {
            if (e instanceof Error) {
                throw e;
            }
            // assume e is an ErrorEvent, let's convert it to an Error
            const err = new Error('Texture loading error');
            err.event = e;
            throw err;
        });
    }
    // and in order to provide backward compatibility for older Pixi versions,
    // we have to manually implement this method
    // see https://github.com/pixijs/pixi.js/pull/6687/files
    textureOptions.resourceOptions.autoLoad = false;
    const texture = core_root_PIXI_["Texture"].from(url, textureOptions);
    if (texture.baseTexture.valid) {
        return Promise.resolve(texture);
    }
    const resource = texture.baseTexture.resource;
    // before Pixi v5.2.2, the Promise will not be rejected when loading has failed,
    // we have to manually handle the "error" event
    // see https://github.com/pixijs/pixi.js/pull/6374
    (_a = resource._live2d_load) !== null && _a !== void 0 ? _a : (resource._live2d_load = new Promise((resolve, reject) => {
        const errorHandler = (event) => {
            resource.source.removeEventListener('error', errorHandler);
            // convert the ErrorEvent to an Error
            const err = new Error('Texture loading error');
            err.event = event;
            reject(err);
        };
        resource.source.addEventListener('error', errorHandler);
        resource.load().then(() => resolve(texture)).catch(errorHandler);
    }));
    return resource._live2d_load;
}

// CONCATENATED MODULE: ./src/factory/model-middlewares.ts
var __awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const TAG = 'Live2DFactory';
/**
 * A middleware that converts the source from a URL to a settings JSON object.
 */
const urlToJSON = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof context.source === 'string') {
        const data = yield Live2DLoader["a" /* Live2DLoader */].load({
            url: context.source,
            type: 'json',
            target: context.live2dModel,
        });
        data.url = context.source;
        context.source = data;
        context.live2dModel.emit('settingsJSONLoaded', data);
    }
    return next();
});
/**
 * A middleware that converts the source from a settings JSON object to a ModelSettings instance.
 */
const jsonToSettings = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (context.source instanceof cubism_common["f" /* ModelSettings */]) {
        context.settings = context.source;
        return next();
    }
    else if (typeof context.source === 'object') {
        const runtime = Live2DFactory_Live2DFactory.findRuntime(context.source);
        if (runtime) {
            const settings = runtime.createModelSettings(context.source);
            context.settings = settings;
            context.live2dModel.emit('settingsLoaded', settings);
            return next();
        }
    }
    throw new TypeError('Unknown settings format.');
});
const waitUntilReady = (context, next) => {
    if (context.settings) {
        const runtime = Live2DFactory_Live2DFactory.findRuntime(context.settings);
        if (runtime) {
            return runtime.ready().then(next);
        }
    }
    return next();
};
/**
 * A middleware that populates the Live2DModel with optional resources.
 * Requires InternalModel in context when all the subsequent middlewares have finished.
 */
const setupOptionals = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    // wait until all has finished
    yield next();
    const internalModel = context.internalModel;
    if (internalModel) {
        const settings = context.settings;
        const runtime = Live2DFactory_Live2DFactory.findRuntime(settings);
        if (runtime) {
            const tasks = [];
            if (settings.pose) {
                tasks.push(Live2DLoader["a" /* Live2DLoader */].load({
                    settings,
                    url: settings.pose,
                    type: 'json',
                    target: internalModel,
                })
                    .then((data) => {
                    internalModel.pose = runtime.createPose(internalModel.coreModel, data);
                    context.live2dModel.emit('poseLoaded', internalModel.pose);
                })
                    .catch((e) => utils["f" /* logger */].warn(TAG, 'Failed to load pose.\n', e)));
            }
            if (settings.physics) {
                tasks.push(Live2DLoader["a" /* Live2DLoader */].load({
                    settings,
                    url: settings.physics,
                    type: 'json',
                    target: internalModel,
                })
                    .then((data) => {
                    internalModel.physics = runtime.createPhysics(internalModel.coreModel, data);
                    context.live2dModel.emit('physicsLoaded', internalModel.physics);
                })
                    .catch((e) => utils["f" /* logger */].warn(TAG, 'Failed to load physics.\n', e)));
            }
            if (tasks.length) {
                yield Promise.all(tasks);
            }
        }
    }
});
/**
 * A middleware that populates the Live2DModel with essential resources.
 * Requires ModelSettings in context immediately, and InternalModel in context
 * when all the subsequent middlewares have finished.
 */
const setupEssentials = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (context.settings) {
        const live2DModel = context.live2dModel;
        const textureLoadings = context.settings.textures.map(tex => {
            const url = context.settings.resolveURL(tex);
            return createTexture(url, { crossOrigin: context.options.crossOrigin });
        });
        // wait for the internal model to be created
        yield next();
        if (context.internalModel) {
            live2DModel.internalModel = context.internalModel;
            live2DModel.emit('modelLoaded', context.internalModel);
        }
        else {
            throw new TypeError('Missing internal model.');
        }
        live2DModel.textures = yield Promise.all(textureLoadings);
        live2DModel.emit('textureLoaded', live2DModel.textures);
    }
    else {
        throw new TypeError('Missing settings.');
    }
});
/**
 * A middleware that creates the InternalModel. Requires ModelSettings in context.
 */
const createInternalModel = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    const settings = context.settings;
    if (settings instanceof cubism_common["f" /* ModelSettings */]) {
        const runtime = Live2DFactory_Live2DFactory.findRuntime(settings);
        if (!runtime) {
            throw new TypeError('Unknown model settings.');
        }
        const modelData = yield Live2DLoader["a" /* Live2DLoader */].load({
            settings,
            url: settings.moc,
            type: 'arraybuffer',
            target: context.live2dModel,
        });
        if (!runtime.isValidMoc(modelData)) {
            throw new Error('Invalid moc data');
        }
        const coreModel = runtime.createCoreModel(modelData);
        context.internalModel = runtime.createInternalModel(coreModel, settings, context.options);
        return next();
    }
    throw new TypeError('Missing settings.');
});

// CONCATENATED MODULE: ./src/factory/Live2DFactory.ts
var Live2DFactory_awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * Handles all the network load tasks.
 *
 * - Model creation: requested by {@link Live2DModel.from}.
 * - Motion loading: implements the load method of MotionManager.
 * - Expression loading: implements the load method of ExpressionManager.
 */
class Live2DFactory_Live2DFactory {
    /**
     * Registers a Live2DRuntime.
     */
    static registerRuntime(runtime) {
        Live2DFactory_Live2DFactory.runtimes.push(runtime);
        // higher version as higher priority
        Live2DFactory_Live2DFactory.runtimes.sort((a, b) => b.version - a.version);
    }
    /**
     * Finds a runtime that matches given source.
     * @param source - Either a settings JSON object or a ModelSettings instance.
     * @return The Live2DRuntime, or undefined if not found.
     */
    static findRuntime(source) {
        for (const runtime of Live2DFactory_Live2DFactory.runtimes) {
            if (runtime.test(source)) {
                return runtime;
            }
        }
    }
    /**
     * Sets up a Live2DModel, populating it with all defined resources.
     * @param live2dModel - The Live2DModel instance.
     * @param source - Can be one of: settings file URL, settings JSON object, ModelSettings instance.
     * @param options - Options for the process.
     * @return Promise that resolves when all resources have been loaded, rejects when error occurs.
     */
    static setupLive2DModel(live2dModel, source, options) {
        return Live2DFactory_awaiter(this, void 0, void 0, function* () {
            const textureLoaded = new Promise(resolve => live2dModel.once('textureLoaded', resolve));
            const modelLoaded = new Promise(resolve => live2dModel.once('modelLoaded', resolve));
            // because the "ready" event is supposed to be emitted after
            // both the internal model and textures have been loaded,
            // we should here wrap the emit() in a then() so it'll
            // be executed after all the handlers of "modelLoaded" and "textureLoaded"
            const readyEventEmitted = Promise.all([textureLoaded, modelLoaded]).then(() => live2dModel.emit('ready'));
            yield Object(middleware["a" /* runMiddlewares */])(Live2DFactory_Live2DFactory.live2DModelMiddlewares, {
                live2dModel,
                source,
                options: options || {},
            });
            // the "load" event should never be emitted before "ready"
            yield readyEventEmitted;
            live2dModel.emit('load');
        });
    }
    /**
     * Loads a Motion and registers the task to {@link motionTasksMap}. The task will be automatically
     * canceled when its owner - the MotionManager instance - has been destroyed.
     * @param motionManager - MotionManager that owns this Motion.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @return Promise that resolves with the Motion, or with undefined if it can't be loaded.
     */
    static loadMotion(motionManager, group, index) {
        var _a, _b;
        // errors in this method are always handled
        const handleError = (e) => motionManager.emit('motionLoadError', group, index, e);
        try {
            const definition = (_a = motionManager.definitions[group]) === null || _a === void 0 ? void 0 : _a[index];
            if (!definition) {
                return Promise.resolve(undefined);
            }
            if (!motionManager.listeners('destroy').includes(Live2DFactory_Live2DFactory.releaseTasks)) {
                motionManager.once('destroy', Live2DFactory_Live2DFactory.releaseTasks);
            }
            let tasks = Live2DFactory_Live2DFactory.motionTasksMap.get(motionManager);
            if (!tasks) {
                tasks = {};
                Live2DFactory_Live2DFactory.motionTasksMap.set(motionManager, tasks);
            }
            let taskGroup = tasks[group];
            if (!taskGroup) {
                taskGroup = [];
                tasks[group] = taskGroup;
            }
            const path = motionManager.getMotionFile(definition);
            (_b = taskGroup[index]) !== null && _b !== void 0 ? _b : (taskGroup[index] = Live2DLoader["a" /* Live2DLoader */].load({
                url: path,
                settings: motionManager.settings,
                type: motionManager.motionDataType,
                target: motionManager,
            })
                .then(data => {
                var _a;
                const taskGroup = (_a = Live2DFactory_Live2DFactory.motionTasksMap.get(motionManager)) === null || _a === void 0 ? void 0 : _a[group];
                if (taskGroup) {
                    delete taskGroup[index];
                }
                const motion = motionManager.createMotion(data, group, definition);
                motionManager.emit('motionLoaded', group, index, motion);
                return motion;
            })
                .catch(e => {
                utils["f" /* logger */].warn(motionManager.tag, `Failed to load motion: ${path}\n`, e);
                handleError(e);
            }));
            return taskGroup[index];
        }
        catch (e) {
            utils["f" /* logger */].warn(motionManager.tag, `Failed to load motion at "${group}"[${index}]\n`, e);
            handleError(e);
        }
        return Promise.resolve(undefined);
    }
    /**
     * Loads an Expression and registers the task to {@link expressionTasksMap}. The task will be automatically
     * canceled when its owner - the ExpressionManager instance - has been destroyed.
     * @param expressionManager - ExpressionManager that owns this Expression.
     * @param index - Index of the Expression.
     * @return Promise that resolves with the Expression, or with undefined if it can't be loaded.
     */
    static loadExpression(expressionManager, index) {
        var _a;
        // errors in this method are always handled
        const handleError = (e) => expressionManager.emit('expressionLoadError', index, e);
        try {
            const definition = expressionManager.definitions[index];
            if (!definition) {
                return Promise.resolve(undefined);
            }
            if (!expressionManager.listeners('destroy').includes(Live2DFactory_Live2DFactory.releaseTasks)) {
                expressionManager.once('destroy', Live2DFactory_Live2DFactory.releaseTasks);
            }
            let tasks = Live2DFactory_Live2DFactory.expressionTasksMap.get(expressionManager);
            if (!tasks) {
                tasks = [];
                Live2DFactory_Live2DFactory.expressionTasksMap.set(expressionManager, tasks);
            }
            const path = expressionManager.getExpressionFile(definition);
            (_a = tasks[index]) !== null && _a !== void 0 ? _a : (tasks[index] = Live2DLoader["a" /* Live2DLoader */].load({
                url: path,
                settings: expressionManager.settings,
                type: 'json',
                target: expressionManager,
            })
                .then(data => {
                const tasks = Live2DFactory_Live2DFactory.expressionTasksMap.get(expressionManager);
                if (tasks) {
                    delete tasks[index];
                }
                const expression = expressionManager.createExpression(data, definition);
                expressionManager.emit('expressionLoaded', index, expression);
                return expression;
            })
                .catch(e => {
                utils["f" /* logger */].warn(expressionManager.tag, `Failed to load expression: ${path}\n`, e);
                handleError(e);
            }));
            return tasks[index];
        }
        catch (e) {
            utils["f" /* logger */].warn(expressionManager.tag, `Failed to load expression at [${index}]\n`, e);
            handleError(e);
        }
        return Promise.resolve(undefined);
    }
    static releaseTasks() {
        if (this instanceof cubism_common["g" /* MotionManager */]) {
            Live2DFactory_Live2DFactory.motionTasksMap.delete(this);
        }
        else {
            Live2DFactory_Live2DFactory.expressionTasksMap.delete(this);
        }
    }
}
/**
 * All registered runtimes, sorted by versions in descending order.
 */
Live2DFactory_Live2DFactory.runtimes = [];
Live2DFactory_Live2DFactory.urlToJSON = urlToJSON;
Live2DFactory_Live2DFactory.jsonToSettings = jsonToSettings;
Live2DFactory_Live2DFactory.waitUntilReady = waitUntilReady;
Live2DFactory_Live2DFactory.setupOptionals = setupOptionals;
Live2DFactory_Live2DFactory.setupEssentials = setupEssentials;
Live2DFactory_Live2DFactory.createInternalModel = createInternalModel;
/**
 * Middlewares to run through when setting up a Live2DModel.
 */
Live2DFactory_Live2DFactory.live2DModelMiddlewares = [
    urlToJSON, jsonToSettings, waitUntilReady, setupOptionals, setupEssentials, createInternalModel,
];
/**
 * load tasks of each motion. The structure of each value in this map
 * is the same as respective {@link MotionManager.definitions}.
 */
Live2DFactory_Live2DFactory.motionTasksMap = new WeakMap();
/**
 * Load tasks of each expression.
 */
Live2DFactory_Live2DFactory.expressionTasksMap = new WeakMap();
cubism_common["g" /* MotionManager */].prototype._loadMotion = function (group, index) {
    return Live2DFactory_Live2DFactory.loadMotion(this, group, index);
};
cubism_common["a" /* ExpressionManager */].prototype._loadExpression = function (index) {
    return Live2DFactory_Live2DFactory.loadExpression(this, index);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _ExpressionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ExpressionManager__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _FocusController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _FocusController__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _ModelSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _ModelSettings__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _MotionState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _MotionState__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _MotionState__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _MotionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _MotionManager__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _MotionManager__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony import */ var _SoundManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _SoundManager__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _InternalModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _InternalModel__WEBPACK_IMPORTED_MODULE_7__["a"]; });











/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundManager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);


const TAG = 'SoundManager';
const VOLUME = 0.5;
/**
 * Manages all the sounds.
 */
class SoundManager {
    /**
     * Global volume that applies to all the sounds.
     */
    static get volume() {
        return this._volume;
    }
    static set volume(value) {
        this._volume = (value > 1 ? 1 : value < 0 ? 0 : value) || 0;
        this.audios.forEach(audio => (audio.volume = this._volume));
    }
    // TODO: return an ID?
    /**
     * Creates an audio element and adds it to the {@link audios}.
     * @param file - URL of the sound file.
     * @param onFinish - Callback invoked when the playback has finished.
     * @param onError - Callback invoked when error occurs.
     * @return Created audio element.
     */
    static add(file, onFinish, onError) {
        const audio = new Audio(file);
        audio.volume = this._volume;
        audio.preload = 'auto';
        audio.addEventListener('ended', () => {
            this.dispose(audio);
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();
        });
        audio.addEventListener('error', (e) => {
            this.dispose(audio);
            _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].warn(TAG, `Error occurred on "${file}"`, e.error);
            onError === null || onError === void 0 ? void 0 : onError(e.error);
        });
        this.audios.push(audio);
        return audio;
    }
    /**
     * Plays the sound.
     * @param audio - An audio element.
     * @return Promise that resolves when the audio is ready to play, rejects when error occurs.
     */
    static play(audio) {
        return new Promise((resolve, reject) => {
            var _a;
            // see https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
            (_a = audio.play()) === null || _a === void 0 ? void 0 : _a.catch(e => {
                audio.dispatchEvent(new ErrorEvent('error', { error: e }));
                reject(e);
            });
            if (audio.readyState === audio.HAVE_ENOUGH_DATA) {
                resolve();
            }
            else {
                audio.addEventListener('canplaythrough', resolve);
            }
        });
    }
    /**
     * Disposes an audio element and removes it from {@link audios}.
     * @param audio - An audio element.
     */
    static dispose(audio) {
        audio.pause();
        audio.removeAttribute('src');
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.audios, audio);
    }
    /**
     * Destroys all managed audios.
     */
    static destroy() {
        // dispose() removes given audio from the array, so the loop must be backward
        for (let i = this.audios.length - 1; i >= 0; i--) {
            this.dispose(this.audios[i]);
        }
    }
}
/**
 * Audio elements playing or pending to play. Finished audios will be removed automatically.
 */
SoundManager.audios = [];
SoundManager._volume = VOLUME;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGICAL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGICAL_HEIGHT; });
const LOGICAL_WIDTH = 2;
const LOGICAL_HEIGHT = 2;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MotionState; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Indicates the motion priority.
 */
var MotionPriority;
(function (MotionPriority) {
    /** States that the model is currently not playing any motion. This priority cannot be applied to a motion. */
    MotionPriority[MotionPriority["NONE"] = 0] = "NONE";
    /** Low priority, used when starting idle motions automatically. */
    MotionPriority[MotionPriority["IDLE"] = 1] = "IDLE";
    /** Medium priority. */
    MotionPriority[MotionPriority["NORMAL"] = 2] = "NORMAL";
    /** High priority. Motions as this priority will always be played regardless of the current priority. */
    MotionPriority[MotionPriority["FORCE"] = 3] = "FORCE";
})(MotionPriority || (MotionPriority = {}));
/**
 * Handles the state of a MotionManager.
 */
class MotionState {
    constructor() {
        /**
         * When enabled, the states will be dumped to the logger when an exception occurs.
         */
        this.debug = false;
        /**
         * Priority of the current motion. Will be `MotionPriority.NONE` if there's no playing motion.
         */
        this.currentPriority = MotionPriority.NONE;
        /**
         * Priority of the reserved motion, which is still in loading and will be played once loaded.
         * Will be `MotionPriority.NONE` if there's no reserved motion.
         */
        this.reservePriority = MotionPriority.NONE;
    }
    /**
     * Reserves the playback for a motion.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied.
     * @return True if the reserving has succeeded.
     */
    reserve(group, index, priority) {
        if (priority <= MotionPriority.NONE) {
            _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, `Cannot start a motion with MotionPriority.NONE.`);
            return false;
        }
        if (group === this.currentGroup && index === this.currentIndex) {
            _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, `Motion is already playing.`, this.dump(group, index));
            return false;
        }
        if ((group === this.reservedGroup && index === this.reservedIndex) || (group === this.reservedIdleGroup && index === this.reservedIdleIndex)) {
            _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, `Motion is already reserved.`, this.dump(group, index));
            return false;
        }
        if (priority === MotionPriority.IDLE) {
            if (this.currentPriority !== MotionPriority.NONE) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, `Cannot start idle motion because another motion is playing.`, this.dump(group, index));
                return false;
            }
            if (this.reservedIdleGroup !== undefined) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, `Cannot start idle motion because another idle motion has reserved.`, this.dump(group, index));
                return false;
            }
            this.setReservedIdle(group, index);
        }
        else {
            if (priority < MotionPriority.FORCE) {
                if (priority <= this.currentPriority) {
                    _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, 'Cannot start motion because another motion is playing as an equivalent or higher priority.', this.dump(group, index));
                    return false;
                }
                if (priority <= this.reservePriority) {
                    _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, 'Cannot start motion because another motion has reserved as an equivalent or higher priority.', this.dump(group, index));
                    return false;
                }
            }
            this.setReserved(group, index, priority);
        }
        return true;
    }
    /**
     * Requests the playback for a motion.
     * @param motion - The Motion, can be undefined.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied.
     * @return True if the request has been approved, i.e. the motion is allowed to play.
     */
    start(motion, group, index, priority) {
        if (priority === MotionPriority.IDLE) {
            this.setReservedIdle(undefined, undefined);
            if (this.currentPriority !== MotionPriority.NONE) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, 'Cannot start idle motion because another motion is playing.', this.dump(group, index));
                return false;
            }
        }
        else {
            if (group !== this.reservedGroup || index !== this.reservedIndex) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].log(this.tag, 'Cannot start motion because another motion has taken the place.', this.dump(group, index));
                return false;
            }
            this.setReserved(undefined, undefined, MotionPriority.NONE);
        }
        if (!motion) {
            return false;
        }
        this.setCurrent(group, index, priority);
        return true;
    }
    /**
     * Notifies the motion playback has finished.
     */
    complete() {
        this.setCurrent(undefined, undefined, MotionPriority.NONE);
    }
    /**
     * Sets the current motion.
     */
    setCurrent(group, index, priority) {
        this.currentPriority = priority;
        this.currentGroup = group;
        this.currentIndex = index;
    }
    /**
     * Sets the reserved motion.
     */
    setReserved(group, index, priority) {
        this.reservePriority = priority;
        this.reservedGroup = group;
        this.reservedIndex = index;
    }
    /**
     * Sets the reserved idle motion.
     */
    setReservedIdle(group, index) {
        this.reservedIdleGroup = group;
        this.reservedIdleIndex = index;
    }
    /**
     * Checks if a Motion is currently playing or has reserved.
     * @return True if active.
     */
    isActive(group, index) {
        return (group === this.currentGroup && index === this.currentIndex)
            || (group === this.reservedGroup && index === this.reservedIndex)
            || (group === this.reservedIdleGroup && index === this.reservedIdleIndex);
    }
    /**
     * Resets the state.
     */
    reset() {
        this.setCurrent(undefined, undefined, MotionPriority.NONE);
        // make sure the reserved motions (if existing) won't start when they are loaded
        this.setReserved(undefined, undefined, MotionPriority.NONE);
        this.setReservedIdle(undefined, undefined);
    }
    /**
     * Checks if an idle motion should be requests to play.
     */
    shouldRequestIdleMotion() {
        return this.currentGroup === undefined && this.reservedIdleGroup === undefined;
    }
    /**
     * Checks if the model's expression should be overridden by the motion.
     */
    shouldOverrideExpression() {
        return this.currentPriority > MotionPriority.IDLE;
    }
    /**
     * Dumps the state for debugging.
     */
    dump(requestedGroup, requestedIndex) {
        if (this.debug) {
            const keys = [
                'currentPriority',
                'reservePriority',
                'currentGroup',
                'currentIndex',
                'reservedGroup',
                'reservedIndex',
                'reservedIdleGroup',
                'reservedIdleIndex',
            ];
            return `\n<Requested> group = "${requestedGroup}", index = ${requestedIndex}\n` + keys.map(key => '[' + key + '] ' + this[key]).join('\n');
        }
        return '';
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionManager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
var __awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Abstract expression manager.
 * @emits {@link ExpressionManagerEvents}
 */
class ExpressionManager extends _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"] {
    constructor(settings, options) {
        super();
        /**
         * The Expressions. The structure is the same as {@link definitions}, initially there's only
         * an empty array, which means all expressions will be `undefined`. When an Expression has
         * been loaded, it'll fill the place in which it should be; when it fails to load,
         * the place will be filled with `null`.
         */
        this.expressions = [];
        /**
         * The pending Expression.
         */
        this.reserveExpressionIndex = -1;
        /**
         * Flags the instance has been destroyed.
         */
        this.destroyed = false;
        this.settings = settings;
        this.tag = `ExpressionManager(${settings.name})`;
    }
    /**
     * Should be called in the constructor of derived class.
     */
    init() {
        this.defaultExpression = this.createExpression({}, undefined);
        this.currentExpression = this.defaultExpression;
        this.stopAllExpressions();
    }
    /**
     * Loads an Expression. Errors in this method will not be thrown,
     * but be emitted with an "expressionLoadError" event.
     * @param index - Index of the expression in definitions.
     * @return Promise that resolves with the Expression, or with undefined if it can't be loaded.
     * @emits {@link ExpressionManagerEvents.expressionLoaded}
     * @emits {@link ExpressionManagerEvents.expressionLoadError}
     */
    loadExpression(index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.definitions[index]) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].warn(this.tag, `Undefined expression at [${index}]`);
                return undefined;
            }
            if (this.expressions[index] === null) {
                _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].warn(this.tag, `Cannot set expression at [${index}] because it's already failed in loading.`);
                return undefined;
            }
            if (this.expressions[index]) {
                return this.expressions[index];
            }
            const expression = yield this._loadExpression(index);
            this.expressions[index] = expression;
            return expression;
        });
    }
    /**
     * Loads the Expression. Will be implemented by Live2DFactory.
     * @ignore
     */
    _loadExpression(index) {
        throw new Error('Not implemented.');
    }
    /**
     * Sets a random Expression that differs from current one.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    setRandomExpression() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.definitions.length) {
                const availableIndices = [];
                for (let i = 0; i < this.definitions.length; i++) {
                    if (this.expressions[i] !== null
                        && this.expressions[i] !== this.currentExpression
                        && i !== this.reserveExpressionIndex) {
                        availableIndices.push(i);
                    }
                }
                if (availableIndices.length) {
                    const index = Math.floor(Math.random() * availableIndices.length);
                    return this.setExpression(index);
                }
            }
            return false;
        });
    }
    /**
     * Resets model's expression using {@link defaultExpression}.
     */
    resetExpression() {
        this._setExpression(this.defaultExpression);
    }
    /**
     * Restores model's expression to {@link currentExpression}.
     */
    restoreExpression() {
        this._setExpression(this.currentExpression);
    }
    /**
     * Sets an Expression.
     * @param index - Either the index, or the name of the expression.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    setExpression(index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof index !== 'number') {
                index = this.getExpressionIndex(index);
            }
            if (!(index > -1 && index < this.definitions.length)) {
                return false;
            }
            if (index === this.expressions.indexOf(this.currentExpression)) {
                return false;
            }
            this.reserveExpressionIndex = index;
            const expression = yield this.loadExpression(index);
            if (!expression || this.reserveExpressionIndex !== index) {
                return false;
            }
            this.reserveExpressionIndex = -1;
            this.currentExpression = expression;
            this._setExpression(expression);
            return true;
        });
    }
    /**
     * Updates parameters of the core model.
     * @return True if the parameters are actually updated.
     */
    update(model, now) {
        if (!this.isFinished()) {
            return this.updateParameters(model, now);
        }
        return false;
    }
    /**
     * Destroys the instance.
     * @emits {@link ExpressionManagerEvents.destroy}
     */
    destroy() {
        this.destroyed = true;
        this.emit('destroy');
        const self = this;
        self.definitions = undefined;
        self.expressions = undefined;
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelSettings; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Parses, and provides access to the settings JSON.
 */
class ModelSettings {
    /**
     * @param json - The settings JSON object.
     * @param json.url - The `url` field must be defined to specify the settings file's URL.
     */
    constructor(json) {
        this.json = json;
        let url = json.url;
        if (typeof url !== 'string') {
            // this is not allowed because it'll typically result in errors, including a
            // fatal error - an OOM that crashes the browser while initializing this cubism2 model,
            // I'm not kidding!
            throw new TypeError('The `url` field in settings JSON must be defined as a string.');
        }
        this.url = url;
        // set default name to folder's name
        this.name = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* folderName */ "e"])(this.url);
    }
    /**
     * Resolves a relative path using the {@link url}. This is used to resolve the resource files
     * defined in the settings.
     * @param path - Relative path.
     * @return Resolved path.
     */
    resolveURL(path) {
        return _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["url"].resolve(this.url, path);
    }
    /**
     * Replaces the resource files by running each file through the `replacer`.
     * @param replacer - Invoked with two arguments: `(file, path)`, where `file` is the file definition,
     * and `path` is its property path in the ModelSettings instance. A string must be returned to be the replacement.
     *
     * ```js
     * modelSettings.replaceFiles((file, path) => {
     *     // file = "foo.moc", path = "moc"
     *     // file = "foo.png", path = "textures[0]"
     *     // file = "foo.mtn", path = "motions.idle[0].file"
     *     // file = "foo.motion3.json", path = "motions.idle[0].File"
     *
     *     return "bar/" + file;
     * });
     * ```
     */
    replaceFiles(replacer) {
        this.moc = replacer(this.moc, 'moc');
        if (this.pose !== undefined) {
            (this.pose = replacer(this.pose, 'pose'));
        }
        if (this.physics !== undefined) {
            (this.physics = replacer(this.physics, 'physics'));
        }
        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i] = replacer(this.textures[i], `textures[${i}]`);
        }
    }
    ;
    /**
     * Retrieves all resource files defined in the settings.
     * @return A flat array of the paths of all resource files.
     *
     * ```js
     * modelSettings.getDefinedFiles();
     * // returns: ["foo.moc", "foo.png", ...]
     * ```
     */
    getDefinedFiles() {
        const files = [];
        this.replaceFiles((file) => {
            files.push(file);
            return file;
        });
        return files;
    }
    /**
     * Validates that the files defined in the settings exist in given files. Each file will be
     * resolved by {@link resolveURL} before comparison.
     * @param files - A flat array of file paths.
     * @return All the files which are defined in the settings and also exist in given files,
     * *including the optional files*.
     * @throws Error if any *essential* file is defined in settings but not included in given files.
     */
    validateFiles(files) {
        const assertFileExists = (expectedFile, shouldThrow) => {
            const actualPath = this.resolveURL(expectedFile);
            if (!files.includes(actualPath)) {
                if (shouldThrow) {
                    throw new Error(`File "${expectedFile}" is defined in settings, but doesn't exist in given files`);
                }
                return false;
            }
            return true;
        };
        const essentialFiles = [this.moc, ...this.textures];
        essentialFiles.forEach(texture => assertFileExists(texture, true));
        const definedFiles = this.getDefinedFiles();
        return definedFiles.filter(file => assertFileExists(file, false));
    }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MotionPreloadStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionManager; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _cubism_common_MotionState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
var __awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * Indicates how the motions will be preloaded.
 */
var MotionPreloadStrategy;
(function (MotionPreloadStrategy) {
    /** Preload all the motions. */
    MotionPreloadStrategy["ALL"] = "ALL";
    /** Preload only the idle motions. */
    MotionPreloadStrategy["IDLE"] = "IDLE";
    /** No preload. */
    MotionPreloadStrategy["NONE"] = "NONE";
})(MotionPreloadStrategy || (MotionPreloadStrategy = {}));
/**
 * Handles the motion playback.
 * @emits {@link MotionManagerEvents}
 */
class MotionManager extends _pixi_utils__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"] {
    constructor(settings, options) {
        super();
        /**
         * The Motions. The structure is the same as {@link definitions}, initially each group contains
         * an empty array, which means all motions will be `undefined`. When a Motion has been loaded,
         * it'll fill the place in which it should be; when it fails to load, the place will be filled
         * with `null`.
         */
        this.motionGroups = {};
        /**
         * Maintains the state of this MotionManager.
         */
        this.state = new _cubism_common_MotionState__WEBPACK_IMPORTED_MODULE_1__[/* MotionState */ "b"]();
        /**
         * Flags there's a motion playing.
         */
        this.playing = false;
        /**
         * Flags the instances has been destroyed.
         */
        this.destroyed = false;
        this.settings = settings;
        this.tag = `MotionManager(${settings.name})`;
        this.state.tag = this.tag;
    }
    /**
     * Should be called in the constructor of derived class.
     */
    init(options) {
        if (options === null || options === void 0 ? void 0 : options.idleMotionGroup) {
            this.groups.idle = options.idleMotionGroup;
        }
        this.setupMotions(options);
        this.stopAllMotions();
    }
    /**
     * Sets up motions from the definitions, and preloads them according to the preload strategy.
     */
    setupMotions(options) {
        for (const group of Object.keys(this.definitions)) {
            // init with the same structure of definitions
            this.motionGroups[group] = [];
        }
        // preload motions
        let groups;
        switch (options === null || options === void 0 ? void 0 : options.motionPreload) {
            case MotionPreloadStrategy.NONE:
                return;
            case MotionPreloadStrategy.ALL:
                groups = Object.keys(this.definitions);
                break;
            case MotionPreloadStrategy.IDLE:
            default:
                groups = [this.groups.idle];
                break;
        }
        for (const group of groups) {
            if (this.definitions[group]) {
                for (let i = 0; i < this.definitions[group].length; i++) {
                    this.loadMotion(group, i).then();
                }
            }
        }
    }
    /**
     * Loads a Motion in a motion group. Errors in this method will not be thrown,
     * but be emitted with a "motionLoadError" event.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @return Promise that resolves with the Motion, or with undefined if it can't be loaded.
     * @emits {@link MotionManagerEvents.motionLoaded}
     * @emits {@link MotionManagerEvents.motionLoadError}
     */
    loadMotion(group, index) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.definitions[group]) === null || _a === void 0 ? void 0 : _a[index])) {
                _utils__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].warn(this.tag, `Undefined motion at "${group}"[${index}]`);
                return undefined;
            }
            if (this.motionGroups[group][index] === null) {
                _utils__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].warn(this.tag, `Cannot start motion at "${group}"[${index}] because it's already failed in loading.`);
                return undefined;
            }
            if (this.motionGroups[group][index]) {
                return this.motionGroups[group][index];
            }
            const motion = yield this._loadMotion(group, index);
            if (this.destroyed) {
                return;
            }
            this.motionGroups[group][index] = motion !== null && motion !== void 0 ? motion : null;
            return motion;
        });
    }
    // TODO: remove
    /**
     * Loads the Motion. Will be implemented by Live2DFactory.
     * @ignore
     */
    _loadMotion(group, index) {
        throw new Error('Not implemented.');
    }
    /**
     * Starts a motion as given priority.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied.
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    startMotion(group, index, priority = _cubism_common_MotionState__WEBPACK_IMPORTED_MODULE_1__[/* MotionPriority */ "a"].NORMAL) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.state.reserve(group, index, priority)) {
                return false;
            }
            const definition = (_a = this.definitions[group]) === null || _a === void 0 ? void 0 : _a[index];
            if (!definition) {
                return false;
            }
            if (this.currentAudio) {
                // TODO: reuse the audio?
                _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__[/* SoundManager */ "a"].dispose(this.currentAudio);
            }
            let audio;
            if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "b"].sound) {
                const soundURL = this.getSoundFile(definition);
                if (soundURL) {
                    try {
                        // start to load the audio
                        audio = _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__[/* SoundManager */ "a"].add(this.settings.resolveURL(soundURL), () => this.currentAudio = undefined, () => this.currentAudio = undefined);
                        this.currentAudio = audio;
                    }
                    catch (e) {
                        _utils__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].warn(this.tag, 'Failed to create audio', soundURL, e);
                    }
                }
            }
            const motion = yield this.loadMotion(group, index);
            if (audio) {
                const readyToPlay = _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__[/* SoundManager */ "a"].play(audio)
                    .catch(e => _utils__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].warn(this.tag, 'Failed to play audio', audio.src, e));
                if (_config__WEBPACK_IMPORTED_MODULE_0__[/* config */ "b"].motionSync) {
                    // wait until the audio is ready
                    yield readyToPlay;
                }
            }
            if (!this.state.start(motion, group, index, priority)) {
                if (audio) {
                    _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__[/* SoundManager */ "a"].dispose(audio);
                    this.currentAudio = undefined;
                }
                return false;
            }
            _utils__WEBPACK_IMPORTED_MODULE_3__[/* logger */ "f"].log(this.tag, 'Start motion:', this.getMotionName(definition));
            this.emit('motionStart', group, index, audio);
            if (this.state.shouldOverrideExpression()) {
                this.expressionManager && this.expressionManager.resetExpression();
            }
            this.playing = true;
            this._startMotion(motion);
            return true;
        });
    }
    /**
     * Starts a random Motion as given priority.
     * @param group - The motion group.
     * @param priority - The priority to be applied.
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    startRandomMotion(group, priority) {
        return __awaiter(this, void 0, void 0, function* () {
            const groupDefs = this.definitions[group];
            if (groupDefs === null || groupDefs === void 0 ? void 0 : groupDefs.length) {
                const availableIndices = [];
                for (let i = 0; i < groupDefs.length; i++) {
                    if (this.motionGroups[group][i] !== null && !this.state.isActive(group, i)) {
                        availableIndices.push(i);
                    }
                }
                if (availableIndices.length) {
                    const index = Math.floor(Math.random() * availableIndices.length);
                    return this.startMotion(group, availableIndices[index], priority);
                }
            }
            return false;
        });
    }
    /**
     * Stops all playing motions as well as the sound.
     */
    stopAllMotions() {
        this._stopAllMotions();
        this.state.reset();
        if (this.currentAudio) {
            _cubism_common_SoundManager__WEBPACK_IMPORTED_MODULE_2__[/* SoundManager */ "a"].dispose(this.currentAudio);
            this.currentAudio = undefined;
        }
    }
    /**
     * Updates parameters of the core model.
     * @param model - The core model.
     * @param now - Current time in milliseconds.
     * @return True if the parameters have been actually updated.
     */
    update(model, now) {
        var _a, _b;
        if (this.isFinished()) {
            if (this.playing) {
                this.playing = false;
                this.emit('motionFinish');
            }
            if (this.state.shouldOverrideExpression()) {
                (_a = this.expressionManager) === null || _a === void 0 ? void 0 : _a.restoreExpression();
            }
            this.state.complete();
            if (this.state.shouldRequestIdleMotion()) {
                // noinspection JSIgnoredPromiseFromCall
                this.startRandomMotion(this.groups.idle, _cubism_common_MotionState__WEBPACK_IMPORTED_MODULE_1__[/* MotionPriority */ "a"].IDLE);
            }
        }
        let updated = this.updateParameters(model, now);
        updated = ((_b = this.expressionManager) === null || _b === void 0 ? void 0 : _b.update(model, now)) || updated;
        return updated;
    }
    /**
     * Destroys the instance.
     * @emits {@link MotionManagerEvents.destroy}
     */
    destroy() {
        var _a;
        this.destroyed = true;
        this.emit('destroy');
        this.stopAllMotions();
        (_a = this.expressionManager) === null || _a === void 0 ? void 0 : _a.destroy();
        const self = this;
        self.definitions = undefined;
        self.motionGroups = undefined;
    }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalModel; });
/* harmony import */ var _cubism_common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _cubism_common_FocusController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




const tempBounds = { x: 0, y: 0, width: 0, height: 0 };
/**
 * A wrapper that manages the states of a Live2D core model, and delegates all operations to it.
 * @emits {@link InternalModelEvents}
 */
class InternalModel extends _pixi_utils__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"] {
    constructor() {
        super(...arguments);
        this.focusController = new _cubism_common_FocusController__WEBPACK_IMPORTED_MODULE_1__[/* FocusController */ "a"]();
        /**
         * Original canvas width of the model. Note this doesn't represent the model's real size,
         * as the model can overflow from its canvas.
         */
        this.originalWidth = 0;
        /**
         * Original canvas height of the model. Note this doesn't represent the model's real size,
         * as the model can overflow from its canvas.
         */
        this.originalHeight = 0;
        /**
         * Canvas width of the model, scaled by the `width` of the model's layout.
         */
        this.width = 0;
        /**
         * Canvas height of the model, scaled by the `height` of the model's layout.
         */
        this.height = 0;
        /**
         * Local transformation, calculated from the model's layout.
         */
        this.localTransform = new _pixi_math__WEBPACK_IMPORTED_MODULE_2__["Matrix"]();
        /**
         * The final matrix to draw the model.
         */
        this.drawingMatrix = new _pixi_math__WEBPACK_IMPORTED_MODULE_2__["Matrix"]();
        // TODO: change structure
        /**
         * The hit area definitions, keyed by their names.
         */
        this.hitAreas = {};
        /**
         * Flags whether `gl.UNPACK_FLIP_Y_WEBGL` should be enabled when binding the textures.
         */
        this.textureFlipY = false;
        /**
         * WebGL viewport when drawing the model. The format is `[x, y, width, height]`.
         */
        this.viewport = [0, 0, 0, 0];
        /**
         * Flags this instance has been destroyed.
         */
        this.destroyed = false;
    }
    /**
     * Should be called in the constructor of derived class.
     */
    init() {
        this.setupLayout();
        this.setupHitAreas();
    }
    /**
     * Sets up the model's size and local transform by the model's layout.
     */
    setupLayout() {
        // cast `this` to be mutable
        const self = this;
        const size = this.getSize();
        self.originalWidth = size[0];
        self.originalHeight = size[1];
        const layout = Object.assign({
            width: _cubism_common_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOGICAL_WIDTH */ "b"],
            height: _cubism_common_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOGICAL_HEIGHT */ "a"],
        }, this.getLayout());
        this.localTransform.scale(layout.width / _cubism_common_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOGICAL_WIDTH */ "b"], layout.height / _cubism_common_constants__WEBPACK_IMPORTED_MODULE_0__[/* LOGICAL_HEIGHT */ "a"]);
        self.width = this.originalWidth * this.localTransform.a;
        self.height = this.originalHeight * this.localTransform.d;
        // this calculation differs from Live2D SDK...
        const offsetX = (layout.x !== undefined && layout.x - layout.width / 2)
            || (layout.centerX !== undefined && layout.centerX)
            || (layout.left !== undefined && layout.left - layout.width / 2)
            || (layout.right !== undefined && layout.right + layout.width / 2)
            || 0;
        const offsetY = (layout.y !== undefined && layout.y - layout.height / 2)
            || (layout.centerY !== undefined && layout.centerY)
            || (layout.top !== undefined && layout.top - layout.height / 2)
            || (layout.bottom !== undefined && layout.bottom + layout.height / 2)
            || 0;
        this.localTransform.translate(this.width * offsetX, -this.height * offsetY);
    }
    /**
     * Sets up the hit areas by their definitions in settings.
     */
    setupHitAreas() {
        const definitions = this.getHitAreaDefs().filter(hitArea => hitArea.index >= 0);
        for (const def of definitions) {
            this.hitAreas[def.name] = def;
        }
    }
    /**
     * Hit-test on the model.
     * @param x - Position in model canvas.
     * @param y - Position in model canvas.
     * @return The names of the *hit* hit areas. Can be empty if none is hit.
     */
    hitTest(x, y) {
        return Object.keys(this.hitAreas).filter(hitAreaName => this.isHit(hitAreaName, x, y));
    }
    /**
     * Hit-test for a single hit area.
     * @param hitAreaName - The hit area's name.
     * @param x - Position in model canvas.
     * @param y - Position in model canvas.
     * @return True if hit.
     */
    isHit(hitAreaName, x, y) {
        if (!this.hitAreas[hitAreaName]) {
            return false;
        }
        const drawIndex = this.hitAreas[hitAreaName].index;
        const bounds = this.getDrawableBounds(drawIndex, tempBounds);
        return bounds.x <= x && x <= bounds.x + bounds.width && bounds.y <= y && y <= bounds.y + bounds.height;
    }
    /**
     * Gets a drawable's bounds.
     * @param index - Index of the drawable.
     * @param bounds - Object to store the output values.
     * @return The bounds in model canvas space.
     */
    getDrawableBounds(index, bounds) {
        const vertices = this.getDrawableVertices(index);
        let left = vertices[0];
        let right = vertices[0];
        let top = vertices[1];
        let bottom = vertices[1];
        for (let i = 0; i < vertices.length; i += 2) {
            const vx = vertices[i];
            const vy = vertices[i + 1];
            left = Math.min(vx, left);
            right = Math.max(vx, right);
            top = Math.min(vy, top);
            bottom = Math.max(vy, bottom);
        }
        bounds !== null && bounds !== void 0 ? bounds : (bounds = {});
        bounds.x = left;
        bounds.y = top;
        bounds.width = right - left;
        bounds.height = bottom - top;
        return bounds;
    }
    /**
     * Updates the model's transform.
     * @param transform - The world transform.
     */
    updateTransform(transform) {
        this.drawingMatrix.copyFrom(transform).append(this.localTransform);
    }
    /**
     * Updates the model's parameters.
     * @param dt - Elapsed time in milliseconds from last frame.
     * @param now - Current time in milliseconds.
     */
    update(dt, now) {
        this.focusController.update(dt);
    }
    ;
    /**
     * Destroys the model and all related resources.
     * @emits {@link InternalModelEvents.destroy | destroy}
     */
    destroy() {
        this.destroyed = true;
        this.emit('destroy');
        this.motionManager.destroy();
        this.motionManager = undefined;
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusController; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

// Minimum distance to respond
const EPSILON = 0.01;
const MAX_SPEED = 40 / 7.5;
// the time to accelerate to max speed
const ACCELERATION_TIME = 1 / (0.15 * 1000);
/**
 * Interpolates the transition of focus position.
 */
class FocusController {
    constructor() {
        /** The focus position. */
        this.targetX = 0;
        /** The focus position. */
        this.targetY = 0;
        /** Current position. */
        this.x = 0;
        /** Current position. */
        this.y = 0;
        /** Current velocity. */
        this.vx = 0;
        /** Current velocity. */
        this.vy = 0;
    }
    /**
     * Sets the focus position.
     * @param x - X position in range `[-1, 1]`.
     * @param y - Y position in range `[-1, 1]`.
     * @param instant - Should the focus position be instantly applied.
     */
    focus(x, y, instant = false) {
        this.targetX = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "b"])(x, -1, 1);
        this.targetY = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "b"])(y, -1, 1);
        if (instant) {
            this.x = this.targetX;
            this.y = this.targetY;
        }
    }
    /**
     * Updates the interpolation.
     * @param dt - Delta time in milliseconds.
     */
    update(dt) {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON)
            return;
        const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        const maxSpeed = MAX_SPEED / (1000 / dt);
        let ax = maxSpeed * (dx / d) - this.vx;
        let ay = maxSpeed * (dy / d) - this.vy;
        const a = Math.sqrt(Math.pow(ax, 2) + Math.pow(ay, 2));
        const maxA = maxSpeed * ACCELERATION_TIME * dt;
        if (a > maxA) {
            ax *= maxA / a;
            ay *= maxA / a;
        }
        this.vx += ax;
        this.vy += ay;
        const v = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2));
        const maxV = 0.5 * (Math.sqrt(Math.pow(maxA, 2) + 8 * maxA * d) - maxA);
        if (v > maxV) {
            this.vx *= maxV / v;
            this.vy *= maxV / v;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XHRLoader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const TAG = 'XHRLoader';
class NetworkError extends Error {
    constructor(message, url, status, aborted = false) {
        super(message);
        this.url = url;
        this.status = status;
        this.aborted = aborted;
    }
}
/**
 * The basic XHR loader.
 *
 * A network error will be thrown with the following properties:
 * - `url` - The request URL.
 * - `status` - The HTTP status.
 * - `aborted` - True if the error is caused by aborting the XHR.
 */
class XHRLoader {
    /**
     * Creates a managed XHR.
     * @param target - If provided, the XHR will be canceled when receiving an "destroy" event from the target.
     * @param url - The URL.
     * @param type - The XHR response type.
     * @param onload - Load listener.
     * @param onerror - Error handler.
     */
    static createXHR(target, url, type, onload, onerror) {
        const xhr = new XMLHttpRequest();
        XHRLoader.allXhrSet.add(xhr);
        if (target) {
            let xhrSet = XHRLoader.xhrMap.get(target);
            if (!xhrSet) {
                xhrSet = new Set([xhr]);
                XHRLoader.xhrMap.set(target, xhrSet);
            }
            else {
                xhrSet.add(xhr);
            }
            if (!target.listeners('destroy').includes(XHRLoader.cancelXHRs)) {
                target.once('destroy', XHRLoader.cancelXHRs);
            }
        }
        xhr.open('GET', url);
        xhr.responseType = type;
        xhr.onload = () => {
            if ((xhr.status === 200 || xhr.status === 0) && xhr.response) {
                onload(xhr.response);
            }
            else {
                xhr.onerror();
            }
        };
        xhr.onerror = () => {
            _utils__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "f"].warn(TAG, `Failed to load resource as ${xhr.responseType} (Status ${xhr.status}): ${url}`);
            onerror(new NetworkError('Network error.', url, xhr.status));
        };
        xhr.onabort = () => onerror(new NetworkError('Aborted.', url, xhr.status, true));
        xhr.onloadend = () => {
            var _a;
            XHRLoader.allXhrSet.delete(xhr);
            if (target) {
                (_a = XHRLoader.xhrMap.get(target)) === null || _a === void 0 ? void 0 : _a.delete(xhr);
            }
        };
        return xhr;
    }
    /**
     * Cancels all XHRs related to this target.
     */
    static cancelXHRs() {
        var _a;
        (_a = XHRLoader.xhrMap.get(this)) === null || _a === void 0 ? void 0 : _a.forEach(xhr => {
            xhr.abort();
            XHRLoader.allXhrSet.delete(xhr);
        });
        XHRLoader.xhrMap.delete(this);
    }
    /**
     * Release all XHRs.
     */
    static release() {
        XHRLoader.allXhrSet.forEach(xhr => xhr.abort());
        XHRLoader.allXhrSet.clear();
        XHRLoader.xhrMap = new WeakMap();
    }
}
/**
 * All the created XHRs, keyed by their owners respectively.
 */
XHRLoader.xhrMap = new WeakMap();
/**
 * All the created XHRs as a flat array.
 */
XHRLoader.allXhrSet = new Set();
/**
 * Middleware for Live2DLoader.
 */
XHRLoader.loader = (context, next) => {
    return new Promise((resolve, reject) => {
        const xhr = XHRLoader.createXHR(context.target, context.settings ? context.settings.resolveURL(context.url) : context.url, context.type, data => {
            context.result = data;
            resolve();
        }, reject);
        xhr.send();
    });
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runMiddlewares; });
/**
 * Run middlewares with given context.
 * @see https://github.com/koajs/compose/blob/master/index.js
 *
 * @param middleware
 * @param context
 */
function runMiddlewares(middleware, context) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i, err) {
        if (err)
            return Promise.reject(err);
        if (i <= index)
            return Promise.reject(new Error('next() called multiple times'));
        index = i;
        const fn = middleware[i];
        if (!fn)
            return Promise.resolve();
        try {
            return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ cubism_common["e" /* LOGICAL_WIDTH */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ cubism_common["d" /* LOGICAL_HEIGHT */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ cubism_common["a" /* ExpressionManager */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ cubism_common["b" /* FocusController */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ cubism_common["f" /* ModelSettings */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ cubism_common["i" /* MotionPriority */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ cubism_common["j" /* MotionState */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ cubism_common["h" /* MotionPreloadStrategy */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ cubism_common["g" /* MotionManager */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ cubism_common["k" /* SoundManager */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ cubism_common["c" /* InternalModel */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ Live2DModel_Live2DModel; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Live2DTransform_Live2DTransform; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ InteractionMixin; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ config["b" /* config */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ config["a" /* VERSION */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Live2DFactory["a" /* Live2DFactory */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ Live2DLoader["a" /* Live2DLoader */]; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ XHRLoader["a" /* XHRLoader */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ FileLoader_FileLoader; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ ZipLoader_ZipLoader; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ utils["f" /* logger */]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ utils["b" /* clamp */]; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ utils["g" /* rand */]; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ utils["d" /* copyProperty */]; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ utils["c" /* copyArray */]; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ utils["a" /* applyMixins */]; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ utils["e" /* folderName */]; });

// EXTERNAL MODULE: ./src/cubism-common/index.ts
var cubism_common = __webpack_require__(6);

// EXTERNAL MODULE: ./src/factory/Live2DFactory.ts + 2 modules
var Live2DFactory = __webpack_require__(4);

// EXTERNAL MODULE: external {"commonjs":"@pixi/display","commonjs2":"@pixi/display","amd":"@pixi/display","root":"PIXI"}
var display_root_PIXI_ = __webpack_require__(20);

// EXTERNAL MODULE: external {"commonjs":"@pixi/math","commonjs2":"@pixi/math","amd":"@pixi/math","root":"PIXI"}
var math_root_PIXI_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/InteractionMixin.ts
/**
 * The interaction control split from Live2DModel class for code clarity. This mixin should *only*
 * be used on the Live2DModel.
 */
class InteractionMixin {
    constructor() {
        this._autoInteract = false;
    }
    /**
     * Enables automatic interaction. Only takes effect if Pixi's interaction
     * feature has been enabled (by registering the `PIXI.InteractionManager` into `PIXI.Renderer`).
     */
    get autoInteract() {
        return this._autoInteract;
    }
    set autoInteract(autoInteract) {
        if (autoInteract !== this._autoInteract) {
            if (autoInteract) {
                this.on('pointertap', onTap, this);
            }
            else {
                this.off('pointertap', onTap, this);
            }
            this._autoInteract = autoInteract;
        }
    }
    /**
     * Registers interaction by subscribing to the `PIXI.InteractionManager`.
     */
    registerInteraction(manager) {
        if (manager !== this.interactionManager) {
            this.unregisterInteraction();
            if (this._autoInteract && manager) {
                this.interactionManager = manager;
                manager.on('pointermove', onPointerMove, this);
            }
        }
    }
    /**
     * Unregisters interaction.
     */
    unregisterInteraction() {
        var _a;
        if (this.interactionManager) {
            (_a = this.interactionManager) === null || _a === void 0 ? void 0 : _a.off('pointermove', onPointerMove, this);
            this.interactionManager = undefined;
        }
    }
}
function onTap(event) {
    this.tap(event.data.global.x, event.data.global.y);
}
function onPointerMove(event) {
    this.focus(event.data.global.x, event.data.global.y);
}

// CONCATENATED MODULE: ./src/Live2DTransform.ts

/**
 * Useless class. May be useful in the future.
 */
class Live2DTransform_Live2DTransform extends math_root_PIXI_["Transform"] {
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./src/Live2DModel.ts
var _a;






const tempPoint = new math_root_PIXI_["Point"]();
const tempMatrix = new math_root_PIXI_["Matrix"]();
// a reference to Ticker class, defaults to window.PIXI.Ticker (when loaded by a <script> tag)
let TickerClass = (_a = window.PIXI) === null || _a === void 0 ? void 0 : _a.Ticker;
/**
 * A wrapper that allows the Live2D model to be used as a DisplayObject in PixiJS.
 *
 * ```js
 * const model = await Live2DModel.from('shizuku.model.json');
 * container.add(model);
 * ```
 * @emits {@link Live2DModelEvents}
 */
class Live2DModel_Live2DModel extends display_root_PIXI_["Container"] {
    constructor(options) {
        super();
        /**
         * Tag for logging.
         */
        this.tag = 'Live2DModel(uninitialized)';
        /**
         * Pixi textures.
         */
        this.textures = [];
        /** @override */
        this.transform = new Live2DTransform_Live2DTransform();
        /**
         * The anchor behaves like the one in `PIXI.Sprite`, where `(0, 0)` means the top left
         * and `(1, 1)` means the bottom right.
         */
        this.anchor = new math_root_PIXI_["ObservablePoint"](this.onAnchorChange, this, 0, 0);
        /**
         * An ID of Gl context that syncs with `renderer.CONTEXT_UID`. Used to check if the GL context has changed.
         */
        this.glContextID = -1;
        /**
         * Elapsed time in milliseconds since created.
         */
        this.elapsedTime = performance.now();
        /**
         * Elapsed time in milliseconds from last frame to this frame.
         */
        this.deltaTime = 0;
        this._autoUpdate = false;
        this.once('modelLoaded', () => this.init(options));
    }
    /**
     * Creates a Live2DModel from given source.
     * @param source - Can be one of: settings file URL, settings JSON object, ModelSettings instance.
     * @param options - Options for the creation.
     * @return Promise that resolves with the Live2DModel.
     */
    static from(source, options) {
        const model = new this(options);
        return Live2DFactory["a" /* Live2DFactory */].setupLive2DModel(model, source, options).then(() => model);
    }
    /**
     * Synchronous version of `Live2DModel.from()`. This method immediately returns a Live2DModel instance,
     * whose resources have not been loaded. Therefore this model can't be manipulated or rendered
     * until the "load" event has been emitted.
     *
     * ```js
     * // no `await` here as it's not a Promise
     * const model = Live2DModel.fromSync('shizuku.model.json');
     *
     * // these will cause errors!
     * // app.stage.addChild(model);
     * // model.motion('tap_body');
     *
     * model.once('load', () => {
     *     // now it's safe
     *     app.stage.addChild(model);
     *     model.motion('tap_body');
     * });
     * ```
     */
    static fromSync(source, options) {
        const model = new this(options);
        Live2DFactory["a" /* Live2DFactory */].setupLive2DModel(model, source, options).then(options === null || options === void 0 ? void 0 : options.onLoad).catch(options === null || options === void 0 ? void 0 : options.onError);
        return model;
    }
    /**
     * Registers the class of `PIXI.Ticker` for auto updating.
     */
    static registerTicker(tickerClass) {
        TickerClass = tickerClass;
    }
    /**
     * Enables automatic updating. Requires {@link Live2DModel.registerTicker} or the global `window.PIXI.Ticker`.
     */
    get autoUpdate() {
        return this._autoUpdate;
    }
    set autoUpdate(autoUpdate) {
        if (autoUpdate) {
            if (!this._destroyed) {
                if (TickerClass) {
                    TickerClass.shared.add(this.onTickerUpdate, this);
                    this._autoUpdate = true;
                }
                else {
                    utils["f" /* logger */].warn(this.tag, 'No Ticker registered, please call Live2DModel.registerTicker(Ticker).');
                }
            }
        }
        else {
            TickerClass === null || TickerClass === void 0 ? void 0 : TickerClass.shared.remove(this.onTickerUpdate, this);
            this._autoUpdate = false;
        }
    }
    // TODO: rename
    /**
     * A handler of the "modelLoaded" event, invoked when the internal model has been loaded.
     */
    init(options) {
        this.tag = `Live2DModel(${this.internalModel.settings.name})`;
        const _options = Object.assign({
            autoUpdate: true,
            autoInteract: true,
        }, options);
        if (_options.autoInteract) {
            this.interactive = true;
        }
        this.autoInteract = _options.autoInteract;
        this.autoUpdate = _options.autoUpdate;
    }
    /**
     * A callback that observes {@link anchor}, invoked when the anchor's values have been changed.
     */
    onAnchorChange() {
        this.pivot.set(this.anchor.x * this.internalModel.width, this.anchor.y * this.internalModel.height);
    }
    /**
     * Shorthand to start a motion.
     * @param group - The motion group.
     * @param index - The index in this group. If not presented, a random motion will be started.
     * @param priority - The motion priority. Defaults to `MotionPriority.NORMAL`.
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    motion(group, index, priority) {
        return index === undefined
            ? this.internalModel.motionManager.startRandomMotion(group, priority)
            : this.internalModel.motionManager.startMotion(group, index, priority);
    }
    /**
     * Shorthand to set an expression.
     * @param id - Either the index, or the name of the expression. If not presented, a random expression will be set.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    expression(id) {
        if (this.internalModel.motionManager.expressionManager) {
            return id === undefined
                ? this.internalModel.motionManager.expressionManager.setRandomExpression()
                : this.internalModel.motionManager.expressionManager.setExpression(id);
        }
        return Promise.resolve(false);
    }
    /**
     * Updates the focus position. This will not cause the model to immediately look at the position,
     * instead the movement will be interpolated.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @param instant - Should the focus position be instantly applied.
     */
    focus(x, y, instant = false) {
        tempPoint.x = x;
        tempPoint.y = y;
        // we can pass `true` as the third argument to skip the update transform
        // because focus won't take effect until the model is rendered,
        // and a model being rendered will always get transform updated
        this.toModelPosition(tempPoint, tempPoint, true);
        this.internalModel.focusController.focus((tempPoint.x / this.internalModel.originalWidth) * 2 - 1, -((tempPoint.y / this.internalModel.originalHeight) * 2 - 1), instant);
    }
    /**
     * Tap on the model. This will perform a hit-testing, and emit a "hit" event
     * if at least one of the hit areas is hit.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @emits {@link Live2DModelEvents.hit}
     */
    tap(x, y) {
        const hitAreaNames = this.hitTest(x, y);
        if (hitAreaNames.length) {
            utils["f" /* logger */].log(this.tag, `Hit`, hitAreaNames);
            this.emit('hit', hitAreaNames);
        }
    }
    /**
     * Hit-test on the model.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @return The names of the *hit* hit areas. Can be empty if none is hit.
     */
    hitTest(x, y) {
        tempPoint.x = x;
        tempPoint.y = y;
        this.toModelPosition(tempPoint, tempPoint);
        return this.internalModel.hitTest(tempPoint.x, tempPoint.y);
    }
    /**
     * Calculates the position in the canvas of original, unscaled Live2D model.
     * @param position - A Point in world space.
     * @param result - A Point to store the new value. Defaults to a new Point.
     * @param skipUpdate - True to skip the update transform.
     * @return The Point in model canvas space.
     */
    toModelPosition(position, result = position.clone(), skipUpdate) {
        if (!skipUpdate) {
            this._recursivePostUpdateTransform();
            if (!this.parent) {
                this.parent = this._tempDisplayObjectParent;
                this.displayObjectUpdateTransform();
                this.parent = null;
            }
            else {
                this.displayObjectUpdateTransform();
            }
        }
        this.transform.worldTransform.applyInverse(position, result);
        this.internalModel.localTransform.applyInverse(result, result);
        return result;
    }
    /**
     * A method required by `PIXI.InteractionManager` to perform hit-testing.
     * @param point - A Point in world space.
     * @return True if the point is inside this model.
     */
    containsPoint(point) {
        return this.getBounds(true).contains(point.x, point.y);
    }
    /** @override */
    _calculateBounds() {
        this._bounds.addFrame(this.transform, 0, 0, this.internalModel.width, this.internalModel.height);
    }
    /**
     * An update callback to be added to `PIXI.Ticker` and invoked every tick.
     */
    onTickerUpdate() {
        this.update(TickerClass.shared.deltaMS);
    }
    /**
     * Updates the model. Note this method just updates the timer,
     * and the actual update will be done right before rendering the model.
     * @param dt - The elapsed time in milliseconds since last frame.
     */
    update(dt) {
        this.deltaTime += dt;
        this.elapsedTime += dt;
        // don't call `this.internalModel.update()` here, because it requires WebGL context
    }
    /** @override */
    _render(renderer) {
        this.registerInteraction(renderer.plugins.interaction);
        // reset certain systems in renderer to make Live2D's drawing system compatible with Pixi
        renderer.batch.reset();
        renderer.geometry.reset();
        renderer.shader.reset();
        renderer.state.reset();
        let shouldUpdateTexture = false;
        // when the WebGL context has changed
        if (this.glContextID !== renderer.CONTEXT_UID) {
            this.glContextID = renderer.CONTEXT_UID;
            this.internalModel.updateWebGLContext(renderer.gl, this.glContextID);
            shouldUpdateTexture = true;
        }
        for (let i = 0; i < this.textures.length; i++) {
            const texture = this.textures[i];
            if (!texture.valid) {
                continue;
            }
            if (shouldUpdateTexture || !texture.baseTexture._glTextures[this.glContextID]) {
                renderer.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, this.internalModel.textureFlipY);
                // let the TextureSystem generate corresponding WebGLTexture, and bind to an arbitrary location
                renderer.texture.bind(texture.baseTexture, 0);
            }
            // bind the WebGLTexture into Live2D core.
            // because the Texture in Pixi can be shared between multiple DisplayObjects,
            // it's unable to know if the WebGLTexture in this Texture has been destroyed (GCed) and regenerated,
            // and therefore we always bind the texture at this moment no matter what
            this.internalModel.bindTexture(i, texture.baseTexture._glTextures[this.glContextID].texture);
            // manually update the GC counter so they won't be GCed while using this model
            texture.baseTexture.touched = renderer.textureGC.count;
        }
        const viewport = renderer.framebuffer.viewport;
        this.internalModel.viewport = [viewport.x, viewport.y, viewport.width, viewport.height];
        // update only if the time has changed, as the model will possibly be updated once but rendered multiple times
        if (this.deltaTime) {
            this.internalModel.update(this.deltaTime, this.elapsedTime);
            this.deltaTime = 0;
        }
        const internalTransform = tempMatrix
            .copyFrom(renderer.globalUniforms.uniforms.projectionMatrix)
            .append(this.worldTransform);
        this.internalModel.updateTransform(internalTransform);
        this.internalModel.draw(renderer.gl);
        // reset WebGL state and texture bindings
        renderer.state.reset();
        renderer.texture.reset();
    }
    /**
     * Destroys the model and all related resources. This takes the same options and also
     * behaves the same as `PIXI.Container#destroy`.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    destroy(options) {
        this.emit('destroy');
        // the setters will do the cleanup
        this.autoUpdate = false;
        this.unregisterInteraction();
        if (options === null || options === void 0 ? void 0 : options.texture) {
            this.textures.forEach(texture => texture.destroy(options.baseTexture));
        }
        this.internalModel.destroy();
        super.destroy(options);
    }
}
Object(utils["a" /* applyMixins */])(Live2DModel_Live2DModel, [InteractionMixin]);

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./src/factory/Live2DLoader.ts
var Live2DLoader = __webpack_require__(3);

// EXTERNAL MODULE: ./src/factory/XHRLoader.ts
var XHRLoader = __webpack_require__(15);

// EXTERNAL MODULE: external {"commonjs":"@pixi/utils","commonjs2":"@pixi/utils","amd":"@pixi/utils","root":["PIXI","utils"]}
var utils_root_PIXI_utils_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/factory/FileLoader.ts
var __awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Experimental loader to load resources from uploaded files.
 *
 * This loader relies on
 * [webkitRelativePath](https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath)
 * to recognize the file path.
 *
 * Though named as a "Loader", this class has nothing to do with Live2DLoader,
 * it only contains a middleware for the Live2DFactory.
 */
class FileLoader_FileLoader {
    /**
     * Resolves the path of a resource file to the object URL.
     * @param settingsURL - Object URL of the settings file.
     * @param filePath - Resource file path.
     * @return Resolved object URL.
     */
    static resolveURL(settingsURL, filePath) {
        var _a;
        const resolved = (_a = FileLoader_FileLoader.filesMap[settingsURL]) === null || _a === void 0 ? void 0 : _a[filePath];
        if (resolved === undefined) {
            throw new Error('Cannot find this file from uploaded files: ' + filePath);
        }
        return resolved;
    }
    /**
     * Consumes the files by storing their object URLs. Files not defined in the settings will be ignored.
     */
    static upload(files, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileMap = {};
            // only consume the files defined in settings
            for (const definedFile of settings.getDefinedFiles()) {
                const actualPath = decodeURI(utils_root_PIXI_utils_["url"].resolve(settings.url, definedFile));
                const actualFile = files.find(file => file.webkitRelativePath === actualPath);
                if (actualFile) {
                    fileMap[definedFile] = URL.createObjectURL(actualFile);
                }
            }
            FileLoader_FileLoader.filesMap[settings._objectURL] = fileMap;
        });
    }
    /**
     * Creates a ModelSettings by given files.
     * @return Promise that resolves with the created ModelSettings.
     */
    static createSettings(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const settingsFile = files.find(file => file.name.endsWith('model.json') || file.name.endsWith('model3.json'));
            if (!settingsFile) {
                throw new TypeError('Settings file not found');
            }
            const settingsText = yield FileLoader_FileLoader.readText(settingsFile);
            const settingsJSON = JSON.parse(settingsText);
            settingsJSON.url = settingsFile.webkitRelativePath;
            const runtime = Live2DFactory["a" /* Live2DFactory */].findRuntime(settingsJSON);
            if (!runtime) {
                throw new Error('Unknown settings JSON');
            }
            const settings = runtime.createModelSettings(settingsJSON);
            settings._objectURL = URL.createObjectURL(settingsFile);
            return settings;
        });
    }
    /**
     * Reads a file as text in UTF-8.
     */
    static readText(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsText(file, 'utf8');
            });
        });
    }
}
/**
 * Stores all the object URLs of uploaded files.
 */
FileLoader_FileLoader.filesMap = {};
/**
 * Middleware for Live2DFactory.
 */
FileLoader_FileLoader.factory = (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(context.source) && context.source[0] instanceof File) {
        const files = context.source;
        let settings = files.settings;
        if (!settings) {
            settings = yield FileLoader_FileLoader.createSettings(files);
        }
        else if (!settings._objectURL) {
            throw new Error('"_objectURL" must be specified in ModelSettings');
        }
        settings.validateFiles(files.map(file => encodeURI(file.webkitRelativePath)));
        yield FileLoader_FileLoader.upload(files, settings);
        // override the default method to resolve URL from uploaded files
        settings.resolveURL = function (url) {
            return FileLoader_FileLoader.resolveURL(this._objectURL, url);
        };
        context.source = settings;
        // clean up when destroying the model
        context.live2dModel.once('modelLoaded', (internalModel) => {
            internalModel.once('destroy', function () {
                const objectURL = this.settings._objectURL;
                URL.revokeObjectURL(objectURL);
                if (FileLoader_FileLoader.filesMap[objectURL]) {
                    for (const resourceObjectURL of Object.values(FileLoader_FileLoader.filesMap[objectURL])) {
                        URL.revokeObjectURL(resourceObjectURL);
                    }
                }
                delete FileLoader_FileLoader.filesMap[objectURL];
            });
        });
    }
    return next();
});
Live2DFactory["a" /* Live2DFactory */].live2DModelMiddlewares.unshift(FileLoader_FileLoader.factory);

// CONCATENATED MODULE: ./src/factory/ZipLoader.ts
var ZipLoader_awaiter =  function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Experimental loader to load resources from a zip file.
 *
 * Though named as a "Loader", this class has nothing to do with Live2DLoader,
 * it only contains a middleware for the Live2DFactory.
 */
class ZipLoader_ZipLoader {
    static unzip(reader, settings) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            const filePaths = yield ZipLoader_ZipLoader.getFilePaths(reader);
            const requiredFilePaths = [];
            // only consume the files defined in settings
            for (const definedFile of settings.getDefinedFiles()) {
                const actualPath = decodeURI(utils_root_PIXI_utils_["url"].resolve(settings.url, definedFile));
                if (filePaths.includes(actualPath)) {
                    requiredFilePaths.push(actualPath);
                }
            }
            const files = yield ZipLoader_ZipLoader.getFiles(reader, requiredFilePaths);
            for (let i = 0; i < files.length; i++) {
                const path = requiredFilePaths[i];
                const file = files[i];
                // let's borrow this property...
                Object.defineProperty(file, 'webkitRelativePath', {
                    value: path,
                });
            }
            return files;
        });
    }
    static createSettings(reader) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            const filePaths = yield ZipLoader_ZipLoader.getFilePaths(reader);
            const settingsFilePath = filePaths.find(path => path.endsWith('model.json') || path.endsWith('model3.json'));
            if (!settingsFilePath) {
                throw new Error('Settings file not found');
            }
            const settingsText = yield ZipLoader_ZipLoader.readText(reader, settingsFilePath);
            if (!settingsText) {
                throw new Error('Empty settings file: ' + settingsFilePath);
            }
            const settingsJSON = JSON.parse(settingsText);
            settingsJSON.url = settingsFilePath;
            const runtime = Live2DFactory["a" /* Live2DFactory */].findRuntime(settingsJSON);
            if (!runtime) {
                throw new Error('Unknown settings JSON');
            }
            return runtime.createModelSettings(settingsJSON);
        });
    }
    static zipReader(data, url) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            throw new Error('Not implemented');
        });
    }
    static getFilePaths(reader) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            throw new Error('Not implemented');
        });
    }
    static getFiles(reader, paths) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            throw new Error('Not implemented');
        });
    }
    static readText(reader, path) {
        return ZipLoader_awaiter(this, void 0, void 0, function* () {
            throw new Error('Not implemented');
        });
    }
    static releaseReader(reader) {
        // this method is optional
    }
}
ZipLoader_ZipLoader.ZIP_PROTOCOL = 'zip://';
ZipLoader_ZipLoader.uid = 0;
ZipLoader_ZipLoader.factory = (context, next) => ZipLoader_awaiter(void 0, void 0, void 0, function* () {
    const source = context.source;
    let sourceURL;
    let zipBlob;
    let settings;
    if (typeof source === 'string' && (source.endsWith('.zip') || source.startsWith(ZipLoader_ZipLoader.ZIP_PROTOCOL))) {
        if (source.startsWith(ZipLoader_ZipLoader.ZIP_PROTOCOL)) {
            sourceURL = source.slice(ZipLoader_ZipLoader.ZIP_PROTOCOL.length);
        }
        else {
            sourceURL = source;
        }
        zipBlob = yield Live2DLoader["a" /* Live2DLoader */].load({
            url: sourceURL,
            type: 'blob',
            target: context.live2dModel,
        });
    }
    else if (Array.isArray(source)
        && source.length === 1
        && source[0] instanceof File
        && source[0].name.endsWith('.zip')) {
        zipBlob = source[0];
        sourceURL = URL.createObjectURL(zipBlob);
        settings = source.settings;
    }
    if (zipBlob) {
        if (!zipBlob.size) {
            throw new Error('Empty zip file');
        }
        const reader = yield ZipLoader_ZipLoader.zipReader(zipBlob, sourceURL);
        if (!settings) {
            settings = yield ZipLoader_ZipLoader.createSettings(reader);
        }
        // a fake URL, the only requirement is it should be unique,
        // as FileLoader will use it as the ID of all uploaded files
        settings._objectURL = ZipLoader_ZipLoader.ZIP_PROTOCOL + ZipLoader_ZipLoader.uid + '/' + settings.url;
        const files = yield ZipLoader_ZipLoader.unzip(reader, settings);
        files.settings = settings;
        // pass files to the FileLoader
        context.source = files;
        // clean up when destroying the model
        if (sourceURL.startsWith('blob:')) {
            context.live2dModel.once('modelLoaded', (internalModel) => {
                internalModel.once('destroy', function () {
                    URL.revokeObjectURL(sourceURL);
                });
            });
        }
        ZipLoader_ZipLoader.releaseReader(reader);
    }
    return next();
});
Live2DFactory["a" /* Live2DFactory */].live2DModelMiddlewares.unshift(ZipLoader_ZipLoader.factory);

// CONCATENATED MODULE: ./src/factory/index.ts






// CONCATENATED MODULE: ./src/common.ts
/// <reference path="../core/live2d.d.ts"/>
/// <reference path="../core/live2dcubismcore.d.ts"/>
/// <reference path="../cubism/src/CubismSpec.d.ts"/>
/// <reference path="types/Cubism2Spec.d.ts"/>
/// <reference path="types/helpers.d.ts"/>
/// <reference path="types/shim.d.ts"/>









/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const originalUpdateParam = Live2DMotion.prototype.updateParam;
Live2DMotion.prototype.updateParam = function (model, entry) {
    originalUpdateParam.call(this, model, entry);
    if (entry.isFinished() && this.onFinishHandler) {
        this.onFinishHandler(this);
        delete this.onFinishHandler;
    }
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Cubism4ExpressionManager_Cubism4ExpressionManager; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Cubism4ModelSettings_Cubism4ModelSettings; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Cubism4MotionManager_Cubism4MotionManager; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Cubism4InternalModel_Cubism4InternalModel; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ cubism4Ready; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ startUpCubism4; });

// EXTERNAL MODULE: ./src/cubism4/check-runtime.ts
var check_runtime = __webpack_require__(26);

// EXTERNAL MODULE: ./src/cubism-common/ExpressionManager.ts
var ExpressionManager = __webpack_require__(10);

// CONCATENATED MODULE: ./cubism/src/math/cubismvector2.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * 2次元ベクトル型
 *
 * 2次元ベクトル型の機能を提供する。
 */
class CubismVector2 {
    /**
     * コンストラクタ
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    /**
     * ベクトルの加算
     *
     * @param vector2 加算するベクトル値
     * @return 加算結果 ベクトル値
     */
    add(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x + vector2.x;
        ret.y = this.y + vector2.y;
        return ret;
    }
    /**
     * ベクトルの減算
     *
     * @param vector2 減算するベクトル値
     * @return 減算結果 ベクトル値
     */
    substract(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x - vector2.x;
        ret.y = this.y - vector2.y;
        return ret;
    }
    /**
     * ベクトルの乗算
     *
     * @param vector2 乗算するベクトル値
     * @return 乗算結果 ベクトル値
     */
    multiply(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x * vector2.x;
        ret.y = this.y * vector2.y;
        return ret;
    }
    /**
     * ベクトルの乗算(スカラー)
     *
     * @param scalar 乗算するスカラー値
     * @return 乗算結果 ベクトル値
     */
    multiplyByScaler(scalar) {
        return this.multiply(new CubismVector2(scalar, scalar));
    }
    /**
     * ベクトルの除算
     *
     * @param vector2 除算するベクトル値
     * @return 除算結果 ベクトル値
     */
    division(vector2) {
        const ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x / vector2.x;
        ret.y = this.y / vector2.y;
        return ret;
    }
    /**
     * ベクトルの除算(スカラー)
     *
     * @param scalar 除算するスカラー値
     * @return 除算結果 ベクトル値
     */
    divisionByScalar(scalar) {
        return this.division(new CubismVector2(scalar, scalar));
    }
    /**
     * ベクトルの長さを取得する
     *
     * @return ベクトルの長さ
     */
    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * ベクトルの距離の取得
     *
     * @param a 点
     * @return ベクトルの距離
     */
    getDistanceWith(a) {
        return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    /**
     * ドット積の計算
     *
     * @param a 値
     * @return 結果
     */
    dot(a) {
        return this.x * a.x + this.y * a.y;
    }
    /**
     * 正規化の適用
     */
    normalize() {
        const length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
        this.x = this.x / length;
        this.y = this.y / length;
    }
    /**
     * 等しさの確認（等しいか？）
     *
     * 値が等しいか？
     *
     * @param rhs 確認する値
     * @return true 値は等しい
     * @return false 値は等しくない
     */
    isEqual(rhs) {
        return this.x == rhs.x && this.y == rhs.y;
    }
    /**
     * 等しさの確認（等しくないか？）
     *
     * 値が等しくないか？
     *
     * @param rhs 確認する値
     * @return true 値は等しくない
     * @return false 値は等しい
     */
    isNotEqual(rhs) {
        return !this.isEqual(rhs);
    }
}

// CONCATENATED MODULE: ./cubism/src/math/cubismmath.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * 数値計算などに使用するユーティリティクラス
 */
class cubismmath_CubismMath {
    /**
     * 第一引数の値を最小値と最大値の範囲に収めた値を返す
     *
     * @param value 収められる値
     * @param min   範囲の最小値
     * @param max   範囲の最大値
     * @return 最小値と最大値の範囲に収めた値
     */
    static range(value, min, max) {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }
    /**
     * サイン関数の値を求める
     *
     * @param x 角度値（ラジアン）
     * @return サイン関数sin(x)の値
     */
    static sin(x) {
        return Math.sin(x);
    }
    /**
     * コサイン関数の値を求める
     *
     * @param x 角度値(ラジアン)
     * @return コサイン関数cos(x)の値
     */
    static cos(x) {
        return Math.cos(x);
    }
    /**
     * 値の絶対値を求める
     *
     * @param x 絶対値を求める値
     * @return 値の絶対値
     */
    static abs(x) {
        return Math.abs(x);
    }
    /**
     * 平方根(ルート)を求める
     * @param x -> 平方根を求める値
     * @return 値の平方根
     */
    static sqrt(x) {
        return Math.sqrt(x);
    }
    /**
     * イージング処理されたサインを求める
     * フェードイン・アウト時のイージングに利用できる
     *
     * @param value イージングを行う値
     * @return イージング処理されたサイン値
     */
    static getEasingSine(value) {
        if (value < 0.0) {
            return 0.0;
        }
        else if (value > 1.0) {
            return 1.0;
        }
        return 0.5 - 0.5 * this.cos(value * Math.PI);
    }
    /**
     * 大きい方の値を返す
     *
     * @param left 左辺の値
     * @param right 右辺の値
     * @return 大きい方の値
     */
    static max(left, right) {
        return left > right ? left : right;
    }
    /**
     * 小さい方の値を返す
     *
     * @param left  左辺の値
     * @param right 右辺の値
     * @return 小さい方の値
     */
    static min(left, right) {
        return left > right ? right : left;
    }
    /**
     * 角度値をラジアン値に変換する
     *
     * @param degrees   角度値
     * @return 角度値から変換したラジアン値
     */
    static degreesToRadian(degrees) {
        return (degrees / 180.0) * Math.PI;
    }
    /**
     * ラジアン値を角度値に変換する
     *
     * @param radian    ラジアン値
     * @return ラジアン値から変換した角度値
     */
    static radianToDegrees(radian) {
        return (radian * 180.0) / Math.PI;
    }
    /**
     * ２つのベクトルからラジアン値を求める
     *
     * @param from  始点ベクトル
     * @param to    終点ベクトル
     * @return ラジアン値から求めた方向ベクトル
     */
    static directionToRadian(from, to) {
        const q1 = Math.atan2(to.y, to.x);
        const q2 = Math.atan2(from.y, from.x);
        let ret = q1 - q2;
        while (ret < -Math.PI) {
            ret += Math.PI * 2.0;
        }
        while (ret > Math.PI) {
            ret -= Math.PI * 2.0;
        }
        return ret;
    }
    /**
     * ２つのベクトルから角度値を求める
     *
     * @param from  始点ベクトル
     * @param to    終点ベクトル
     * @return 角度値から求めた方向ベクトル
     */
    static directionToDegrees(from, to) {
        const radian = this.directionToRadian(from, to);
        let degree = this.radianToDegrees(radian);
        if (to.x - from.x > 0.0) {
            degree = -degree;
        }
        return degree;
    }
    /**
     * ラジアン値を方向ベクトルに変換する。
     *
     * @param totalAngle    ラジアン値
     * @return ラジアン値から変換した方向ベクトル
     */
    static radianToDirection(totalAngle) {
        const ret = new CubismVector2();
        ret.x = this.sin(totalAngle);
        ret.y = this.cos(totalAngle);
        return ret;
    }
    /**
     * コンストラクタ
     */
    constructor() { }
}

// CONCATENATED MODULE: ./cubism/src/math/cubismmatrix44.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * 4x4の行列
 *
 * 4x4行列の便利クラス。
 */
class CubismMatrix44 {
    /**
     * コンストラクタ
     */
    constructor() {
        this._tr = new Float32Array(16); // 4 * 4のサイズ
        this.loadIdentity();
    }
    /**
     * 受け取った２つの行列の乗算を行う。
     *
     * @param a 行列a
     * @param b 行列b
     * @return 乗算結果の行列
     */
    static multiply(a, b, dst) {
        const c = new Float32Array([
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
        ]);
        const n = 4;
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                for (let k = 0; k < n; ++k) {
                    c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                }
            }
        }
        for (let i = 0; i < 16; ++i) {
            dst[i] = c[i];
        }
    }
    /**
     * 単位行列に初期化する
     */
    loadIdentity() {
        const c = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
        ]);
        this.setMatrix(c);
    }
    /**
     * 行列を設定
     *
     * @param tr 16個の浮動小数点数で表される4x4の行列
     */
    setMatrix(tr) {
        for (let i = 0; i < 16; ++i) {
            this._tr[i] = tr[i];
        }
    }
    /**
     * 行列を浮動小数点数の配列で取得
     *
     * @return 16個の浮動小数点数で表される4x4の行列
     */
    getArray() {
        return this._tr;
    }
    /**
     * X軸の拡大率を取得
     * @return X軸の拡大率
     */
    getScaleX() {
        return this._tr[0];
    }
    /**
     * Y軸の拡大率を取得する
     *
     * @return Y軸の拡大率
     */
    getScaleY() {
        return this._tr[5];
    }
    /**
     * X軸の移動量を取得
     * @return X軸の移動量
     */
    getTranslateX() {
        return this._tr[12];
    }
    /**
     * Y軸の移動量を取得
     * @return Y軸の移動量
     */
    getTranslateY() {
        return this._tr[13];
    }
    /**
     * X軸の値を現在の行列で計算
     *
     * @param src X軸の値
     * @return 現在の行列で計算されたX軸の値
     */
    transformX(src) {
        return this._tr[0] * src + this._tr[12];
    }
    /**
     * Y軸の値を現在の行列で計算
     *
     * @param src Y軸の値
     * @return 現在の行列で計算されたY軸の値
     */
    transformY(src) {
        return this._tr[5] * src + this._tr[13];
    }
    /**
     * X軸の値を現在の行列で逆計算
     */
    invertTransformX(src) {
        return (src - this._tr[12]) / this._tr[0];
    }
    /**
     * Y軸の値を現在の行列で逆計算
     */
    invertTransformY(src) {
        return (src - this._tr[13]) / this._tr[5];
    }
    /**
     * 現在の行列の位置を起点にして移動
     *
     * 現在の行列の位置を起点にして相対的に移動する。
     *
     * @param x X軸の移動量
     * @param y Y軸の移動量
     */
    translateRelative(x, y) {
        const tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0,
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
     * 現在の行列の位置を移動
     *
     * 現在の行列の位置を指定した位置へ移動する
     *
     * @param x X軸の移動量
     * @param y y軸の移動量
     */
    translate(x, y) {
        this._tr[12] = x;
        this._tr[13] = y;
    }
    /**
     * 現在の行列のX軸の位置を指定した位置へ移動する
     *
     * @param x X軸の移動量
     */
    translateX(x) {
        this._tr[12] = x;
    }
    /**
     * 現在の行列のY軸の位置を指定した位置へ移動する
     *
     * @param y Y軸の移動量
     */
    translateY(y) {
        this._tr[13] = y;
    }
    /**
     * 現在の行列の拡大率を相対的に設定する
     *
     * @param x X軸の拡大率
     * @param y Y軸の拡大率
     */
    scaleRelative(x, y) {
        const tr1 = new Float32Array([
            x,
            0.0,
            0.0,
            0.0,
            0.0,
            y,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    }
    /**
     * 現在の行列の拡大率を指定した倍率に設定する
     *
     * @param x X軸の拡大率
     * @param y Y軸の拡大率
     */
    scale(x, y) {
        this._tr[0] = x;
        this._tr[5] = y;
    }
    /**
     * 現在の行列に行列を乗算
     *
     * @param m 行列
     */
    multiplyByMatrix(m) {
        CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
    }
    /**
     * オブジェクトのコピーを生成する
     */
    clone() {
        const cloneMatrix = new CubismMatrix44();
        for (let i = 0; i < this._tr.length; i++) {
            cloneMatrix._tr[i] = this._tr[i];
        }
        return cloneMatrix;
    }
}

// CONCATENATED MODULE: ./cubism/src/rendering/cubismrenderer.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * モデル描画を処理するレンダラ
 *
 * サブクラスに環境依存の描画命令を記述する。
 */
class cubismrenderer_CubismRenderer {
    /**
     * コンストラクタ
     */
    constructor() {
        this._isCulling = false;
        this._isPremultipliedAlpha = false;
        this._anisortopy = 0.0;
        this._modelColor = new CubismTextureColor();
        // 単位行列に初期化
        this._mvpMatrix4x4 = new CubismMatrix44();
        this._mvpMatrix4x4.loadIdentity();
    }
    /**
     * レンダラの初期化処理を実行する
     * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
     * @param model モデルのインスタンス
     */
    initialize(model) {
        this._model = model;
    }
    /**
     * モデルを描画する
     */
    drawModel() {
        if (this.getModel() == null)
            return;
        this.doDrawModel();
    }
    /**
     * Model-View-Projection 行列をセットする
     * 配列は複製されるので、元の配列は外で破棄して良い
     * @param matrix44 Model-View-Projection 行列
     */
    setMvpMatrix(matrix44) {
        this._mvpMatrix4x4.setMatrix(matrix44.getArray());
    }
    /**
     * Model-View-Projection 行列を取得する
     * @return Model-View-Projection 行列
     */
    getMvpMatrix() {
        return this._mvpMatrix4x4;
    }
    /**
     * モデルの色をセットする
     * 各色0.0~1.0の間で指定する（1.0が標準の状態）
     * @param red 赤チャンネルの値
     * @param green 緑チャンネルの値
     * @param blue 青チャンネルの値
     * @param alpha αチャンネルの値
     */
    setModelColor(red, green, blue, alpha) {
        if (red < 0.0) {
            red = 0.0;
        }
        else if (red > 1.0) {
            red = 1.0;
        }
        if (green < 0.0) {
            green = 0.0;
        }
        else if (green > 1.0) {
            green = 1.0;
        }
        if (blue < 0.0) {
            blue = 0.0;
        }
        else if (blue > 1.0) {
            blue = 1.0;
        }
        if (alpha < 0.0) {
            alpha = 0.0;
        }
        else if (alpha > 1.0) {
            alpha = 1.0;
        }
        this._modelColor.R = red;
        this._modelColor.G = green;
        this._modelColor.B = blue;
        this._modelColor.A = alpha;
    }
    /**
     * モデルの色を取得する
     * 各色0.0~1.0の間で指定する(1.0が標準の状態)
     *
     * @return RGBAのカラー情報
     */
    getModelColor() {
        return Object.assign({}, this._modelColor);
    }
    /**
     * 乗算済みαの有効・無効をセットする
     * 有効にするならtrue、無効にするならfalseをセットする
     */
    setIsPremultipliedAlpha(enable) {
        this._isPremultipliedAlpha = enable;
    }
    /**
     * 乗算済みαの有効・無効を取得する
     * @return true 乗算済みのα有効
     * @return false 乗算済みのα無効
     */
    isPremultipliedAlpha() {
        return this._isPremultipliedAlpha;
    }
    /**
     * カリング（片面描画）の有効・無効をセットする。
     * 有効にするならtrue、無効にするならfalseをセットする
     */
    setIsCulling(culling) {
        this._isCulling = culling;
    }
    /**
     * カリング（片面描画）の有効・無効を取得する。
     * @return true カリング有効
     * @return false カリング無効
     */
    isCulling() {
        return this._isCulling;
    }
    /**
     * テクスチャの異方性フィルタリングのパラメータをセットする
     * パラメータ値の影響度はレンダラの実装に依存する
     * @param n パラメータの値
     */
    setAnisotropy(n) {
        this._anisortopy = n;
    }
    /**
     * テクスチャの異方性フィルタリングのパラメータをセットする
     * @return 異方性フィルタリングのパラメータ
     */
    getAnisotropy() {
        return this._anisortopy;
    }
    /**
     * レンダリングするモデルを取得する
     * @return レンダリングするモデル
     */
    getModel() {
        return this._model;
    }
}
var CubismBlendMode;
(function (CubismBlendMode) {
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative"; // 乗算
})(CubismBlendMode || (CubismBlendMode = {}));
/**
 * テクスチャの色をRGBAで扱うためのクラス
 */
class CubismTextureColor {
    /**
     * コンストラクタ
     */
    constructor() {
        this.R = 1.0;
        this.G = 1.0;
        this.B = 1.0;
        this.A = 1.0;
    }
}

// CONCATENATED MODULE: ./cubism/src/live2dcubismframework.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


// ファイルスコープの変数を初期化
let s_isStarted = false;
let s_isInitialized = false;
let s_option = undefined;
/**
 * Framework内で使う定数の宣言
 */
var Constant;
(function (Constant) {
    Constant.vertexOffset = 0; // メッシュ頂点のオフセット値
    Constant.vertexStep = 2; // メッシュ頂点のステップ値
})(Constant || (Constant = {}));
/**
 * Live2D Cubism SDK Original Workflow SDKのエントリポイント
 * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
 */
class live2dcubismframework_CubismFramework {
    /**
     * Cubism FrameworkのAPIを使用可能にする。
     *  APIを実行する前に必ずこの関数を実行すること。
     *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
     *
     * @param    option      Optionクラスのインスタンス
     *
     * @return   準備処理が完了したらtrueが返ります。
     */
    static startUp(option) {
        if (s_isStarted) {
            CubismLogInfo('CubismFramework.startUp() is already done.');
            return s_isStarted;
        }
        if (Live2DCubismCore._isStarted) {
            s_isStarted = true;
            return true;
        }
        Live2DCubismCore._isStarted = true;
        s_option = option;
        if (s_option) {
            Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
        }
        s_isStarted = true;
        // Live2D Cubism Coreバージョン情報を表示
        if (s_isStarted) {
            const version = Live2DCubismCore.Version.csmGetVersion();
            const major = (version & 0xff000000) >> 24;
            const minor = (version & 0x00ff0000) >> 16;
            const patch = version & 0x0000ffff;
            const versionNumber = version;
            CubismLogInfo(`Live2D Cubism Core version: {0}.{1}.{2} ({3})`, ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
        }
        CubismLogInfo('CubismFramework.startUp() is complete.');
        return s_isStarted;
    }
    /**
     * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
     * Dispose()したCubismFrameworkを再利用する際に利用してください。
     */
    static cleanUp() {
        s_isStarted = false;
        s_isInitialized = false;
        s_option = undefined;
    }
    /**
     * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
     *     再度Initialize()するには先にDispose()を実行する必要があります。
     */
    static initialize() {
        if (!s_isStarted) {
            CubismLogWarning('CubismFramework is not started.');
            return;
        }
        // --- s_isInitializedによる連続初期化ガード ---
        // 連続してリソース確保が行われないようにする。
        // 再度Initialize()するには先にDispose()を実行する必要がある。
        if (s_isInitialized) {
            CubismLogWarning('CubismFramework.initialize() skipped, already initialized.');
            return;
        }
        s_isInitialized = true;
        CubismLogInfo('CubismFramework.initialize() is complete.');
    }
    /**
     * Cubism Framework内の全てのリソースを解放します。
     *      ただし、外部で確保されたリソースについては解放しません。
     *      外部で適切に破棄する必要があります。
     */
    static dispose() {
        if (!s_isStarted) {
            CubismLogWarning('CubismFramework is not started.');
            return;
        }
        // --- s_isInitializedによる未初期化解放ガード ---
        // dispose()するには先にinitialize()を実行する必要がある。
        if (!s_isInitialized) {
            // false...リソース未確保の場合
            CubismLogWarning('CubismFramework.dispose() skipped, not initialized.');
            return;
        }
        // レンダラの静的リソース（シェーダプログラム他）を解放する
        cubismrenderer_CubismRenderer.staticRelease();
        s_isInitialized = false;
        CubismLogInfo('CubismFramework.dispose() is complete.');
    }
    /**
     * Cubism FrameworkのAPIを使用する準備が完了したかどうか
     * @return APIを使用する準備が完了していればtrueが返ります。
     */
    static isStarted() {
        return s_isStarted;
    }
    /**
     * Cubism Frameworkのリソース初期化がすでに行われているかどうか
     * @return リソース確保が完了していればtrueが返ります
     */
    static isInitialized() {
        return s_isInitialized;
    }
    /**
     * Core APIにバインドしたログ関数を実行する
     *
     * @praram message ログメッセージ
     */
    static coreLogFunction(message) {
        // Return if logging not possible.
        if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
            return;
        }
        Live2DCubismCore.Logging.csmGetLogFunction()(message);
    }
    /**
     * 現在のログ出力レベル設定の値を返す。
     *
     * @return  現在のログ出力レベル設定の値
     */
    static getLoggingLevel() {
        if (s_option != null) {
            return s_option.loggingLevel;
        }
        return LogLevel.LogLevel_Off;
    }
    /**
     * 静的クラスとして使用する
     * インスタンス化させない
     */
    constructor() { }
}
/**
 * ログ出力のレベル
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
})(LogLevel || (LogLevel = {}));

// CONCATENATED MODULE: ./cubism/src/utils/cubismdebug.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

const CSM_ASSERT =   () => { } ;
function CubismLogDebug(fmt, ...args) {
    cubismdebug_CubismDebug.print(LogLevel.LogLevel_Debug, '[CSM][D]' + fmt + '\n', args);
}
function CubismLogInfo(fmt, ...args) {
    cubismdebug_CubismDebug.print(LogLevel.LogLevel_Info, '[CSM][I]' + fmt + '\n', args);
}
function CubismLogWarning(fmt, ...args) {
    cubismdebug_CubismDebug.print(LogLevel.LogLevel_Warning, '[CSM][W]' + fmt + '\n', args);
}
function CubismLogError(fmt, ...args) {
    cubismdebug_CubismDebug.print(LogLevel.LogLevel_Error, '[CSM][E]' + fmt + '\n', args);
}
/**
 * デバッグ用のユーティリティクラス。
 * ログの出力、バイトのダンプなど
 */
class cubismdebug_CubismDebug {
    /**
     * ログを出力する。第一引数にログレベルを設定する。
     * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
     *
     * @param logLevel ログレベルの設定
     * @param format 書式付き文字列
     * @param args 可変長引数
     */
    static print(logLevel, format, args) {
        // オプションで設定されたログ出力レベルを下回る場合はログに出さない
        if (logLevel < live2dcubismframework_CubismFramework.getLoggingLevel()) {
            return;
        }
        const logPrint = live2dcubismframework_CubismFramework.coreLogFunction;
        if (!logPrint)
            return;
        const buffer = format.replace(/{(\d+)}/g, (m, k) => {
            return args[k];
        });
        logPrint(buffer);
    }
    /**
     * データから指定した長さだけダンプ出力する。
     * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
     *
     * @param logLevel ログレベルの設定
     * @param data ダンプするデータ
     * @param length ダンプする長さ
     */
    static dumpBytes(logLevel, data, length) {
        for (let i = 0; i < length; i++) {
            if (i % 16 == 0 && i > 0)
                this.print(logLevel, '\n');
            else if (i % 8 == 0 && i > 0)
                this.print(logLevel, '  ');
            this.print(logLevel, '{0} ', [data[i] & 0xff]);
        }
        this.print(logLevel, '\n');
    }
    /**
     * private コンストラクタ
     */
    constructor() { }
}

// CONCATENATED MODULE: ./cubism/src/motion/acubismmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


/**
 * モーションの抽象基底クラス
 *
 * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
 */
class acubismmotion_ACubismMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        this._fadeInSeconds = -1.0;
        this._fadeOutSeconds = -1.0;
        this._weight = 1.0;
        this._offsetSeconds = 0.0; // 再生の開始時刻
        this._firedEventValues = [];
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._weight = 0.0;
    }
    /**
     * モデルのパラメータ
     * @param model 対象のモデル
     * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
     * @param userTimeSeconds デルタ時間の積算値[秒]
     */
    updateParameters(model, motionQueueEntry, userTimeSeconds) {
        if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
            return;
        }
        if (!motionQueueEntry.isStarted()) {
            motionQueueEntry.setIsStarted(true);
            motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
            motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
            const duration = this.getDuration();
            if (motionQueueEntry.getEndTime() < 0) {
                // 開始していないうちに終了設定している場合がある。
                motionQueueEntry.setEndTime(duration <= 0 ? -1 : motionQueueEntry.getStartTime() + duration);
                // duration == -1 の場合はループする
            }
        }
        let fadeWeight = this._weight; // 現在の値と掛け合わせる割合
        //---- フェードイン・アウトの処理 ----
        // 単純なサイン関数でイージングする
        const fadeIn = this._fadeInSeconds == 0.0
            ? 1.0
            : cubismmath_CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                this._fadeInSeconds);
        const fadeOut = this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0
            ? 1.0
            : cubismmath_CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                this._fadeOutSeconds);
        fadeWeight = fadeWeight * fadeIn * fadeOut;
        motionQueueEntry.setState(userTimeSeconds, fadeWeight);
        //---- 全てのパラメータIDをループする ----
        this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
        // 後処理
        // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
        if (motionQueueEntry.getEndTime() > 0 &&
            motionQueueEntry.getEndTime() < userTimeSeconds) {
            motionQueueEntry.setIsFinished(true); // 終了
        }
    }
    /**
     * フェードインの時間を設定する
     * @param fadeInSeconds フェードインにかかる時間[秒]
     */
    setFadeInTime(fadeInSeconds) {
        this._fadeInSeconds = fadeInSeconds;
    }
    /**
     * フェードアウトの時間を設定する
     * @param fadeOutSeconds フェードアウトにかかる時間[秒]
     */
    setFadeOutTime(fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
    }
    /**
     * フェードアウトにかかる時間の取得
     * @return フェードアウトにかかる時間[秒]
     */
    getFadeOutTime() {
        return this._fadeOutSeconds;
    }
    /**
     * フェードインにかかる時間の取得
     * @return フェードインにかかる時間[秒]
     */
    getFadeInTime() {
        return this._fadeInSeconds;
    }
    /**
     * モーション適用の重みの設定
     * @param weight 重み（0.0 - 1.0）
     */
    setWeight(weight) {
        this._weight = weight;
    }
    /**
     * モーション適用の重みの取得
     * @return 重み（0.0 - 1.0）
     */
    getWeight() {
        return this._weight;
    }
    /**
     * モーションの長さの取得
     * @return モーションの長さ[秒]
     *
     * @note ループの時は「-1」。
     *       ループでない場合は、オーバーライドする。
     *       正の値の時は取得される時間で終了する。
     *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
     */
    getDuration() {
        return -1.0;
    }
    /**
     * モーションのループ1回分の長さの取得
     * @return モーションのループ一回分の長さ[秒]
     *
     * @note ループしない場合は、getDuration()と同じ値を返す
     *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
     */
    getLoopDuration() {
        return -1.0;
    }
    /**
     * モーション再生の開始時刻の設定
     * @param offsetSeconds モーション再生の開始時刻[秒]
     */
    setOffsetTime(offsetSeconds) {
        this._offsetSeconds = offsetSeconds;
    }
    /**
     * モデルのパラメータ更新
     *
     * イベント発火のチェック。
     * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
     *
     * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
     * @param motionTimeSeconds 今回の再生時間[秒]
     */
    getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
        return this._firedEventValues;
    }
    /**
     * モーション再生終了コールバックの登録
     *
     * モーション再生終了コールバックを登録する。
     * isFinishedフラグを設定するタイミングで呼び出される。
     * 以下の状態の際には呼び出されない:
     *   1. 再生中のモーションが「ループ」として設定されているとき
     *   2. コールバックが登録されていない時
     *
     * @param onFinishedMotionHandler モーション再生終了コールバック関数
     */
    setFinishedMotionHandler(onFinishedMotionHandler) {
        this._onFinishedMotion = onFinishedMotionHandler;
    }
    ;
    /**
     * モーション再生終了コールバックの取得
     *
     * モーション再生終了コールバックを取得する。
     *
     * @return 登録されているモーション再生終了コールバック関数
     */
    getFinishedMotionHandler() {
        return this._onFinishedMotion;
    }
    ;
}

// CONCATENATED MODULE: ./cubism/src/motion/cubismexpressionmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

// exp3.jsonのキーとデフォルト
const DefaultFadeTime = 1.0;
/**
 * 表情のモーション
 *
 * 表情のモーションクラス。
 */
class cubismexpressionmotion_CubismExpressionMotion extends acubismmotion_ACubismMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        super();
        this._parameters = [];
    }
    /**
     * インスタンスを作成する。
     * @param json expファイルが読み込まれているバッファ
     * @param size バッファのサイズ
     * @return 作成されたインスタンス
     */
    static create(json) {
        const expression = new cubismexpressionmotion_CubismExpressionMotion();
        const fadeInTime = json.FadeInTime;
        const fadeOutTime = json.FadeOutTime;
        expression.setFadeInTime(fadeInTime !== undefined ? fadeInTime : DefaultFadeTime); // フェードイン
        expression.setFadeOutTime(fadeOutTime !== undefined ? fadeOutTime : DefaultFadeTime); // フェードアウト
        // 各パラメータについて
        const parameters = json.Parameters || [];
        for (let i = 0; i < parameters.length; ++i) {
            const param = parameters[i];
            const parameterId = param.Id; // パラメータID
            const value = param.Value; // 値
            // 計算方法の設定
            let blendType;
            switch (param.Blend) {
                case 'Multiply':
                    blendType = ExpressionBlendType.ExpressionBlendType_Multiply;
                    break;
                case 'Overwrite':
                    blendType = ExpressionBlendType.ExpressionBlendType_Overwrite;
                    break;
                case 'Add':
                // その他 仕様にない値を設定した時は加算モードにすることで復旧
                default:
                    blendType = ExpressionBlendType.ExpressionBlendType_Add;
                    break;
            }
            // 設定オブジェクトを作成してリストに追加する
            const item = {
                parameterId: parameterId,
                blendType: blendType,
                value: value,
            };
            expression._parameters.push(item);
        }
        return expression;
    }
    /**
     * モデルのパラメータの更新の実行
     * @param model 対象のモデル
     * @param userTimeSeconds デルタ時間の積算値[秒]
     * @param weight モーションの重み
     * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
     */
    doUpdateParameters(model, userTimeSeconds, weight, motionQueueEntry) {
        for (let i = 0; i < this._parameters.length; ++i) {
            const parameter = this._parameters[i];
            switch (parameter.blendType) {
                case ExpressionBlendType.ExpressionBlendType_Add: {
                    model.addParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
                case ExpressionBlendType.ExpressionBlendType_Multiply: {
                    model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
                case ExpressionBlendType.ExpressionBlendType_Overwrite: {
                    model.setParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
            }
        }
    }
}
/**
 * 表情パラメータ値の計算方式
 */
var ExpressionBlendType;
(function (ExpressionBlendType) {
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Add"] = 0] = "ExpressionBlendType_Add";
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Multiply"] = 1] = "ExpressionBlendType_Multiply";
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Overwrite"] = 2] = "ExpressionBlendType_Overwrite"; // 上書き
})(ExpressionBlendType || (ExpressionBlendType = {}));

// CONCATENATED MODULE: ./cubism/src/motion/cubismmotionqueueentry.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * CubismMotionQueueManagerで再生している各モーションの管理クラス。
 */
class CubismMotionQueueEntry {
    /**
     * コンストラクタ
     */
    constructor() {
        this._autoDelete = false;
        this._available = true;
        this._finished = false;
        this._started = false;
        this._startTimeSeconds = -1.0;
        this._fadeInStartTimeSeconds = 0.0;
        this._endTimeSeconds = -1.0;
        this._stateTimeSeconds = 0.0;
        this._stateWeight = 0.0;
        this._lastEventCheckSeconds = 0.0;
        this._motionQueueEntryHandle = this;
        this._fadeOutSeconds = 0.0;
        this._isTriggeredFadeOut = false;
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        if (this._autoDelete && this._motion) {
            this._motion.release();
        }
    }
    /**
     * フェードアウト時間と開始判定の設定
     * @param fadeOutSeconds フェードアウトにかかる時間[秒]
     */
    setFadeOut(fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
        this._isTriggeredFadeOut = true;
    }
    /**
     * フェードアウトの開始
     * @param fadeOutSeconds フェードアウトにかかる時間[秒]
     * @param userTimeSeconds デルタ時間の積算値[秒]
     */
    startFadeOut(fadeOutSeconds, userTimeSeconds) {
        const newEndTimeSeconds = userTimeSeconds + fadeOutSeconds;
        this._isTriggeredFadeOut = true;
        if (this._endTimeSeconds < 0.0 ||
            newEndTimeSeconds < this._endTimeSeconds) {
            this._endTimeSeconds = newEndTimeSeconds;
        }
    }
    /**
     * モーションの終了の確認
     *
     * @return true モーションが終了した
     * @return false 終了していない
     */
    isFinished() {
        return this._finished;
    }
    /**
     * モーションの開始の確認
     * @return true モーションが開始した
     * @return false 開始していない
     */
    isStarted() {
        return this._started;
    }
    /**
     * モーションの開始時刻の取得
     * @return モーションの開始時刻[秒]
     */
    getStartTime() {
        return this._startTimeSeconds;
    }
    /**
     * フェードインの開始時刻の取得
     * @return フェードインの開始時刻[秒]
     */
    getFadeInStartTime() {
        return this._fadeInStartTimeSeconds;
    }
    /**
     * フェードインの終了時刻の取得
     * @return フェードインの終了時刻の取得
     */
    getEndTime() {
        return this._endTimeSeconds;
    }
    /**
     * モーションの開始時刻の設定
     * @param startTime モーションの開始時刻
     */
    setStartTime(startTime) {
        this._startTimeSeconds = startTime;
    }
    /**
     * フェードインの開始時刻の設定
     * @param startTime フェードインの開始時刻[秒]
     */
    setFadeInStartTime(startTime) {
        this._fadeInStartTimeSeconds = startTime;
    }
    /**
     * フェードインの終了時刻の設定
     * @param endTime フェードインの終了時刻[秒]
     */
    setEndTime(endTime) {
        this._endTimeSeconds = endTime;
    }
    /**
     * モーションの終了の設定
     * @param f trueならモーションの終了
     */
    setIsFinished(f) {
        this._finished = f;
    }
    /**
     * モーション開始の設定
     * @param f trueならモーションの開始
     */
    setIsStarted(f) {
        this._started = f;
    }
    /**
     * モーションの有効性の確認
     * @return true モーションは有効
     * @return false モーションは無効
     */
    isAvailable() {
        return this._available;
    }
    /**
     * モーションの有効性の設定
     * @param v trueならモーションは有効
     */
    setIsAvailable(v) {
        this._available = v;
    }
    /**
     * モーションの状態の設定
     * @param timeSeconds 現在時刻[秒]
     * @param weight モーション尾重み
     */
    setState(timeSeconds, weight) {
        this._stateTimeSeconds = timeSeconds;
        this._stateWeight = weight;
    }
    /**
     * モーションの現在時刻の取得
     * @return モーションの現在時刻[秒]
     */
    getStateTime() {
        return this._stateTimeSeconds;
    }
    /**
     * モーションの重みの取得
     * @return モーションの重み
     */
    getStateWeight() {
        return this._stateWeight;
    }
    /**
     * 最後にイベントの発火をチェックした時間を取得
     *
     * @return 最後にイベントの発火をチェックした時間[秒]
     */
    getLastCheckEventSeconds() {
        return this._lastEventCheckSeconds;
    }
    /**
     * 最後にイベントをチェックした時間を設定
     * @param checkSeconds 最後にイベントをチェックした時間[秒]
     */
    setLastCheckEventSeconds(checkSeconds) {
        this._lastEventCheckSeconds = checkSeconds;
    }
    /**
     * フェードアウト開始判定の取得
     * @return フェードアウト開始するかどうか
     */
    isTriggeredFadeOut() {
        return this._isTriggeredFadeOut && this._endTimeSeconds < 0.0;
    }
    /**
     * フェードアウト時間の取得
     * @return フェードアウト時間[秒]
     */
    getFadeOutSeconds() {
        return this._fadeOutSeconds;
    }
}

// CONCATENATED MODULE: ./cubism/src/motion/cubismmotionqueuemanager.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * モーション再生の管理
 *
 * モーション再生の管理用クラス。CubismMotionモーションなどACubismMotionのサブクラスを再生するために使用する。
 *
 * @note 再生中に別のモーションが StartMotion()された場合は、新しいモーションに滑らかに変化し旧モーションは中断する。
 *       表情用モーション、体用モーションなどを分けてモーション化した場合など、
 *       複数のモーションを同時に再生させる場合は、複数のCubismMotionQueueManagerインスタンスを使用する。
 */
class cubismmotionqueuemanager_CubismMotionQueueManager {
    /**
     * コンストラクタ
     */
    constructor() {
        this._userTimeSeconds = 0.0;
        this._eventCustomData = null;
        this._motions = [];
    }
    /**
     * デストラクタ
     */
    release() {
        for (let i = 0; i < this._motions.length; ++i) {
            if (this._motions[i]) {
                this._motions[i].release();
            }
        }
        this._motions = undefined;
    }
    /**
     * 指定したモーションの開始
     *
     * 指定したモーションを開始する。同じタイプのモーションが既にある場合は、既存のモーションに終了フラグを立て、フェードアウトを開始させる。
     *
     * @param   motion          開始するモーション
     * @param   autoDelete      再生が終了したモーションのインスタンスを削除するなら true
     * @param   userTimeSeconds デルタ時間の積算値[秒]
     * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
     */
    startMotion(motion, autoDelete, userTimeSeconds) {
        if (motion == null) {
            return InvalidMotionQueueEntryHandleValue;
        }
        let motionQueueEntry;
        // 既にモーションがあれば終了フラグを立てる
        for (let i = 0; i < this._motions.length; ++i) {
            motionQueueEntry = this._motions[i];
            if (motionQueueEntry == null) {
                continue;
            }
            motionQueueEntry.setFadeOut(motionQueueEntry._motion.getFadeOutTime()); // フェードアウト設定
        }
        motionQueueEntry = new CubismMotionQueueEntry(); // 終了時に破棄する
        motionQueueEntry._autoDelete = autoDelete;
        motionQueueEntry._motion = motion;
        this._motions.push(motionQueueEntry);
        return motionQueueEntry._motionQueueEntryHandle;
    }
    /**
     * 全てのモーションの終了の確認
     * @return true 全て終了している
     * @return false 終了していない
     */
    isFinished() {
        // ------- 処理を行う -------
        // 既にモーションがあれば終了フラグを立てる
        let i = 0;
        while (i < this._motions.length) {
            const motionQueueEntry = this._motions[i];
            if (motionQueueEntry == null) {
                this._motions.splice(i, 1); // 削除
                continue;
            }
            const motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                this._motions.splice(i, 1); // 削除
                continue;
            }
            // ----- 終了済みの処理があれば削除する ------
            if (!motionQueueEntry.isFinished()) {
                return false;
            }
            i++;
        }
        return true;
    }
    /**
     * 指定したモーションの終了の確認
     * @param motionQueueEntryNumber モーションの識別番号
     * @return true 全て終了している
     * @return false 終了していない
     */
    isFinishedByHandle(motionQueueEntryNumber) {
        // 既にモーションがあれば終了フラグを立てる
        for (let i = 0; i < this._motions.length; i++) {
            const motionQueueEntry = this._motions[i];
            if (motionQueueEntry == null) {
                continue;
            }
            if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber &&
                !motionQueueEntry.isFinished()) {
                return false;
            }
        }
        return true;
    }
    /**
     * 全てのモーションを停止する
     */
    stopAllMotions() {
        // ------- 処理を行う -------
        // 既にモーションがあれば終了フラグを立てる
        for (let i = 0; i < this._motions.length; i++) {
            const motionQueueEntry = this._motions[i];
            if (motionQueueEntry != null) {
                // ----- 終了済みの処理があれば削除する ------
                motionQueueEntry.release();
            }
        }
        this._motions = [];
    }
    /**
     * 指定したCubismMotionQueueEntryの取得
  
     * @param   motionQueueEntryNumber  モーションの識別番号
     * @return  指定したCubismMotionQueueEntry
     * @return  null   見つからなかった
     */
    getCubismMotionQueueEntry(motionQueueEntryNumber) {
        //------- 処理を行う -------
        // 既にモーションがあれば終了フラグを立てる
        return this._motions.find(entry => entry != null && entry._motionQueueEntryHandle == motionQueueEntryNumber);
    }
    /**
     * イベントを受け取るCallbackの登録
     *
     * @param callback コールバック関数
     * @param customData コールバックに返されるデータ
     */
    setEventCallback(callback, customData = null) {
        this._eventCallBack = callback;
        this._eventCustomData = customData;
    }
    /**
     * モーションを更新して、モデルにパラメータ値を反映する。
     *
     * @param   model   対象のモデル
     * @param   userTimeSeconds   デルタ時間の積算値[秒]
     * @return  true    モデルへパラメータ値の反映あり
     * @return  false   モデルへパラメータ値の反映なし(モーションの変化なし)
     */
    doUpdateMotion(model, userTimeSeconds) {
        let updated = false;
        // ------- 処理を行う --------
        // 既にモーションがあれば終了フラグを立てる
        let i = 0;
        while (i < this._motions.length) {
            const motionQueueEntry = this._motions[i];
            if (motionQueueEntry == null) {
                this._motions.splice(i, 1); // 削除
                continue;
            }
            const motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                this._motions.splice(i, 1); // 削除
                continue;
            }
            // ------ 値を反映する ------
            motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
            updated = true;
            // ------ ユーザトリガーイベントを検査する ----
            const firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventSeconds() -
                motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
            for (let i = 0; i < firedList.length; ++i) {
                this._eventCallBack(this, firedList[i], this._eventCustomData);
            }
            motionQueueEntry.setLastCheckEventSeconds(userTimeSeconds);
            // ------ 終了済みの処理があれば削除する ------
            if (motionQueueEntry.isFinished()) {
                motionQueueEntry.release();
                this._motions.splice(i, 1); // 削除
            }
            else {
                if (motionQueueEntry.isTriggeredFadeOut()) {
                    motionQueueEntry.startFadeOut(motionQueueEntry.getFadeOutSeconds(), userTimeSeconds);
                }
                i++;
            }
        }
        return updated;
    }
}
const InvalidMotionQueueEntryHandleValue = -1;

// CONCATENATED MODULE: ./src/cubism4/Cubism4ExpressionManager.ts



class Cubism4ExpressionManager_Cubism4ExpressionManager extends ExpressionManager["a" /* ExpressionManager */] {
    constructor(settings, options) {
        var _a;
        super(settings, options);
        this.queueManager = new cubismmotionqueuemanager_CubismMotionQueueManager();
        this.definitions = (_a = settings.expressions) !== null && _a !== void 0 ? _a : [];
        this.init();
    }
    isFinished() {
        return this.queueManager.isFinished();
    }
    getExpressionIndex(name) {
        return this.definitions.findIndex(def => def.Name === name);
    }
    getExpressionFile(definition) {
        return definition.File;
    }
    createExpression(data, definition) {
        return cubismexpressionmotion_CubismExpressionMotion.create(data);
    }
    _setExpression(motion) {
        return this.queueManager.startMotion(motion, false, performance.now());
    }
    stopAllExpressions() {
        this.queueManager.stopAllMotions();
    }
    updateParameters(model, now) {
        return this.queueManager.doUpdateMotion(model, now);
    }
}

// EXTERNAL MODULE: ./src/cubism-common/ModelSettings.ts
var ModelSettings = __webpack_require__(11);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./cubism/src/settings/cubismmodelsettingsjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * Model3Jsonパーサー
 *
 * model3.jsonファイルをパースして値を取得する
 */
class CubismModelSettingsJson {
    constructor(json) {
        this.groups = json.Groups;
        this.hitAreas = json.HitAreas;
        this.layout = json.Layout;
        this.moc = json.FileReferences.Moc;
        this.expressions = json.FileReferences.Expressions;
        this.motions = json.FileReferences.Motions;
        this.textures = json.FileReferences.Textures;
        this.physics = json.FileReferences.Physics;
        this.pose = json.FileReferences.Pose;
    }
    getEyeBlinkParameters() {
        var _a, _b;
        return (_b = (_a = this.groups) === null || _a === void 0 ? void 0 : _a.find(group => group.Name === 'EyeBlink')) === null || _b === void 0 ? void 0 : _b.Ids;
    }
    getLipSyncParameters() {
        var _a, _b;
        return (_b = (_a = this.groups) === null || _a === void 0 ? void 0 : _a.find(group => group.Name === 'LipSync')) === null || _b === void 0 ? void 0 : _b.Ids;
    }
}

// CONCATENATED MODULE: ./src/cubism4/Cubism4ModelSettings.ts



class Cubism4ModelSettings_Cubism4ModelSettings extends ModelSettings["a" /* ModelSettings */] {
    constructor(json) {
        super(json);
        if (!Cubism4ModelSettings_Cubism4ModelSettings.isValidJSON(json)) {
            throw new TypeError('Invalid JSON.');
        }
        // this doesn't seem to be allowed in ES6 and above, calling it will cause an error:
        // "Class constructor CubismModelSettingsJson cannot be invoked without 'new'"
        //
        // CubismModelSettingsJson.call(this, json);
        Object.assign(this, new CubismModelSettingsJson(json));
    }
    static isValidJSON(json) {
        var _a;
        return !!(json === null || json === void 0 ? void 0 : json.FileReferences)
            && typeof json.FileReferences.Moc === 'string'
            && ((_a = json.FileReferences.Textures) === null || _a === void 0 ? void 0 : _a.length) > 0
            // textures must be an array of strings
            && json.FileReferences.Textures.every((item) => typeof item === 'string');
    }
    replaceFiles(replace) {
        super.replaceFiles(replace);
        if (this.motions) {
            for (const [group, motions] of Object.entries(this.motions)) {
                for (let i = 0; i < motions.length; i++) {
                    motions[i].File = replace(motions[i].File, `motions.${group}[${i}].File`);
                    if (motions[i].Sound !== undefined) {
                        motions[i].Sound = replace(motions[i].Sound, `motions.${group}[${i}].Sound`);
                    }
                }
            }
        }
        if (this.expressions) {
            for (let i = 0; i < this.expressions.length; i++) {
                this.expressions[i].File = replace(this.expressions[i].File, `expressions[${i}].File`);
            }
        }
    }
}
Object(utils["a" /* applyMixins */])(Cubism4ModelSettings_Cubism4ModelSettings, [CubismModelSettingsJson]);

// EXTERNAL MODULE: ./src/cubism-common/MotionManager.ts
var MotionManager = __webpack_require__(12);

// CONCATENATED MODULE: ./cubism/src/motion/cubismmotioninternal.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * @brief モーションカーブの種類
 *
 * モーションカーブの種類。
 */
var CubismMotionCurveTarget;
(function (CubismMotionCurveTarget) {
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity"; // パーツの不透明度に対して
})(CubismMotionCurveTarget || (CubismMotionCurveTarget = {}));
/**
 * @brief モーションカーブのセグメントの種類
 *
 * モーションカーブのセグメントの種類。
 */
var CubismMotionSegmentType;
(function (CubismMotionSegmentType) {
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped"; // インバースステップ
})(CubismMotionSegmentType || (CubismMotionSegmentType = {}));
/**
 * @brief モーションカーブの制御点
 *
 * モーションカーブの制御点。
 */
class CubismMotionPoint {
    constructor(time = 0.0, value = 0.0) {
        this.time = time;
        this.value = value;
    }
}
/**
 * @brief モーションカーブのセグメント
 *
 * モーションカーブのセグメント。
 */
class CubismMotionSegment {
    /**
     * @brief コンストラクタ
     *
     * コンストラクタ。
     */
    constructor() {
        this.basePointIndex = 0;
        this.segmentType = 0;
    }
}
/**
 * @brief モーションカーブ
 *
 * モーションカーブ。
 */
class CubismMotionCurve {
    constructor() {
        this.id = ''; // カーブのID
        this.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
        this.segmentCount = 0;
        this.baseSegmentIndex = 0;
        this.fadeInTime = 0.0;
        this.fadeOutTime = 0.0;
    }
}
/**
 * イベント。
 */
class CubismMotionEvent {
    constructor() {
        this.fireTime = 0.0;
        this.value = '';
    }
}
/**
 * @brief モーションデータ
 *
 * モーションデータ。
 */
class CubismMotionData {
    constructor() {
        this.duration = 0.0;
        this.loop = false;
        this.curveCount = 0;
        this.eventCount = 0;
        this.fps = 0.0;
        this.curves = [];
        this.segments = [];
        this.points = [];
        this.events = [];
    }
}

// CONCATENATED MODULE: ./cubism/src/motion/cubismmotionjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * motion3.jsonのコンテナ。
 */
class CubismMotionJson {
    /**
     * コンストラクタ
     * @param json motion3.jsonが読み込まれているバッファ
     */
    constructor(json) {
        this._json = json;
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._json = undefined;
    }
    /**
     * モーションの長さを取得する
     * @return モーションの長さ[秒]
     */
    getMotionDuration() {
        return this._json.Meta.Duration;
    }
    /**
     * モーションのループ情報の取得
     * @return true ループする
     * @return false ループしない
     */
    isMotionLoop() {
        return this._json.Meta.Loop || false;
    }
    /**
     * モーションカーブの個数の取得
     * @return モーションカーブの個数
     */
    getMotionCurveCount() {
        return this._json.Meta.CurveCount;
    }
    /**
     * モーションのフレームレートの取得
     * @return フレームレート[FPS]
     */
    getMotionFps() {
        return this._json.Meta.Fps;
    }
    /**
     * モーションのセグメントの総合計の取得
     * @return モーションのセグメントの取得
     */
    getMotionTotalSegmentCount() {
        return this._json.Meta.TotalSegmentCount;
    }
    /**
     * モーションのカーブの制御店の総合計の取得
     * @return モーションのカーブの制御点の総合計
     */
    getMotionTotalPointCount() {
        return this._json.Meta.TotalPointCount;
    }
    /**
     * モーションのフェードイン時間の取得
     * @return フェードイン時間[秒]
     */
    getMotionFadeInTime() {
        return this._json.Meta.FadeInTime;
    }
    /**
     * モーションのフェードアウト時間の取得
     * @return フェードアウト時間[秒]
     */
    getMotionFadeOutTime() {
        return this._json.Meta.FadeOutTime;
    }
    /**
     * モーションのカーブの種類の取得
     * @param curveIndex カーブのインデックス
     * @return カーブの種類
     */
    getMotionCurveTarget(curveIndex) {
        return this._json.Curves[curveIndex].Target;
    }
    /**
     * モーションのカーブのIDの取得
     * @param curveIndex カーブのインデックス
     * @return カーブのID
     */
    getMotionCurveId(curveIndex) {
        return this._json.Curves[curveIndex].Id;
    }
    /**
     * モーションのカーブのフェードイン時間の取得
     * @param curveIndex カーブのインデックス
     * @return フェードイン時間[秒]
     */
    getMotionCurveFadeInTime(curveIndex) {
        return this._json.Curves[curveIndex].FadeInTime;
    }
    /**
     * モーションのカーブのフェードアウト時間の取得
     * @param curveIndex カーブのインデックス
     * @return フェードアウト時間[秒]
     */
    getMotionCurveFadeOutTime(curveIndex) {
        return this._json.Curves[curveIndex].FadeOutTime;
    }
    /**
     * モーションのカーブのセグメントの個数を取得する
     * @param curveIndex カーブのインデックス
     * @return モーションのカーブのセグメントの個数
     */
    getMotionCurveSegmentCount(curveIndex) {
        return this._json.Curves[curveIndex].Segments.length;
    }
    /**
     * モーションのカーブのセグメントの値の取得
     * @param curveIndex カーブのインデックス
     * @param segmentIndex セグメントのインデックス
     * @return セグメントの値
     */
    getMotionCurveSegment(curveIndex, segmentIndex) {
        return this._json.Curves[curveIndex].Segments[segmentIndex];
    }
    /**
     * イベントの個数の取得
     * @return イベントの個数
     */
    getEventCount() {
        return this._json.Meta.UserDataCount || 0;
    }
    /**
     *  イベントの総文字数の取得
     * @return イベントの総文字数
     */
    getTotalEventValueSize() {
        return this._json.Meta.TotalUserDataSize;
    }
    /**
     * イベントの時間の取得
     * @param userDataIndex イベントのインデックス
     * @return イベントの時間[秒]
     */
    getEventTime(userDataIndex) {
        return this._json.UserData[userDataIndex].Time;
    }
    /**
     * イベントの取得
     * @param userDataIndex イベントのインデックス
     * @return イベントの文字列
     */
    getEventValue(userDataIndex) {
        return this._json.UserData[userDataIndex].Value;
    }
}

// CONCATENATED MODULE: ./cubism/src/motion/cubismmotion.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */





const EffectNameEyeBlink = 'EyeBlink';
const EffectNameLipSync = 'LipSync';
const TargetNameModel = 'Model';
const TargetNameParameter = 'Parameter';
const TargetNamePartOpacity = 'PartOpacity';
function lerpPoints(a, b, t) {
    const result = new CubismMotionPoint();
    result.time = a.time + (b.time - a.time) * t;
    result.value = a.value + (b.value - a.value) * t;
    return result;
}
function linearEvaluate(points, time) {
    let t = (time - points[0].time) / (points[1].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    return points[0].value + (points[1].value - points[0].value) * t;
}
function bezierEvaluate(points, time) {
    let t = (time - points[0].time) / (points[3].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    const p01 = lerpPoints(points[0], points[1], t);
    const p12 = lerpPoints(points[1], points[2], t);
    const p23 = lerpPoints(points[2], points[3], t);
    const p012 = lerpPoints(p01, p12, t);
    const p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function steppedEvaluate(points, time) {
    return points[0].value;
}
function inverseSteppedEvaluate(points, time) {
    return points[1].value;
}
function evaluateCurve(motionData, index, time) {
    // Find segment to evaluate.
    const curve = motionData.curves[index];
    let target = -1;
    const totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
    let pointPosition = 0;
    for (let i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
        // Get first point of next segment.
        pointPosition =
            motionData.segments[i].basePointIndex +
                (motionData.segments[i].segmentType ==
                    CubismMotionSegmentType.CubismMotionSegmentType_Bezier
                    ? 3
                    : 1);
        // Break if time lies within current segment.
        if (motionData.points[pointPosition].time > time) {
            target = i;
            break;
        }
    }
    if (target == -1) {
        return motionData.points[pointPosition].value;
    }
    const segment = motionData.segments[target];
    return segment.evaluate(motionData.points.slice(segment.basePointIndex), time);
}
/**
 * モーションクラス
 *
 * モーションのクラス。
 */
class cubismmotion_CubismMotion extends acubismmotion_ACubismMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        super();
        this._eyeBlinkParameterIds = []; // 自動まばたきを適用するパラメータIDハンドルのリスト。  モデル（モデルセッティング）とパラメータを対応付ける。
        this._lipSyncParameterIds = []; // リップシンクを適用するパラメータIDハンドルのリスト。  モデル（モデルセッティング）とパラメータを対応付ける。
        this._sourceFrameRate = 30.0;
        this._loopDurationSeconds = -1.0;
        this._isLoop = false; // trueから false へデフォルトを変更
        this._isLoopFadeIn = true; // ループ時にフェードインが有効かどうかのフラグ
        this._lastWeight = 0.0;
    }
    /**
     * インスタンスを作成する
     *
     * @param json motion3.jsonが読み込まれているバッファ
     * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
     * @return 作成されたインスタンス
     */
    static create(json, onFinishedMotionHandler) {
        const ret = new cubismmotion_CubismMotion();
        ret.parse(json);
        ret._sourceFrameRate = ret._motionData.fps;
        ret._loopDurationSeconds = ret._motionData.duration;
        ret._onFinishedMotion = onFinishedMotionHandler;
        // NOTE: Editorではループありのモーション書き出しは非対応
        // ret->_loop = (ret->_motionData->Loop > 0);
        return ret;
    }
    /**
     * モデルのパラメータの更新の実行
     * @param model             対象のモデル
     * @param userTimeSeconds   現在の時刻[秒]
     * @param fadeWeight        モーションの重み
     * @param motionQueueEntry  CubismMotionQueueManagerで管理されているモーション
     */
    doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry) {
        if (this._modelCurveIdEyeBlink == null) {
            this._modelCurveIdEyeBlink = EffectNameEyeBlink;
        }
        if (this._modelCurveIdLipSync == null) {
            this._modelCurveIdLipSync = EffectNameLipSync;
        }
        let timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
        if (timeOffsetSeconds < 0.0) {
            timeOffsetSeconds = 0.0; // エラー回避
        }
        let lipSyncValue = Number.MAX_VALUE;
        let eyeBlinkValue = Number.MAX_VALUE;
        //まばたき、リップシンクのうちモーションの適用を検出するためのビット（maxFlagCount個まで
        const MaxTargetSize = 64;
        let lipSyncFlags = 0;
        let eyeBlinkFlags = 0;
        //瞬き、リップシンクのターゲット数が上限を超えている場合
        if (this._eyeBlinkParameterIds.length > MaxTargetSize) {
            CubismLogDebug('too many eye blink targets : {0}', this._eyeBlinkParameterIds.length);
        }
        if (this._lipSyncParameterIds.length > MaxTargetSize) {
            CubismLogDebug('too many lip sync targets : {0}', this._lipSyncParameterIds.length);
        }
        const tmpFadeIn = this._fadeInSeconds <= 0.0
            ? 1.0
            : cubismmath_CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                this._fadeInSeconds);
        const tmpFadeOut = this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0
            ? 1.0
            : cubismmath_CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                this._fadeOutSeconds);
        let value;
        let c, parameterIndex;
        // 'Repeat' time as necessary.
        let time = timeOffsetSeconds;
        if (this._isLoop) {
            while (time > this._motionData.duration) {
                time -= this._motionData.duration;
            }
        }
        const curves = this._motionData.curves;
        // Evaluate model curves.
        for (c = 0; c < this._motionData.curveCount &&
            curves[c].type ==
                CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
            // Evaluate curve and call handler.
            value = evaluateCurve(this._motionData, c, time);
            if (curves[c].id == this._modelCurveIdEyeBlink) {
                eyeBlinkValue = value;
            }
            else if (curves[c].id == this._modelCurveIdLipSync) {
                lipSyncValue = value;
            }
        }
        for (; c < this._motionData.curveCount &&
            curves[c].type ==
                CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
            // Find parameter index.
            parameterIndex = model.getParameterIndex(curves[c].id);
            // Skip curve evaluation if no value in sink.
            if (parameterIndex == -1) {
                continue;
            }
            const sourceValue = model.getParameterValueByIndex(parameterIndex);
            // Evaluate curve and apply value.
            value = evaluateCurve(this._motionData, c, time);
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for (let i = 0; i < this._eyeBlinkParameterIds.length && i < MaxTargetSize; ++i) {
                    if (this._eyeBlinkParameterIds[i] == curves[c].id) {
                        value *= eyeBlinkValue;
                        eyeBlinkFlags |= 1 << i;
                        break;
                    }
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for (let i = 0; i < this._lipSyncParameterIds.length && i < MaxTargetSize; ++i) {
                    if (this._lipSyncParameterIds[i] == curves[c].id) {
                        value += lipSyncValue;
                        lipSyncFlags |= 1 << i;
                        break;
                    }
                }
            }
            let v;
            // パラメータごとのフェード
            if (curves[c].fadeInTime < 0.0 && curves[c].fadeOutTime < 0.0) {
                // モーションのフェードを適用
                v = sourceValue + (value - sourceValue) * fadeWeight;
            }
            else {
                // パラメータに対してフェードインかフェードアウトが設定してある場合はそちらを適用
                let fin;
                let fout;
                if (curves[c].fadeInTime < 0.0) {
                    fin = tmpFadeIn;
                }
                else {
                    fin =
                        curves[c].fadeInTime == 0.0
                            ? 1.0
                            : cubismmath_CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                                curves[c].fadeInTime);
                }
                if (curves[c].fadeOutTime < 0.0) {
                    fout = tmpFadeOut;
                }
                else {
                    fout =
                        curves[c].fadeOutTime == 0.0 ||
                            motionQueueEntry.getEndTime() < 0.0
                            ? 1.0
                            : cubismmath_CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                                curves[c].fadeOutTime);
                }
                const paramWeight = this._weight * fin * fout;
                // パラメータごとのフェードを適用
                v = sourceValue + (value - sourceValue) * paramWeight;
            }
            model.setParameterValueByIndex(parameterIndex, v, 1.0);
        }
        {
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for (let i = 0; i < this._eyeBlinkParameterIds.length && i < MaxTargetSize; ++i) {
                    const sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds[i]);
                    // モーションでの上書きがあった時にはまばたきは適用しない
                    if ((eyeBlinkFlags >> i) & 0x01) {
                        continue;
                    }
                    const v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._eyeBlinkParameterIds[i], v);
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for (let i = 0; i < this._lipSyncParameterIds.length && i < MaxTargetSize; ++i) {
                    const sourceValue = model.getParameterValueById(this._lipSyncParameterIds[i]);
                    // モーションでの上書きがあった時にはリップシンクは適用しない
                    if ((lipSyncFlags >> i) & 0x01) {
                        continue;
                    }
                    const v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._lipSyncParameterIds[i], v);
                }
            }
        }
        for (; c < this._motionData.curveCount &&
            curves[c].type ==
                CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
            // Find parameter index.
            parameterIndex = model.getParameterIndex(curves[c].id);
            // Skip curve evaluation if no value in sink.
            if (parameterIndex == -1) {
                continue;
            }
            // Evaluate curve and apply value.
            value = evaluateCurve(this._motionData, c, time);
            model.setParameterValueByIndex(parameterIndex, value);
        }
        if (timeOffsetSeconds >= this._motionData.duration) {
            if (this._isLoop) {
                motionQueueEntry.setStartTime(userTimeSeconds); // 最初の状態へ
                if (this._isLoopFadeIn) {
                    // ループ内でループ用フェードインが有効の時は、フェードイン設定し直し
                    motionQueueEntry.setFadeInStartTime(userTimeSeconds);
                }
            }
            else {
                if (this._onFinishedMotion) {
                    this._onFinishedMotion(this);
                }
                motionQueueEntry.setIsFinished(true);
            }
        }
        this._lastWeight = fadeWeight;
    }
    /**
     * ループ情報の設定
     * @param loop ループ情報
     */
    setIsLoop(loop) {
        this._isLoop = loop;
    }
    /**
     * ループ情報の取得
     * @return true ループする
     * @return false ループしない
     */
    isLoop() {
        return this._isLoop;
    }
    /**
     * ループ時のフェードイン情報の設定
     * @param loopFadeIn  ループ時のフェードイン情報
     */
    setIsLoopFadeIn(loopFadeIn) {
        this._isLoopFadeIn = loopFadeIn;
    }
    /**
     * ループ時のフェードイン情報の取得
     *
     * @return  true    する
     * @return  false   しない
     */
    isLoopFadeIn() {
        return this._isLoopFadeIn;
    }
    /**
     * モーションの長さを取得する。
     *
     * @return  モーションの長さ[秒]
     */
    getDuration() {
        return this._isLoop ? -1.0 : this._loopDurationSeconds;
    }
    /**
     * モーションのループ時の長さを取得する。
     *
     * @return  モーションのループ時の長さ[秒]
     */
    getLoopDuration() {
        return this._loopDurationSeconds;
    }
    /**
     * パラメータに対するフェードインの時間を設定する。
     *
     * @param parameterId     パラメータID
     * @param value           フェードインにかかる時間[秒]
     */
    setParameterFadeInTime(parameterId, value) {
        const curves = this._motionData.curves;
        for (let i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves[i].id) {
                curves[i].fadeInTime = value;
                return;
            }
        }
    }
    /**
     * パラメータに対するフェードアウトの時間の設定
     * @param parameterId     パラメータID
     * @param value           フェードアウトにかかる時間[秒]
     */
    setParameterFadeOutTime(parameterId, value) {
        const curves = this._motionData.curves;
        for (let i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves[i].id) {
                curves[i].fadeOutTime = value;
                return;
            }
        }
    }
    /**
     * パラメータに対するフェードインの時間の取得
     * @param    parameterId     パラメータID
     * @return   フェードインにかかる時間[秒]
     */
    getParameterFadeInTime(parameterId) {
        const curves = this._motionData.curves;
        for (let i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves[i].id) {
                return curves[i].fadeInTime;
            }
        }
        return -1;
    }
    /**
     * パラメータに対するフェードアウトの時間を取得
     *
     * @param   parameterId     パラメータID
     * @return   フェードアウトにかかる時間[秒]
     */
    getParameterFadeOutTime(parameterId) {
        const curves = this._motionData.curves;
        for (let i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves[i].id) {
                return curves[i].fadeOutTime;
            }
        }
        return -1;
    }
    /**
     * 自動エフェクトがかかっているパラメータIDリストの設定
     * @param eyeBlinkParameterIds    自動まばたきがかかっているパラメータIDのリスト
     * @param lipSyncParameterIds     リップシンクがかかっているパラメータIDのリスト
     */
    setEffectIds(eyeBlinkParameterIds, lipSyncParameterIds) {
        this._eyeBlinkParameterIds = eyeBlinkParameterIds;
        this._lipSyncParameterIds = lipSyncParameterIds;
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._motionData = undefined;
    }
    /**
     * motion3.jsonをパースする。
     *
     * @param motionJson  motion3.jsonが読み込まれているバッファ
     */
    parse(motionJson) {
        this._motionData = new CubismMotionData();
        let json = new CubismMotionJson(motionJson);
        this._motionData.duration = json.getMotionDuration();
        this._motionData.loop = json.isMotionLoop();
        this._motionData.curveCount = json.getMotionCurveCount();
        this._motionData.fps = json.getMotionFps();
        this._motionData.eventCount = json.getEventCount();
        const fadeInSeconds = json.getMotionFadeInTime();
        const fadeOutSeconds = json.getMotionFadeOutTime();
        if (fadeInSeconds !== undefined) {
            this._fadeInSeconds = fadeInSeconds < 0.0 ? 1.0 : fadeInSeconds;
        }
        else {
            this._fadeInSeconds = 1.0;
        }
        if (fadeOutSeconds !== undefined) {
            this._fadeOutSeconds = fadeOutSeconds < 0.0 ? 1.0 : fadeOutSeconds;
        }
        else {
            this._fadeOutSeconds = 1.0;
        }
        this._motionData.curves = Array.from({ length: this._motionData.curveCount }).map(() => new CubismMotionCurve());
        this._motionData.segments = Array.from({ length: json.getMotionTotalSegmentCount() }).map(() => new CubismMotionSegment());
        this._motionData.events = Array.from({ length: this._motionData.eventCount }).map(() => new CubismMotionEvent());
        this._motionData.points = [];
        let totalPointCount = 0;
        let totalSegmentCount = 0;
        // Curves
        for (let curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
            const curve = this._motionData.curves[curveCount];
            switch (json.getMotionCurveTarget(curveCount)) {
                case TargetNameModel:
                    curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
                    break;
                case TargetNameParameter:
                    curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
                    break;
                case TargetNamePartOpacity:
                    curve.type = CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
                    break;
            }
            curve.id = json.getMotionCurveId(curveCount);
            curve.baseSegmentIndex = totalSegmentCount;
            const fadeInTime = json.getMotionCurveFadeInTime(curveCount);
            const fadeOutTime = json.getMotionCurveFadeOutTime(curveCount);
            curve.fadeInTime = fadeInTime !== undefined ? fadeInTime : -1.0;
            curve.fadeOutTime = fadeOutTime !== undefined ? fadeOutTime : -1.0;
            // Segments
            for (let segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);) {
                if (segmentPosition == 0) {
                    this._motionData.segments[totalSegmentCount].basePointIndex = totalPointCount;
                    this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition), json.getMotionCurveSegment(curveCount, segmentPosition + 1));
                    totalPointCount += 1;
                    segmentPosition += 2;
                }
                else {
                    this._motionData.segments[totalSegmentCount].basePointIndex =
                        totalPointCount - 1;
                }
                const segment = json.getMotionCurveSegment(curveCount, segmentPosition);
                switch (segment) {
                    case CubismMotionSegmentType.CubismMotionSegmentType_Linear: {
                        this._motionData.segments[totalSegmentCount].segmentType =
                            CubismMotionSegmentType.CubismMotionSegmentType_Linear;
                        this._motionData.segments[totalSegmentCount].evaluate = linearEvaluate;
                        this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                    case CubismMotionSegmentType.CubismMotionSegmentType_Bezier: {
                        this._motionData.segments[totalSegmentCount].segmentType =
                            CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
                        this._motionData.segments[totalSegmentCount].evaluate = bezierEvaluate;
                        this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
                        this._motionData.points[totalPointCount + 1] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 3), json.getMotionCurveSegment(curveCount, segmentPosition + 4));
                        this._motionData.points[totalPointCount + 2] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 5), json.getMotionCurveSegment(curveCount, segmentPosition + 6));
                        totalPointCount += 3;
                        segmentPosition += 7;
                        break;
                    }
                    case CubismMotionSegmentType.CubismMotionSegmentType_Stepped: {
                        this._motionData.segments[totalSegmentCount].segmentType =
                            CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
                        this._motionData.segments[totalSegmentCount].evaluate = steppedEvaluate;
                        this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                    case CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped: {
                        this._motionData.segments[totalSegmentCount].segmentType =
                            CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
                        this._motionData.segments[totalSegmentCount].evaluate = inverseSteppedEvaluate;
                        this._motionData.points[totalPointCount] = new CubismMotionPoint(json.getMotionCurveSegment(curveCount, segmentPosition + 1), json.getMotionCurveSegment(curveCount, segmentPosition + 2));
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                }
                ++curve.segmentCount;
                ++totalSegmentCount;
            }
            this._motionData.curves.push(curve);
        }
        for (let userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
            this._motionData.events[userdatacount].fireTime = json.getEventTime(userdatacount);
            this._motionData.events[userdatacount].value = json.getEventValue(userdatacount);
        }
        json.release();
    }
    /**
     * モデルのパラメータ更新
     *
     * イベント発火のチェック。
     * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
     *
     * @param beforeCheckTimeSeconds   前回のイベントチェック時間[秒]
     * @param motionTimeSeconds        今回の再生時間[秒]
     */
    getFiredEvent(beforeCheckTimeSeconds, motionTimeSeconds) {
        this._firedEventValues.length = 0;
        // イベントの発火チェック
        for (let u = 0; u < this._motionData.eventCount; ++u) {
            if (this._motionData.events[u].fireTime > beforeCheckTimeSeconds &&
                this._motionData.events[u].fireTime <= motionTimeSeconds) {
                this._firedEventValues.push(this._motionData.events[u].value);
            }
        }
        return this._firedEventValues;
    }
}

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);

// CONCATENATED MODULE: ./src/cubism4/Cubism4MotionManager.ts





class Cubism4MotionManager_Cubism4MotionManager extends MotionManager["a" /* MotionManager */] {
    constructor(settings, options) {
        var _a;
        super(settings, options);
        this.groups = { idle: 'Idle' };
        this.motionDataType = 'json';
        this.queueManager = new cubismmotionqueuemanager_CubismMotionQueueManager();
        this.definitions = (_a = settings.motions) !== null && _a !== void 0 ? _a : {};
        this.eyeBlinkIds = settings.getEyeBlinkParameters() || [];
        this.lipSyncIds = settings.getLipSyncParameters() || [];
        this.init(options);
    }
    init(options) {
        super.init(options);
        if (this.settings.expressions) {
            this.expressionManager = new Cubism4ExpressionManager_Cubism4ExpressionManager(this.settings, options);
        }
        this.queueManager.setEventCallback((caller, eventValue, customData) => {
            this.emit('motion:' + eventValue);
        });
    }
    isFinished() {
        return this.queueManager.isFinished();
    }
    _startMotion(motion, onFinish) {
        motion.setFinishedMotionHandler(onFinish);
        this.queueManager.stopAllMotions();
        return this.queueManager.startMotion(motion, false, performance.now());
    }
    _stopAllMotions() {
        this.queueManager.stopAllMotions();
    }
    createMotion(data, group, definition) {
        const motion = cubismmotion_CubismMotion.create(data);
        const defaultFadingDuration = (group === this.groups.idle
            ? config["b" /* config */].idleMotionFadingDuration
            : config["b" /* config */].motionFadingDuration) / 1000;
        motion.setFadeInTime(definition.FadeInTime > 0 ? definition.FadeInTime : defaultFadingDuration);
        motion.setFadeOutTime(definition.FadeOutTime > 0 ? definition.FadeOutTime : defaultFadingDuration);
        motion.setEffectIds(this.eyeBlinkIds, this.lipSyncIds);
        return motion;
    }
    getMotionFile(definition) {
        return definition.File;
    }
    getMotionName(definition) {
        return definition.File;
    }
    getSoundFile(definition) {
        return definition.Sound;
    }
    updateParameters(model, now) {
        return this.queueManager.doUpdateMotion(model, now);
    }
    destroy() {
        super.destroy();
        this.queueManager.release();
        this.queueManager = undefined;
    }
}

// EXTERNAL MODULE: ./src/cubism-common/InternalModel.ts
var InternalModel = __webpack_require__(13);
// パラメータID
const ParamAngleX = 'ParamAngleX';
const ParamAngleY = 'ParamAngleY';
const ParamAngleZ = 'ParamAngleZ';
const ParamEyeBallX = 'ParamEyeBallX';
const ParamEyeBallY = 'ParamEyeBallY';
const ParamBodyAngleX = 'ParamBodyAngleX';
const ParamBreath = 'ParamBreath';

// CONCATENATED MODULE: ./cubism/src/effect/cubismbreath.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * 呼吸機能
 *
 * 呼吸機能を提供する。
 */
class CubismBreath {
    /**
     * コンストラクタ
     */
    constructor() {
        this._breathParameters = []; // 呼吸にひもづいているパラメータのリスト
        this._currentTime = 0.0;
    }
    /**
     * インスタンスの作成
     */
    static create() {
        return new CubismBreath();
    }
    /**
     * 呼吸のパラメータの紐づけ
     * @param breathParameters 呼吸を紐づけたいパラメータのリスト
     */
    setParameters(breathParameters) {
        this._breathParameters = breathParameters;
    }
    /**
     * 呼吸に紐づいているパラメータの取得
     * @return 呼吸に紐づいているパラメータのリスト
     */
    getParameters() {
        return this._breathParameters;
    }
    /**
     * モデルのパラメータの更新
     * @param model 対象のモデル
     * @param deltaTimeSeconds デルタ時間[秒]
     */
    updateParameters(model, deltaTimeSeconds) {
        this._currentTime += deltaTimeSeconds;
        const t = this._currentTime * 2.0 * 3.14159;
        for (let i = 0; i < this._breathParameters.length; ++i) {
            const data = this._breathParameters[i];
            model.addParameterValueById(data.parameterId, data.offset + data.peak * Math.sin(t / data.cycle), data.weight);
        }
    }
}
/**
 * 呼吸のパラメータ情報
 */
class BreathParameterData {
    /**
     * コンストラクタ
     * @param parameterId   呼吸をひもづけるパラメータID
     * @param offset        呼吸を正弦波としたときの、波のオフセット
     * @param peak          呼吸を正弦波としたときの、波の高さ
     * @param cycle         呼吸を正弦波としたときの、波の周期
     * @param weight        パラメータへの重み
     */
    constructor(parameterId, offset, peak, cycle, weight) {
        this.parameterId = parameterId == undefined ? undefined : parameterId;
        this.offset = offset == undefined ? 0.0 : offset;
        this.peak = peak == undefined ? 0.0 : peak;
        this.cycle = cycle == undefined ? 0.0 : cycle;
        this.weight = weight == undefined ? 0.0 : weight;
    }
}

// CONCATENATED MODULE: ./cubism/src/effect/cubismeyeblink.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * 自動まばたき機能
 *
 * 自動まばたき機能を提供する。
 */
class CubismEyeBlink {
    /**
     * コンストラクタ
     * @param modelSetting モデルの設定情報
     */
    constructor(modelSetting) {
        var _a, _b;
        this._blinkingState = EyeState.EyeState_First;
        this._nextBlinkingTime = 0.0;
        this._stateStartTimeSeconds = 0.0;
        this._blinkingIntervalSeconds = 4.0;
        this._closingSeconds = 0.1;
        this._closedSeconds = 0.05;
        this._openingSeconds = 0.15;
        this._userTimeSeconds = 0.0;
        this._parameterIds = [];
        if (modelSetting == null) {
            return;
        }
        this._parameterIds = (_b = (_a = modelSetting.getEyeBlinkParameters()) === null || _a === void 0 ? void 0 : _a.slice()) !== null && _b !== void 0 ? _b : this._parameterIds;
    }
    /**
     * インスタンスを作成する
     * @param modelSetting モデルの設定情報
     * @return 作成されたインスタンス
     * @note 引数がNULLの場合、パラメータIDが設定されていない空のインスタンスを作成する。
     */
    static create(modelSetting) {
        return new CubismEyeBlink(modelSetting);
    }
    /**
     * まばたきの間隔の設定
     * @param blinkingInterval まばたきの間隔の時間[秒]
     */
    setBlinkingInterval(blinkingInterval) {
        this._blinkingIntervalSeconds = blinkingInterval;
    }
    /**
     * まばたきのモーションの詳細設定
     * @param closing   まぶたを閉じる動作の所要時間[秒]
     * @param closed    まぶたを閉じている動作の所要時間[秒]
     * @param opening   まぶたを開く動作の所要時間[秒]
     */
    setBlinkingSetting(closing, closed, opening) {
        this._closingSeconds = closing;
        this._closedSeconds = closed;
        this._openingSeconds = opening;
    }
    /**
     * まばたきさせるパラメータIDのリストの設定
     * @param parameterIds パラメータのIDのリスト
     */
    setParameterIds(parameterIds) {
        this._parameterIds = parameterIds;
    }
    /**
     * まばたきさせるパラメータIDのリストの取得
     * @return パラメータIDのリスト
     */
    getParameterIds() {
        return this._parameterIds;
    }
    /**
     * モデルのパラメータの更新
     * @param model 対象のモデル
     * @param deltaTimeSeconds デルタ時間[秒]
     */
    updateParameters(model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        let parameterValue;
        let t = 0.0;
        switch (this._blinkingState) {
            case EyeState.EyeState_Closing:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._closingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = EyeState.EyeState_Closed;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0 - t;
                break;
            case EyeState.EyeState_Closed:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._closedSeconds;
                if (t >= 1.0) {
                    this._blinkingState = EyeState.EyeState_Opening;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 0.0;
                break;
            case EyeState.EyeState_Opening:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._openingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = EyeState.EyeState_Interval;
                    this._nextBlinkingTime = this.determinNextBlinkingTiming();
                }
                parameterValue = t;
                break;
            case EyeState.EyeState_Interval:
                if (this._nextBlinkingTime < this._userTimeSeconds) {
                    this._blinkingState = EyeState.EyeState_Closing;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0;
                break;
            case EyeState.EyeState_First:
            default:
                this._blinkingState = EyeState.EyeState_Interval;
                this._nextBlinkingTime = this.determinNextBlinkingTiming();
                parameterValue = 1.0;
                break;
        }
        if (!CubismEyeBlink.CloseIfZero) {
            parameterValue = -parameterValue;
        }
        for (let i = 0; i < this._parameterIds.length; ++i) {
            model.setParameterValueById(this._parameterIds[i], parameterValue);
        }
    }
    /**
     * 次の瞬きのタイミングの決定
     *
     * @return 次のまばたきを行う時刻[秒]
     */
    determinNextBlinkingTiming() {
        const r = Math.random();
        return (this._userTimeSeconds + r * (2.0 * this._blinkingIntervalSeconds - 1.0));
    }
}
/**
 * IDで指定された目のパラメータが、0のときに閉じるなら true 、1の時に閉じるなら false 。
 */
CubismEyeBlink.CloseIfZero = true;
/**
 * まばたきの状態
 *
 * まばたきの状態を表す列挙型
 */
var EyeState;
(function (EyeState) {
    EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
    EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
    EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
    EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
    EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening"; // まぶたが開いていく途中の状態
})(EyeState || (EyeState = {}));

// CONCATENATED MODULE: ./cubism/src/type/csmrectf.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * 矩形形状（座標・長さはfloat値）を定義するクラス
 */
class csmRect {
    /**
     * コンストラクタ
     * @param x 左端X座標
     * @param y 上端Y座標
     * @param w 幅
     * @param h 高さ
     */
    constructor(x = 0, y = 0, w = 0, h = 0) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    /**
     * 矩形中央のX座標を取得する
     */
    getCenterX() {
        return this.x + 0.5 * this.width;
    }
    /**
     * 矩形中央のY座標を取得する
     */
    getCenterY() {
        return this.y + 0.5 * this.height;
    }
    /**
     * 右側のX座標を取得する
     */
    getRight() {
        return this.x + this.width;
    }
    /**
     * 下端のY座標を取得する
     */
    getBottom() {
        return this.y + this.height;
    }
    /**
     * 矩形に値をセットする
     * @param r 矩形のインスタンス
     */
    setRect(r) {
        this.x = r.x;
        this.y = r.y;
        this.width = r.width;
        this.height = r.height;
    }
    /**
     * 矩形中央を軸にして縦横を拡縮する
     * @param w 幅方向に拡縮する量
     * @param h 高さ方向に拡縮する量
     */
    expand(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += w * 2.0;
        this.height += h * 2.0;
    }
}

// CONCATENATED MODULE: ./cubism/src/config.ts
var config_config;
(function (config) {
    config.supportMoreMaskDivisions = true;
})(config_config || (config_config = {}));

// CONCATENATED MODULE: ./cubism/src/rendering/cubismrenderer_webgl.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */






const ColorChannelCount = 4; // 実験時に1チャンネルの場合は1、RGBだけの場合は3、アルファも含める場合は4
const shaderCount = 10; // シェーダーの数 = マスク生成用 + (通常用 + 加算 + 乗算) * (マスク無の乗算済アルファ対応版 + マスク有の乗算済アルファ対応版 + マスク有反転の乗算済アルファ対応版)
let s_instance;
let s_viewport;
let s_fbo;
/**
 * クリッピングマスクの処理を実行するクラス
 */
class cubismrenderer_webgl_CubismClippingManager_WebGL {
    /**
     * コンストラクタ
     */
    constructor() {
        this._maskRenderTexture = null;
        this._colorBuffer = null;
        this._currentFrameNo = 0;
        this._clippingMaskBufferSize = 256;
        this._clippingContextListForMask = [];
        this._clippingContextListForDraw = [];
        this._channelColors = [];
        this._tmpBoundsOnModel = new csmRect();
        this._tmpMatrix = new CubismMatrix44();
        this._tmpMatrixForMask = new CubismMatrix44();
        this._tmpMatrixForDraw = new CubismMatrix44();
        let tmp = new CubismTextureColor();
        tmp.R = 1.0;
        tmp.G = 0.0;
        tmp.B = 0.0;
        tmp.A = 0.0;
        this._channelColors.push(tmp);
        tmp = new CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 1.0;
        tmp.B = 0.0;
        tmp.A = 0.0;
        this._channelColors.push(tmp);
        tmp = new CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 0.0;
        tmp.B = 1.0;
        tmp.A = 0.0;
        this._channelColors.push(tmp);
        tmp = new CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 0.0;
        tmp.B = 0.0;
        tmp.A = 1.0;
        this._channelColors.push(tmp);
    }
    /**
     * カラーチャンネル（RGBA）のフラグを取得する
     * @param channelNo カラーチャンネル（RGBA）の番号（0:R, 1:G, 2:B, 3:A）
     */
    getChannelFlagAsColor(channelNo) {
        return this._channelColors[channelNo];
    }
    /**
     * テンポラリのレンダーテクスチャのアドレスを取得する
     * FrameBufferObjectが存在しない場合、新しく生成する
     *
     * @return レンダーテクスチャのアドレス
     */
    getMaskRenderTexture() {
        let ret = 0;
        // テンポラリのRenderTextureを取得する
        if (this._maskTexture && this._maskTexture.texture != 0) {
            // 前回使ったものを返す
            this._maskTexture.frameNo = this._currentFrameNo;
            ret = this._maskTexture.texture;
        }
        if (ret == 0) {
            // FrameBufferObjectが存在しない場合、新しく生成する
            // クリッピングバッファサイズを取得
            const size = this._clippingMaskBufferSize;
            this._colorBuffer = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            ret = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
            this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
        }
        return ret;
    }
    /**
     * WebGLレンダリングコンテキストを設定する
     * @param gl WebGLレンダリングコンテキスト
     */
    setGL(gl) {
        this.gl = gl;
    }
    /**
     * マスクされる描画オブジェクト群全体を囲む矩形（モデル座標系）を計算する
     * @param model モデルのインスタンス
     * @param clippingContext クリッピングマスクのコンテキスト
     */
    calcClippedDrawTotalBounds(model, clippingContext) {
        // 被クリッピングマスク（マスクされる描画オブジェクト）の全体の矩形
        let clippedDrawTotalMinX = Number.MAX_VALUE;
        let clippedDrawTotalMinY = Number.MAX_VALUE;
        let clippedDrawTotalMaxX = Number.MIN_VALUE;
        let clippedDrawTotalMaxY = Number.MIN_VALUE;
        // このマスクが実際に必要か判定する
        // このクリッピングを利用する「描画オブジェクト」がひとつでも使用可能であればマスクを生成する必要がある
        const clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
        for (let clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
            // マスクを使用する描画オブジェクトの描画される矩形を求める
            const drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
            const drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
            const drawableVertexes = model.getDrawableVertices(drawableIndex);
            let minX = Number.MAX_VALUE;
            let minY = Number.MAX_VALUE;
            let maxX = Number.MIN_VALUE;
            let maxY = Number.MIN_VALUE;
            const loop = drawableVertexCount * Constant.vertexStep;
            for (let pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep) {
                const x = drawableVertexes[pi];
                const y = drawableVertexes[pi + 1];
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
            }
            // 有効な点が一つも取れなかったのでスキップ
            if (minX == Number.MAX_VALUE) {
                continue;
            }
            // 全体の矩形に反映
            if (minX < clippedDrawTotalMinX) {
                clippedDrawTotalMinX = minX;
            }
            if (minY < clippedDrawTotalMinY) {
                clippedDrawTotalMinY = minY;
            }
            if (maxX > clippedDrawTotalMaxX) {
                clippedDrawTotalMaxX = maxX;
            }
            if (maxY > clippedDrawTotalMaxY) {
                clippedDrawTotalMaxY = maxY;
            }
            if (clippedDrawTotalMinX == Number.MAX_VALUE) {
                clippingContext._allClippedDrawRect.x = 0.0;
                clippingContext._allClippedDrawRect.y = 0.0;
                clippingContext._allClippedDrawRect.width = 0.0;
                clippingContext._allClippedDrawRect.height = 0.0;
                clippingContext._isUsing = false;
            }
            else {
                clippingContext._isUsing = true;
                const w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
                const h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
                clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.width = w;
                clippingContext._allClippedDrawRect.height = h;
            }
        }
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        var _a, _b, _c;
        const self = this;
        for (let i = 0; i < this._clippingContextListForMask.length; i++) {
            if (this._clippingContextListForMask[i]) {
                (_a = this._clippingContextListForMask[i]) === null || _a === void 0 ? void 0 : _a.release();
            }
        }
        self._clippingContextListForMask = undefined;
        // _clippingContextListForDrawは_clippingContextListForMaskにあるインスタンスを指している。上記の処理により要素ごとのDELETEは不要。
        self._clippingContextListForDraw = undefined;
        if (this._maskTexture) {
            (_b = this.gl) === null || _b === void 0 ? void 0 : _b.deleteFramebuffer(this._maskTexture.texture);
            self._maskTexture = undefined;
        }
        self._channelColors = undefined;
        // テクスチャ解放
        (_c = this.gl) === null || _c === void 0 ? void 0 : _c.deleteTexture(this._colorBuffer);
        this._colorBuffer = null;
    }
    /**
     * マネージャの初期化処理
     * クリッピングマスクを使う描画オブジェクトの登録を行う
     * @param model モデルのインスタンス
     * @param drawableCount 描画オブジェクトの数
     * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのインデックスのリスト
     * @param drawableCounts 描画オブジェクトをマスクする描画オブジェクトの数
     */
    initialize(model, drawableCount, drawableMasks, drawableMaskCounts) {
        // クリッピングマスクを使う描画オブジェクトをすべて登録する
        // クリッピングマスクは、通常数個程度に限定して使うものとする
        for (let i = 0; i < drawableCount; i++) {
            if (drawableMaskCounts[i] <= 0) {
                // クリッピングマスクが使用されていないアートメッシュ（多くの場合使用しない）
                this._clippingContextListForDraw.push(null);
                continue;
            }
            // 既にあるClipContextと同じかチェックする
            let clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
            if (clippingContext == null) {
                // 同一のマスクが存在していない場合は生成する
                clippingContext = new cubismrenderer_webgl_CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
                this._clippingContextListForMask.push(clippingContext);
            }
            clippingContext.addClippedDrawable(i);
            this._clippingContextListForDraw.push(clippingContext);
        }
    }
    /**
     * クリッピングコンテキストを作成する。モデル描画時に実行する。
     * @param model モデルのインスタンス
     * @param renderer レンダラのインスタンス
     */
    setupClippingContext(model, renderer) {
        this._currentFrameNo++;
        // 全てのクリッピングを用意する
        // 同じクリップ（複数の場合はまとめて一つのクリップ）を使う場合は1度だけ設定する
        let usingClipCount = 0;
        for (let clipIndex = 0; clipIndex < this._clippingContextListForMask.length; clipIndex++) {
            // 1つのクリッピングマスクに関して
            const cc = this._clippingContextListForMask[clipIndex];
            // このクリップを利用する描画オブジェクト群全体を囲む矩形を計算
            this.calcClippedDrawTotalBounds(model, cc);
            if (cc._isUsing) {
                usingClipCount++; // 使用中としてカウント
            }
        }
        // マスク作成処理
        if (usingClipCount > 0) {
            // 生成したFrameBufferと同じサイズでビューポートを設定
            this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
            // マスクをactiveにする
            this._maskRenderTexture = this.getMaskRenderTexture();
            // モデル描画時にDrawMeshNowに渡される変換(モデルtoワールド座標変換)
            const modelToWorldF = renderer.getMvpMatrix();
            renderer.preDraw(); // バッファをクリアする
            // 各マスクのレイアウトを決定していく
            this.setupLayoutBounds(usingClipCount);
            // ---------- マスク描画処理 ----------
            // マスク用RenderTextureをactiveにセット
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
            // マスクをクリアする
            // (仮仕様) 1が無効（描かれない）領域、0が有効（描かれる）領域。（シェーダーCd*Csで0に近い値をかけてマスクを作る。1をかけると何も起こらない）
            this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            // 実際にマスクを生成する
            // 全てのマスクをどのようにレイアウトして描くかを決定し、ClipContext, ClippedDrawContextに記憶する
            for (let clipIndex = 0; clipIndex < this._clippingContextListForMask.length; clipIndex++) {
                // --- 実際に1つのマスクを描く ---
                const clipContext = this._clippingContextListForMask[clipIndex];
                const allClipedDrawRect = clipContext._allClippedDrawRect; // このマスクを使う、すべての描画オブジェクトの論理座標上の囲み矩形
                const layoutBoundsOnTex01 = clipContext._layoutBounds; // この中にマスクを収める
                // モデル座標上の矩形を、適宜マージンを付けて使う
                const MARGIN = 0.05;
                this._tmpBoundsOnModel.setRect(allClipedDrawRect);
                this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
                //########## 本来は割り当てられた領域の全体を使わず必要最低限のサイズがよい
                // シェーダ用の計算式を求める。回転を考慮しない場合は以下のとおり
                // movePeriod' = movePeriod * scaleX + offX		  [[ movePeriod' = (movePeriod - tmpBoundsOnModel.movePeriod)*scale + layoutBoundsOnTex01.movePeriod ]]
                const scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                const scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                // マスク生成時に使う行列を求める
                {
                    // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                    this._tmpMatrix.loadIdentity();
                    {
                        // layout0..1 を -1..1に変換
                        this._tmpMatrix.translateRelative(-1.0, -1.0);
                        this._tmpMatrix.scaleRelative(2.0, 2.0);
                    }
                    {
                        // view to layout0..1
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                        // new = [translate][scale][translate]
                    }
                    // tmpMatrixForMaskが計算結果
                    this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
                }
                //--------- draw時の mask 参照用行列を計算
                {
                    // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                    this._tmpMatrix.loadIdentity();
                    {
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                        // new = [translate][scale][translate]
                    }
                    this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
                }
                clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                const clipDrawCount = clipContext._clippingIdCount;
                for (let i = 0; i < clipDrawCount; i++) {
                    const clipDrawIndex = clipContext._clippingIdList[i];
                    // 頂点情報が更新されておらず、信頼性がない場合は描画をパスする
                    if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                        continue;
                    }
                    renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
                    // 今回専用の変換を適用して描く
                    // チャンネルも切り替える必要がある(A,R,G,B)
                    renderer.setClippingContextBufferForMask(clipContext);
                    renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), model.getDrawableVertexIndexCount(clipDrawIndex), model.getDrawableVertexCount(clipDrawIndex), model.getDrawableVertexIndices(clipDrawIndex), model.getDrawableVertices(clipDrawIndex), model.getDrawableVertexUvs(clipDrawIndex), model.getDrawableOpacity(clipDrawIndex), CubismBlendMode.CubismBlendMode_Normal, // クリッピングは通常描画を強制
                    false);
                }
            }
            // --- 後処理 ---
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo); // 描画対象を戻す
            renderer.setClippingContextBufferForMask(null);
            this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
        }
    }
    /**
     * 既にマスクを作っているかを確認
     * 作っている様であれば該当するクリッピングマスクのインスタンスを返す
     * 作っていなければNULLを返す
     * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのリスト
     * @param drawableMaskCounts 描画オブジェクトをマスクする描画オブジェクトの数
     * @return 該当するクリッピングマスクが存在すればインスタンスを返し、なければNULLを返す
     */
    findSameClip(drawableMasks, drawableMaskCounts) {
        // 作成済みClippingContextと一致するか確認
        for (let i = 0; i < this._clippingContextListForMask.length; i++) {
            const clippingContext = this._clippingContextListForMask[i];
            const count = clippingContext._clippingIdCount;
            // 個数が違う場合は別物
            if (count != drawableMaskCounts) {
                continue;
            }
            let sameCount = 0;
            // 同じIDを持つか確認。配列の数が同じなので、一致した個数が同じなら同じ物を持つとする
            for (let j = 0; j < count; j++) {
                const clipId = clippingContext._clippingIdList[j];
                for (let k = 0; k < count; k++) {
                    if (drawableMasks[k] == clipId) {
                        sameCount++;
                        break;
                    }
                }
            }
            if (sameCount == count) {
                return clippingContext;
            }
        }
        return null; // 見つからなかった
    }
    /**
     * クリッピングコンテキストを配置するレイアウト
     * 一つのレンダーテクスチャを極力いっぱいに使ってマスクをレイアウトする
     * マスクグループの数が4以下ならRGBA各チャンネルに一つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する。
     *
     * @param usingClipCount 配置するクリッピングコンテキストの数
     */
    setupLayoutBounds(usingClipCount) {
        // ひとつのRenderTextureを極力いっぱいに使ってマスクをレイアウトする
        // マスクグループの数が4以下ならRGBA各チャンネルに1つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する
        // RGBAを順番に使っていく
        let div = usingClipCount / ColorChannelCount; // 1チャンネルに配置する基本のマスク
        let mod = usingClipCount % ColorChannelCount; // 余り、この番号のチャンネルまでに一つずつ配分する
        // 小数点は切り捨てる
        div = ~~div;
        mod = ~~mod;
        // RGBAそれぞれのチャンネルを用意していく（0:R, 1:G, 2:B, 3:A）
        let curClipIndex = 0; // 順番に設定していく
        for (let channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
            // このチャンネルにレイアウトする数
            const layoutCount = div + (channelNo < mod ? 1 : 0);
            // 分割方法を決定する
            if (layoutCount == 0) ;
            else if (layoutCount == 1) {
                // 全てをそのまま使う
                const clipContext = this._clippingContextListForMask[curClipIndex++];
                clipContext._layoutChannelNo = channelNo;
                clipContext._layoutBounds.x = 0.0;
                clipContext._layoutBounds.y = 0.0;
                clipContext._layoutBounds.width = 1.0;
                clipContext._layoutBounds.height = 1.0;
            }
            else if (layoutCount == 2) {
                for (let i = 0; i < layoutCount; i++) {
                    let xpos = i % 2;
                    // 小数点は切り捨てる
                    xpos = ~~xpos;
                    const cc = this._clippingContextListForMask[curClipIndex++];
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos * 0.5;
                    cc._layoutBounds.y = 0.0;
                    cc._layoutBounds.width = 0.5;
                    cc._layoutBounds.height = 1.0;
                    // UVを2つに分解して使う
                }
            }
            else if (layoutCount <= 4) {
                // 4分割して使う
                for (let i = 0; i < layoutCount; i++) {
                    let xpos = i % 2;
                    let ypos = i / 2;
                    // 小数点は切り捨てる
                    xpos = ~~xpos;
                    ypos = ~~ypos;
                    const cc = this._clippingContextListForMask[curClipIndex++];
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos * 0.5;
                    cc._layoutBounds.y = ypos * 0.5;
                    cc._layoutBounds.width = 0.5;
                    cc._layoutBounds.height = 0.5;
                }
            }
            else if (layoutCount <= 9) {
                // 9分割して使う
                for (let i = 0; i < layoutCount; i++) {
                    let xpos = i % 3;
                    let ypos = i / 3;
                    // 小数点は切り捨てる
                    xpos = ~~xpos;
                    ypos = ~~ypos;
                    const cc = this._clippingContextListForMask[curClipIndex++];
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos / 3.0;
                    cc._layoutBounds.y = ypos / 3.0;
                    cc._layoutBounds.width = 1.0 / 3.0;
                    cc._layoutBounds.height = 1.0 / 3.0;
                }
            }
            else if (config_config.supportMoreMaskDivisions && layoutCount <= 16) {
                // support 4x4 division
                // https://docs.live2d.com/cubism-sdk-manual/ow-sdk-mask-premake-web/?locale=en_us
                for (let i = 0; i < layoutCount; i++) {
                    let xpos = i % 4;
                    let ypos = i / 4;
                    // 小数点は切り捨てる
                    xpos = ~~xpos;
                    ypos = ~~ypos;
                    const cc = this._clippingContextListForMask[curClipIndex++];
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos / 4.0;
                    cc._layoutBounds.y = ypos / 4.0;
                    cc._layoutBounds.width = 1.0 / 4.0;
                    cc._layoutBounds.height = 1.0 / 4.0;
                }
            }
            else {
                CubismLogError('not supported mask count : {0}', layoutCount);
            }
        }
    }
    /**
     * カラーバッファを取得する
     * @return カラーバッファ
     */
    getColorBuffer() {
        return this._colorBuffer;
    }
    /**
     * 画面描画に使用するクリッピングマスクのリストを取得する
     * @return 画面描画に使用するクリッピングマスクのリスト
     */
    getClippingContextListForDraw() {
        return this._clippingContextListForDraw;
    }
    /**
     * クリッピングマスクバッファのサイズを設定する
     * @param size クリッピングマスクバッファのサイズ
     */
    setClippingMaskBufferSize(size) {
        this._clippingMaskBufferSize = size;
    }
    /**
     * クリッピングマスクバッファのサイズを取得する
     * @return クリッピングマスクバッファのサイズ
     */
    getClippingMaskBufferSize() {
        return this._clippingMaskBufferSize;
    }
}
/**
 * レンダーテクスチャのリソースを定義する構造体
 * クリッピングマスクで使用する
 */
class CubismRenderTextureResource {
    /**
     * 引数付きコンストラクタ
     * @param frameNo レンダラーのフレーム番号
     * @param texture テクスチャのアドレス
     */
    constructor(frameNo, texture) {
        this.frameNo = frameNo;
        this.texture = texture;
    }
}
/**
 * クリッピングマスクのコンテキスト
 */
class cubismrenderer_webgl_CubismClippingContext {
    /**
     * 引数付きコンストラクタ
     */
    constructor(manager, clippingDrawableIndices, clipCount) {
        this._isUsing = false; // 現在の描画状態でマスクの準備が必要ならtrue
        this._owner = manager;
        // クリップしている（＝マスク用の）Drawableのインデックスリスト
        this._clippingIdList = clippingDrawableIndices;
        // マスクの数
        this._clippingIdCount = clipCount;
        this._allClippedDrawRect = new csmRect();
        this._layoutBounds = new csmRect();
        this._clippedDrawableIndexList = [];
        this._matrixForMask = new CubismMatrix44();
        this._matrixForDraw = new CubismMatrix44();
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        const self = this;
        self._layoutBounds = undefined;
        self._allClippedDrawRect = undefined;
        self._clippedDrawableIndexList = undefined;
    }
    /**
     * このマスクにクリップされる描画オブジェクトを追加する
     *
     * @param drawableIndex クリッピング対象に追加する描画オブジェクトのインデックス
     */
    addClippedDrawable(drawableIndex) {
        this._clippedDrawableIndexList.push(drawableIndex);
    }
    /**
     * このマスクを管理するマネージャのインスタンスを取得する
     * @return クリッピングマネージャのインスタンス
     */
    getClippingManager() {
        return this._owner;
    }
    setGl(gl) {
        this._owner.setGL(gl);
    }
}
/**
 * WebGL用のシェーダープログラムを生成・破棄するクラス
 * シングルトンなクラスであり、CubismShader_WebGL.getInstanceからアクセスする。
 */
class cubismrenderer_webgl_CubismShader_WebGL {
    /**
     * privateなコンストラクタ
     */
    constructor() {
        this._shaderSets = [];
    }
    /**
     * インスタンスを取得する（シングルトン）
     * @return インスタンス
     */
    static getInstance() {
        if (s_instance == null) {
            s_instance = new cubismrenderer_webgl_CubismShader_WebGL();
            return s_instance;
        }
        return s_instance;
    }
    /**
     * インスタンスを開放する（シングルトン）
     */
    static deleteInstance() {
        if (s_instance) {
            s_instance.release();
            s_instance = undefined;
        }
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this.releaseShaderProgram();
    }
    /**
     * シェーダープログラムの一連のセットアップを実行する
     * @param renderer レンダラのインスタンス
     * @param textureId GPUのテクスチャID
     * @param vertexCount ポリゴンメッシュの頂点数
     * @param vertexArray ポリゴンメッシュの頂点配列
     * @param indexArray インデックスバッファの頂点配列
     * @param uvArray uv配列
     * @param opacity 不透明度
     * @param colorBlendMode カラーブレンディングのタイプ
     * @param baseColor ベースカラー
     * @param isPremultipliedAlpha 乗算済みアルファかどうか
     * @param matrix4x4 Model-View-Projection行列
     * @param invertedMask マスクを反転して使用するフラグ
     */
    setupShaderProgram(renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4, invertedMask) {
        if (!isPremultipliedAlpha) {
            CubismLogError('NoPremultipliedAlpha is not allowed');
        }
        if (this._shaderSets.length == 0) {
            this.generateShaders();
        }
        // Blending
        let SRC_COLOR;
        let DST_COLOR;
        let SRC_ALPHA;
        let DST_ALPHA;
        const clippingContextBufferForMask = renderer.getClippingContextBufferForMask();
        if (clippingContextBufferForMask != null) {
            // マスク生成時
            const shaderSet = this._shaderSets[ShaderNames.ShaderNames_SetupMask];
            this.gl.useProgram(shaderSet.shaderProgram);
            // テクスチャ設定
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
            this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
            // 頂点配列の設定(VBO)
            if (bufferData.vertex == null) {
                bufferData.vertex = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
            this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
            // テクスチャ頂点の設定
            if (bufferData.uv == null) {
                bufferData.uv = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
            this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
            // チャンネル
            const channelNo = clippingContextBufferForMask._layoutChannelNo;
            const colorChannel = clippingContextBufferForMask
                .getClippingManager()
                .getChannelFlagAsColor(channelNo);
            this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
            this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, clippingContextBufferForMask._matrixForMask.getArray());
            const rect = clippingContextBufferForMask._layoutBounds;
            this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
            SRC_COLOR = this.gl.ZERO;
            DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
            SRC_ALPHA = this.gl.ZERO;
            DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
        } // マスク生成以外の場合
        else {
            const clippingContextBufferForDraw = renderer.getClippingContextBufferForDraw();
            const masked = clippingContextBufferForDraw != null; // この描画オブジェクトはマスク対象か
            const offset = masked ? (invertedMask ? 2 : 1) : 0;
            let shaderSet;
            switch (colorBlendMode) {
                case CubismBlendMode.CubismBlendMode_Normal:
                default:
                    shaderSet = this._shaderSets[ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset];
                    SRC_COLOR = this.gl.ONE;
                    DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                    SRC_ALPHA = this.gl.ONE;
                    DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
                    break;
                case CubismBlendMode.CubismBlendMode_Additive:
                    shaderSet = this._shaderSets[ShaderNames.ShaderNames_AddPremultipliedAlpha + offset];
                    SRC_COLOR = this.gl.ONE;
                    DST_COLOR = this.gl.ONE;
                    SRC_ALPHA = this.gl.ZERO;
                    DST_ALPHA = this.gl.ONE;
                    break;
                case CubismBlendMode.CubismBlendMode_Multiplicative:
                    shaderSet = this._shaderSets[ShaderNames.ShaderNames_MultPremultipliedAlpha + offset];
                    SRC_COLOR = this.gl.DST_COLOR;
                    DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                    SRC_ALPHA = this.gl.ZERO;
                    DST_ALPHA = this.gl.ONE;
                    break;
            }
            this.gl.useProgram(shaderSet.shaderProgram);
            // 頂点配列の設定
            if (bufferData.vertex == null) {
                bufferData.vertex = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
            this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
            // テクスチャ頂点の設定
            if (bufferData.uv == null) {
                bufferData.uv = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
            this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
            // この描画オブジェクトはマスク対象か
            if (clippingContextBufferForDraw != null) {
                this.gl.activeTexture(this.gl.TEXTURE1);
                const tex = clippingContextBufferForDraw
                    .getClippingManager()
                    .getColorBuffer();
                this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
                this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
                // view座標をClippingContextの座標に変換するための行列を設定
                this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, clippingContextBufferForDraw._matrixForDraw.getArray());
                // 使用するカラーチャンネルを設定
                const channelNo = clippingContextBufferForDraw._layoutChannelNo;
                const colorChannel = clippingContextBufferForDraw
                    .getClippingManager()
                    .getChannelFlagAsColor(channelNo);
                this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
            }
            // テクスチャ設定
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
            this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
            // 座標変換
            this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
            this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
        }
        // IBOを作成し、データを転送
        if (bufferData.index == null) {
            bufferData.index = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
        this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
    }
    /**
     * シェーダープログラムを解放する
     */
    releaseShaderProgram() {
        for (let i = 0; i < this._shaderSets.length; i++) {
            this.gl.deleteProgram(this._shaderSets[i].shaderProgram);
            this._shaderSets[i].shaderProgram = 0;
        }
        this._shaderSets = [];
    }
    /**
     * シェーダープログラムを初期化する
     * @param vertShaderSrc 頂点シェーダのソース
     * @param fragShaderSrc フラグメントシェーダのソース
     */
    generateShaders() {
        for (let i = 0; i < shaderCount; i++) {
            this._shaderSets.push({});
        }
        this._shaderSets[0].shaderProgram = this.loadShaderProgram(vertexShaderSrcSetupMask, fragmentShaderSrcsetupMask);
        this._shaderSets[1].shaderProgram = this.loadShaderProgram(vertexShaderSrc, fragmentShaderSrcPremultipliedAlpha);
        this._shaderSets[2].shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskPremultipliedAlpha);
        this._shaderSets[3].shaderProgram = this.loadShaderProgram(vertexShaderSrcMasked, fragmentShaderSrcMaskInvertedPremultipliedAlpha);
        // 加算も通常と同じシェーダーを利用する
        this._shaderSets[4].shaderProgram = this._shaderSets[1].shaderProgram;
        this._shaderSets[5].shaderProgram = this._shaderSets[2].shaderProgram;
        this._shaderSets[6].shaderProgram = this._shaderSets[3].shaderProgram;
        // 乗算も通常と同じシェーダーを利用する
        this._shaderSets[7].shaderProgram = this._shaderSets[1].shaderProgram;
        this._shaderSets[8].shaderProgram = this._shaderSets[2].shaderProgram;
        this._shaderSets[9].shaderProgram = this._shaderSets[3].shaderProgram;
        // SetupMask
        this._shaderSets[0].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, 'a_position');
        this._shaderSets[0].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, 'a_texCoord');
        this._shaderSets[0].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, 's_texture0');
        this._shaderSets[0].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, 'u_clipMatrix');
        this._shaderSets[0].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, 'u_channelFlag');
        this._shaderSets[0].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, 'u_baseColor');
        // 通常（PremultipliedAlpha）
        this._shaderSets[1].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, 'a_position');
        this._shaderSets[1].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, 'a_texCoord');
        this._shaderSets[1].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, 's_texture0');
        this._shaderSets[1].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, 'u_matrix');
        this._shaderSets[1].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, 'u_baseColor');
        // 通常（クリッピング、PremultipliedAlpha）
        this._shaderSets[2].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, 'a_position');
        this._shaderSets[2].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, 'a_texCoord');
        this._shaderSets[2].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 's_texture0');
        this._shaderSets[2].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 's_texture1');
        this._shaderSets[2].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 'u_matrix');
        this._shaderSets[2].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 'u_clipMatrix');
        this._shaderSets[2].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 'u_channelFlag');
        this._shaderSets[2].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, 'u_baseColor');
        // 通常（クリッピング・反転, PremultipliedAlpha）
        this._shaderSets[3].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, 'a_position');
        this._shaderSets[3].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, 'a_texCoord');
        this._shaderSets[3].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 's_texture0');
        this._shaderSets[3].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 's_texture1');
        this._shaderSets[3].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 'u_matrix');
        this._shaderSets[3].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 'u_clipMatrix');
        this._shaderSets[3].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 'u_channelFlag');
        this._shaderSets[3].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, 'u_baseColor');
        // 加算（PremultipliedAlpha）
        this._shaderSets[4].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, 'a_position');
        this._shaderSets[4].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, 'a_texCoord');
        this._shaderSets[4].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, 's_texture0');
        this._shaderSets[4].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, 'u_matrix');
        this._shaderSets[4].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, 'u_baseColor');
        // 加算（クリッピング、PremultipliedAlpha）
        this._shaderSets[5].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, 'a_position');
        this._shaderSets[5].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, 'a_texCoord');
        this._shaderSets[5].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 's_texture0');
        this._shaderSets[5].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 's_texture1');
        this._shaderSets[5].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 'u_matrix');
        this._shaderSets[5].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 'u_clipMatrix');
        this._shaderSets[5].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 'u_channelFlag');
        this._shaderSets[5].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, 'u_baseColor');
        // 加算（クリッピング・反転、PremultipliedAlpha）
        this._shaderSets[6].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, 'a_position');
        this._shaderSets[6].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, 'a_texCoord');
        this._shaderSets[6].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 's_texture0');
        this._shaderSets[6].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 's_texture1');
        this._shaderSets[6].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 'u_matrix');
        this._shaderSets[6].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 'u_clipMatrix');
        this._shaderSets[6].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 'u_channelFlag');
        this._shaderSets[6].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, 'u_baseColor');
        // 乗算（PremultipliedAlpha）
        this._shaderSets[7].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, 'a_position');
        this._shaderSets[7].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, 'a_texCoord');
        this._shaderSets[7].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, 's_texture0');
        this._shaderSets[7].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, 'u_matrix');
        this._shaderSets[7].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, 'u_baseColor');
        // 乗算（クリッピング、PremultipliedAlpha）
        this._shaderSets[8].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, 'a_position');
        this._shaderSets[8].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, 'a_texCoord');
        this._shaderSets[8].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 's_texture0');
        this._shaderSets[8].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 's_texture1');
        this._shaderSets[8].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 'u_matrix');
        this._shaderSets[8].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 'u_clipMatrix');
        this._shaderSets[8].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 'u_channelFlag');
        this._shaderSets[8].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, 'u_baseColor');
        // 乗算（クリッピング・反転、PremultipliedAlpha）
        this._shaderSets[9].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, 'a_position');
        this._shaderSets[9].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, 'a_texCoord');
        this._shaderSets[9].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 's_texture0');
        this._shaderSets[9].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 's_texture1');
        this._shaderSets[9].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 'u_matrix');
        this._shaderSets[9].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 'u_clipMatrix');
        this._shaderSets[9].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 'u_channelFlag');
        this._shaderSets[9].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, 'u_baseColor');
    }
    /**
     * シェーダプログラムをロードしてアドレスを返す
     * @param vertexShaderSource    頂点シェーダのソース
     * @param fragmentShaderSource  フラグメントシェーダのソース
     * @return シェーダプログラムのアドレス
     */
    loadShaderProgram(vertexShaderSource, fragmentShaderSource) {
        // Create Shader Program
        let shaderProgram = this.gl.createProgram();
        let vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
        if (!vertShader) {
            CubismLogError('Vertex shader compile error!');
            return 0;
        }
        let fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!fragShader) {
            CubismLogError('Vertex shader compile error!');
            return 0;
        }
        // Attach vertex shader to program
        this.gl.attachShader(shaderProgram, vertShader);
        // Attach fragment shader to program
        this.gl.attachShader(shaderProgram, fragShader);
        // link program
        this.gl.linkProgram(shaderProgram);
        const linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
        // リンクに失敗したらシェーダーを削除
        if (!linkStatus) {
            CubismLogError('Failed to link program: {0}', shaderProgram);
            this.gl.deleteShader(vertShader);
            this.gl.deleteShader(fragShader);
            if (shaderProgram) {
                this.gl.deleteProgram(shaderProgram);
            }
            return 0;
        }
        // Release vertex and fragment shaders.
        this.gl.deleteShader(vertShader);
        this.gl.deleteShader(fragShader);
        return shaderProgram;
    }
    /**
     * シェーダープログラムをコンパイルする
     * @param shaderType シェーダタイプ(Vertex/Fragment)
     * @param shaderSource シェーダソースコード
     *
     * @return コンパイルされたシェーダープログラム
     */
    compileShaderSource(shaderType, shaderSource) {
        const source = shaderSource;
        const shader = this.gl.createShader(shaderType);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!shader) {
            const log = this.gl.getShaderInfoLog(shader);
            CubismLogError('Shader compile log: {0} ', log);
        }
        const status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!status) {
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    setGl(gl) {
        this.gl = gl;
    }
}
var ShaderNames;
(function (ShaderNames) {
    // SetupMask
    ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
    // Normal
    ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NomralMaskedInvertedPremultipliedAlpha"] = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha";
    // Add
    ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 4] = "ShaderNames_AddPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlpha"] = 5] = "ShaderNames_AddMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlphaInverted"] = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted";
    // Mult
    ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 7] = "ShaderNames_MultPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 8] = "ShaderNames_MultMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlphaInverted"] = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted";
})(ShaderNames || (ShaderNames = {}));
const vertexShaderSrcSetupMask = 'attribute vec4     a_position;' +
    'attribute vec2     a_texCoord;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_myPos;' +
    'uniform mat4       u_clipMatrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_clipMatrix * a_position;' +
    '   v_myPos = u_clipMatrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
const fragmentShaderSrcsetupMask = 'precision mediump float;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_myPos;' +
    'uniform vec4       u_baseColor;' +
    'uniform vec4       u_channelFlag;' +
    'uniform sampler2D  s_texture0;' +
    'void main()' +
    '{' +
    '   float isInside = ' +
    '       step(u_baseColor.x, v_myPos.x/v_myPos.w)' +
    '       * step(u_baseColor.y, v_myPos.y/v_myPos.w)' +
    '       * step(v_myPos.x/v_myPos.w, u_baseColor.z)' +
    '       * step(v_myPos.y/v_myPos.w, u_baseColor.w);' +
    '   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;' +
    '}';
//----- バーテックスシェーダプログラム -----
// Normal & Add & Mult 共通
const vertexShaderSrc = 'attribute vec4     a_position;' + //v.vertex
    'attribute vec2     a_texCoord;' + //v.texcoord
    'varying vec2       v_texCoord;' + //v2f.texcoord
    'uniform mat4       u_matrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_matrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
// Normal & Add & Mult 共通（クリッピングされたものの描画用）
const vertexShaderSrcMasked = 'attribute vec4     a_position;' +
    'attribute vec2     a_texCoord;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_clipPos;' +
    'uniform mat4       u_matrix;' +
    'uniform mat4       u_clipMatrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_matrix * a_position;' +
    '   v_clipPos = u_clipMatrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
//----- フラグメントシェーダプログラム -----
// Normal & Add & Mult 共通 （PremultipliedAlpha）
const fragmentShaderSrcPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2       v_texCoord;' + //v2f.texcoord
    'uniform vec4       u_baseColor;' +
    'uniform sampler2D  s_texture0;' + //_MainTex
    'void main()' +
    '{' +
    '   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
    '}';
// Normal （クリッピングされたものの描画用、PremultipliedAlpha兼用）
const fragmentShaderSrcMaskPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_clipPos;' +
    'uniform vec4       u_baseColor;' +
    'uniform vec4       u_channelFlag;' +
    'uniform sampler2D  s_texture0;' +
    'uniform sampler2D  s_texture1;' +
    'void main()' +
    '{' +
    '   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
    '   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
    '   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
    '   col_formask = col_formask * maskVal;' +
    '   gl_FragColor = col_formask;' +
    '}';
// Normal & Add & Mult 共通（クリッピングされて反転使用の描画用、PremultipliedAlphaの場合）
const fragmentShaderSrcMaskInvertedPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2 v_texCoord;' +
    'varying vec4 v_clipPos;' +
    'uniform sampler2D s_texture0;' +
    'uniform sampler2D s_texture1;' +
    'uniform vec4 u_channelFlag;' +
    'uniform vec4 u_baseColor;' +
    'void main()' +
    '{' +
    'vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;' +
    'vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
    'float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
    'col_formask = col_formask * (1.0 - maskVal);' +
    'gl_FragColor = col_formask;' +
    '}';
/**
 * WebGL用の描画命令を実装したクラス
 */
class cubismrenderer_webgl_CubismRenderer_WebGL extends cubismrenderer_CubismRenderer {
    /**
     * コンストラクタ
     */
    constructor() {
        super();
        this._clippingContextBufferForMask = null;
        this._clippingContextBufferForDraw = null;
        this._clippingManager = new cubismrenderer_webgl_CubismClippingManager_WebGL();
        this.firstDraw = true;
        this._textures = {};
        this._sortedDrawableIndexList = [];
        this._bufferData = {
            vertex: null,
            uv: null,
            index: null,
        };
    }
    /**
     * レンダラの初期化処理を実行する
     * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
     *
     * @param model モデルのインスタンス
     */
    initialize(model) {
        if (model.isUsingMasking()) {
            this._clippingManager = new cubismrenderer_webgl_CubismClippingManager_WebGL(); // クリッピングマスク・バッファ前処理方式を初期化
            this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
        }
        for (let i = model.getDrawableCount() - 1; i >= 0; i--) {
            this._sortedDrawableIndexList[i] = 0;
        }
        super.initialize(model); // 親クラスの処理を呼ぶ
    }
    /**
     * WebGLテクスチャのバインド処理
     * CubismRendererにテクスチャを設定し、CubismRenderer内でその画像を参照するためのIndex値を戻り値とする
     * @param modelTextureNo セットするモデルテクスチャの番号
     * @param glTextureNo WebGLテクスチャの番号
     */
    bindTexture(modelTextureNo, glTexture) {
        this._textures[modelTextureNo] = glTexture;
    }
    /**
     * WebGLにバインドされたテクスチャのリストを取得する
     * @return テクスチャのリスト
     */
    getBindedTextures() {
        return this._textures;
    }
    /**
     * クリッピングマスクバッファのサイズを設定する
     * マスク用のFrameBufferを破棄、再作成する為処理コストは高い
     * @param size クリッピングマスクバッファのサイズ
     */
    setClippingMaskBufferSize(size) {
        // FrameBufferのサイズを変更するためにインスタンスを破棄・再作成する
        this._clippingManager.release();
        this._clippingManager = new cubismrenderer_webgl_CubismClippingManager_WebGL();
        this._clippingManager.setClippingMaskBufferSize(size);
        this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
    }
    /**
     * クリッピングマスクバッファのサイズを取得する
     * @return クリッピングマスクバッファのサイズ
     */
    getClippingMaskBufferSize() {
        return this._clippingManager.getClippingMaskBufferSize();
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        var _a, _b, _c;
        const self = this;
        this._clippingManager.release();
        self._clippingManager = undefined;
        (_a = this.gl) === null || _a === void 0 ? void 0 : _a.deleteBuffer(this._bufferData.vertex);
        this._bufferData.vertex = null;
        (_b = this.gl) === null || _b === void 0 ? void 0 : _b.deleteBuffer(this._bufferData.uv);
        this._bufferData.uv = null;
        (_c = this.gl) === null || _c === void 0 ? void 0 : _c.deleteBuffer(this._bufferData.index);
        this._bufferData.index = null;
        self._bufferData = undefined;
        self._textures = undefined;
    }
    /**
     * モデルを描画する実際の処理
     */
    doDrawModel() {
        // 上記クリッピング処理内でも一度PreDrawを呼ぶので注意!!
        this.preDraw();
        //------------ クリッピングマスク・バッファ前処理方式の場合 ------------
        if (this._clippingManager != null) {
            this._clippingManager.setupClippingContext(this.getModel(), this);
        }
        const drawableCount = this.getModel().getDrawableCount();
        const renderOrder = this.getModel().getDrawableRenderOrders();
        // インデックスを描画順でソート
        for (let i = 0; i < drawableCount; ++i) {
            const order = renderOrder[i];
            this._sortedDrawableIndexList[order] = i;
        }
        // 描画
        for (let i = 0; i < drawableCount; ++i) {
            const drawableIndex = this._sortedDrawableIndexList[i];
            // Drawableが表示状態でなければ処理をパスする
            if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
                continue;
            }
            // クリッピングマスクをセットする
            this.setClippingContextBufferForDraw(this._clippingManager != null
                ? this._clippingManager.getClippingContextListForDraw()[drawableIndex]
                : null);
            this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
            this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), this.getModel().getDrawableVertexIndexCount(drawableIndex), this.getModel().getDrawableVertexCount(drawableIndex), this.getModel().getDrawableVertexIndices(drawableIndex), this.getModel().getDrawableVertices(drawableIndex), this.getModel().getDrawableVertexUvs(drawableIndex), this.getModel().getDrawableOpacity(drawableIndex), this.getModel().getDrawableBlendMode(drawableIndex), this.getModel().getDrawableInvertedMaskBit(drawableIndex));
        }
    }
    /**
     * [オーバーライド]
     * 描画オブジェクト（アートメッシュ）を描画する。
     * ポリゴンメッシュとテクスチャ番号をセットで渡す。
     * @param textureNo 描画するテクスチャ番号
     * @param indexCount 描画オブジェクトのインデックス値
     * @param vertexCount ポリゴンメッシュの頂点数
     * @param indexArray ポリゴンメッシュのインデックス配列
     * @param vertexArray ポリゴンメッシュの頂点配列
     * @param uvArray uv配列
     * @param opacity 不透明度
     * @param colorBlendMode カラー合成タイプ
     * @param invertedMask マスク使用時のマスクの反転使用
     */
    drawMesh(textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode, invertedMask) {
        // 裏面描画の有効・無効
        if (this.isCulling()) {
            this.gl.enable(this.gl.CULL_FACE);
        }
        else {
            this.gl.disable(this.gl.CULL_FACE);
        }
        this.gl.frontFace(this.gl.CCW); // Cubism SDK OpenGLはマスク・アートメッシュ共にCCWが表面
        const modelColorRGBA = this.getModelColor();
        if (this.getClippingContextBufferForMask() == null) {
            // マスク生成時以外
            modelColorRGBA.A *= opacity;
            if (this.isPremultipliedAlpha()) {
                modelColorRGBA.R *= modelColorRGBA.A;
                modelColorRGBA.G *= modelColorRGBA.A;
                modelColorRGBA.B *= modelColorRGBA.A;
            }
        }
        let drawtexture = null; // シェーダに渡すテクスチャ
        // テクスチャマップからバインド済みテクスチャＩＤを取得
        // バインドされていなければダミーのテクスチャIDをセットする
        if (this._textures[textureNo] != null) {
            drawtexture = this._textures[textureNo];
        }
        cubismrenderer_webgl_CubismShader_WebGL.getInstance().setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), this.getMvpMatrix(), invertedMask);
        // ポリゴンメッシュを描画する
        this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
        // 後処理
        this.gl.useProgram(null);
        this.setClippingContextBufferForDraw(null);
        this.setClippingContextBufferForMask(null);
    }
    /**
     * レンダラが保持する静的なリソースを解放する
     * WebGLの静的なシェーダープログラムを解放する
     */
    static doStaticRelease() {
        cubismrenderer_webgl_CubismShader_WebGL.deleteInstance();
    }
    /**
     * レンダーステートを設定する
     * @param fbo アプリケーション側で指定しているフレームバッファ
     * @param viewport ビューポート
     */
    setRenderState(fbo, viewport) {
        s_fbo = fbo;
        s_viewport = viewport;
    }
    /**
     * 描画開始時の追加処理
     * モデルを描画する前にクリッピングマスクに必要な処理を実装している
     */
    preDraw() {
        if (this.firstDraw) {
            this.firstDraw = false;
            // 拡張機能を有効にする
            this._anisortopy =
                this.gl.getExtension('EXT_texture_filter_anisotropic') ||
                    this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
                    this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
        }
        this.gl.disable(this.gl.SCISSOR_TEST);
        this.gl.disable(this.gl.STENCIL_TEST);
        this.gl.disable(this.gl.DEPTH_TEST);
        // カリング（1.0beta3）
        this.gl.frontFace(this.gl.CW);
        this.gl.enable(this.gl.BLEND);
        this.gl.colorMask(true, true, true, true);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null); // 前にバッファがバインドされていたら破棄する必要がある
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    }
    /**
     * マスクテクスチャに描画するクリッピングコンテキストをセットする
     */
    setClippingContextBufferForMask(clip) {
        this._clippingContextBufferForMask = clip;
    }
    /**
     * マスクテクスチャに描画するクリッピングコンテキストを取得する
     * @return マスクテクスチャに描画するクリッピングコンテキスト
     */
    getClippingContextBufferForMask() {
        return this._clippingContextBufferForMask;
    }
    /**
     * 画面上に描画するクリッピングコンテキストをセットする
     */
    setClippingContextBufferForDraw(clip) {
        this._clippingContextBufferForDraw = clip;
    }
    /**
     * 画面上に描画するクリッピングコンテキストを取得する
     * @return 画面上に描画するクリッピングコンテキスト
     */
    getClippingContextBufferForDraw() {
        return this._clippingContextBufferForDraw;
    }
    /**
     * glの設定
     */
    startUp(gl) {
        this.gl = gl;
        this._clippingManager.setGL(gl);
        cubismrenderer_webgl_CubismShader_WebGL.getInstance().setGl(gl);
    }
}
/**
 * レンダラが保持する静的なリソースを開放する
 */
cubismrenderer_CubismRenderer.staticRelease = () => {
    cubismrenderer_webgl_CubismRenderer_WebGL.doStaticRelease();
};

// EXTERNAL MODULE: external {"commonjs":"@pixi/math","commonjs2":"@pixi/math","amd":"@pixi/math","root":"PIXI"}
var math_root_PIXI_ = __webpack_require__(5);

// EXTERNAL MODULE: external "lodash/mapKeys"
var mapKeys_ = __webpack_require__(24);
var mapKeys_default = /*#__PURE__*/__webpack_require__.n(mapKeys_);

// CONCATENATED MODULE: ./src/cubism4/Cubism4InternalModel.ts









const tempMatrix = new CubismMatrix44();
class Cubism4InternalModel_Cubism4InternalModel extends InternalModel["a" /* InternalModel */] {
    constructor(coreModel, settings, options) {
        super();
        this.lipSync = true;
        this.breath = CubismBreath.create();
        this.renderer = new cubismrenderer_webgl_CubismRenderer_WebGL();
        this.idParamAngleX = ParamAngleX;
        this.idParamAngleY = ParamAngleY;
        this.idParamAngleZ = ParamAngleZ;
        this.idParamEyeBallX = ParamEyeBallX;
        this.idParamEyeBallY = ParamEyeBallY;
        this.idParamBodyAngleX = ParamBodyAngleX;
        this.idParamBreath = ParamBreath;
        /**
         * The model's internal scale, defined in the moc3 file.
         */
        this.pixelsPerUnit = 1;
        /**
         * Matrix that scales by {@link pixelsPerUnit}, and moves the origin from top-left to center.
         *
         * FIXME: This shouldn't be named as "centering"...
         */
        this.centeringTransform = new math_root_PIXI_["Matrix"]();
        this.coreModel = coreModel;
        this.settings = settings;
        this.motionManager = new Cubism4MotionManager_Cubism4MotionManager(settings, options);
        this.init();
    }
    init() {
        var _a;
        super.init();
        if (((_a = this.settings.getEyeBlinkParameters()) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.eyeBlink = CubismEyeBlink.create(this.settings);
        }
        this.breath.setParameters([
            new BreathParameterData(this.idParamAngleX, 0.0, 15.0, 6.5345, 0.5),
            new BreathParameterData(this.idParamAngleY, 0.0, 8.0, 3.5345, 0.5),
            new BreathParameterData(this.idParamAngleZ, 0.0, 10.0, 5.5345, 0.5),
            new BreathParameterData(this.idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5),
            new BreathParameterData(this.idParamBreath, 0.0, 0.5, 3.2345, 0.5),
        ]);
        this.renderer.initialize(this.coreModel);
        this.renderer.setIsPremultipliedAlpha(true);
    }
    getSize() {
        return [this.coreModel.getModel().canvasinfo.CanvasWidth, this.coreModel.getModel().canvasinfo.CanvasHeight];
    }
    getLayout() {
        // un-capitalize each key to satisfy the common layout format
        // e.g. CenterX -> centerX
        return mapKeys_default()(Object.assign({}, this.settings.layout), (_, key) => key.charAt(0).toLowerCase() + key.slice(1));
    }
    setupLayout() {
        super.setupLayout();
        this.pixelsPerUnit = this.coreModel.getModel().canvasinfo.PixelsPerUnit;
        // move the origin from top left to center
        this.centeringTransform
            .scale(this.pixelsPerUnit, this.pixelsPerUnit)
            .translate(this.originalWidth / 2, this.originalHeight / 2);
    }
    updateWebGLContext(gl, glContextID) {
        // reset resources that were bound to previous WebGL context
        this.renderer.firstDraw = true;
        this.renderer._bufferData = {
            vertex: null,
            uv: null,
            index: null,
        };
        this.renderer.startUp(gl);
        this.renderer._clippingManager._currentFrameNo = glContextID;
        this.renderer._clippingManager._maskTexture = undefined;
        cubismrenderer_webgl_CubismShader_WebGL.getInstance()._shaderSets = [];
    }
    bindTexture(index, texture) {
        this.renderer.bindTexture(index, texture);
    }
    getHitAreaDefs() {
        var _a, _b;
        return (_b = (_a = this.settings.hitAreas) === null || _a === void 0 ? void 0 : _a.map(hitArea => ({
            id: hitArea.Id,
            name: hitArea.Name,
            index: this.coreModel.getDrawableIndex(hitArea.Id),
        }))) !== null && _b !== void 0 ? _b : [];
    }
    getDrawableIDs() {
        return this.coreModel.getDrawableIds();
    }
    getDrawableIndex(id) {
        return this.coreModel.getDrawableIndex(id);
    }
    getDrawableVertices(drawIndex) {
        if (typeof drawIndex === 'string') {
            drawIndex = this.coreModel.getDrawableIndex(drawIndex);
            if (drawIndex === -1)
                throw new TypeError('Unable to find drawable ID: ' + drawIndex);
        }
        const arr = this.coreModel.getDrawableVertices(drawIndex).slice();
        for (let i = 0; i < arr.length; i += 2) {
            arr[i] = arr[i] * this.pixelsPerUnit + this.originalWidth / 2;
            arr[i + 1] = -arr[i + 1] * this.pixelsPerUnit + this.originalHeight / 2;
        }
        return arr;
    }
    updateTransform(transform) {
        this.drawingMatrix
            .copyFrom(this.centeringTransform)
            .prepend(this.localTransform)
            .prepend(transform);
    }
    update(dt, now) {
        var _a, _b, _c;
        super.update(dt, now);
        // cubism4 uses seconds
        dt /= 1000;
        now /= 1000;
        const model = this.coreModel;
        this.emit('beforeMotionUpdate');
        const motionUpdated = this.motionManager.update(this.coreModel, now);
        this.emit('afterMotionUpdate');
        model.saveParameters();
        if (!motionUpdated) {
            (_a = this.eyeBlink) === null || _a === void 0 ? void 0 : _a.updateParameters(model, dt);
        }
        this.updateFocus();
        // revert the timestamps to be milliseconds
        this.updateNaturalMovements(dt * 1000, now * 1000);
        // TODO: Add lip sync API
        // if (this.lipSync) {
        //     const value = 0; // 0 ~ 1
        //
        //     for (let i = 0; i < this.lipSyncIds.length; ++i) {
        //         model.addParameterValueById(this.lipSyncIds[i], value, 0.8);
        //     }
        // }
        (_b = this.physics) === null || _b === void 0 ? void 0 : _b.evaluate(model, dt);
        (_c = this.pose) === null || _c === void 0 ? void 0 : _c.updateParameters(model, dt);
        this.emit('beforeModelUpdate');
        model.update();
        model.loadParameters();
    }
    updateFocus() {
        this.coreModel.addParameterValueById(this.idParamEyeBallX, this.focusController.x); // -1 ~ 1
        this.coreModel.addParameterValueById(this.idParamEyeBallY, this.focusController.y);
        this.coreModel.addParameterValueById(this.idParamAngleX, this.focusController.x * 30); // -30 ~ 30
        this.coreModel.addParameterValueById(this.idParamAngleY, this.focusController.y * 30);
        this.coreModel.addParameterValueById(this.idParamAngleZ, this.focusController.x * this.focusController.y * -30);
        this.coreModel.addParameterValueById(this.idParamBodyAngleX, this.focusController.x * 10); // -10 ~ 10
    }
    updateNaturalMovements(dt, now) {
        var _a;
        (_a = this.breath) === null || _a === void 0 ? void 0 : _a.updateParameters(this.coreModel, dt / 1000);
    }
    draw(gl) {
        const matrix = this.drawingMatrix;
        const array = tempMatrix.getArray();
        // set given 3x3 matrix into a 4x4 matrix, with Y inverted
        array[0] = matrix.a;
        array[1] = matrix.b;
        array[4] = -matrix.c;
        array[5] = -matrix.d;
        array[12] = matrix.tx;
        array[13] = matrix.ty;
        this.renderer.setMvpMatrix(tempMatrix);
        this.renderer.setRenderState(gl.getParameter(gl.FRAMEBUFFER_BINDING), this.viewport);
        this.renderer.drawModel();
    }
    destroy() {
        super.destroy();
        this.renderer.release();
        this.coreModel.release();
        this.renderer = undefined;
        this.coreModel = undefined;
    }
}

// CONCATENATED MODULE: ./src/cubism4/setup.ts


let startupPromise;
let startupRetries = 20;
/**
 * Promises the Cubism 4 runtime has been started up.
 * @return Promise that resolves if the startup has succeeded, rejects if failed.
 */
function cubism4Ready() {
    if (live2dcubismframework_CubismFramework.isStarted()) {
        return Promise.resolve();
    }
    startupPromise !== null && startupPromise !== void 0 ? startupPromise : (startupPromise = new Promise(((resolve, reject) => {
        function startUpWithRetry() {
            try {
                startUpCubism4();
                resolve();
            }
            catch (e) {
                startupRetries--;
                if (startupRetries < 0) {
                    const err = new Error('Failed to start up Cubism 4 framework.');
                    err.cause = e;
                    reject(err);
                    return;
                }
                utils["f" /* logger */].log('Cubism4', 'Startup failed, retrying 10ms later...');
                setTimeout(startUpWithRetry, 10);
            }
        }
        startUpWithRetry();
    })));
    return startupPromise;
}
/**
 * Starts up the Cubism 4 runtime.
 */
function startUpCubism4(options) {
    options = Object.assign({
        logFunction: console.log,
        loggingLevel: LogLevel.LogLevel_Verbose,
    }, options);
    live2dcubismframework_CubismFramework.startUp(options);
    live2dcubismframework_CubismFramework.initialize();
}

// EXTERNAL MODULE: ./src/factory/Live2DFactory.ts + 2 modules
var Live2DFactory = __webpack_require__(4);

// CONCATENATED MODULE: ./cubism/src/effect/cubismpose.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
const Epsilon = 0.001;
const DefaultFadeInSeconds = 0.5;
/**
 * パーツの不透明度の設定
 *
 * パーツの不透明度の管理と設定を行う。
 */
class CubismPose {
    /**
     * コンストラクタ
     */
    constructor() {
        this._fadeTimeSeconds = DefaultFadeInSeconds;
        this._lastModel = undefined;
        this._partGroups = [];
        this._partGroupCounts = [];
    }
    /**
     * インスタンスの作成
     * @param pose3json pose3.jsonのデータ
     * @return 作成されたインスタンス
     */
    static create(pose3json) {
        const ret = new CubismPose();
        // フェード時間の指定
        if (typeof pose3json.FadeInTime === 'number') {
            ret._fadeTimeSeconds = pose3json.FadeInTime;
            if (ret._fadeTimeSeconds <= 0.0) {
                ret._fadeTimeSeconds = DefaultFadeInSeconds;
            }
        }
        // パーツグループ
        const poseListInfo = pose3json.Groups;
        const poseCount = poseListInfo.length;
        for (let poseIndex = 0; poseIndex < poseCount; ++poseIndex) {
            const idListInfo = poseListInfo[poseIndex];
            const idCount = idListInfo.length;
            let groupCount = 0;
            for (let groupIndex = 0; groupIndex < idCount; ++groupIndex) {
                const partInfo = idListInfo[groupIndex];
                const partData = new PartData();
                partData.partId = partInfo.Id;
                const linkListInfo = partInfo.Link;
                // リンクするパーツの設定
                if (linkListInfo) {
                    const linkCount = linkListInfo.length;
                    for (let linkIndex = 0; linkIndex < linkCount; ++linkIndex) {
                        const linkPart = new PartData();
                        linkPart.partId = linkListInfo[linkIndex];
                        partData.link.push(linkPart);
                    }
                }
                ret._partGroups.push(partData);
                ++groupCount;
            }
            ret._partGroupCounts.push(groupCount);
        }
        return ret;
    }
    /**
     * モデルのパラメータの更新
     * @param model 対象のモデル
     * @param deltaTimeSeconds デルタ時間[秒]
     */
    updateParameters(model, deltaTimeSeconds) {
        // 前回のモデルと同じでない場合は初期化が必要
        if (model != this._lastModel) {
            // パラメータインデックスの初期化
            this.reset(model);
        }
        this._lastModel = model;
        // 設定から時間を変更すると、経過時間がマイナスになる事があるので、経過時間0として対応
        if (deltaTimeSeconds < 0.0) {
            deltaTimeSeconds = 0.0;
        }
        let beginIndex = 0;
        for (let i = 0; i < this._partGroupCounts.length; i++) {
            const partGroupCount = this._partGroupCounts[i];
            this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
            beginIndex += partGroupCount;
        }
        this.copyPartOpacities(model);
    }
    /**
     * 表示を初期化
     * @param model 対象のモデル
     * @note 不透明度の初期値が0でないパラメータは、不透明度を１に設定する
     */
    reset(model) {
        let beginIndex = 0;
        for (let i = 0; i < this._partGroupCounts.length; ++i) {
            const groupCount = this._partGroupCounts[i];
            for (let j = beginIndex; j < beginIndex + groupCount; ++j) {
                this._partGroups[j].initialize(model);
                const partsIndex = this._partGroups[j].partIndex;
                const paramIndex = this._partGroups[j].parameterIndex;
                if (partsIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(partsIndex, j == beginIndex ? 1.0 : 0.0);
                model.setParameterValueByIndex(paramIndex, j == beginIndex ? 1.0 : 0.0);
                for (let k = 0; k < this._partGroups[j].link.length; ++k) {
                    this._partGroups[j]
                        .link[k]
                        .initialize(model);
                }
            }
            beginIndex += groupCount;
        }
    }
    /**
     * パーツの不透明度をコピー
     *
     * @param model 対象のモデル
     */
    copyPartOpacities(model) {
        for (let groupIndex = 0; groupIndex < this._partGroups.length; ++groupIndex) {
            const partData = this._partGroups[groupIndex];
            if (partData.link.length == 0) {
                continue; // 連動するパラメータはない
            }
            const partIndex = this._partGroups[groupIndex].partIndex;
            const opacity = model.getPartOpacityByIndex(partIndex);
            for (let linkIndex = 0; linkIndex < partData.link.length; ++linkIndex) {
                const linkPart = partData.link[linkIndex];
                const linkPartIndex = linkPart.partIndex;
                if (linkPartIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(linkPartIndex, opacity);
            }
        }
    }
    /**
     * パーツのフェード操作を行う。
     * @param model 対象のモデル
     * @param deltaTimeSeconds デルタ時間[秒]
     * @param beginIndex フェード操作を行うパーツグループの先頭インデックス
     * @param partGroupCount フェード操作を行うパーツグループの個数
     */
    doFade(model, deltaTimeSeconds, beginIndex, partGroupCount) {
        let visiblePartIndex = -1;
        let newOpacity = 1.0;
        const phi = 0.5;
        const backOpacityThreshold = 0.15;
        // 現在、表示状態になっているパーツを取得
        for (let i = beginIndex; i < beginIndex + partGroupCount; ++i) {
            const partIndex = this._partGroups[i].partIndex;
            const paramIndex = this._partGroups[i].parameterIndex;
            if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
                if (visiblePartIndex >= 0) {
                    break;
                }
                visiblePartIndex = i;
                newOpacity = model.getPartOpacityByIndex(partIndex);
                // 新しい不透明度を計算
                newOpacity += deltaTimeSeconds / this._fadeTimeSeconds;
                if (newOpacity > 1.0) {
                    newOpacity = 1.0;
                }
            }
        }
        if (visiblePartIndex < 0) {
            visiblePartIndex = 0;
            newOpacity = 1.0;
        }
        // 表示パーツ、非表示パーツの不透明度を設定する
        for (let i = beginIndex; i < beginIndex + partGroupCount; ++i) {
            const partsIndex = this._partGroups[i].partIndex;
            // 表示パーツの設定
            if (visiblePartIndex == i) {
                model.setPartOpacityByIndex(partsIndex, newOpacity); // 先に設定
            }
            // 非表示パーツの設定
            else {
                let opacity = model.getPartOpacityByIndex(partsIndex);
                let a1; // 計算によって求められる不透明度
                if (newOpacity < phi) {
                    a1 = (newOpacity * (phi - 1)) / phi + 1.0; // (0,1),(phi,phi)を通る直線式
                }
                else {
                    a1 = ((1 - newOpacity) * phi) / (1.0 - phi); // (1,0),(phi,phi)を通る直線式
                }
                // 背景の見える割合を制限する場合
                const backOpacity = (1.0 - a1) * (1.0 - newOpacity);
                if (backOpacity > backOpacityThreshold) {
                    a1 = 1.0 - backOpacityThreshold / (1.0 - newOpacity);
                }
                if (opacity > a1) {
                    opacity = a1; // 計算の不透明度よりも大きければ（濃ければ）不透明度を上げる
                }
                model.setPartOpacityByIndex(partsIndex, opacity);
            }
        }
    }
}
/**
 * パーツにまつわるデータを管理
 */
class PartData {
    /**
     * コンストラクタ
     */
    constructor(v) {
        this.parameterIndex = 0;
        this.partIndex = 0;
        this.partId = '';
        this.link = [];
        if (v != undefined) {
            this.assignment(v);
        }
    }
    /**
     * =演算子のオーバーロード
     */
    assignment(v) {
        this.partId = v.partId;
        this.link = v.link.map(link => link.clone());
        return this;
    }
    /**
     * 初期化
     * @param model 初期化に使用するモデル
     */
    initialize(model) {
        this.parameterIndex = model.getParameterIndex(this.partId);
        this.partIndex = model.getPartIndex(this.partId);
        model.setParameterValueByIndex(this.parameterIndex, 1);
    }
    /**
     * オブジェクトのコピーを生成する
     */
    clone() {
        const clonePartData = new PartData();
        clonePartData.partId = this.partId;
        clonePartData.parameterIndex = this.parameterIndex;
        clonePartData.partIndex = this.partIndex;
        clonePartData.link = this.link.map(link => link.clone());
        return clonePartData;
    }
}

// CONCATENATED MODULE: ./cubism/src/model/cubismmodel.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


/**
 * モデル
 *
 * Mocデータから生成されるモデルのクラス。
 */
class cubismmodel_CubismModel {
    /**
     * コンストラクタ
     * @param model モデル
     */
    constructor(model) {
        this._model = model;
        this._savedParameters = [];
        this._parameterIds = [];
        this._drawableIds = [];
        this._partIds = [];
        this._notExistPartId = {};
        this._notExistParameterId = {};
        this._notExistParameterValues = {};
        this._notExistPartOpacities = {};
        this.initialize();
    }
    /**
     * モデルのパラメータの更新
     */
    update() {
        // Update model
        this._model.update();
        this._model.drawables.resetDynamicFlags();
    }
    /**
     * キャンバスの幅を取得する
     */
    getCanvasWidth() {
        if (this._model == null) {
            return 0.0;
        }
        return (this._model.canvasinfo.CanvasWidth /
            this._model.canvasinfo.PixelsPerUnit);
    }
    /**
     * キャンバスの高さを取得する
     */
    getCanvasHeight() {
        if (this._model == null) {
            return 0.0;
        }
        return (this._model.canvasinfo.CanvasHeight /
            this._model.canvasinfo.PixelsPerUnit);
    }
    /**
     * パラメータを保存する
     */
    saveParameters() {
        const parameterCount = this._model.parameters.count;
        const savedParameterCount = this._savedParameters.length;
        for (let i = 0; i < parameterCount; ++i) {
            if (i < savedParameterCount) {
                this._savedParameters[i] = this._parameterValues[i];
            }
            else {
                this._savedParameters.push(this._parameterValues[i]);
            }
        }
    }
    /**
     * モデルを取得
     */
    getModel() {
        return this._model;
    }
    /**
     * パーツのインデックスを取得
     * @param partId パーツのID
     * @return パーツのインデックス
     */
    getPartIndex(partId) {
        let partIndex;
        const partCount = this._model.parts.count;
        for (partIndex = 0; partIndex < partCount; ++partIndex) {
            if (partId == this._partIds[partIndex]) {
                return partIndex;
            }
        }
        // モデルに存在していない場合、非存在パーツIDリスト内にあるかを検索し、そのインデックスを返す
        if (partId in this._notExistPartId) {
            return this._notExistPartId[partId];
        }
        // 非存在パーツIDリストにない場合、新しく要素を追加する
        partIndex = partCount + this._notExistPartId.length;
        this._notExistPartId[partId] = partIndex;
        this._notExistPartOpacities[partIndex] = 0;
        return partIndex;
    }
    /**
     * パーツの個数の取得
     * @return パーツの個数
     */
    getPartCount() {
        return this._model.parts.count;
    }
    /**
     * パーツの不透明度の設定(Index)
     * @param partIndex パーツのインデックス
     * @param opacity 不透明度
     */
    setPartOpacityByIndex(partIndex, opacity) {
        if (partIndex in this._notExistPartOpacities) {
            this._notExistPartOpacities[partIndex] = opacity;
            return;
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
        this._partOpacities[partIndex] = opacity;
    }
    /**
     * パーツの不透明度の設定(Id)
     * @param partId パーツのID
     * @param opacity パーツの不透明度
     */
    setPartOpacityById(partId, opacity) {
        // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const index = this.getPartIndex(partId);
        if (index < 0) {
            return; // パーツがないのでスキップ
        }
        this.setPartOpacityByIndex(index, opacity);
    }
    /**
     * パーツの不透明度の取得(index)
     * @param partIndex パーツのインデックス
     * @return パーツの不透明度
     */
    getPartOpacityByIndex(partIndex) {
        if (partIndex in this._notExistPartOpacities) {
            // モデルに存在しないパーツIDの場合、非存在パーツリストから不透明度を返す。
            return this._notExistPartOpacities[partIndex];
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
        return this._partOpacities[partIndex];
    }
    /**
     * パーツの不透明度の取得(id)
     * @param partId パーツのＩｄ
     * @return パーツの不透明度
     */
    getPartOpacityById(partId) {
        // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const index = this.getPartIndex(partId);
        if (index < 0) {
            return 0; // パーツが無いのでスキップ
        }
        return this.getPartOpacityByIndex(index);
    }
    /**
     * パラメータのインデックスの取得
     * @param パラメータID
     * @return パラメータのインデックス
     */
    getParameterIndex(parameterId) {
        let parameterIndex;
        const idCount = this._model.parameters.count;
        for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
            if (parameterId != this._parameterIds[parameterIndex]) {
                continue;
            }
            return parameterIndex;
        }
        // モデルに存在していない場合、非存在パラメータIDリスト内を検索し、そのインデックスを返す
        if (parameterId in this._notExistParameterId) {
            return this._notExistParameterId[parameterId];
        }
        // 非存在パラメータIDリストにない場合新しく要素を追加する
        parameterIndex = this._model.parameters.count + Object.keys(this._notExistParameterId).length;
        this._notExistParameterId[parameterId] = parameterIndex;
        this._notExistParameterValues[parameterIndex] = 0;
        return parameterIndex;
    }
    /**
     * パラメータの個数の取得
     * @return パラメータの個数
     */
    getParameterCount() {
        return this._model.parameters.count;
    }
    /**
     * パラメータの最大値の取得
     * @param parameterIndex パラメータのインデックス
     * @return パラメータの最大値
     */
    getParameterMaximumValue(parameterIndex) {
        return this._model.parameters.maximumValues[parameterIndex];
    }
    /**
     * パラメータの最小値の取得
     * @param parameterIndex パラメータのインデックス
     * @return パラメータの最小値
     */
    getParameterMinimumValue(parameterIndex) {
        return this._model.parameters.minimumValues[parameterIndex];
    }
    /**
     * パラメータのデフォルト値の取得
     * @param parameterIndex パラメータのインデックス
     * @return パラメータのデフォルト値
     */
    getParameterDefaultValue(parameterIndex) {
        return this._model.parameters.defaultValues[parameterIndex];
    }
    /**
     * パラメータの値の取得
     * @param parameterIndex    パラメータのインデックス
     * @return パラメータの値
     */
    getParameterValueByIndex(parameterIndex) {
        if (parameterIndex in this._notExistParameterValues) {
            return this._notExistParameterValues[parameterIndex];
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        return this._parameterValues[parameterIndex];
    }
    /**
     * パラメータの値の取得
     * @param parameterId    パラメータのID
     * @return パラメータの値
     */
    getParameterValueById(parameterId) {
        // 高速化のためにparameterIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
        const parameterIndex = this.getParameterIndex(parameterId);
        return this.getParameterValueByIndex(parameterIndex);
    }
    /**
     * パラメータの値の設定
     * @param parameterIndex パラメータのインデックス
     * @param value パラメータの値
     * @param weight 重み
     */
    setParameterValueByIndex(parameterIndex, value, weight = 1.0) {
        if (parameterIndex in this._notExistParameterValues) {
            this._notExistParameterValues[parameterIndex] =
                weight == 1
                    ? value
                    : this._notExistParameterValues[parameterIndex] *
                        (1 - weight) +
                        value * weight;
            return;
        }
        // インデックスの範囲内検知
        CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        if (this._model.parameters.maximumValues[parameterIndex] < value) {
            value = this._model.parameters.maximumValues[parameterIndex];
        }
        if (this._model.parameters.minimumValues[parameterIndex] > value) {
            value = this._model.parameters.minimumValues[parameterIndex];
        }
        this._parameterValues[parameterIndex] =
            weight == 1
                ? value
                : (this._parameterValues[parameterIndex] =
                    this._parameterValues[parameterIndex] * (1 - weight) +
                        value * weight);
    }
    /**
     * パラメータの値の設定
     * @param parameterId パラメータのID
     * @param value パラメータの値
     * @param weight 重み
     */
    setParameterValueById(parameterId, value, weight = 1.0) {
        const index = this.getParameterIndex(parameterId);
        this.setParameterValueByIndex(index, value, weight);
    }
    /**
     * パラメータの値の加算(index)
     * @param parameterIndex パラメータインデックス
     * @param value 加算する値
     * @param weight 重み
     */
    addParameterValueByIndex(parameterIndex, value, weight = 1.0) {
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) + value * weight);
    }
    /**
     * パラメータの値の加算(id)
     * @param parameterId パラメータＩＤ
     * @param value 加算する値
     * @param weight 重み
     */
    addParameterValueById(parameterId, value, weight = 1.0) {
        const index = this.getParameterIndex(parameterId);
        this.addParameterValueByIndex(index, value, weight);
    }
    /**
     * パラメータの値の乗算
     * @param parameterId パラメータのID
     * @param value 乗算する値
     * @param weight 重み
     */
    multiplyParameterValueById(parameterId, value, weight = 1.0) {
        const index = this.getParameterIndex(parameterId);
        this.multiplyParameterValueByIndex(index, value, weight);
    }
    /**
     * パラメータの値の乗算
     * @param parameterIndex パラメータのインデックス
     * @param value 乗算する値
     * @param weight 重み
     */
    multiplyParameterValueByIndex(parameterIndex, value, weight = 1.0) {
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) *
            (1.0 + (value - 1.0) * weight));
    }
    getDrawableIds() {
        return this._drawableIds.slice();
    }
    /**
     * Drawableのインデックスの取得
     * @param drawableId DrawableのID
     * @return Drawableのインデックス
     */
    getDrawableIndex(drawableId) {
        const drawableCount = this._model.drawables.count;
        for (let drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
            if (this._drawableIds[drawableIndex] == drawableId) {
                return drawableIndex;
            }
        }
        return -1;
    }
    /**
     * Drawableの個数の取得
     * @return drawableの個数
     */
    getDrawableCount() {
        return this._model.drawables.count;
    }
    /**
     * DrawableのIDを取得する
     * @param drawableIndex Drawableのインデックス
     * @return drawableのID
     */
    getDrawableId(drawableIndex) {
        return this._model.drawables.ids[drawableIndex];
    }
    /**
     * Drawableの描画順リストの取得
     * @return Drawableの描画順リスト
     */
    getDrawableRenderOrders() {
        return this._model.drawables.renderOrders;
    }
    /**
     * Drawableのテクスチャインデックスリストの取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableのテクスチャインデックスリスト
     */
    getDrawableTextureIndices(drawableIndex) {
        return this._model.drawables.textureIndices[drawableIndex];
    }
    /**
     * DrawableのVertexPositionsの変化情報の取得
     *
     * 直近のCubismModel.update関数でDrawableの頂点情報が変化したかを取得する。
     *
     * @param   drawableIndex   Drawableのインデックス
     * @retval  true    Drawableの頂点情報が直近のCubismModel.update関数で変化した
     * @retval  false   Drawableの頂点情報が直近のCubismModel.update関数で変化していない
     */
    getDrawableDynamicFlagVertexPositionsDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
     * Drawableの頂点インデックスの個数の取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableの頂点インデックスの個数
     */
    getDrawableVertexIndexCount(drawableIndex) {
        return this._model.drawables.indexCounts[drawableIndex];
    }
    /**
     * Drawableの頂点の個数の取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableの頂点の個数
     */
    getDrawableVertexCount(drawableIndex) {
        return this._model.drawables.vertexCounts[drawableIndex];
    }
    /**
     * Drawableの頂点リストの取得
     * @param drawableIndex drawableのインデックス
     * @return drawableの頂点リスト
     */
    getDrawableVertices(drawableIndex) {
        return this.getDrawableVertexPositions(drawableIndex);
    }
    /**
     * Drawableの頂点インデックスリストの取得
     * @param drarableIndex Drawableのインデックス
     * @return drawableの頂点インデックスリスト
     */
    getDrawableVertexIndices(drawableIndex) {
        return this._model.drawables.indices[drawableIndex];
    }
    /**
     * Drawableの頂点リストの取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableの頂点リスト
     */
    getDrawableVertexPositions(drawableIndex) {
        return this._model.drawables.vertexPositions[drawableIndex];
    }
    /**
     * Drawableの頂点のUVリストの取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableの頂点UVリスト
     */
    getDrawableVertexUvs(drawableIndex) {
        return this._model.drawables.vertexUvs[drawableIndex];
    }
    /**
     * Drawableの不透明度の取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableの不透明度
     */
    getDrawableOpacity(drawableIndex) {
        return this._model.drawables.opacities[drawableIndex];
    }
    /**
     * Drawableのカリング情報の取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableのカリング情報
     */
    getDrawableCulling(drawableIndex) {
        const constantFlags = this._model.drawables.constantFlags;
        return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
    }
    /**
     * Drawableのブレンドモードを取得
     * @param drawableIndex Drawableのインデックス
     * @return drawableのブレンドモード
     */
    getDrawableBlendMode(drawableIndex) {
        const constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex])
            ? CubismBlendMode.CubismBlendMode_Additive
            : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex])
                ? CubismBlendMode.CubismBlendMode_Multiplicative
                : CubismBlendMode.CubismBlendMode_Normal;
    }
    /**
     * Drawableのマスクの反転使用の取得
     *
     * Drawableのマスク使用時の反転設定を取得する。
     * マスクを使用しない場合は無視される。
     *
     * @param drawableIndex Drawableのインデックス
     * @return Drawableの反転設定
     */
    getDrawableInvertedMaskBit(drawableIndex) {
        const constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]);
    }
    /**
     * Drawableのクリッピングマスクリストの取得
     * @return Drawableのクリッピングマスクリスト
     */
    getDrawableMasks() {
        return this._model.drawables.masks;
    }
    /**
     * Drawableのクリッピングマスクの個数リストの取得
     * @return Drawableのクリッピングマスクの個数リスト
     */
    getDrawableMaskCounts() {
        return this._model.drawables.maskCounts;
    }
    /**
     * クリッピングマスクの使用状態
     *
     * @return true クリッピングマスクを使用している
     * @return false クリッピングマスクを使用していない
     */
    isUsingMasking() {
        for (let d = 0; d < this._model.drawables.count; ++d) {
            if (this._model.drawables.maskCounts[d] <= 0) {
                continue;
            }
            return true;
        }
        return false;
    }
    /**
     * Drawableの表示情報を取得する
     *
     * @param drawableIndex Drawableのインデックス
     * @return true Drawableが表示
     * @return false Drawableが非表示
     */
    getDrawableDynamicFlagIsVisible(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
    }
    /**
     * DrawableのDrawOrderの変化情報の取得
     *
     * 直近のCubismModel.update関数でdrawableのdrawOrderが変化したかを取得する。
     * drawOrderはartMesh上で指定する0から1000の情報
     * @param drawableIndex drawableのインデックス
     * @return true drawableの不透明度が直近のCubismModel.update関数で変化した
     * @return false drawableの不透明度が直近のCubismModel.update関数で変化している
     */
    getDrawableDynamicFlagVisibilityDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
     * Drawableの不透明度の変化情報の取得
     *
     * 直近のCubismModel.update関数でdrawableの不透明度が変化したかを取得する。
     *
     * @param drawableIndex drawableのインデックス
     * @return true Drawableの不透明度が直近のCubismModel.update関数で変化した
     * @return false Drawableの不透明度が直近のCubismModel.update関数で変化してない
     */
    getDrawableDynamicFlagOpacityDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
     * Drawableの描画順序の変化情報の取得
     *
     * 直近のCubismModel.update関数でDrawableの描画の順序が変化したかを取得する。
     *
     * @param drawableIndex Drawableのインデックス
     * @return true Drawableの描画の順序が直近のCubismModel.update関数で変化した
     * @return false Drawableの描画の順序が直近のCubismModel.update関数で変化してない
     */
    getDrawableDynamicFlagRenderOrderDidChange(drawableIndex) {
        const dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
    }
    /**
     * 保存されたパラメータの読み込み
     */
    loadParameters() {
        let parameterCount = this._model.parameters.count;
        const savedParameterCount = this._savedParameters.length;
        if (parameterCount > savedParameterCount) {
            parameterCount = savedParameterCount;
        }
        for (let i = 0; i < parameterCount; ++i) {
            this._parameterValues[i] = this._savedParameters[i];
        }
    }
    /**
     * 初期化する
     */
    initialize() {
        this._parameterValues = this._model.parameters.values;
        this._partOpacities = this._model.parts.opacities;
        this._parameterMaximumValues = this._model.parameters.maximumValues;
        this._parameterMinimumValues = this._model.parameters.minimumValues;
        {
            const parameterIds = this._model.parameters.ids;
            const parameterCount = this._model.parameters.count;
            for (let i = 0; i < parameterCount; ++i) {
                this._parameterIds.push(parameterIds[i]);
            }
        }
        {
            const partIds = this._model.parts.ids;
            const partCount = this._model.parts.count;
            for (let i = 0; i < partCount; ++i) {
                this._partIds.push(partIds[i]);
            }
        }
        {
            const drawableIds = this._model.drawables.ids;
            const drawableCount = this._model.drawables.count;
            for (let i = 0; i < drawableCount; ++i) {
                this._drawableIds.push(drawableIds[i]);
            }
        }
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._model.release();
        this._model = undefined;
    }
}

// CONCATENATED MODULE: ./cubism/src/model/cubismmoc.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * Mocデータの管理
 *
 * Mocデータの管理を行うクラス。
 */
class cubismmoc_CubismMoc {
    /**
     * コンストラクタ
     */
    constructor(moc) {
        this._moc = moc;
        this._modelCount = 0;
    }
    /**
     * Mocデータの作成
     */
    static create(mocBytes) {
        const moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
        if (moc) {
            return new cubismmoc_CubismMoc(moc);
        }
        throw new Error('Unknown error');
    }
    /**
     * モデルを作成する
     *
     * @return Mocデータから作成されたモデル
     */
    createModel() {
        let cubismModel;
        const model = Live2DCubismCore.Model.fromMoc(this._moc);
        if (model) {
            cubismModel = new cubismmodel_CubismModel(model);
            ++this._modelCount;
            return cubismModel;
        }
        throw new Error('Unknown error');
    }
    /**
     * モデルを削除する
     */
    deleteModel(model) {
        if (model != null) {
            --this._modelCount;
        }
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._moc._release();
        this._moc = undefined;
    }
}

// CONCATENATED MODULE: ./cubism/src/physics/cubismphysicsinternal.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * 物理演算の適用先の種類
 */
var CubismPhysicsTargetType;
(function (CubismPhysicsTargetType) {
    CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter"; // パラメータに対して適用
})(CubismPhysicsTargetType || (CubismPhysicsTargetType = {}));
/**
 * 物理演算の入力の種類
 */
var CubismPhysicsSource;
(function (CubismPhysicsSource) {
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle"; // 角度から
})(CubismPhysicsSource || (CubismPhysicsSource = {}));
/**
 * 物理演算の演算委使用する物理点の情報
 */
class cubismphysicsinternal_CubismPhysicsParticle {
    constructor() {
        this.initialPosition = new CubismVector2(0, 0);
        this.position = new CubismVector2(0, 0);
        this.lastPosition = new CubismVector2(0, 0);
        this.lastGravity = new CubismVector2(0, 0);
        this.force = new CubismVector2(0, 0);
        this.velocity = new CubismVector2(0, 0);
    }
}
/**
 * 物理演算の物理点の管理
 */
class CubismPhysicsSubRig {
    constructor() {
        this.normalizationPosition = {}; // 正規化された位置
        this.normalizationAngle = {}; // 正規化された角度
    }
}
/**
 * 物理演算の入力情報
 */
class CubismPhysicsInput {
    constructor() {
        this.source = {}; // 入力元のパラメータ
    }
}
/**
 * @brief 物理演算の出力情報
 *
 * 物理演算の出力情報。
 */
class cubismphysicsinternal_CubismPhysicsOutput {
    constructor() {
        this.destination = {}; // 出力先のパラメータ
        this.translationScale = new CubismVector2(0, 0); // 移動値のスケール
    }
}
/**
 * @brief 物理演算のデータ
 *
 * 物理演算のデータ。
 */
class cubismphysicsinternal_CubismPhysicsRig {
    constructor() {
        this.settings = [];
        this.inputs = [];
        this.outputs = [];
        this.particles = [];
        this.gravity = new CubismVector2(0, 0);
        this.wind = new CubismVector2(0, 0);
    }
}

// CONCATENATED MODULE: ./cubism/src/physics/cubismphysicsjson.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

/**
 * physics3.jsonのコンテナ。
 */
class cubismphysicsjson_CubismPhysicsJson {
    /**
     * コンストラクタ
     * @param json physics3.jsonが読み込まれているバッファ
     */
    constructor(json) {
        this._json = json;
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._json = undefined;
    }
    /**
     * 重力の取得
     * @return 重力
     */
    getGravity() {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.Meta.EffectiveForces.Gravity.X;
        ret.y = this._json.Meta.EffectiveForces.Gravity.Y;
        return ret;
    }
    /**
     * 風の取得
     * @return 風
     */
    getWind() {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.Meta.EffectiveForces.Wind.X;
        ret.y = this._json.Meta.EffectiveForces.Wind.Y;
        return ret;
    }
    /**
     * 物理店の管理の個数の取得
     * @return 物理店の管理の個数
     */
    getSubRigCount() {
        return this._json.Meta.PhysicsSettingCount;
    }
    /**
     * 入力の総合計の取得
     * @return 入力の総合計
     */
    getTotalInputCount() {
        return this._json.Meta.TotalInputCount;
    }
    /**
     * 出力の総合計の取得
     * @return 出力の総合計
     */
    getTotalOutputCount() {
        return this._json.Meta.TotalOutputCount;
    }
    /**
     * 物理点の個数の取得
     * @return 物理点の個数
     */
    getVertexCount() {
        return this._json.Meta.VertexCount;
    }
    /**
     * 正規化された位置の最小値の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 正規化された位置の最小値
     */
    getNormalizationPositionMinimumValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Minimum;
    }
    /**
     * 正規化された位置の最大値の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 正規化された位置の最大値
     */
    getNormalizationPositionMaximumValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Maximum;
    }
    /**
     * 正規化された位置のデフォルト値の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 正規化された位置のデフォルト値
     */
    getNormalizationPositionDefaultValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Position.Default;
    }
    /**
     * 正規化された角度の最小値の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 正規化された角度の最小値
     */
    getNormalizationAngleMinimumValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Minimum;
    }
    /**
     * 正規化された角度の最大値の取得
     * @param physicsSettingIndex
     * @return 正規化された角度の最大値
     */
    getNormalizationAngleMaximumValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Maximum;
    }
    /**
     * 正規化された角度のデフォルト値の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 正規化された角度のデフォルト値
     */
    getNormalizationAngleDefaultValue(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Normalization.Angle.Default;
    }
    /**
     * 入力の個数の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 入力の個数
     */
    getInputCount(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Input.length;
    }
    /**
     * 入力の重みの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param inputIndex 入力のインデックス
     * @return 入力の重み
     */
    getInputWeight(physicsSettingIndex, inputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Weight;
    }
    /**
     * 入力の反転の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param inputIndex 入力のインデックス
     * @return 入力の反転
     */
    getInputReflect(physicsSettingIndex, inputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Reflect;
    }
    /**
     * 入力の種類の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param inputIndex 入力のインデックス
     * @return 入力の種類
     */
    getInputType(physicsSettingIndex, inputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Type;
    }
    /**
     * 入力元のIDの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param inputIndex 入力のインデックス
     * @return 入力元のID
     */
    getInputSourceId(physicsSettingIndex, inputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Input[inputIndex].Source.Id;
    }
    /**
     * 出力の個数の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @return 出力の個数
     */
    getOutputCount(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output.length;
    }
    /**
     * 出力の物理点のインデックスの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力の物理点のインデックス
     */
    getOutputVertexIndex(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].VertexIndex;
    }
    /**
     * 出力の角度のスケールを取得する
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力の角度のスケール
     */
    getOutputAngleScale(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Scale;
    }
    /**
     * 出力の重みの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力の重み
     */
    getOutputWeight(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Weight;
    }
    /**
     * 出力先のIDの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力先のID
     */
    getOutputDestinationId(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Destination.Id;
    }
    /**
     * 出力の種類の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力の種類
     */
    getOutputType(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Type;
    }
    /**
     * 出力の反転の取得
     * @param physicsSettingIndex 物理演算のインデックス
     * @param outputIndex 出力のインデックス
     * @return 出力の反転
     */
    getOutputReflect(physicsSettingIndex, outputIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Output[outputIndex].Reflect;
    }
    /**
     * 物理点の個数の取得
     * @param physicsSettingIndex 物理演算男設定のインデックス
     * @return 物理点の個数
     */
    getParticleCount(physicsSettingIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Vertices.length;
    }
    /**
     * 物理点の動きやすさの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param vertexIndex 物理点のインデックス
     * @return 物理点の動きやすさ
     */
    getParticleMobility(physicsSettingIndex, vertexIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Mobility;
    }
    /**
     * 物理点の遅れの取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param vertexIndex 物理点のインデックス
     * @return 物理点の遅れ
     */
    getParticleDelay(physicsSettingIndex, vertexIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Delay;
    }
    /**
     * 物理点の加速度の取得
     * @param physicsSettingIndex 物理演算の設定
     * @param vertexIndex 物理点のインデックス
     * @return 物理点の加速度
     */
    getParticleAcceleration(physicsSettingIndex, vertexIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Acceleration;
    }
    /**
     * 物理点の距離の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param vertexIndex 物理点のインデックス
     * @return 物理点の距離
     */
    getParticleRadius(physicsSettingIndex, vertexIndex) {
        return this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Radius;
    }
    /**
     * 物理点の位置の取得
     * @param physicsSettingIndex 物理演算の設定のインデックス
     * @param vertexIndex 物理点のインデックス
     * @return 物理点の位置
     */
    getParticlePosition(physicsSettingIndex, vertexIndex) {
        const ret = new CubismVector2(0, 0);
        ret.x = this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Position.X;
        ret.y = this._json.PhysicsSettings[physicsSettingIndex].Vertices[vertexIndex].Position.Y;
        return ret;
    }
}

// CONCATENATED MODULE: ./cubism/src/physics/cubismphysics.ts
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */




// physics types tags.
const PhysicsTypeTagX = 'X';
const PhysicsTypeTagY = 'Y';
const PhysicsTypeTagAngle = 'Angle';
// Constant of air resistance.
const AirResistance = 5.0;
// Constant of maximum weight of input and output ratio.
const MaximumWeight = 100.0;
// Constant of threshold of movement.
const MovementThreshold = 0.001;
/**
 * 物理演算クラス
 */
class cubismphysics_CubismPhysics {
    /**
     * コンストラクタ
     */
    constructor() {
        // set default options
        this._options = new cubismphysics_Options();
        this._options.gravity.y = -1.0;
        this._options.gravity.x = 0;
        this._options.wind.x = 0;
        this._options.wind.y = 0;
    }
    /**
     * インスタンスの作成
     * @param json    physics3.jsonが読み込まれているバッファ
     * @return 作成されたインスタンス
     */
    static create(json) {
        const ret = new cubismphysics_CubismPhysics();
        ret.parse(json);
        ret._physicsRig.gravity.y = 0;
        return ret;
    }
    /**
     * 物理演算の評価
     * @param model 物理演算の結果を適用するモデル
     * @param deltaTimeSeconds デルタ時間[秒]
     */
    evaluate(model, deltaTimeSeconds) {
        let totalAngle;
        let weight;
        let radAngle;
        let outputValue;
        const totalTranslation = new CubismVector2();
        let currentSetting;
        let currentInput;
        let currentOutput;
        let currentParticles;
        let parameterValue;
        let parameterMaximumValue;
        let parameterMinimumValue;
        let parameterDefaultValue;
        parameterValue = model.getModel().parameters.values;
        parameterMaximumValue = model.getModel().parameters.maximumValues;
        parameterMinimumValue = model.getModel().parameters.minimumValues;
        parameterDefaultValue = model.getModel().parameters.defaultValues;
        for (let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
            totalAngle = { angle: 0.0 };
            totalTranslation.x = 0.0;
            totalTranslation.y = 0.0;
            currentSetting = this._physicsRig.settings[settingIndex];
            currentInput = this._physicsRig.inputs.slice(currentSetting.baseInputIndex);
            currentOutput = this._physicsRig.outputs.slice(currentSetting.baseOutputIndex);
            currentParticles = this._physicsRig.particles.slice(currentSetting.baseParticleIndex);
            // Load input parameters
            for (let i = 0; i < currentSetting.inputCount; ++i) {
                weight = currentInput[i].weight / MaximumWeight;
                if (currentInput[i].sourceParameterIndex == -1) {
                    currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
                }
                currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[i].reflect, weight);
            }
            radAngle = cubismmath_CubismMath.degreesToRadian(-totalAngle.angle);
            totalTranslation.x =
                totalTranslation.x * cubismmath_CubismMath.cos(radAngle) -
                    totalTranslation.y * cubismmath_CubismMath.sin(radAngle);
            totalTranslation.y =
                totalTranslation.x * cubismmath_CubismMath.sin(radAngle) +
                    totalTranslation.y * cubismmath_CubismMath.cos(radAngle);
            // Calculate particles position.
            updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
            // Update output parameters.
            for (let i = 0; i < currentSetting.outputCount; ++i) {
                const particleIndex = currentOutput[i].vertexIndex;
                if (particleIndex < 1 ||
                    particleIndex >= currentSetting.particleCount) {
                    break;
                }
                if (currentOutput[i].destinationParameterIndex == -1) {
                    currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
                }
                const translation = new CubismVector2();
                translation.x =
                    currentParticles[particleIndex].position.x -
                        currentParticles[particleIndex - 1].position.x;
                translation.y =
                    currentParticles[particleIndex].position.y -
                        currentParticles[particleIndex - 1].position.y;
                outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
                const destinationParameterIndex = currentOutput[i].destinationParameterIndex;
                const outParameterValue = !Float32Array.prototype.slice &&
                    'subarray' in Float32Array.prototype
                    ? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex))) // 値渡しするため、JSON.parse, JSON.stringify
                    : parameterValue.slice(destinationParameterIndex);
                updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
                // 値を反映
                for (let offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
                    parameterValue[offset] = outParameterValue[outParamIndex];
                }
            }
        }
    }
    /**
     * オプションの設定
     * @param options オプション
     */
    setOptions(options) {
        this._options = options;
    }
    /**
     * オプションの取得
     * @return オプション
     */
    getOption() {
        return this._options;
    }
    /**
     * デストラクタ相当の処理
     */
    release() {
        this._physicsRig = undefined;
    }
    /**
     * physics3.jsonをパースする。
     * @param physicsJson physics3.jsonが読み込まれているバッファ
     */
    parse(physicsJson) {
        this._physicsRig = new cubismphysicsinternal_CubismPhysicsRig();
        let json = new cubismphysicsjson_CubismPhysicsJson(physicsJson);
        this._physicsRig.gravity = json.getGravity();
        this._physicsRig.wind = json.getWind();
        this._physicsRig.subRigCount = json.getSubRigCount();
        let inputIndex = 0, outputIndex = 0, particleIndex = 0;
        for (let i = 0; i < this._physicsRig.subRigCount; ++i) {
            const setting = new CubismPhysicsSubRig();
            setting.normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
            setting.normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
            setting.normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
            setting.normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
            setting.normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
            setting.normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
            // Input
            setting.inputCount = json.getInputCount(i);
            setting.baseInputIndex = inputIndex;
            inputIndex += setting.inputCount;
            for (let j = 0; j < setting.inputCount; ++j) {
                const input = new CubismPhysicsInput();
                input.sourceParameterIndex = -1;
                input.weight = json.getInputWeight(i, j);
                input.reflect = json.getInputReflect(i, j);
                switch (json.getInputType(i, j)) {
                    case PhysicsTypeTagX:
                        input.type = CubismPhysicsSource.CubismPhysicsSource_X;
                        input.getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
                        break;
                    case PhysicsTypeTagY:
                        input.type = CubismPhysicsSource.CubismPhysicsSource_Y;
                        input.getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
                        break;
                    case PhysicsTypeTagAngle:
                        input.type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                        input.getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
                        break;
                }
                input.source.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                input.source.id = json.getInputSourceId(i, j);
                this._physicsRig.inputs.push(input);
            }
            // Output
            setting.outputCount = json.getOutputCount(i);
            setting.baseOutputIndex = outputIndex;
            outputIndex += setting.outputCount;
            for (let j = 0; j < setting.outputCount; ++j) {
                const output = new cubismphysicsinternal_CubismPhysicsOutput();
                output.destinationParameterIndex = -1;
                output.vertexIndex = json.getOutputVertexIndex(i, j);
                output.angleScale = json.getOutputAngleScale(i, j);
                output.weight = json.getOutputWeight(i, j);
                output.destination.targetType = CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                output.destination.id = json.getOutputDestinationId(i, j);
                switch (json.getOutputType(i, j)) {
                    case PhysicsTypeTagX:
                        output.type = CubismPhysicsSource.CubismPhysicsSource_X;
                        output.getValue = getOutputTranslationX;
                        output.getScale = getOutputScaleTranslationX;
                        break;
                    case PhysicsTypeTagY:
                        output.type = CubismPhysicsSource.CubismPhysicsSource_Y;
                        output.getValue = getOutputTranslationY;
                        output.getScale = getOutputScaleTranslationY;
                        break;
                    case PhysicsTypeTagAngle:
                        output.type = CubismPhysicsSource.CubismPhysicsSource_Angle;
                        output.getValue = getOutputAngle;
                        output.getScale = getOutputScaleAngle;
                        break;
                }
                output.reflect = json.getOutputReflect(i, j);
                this._physicsRig.outputs.push(output);
            }
            // Particle
            setting.particleCount = json.getParticleCount(i);
            setting.baseParticleIndex = particleIndex;
            particleIndex += setting.particleCount;
            for (let j = 0; j < setting.particleCount; ++j) {
                const particle = new cubismphysicsinternal_CubismPhysicsParticle();
                particle.mobility = json.getParticleMobility(i, j);
                particle.delay = json.getParticleDelay(i, j);
                particle.acceleration = json.getParticleAcceleration(i, j);
                particle.radius = json.getParticleRadius(i, j);
                particle.position = json.getParticlePosition(i, j);
                this._physicsRig.particles.push(particle);
            }
            this._physicsRig.settings.push(setting);
        }
        this.initialize();
        json.release();
    }
    /**
     * 初期化する
     */
    initialize() {
        let strand;
        let currentSetting;
        let radius;
        for (let settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
            currentSetting = this._physicsRig.settings[settingIndex];
            strand = this._physicsRig.particles.slice(currentSetting.baseParticleIndex);
            // Initialize the top of particle.
            strand[0].initialPosition = new CubismVector2(0.0, 0.0);
            strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
            strand[0].lastGravity = new CubismVector2(0.0, -1.0);
            strand[0].lastGravity.y *= -1.0;
            strand[0].velocity = new CubismVector2(0.0, 0.0);
            strand[0].force = new CubismVector2(0.0, 0.0);
            // Initialize paritcles.
            for (let i = 1; i < currentSetting.particleCount; ++i) {
                radius = new CubismVector2(0.0, 0.0);
                radius.y = strand[i].radius;
                strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
                strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastGravity = new CubismVector2(0.0, -1.0);
                strand[i].lastGravity.y *= -1.0;
                strand[i].velocity = new CubismVector2(0.0, 0.0);
                strand[i].force = new CubismVector2(0.0, 0.0);
            }
        }
    }
}
/**
 * 物理演算のオプション
 */
class cubismphysics_Options {
    constructor() {
        this.gravity = new CubismVector2(0, 0);
        this.wind = new CubismVector2(0, 0);
    }
}
function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.x +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.y +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
    targetAngle.angle +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
}
function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.x;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue = translation.y;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
    let outputValue;
    if (particleIndex >= 2) {
        parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
    }
    else {
        parentGravity = parentGravity.multiplyByScaler(-1.0);
    }
    outputValue = cubismmath_CubismMath.directionToRadian(parentGravity, translation);
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getRangeValue(min, max) {
    return Math.abs(Math.max(min, max) - Math.min(min, max));
}
function getDefaultValue(min, max) {
    const minValue = Math.min(min, max);
    return minValue + getRangeValue(min, max) / 2.0;
}
function getOutputScaleTranslationX(translationScale, angleScale) {
    return translationScale.x;
}
function getOutputScaleTranslationY(translationScale, angleScale) {
    return translationScale.y;
}
function getOutputScaleAngle(translationScale, angleScale) {
    return angleScale;
}
/**
 * Updates particles.
 *
 * @param strand                Target array of particle.
 * @param strandCount           Count of particle.
 * @param totalTranslation      Total translation value.
 * @param totalAngle            Total angle.
 * @param windDirection         Direction of Wind.
 * @param thresholdValue        Threshold of movement.
 * @param deltaTimeSeconds      Delta time.
 * @param airResistance         Air resistance.
 */
function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
    let totalRadian;
    let delay;
    let radian;
    let currentGravity;
    let direction = new CubismVector2(0.0, 0.0);
    let velocity = new CubismVector2(0.0, 0.0);
    let force = new CubismVector2(0.0, 0.0);
    let newDirection = new CubismVector2(0.0, 0.0);
    strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
    totalRadian = cubismmath_CubismMath.degreesToRadian(totalAngle);
    currentGravity = cubismmath_CubismMath.radianToDirection(totalRadian);
    currentGravity.normalize();
    for (let i = 1; i < strandCount; ++i) {
        strand[i].force = currentGravity
            .multiplyByScaler(strand[i].acceleration)
            .add(windDirection);
        strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
        delay = strand[i].delay * deltaTimeSeconds * 30.0;
        direction = strand[i].position.substract(strand[i - 1].position);
        radian =
            cubismmath_CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) /
                airResistance;
        direction.x =
            cubismmath_CubismMath.cos(radian) * direction.x -
                direction.y * cubismmath_CubismMath.sin(radian);
        direction.y =
            cubismmath_CubismMath.sin(radian) * direction.x +
                direction.y * cubismmath_CubismMath.cos(radian);
        strand[i].position = strand[i - 1].position.add(direction);
        velocity = strand[i].velocity.multiplyByScaler(delay);
        force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
        strand[i].position = strand[i].position.add(velocity).add(force);
        newDirection = strand[i].position.substract(strand[i - 1].position);
        newDirection.normalize();
        strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
        if (cubismmath_CubismMath.abs(strand[i].position.x) < thresholdValue) {
            strand[i].position.x = 0.0;
        }
        if (delay != 0.0) {
            strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
            strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
            strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
        }
        strand[i].force = new CubismVector2(0.0, 0.0);
        strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
    }
}
/**
 * Updates output parameter value.
 * @param parameterValue            Target parameter value.
 * @param parameterValueMinimum     Minimum of parameter value.
 * @param parameterValueMaximum     Maximum of parameter value.
 * @param translation               Translation value.
 */
function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
    let outputScale;
    let value;
    let weight;
    outputScale = output.getScale(output.translationScale, output.angleScale);
    value = translation * outputScale;
    if (value < parameterValueMinimum) {
        if (value < output.valueBelowMinimum) {
            output.valueBelowMinimum = value;
        }
        value = parameterValueMinimum;
    }
    else if (value > parameterValueMaximum) {
        if (value > output.valueExceededMaximum) {
            output.valueExceededMaximum = value;
        }
        value = parameterValueMaximum;
    }
    weight = output.weight / MaximumWeight;
    if (weight >= 1.0) {
        parameterValue[0] = value;
    }
    else {
        value = parameterValue[0] * (1.0 - weight) + value * weight;
        parameterValue[0] = value;
    }
}
function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
    let result = 0.0;
    const maxValue = cubismmath_CubismMath.max(parameterMaximum, parameterMinimum);
    if (maxValue < value) {
        value = maxValue;
    }
    const minValue = cubismmath_CubismMath.min(parameterMaximum, parameterMinimum);
    if (minValue > value) {
        value = minValue;
    }
    const minNormValue = cubismmath_CubismMath.min(normalizedMinimum, normalizedMaximum);
    const maxNormValue = cubismmath_CubismMath.max(normalizedMinimum, normalizedMaximum);
    const middleNormValue = normalizedDefault;
    const middleValue = getDefaultValue(minValue, maxValue);
    const paramValue = value - middleValue;
    switch (Math.sign(paramValue)) {
        case 1: {
            const nLength = maxNormValue - middleNormValue;
            const pLength = maxValue - middleValue;
            if (pLength != 0.0) {
                result = paramValue * (nLength / pLength);
                result += middleNormValue;
            }
            break;
        }
        case -1: {
            const nLength = minNormValue - middleNormValue;
            const pLength = minValue - middleValue;
            if (pLength != 0.0) {
                result = paramValue * (nLength / pLength);
                result += middleNormValue;
            }
            break;
        }
        case 0: {
            result = middleNormValue;
            break;
        }
    }
    return isInverted ? result : result * -1.0;
}

// CONCATENATED MODULE: ./src/cubism4/factory.ts









config["b" /* config */].cubism4 = config_config;
Live2DFactory["a" /* Live2DFactory */].registerRuntime({
    version: 4,
    ready: cubism4Ready,
    test(source) {
        return source instanceof Cubism4ModelSettings_Cubism4ModelSettings || Cubism4ModelSettings_Cubism4ModelSettings.isValidJSON(source);
    },
    isValidMoc(modelData) {
        if (modelData.byteLength < 4) {
            return false;
        }
        const view = new Int8Array(modelData, 0, 4);
        return String.fromCharCode(...view) === 'MOC3';
    },
    createModelSettings(json) {
        return new Cubism4ModelSettings_Cubism4ModelSettings(json);
    },
    createCoreModel(data) {
        const moc = cubismmoc_CubismMoc.create(data);
        try {
            const model = moc.createModel();
            // store the moc instance so we can reference it later
            model.__moc = moc;
            return model;
        }
        catch (e) {
            try {
                moc.release();
            }
            catch (ignored) {
            }
            throw e;
        }
    },
    createInternalModel(coreModel, settings, options) {
        const model = new Cubism4InternalModel_Cubism4InternalModel(coreModel, settings, options);
        const coreModelWithMoc = coreModel;
        if (coreModelWithMoc.__moc) {
            // transfer the moc to InternalModel, because the coreModel will
            // probably have been set to undefined when we receive the "destroy" event
            model.__moc = coreModelWithMoc.__moc;
            delete coreModelWithMoc.__moc;
            // release the moc when destroying
            model.once('destroy', releaseMoc);
        }
        return model;
    },
    createPhysics(coreModel, data) {
        return cubismphysics_CubismPhysics.create(data);
    },
    createPose(coreModel, data) {
        return CubismPose.create(data);
    },
});
function releaseMoc() {
    var _a;
    (_a = this.__moc) === null || _a === void 0 ? void 0 : _a.release();
}

// CONCATENATED MODULE: ./src/cubism4/index.ts









/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Cubism2ExpressionManager_Cubism2ExpressionManager; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Cubism2InternalModel_Cubism2InternalModel; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Cubism2ModelSettings_Cubism2ModelSettings; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Cubism2MotionManager_Cubism2MotionManager; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Live2DExpression_Live2DExpression; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Live2DEyeBlink_Live2DEyeBlink; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Live2DPhysics; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Live2DPose_Live2DPose; });

// EXTERNAL MODULE: ./src/cubism2/check-runtime.ts
var check_runtime = __webpack_require__(25);

// EXTERNAL MODULE: ./src/cubism2/patch-motion.ts
var patch_motion = __webpack_require__(21);

// EXTERNAL MODULE: ./src/cubism-common/ExpressionManager.ts
var ExpressionManager = __webpack_require__(10);

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);

// CONCATENATED MODULE: ./src/cubism2/Live2DExpression.ts

class Live2DExpression_Live2DExpression extends AMotion {
    constructor(json) {
        super();
        this.params = [];
        this.setFadeIn(json.fade_in > 0 ? json.fade_in : config["b" /* config */].expressionFadingDuration);
        this.setFadeOut(json.fade_out > 0 ? json.fade_out : config["b" /* config */].expressionFadingDuration);
        if (Array.isArray(json.params)) {
            json.params.forEach(param => {
                const calc = param.calc || 'add';
                if (calc === 'add') {
                    const defaultValue = param.def || 0;
                    param.val -= defaultValue;
                }
                else if (calc === 'mult') {
                    const defaultValue = param.def || 1;
                    param.val /= defaultValue;
                }
                this.params.push({
                    calc,
                    val: param.val,
                    id: param.id,
                });
            });
        }
    }
    /** @override */
    updateParamExe(model, time, weight, motionQueueEnt) {
        this.params.forEach(param => {
            // this algorithm seems to be broken for newer Neptunia series models, have no idea
            //
            // switch (param.type) {
            //     case ParamCalcType.Set:
            //         model.setParamFloat(param.id, param.value, weight);
            //         break;
            //     case ParamCalcType.Add:
            //         model.addToParamFloat(param.id, param.value * weight);
            //         break;
            //     case ParamCalcType.Mult:
            //         model.multParamFloat(param.id, param.value, weight);
            //         break;
            // }
            // this works fine for any model
            model.setParamFloat(param.id, param.val * weight);
        });
    }
}

// CONCATENATED MODULE: ./src/cubism2/Cubism2ExpressionManager.ts


class Cubism2ExpressionManager_Cubism2ExpressionManager extends ExpressionManager["a" /* ExpressionManager */] {
    constructor(settings, options) {
        var _a;
        super(settings, options);
        this.queueManager = new MotionQueueManager();
        this.definitions = (_a = this.settings.expressions) !== null && _a !== void 0 ? _a : [];
        this.init();
    }
    isFinished() {
        return this.queueManager.isFinished();
    }
    getExpressionIndex(name) {
        return this.definitions.findIndex(def => def.name === name);
    }
    getExpressionFile(definition) {
        return definition.file;
    }
    createExpression(data, definition) {
        return new Live2DExpression_Live2DExpression(data);
    }
    _setExpression(motion) {
        return this.queueManager.startMotion(motion);
    }
    stopAllExpressions() {
        this.queueManager.stopAllMotions();
    }
    updateParameters(model, dt) {
        return this.queueManager.updateParam(model);
    }
}

// EXTERNAL MODULE: ./src/cubism-common/InternalModel.ts
var InternalModel = __webpack_require__(13);

// EXTERNAL MODULE: ./src/cubism-common/MotionManager.ts
var MotionManager = __webpack_require__(12);

// CONCATENATED MODULE: ./src/cubism2/Cubism2MotionManager.ts




class Cubism2MotionManager_Cubism2MotionManager extends MotionManager["a" /* MotionManager */] {
    constructor(settings, options) {
        super(settings, options);
        this.groups = { idle: 'idle' };
        this.motionDataType = 'arraybuffer';
        this.queueManager = new MotionQueueManager();
        this.definitions = this.settings.motions;
        this.init(options);
    }
    init(options) {
        super.init(options);
        if (this.settings.expressions) {
            this.expressionManager = new Cubism2ExpressionManager_Cubism2ExpressionManager(this.settings, options);
        }
    }
    isFinished() {
        return this.queueManager.isFinished();
    }
    createMotion(data, group, definition) {
        const motion = Live2DMotion.loadMotion(data);
        const defaultFadingDuration = group === this.groups.idle
            ? config["b" /* config */].idleMotionFadingDuration
            : config["b" /* config */].motionFadingDuration;
        motion.setFadeIn(definition.fade_in > 0 ? definition.fade_in : defaultFadingDuration);
        motion.setFadeOut(definition.fade_out > 0 ? definition.fade_out : defaultFadingDuration);
        return motion;
    }
    getMotionFile(definition) {
        return definition.file;
    }
    getMotionName(definition) {
        return definition.file;
    }
    getSoundFile(definition) {
        return definition.sound;
    }
    _startMotion(motion, onFinish) {
        motion.onFinishHandler = onFinish;
        this.queueManager.stopAllMotions();
        return this.queueManager.startMotion(motion);
    }
    _stopAllMotions() {
        this.queueManager.stopAllMotions();
    }
    updateParameters(model, now) {
        return this.queueManager.updateParam(model);
    }
    destroy() {
        super.destroy();
        this.queueManager = undefined;
    }
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./src/cubism2/Live2DEyeBlink.ts

var EyeState;
(function (EyeState) {
    EyeState[EyeState["Idle"] = 0] = "Idle";
    EyeState[EyeState["Closing"] = 1] = "Closing";
    EyeState[EyeState["Closed"] = 2] = "Closed";
    EyeState[EyeState["Opening"] = 3] = "Opening";
})(EyeState || (EyeState = {}));
class Live2DEyeBlink_Live2DEyeBlink {
    constructor(coreModel) {
        this.coreModel = coreModel;
        this.blinkInterval = 4000;
        this.closingDuration = 100;
        this.closedDuration = 50;
        this.openingDuration = 150;
        this.eyeState = EyeState.Idle;
        this.eyeParamValue = 1;
        this.closedTimer = 0;
        this.nextBlinkTimeLeft = this.blinkInterval;
        this.leftParam = coreModel.getParamIndex('PARAM_EYE_L_OPEN');
        this.rightParam = coreModel.getParamIndex('PARAM_EYE_R_OPEN');
    }
    setEyeParams(value) {
        this.eyeParamValue = Object(utils["b" /* clamp */])(value, 0, 1);
        this.coreModel.setParamFloat(this.leftParam, this.eyeParamValue);
        this.coreModel.setParamFloat(this.rightParam, this.eyeParamValue);
    }
    update(dt) {
        switch (this.eyeState) {
            case EyeState.Idle:
                this.nextBlinkTimeLeft -= dt;
                if (this.nextBlinkTimeLeft < 0) {
                    this.eyeState = EyeState.Closing;
                    this.nextBlinkTimeLeft =
                        this.blinkInterval +
                            this.closingDuration +
                            this.closedDuration +
                            this.openingDuration +
                            Object(utils["g" /* rand */])(0, 2000);
                }
                break;
            case EyeState.Closing:
                this.setEyeParams(this.eyeParamValue + dt / this.closingDuration);
                if (this.eyeParamValue <= 0) {
                    this.eyeState = EyeState.Closed;
                    this.closedTimer = 0;
                }
                break;
            case EyeState.Closed:
                this.closedTimer += dt;
                if (this.closedTimer >= this.closedDuration) {
                    this.eyeState = EyeState.Opening;
                }
                break;
            case EyeState.Opening:
                this.setEyeParams(this.eyeParamValue + dt / this.openingDuration);
                if (this.eyeParamValue >= 1) {
                    this.eyeState = EyeState.Idle;
                }
        }
    }
}

// CONCATENATED MODULE: ./src/cubism2/Cubism2InternalModel.ts



// prettier-ignore
const tempMatrixArray = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
]);
class Cubism2InternalModel_Cubism2InternalModel extends InternalModel["a" /* InternalModel */] {
    constructor(coreModel, settings, options) {
        super();
        this.textureFlipY = true;
        /**
         * Number of the drawables in this model.
         */
        this.drawDataCount = 0;
        /**
         * If true, the face culling will always be disabled when drawing the model,
         * regardless of the model's internal flags.
         */
        this.disableCulling = false;
        this.coreModel = coreModel;
        this.settings = settings;
        this.motionManager = new Cubism2MotionManager_Cubism2MotionManager(settings, options);
        this.eyeBlink = new Live2DEyeBlink_Live2DEyeBlink(coreModel);
        this.eyeballXParamIndex = coreModel.getParamIndex('PARAM_EYE_BALL_X');
        this.eyeballYParamIndex = coreModel.getParamIndex('PARAM_EYE_BALL_Y');
        this.angleXParamIndex = coreModel.getParamIndex('PARAM_ANGLE_X');
        this.angleYParamIndex = coreModel.getParamIndex('PARAM_ANGLE_Y');
        this.angleZParamIndex = coreModel.getParamIndex('PARAM_ANGLE_Z');
        this.bodyAngleXParamIndex = coreModel.getParamIndex('PARAM_BODY_ANGLE_X');
        this.breathParamIndex = coreModel.getParamIndex('PARAM_BREATH');
        this.init();
    }
    init() {
        super.init();
        if (this.settings.initParams) {
            this.settings.initParams.forEach(({ id, value }) => this.coreModel.setParamFloat(id, value));
        }
        if (this.settings.initOpacities) {
            this.settings.initOpacities.forEach(({ id, value }) => this.coreModel.setPartsOpacity(id, value));
        }
        this.coreModel.saveParam();
        const arr = this.coreModel.getModelContext()._$aS;
        if (arr === null || arr === void 0 ? void 0 : arr.length) {
            this.drawDataCount = arr.length;
        }
        let culling = this.coreModel.drawParamWebGL.culling;
        Object.defineProperty(this.coreModel.drawParamWebGL, 'culling', {
            set: (v) => culling = v,
            // always return false when disabled
            get: () => this.disableCulling ? false : culling,
        });
        const clipManager = this.coreModel.getModelContext().clipManager;
        const originalSetupClip = clipManager.setupClip;
        // after setupClip(), the GL viewport will be set to [0, 0, canvas.width, canvas.height],
        // so we have to set it back
        clipManager.setupClip = (modelContext, drawParam) => {
            originalSetupClip.call(clipManager, modelContext, drawParam);
            drawParam.gl.viewport(...this.viewport);
        };
    }
    getSize() {
        return [this.coreModel.getCanvasWidth(), this.coreModel.getCanvasHeight()];
    }
    getLayout() {
        const layout = this.settings.layout || {};
        return Object.assign(Object.assign({}, layout), { centerX: layout.center_x, centerY: layout.center_y });
    }
    updateWebGLContext(gl, glContextID) {
        const drawParamWebGL = this.coreModel.drawParamWebGL;
        drawParamWebGL.firstDraw = true;
        drawParamWebGL.setGL(gl);
        drawParamWebGL.glno = glContextID;
        // reset WebGL buffers
        for (const prop in drawParamWebGL) {
            if (drawParamWebGL.hasOwnProperty(prop) && drawParamWebGL[prop] instanceof WebGLBuffer) {
                drawParamWebGL[prop] = null;
            }
        }
        const clipManager = this.coreModel.getModelContext().clipManager;
        clipManager.curFrameNo = glContextID;
        const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
        // force Live2D to re-create the framebuffer
        clipManager.getMaskRenderTexture();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    }
    bindTexture(index, texture) {
        this.coreModel.setTexture(index, texture);
    }
    getHitAreaDefs() {
        var _a;
        return ((_a = this.settings.hitAreas) === null || _a === void 0 ? void 0 : _a.map(hitArea => ({
            id: hitArea.id,
            name: hitArea.name,
            index: this.coreModel.getDrawDataIndex(hitArea.id),
        }))) || [];
    }
    getDrawableIDs() {
        const modelContext = this.coreModel.getModelContext();
        const ids = [];
        for (let i = 0; i < this.drawDataCount; i++) {
            const drawData = modelContext.getDrawData(i);
            if (drawData) {
                ids.push(drawData.getDrawDataID().id);
            }
        }
        return ids;
    }
    getDrawableIndex(id) {
        return this.coreModel.getDrawDataIndex(id);
    }
    getDrawableVertices(drawIndex) {
        if (typeof drawIndex === 'string') {
            drawIndex = this.coreModel.getDrawDataIndex(drawIndex);
            if (drawIndex === -1)
                throw new TypeError('Unable to find drawable ID: ' + drawIndex);
        }
        return this.coreModel.getTransformedPoints(drawIndex).slice();
    }
    update(dt, now) {
        var _a, _b, _c;
        super.update(dt, now);
        const model = this.coreModel;
        this.emit('beforeMotionUpdate');
        const motionUpdated = this.motionManager.update(this.coreModel, now);
        this.emit('afterMotionUpdate');
        model.saveParam();
        if (!motionUpdated) {
            (_a = this.eyeBlink) === null || _a === void 0 ? void 0 : _a.update(dt);
        }
        this.updateFocus();
        this.updateNaturalMovements(dt, now);
        (_b = this.physics) === null || _b === void 0 ? void 0 : _b.update(now);
        (_c = this.pose) === null || _c === void 0 ? void 0 : _c.update(dt);
        this.emit('beforeModelUpdate');
        model.update();
        model.loadParam();
    }
    updateFocus() {
        this.coreModel.addToParamFloat(this.eyeballXParamIndex, this.focusController.x);
        this.coreModel.addToParamFloat(this.eyeballYParamIndex, this.focusController.y);
        this.coreModel.addToParamFloat(this.angleXParamIndex, this.focusController.x * 30);
        this.coreModel.addToParamFloat(this.angleYParamIndex, this.focusController.y * 30);
        this.coreModel.addToParamFloat(this.angleZParamIndex, this.focusController.x * this.focusController.y * -30);
        this.coreModel.addToParamFloat(this.bodyAngleXParamIndex, this.focusController.x * 10);
    }
    updateNaturalMovements(dt, now) {
        const t = (now / 1000) * 2 * Math.PI;
        this.coreModel.addToParamFloat(this.angleXParamIndex, 15 * Math.sin(t / 6.5345) * 0.5);
        this.coreModel.addToParamFloat(this.angleYParamIndex, 8 * Math.sin(t / 3.5345) * 0.5);
        this.coreModel.addToParamFloat(this.angleZParamIndex, 10 * Math.sin(t / 5.5345) * 0.5);
        this.coreModel.addToParamFloat(this.bodyAngleXParamIndex, 4 * Math.sin(t / 15.5345) * 0.5);
        this.coreModel.setParamFloat(this.breathParamIndex, 0.5 + 0.5 * Math.sin(t / 3.2345));
    }
    draw(gl) {
        const disableCulling = this.disableCulling;
        // culling must be disabled to get this cubism2 model drawn properly on a framebuffer
        if (gl.getParameter(gl.FRAMEBUFFER_BINDING)) {
            this.disableCulling = true;
        }
        const matrix = this.drawingMatrix;
        // set given 3x3 matrix into a 4x4 matrix
        tempMatrixArray[0] = matrix.a;
        tempMatrixArray[1] = matrix.b;
        tempMatrixArray[4] = matrix.c;
        tempMatrixArray[5] = matrix.d;
        tempMatrixArray[12] = matrix.tx;
        tempMatrixArray[13] = matrix.ty;
        this.coreModel.setMatrix(tempMatrixArray);
        this.coreModel.draw();
        this.disableCulling = disableCulling;
    }
    destroy() {
        super.destroy();
        // cubism2 core has a super dumb memory management so there's basically nothing much to do to release the model
        this.coreModel = undefined;
    }
}

// EXTERNAL MODULE: ./src/cubism-common/ModelSettings.ts
var ModelSettings = __webpack_require__(11);

// CONCATENATED MODULE: ./src/cubism2/Cubism2ModelSettings.ts


class Cubism2ModelSettings_Cubism2ModelSettings extends ModelSettings["a" /* ModelSettings */] {
    constructor(json) {
        super(json);
        this.motions = {};
        if (!Cubism2ModelSettings_Cubism2ModelSettings.isValidJSON(json)) {
            throw new TypeError('Invalid JSON.');
        }
        this.moc = json.model;
        // copy textures array
        Object(utils["c" /* copyArray */])('string', json, this, 'textures', 'textures');
        this.copy(json);
    }
    /**
     * Checks if a JSON object is valid model settings.
     * @param json
     */
    static isValidJSON(json) {
        var _a;
        // should always return a boolean
        return !!json
            && typeof json.model === 'string'
            && ((_a = json.textures) === null || _a === void 0 ? void 0 : _a.length) > 0
            // textures must be an array of strings
            && json.textures.every((item) => typeof item === 'string');
    }
    /**
     * Validates and copies *optional* properties from raw JSON.
     */
    copy(json) {
        Object(utils["d" /* copyProperty */])('string', json, this, 'name', 'name');
        Object(utils["d" /* copyProperty */])('string', json, this, 'pose', 'pose');
        Object(utils["d" /* copyProperty */])('string', json, this, 'physics', 'physics');
        Object(utils["d" /* copyProperty */])('object', json, this, 'layout', 'layout');
        Object(utils["d" /* copyProperty */])('object', json, this, 'motions', 'motions');
        Object(utils["c" /* copyArray */])('object', json, this, 'hit_areas', 'hitAreas');
        Object(utils["c" /* copyArray */])('object', json, this, 'expressions', 'expressions');
        Object(utils["c" /* copyArray */])('object', json, this, 'init_params', 'initParams');
        Object(utils["c" /* copyArray */])('object', json, this, 'init_opacities', 'initOpacities');
    }
    replaceFiles(replace) {
        super.replaceFiles(replace);
        for (const [group, motions] of Object.entries(this.motions)) {
            for (let i = 0; i < motions.length; i++) {
                motions[i].file = replace(motions[i].file, `motions.${group}[${i}].file`);
                if (motions[i].sound !== undefined) {
                    motions[i].sound = replace(motions[i].sound, `motions.${group}[${i}].sound`);
                }
            }
        }
        if (this.expressions) {
            for (let i = 0; i < this.expressions.length; i++) {
                this.expressions[i].file = replace(this.expressions[i].file, `expressions[${i}].file`);
            }
        }
    }
}

// CONCATENATED MODULE: ./src/cubism2/Live2DPhysics.ts
const SRC_TYPE_MAP = {
    x: PhysicsHair.Src.SRC_TO_X,
    y: PhysicsHair.Src.SRC_TO_Y,
    angle: PhysicsHair.Src.SRC_TO_G_ANGLE,
};
const TARGET_TYPE_MAP = {
    x: PhysicsHair.Src.SRC_TO_X,
    y: PhysicsHair.Src.SRC_TO_Y,
    angle: PhysicsHair.Src.SRC_TO_G_ANGLE,
};
class Live2DPhysics {
    constructor(coreModel, json) {
        this.coreModel = coreModel;
        this.physicsHairs = [];
        if (json.physics_hair) {
            this.physicsHairs = json.physics_hair.map(definition => {
                const physicsHair = new PhysicsHair();
                physicsHair.setup(definition.setup.length, definition.setup.regist, definition.setup.mass);
                definition.src.forEach(({ id, ptype, scale, weight }) => {
                    const type = SRC_TYPE_MAP[ptype];
                    if (type) {
                        physicsHair.addSrcParam(type, id, scale, weight);
                    }
                });
                definition.targets.forEach(({ id, ptype, scale, weight }) => {
                    const type = TARGET_TYPE_MAP[ptype];
                    if (type) {
                        physicsHair.addTargetParam(type, id, scale, weight);
                    }
                });
                return physicsHair;
            });
        }
    }
    update(elapsed) {
        this.physicsHairs.forEach(physicsHair => physicsHair.update(this.coreModel, elapsed));
    }
}

// CONCATENATED MODULE: ./src/cubism2/Live2DPose.ts

class Live2DPartsParam {
    constructor(id) {
        this.id = id;
        this.paramIndex = -1;
        this.partsIndex = -1;
        this.link = [];
    }
    initIndex(model) {
        this.paramIndex = model.getParamIndex('VISIBLE:' + this.id);
        this.partsIndex = model.getPartsDataIndex(PartsDataID.getID(this.id));
        model.setParamFloat(this.paramIndex, 1);
    }
}
class Live2DPose_Live2DPose {
    constructor(coreModel, json) {
        this.coreModel = coreModel;
        this.opacityAnimDuration = 500;
        this.partsGroups = [];
        if (json.parts_visible) {
            this.partsGroups = json.parts_visible.map(({ group }) => group.map(({ id, link }) => {
                const parts = new Live2DPartsParam(id);
                if (link) {
                    parts.link = link.map(l => new Live2DPartsParam(l));
                }
                return parts;
            }));
            this.init();
        }
    }
    init() {
        this.partsGroups.forEach(group => {
            group.forEach(parts => {
                parts.initIndex(this.coreModel);
                if (parts.paramIndex >= 0) {
                    const visible = this.coreModel.getParamFloat(parts.paramIndex) !== 0;
                    this.coreModel.setPartsOpacity(parts.partsIndex, visible ? 1 : 0);
                    this.coreModel.setParamFloat(parts.paramIndex, visible ? 1 : 0);
                    if (parts.link.length > 0) {
                        parts.link.forEach(p => p.initIndex(this.coreModel));
                    }
                }
            });
        });
    }
    normalizePartsOpacityGroup(partsGroup, dt) {
        const model = this.coreModel;
        const phi = 0.5;
        const maxBackOpacity = 0.15;
        let visibleOpacity = 1;
        let visibleIndex = partsGroup.findIndex(({ paramIndex, partsIndex }) => partsIndex >= 0 && model.getParamFloat(paramIndex) !== 0);
        if (visibleIndex >= 0) {
            const originalOpacity = model.getPartsOpacity(partsGroup[visibleIndex].partsIndex);
            visibleOpacity = Object(utils["b" /* clamp */])(originalOpacity + dt / this.opacityAnimDuration, 0, 1);
        }
        else {
            visibleIndex = 0;
            visibleOpacity = 1;
        }
        partsGroup.forEach(({ partsIndex }, index) => {
            if (partsIndex >= 0) {
                if (visibleIndex == index) {
                    model.setPartsOpacity(partsIndex, visibleOpacity);
                }
                else {
                    let opacity = model.getPartsOpacity(partsIndex);
                    // I can't understand this part, so just leave it original
                    let a1;
                    if (visibleOpacity < phi) {
                        a1 = (visibleOpacity * (phi - 1)) / phi + 1;
                    }
                    else {
                        a1 = ((1 - visibleOpacity) * phi) / (1 - phi);
                    }
                    let backOp = (1 - a1) * (1 - visibleOpacity);
                    if (backOp > maxBackOpacity) {
                        a1 = 1 - maxBackOpacity / (1 - visibleOpacity);
                    }
                    if (opacity > a1) {
                        opacity = a1;
                    }
                    model.setPartsOpacity(partsIndex, opacity);
                }
            }
        });
    }
    copyOpacity(partsGroup) {
        const model = this.coreModel;
        partsGroup.forEach(({ partsIndex, link }) => {
            if (partsIndex >= 0 && link) {
                const opacity = model.getPartsOpacity(partsIndex);
                link.forEach(({ partsIndex }) => {
                    if (partsIndex >= 0) {
                        model.setPartsOpacity(partsIndex, opacity);
                    }
                });
            }
        });
    }
    update(dt) {
        this.partsGroups.forEach(partGroup => {
            this.normalizePartsOpacityGroup(partGroup, dt);
            this.copyOpacity(partGroup);
        });
    }
}

// EXTERNAL MODULE: ./src/factory/Live2DFactory.ts + 2 modules
var Live2DFactory = __webpack_require__(4);

// CONCATENATED MODULE: ./src/cubism2/factory.ts





Live2DFactory["a" /* Live2DFactory */].registerRuntime({
    version: 2,
    test(source) {
        return source instanceof Cubism2ModelSettings_Cubism2ModelSettings || Cubism2ModelSettings_Cubism2ModelSettings.isValidJSON(source);
    },
    ready() {
        return Promise.resolve();
    },
    isValidMoc(modelData) {
        if (modelData.byteLength < 3) {
            return false;
        }
        const view = new Int8Array(modelData, 0, 3);
        return String.fromCharCode(...view) === 'moc';
    },
    createModelSettings(json) {
        return new Cubism2ModelSettings_Cubism2ModelSettings(json);
    },
    createCoreModel(data) {
        const model = Live2DModelWebGL.loadModel(data);
        const error = Live2D.getError();
        if (error)
            throw error;
        return model;
    },
    createInternalModel(coreModel, settings, options) {
        return new Cubism2InternalModel_Cubism2InternalModel(coreModel, settings, options);
    },
    createPose(coreModel, data) {
        return new Live2DPose_Live2DPose(coreModel, data);
    },
    createPhysics(coreModel, data) {
        return new Live2DPhysics(coreModel, data);
    },
});

// CONCATENATED MODULE: ./src/cubism2/index.ts













/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.Live2D) {
    throw new Error('Cannot find Cubism 2 runtime. Did you forget to include the live2d.min.js?');
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.Live2DCubismCore) {
    throw new Error('Cannot find Cubism 4 runtime. Did you forget to include the live2dcubismcore.min.js?');
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_WIDTH", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGICAL_HEIGHT", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionManager", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusController", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelSettings", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPriority", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionState", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPreloadStrategy", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionManager", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundManager", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalModel", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DModel", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DTransform", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionMixin", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DFactory", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DLoader", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRLoader", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileLoader", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZipLoader", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyArray", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "folderName", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["z"]; });

/* harmony import */ var _cubism2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism2ExpressionManager", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism2InternalModel", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism2ModelSettings", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism2MotionManager", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DExpression", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DEyeBlink", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DPhysics", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live2DPose", function() { return _cubism2__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony import */ var _cubism4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism4ExpressionManager", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism4ModelSettings", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism4MotionManager", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubism4InternalModel", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubism4Ready", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startUpCubism4", function() { return _cubism4__WEBPACK_IMPORTED_MODULE_2__["f"]; });






/***/ })
/******/ ]);
});

});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(lib);

export default __pika_web_default_export_for_treeshaking__;
