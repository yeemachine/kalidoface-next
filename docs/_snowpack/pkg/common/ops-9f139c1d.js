import { B as op, C as convertToTensor, D as makeTypesMatch, E as ENGINE, F as BatchMatMul, O as OneHot, f as assert, G as Transpose, H as assertNonNull, I as inferShape, J as makeTensor, e as env, T as Tensor, n as cast, K as getKernel, L as FromPixels, M as Add, N as FloorDiv, R as RealDiv, P as ComplexAbs, Q as Abs, S as Acos, U as Acosh, q as arraysEqual, V as AddN, W as All, X as Any, Y as ArgMax, Z as ArgMin, _ as Asin, $ as Asinh, a0 as Atan, a1 as Atan2, a2 as Atanh, a3 as eitherStridesOrDilationsAreOne, j as reshape, a4 as isInt, a5 as AvgPool, a6 as AvgPool3D, a7 as convertToTensorArray, c as clone, a8 as Concat, a9 as Slice, aa as Tanh, ab as BatchToSpaceND, ac as FusedBatchNorm, ad as Bincount, ae as Tile, af as Ceil, ag as ClipByValue, ah as Conv2D, ai as Conv2DBackpropInput, aj as Conv3D, ak as Cos, al as Cosh, am as Cumsum, an as DenseBincount, ao as DepthToSpace, ap as DepthwiseConv2dNative, aq as Dilation2D, ar as assertAndGetBroadcastShape, as as Equal, at as Select, au as ZerosLike, av as Einsum, aw as Erf, ax as Exp, ay as ExpandDims, az as Expm1, aA as buffer, aB as Fill, aC as Floor, aD as GatherV2, aE as Greater, aF as GreaterEqual, aG as Imag, aH as IsNan, aI as Less, aJ as LessEqual, aK as LinSpace, aL as LRN, aM as Log, aN as Log1p, aO as isFunction, aP as assertShapesMatch, aQ as Variable, aR as Neg, aS as Softplus, aT as Max, aU as Sub, o as sum, m as mul, aV as parseAxisParam, aW as expandShapeToKeepDim, aX as LogicalAnd, aY as LogicalNot, aZ as LogicalOr, a_ as MaxPool, a$ as MaxPool3D, b0 as MaxPoolWithArgmax, b1 as Maximum, b2 as Mean, z as zeros, d as complex, b3 as makeOnesTypedArray, b4 as sizeFromShape, b5 as Min, b6 as Minimum, b7 as MirrorPad, b8 as Mod, b9 as Multinomial, ba as NotEqual, bb as OnesLike, bc as PadV2, bd as SpaceToBatchND, be as Pow, bf as Prod, bg as Range, bh as Real, bi as Reciprocal, bj as Reverse, bk as Round, bl as Rsqrt, bm as Selu, bn as TensorBuffer, bo as Sign, bp as Sin, bq as Sinh, br as Softmax, bs as FFT, bt as IFFT, g as scalar, bu as SplitV, bv as Sqrt, bw as SquaredDifference, bx as squeezeShape, by as Pack, bz as StridedSlice, bA as Tan, bB as TopK, bC as Unique, bD as Unpack, bE as whereImpl, bF as validateInput$1, bG as ScatterNd, bH as SparseToDense, bI as GatherNd, bJ as Conv2DBackpropFilter, bK as shouldFuse, bL as applyActivation, bM as computeConv2DInfo, bN as FusedConv2D, bO as getFusedDyActivation, bP as tupleValuesAreOne, bQ as getFusedBiasGradient, bR as DepthwiseConv2dNativeBackpropFilter, bS as DepthwiseConv2dNativeBackpropInput, bT as FusedDepthwiseConv2D, bU as _FusedMatMul, bV as CropAndResize, bW as FlipLeftRight, bX as RotateWithOffset, bY as NonMaxSuppressionV3, bZ as nonMaxSuppressionV3Impl, b_ as NonMaxSuppressionV5, b$ as nonMaxSuppressionV5Impl, c0 as NonMaxSuppressionV4, c1 as nonMaxSuppressionV4Impl, c2 as ResizeBilinear, c3 as ResizeNearestNeighbor, h as tensor, c4 as Transform, c5 as dispose, a as relu, c6 as SparseFillEmptyRows, c7 as SparseReshape, c8 as SparseSegmentMean, c9 as SparseSegmentSum, ca as StringNGrams, cb as StringSplit, cc as StringToHashBucketFast } from './non_max_suppression_impl-9daabd29.js';
import { a as createCommonjsModule, c as commonjsGlobal, g as getDefaultExportFromNamespaceIfNotNamed } from './_commonjsHelpers-8a10f9bf.js';

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the dot product of two matrices, A * B. These must be matrices.
 *
 * ```js
 * const a = tf.tensor2d([1, 2], [1, 2]);
 * const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * a.matMul(b).print();  // or tf.matMul(a, b)
 * ```
 * @param a First matrix in dot product operation.
 * @param b Second matrix in dot product operation.
 * @param transposeA If true, `a` is transposed before multiplication.
 * @param transposeB If true, `b` is transposed before multiplication.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
function matMul_(a, b, transposeA = false, transposeB = false) {
    let $a = convertToTensor(a, 'a', 'matMul');
    let $b = convertToTensor(b, 'b', 'matMul');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    const attrs = { transposeA, transposeB };
    return ENGINE.runKernel(BatchMatMul, inputs, attrs);
}
const matMul = op({ matMul_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a one-hot `tf.Tensor`. The locations represented by `indices` take
 * value `onValue` (defaults to 1), while all other locations take value
 * `offValue` (defaults to 0). If `indices` is rank `R`, the output has rank
 * `R+1` with the last axis of size `depth`.
 *
 * ```js
 * tf.oneHot(tf.tensor1d([0, 1], 'int32'), 3).print();
 * ```
 *
 * @param indices `tf.Tensor` of indices with dtype `int32`.
 * @param depth The depth of the one hot dimension.
 * @param onValue A number used to fill in the output when the index matches
 * the location.
 * @param offValue A number used to fill in the output when the index does
 *     not match the location.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function oneHot_(indices, depth, onValue = 1, offValue = 0) {
    if (depth < 2) {
        throw new Error(`Error in oneHot: depth must be >=2, but it is ${depth}`);
    }
    const $indices = convertToTensor(indices, 'indices', 'oneHot', 'int32');
    const inputs = { indices: $indices };
    const attrs = { depth, onValue, offValue };
    return ENGINE.runKernel(OneHot, inputs, attrs);
}
const oneHot = op({ oneHot_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Transposes the `tf.Tensor`. Permutes the dimensions according to `perm`.
 *
 * The returned `tf.Tensor`'s dimension `i` will correspond to the input
 * dimension `perm[i]`. If `perm` is not given, it is set to `[n-1...0]`,
 * where `n` is the rank of the input `tf.Tensor`. Hence by default, this
 * operation performs a regular matrix transpose on 2-D input `tf.Tensor`s.
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4, 5, 6], [2, 3]);
 *
 * a.transpose().print();  // or tf.transpose(a)
 * ```
 *
 * @param x The tensor to transpose.
 * @param perm The permutation of the dimensions of a.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
function transpose_(x, perm) {
    const $x = convertToTensor(x, 'x', 'transpose');
    if (perm == null) {
        perm = $x.shape.map((s, i) => i).reverse();
    }
    assert($x.rank === perm.length, () => `Error in transpose: rank of input ${$x.rank} ` +
        `must match length of perm ${perm}.`);
    perm.forEach(axis => {
        assert(axis >= 0 && axis < $x.rank, () => `All entries in 'perm' must be between 0 and ${$x.rank - 1}` +
            ` but got ${perm}`);
    });
    if ($x.rank <= 1) {
        return $x.clone();
    }
    const inputs = { x: $x };
    const attrs = { perm };
    return ENGINE.runKernel(Transpose, inputs, attrs);
}
const transpose = op({ transpose_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates rank-3 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor3d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor3d([[[1], [2]], [[3], [4]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. If not provided,  it is inferred from
 *     `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor3d(values, shape, dtype) {
    assertNonNull(values);
    if (shape != null && shape.length !== 3) {
        throw new Error('tensor3d() requires shape to have three numbers');
    }
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 3 && inferredShape.length !== 1) {
        throw new Error('tensor3d() requires values to be number[][][] or flat/TypedArray');
    }
    if (inferredShape.length === 1 && shape == null) {
        throw new Error('tensor3d() requires shape to be provided when `values` ' +
            'are a flat array');
    }
    return makeTensor(values, shape, inferredShape, dtype);
}

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let fromPixels2DContext;
/**
 * Creates a `tf.Tensor` from an image.
 *
 * ```js
 * const image = new ImageData(1, 1);
 * image.data[0] = 100;
 * image.data[1] = 150;
 * image.data[2] = 200;
 * image.data[3] = 255;
 *
 * tf.browser.fromPixels(image).print();
 * ```
 *
 * @param pixels The input image to construct the tensor from. The
 * supported image types are all 4-channel. You can also pass in an image
 * object with following attributes:
 * `{data: Uint8Array; width: number; height: number}`
 * @param numChannels The number of channels of the output tensor. A
 * numChannels value less than 4 allows you to ignore channels. Defaults to
 * 3 (ignores alpha channel of input image).
 *
 * @returns A Tensor3D with the shape `[height, width, numChannels]`.
 *
 * @doc {heading: 'Browser', namespace: 'browser', ignoreCI: true}
 */
function fromPixels_(pixels, numChannels = 3) {
    // Sanity checks.
    if (numChannels > 4) {
        throw new Error('Cannot construct Tensor with more than 4 channels from pixels.');
    }
    if (pixels == null) {
        throw new Error('pixels passed to tf.browser.fromPixels() can not be null');
    }
    let isPixelData = false;
    let isImageData = false;
    let isVideo = false;
    let isImage = false;
    let isCanvasLike = false;
    let isImageBitmap = false;
    if (pixels.data instanceof Uint8Array) {
        isPixelData = true;
    }
    else if (typeof (ImageData) !== 'undefined' && pixels instanceof ImageData) {
        isImageData = true;
    }
    else if (typeof (HTMLVideoElement) !== 'undefined' &&
        pixels instanceof HTMLVideoElement) {
        isVideo = true;
    }
    else if (typeof (HTMLImageElement) !== 'undefined' &&
        pixels instanceof HTMLImageElement) {
        isImage = true;
        // tslint:disable-next-line: no-any
    }
    else if (pixels.getContext != null) {
        isCanvasLike = true;
    }
    else if (typeof (ImageBitmap) !== 'undefined' && pixels instanceof ImageBitmap) {
        isImageBitmap = true;
    }
    else {
        throw new Error('pixels passed to tf.browser.fromPixels() must be either an ' +
            `HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData ` +
            `in browser, or OffscreenCanvas, ImageData in webworker` +
            ` or {data: Uint32Array, width: number, height: number}, ` +
            `but was ${pixels.constructor.name}`);
    }
    if (isVideo) {
        const HAVE_CURRENT_DATA_READY_STATE = 2;
        if (isVideo &&
            pixels.readyState <
                HAVE_CURRENT_DATA_READY_STATE) {
            throw new Error('The video element has not loaded data yet. Please wait for ' +
                '`loadeddata` event on the <video> element.');
        }
    }
    // If the current backend has 'FromPixels' registered, it has a more
    // efficient way of handling pixel uploads, so we call that.
    const kernel = getKernel(FromPixels, ENGINE.backendName);
    if (kernel != null) {
        const inputs = { pixels };
        const attrs = { numChannels };
        return ENGINE.runKernel(FromPixels, inputs, attrs);
    }
    const [width, height] = isVideo ?
        [
            pixels.videoWidth,
            pixels.videoHeight
        ] :
        [pixels.width, pixels.height];
    let vals;
    if (isCanvasLike) {
        vals =
            // tslint:disable-next-line:no-any
            pixels.getContext('2d').getImageData(0, 0, width, height).data;
    }
    else if (isImageData || isPixelData) {
        vals = pixels.data;
    }
    else if (isImage || isVideo || isImageBitmap) {
        if (fromPixels2DContext == null) {
            fromPixels2DContext = document.createElement('canvas').getContext('2d');
        }
        fromPixels2DContext.canvas.width = width;
        fromPixels2DContext.canvas.height = height;
        fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
        vals = fromPixels2DContext.getImageData(0, 0, width, height).data;
    }
    let values;
    if (numChannels === 4) {
        values = new Int32Array(vals);
    }
    else {
        const numPixels = width * height;
        values = new Int32Array(numPixels * numChannels);
        for (let i = 0; i < numPixels; i++) {
            for (let channel = 0; channel < numChannels; ++channel) {
                values[i * numChannels + channel] = vals[i * 4 + channel];
            }
        }
    }
    const outShape = [height, width, numChannels];
    return tensor3d(values, outShape, 'int32');
}
// Helper functions for |fromPixelsAsync| to check whether the input can
// be wrapped into imageBitmap.
function isPixelData(pixels) {
    return (pixels != null) && (pixels.data instanceof Uint8Array);
}
function isImageBitmapFullySupported() {
    return typeof window !== 'undefined' &&
        typeof (ImageBitmap) !== 'undefined' &&
        window.hasOwnProperty('createImageBitmap');
}
function isNonEmptyPixels(pixels) {
    return pixels != null && pixels.width !== 0 && pixels.height !== 0;
}
function canWrapPixelsToImageBitmap(pixels) {
    return isImageBitmapFullySupported() && !(pixels instanceof ImageBitmap) &&
        isNonEmptyPixels(pixels) && !isPixelData(pixels);
}
/**
 * Creates a `tf.Tensor` from an image in async way.
 *
 * ```js
 * const image = new ImageData(1, 1);
 * image.data[0] = 100;
 * image.data[1] = 150;
 * image.data[2] = 200;
 * image.data[3] = 255;
 *
 * (await tf.browser.fromPixelsAsync(image)).print();
 * ```
 * This API is the async version of fromPixels. The API will first
 * check |WRAP_TO_IMAGEBITMAP| flag, and try to wrap the input to
 * imageBitmap if the flag is set to true.
 *
 * @param pixels The input image to construct the tensor from. The
 * supported image types are all 4-channel. You can also pass in an image
 * object with following attributes:
 * `{data: Uint8Array; width: number; height: number}`
 * @param numChannels The number of channels of the output tensor. A
 * numChannels value less than 4 allows you to ignore channels. Defaults to
 * 3 (ignores alpha channel of input image).
 *
 * @doc {heading: 'Browser', namespace: 'browser', ignoreCI: true}
 */
async function fromPixelsAsync(pixels, numChannels = 3) {
    let inputs = null;
    // Check whether the backend needs to wrap |pixels| to imageBitmap and
    // whether |pixels| can be wrapped to imageBitmap.
    if (env().getBool('WRAP_TO_IMAGEBITMAP') &&
        canWrapPixelsToImageBitmap(pixels)) {
        // Force the imageBitmap creation to not do any premultiply alpha
        // ops.
        let imageBitmap;
        try {
            // wrap in try-catch block, because createImageBitmap may not work
            // properly in some browsers, e.g.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1335594
            // tslint:disable-next-line: no-any
            imageBitmap = await createImageBitmap(pixels, { premultiplyAlpha: 'none' });
        }
        catch (e) {
            imageBitmap = null;
        }
        // createImageBitmap will clip the source size.
        // In some cases, the input will have larger size than its content.
        // E.g. new Image(10, 10) but with 1 x 1 content. Using
        // createImageBitmap will clip the size from 10 x 10 to 1 x 1, which
        // is not correct. We should avoid wrapping such resouce to
        // imageBitmap.
        if (imageBitmap != null && imageBitmap.width === pixels.width &&
            imageBitmap.height === pixels.height) {
            inputs = imageBitmap;
        }
        else {
            inputs = pixels;
        }
    }
    else {
        inputs = pixels;
    }
    return fromPixels_(inputs, numChannels);
}
/**
 * Draws a `tf.Tensor` of pixel values to a byte array or optionally a
 * canvas.
 *
 * When the dtype of the input is 'float32', we assume values in the range
 * [0-1]. Otherwise, when input is 'int32', we assume values in the range
 * [0-255].
 *
 * Returns a promise that resolves when the canvas has been drawn to.
 *
 * @param img A rank-2 tensor with shape `[height, width]`, or a rank-3 tensor
 * of shape `[height, width, numChannels]`. If rank-2, draws grayscale. If
 * rank-3, must have depth of 1, 3 or 4. When depth of 1, draws
 * grayscale. When depth of 3, we draw with the first three components of
 * the depth dimension corresponding to r, g, b and alpha = 1. When depth of
 * 4, all four components of the depth dimension correspond to r, g, b, a.
 * @param canvas The canvas to draw to.
 *
 * @doc {heading: 'Browser', namespace: 'browser'}
 */
async function toPixels(img, canvas) {
    let $img = convertToTensor(img, 'img', 'toPixels');
    if (!(img instanceof Tensor)) {
        // Assume int32 if user passed a native array.
        const originalImgTensor = $img;
        $img = cast(originalImgTensor, 'int32');
        originalImgTensor.dispose();
    }
    if ($img.rank !== 2 && $img.rank !== 3) {
        throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${$img.rank}.`);
    }
    const [height, width] = $img.shape.slice(0, 2);
    const depth = $img.rank === 2 ? 1 : $img.shape[2];
    if (depth > 4 || depth === 2) {
        throw new Error(`toPixels only supports depth of size ` +
            `1, 3 or 4 but got ${depth}`);
    }
    if ($img.dtype !== 'float32' && $img.dtype !== 'int32') {
        throw new Error(`Unsupported type for toPixels: ${$img.dtype}.` +
            ` Please use float32 or int32 tensors.`);
    }
    const data = await $img.data();
    const multiplier = $img.dtype === 'float32' ? 255 : 1;
    const bytes = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < height * width; ++i) {
        const rgba = [0, 0, 0, 255];
        for (let d = 0; d < depth; d++) {
            const value = data[i * depth + d];
            if ($img.dtype === 'float32') {
                if (value < 0 || value > 1) {
                    throw new Error(`Tensor values for a float32 Tensor must be in the ` +
                        `range [0 - 1] but encountered ${value}.`);
                }
            }
            else if ($img.dtype === 'int32') {
                if (value < 0 || value > 255) {
                    throw new Error(`Tensor values for a int32 Tensor must be in the ` +
                        `range [0 - 255] but encountered ${value}.`);
                }
            }
            if (depth === 1) {
                rgba[0] = value * multiplier;
                rgba[1] = value * multiplier;
                rgba[2] = value * multiplier;
            }
            else {
                rgba[d] = value * multiplier;
            }
        }
        const j = i * 4;
        bytes[j + 0] = Math.round(rgba[0]);
        bytes[j + 1] = Math.round(rgba[1]);
        bytes[j + 2] = Math.round(rgba[2]);
        bytes[j + 3] = Math.round(rgba[3]);
    }
    if (canvas != null) {
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imageData = new ImageData(bytes, width, height);
        ctx.putImageData(imageData, 0, 0);
    }
    if ($img !== img) {
        $img.dispose();
    }
    return bytes;
}
const fromPixels = op({ fromPixels_ });

var browser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fromPixelsAsync: fromPixelsAsync,
    toPixels: toPixels,
    fromPixels: fromPixels
});

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Adds two `tf.Tensor`s element-wise, A + B. Supports broadcasting.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3, 4]);
 * const b = tf.tensor1d([10, 20, 30, 40]);
 *
 * a.add(b).print();  // or tf.add(a, b)
 * ```
 *
 * ```js
 * // Broadcast add a with b.
 * const a = tf.scalar(5);
 * const b = tf.tensor1d([10, 20, 30, 40]);
 *
 * a.add(b).print();  // or tf.add(a, b)
 * ```
 * @param a The first `tf.Tensor` to add.
 * @param b The second `tf.Tensor` to add. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function add_(a, b) {
    let $a = convertToTensor(a, 'a', 'add');
    let $b = convertToTensor(b, 'b', 'add');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Add, inputs);
}
const add = op({ add_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting.
 * The result is rounded with floor function.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.floorDiv(b).print();  // or tf.div(a, b)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 *
 * a.floorDiv(b).print();  // or tf.floorDiv(a, b)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function floorDiv_(a, b) {
    let $a = convertToTensor(a, 'a', 'floorDiv');
    let $b = convertToTensor(b, 'b', 'floorDiv');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(FloorDiv, inputs);
}
const floorDiv = op({ floorDiv_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.div(b).print();  // or tf.div(a, b)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 *
 * a.div(b).print();  // or tf.div(a, b)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function div_(a, b) {
    let $a = convertToTensor(a, 'a', 'div');
    let $b = convertToTensor(b, 'b', 'div');
    [$a, $b] = makeTypesMatch($a, $b);
    if ($a.dtype === 'int32' && $b.dtype === 'int32') {
        return floorDiv($a, $b);
    }
    const inputs = { a: $a, b: $b };
    const attrs = {};
    // tslint:disable-next-line: no-unnecessary-type-assertion
    return ENGINE.runKernel(RealDiv, inputs, attrs);
}
const div = op({ div_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes absolute value element-wise: `abs(x)`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.abs().print();  // or tf.abs(x)
 * ```
 * @param x The input `tf.Tensor`.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function abs_(x) {
    const $x = convertToTensor(x, 'x', 'abs');
    if ($x.dtype === 'complex64') {
        const inputs = { x: $x };
        return ENGINE.runKernel(ComplexAbs, inputs);
    }
    else {
        const inputs = { x: $x };
        return ENGINE.runKernel(Abs, inputs);
    }
}
const abs = op({ abs_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes acos of the input `tf.Tensor` element-wise: `acos(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.acos().print();  // or tf.acos(x)
 * ```
 * @param x The input tensor.
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function acos_(x) {
    const $x = convertToTensor(x, 'x', 'acos');
    const inputs = { x: $x };
    return ENGINE.runKernel(Acos, inputs);
}
const acos = op({ acos_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the inverse hyperbolic cos of the input `tf.Tensor` element-wise:
 * `acosh(x)`
 *
 * ```js
 * const x = tf.tensor1d([10, 1, 3, 5.7]);
 *
 * x.acosh().print();  // or tf.acosh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function acosh_(x) {
    const $x = convertToTensor(x, 'x', 'acosh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Acosh, inputs);
}
const acosh = op({ acosh_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Adds a list of `tf.Tensor`s element-wise, each with the same shape and dtype.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 *
 * tf.addN([a, b, c]).print();
 * ```
 * @param tensors A list of tensors with the same shape and dtype.
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function addN_(tensors) {
    assert(Array.isArray(tensors), () => 'The argument passed to tf.addN() must be a list of tensors');
    assert(tensors.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ` +
        `${tensors.length}`);
    const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, 'addN'));
    const firstTensor = $tensors[0];
    $tensors.forEach(t => {
        if (t.dtype !== firstTensor.dtype) {
            throw new Error('All tensors passed to tf.addN() must have the same dtype');
        }
    });
    $tensors.forEach(t => {
        if (!arraysEqual(t.shape, firstTensor.shape)) {
            throw new Error('All tensors passed to tf.addN() must have the same shape');
        }
    });
    const inputs = $tensors;
    return ENGINE.runKernel(AddN, inputs);
}
const addN = op({ addN_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the logical and of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 1, 1], 'bool');
 *
 * x.all().print();  // or tf.all(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 1, 0, 0], [2, 2], 'bool');
 *
 * const axis = 1;
 * x.all(axis).print();  // or tf.all(x, axis)
 * ```
 *
 * @param x The input tensor. Must be of dtype bool.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function all_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'all', 'bool');
    const inputs = { x: $x };
    const attrs = { axis, keepDims };
    return ENGINE.runKernel(All, inputs, attrs);
}
const all = op({ all_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the logical or of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 1, 1], 'bool');
 *
 * x.any().print();  // or tf.any(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 1, 0, 0], [2, 2], 'bool');
 *
 * const axis = 1;
 * x.any(axis).print();  // or tf.any(x, axis)
 * ```
 *
 * @param x The input tensor. Must be of dtype bool.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function any_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'any', 'bool');
    const inputs = { x: $x };
    const attrs = { axis, keepDims };
    return ENGINE.runKernel(Any, inputs, attrs);
}
// tslint:disable-next-line:variable-name
const any = op({ any_ });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the indices of the maximum values along an `axis`.
 *
 * The result has the same shape as `input` with the dimension along `axis`
 * removed.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.argMax().print();  // or tf.argMax(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 4, 3], [2, 2]);
 *
 * const axis = 1;
 * x.argMax(axis).print();  // or tf.argMax(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension to reduce. Defaults to 0 (outer-most dimension).
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function argMax_(x, axis = 0) {
    const $x = convertToTensor(x, 'x', 'argMax');
    const inputs = { x: $x };
    const attrs = { axis };
    return ENGINE.runKernel(ArgMax, inputs, attrs);
}
const argMax = op({ argMax_ });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the indices of the minimum values along an `axis`.
 *
 * The result has the same shape as `input` with the dimension along `axis`
 * removed.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.argMin().print();  // or tf.argMin(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 4, 3], [2, 2]);
 *
 * const axis = 1;
 * x.argMin(axis).print();  // or tf.argMin(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension to reduce. Defaults to 0 (outer-most dimension).
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function argMin_(x, axis = 0) {
    const $x = convertToTensor(x, 'x', 'argMin');
    const inputs = { x: $x };
    const attrs = { axis };
    return ENGINE.runKernel(ArgMin, inputs, attrs);
}
const argMin = op({ argMin_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes asin of the input `tf.Tensor` element-wise: `asin(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.asin().print();  // or tf.asin(x)
 * ```
 * @param x The input tensor.
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function asin_(x) {
    const $x = convertToTensor(x, 'x', 'asin');
    const inputs = { x: $x };
    return ENGINE.runKernel(Asin, inputs);
}
const asin = op({ asin_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes inverse hyperbolic sin of the input `tf.Tensor` element-wise:
 * `asinh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.asinh().print();  // or tf.asinh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function asinh_(x) {
    const $x = convertToTensor(x, 'x', 'asinh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Asinh, inputs);
}
const asinh = op({ asinh_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes atan of the input `tf.Tensor` element-wise: `atan(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.atan().print();  // or tf.atan(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function atan_(x) {
    const $x = convertToTensor(x, 'x', 'atan');
    const inputs = { x: $x };
    return ENGINE.runKernel(Atan, inputs);
}
const atan = op({ atan_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes arctangent of `tf.Tensor`s a / b element-wise: `atan2(a, b)`.
 * Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1.0, 1.0, -1.0, .7]);
 * const b = tf.tensor1d([2.0, 13.0, 3.5, .21]);
 *
 * tf.atan2(a, b).print()
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function atan2_(a, b) {
    let $a = convertToTensor(a, 'a', 'atan2');
    let $b = convertToTensor(b, 'b', 'atan2');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Atan2, inputs);
}
const atan2 = op({ atan2_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes inverse hyperbolic tan of the input `tf.Tensor` element-wise:
 * `atanh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, .1, -.1, .7]);
 *
 * x.atanh().print();  // or tf.atanh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function atanh_(x) {
    const $x = convertToTensor(x, 'x', 'atanh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Atanh, inputs);
}
const atanh = op({ atanh_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the 2D average pooling of an image.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param pad The type of padding algorithm:
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *         https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
function avgPool_(x, filterSize, strides, pad, dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'avgPool', 'float32');
    const dilations = 1;
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in avgPool: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in avgPool: x must be rank 4 but got rank ${x4D.rank}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in avgPool: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x4D };
    const attrs = { filterSize, strides, pad, dimRoundingMode };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    let res = ENGINE.runKernel(AvgPool, inputs, attrs);
    res = cast(res, $x.dtype);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const avgPool = op({ avgPool_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the 3D average pooling.
 *
 * ```js
 * const x = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
 * const result = tf.avgPool3d(x, 2, 1, 'valid');
 * result.print();
 * ```
 *
 * @param x The input tensor, of rank 5 or rank 4 of shape
 *     `[batch, depth, height, width, inChannels]`.
 * @param filterSize The filter size:
 *     `[filterDepth, filterHeight, filterWidth]`.
 *     If `filterSize` is a single number,
 *     then `filterDepth == filterHeight == filterWidth`.
 * @param strides The strides of the pooling:
 *     `[strideDepth, strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideDepth == strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function avgPool3d_(x, filterSize, strides, pad, dimRoundingMode, dataFormat = 'NDHWC') {
    const $x = convertToTensor(x, 'x', 'avgPool3d', 'float32');
    let x5D = $x;
    let reshapedTo5D = false;
    if ($x.rank === 4) {
        reshapedTo5D = true;
        x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
    }
    assert(x5D.rank === 5, () => `Error in avgPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
    assert(dataFormat === 'NDHWC', () => `Error in avgPool3d: Only NDHWC is currently supported, ` +
        `but got dataFormat of ${dataFormat}`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in avgPool3d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x5D };
    const attrs = { filterSize, strides, pad, dimRoundingMode, dataFormat };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    let res = ENGINE.runKernel(AvgPool3D, inputs, attrs);
    res = cast(res, x5D.dtype);
    if (reshapedTo5D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
    }
    return res;
}
const avgPool3d = op({ avgPool3d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Concatenates a list of `tf.Tensor`s along a given axis.
 *
 * The tensors ranks and types must match, and their sizes must match in all
 * dimensions except `axis`.
 *
 * Also available are stricter rank-specific methods that assert that
 * `tensors` are of the given rank:
 *   - `tf.concat1d`
 *   - `tf.concat2d`
 *   - `tf.concat3d`
 *   - `tf.concat4d`
 *
 * Except `tf.concat1d` (which does not have axis param), all methods have
 * same signature as this method.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * a.concat(b).print();  // or a.concat(b)
 * ```
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 * tf.concat([a, b, c]).print();
 * ```
 *
 * ```js
 * const a = tf.tensor2d([[1, 2], [10, 20]]);
 * const b = tf.tensor2d([[3, 4], [30, 40]]);
 * const axis = 1;
 * tf.concat([a, b], axis).print();
 * ```
 * @param tensors A list of tensors to concatenate.
 * @param axis The axis to concate along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function concat_(tensors, axis = 0) {
    assert(tensors.length >= 1, () => 'Pass at least one tensor to concat');
    const $tensors = convertToTensorArray(tensors, 'tensors', 'concat', 'string_or_numeric');
    if ($tensors[0].dtype === 'complex64') {
        $tensors.forEach(tensor => {
            if (tensor.dtype !== 'complex64') {
                throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${tensor.dtype}. `);
            }
        });
    }
    if ($tensors.length === 1) {
        return clone($tensors[0]);
    }
    const inputs = $tensors;
    const attr = { axis };
    return ENGINE.runKernel(Concat, inputs, attr);
}
const concat = op({ concat_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Extracts a slice from a `tf.Tensor` starting at coordinates `begin`
 * and is of size `size`.
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that `x` is of the given rank:
 *   - `tf.slice1d`
 *   - `tf.slice2d`
 *   - `tf.slice3d`
 *   - `tf.slice4d`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.slice([1], [2]).print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * x.slice([1, 0], [1, 2]).print();
 * ```
 * @param x The input `tf.Tensor` to slice from.
 * @param begin The coordinates to start the slice from. The length can be
 *     less than the rank of x - the rest of the axes will have implicit 0 as
 *     start. Can also be a single number, in which case it specifies the
 *     first axis.
 * @param size The size of the slice. The length can be less than the rank of
 *     x - the rest of the axes will have implicit -1. A value of -1 requests
 *     the rest of the dimensions in the axis. Can also be a single number,
 *     in which case it specifies the size of the first axis.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function slice_(x, begin, size) {
    const $x = convertToTensor(x, 'x', 'slice', 'string_or_numeric');
    if ($x.rank === 0) {
        throw new Error('Slicing scalar is not possible');
    }
    const inputs = { x: $x };
    const attrs = { begin, size };
    return ENGINE.runKernel(Slice, inputs, attrs);
}
const slice = op({ slice_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes hyperbolic tangent of the input `tf.Tensor` element-wise: `tanh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, 70]);
 *
 * x.tanh().print();  // or tf.tanh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function tanh_(x) {
    const $x = convertToTensor(x, 'x', 'tanh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Tanh, inputs);
}
const tanh = op({ tanh_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * This operation reshapes the "batch" dimension 0 into `M + 1` dimensions of
 * shape `blockShape + [batch]`, interleaves these blocks back into the grid
 * defined by the spatial dimensions `[1, ..., M]`, to obtain a result with
 * the same rank as the input. The spatial dimensions of this intermediate
 * result are then optionally cropped according to `crops` to produce the
 * output. This is the reverse of `tf.spaceToBatchND`. See below for a precise
 * description.
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [4, 1, 1, 1]);
 * const blockShape = [2, 2];
 * const crops = [[0, 0], [0, 0]];
 *
 * x.batchToSpaceND(blockShape, crops).print();
 * ```
 *
 * @param x A `tf.Tensor`. N-D with `x.shape` = `[batch] + spatialShape +
 * remainingShape`, where spatialShape has `M` dimensions.
 * @param blockShape A 1-D array. Must have shape `[M]`, all values must
 * be >= 1.
 * @param crops A 2-D array.  Must have shape `[M, 2]`, all values must be >= 0.
 * `crops[i] = [cropStart, cropEnd]` specifies the amount to crop from input
 * dimension `i + 1`, which corresponds to spatial dimension `i`. It is required
 * that `cropStart[i] + cropEnd[i] <= blockShape[i] * inputShape[i + 1]`
 *
 * This operation is equivalent to the following steps:
 *
 * 1. Reshape `x` to `reshaped` of shape: `[blockShape[0], ...,
 * blockShape[M-1], batch / prod(blockShape), x.shape[1], ...,
 * x.shape[N-1]]`
 *
 * 2. Permute dimensions of `reshaped`to produce `permuted` of shape `[batch /
 * prod(blockShape),x.shape[1], blockShape[0], ..., x.shape[M],
 * blockShape[M-1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * 3. Reshape `permuted` to produce `reshapedPermuted` of shape `[batch /
 * prod(blockShape),x.shape[1] * blockShape[0], ..., x.shape[M] *
 * blockShape[M-1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * 4. Crop the start and end of dimensions `[1, ..., M]` of `reshapedPermuted`
 * according to `crops` to produce the output of shape: `[batch /
 * prod(blockShape),x.shape[1] * blockShape[0] - crops[0,0] - crops[0,1],
 * ..., x.shape[M] * blockShape[M-1] - crops[M-1,0] -
 * crops[M-1,1],x.shape[M+1], ..., x.shape[N-1]]`
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function batchToSpaceND_(x, blockShape, crops) {
    const $x = convertToTensor(x, 'x', 'batchToSpaceND');
    const prod = blockShape.reduce((a, b) => a * b);
    assert($x.rank >= 1 + blockShape.length, () => `input rank is ${$x.rank} but should be > than blockShape.length ${blockShape.length}`);
    assert(crops.length === blockShape.length, () => `crops.length is ${crops.length} but should be equal to blockShape.length  ${blockShape.length}`);
    assert($x.shape[0] % prod === 0, () => `input tensor batch is ${$x.shape[0]} but is not divisible by the product of ` +
        `the elements of blockShape ${blockShape.join(' * ')} === ${prod}`);
    const inputs = { x: $x };
    const attrs = { blockShape, crops };
    return ENGINE.runKernel(BatchToSpaceND, inputs, attrs);
}
const batchToSpaceND = op({ batchToSpaceND_ });

function xAs4D(x) {
    let x4D;
    if (x.rank === 0 || x.rank === 1) {
        x4D = reshape(x, [1, 1, 1, x.size]);
    }
    else if (x.rank === 2) {
        x4D = reshape(x, [1, 1, x.shape[0], x.shape[1]]);
    }
    else if (x.rank === 3) {
        x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
    }
    else {
        x4D = x;
    }
    return x4D;
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Batch normalization.
 *
 * As described in
 * [http://arxiv.org/abs/1502.03167](http://arxiv.org/abs/1502.03167).
 *
 * Mean, variance, scale, and offset can be of two shapes:
 *   - The same shape as the input.
 *   - In the common case, the depth dimension is the last dimension of x, so
 *     the values would be an `tf.Tensor1D` of shape [depth].
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that parameters passed are of given rank
 *   - `tf.batchNorm2d`
 *   - `tf.batchNorm3d`
 *   - `tf.batchNorm4d`
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function batchNorm_(x, mean, variance, offset, scale, varianceEpsilon) {
    if (varianceEpsilon == null) {
        varianceEpsilon = 0.001;
    }
    const $x = convertToTensor(x, 'x', 'batchNorm');
    const $mean = convertToTensor(mean, 'mean', 'batchNorm');
    const $variance = convertToTensor(variance, 'variance', 'batchNorm');
    let $scale;
    if (scale != null) {
        $scale = convertToTensor(scale, 'scale', 'batchNorm');
    }
    let $offset;
    if (offset != null) {
        $offset = convertToTensor(offset, 'offset', 'batchNorm');
    }
    assert($mean.rank === $variance.rank, () => 'Batch normalization gradient requires mean and variance to have ' +
        'equal ranks.');
    assert($offset == null || $mean.rank === $offset.rank, () => 'Batch normalization gradient requires mean and offset to have ' +
        'equal ranks.');
    assert($scale == null || $mean.rank === $scale.rank, () => 'Batch normalization gradient requires mean and scale to have ' +
        'equal ranks.');
    const x4D = xAs4D($x);
    const inputs = {
        x: x4D,
        scale: $scale,
        offset: $offset,
        mean: $mean,
        variance: $variance
    };
    const attrs = { varianceEpsilon };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(FusedBatchNorm, inputs, attrs);
    return reshape(res, $x.shape);
}
const batchNorm = op({ batchNorm_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Outputs a vector with length `size` and the same dtype as `weights`.
 *
 * If `weights` are empty, then index `i` stores the number of times the value
 * `i` is counted in `x`. If `weights` are non-empty, then index `i` stores the
 * sum of the value in `weights` at each index where the corresponding value in
 * `x` is `i`.
 *
 * Values in `x` outside of the range [0, size) are ignored.
 *
 * @param x The input int tensor, rank 1.
 * @param weights The weights tensor, must have the same shape as x, or a
 *     length-0 Tensor, in which case it acts as all weights equal to 1.
 * @param size Non-negative integer.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function bincount_(x, weights, size) {
    const $x = convertToTensor(x, 'x', 'bincount');
    const $weights = convertToTensor(weights, 'weights', 'bincount');
    assert($x.dtype === 'int32', () => `Error in bincount: input ` +
        `dtype must be int32, but got ${$x.dtype}`);
    assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
    assert($weights.size === $x.size || $weights.size === 0, () => `Error in bincount: weights must have the same size as input or` +
        `0-length, but got input shape: ${$x.shape}, weights shape: ` +
        `${$weights.shape}.`);
    const inputs = { x: $x, weights: $weights };
    const attrs = { size };
    return ENGINE.runKernel(Bincount, inputs, attrs);
}
const bincount = op({ bincount_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Broadcast an array to a compatible shape NumPy-style.
 *
 * The tensor's shape is compared to the broadcast shape from end to beginning.
 * Ones are prepended to the tensor's shape until is has the same length as
 * the broadcast shape. If input.shape[i]==shape[i], the (i+1)-th axis is
 * already broadcast-compatible. If input.shape[i]==1 and shape[i]==N, then
 * the input tensor is tiled N times along that axis (using tf.tile).
 *
 * @param input The tensor that is to be broadcasted.
 * @param shape The input is to be broadcast to this shape.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function broadcastTo_(x, shape) {
    let input = convertToTensor(x, 'broadcastTo', 'x');
    const xShape = input.shape;
    if (shape.some(d => !(d > 0) || d % 1 !== 0)) {
        throw new Error(`broadcastTo(): Invalid broadcast shape [${shape}].`);
    }
    if (shape.length < input.rank) {
        throw new Error(`broadcastTo(): shape.length=${shape.length} < input.rank=${input.rank}.`);
    }
    if (shape.length > input.rank) {
        const newShape = input.shape.slice();
        while (newShape.length < shape.length) {
            newShape.unshift(1);
        }
        input = reshape(input, newShape);
    }
    const inputShape = input.shape;
    const reps = Array.from(shape);
    for (let i = shape.length - 1; i >= 0; i--) {
        if (inputShape[i] === shape[i]) {
            reps[i] = 1;
        }
        else if (input.shape[i] !== 1) {
            throw new Error(`broadcastTo(): [${xShape}] cannot be broadcast to [${shape}].`);
        }
    }
    const axes = reps.map((n, i) => n > 1 ? i : -1).filter(i => i >= 0);
    if (axes.length === 0) {
        return clone(input);
    }
    // TODO call broadcastTo kernel directly once backends implement broadcstTo
    const inputs = { x: input };
    const attrs = { reps };
    return ENGINE.runKernel(Tile, inputs, attrs);
}
const broadcastTo = op({ broadcastTo_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes ceiling of input `tf.Tensor` element-wise: `ceil(x)`
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.ceil().print();  // or tf.ceil(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function ceil_(x) {
    const $x = convertToTensor(x, 'x', 'ceil');
    const inputs = { x: $x };
    return ENGINE.runKernel(Ceil, inputs);
}
const ceil = op({ ceil_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Clips values element-wise. `max(min(x, clipValueMax), clipValueMin)`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.clipByValue(-2, 3).print();  // or tf.clipByValue(x, -2, 3)
 * ```
 * @param x The input tensor.
 * @param clipValueMin Lower-bound of range to be clipped to.
 * @param clipValueMax Upper-bound of range to be clipped to.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function clipByValue_(x, clipValueMin, clipValueMax) {
    const $x = convertToTensor(x, 'x', 'clipByValue');
    assert((clipValueMin <= clipValueMax), () => `Error in clip: min (${clipValueMin}) must be ` +
        `less than or equal to max (${clipValueMax}).`);
    const inputs = { x: $x };
    const attrs = { clipValueMin, clipValueMax };
    return ENGINE.runKernel(ClipByValue, inputs, attrs);
}
const clipByValue = op({ clipByValue_ });

/**
 * Concatenates a list of`tf.Tensor2D`s along an axis. See `concat` for details.
 *
 * For example, if:
 * A: shape(2, 3) = | r1, g1, b1 |
 *                  | r2, g2, b2 |
 *
 * B: shape(2, 3) = | r3, g3, b3 |
 *                  | r4, g4, b4 |
 *
 * C = tf.concat2d([A, B], axis)
 *
 * if axis = 0:
 * C: shape(4, 3) = | r1, g1, b1 |
 *                  | r2, g2, b2 |
 *                  | r3, g3, b3 |
 *                  | r4, g4, b4 |
 *
 * if axis = 1:
 * C = shape(2, 6) = | r1, g1, b1, r3, g3, b3 |
 *                   | r2, g2, b2, r4, g4, b4 |
 *
 *
 * @param tensors A list of `tf.Tensor`s to concatenate.
 * @param axis The axis to concatenate along.
 * @return The concatenated array.
 */
function concat2d_(tensors, axis) {
    return concat(tensors, axis);
}
const concat2d = op({ concat2d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes a 2D convolution over the input x.
 *
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels].
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function conv2d_(x, filter, strides, pad, dataFormat = 'NHWC', dilations = [1, 1], dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'conv2d');
    const $filter = convertToTensor(filter, 'filter', 'conv2d');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in conv2d: input must be rank 4, but got rank ${x4D.rank}.`);
    assert($filter.rank === 4, () => `Error in conv2d: filter must be rank 4, but got rank ` +
        `${$filter.rank}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in conv2d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inDepth = dataFormat === 'NHWC' ? x4D.shape[3] : x4D.shape[1];
    assert(inDepth === $filter.shape[2], () => `Error in conv2d: depth of input (${inDepth}) must match ` +
        `input depth for filter ${$filter.shape[2]}.`);
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in conv2D: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    const inputs = { x: x4D, filter: $filter };
    const attrs = { strides, pad, dataFormat, dilations, dimRoundingMode };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(Conv2D, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const conv2d = op({ conv2d_ });

/**
 * Computes a 1D convolution over the input x.
 *
 * @param x The input tensor, of rank 3 or rank 2, of shape
 *     `[batch, width, inChannels]`. If rank 2, batch of 1 is assumed.
 * @param filter The filter, rank 3, of shape
 *     `[filterWidth, inDepth, outDepth]`.
 * @param stride The number of entries by which the filter is moved right at
 *     each step.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat An optional string from "NWC", "NCW". Defaults to "NWC",
 *     the data is stored in the order of [batch, in_width, in_channels]. Only
 *     "NWC" is currently supported.
 * @param dilation The dilation rate in which we sample input values in
 *     atrous convolution. Defaults to `1`. If it is greater than 1, then
 *     stride must be `1`.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function conv1d_(x, filter, stride, pad, dataFormat = 'NWC', dilation = 1, dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'conv1d');
    const $filter = convertToTensor(filter, 'filter', 'conv1d');
    let x3D = $x;
    let reshapedTo3D = false;
    if ($x.rank === 2) {
        reshapedTo3D = true;
        x3D = reshape($x, [1, $x.shape[0], $x.shape[1]]);
    }
    assert(x3D.rank === 3, () => `Error in conv1d: input must be rank 3, but got rank ${x3D.rank}.`);
    assert($filter.rank === 3, () => `Error in conv1d: filter must be rank 3, but got rank ` +
        `${$filter.rank}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in conv1d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    assert(x3D.shape[2] === $filter.shape[1], () => `Error in conv1d: depth of input (${x3D.shape[2]}) must match ` +
        `input depth for filter ${$filter.shape[1]}.`);
    assert(eitherStridesOrDilationsAreOne(stride, dilation), () => 'Error in conv1D: Either stride or dilation must be 1. ' +
        `Got stride ${stride} and dilation '${dilation}'`);
    assert(dataFormat === 'NWC', () => `Error in conv1d: got dataFormat of ${dataFormat} but only NWC is currently supported.`);
    const filter4D = reshape($filter, [1, $filter.shape[0], $filter.shape[1], $filter.shape[2]]);
    const input4D = reshape(x3D, [x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]]);
    const strides = [1, stride];
    const dilations = [1, dilation];
    const conv2dDataFormat = 'NHWC';
    const res = conv2d(input4D, filter4D, strides, pad, conv2dDataFormat, dilations, dimRoundingMode);
    if (reshapedTo3D) {
        return reshape(res, [res.shape[2], res.shape[3]]);
    }
    return reshape(res, [res.shape[0], res.shape[2], res.shape[3]]);
}
const conv1d = op({ conv1d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the derivative of the input of a 2D convolution.
 *
 * @param xShape The shape of the input: [batch, height, width, inDepth].
 * If length of 3, batch of 1 is assumed.
 * @param dy The derivative of the output, of rank 4 or rank 3 of shape
 *   `[batch, outHeight, outWidth, outDepth]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm used:
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels].
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
function conv2DBackpropInput_(xShape, dy, filter, strides, pad, dataFormat = 'NHWC', dimRoundingMode) {
    assert(xShape.length === dy.rank, () => `Length of inShape ` +
        `(${xShape.length}) and rank of dy (${dy.rank}) must match`);
    let xShape4D = xShape;
    let dy4D = dy;
    let reshapedTo4D = false;
    if (dy.rank === 3) {
        reshapedTo4D = true;
        dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
        xShape4D = [1, xShape[0], xShape[1], xShape[2]];
    }
    assert(xShape4D.length === 4, () => `Error in conv2dDerInput: inShape must be length 4, but got length ` +
        `${xShape4D.length}.`);
    assert(dy4D.rank === 4, () => `Error in conv2dDerInput: dy must be rank 4, but got ` +
        `rank ${dy4D.rank}`);
    assert(filter.rank === 4, () => `Error in conv2dDerInput: filter must be rank 4, but got ` +
        `rank ${filter.rank}`);
    const inDepth = dataFormat === 'NHWC' ? xShape4D[3] : xShape4D[1];
    const outDepth = dataFormat === 'NHWC' ? dy4D.shape[3] : dy4D.shape[1];
    assert(inDepth === filter.shape[2], () => `Error in conv2dDerInput: depth of input (${inDepth}) must ` +
        `match input depth for filter ${filter.shape[2]}.`);
    assert(outDepth === filter.shape[3], () => `Error in conv2dDerInput: depth of output (${outDepth}) must ` +
        `match output depth for filter ${filter.shape[3]}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in conv2dDerInput: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { dy: dy4D, filter };
    const attrs = { strides, pad, dataFormat, dimRoundingMode, inputShape: xShape4D };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(Conv2DBackpropInput, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const conv2DBackpropInput = op({ conv2DBackpropInput_ });

/**
 * Computes the transposed 2D convolution of an image, also known as a
 * deconvolution.
 *
 * @param x The input image, of rank 4 or rank 3, of shape
 *   `[batch, height, width, inDepth]`. If rank 3, batch of 1 is assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, outDepth, inDepth]`.
 *     `inDepth` must match `inDepth` in `x`.
 * @param outputShape Output shape, of rank 4 or rank 3:
 *     `[batch, height, width, outDepth]`. If rank 3, batch of 1 is assumed.
 * @param strides The strides of the original convolution:
 *     `[strideHeight, strideWidth]`.
 * @param pad  The type of padding algorithm used in the non-transpose version
 *    of the op.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function conv2dTranspose_(x, filter, outputShape, strides, pad, dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'conv2dTranspose');
    const $filter = convertToTensor(filter, 'filter', 'conv2dTranspose');
    return conv2DBackpropInput(outputShape, $x, $filter, strides, pad, 'NHWC', dimRoundingMode);
}
const conv2dTranspose = op({ conv2dTranspose_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes a 3D convolution over the input x.
 *
 * @param x The input tensor, of rank 5 or rank 4, of shape
 *     `[batch, depth, height, width, channels]`. If rank 4,
 * batch of 1 is assumed.
 * @param filter The filter, rank 5, of shape
 *     `[filterDepth, filterHeight, filterWidth, inChannels, outChannels]`.
 *      inChannels must match between input and filter.
 * @param strides The strides of the convolution: `[strideDepth, strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat: An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @param dilations The dilation rates: `[dilationDepth, dilationHeight,
 *     dilationWidth]` in which we sample input values across the height
 *     and width dimensions in atrous convolution. Defaults to `[1, 1, 1]`.
 *     If `dilations` is a single number, then
 *     `dilationDepth == dilationHeight == dilationWidth`. If it is greater
 *     than 1, then all values of `strides` must be 1.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function conv3d_(x, filter, strides, pad, dataFormat = 'NDHWC', dilations = [1, 1, 1]) {
    const $x = convertToTensor(x, 'x', 'conv3d');
    const $filter = convertToTensor(filter, 'filter', 'conv3d');
    let x5D = $x;
    let reshapedTo5D = false;
    if ($x.rank === 4) {
        reshapedTo5D = true;
        x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
    }
    assert(x5D.rank === 5, () => `Error in conv3d: input must be rank 5, but got rank ${x5D.rank}.`);
    assert($filter.rank === 5, () => `Error in conv3d: filter must be rank 5, but got rank ` +
        `${$filter.rank}.`);
    assert(x5D.shape[4] === $filter.shape[3], () => `Error in conv3d: depth of input (${x5D.shape[4]}) must match ` +
        `input depth for filter ${$filter.shape[3]}.`);
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in conv3D: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    assert(dataFormat === 'NDHWC', () => `Error in conv3d: got dataFormat of ${dataFormat} but only NDHWC is currently supported.`);
    const inputs = { x: x5D, filter: $filter };
    const attrs = { strides, pad, dataFormat, dilations };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(Conv3D, inputs, attrs);
    if (reshapedTo5D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
    }
    return res;
}
const conv3d = op({ conv3d_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes cos of the input `tf.Tensor` element-wise: `cos(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.cos().print();  // or tf.cos(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function cos_(x) {
    const $x = convertToTensor(x, 'x', 'cos');
    const inputs = { x: $x };
    return ENGINE.runKernel(Cos, inputs);
}
const cos = op({ cos_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes hyperbolic cos of the input `tf.Tensor` element-wise: `cosh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.cosh().print();  // or tf.cosh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function cosh_(x) {
    const $x = convertToTensor(x, 'x', 'cosh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Cosh, inputs);
}
const cosh = op({ cosh_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the cumulative sum of a `tf.Tensor` along `axis`.
 *
 * ```js
 * const x = tf.tensor([1, 2, 3, 4]);
 * x.cumsum().print();
 * ```
 * ```js
 * const x = tf.tensor([[1, 2], [3, 4]]);
 * x.cumsum().print();
 * ```
 *
 * @param x The input tensor to be summed.
 * @param axis The axis along which to sum. Optional. Defaults to 0.
 * @param exclusive Whether to perform exclusive cumulative sum. Optional.
 *     Defaults to false. If set to true then the sum of each tensor entry
 *     does not include its own value, but only the values previous to it
 *     along the specified axis.
 * @param reverse Whether to sum in the opposite direction. Optional.
 *     Defaults to false.
 *
 * @doc {heading: 'Operations', subheading: 'Scan'}
 */
function cumsum_(x, axis = 0, exclusive = false, reverse = false) {
    const $x = convertToTensor(x, 'x', 'cumsum');
    const inputs = { x: $x };
    const attrs = { axis, exclusive, reverse };
    return ENGINE.runKernel(Cumsum, inputs, attrs);
}
const cumsum = op({ cumsum_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Outputs a vector with length `size` and the same dtype as `weights`.
 *
 * If `weights` are empty, then index `i` stores the number of times the value
 * `i` is counted in `x`. If `weights` are non-empty, then index `i` stores the
 * sum of the value in `weights` at each index where the corresponding value in
 * `x` is `i`.
 *
 * Values in `x` outside of the range [0, size) are ignored.
 *
 * @param x The input int tensor, rank 1 or rank 2.
 * @param weights The weights tensor, must have the same shape as x, or a
 *     length-0 Tensor, in which case it acts as all weights equal to 1.
 * @param size Non-negative integer.
 * @param binaryOutput Optional. Whether the kernel should count the appearance
 *     or number of occurrences. Defaults to False.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function denseBincount_(x, weights, size, binaryOutput = false) {
    const $x = convertToTensor(x, 'x', 'denseBincount');
    const $weights = convertToTensor(weights, 'weights', 'denseBincount');
    assert($x.dtype === 'int32', () => `Error in denseBincount: input ` +
        `dtype must be int32, but got ${$x.dtype}`);
    assert($x.rank <= 2, () => `Error in denseBincount: input must be at most rank 2, but got ` +
        `rank ${$x.rank}.`);
    assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
    assert($weights.size === $x.size || $weights.size === 0, () => `Error in denseBincount: weights must have the same shape as x or ` +
        `0-length, but got x shape: ${$x.shape}, weights shape: ` +
        `${$weights.shape}.`);
    const inputs = { x: $x, weights: $weights };
    const attrs = { size, binaryOutput };
    return ENGINE.runKernel(DenseBincount, inputs, attrs);
}
const denseBincount = op({ denseBincount_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Rearranges data from depth into blocks of spatial data. More specifically,
 * this op outputs a copy of the input tensor where values from the `depth`
 * dimension are moved in spatial blocks to the `height` and `width` dimensions.
 * The attr `blockSize` indicates the input block size and how the data is
 * moved.
 *
 *  - Chunks of data of size `blockSize * blockSize` from depth are rearranged
 * into non-overlapping blocks of size `blockSize x blockSize`
 *
 *  - The width the output tensor is `inputWidth * blockSize`, whereas the
 * height is `inputHeight * blockSize`
 *
 *  - The Y, X coordinates within each block of the output image are determined
 * by the high order component of the input channel index
 *
 *  - The depth of the input tensor must be divisible by `blockSize *
 * blockSize`
 *
 * The `dataFormat` attr specifies the layout of the input and output tensors
 * with the following options: "NHWC": [ `batch, height, width, channels` ]
 * "NCHW": [ `batch, channels, height, width` ]
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [1, 1, 1, 4]);
 * const blockSize = 2;
 * const dataFormat = "NHWC";
 *
 * tf.depthToSpace(x, blockSize, dataFormat).print();
 * ```
 *
 * @param x The input tensor of rank 4
 * @param blockSIze  An `int` that is `>= 2`. The size of the spatial block
 * @param dataFormat An optional string from: "NHWC", "NCHW". Defaults to "NHWC"
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function depthToSpace_(x, blockSize, dataFormat = 'NHWC') {
    const $x = convertToTensor(x, 'x', 'depthToSpace');
    const inputHeight = (dataFormat === 'NHWC') ? $x.shape[1] : $x.shape[2];
    const inputWidth = (dataFormat === 'NHWC') ? $x.shape[2] : $x.shape[3];
    const inputDepth = (dataFormat === 'NHWC') ? $x.shape[3] : $x.shape[1];
    assert(inputHeight * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputHeight} and ${blockSize}  for depthToSpace with input shape
    ${$x.shape}`);
    assert(inputWidth * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputWidth} and ${blockSize} for depthToSpace with input shape
        ${$x.shape}`);
    assert((inputDepth % (blockSize * blockSize) === 0), () => `Dimension size must be evenly divisible by ${blockSize * blockSize} but is ${inputDepth} for depthToSpace with input shape ${$x.shape}`);
    const inputs = { x: $x };
    const attrs = { blockSize, dataFormat };
    return ENGINE.runKernel(DepthToSpace, inputs, attrs);
}
const depthToSpace = op({ depthToSpace_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Depthwise 2D convolution.
 *
 * Given a 4D `input` array and a `filter` array of shape
 * `[filterHeight, filterWidth, inChannels, channelMultiplier]` containing
 * `inChannels` convolutional filters of depth 1, this op applies a
 * different filter to each input channel (expanding from 1 channel to
 * `channelMultiplier` channels for each), then concatenates the results
 * together. The output has `inChannels * channelMultiplier` channels.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d)
 * for more details.
 *
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function depthwiseConv2d_(x, filter, strides, pad, dataFormat = 'NHWC', dilations = [1, 1], dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'depthwiseConv2d');
    const $filter = convertToTensor(filter, 'filter', 'depthwiseConv2d');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in depthwiseConv2d: input must be rank 4, but got ` +
        `rank ${x4D.rank}.`);
    assert($filter.rank === 4, () => `Error in depthwiseConv2d: filter must be rank 4, but got rank ` +
        `${$filter.rank}.`);
    assert(x4D.shape[3] === $filter.shape[2], () => `Error in depthwiseConv2d: number of input channels ` +
        `(${x4D.shape[3]}) must match the inChannels dimension in ` +
        `filter ${$filter.shape[2]}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in depthwiseConv2d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x4D, filter: $filter };
    const attrs = { strides, pad, dataFormat, dilations, dimRoundingMode };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(DepthwiseConv2dNative, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const depthwiseConv2d = op({ depthwiseConv2d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the grayscale dilation over the input `x`.
 *
 * @param x The input tensor, rank 3 or rank 4 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filter The filter tensor, rank 3, of shape
 *     `[filterHeight, filterWidth, depth]`.
 * @param strides The strides of the sliding window for each dimension of the
 *     input tensor: `[strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat Specify the data format of the input and output data.
 *      Defaults to 'NHWC'. Only 'NHWC' is currently supported. With the
 *      default format "NHWC", the data is stored in the order of: [batch,
 *      height, width, channels].
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     for atrous morphological dilation. Defaults to `[1, 1]`. If `dilations`
 *     is a single number, then `dilationHeight == dilationWidth`. If it is
 *     greater than 1, then all values of `strides` must be 1.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function dilation2d_(x, filter, strides, pad, dilations = [1, 1], dataFormat = 'NHWC') {
    const $x = convertToTensor(x, 'x', 'dilation2d');
    const $filter = convertToTensor(filter, 'filter', 'dilation2d');
    assert($x.rank === 3 || $x.rank === 4, () => `Error in dilation2d: input must be rank 3 or 4, but got rank ` +
        `${$x.rank}.`);
    assert($filter.rank === 3, () => `Error in dilation2d: filter must be rank 3, but got rank ` +
        `${$filter.rank}.`);
    assert(dataFormat === 'NHWC', () => `Error in dilation2d: Only NHWC is currently supported, ` +
        `but got dataFormat of ${dataFormat}`);
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
        reshapedTo4D = true;
    }
    const inputs = { x: x4D, filter: $filter };
    const attrs = { strides, pad, dilations };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(Dilation2D, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const dilation2d = op({ dilation2d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a == b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.equal(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function equal_(a, b) {
    let $a = convertToTensor(a, 'a', 'equal', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'equal', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Equal, inputs);
}
const equal = op({ equal_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the elements, either `a` or `b` depending on the `condition`.
 *
 * If the condition is true, select from `a`, otherwise select from `b`.
 *
 * ```js
 * const cond = tf.tensor1d([false, false, true], 'bool');
 * const a = tf.tensor1d([1 , 2, 3]);
 * const b = tf.tensor1d([-1, -2, -3]);
 *
 * a.where(cond, b).print();
 * ```
 *
 * @param condition The input condition. Must be of dtype bool.
 * @param a If `condition` is rank 1, `a` may have a higher rank but
 *     its first dimension must match the size of `condition`.
 * @param b A tensor with the same dtype as `a` and with shape that is
 *     compatible with `a`.
 * @return A tensor with same dtype as `a` and `b`, and shape that is
 *     broadcastable from `a` and `b`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function where_(condition, a, b) {
    const $a = convertToTensor(a, 'a', 'where');
    const $b = convertToTensor(b, 'b', 'where');
    const $condition = convertToTensor(condition, 'condition', 'where', 'bool');
    // TODO: move this logic to forward function when the broadcastTo op is
    // implemented in WASM.
    // Find the broadcastable shape for $condition, $a, and $b.
    const broadcastShape = assertAndGetBroadcastShape(assertAndGetBroadcastShape($condition.shape, $a.shape), $b.shape);
    const $broadcastedCondition = broadcastTo($condition, broadcastShape);
    const $broadcastedA = broadcastTo($a, broadcastShape);
    const $broadcastedB = broadcastTo($b, broadcastShape);
    const inputs = {
        condition: $broadcastedCondition,
        t: $broadcastedA,
        e: $broadcastedB
    };
    return ENGINE.runKernel(Select, inputs);
}
const where = op({ where_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with all elements set to 0 with the same shape as the
 * given tensor.
 *
 * ```js
 * const x = tf.tensor([1, 2]);
 * tf.zerosLike(x).print();
 * ```
 *
 * @param x The tensor of required shape.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function zerosLike_(x) {
    const $x = convertToTensor(x, 'x', 'zerosLike');
    const inputs = { x: $x };
    return ENGINE.runKernel(ZerosLike, inputs);
}
const zerosLike = op({ zerosLike_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Divides two `tf.Tensor`s element-wise, A / B. Supports broadcasting. Return 0
 * if denominator is 0.
 *
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 9, 16]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 * const c = tf.tensor1d([0, 0, 0, 0]);
 *
 * a.divNoNan(b).print();  // or tf.divNoNan(a, b)
 * a.divNoNan(c).print();  // or tf.divNoNan(a, c)
 * ```
 *
 * ```js
 * // Broadcast div a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(2);
 * const c = tf.scalar(0);
 *
 * a.divNoNan(b).print();  // or tf.divNoNan(a, b)
 * a.divNoNan(c).print();  // or tf.divNoNan(a, c)
 * ```
 *
 * @param a The first tensor as the numerator.
 * @param b The second tensor as the denominator. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function divNoNan_(a, b) {
    // TODO: Make this into its own kernel.
    let $a = convertToTensor(a, 'a', 'div');
    let $b = convertToTensor(b, 'b', 'div');
    [$a, $b] = makeTypesMatch($a, $b);
    const divResult = div($a, $b);
    const zeros = zerosLike(divResult);
    const bEqualsZero = equal($b, zeros);
    return where(bEqualsZero, zeros, divResult);
}
const divNoNan = op({ divNoNan_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Tensor contraction over specified indices and outer product.
 *
 * `einsum` allows defining Tensors by defining their element-wise computation.
 * This computation is based on
 * [Einstein summation](https://en.wikipedia.org/wiki/Einstein_notation).
 *
 * Some special cases include:
 *
 * Matrix multiplication:
 * ```js
 * const x = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
 * const y = tf.tensor2d([[0, 1], [2, 3], [4, 5]]);
 * x.print();
 * y.print();
 * tf.einsum('ij,jk->ik', x, y).print();
 * ```
 *
 * Dot product:
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 * const y = tf.tensor1d([0, 1, 2]);
 * x.print();
 * y.print();
 * tf.einsum('i,i->', x, y).print();
 * ```
 *
 * Batch dot product:
 * ```js
 * const x = tf.tensor2d([[1, 2, 3], [4, 5, 6]]);
 * const y = tf.tensor2d([[0, 1, 2], [3, 4, 5]]);
 * x.print();
 * y.print();
 * tf.einsum('bi,bi->b', x, y).print();
 * ```
 *
 * Outer prouduct:
 * ```js
 * const x = tf.tensor1d([1, 3, 5]);
 * const y = tf.tensor1d([2, 4, 6]);
 * x.print();
 * y.print();
 * tf.einsum('i,j->ij', x, y).print();
 * ```
 *
 * Matrix transpose:
 * ```js
 * const x = tf.tensor2d([[1, 2], [3, 4]]);
 * x.print();
 * tf.einsum('ij->ji', x).print();
 * ```
 *
 * Batch matrix transpose:
 * ```js
 * const x = tf.tensor3d([[[1, 2], [3, 4]], [[-1, -2], [-3, -4]]]);
 * x.print();
 * tf.einsum('bij->bji', x).print();
 * ```
 *
 * Limitations:
 *
 * This implementation of einsum has the following limitations:
 *
 * - Does not support >2 input tensors.
 * - Does not support duplicate axes for any given input tensor. E.g., equation
 *   'ii->' is not suppoted.
 * - The `...` notation is not supported.
 *
 * @param equation a string describing the contraction, in the same format as
 * [numpy.einsum](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html).
 * @param tensors the input(s) to contract (each one a Tensor), whose shapes
 *     should be consistent with equation.
 * @returns The output tensor.
 *
 * @doc {heading: 'Tensors', subheading: 'Matrices'}
 */
function einsum_(equation, ...tensors) {
    const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, 'einsum'));
    const attrs = { equation };
    return ENGINE.runKernel(Einsum, $tensors, attrs);
}
const einsum = op({ einsum_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes gause error function of the input `tf.Tensor` element-wise:
 * `erf(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, .1, -.1, .7]);
 *
 * x.erf().print(); // or tf.erf(x);
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function erf_(x) {
    let $x = convertToTensor(x, 'x', 'erf');
    assert($x.dtype === 'int32' || $x.dtype === 'float32', () => 'Input dtype must be `int32` or `float32`.');
    if ($x.dtype === 'int32') {
        $x = cast($x, 'float32');
    }
    const inputs = { x: $x };
    return ENGINE.runKernel(Erf, inputs);
}
const erf = op({ erf_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes exponential of the input `tf.Tensor` element-wise. `e ^ x`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, -3]);
 *
 * x.exp().print();  // or tf.exp(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function exp_(x) {
    const $x = convertToTensor(x, 'x', 'exp');
    const inputs = { x: $x };
    return ENGINE.runKernel(Exp, inputs);
}
const exp = op({ exp_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns a `tf.Tensor` that has expanded rank, by inserting a dimension
 * into the tensor's shape.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * const axis = 1;
 * x.expandDims(axis).print();
 * ```
 *
 * @param x The input tensor whose dimensions to be expanded.
 * @param axis The dimension index at which to insert shape of `1`. Defaults
 *     to 0 (the first dimension).
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function expandDims_(x, axis = 0) {
    const $x = convertToTensor(x, 'x', 'expandDims', 'string_or_numeric');
    assert(axis <= $x.rank, () => 'Axis must be <= rank of the tensor');
    const inputs = { input: $x };
    const attrs = { dim: axis };
    return ENGINE.runKernel(ExpandDims, inputs, attrs);
}
const expandDims = op({ expandDims_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes exponential of the input `tf.Tensor` minus one element-wise.
 * `e ^ x - 1`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, -3]);
 *
 * x.expm1().print();  // or tf.expm1(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function expm1_(x) {
    const $x = convertToTensor(x, 'x', 'expm1');
    const inputs = { x: $x };
    return ENGINE.runKernel(Expm1, inputs);
}
const expm1 = op({ expm1_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Construct a tensor by repeating it the number of times given by reps.
 *
 * This operation creates a new tensor by replicating `input` `reps`
 * times. The output tensor's i'th dimension has `input.shape[i] *
 * reps[i]` elements, and the values of `input` are replicated
 * `reps[i]` times along the i'th dimension. For example, tiling
 * `[a, b, c, d]` by `[2]` produces `[a, b, c, d, a, b, c, d]`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 *
 * a.tile([2]).print();    // or a.tile([2])
 * ```
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * a.tile([1, 2]).print();  // or a.tile([1, 2])
 * ```
 * @param x The tensor to tile.
 * @param reps Determines the number of replications per dimension.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function tile_(x, reps) {
    const $x = convertToTensor(x, 'x', 'tile', 'string_or_numeric');
    assert($x.rank === reps.length, () => `Error in transpose: rank of input ${$x.rank} ` +
        `must match length of reps ${reps}.`);
    const inputs = { x: $x };
    const attrs = { reps };
    return ENGINE.runKernel(Tile, inputs, attrs);
}
const tile = op({ tile_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Create an identity matrix.
 *
 * @param numRows Number of rows.
 * @param numColumns Number of columns. Defaults to `numRows`.
 * @param batchShape If provided, will add the batch shape to the beginning
 *   of the shape of the returned `tf.Tensor` by repeating the identity
 *   matrix.
 * @param dtype Data type.
 * @returns Identity matrix of the specified size and data type, possibly
 *   with batch repetition if `batchShape` is specified.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function eye_(numRows, numColumns, batchShape, dtype = 'float32') {
    if (numColumns == null) {
        numColumns = numRows;
    }
    const buff = buffer([numRows, numColumns], dtype);
    const n = numRows <= numColumns ? numRows : numColumns;
    for (let i = 0; i < n; ++i) {
        buff.set(1, i, i);
    }
    const out = reshape(buff.toTensor(), [numRows, numColumns]);
    if (batchShape == null) {
        return out;
    }
    else {
        if (batchShape.length === 1) {
            return tile(expandDims(out, 0), [batchShape[0], 1, 1]);
        }
        else if (batchShape.length === 2) {
            // tslint:disable-next-line:no-unnecessary-type-assertion
            return tile(expandDims(expandDims(out, 0), 0), [batchShape[0], batchShape[1], 1, 1]);
        }
        else if (batchShape.length === 3) {
            // tslint:disable-next-line:no-unnecessary-type-assertion
            return tile(expandDims(expandDims(expandDims(out, 0), 0), 0), [
                batchShape[0], batchShape[1], batchShape[2], 1, 1
            ]);
        }
        else {
            throw new Error(`eye() currently supports only 1D and 2D ` +
                // tslint:disable-next-line:no-any
                `batchShapes, but received ${batchShape.length}D.`);
        }
    }
}
const eye = op({ eye_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` filled with a scalar value.
 *
 * ```js
 * tf.fill([2, 2], 4).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param value The scalar value to fill the tensor with.
 * @param dtype The type of an element in the resulting tensor. Defaults to
 * 'float'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function fill(shape, value, dtype) {
    const attrs = { shape, value, dtype };
    return ENGINE.runKernel(Fill, {}, attrs);
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes floor of input `tf.Tensor` element-wise: `floor(x)`.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.floor().print();  // or tf.floor(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function floor_(x) {
    const $x = convertToTensor(x, 'x', 'floor');
    const inputs = { x: $x };
    return ENGINE.runKernel(Floor, inputs);
}
const floor = op({ floor_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Gather slices from tensor `x`'s axis `axis` according to `indices`.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * const indices = tf.tensor1d([1, 3, 3], 'int32');
 *
 * x.gather(indices).print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const indices = tf.tensor1d([1, 1, 0], 'int32');
 *
 * x.gather(indices).print();
 * ```
 * @param x The input tensor whose slices to be gathered.
 * @param indices The indices of the values to extract.
 * @param axis The axis over which to select values. Defaults to 0.
 * @param batchDims Optional. The number of batch dimensions. It must be less
 *     than or equal to rank(indices). Defaults to 0.
 *     The output tensor will have shape of
 *     `x.shape[:axis] + indices.shape[batchDims:] + x.shape[axis + 1:]`
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function gather_(x, indices, axis = 0, batchDims = 0) {
    const $x = convertToTensor(x, 'x', 'gather');
    const $indices = convertToTensor(indices, 'indices', 'gather', 'int32');
    const inputs = { x: $x, indices: $indices };
    const attrs = { axis, batchDims };
    return ENGINE.runKernel(GatherV2, inputs, attrs);
}
const gather = op({ gather_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a > b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.greater(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function greater_(a, b) {
    let $a = convertToTensor(a, 'a', 'greater', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'greater', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Greater, inputs);
}
const greater = op({ greater_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a >= b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.greaterEqual(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function greaterEqual_(a, b) {
    let $a = convertToTensor(a, 'a', 'greaterEqual', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'greaterEqual', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(GreaterEqual, inputs);
}
const greaterEqual = op({ greaterEqual_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the imaginary part of a complex (or real) tensor.
 *
 * Given a tensor input, this operation returns a tensor of type float that is
 * the imaginary part of each element in input considered as a complex number.
 * If input is real, a tensor of all zeros is returned.
 *
 * ```js
 * const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
 * tf.imag(x).print();
 * ```
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function imag_(input) {
    const $input = convertToTensor(input, 'input', 'imag');
    const inputs = { input: $input };
    return ENGINE.runKernel(Imag, inputs);
}
const imag = op({ imag_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * RReturns which elements of x are NaN.
 *
 * ```js
 * const x = tf.tensor1d([NaN, Infinity, -Infinity, 0, 1]);
 *
 * x.isNaN().print();  // or tf.isNaN(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function isNaN_(x) {
    const $x = convertToTensor(x, 'x', 'isNaN');
    const inputs = { x: $x };
    return ENGINE.runKernel(IsNan, inputs);
}
const isNaN$1 = op({ isNaN_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a < b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.less(b).print();
 * ```
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function less_(a, b) {
    let $a = convertToTensor(a, 'a', 'less', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'less', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Less, inputs);
}
const less = op({ less_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a <= b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([2, 2, 2]);
 *
 * a.lessEqual(b).print();
 * ```
 *
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function lessEqual_(a, b) {
    let $a = convertToTensor(a, 'a', 'lessEqual', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'lessEqual', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(LessEqual, inputs);
}
const lessEqual = op({ lessEqual_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Return an evenly spaced sequence of numbers over the given interval.
 *
 * ```js
 * tf.linspace(0, 9, 10).print();
 * ```
 * @param start The start value of the sequence.
 * @param stop The end value of the sequence.
 * @param num The number of values to generate.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function linspace(start, stop, num) {
    if (num <= 0) {
        throw new Error('The number of values should be positive.');
    }
    const attrs = { start, stop, num };
    return ENGINE.runKernel(LinSpace, {}, attrs);
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Normalizes the activation of a local neighborhood across or within
 * channels.
 *
 * @param x The input tensor. The 4-D input tensor is treated as a 3-D array
 *     of 1D vectors (along the last dimension), and each vector is
 *     normalized independently.
 * @param depthRadius The number of adjacent channels in the 1D normalization
 *     window.
 * @param bias A constant bias term for the basis.
 * @param alpha A scale factor, usually positive.
 * @param beta An exponent.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function localResponseNormalization_(x, depthRadius = 5, bias = 1, alpha = 1, beta = 0.5) {
    const $x = convertToTensor(x, 'x', 'localResponseNormalization');
    assert($x.rank === 4 || $x.rank === 3, () => `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${$x.rank}.`);
    assert(isInt(depthRadius), () => `Error in localResponseNormalization: depthRadius must be an ` +
        `integer but got depthRadius ${depthRadius}.`);
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    const inputs = { x: x4D };
    const attrs = { depthRadius, bias, alpha, beta };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(LRN, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    else {
        return res;
    }
}
const localResponseNormalization = op({ localResponseNormalization_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes natural logarithm of the input `tf.Tensor` element-wise: `ln(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.E]);
 *
 * x.log().print();  // or tf.log(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function log_(x) {
    const $x = convertToTensor(x, 'x', 'log');
    const inputs = { x: $x };
    return ENGINE.runKernel(Log, inputs);
}
const log = op({ log_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes natural logarithm of the input `tf.Tensor` plus one
 * element-wise: `ln(1 + x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.E - 1]);
 *
 * x.log1p().print();  // or tf.log1p(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function log1p_(x) {
    const $x = convertToTensor(x, 'x', 'log1p');
    const inputs = { x: $x };
    return ENGINE.runKernel(Log1p, inputs);
}
const log1p = op({ log1p_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Provided `f(x)`, returns another function `g(x, dy?)`, which gives the
 * gradient of `f(x)` with respect to `x`.
 *
 * If `dy` is provided, the gradient of `f(x).mul(dy).sum()` with respect to
 * `x` is computed instead. `f(x)` must take a single tensor `x` and return a
 * single tensor `y`. If `f()` takes multiple inputs, use `tf.grads` instead.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.grad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * g(x).print();
 * ```
 *
 * ```js
 * // f(x) = x ^ 3
 * const f = x => x.pow(tf.scalar(3, 'int32'));
 * // f'(x) = 3x ^ 2
 * const g = tf.grad(f);
 * // f''(x) = 6x
 * const gg = tf.grad(g);
 *
 * const x = tf.tensor1d([2, 3]);
 * gg(x).print();
 * ```
 *
 * @param f The function f(x), to compute gradient for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function grad(f) {
    assert(isFunction(f), () => 'The f passed in grad(f) must be a function');
    return (x, dy) => {
        // x can be of any dtype, thus null as the last argument.
        const $x = convertToTensor(x, 'x', 'tf.grad', 'string_or_numeric');
        const $dy = (dy != null) ? convertToTensor(dy, 'dy', 'tf.grad') : null;
        return ENGINE.tidy(() => {
            const { value, grads } = ENGINE.gradients(() => f($x), [$x], $dy);
            if ($dy != null) {
                assertShapesMatch(value.shape, $dy.shape, 'The shape of dy passed in grad(f)(x, dy) must match the shape ' +
                    'returned by f(x)');
            }
            checkGrads(grads);
            return grads[0];
        });
    };
}
/**
 * Provided `f(x1, x2,...)`, returns another function `g([x1, x2,...], dy?)`,
 * which gives an array of gradients of `f()` with respect to each input
 * [`x1`,`x2`,...].
 *
 * If `dy` is passed when calling `g()`, the gradient of
 * `f(x1,...).mul(dy).sum()` with respect to each input is computed instead.
 * The provided `f` must take one or more tensors and return a single tensor
 * `y`. If `f()` takes a single input, we recommend using `tf.grad` instead.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df / da = b, df / db = a
 * const g = tf.grads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const [da, db] = g([a, b]);
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @param f The function `f(x1, x2,...)` to compute gradients for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function grads(f) {
    assert(isFunction(f), () => 'The f passed in grads(f) must be a function');
    return (args, dy) => {
        assert(Array.isArray(args), () => 'The args passed in grads(f)(args) must be an array ' +
            'of `Tensor`s or `TensorLike`s');
        // args can be of any dtype, thus null as the last argument.
        const $args = convertToTensorArray(args, 'args', 'tf.grads', 'string_or_numeric');
        const $dy = (dy != null) ? convertToTensor(dy, 'dy', 'tf.grads') : null;
        return ENGINE.tidy(() => {
            const { value, grads } = ENGINE.gradients(() => f(...$args), $args, $dy);
            if ($dy != null) {
                assertShapesMatch(value.shape, $dy.shape, 'The shape of dy passed in grads(f)([x1,...], dy) must ' +
                    'match the shape returned by f([x1,...])');
            }
            checkGrads(grads);
            return grads;
        });
    };
}
/**
 * Like `tf.grad`, but also returns the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grad: The gradient of `f(x)` w.r.t `x` (result of `tf.grad`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.valueAndGrad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * const {value, grad} = g(x);
 *
 * console.log('value');
 * value.print();
 * console.log('grad');
 * grad.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function valueAndGrad(f) {
    assert(isFunction(f), () => 'The f passed in valueAndGrad(f) must be a function');
    return (x, dy) => {
        assert(x instanceof Tensor, () => 'The x passed in valueAndGrad(f)(x) must be a tensor');
        assert(dy == null || dy instanceof Tensor, () => 'The dy passed in valueAndGrad(f)(x, dy) must be a tensor');
        const { grads, value } = ENGINE.gradients(() => f(x), [x], dy);
        checkGrads(grads);
        return { grad: grads[0], value };
    };
}
/**
 * Like `tf.grads`, but returns also the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grads: The gradients of `f()` w.r.t each input (result of `tf.grads`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df/da = b, df/db = a
 * const g = tf.valueAndGrads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const {value, grads} = g([a, b]);
 *
 * const [da, db] = grads;
 *
 * console.log('value');
 * value.print();
 *
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function valueAndGrads(f) {
    assert(isFunction(f), () => 'The f passed in valueAndGrads(f) must be a function');
    return (args, dy) => {
        assert(Array.isArray(args) && args.every(arg => arg instanceof Tensor), () => 'The args passed in valueAndGrads(f)(args) must be array of ' +
            'tensors');
        assert(dy == null || dy instanceof Tensor, () => 'The dy passed in valueAndGrads(f)(args, dy) must be a tensor');
        const res = ENGINE.gradients(() => f(...args), args, dy);
        if (dy != null) {
            assertShapesMatch(res.value.shape, dy.shape, 'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must ' +
                'match the shape returned by f([x1,...])');
        }
        checkGrads(res.grads);
        return res;
    };
}
/**
 * Computes and returns the gradient of f(x) with respect to the list of
 * trainable variables provided by `varList`. If no list is provided, it
 * defaults to all trainable variables.
 *
 * ```js
 * const a = tf.variable(tf.tensor1d([3, 4]));
 * const b = tf.variable(tf.tensor1d([5, 6]));
 * const x = tf.tensor1d([1, 2]);
 *
 * // f(a, b) = a * x ^ 2 + b * x
 * const f = () => a.mul(x.square()).add(b.mul(x)).sum();
 * // df/da = x ^ 2, df/db = x
 * const {value, grads} = tf.variableGrads(f);
 *
 * Object.keys(grads).forEach(varName => grads[varName].print());
 * ```
 *
 * @param f The function to execute. f() should return a scalar.
 * @param varList The list of variables to compute the gradients with respect
 *     to. Defaults to all trainable variables.
 * @returns An object with the following keys and values:
 *   - `value`: The value of the function `f`.
 *   - `grads`: A map from the names of the variables to the gradients.
 *     If the `varList` argument is provided explicitly and contains a subset of
 *     non-trainable variables, this map in the return value will contain keys
 *     that map the names of the non-trainable variables to `null`.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function variableGrads(f, varList) {
    assert(isFunction(f), () => 'The f passed in variableGrads(f) must be a function');
    assert(varList == null ||
        Array.isArray(varList) && varList.every(v => v instanceof Variable), () => 'The varList passed in variableGrads(f, varList) must be an array ' +
        'of variables');
    const specifiedVarList = varList != null;
    if (!specifiedVarList) {
        // Get all of the trainable variables.
        varList = [];
        for (const varName in ENGINE.registeredVariables) {
            varList.push(ENGINE.registeredVariables[varName]);
        }
    }
    const specifiedNonTrainable = specifiedVarList ? varList.filter(variable => !variable.trainable) : null;
    // Prune non-trainable variables.
    const originalVarCount = varList.length;
    varList = varList.filter(variable => variable.trainable);
    assert(varList.length > 0, () => `variableGrads() expects at least one of the input variables to ` +
        `be trainable, but none of the ${originalVarCount} variables is ` +
        `trainable.`);
    const allowNoGradients = true;
    const { value, grads } = ENGINE.gradients(f, varList, null, allowNoGradients);
    assert(grads.some(g => g != null), () => 'Cannot find a connection between any variable and the result of ' +
        'the loss function y=f(x). Please make sure the operations that ' +
        'use variables are inside the function f passed to minimize().');
    assert(value.rank === 0, () => `The f passed in variableGrads(f) must return a scalar, but it ` +
        `returned a rank-${value.rank} tensor`);
    const namedGrads = {};
    varList.forEach((v, i) => {
        if (grads[i] != null) {
            namedGrads[v.name] = grads[i];
        }
    });
    if (specifiedNonTrainable != null) {
        // If varList is explicitly provided and contains non-trainable values,
        // add them to the returned gradients with `null` values.
        specifiedNonTrainable.forEach(v => namedGrads[v.name] = null);
    }
    return { value, grads: namedGrads };
}
/**
 * Overrides the gradient computation of a function `f`.
 *
 * Takes a function
 * `f(...inputs, save) => {value: Tensor, gradFunc: (dy, saved) => Tensor[]}`
 * and returns another function `g(...inputs)` which takes the same inputs as
 * `f`. When called, `g` returns `f().value`. In backward mode, custom gradients
 * with respect to each input of `f` are computed using `f().gradFunc`.
 *
 * The `save` function passsed to `f` should be used for saving tensors needed
 * in the gradient. And the `saved` passed to the `gradFunc` is a
 * `NamedTensorMap`, which contains those saved tensor.
 *
 * ```js
 * const customOp = tf.customGrad((x, save) => {
 *   // Save x to make sure it's available later for the gradient.
 *   save([x]);
 *   // Override gradient of our custom x ^ 2 op to be dy * abs(x);
 *   return {
 *     value: x.square(),
 *     // Note `saved.x` which points to the `x` we saved earlier.
 *     gradFunc: (dy, saved) => [dy.mul(saved[0].abs())]
 *   };
 * });
 *
 * const x = tf.tensor1d([-1, -2, 3]);
 * const dx = tf.grad(x => customOp(x));
 *
 * console.log(`f(x):`);
 * customOp(x).print();
 * console.log(`f'(x):`);
 * dx(x).print();
 * ```
 *
 * @param f The function to evaluate in forward mode, which should return
 *     `{value: Tensor, gradFunc: (dy, saved) => Tensor[]}`, where `gradFunc`
 *     returns the custom gradients of `f` with respect to its inputs.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */
function customGrad(f) {
    return ENGINE.customGrad(f);
}
function checkGrads(grads) {
    const numNullGradients = grads.filter(g => g == null).length;
    if (numNullGradients > 0) {
        throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`);
    }
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes `-1 * x` element-wise.
 *
 * ```js
 * const x = tf.tensor2d([1, 2, -2, 0], [2, 2]);
 *
 * x.neg().print();  // or tf.neg(x)
 * ```
 *
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function neg_(x) {
    const $x = convertToTensor(x, 'x', 'neg');
    const inputs = { x: $x };
    return ENGINE.runKernel(Neg, inputs);
}
const neg = op({ neg_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes softplus of the input `tf.Tensor` element-wise: `log(exp(x) + 1)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.softplus().print();  // or tf.softplus(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function softplus_(x) {
    const $x = convertToTensor(x, 'x', 'softplus');
    const inputs = { x: $x };
    return ENGINE.runKernel(Softplus, inputs);
}
const softplus = op({ softplus_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the maximum of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and an
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.max().print();  // or tf.max(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.max(axis).print();  // or tf.max(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function max_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'max');
    const inputs = { x: $x };
    const attrs = { reductionIndices: axis, keepDims };
    return ENGINE.runKernel(Max, inputs, attrs);
}
const max = op({ max_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Subtracts two `tf.Tensor`s element-wise, A - B. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([10, 20, 30, 40]);
 * const b = tf.tensor1d([1, 2, 3, 4]);
 *
 * a.sub(b).print();  // or tf.sub(a, b)
 * ```
 *
 * ```js
 * // Broadcast subtract a with b.
 * const a = tf.tensor1d([10, 20, 30, 40]);
 * const b = tf.scalar(5);
 *
 * a.sub(b).print();  // or tf.sub(a, b)
 * ```
 * @param a The first `tf.Tensor` to subtract from.
 * @param b The second `tf.Tensor` to be subtracted. Must have the same dtype as
 * `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function sub_(a, b) {
    let $a = convertToTensor(a, 'a', 'sub');
    let $b = convertToTensor(b, 'b', 'sub');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Sub, inputs);
}
const sub = op({ sub_ });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the log softmax.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 *
 * a.logSoftmax().print();  // or tf.logSoftmax(a)
 * ```
 *
 * ```js
 * const a = tf.tensor2d([2, 4, 6, 1, 2, 3], [2, 3]);
 *
 * a.logSoftmax().print();  // or tf.logSoftmax(a)
 * ```
 *
 * @param logits The logits array.
 * @param axis The dimension softmax would be performed on. Defaults to `-1`
 *     which indicates the last dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function logSoftmax_(logits, axis = -1) {
    const $logits = convertToTensor(logits, 'logits', 'logSoftmax');
    if (axis === -1) {
        axis = $logits.rank - 1;
    }
    if (axis !== $logits.rank - 1) {
        throw Error('Log Softmax along a non-last dimension is not yet supported. ' +
            `Logits was rank ${$logits.rank} and axis was ${axis}`);
    }
    // const forward: ForwardFunc<Tensor> = (backend, save) => {
    //   const keepDims = true;
    //   const xMax = max(logits, axis, true);
    //   const shifted = sub(logits, xMax);
    //   const value =
    //       sub(cast(shifted, 'float32'), log(sum(exp(shifted), axis,
    //       keepDims)));
    //   save([value]);
    //   return value;
    // };
    // Use a custom gradient for numerical stability.
    const customOp = customGrad((logits, save) => {
        const keepDims = true;
        const xMax = max(logits, axis, true);
        const shifted = sub(logits, xMax);
        const value = sub(cast(shifted, 'float32'), log(sum(exp(shifted), axis, keepDims)));
        save([value]);
        const gradFunc = (dy, saved) => {
            const [value] = saved;
            const keepDims = true;
            const softmax = exp(value);
            return sub(dy, mul(sum(dy, axis, keepDims), softmax));
        };
        return { value, gradFunc };
    });
    return customOp($logits);
    // TODO Use Engine.runKernel when CPU/WebGL/WASM backends implement this.
    // const inputs: LogSoftmaxInputs = {logits: $logits};
    // const attrs: LogSoftmaxAttrs = {axis};
    // return ENGINE.runKernel(
    //            LogSoftmax, inputs as {} as NamedTensorMap,
    //            attrs as {} as NamedAttrMap);
}
const logSoftmax = op({ logSoftmax_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the log(sum(exp(elements across the reduction dimensions)).
 *
 * Reduces the input along the dimensions given in `axis`. Unless `keepDims`
 * is true, the rank of the array is reduced by 1 for each entry in `axis`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axis` has no entries, all dimensions are reduced, and an array with a
 * single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.logSumExp().print();  // or tf.logSumExp(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.logSumExp(axis).print();  // or tf.logSumExp(a, axis)
 * ```
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. If null (the default),
 *     reduces all dimensions.
 * @param keepDims If true, retains reduced dimensions with length
 *     of 1. Defaults to false.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function logSumExp_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'logSumExp');
    const axes = parseAxisParam(axis, $x.shape);
    const xMax = max($x, axes, true /* keepDims */);
    const a = sub($x, xMax);
    const b = exp(a);
    const c = sum(b, axes);
    const d = log(c);
    const res = add(reshape(xMax, d.shape), d);
    if (keepDims) {
        const newShape = expandShapeToKeepDim(res.shape, axes);
        return reshape(res, newShape);
    }
    return res;
}
const logSumExp = op({ logSumExp_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of `a AND b` element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([false, false, true, true], 'bool');
 * const b = tf.tensor1d([false, true, false, true], 'bool');
 *
 * a.logicalAnd(b).print();
 * ```
 *
 * @param a The first input tensor. Must be of dtype bool.
 * @param b The second input tensor. Must be of dtype bool.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function logicalAnd_(a, b) {
    const $a = convertToTensor(a, 'a', 'logicalAnd', 'bool');
    const $b = convertToTensor(b, 'b', 'logicalAnd', 'bool');
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(LogicalAnd, inputs);
}
const logicalAnd = op({ logicalAnd_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of `NOT x` element-wise.
 *
 * ```js
 * const a = tf.tensor1d([false, true], 'bool');
 *
 * a.logicalNot().print();
 * ```
 *
 * @param x The input tensor. Must be of dtype 'bool'.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function logicalNot_(x) {
    const $x = convertToTensor(x, 'x', 'logicalNot', 'bool');
    const inputs = { x: $x };
    return ENGINE.runKernel(LogicalNot, inputs);
}
const logicalNot = op({ logicalNot_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of `a OR b` element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([false, false, true, true], 'bool');
 * const b = tf.tensor1d([false, true, false, true], 'bool');
 *
 * a.logicalOr(b).print();
 * ```
 * @param a The first input tensor. Must be of dtype bool.
 * @param b The second input tensor. Must be of dtype bool.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function logicalOr_(a, b) {
    const $a = convertToTensor(a, 'a', 'logicalOr', 'bool');
    const $b = convertToTensor(b, 'b', 'logicalOr', 'bool');
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(LogicalOr, inputs);
}
const logicalOr = op({ logicalOr_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the 2D max pooling of an image.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in dilated pooling. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
function maxPool_(x, filterSize, strides, pad, dimRoundingMode) {
    const $x = convertToTensor(x, 'x', 'maxPool');
    const dilations = 1;
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x4D.rank}.`);
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in maxPool: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in maxPool: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x4D };
    const attrs = { filterSize, strides, pad, dimRoundingMode };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(MaxPool, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const maxPool = op({ maxPool_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the 3D max pooling.
 *
 * ```js
 * const x = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
 * const result = tf.maxPool3d(x, 2, 1, 'valid');
 * result.print();
 * ```
 *
 * @param x The input tensor, of rank 5 or rank 4 of shape
 *     `[batch, depth, height, width, inChannels]`.
 * @param filterSize The filter size:
 *     `[filterDepth, filterHeight, filterWidth]`.
 *     If `filterSize` is a single number,
 *     then `filterDepth == filterHeight == filterWidth`.
 * @param strides The strides of the pooling:
 *     `[strideDepth, strideHeight, strideWidth]`.
 *     If `strides` is a single number,
 *     then `strideDepth == strideHeight == strideWidth`.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1*1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function maxPool3d_(x, filterSize = [1, 1, 1], strides, pad, dimRoundingMode, dataFormat = 'NDHWC') {
    const $x = convertToTensor(x, 'x', 'maxPool3d');
    let x5D = $x;
    let reshapedTo5D = false;
    if ($x.rank === 4) {
        reshapedTo5D = true;
        x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
    }
    assert(x5D.rank === 5, () => `Error in maxPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
    assert(dataFormat === 'NDHWC', () => `Error in maxPool3d: Only NDHWC is currently supported, ` +
        `but got dataFormat of ${dataFormat}`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in maxPool3d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x5D };
    const attrs = { filterSize, strides, pad, dimRoundingMode, dataFormat };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(MaxPool3D, inputs, attrs);
    if (reshapedTo5D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
    }
    return res;
}
const maxPool3d = op({ maxPool3d_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the 2D max pooling of an image with Argmax index.
 * The indices in argmax are flattened, so that a maximum value at position `[b,
 * y, x, c]` becomes flattened index: `(y * width + x) * channels + c` if
 * include_batch_in_index is False; `((b * height + y) * width + x) * channels
 * +c` if include_batch_in_index is True.
 *
 * The indices returned are always in `[0, height) x [0, width)` before
 * flattening.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param filterSize The filter size: `[filterHeight, filterWidth]`. If
 *     `filterSize` is a single number, then `filterHeight == filterWidth`.
 * @param strides The strides of the pooling: `[strideHeight, strideWidth]`. If
 *     `strides` is a single number, then `strideHeight == strideWidth`.
 * @param dataFormat An optional string from: "NDHWC", "NCDHW". Defaults to
 *     "NDHWC". Specify the data format of the input and output data. With the
 *     default format "NDHWC", the data is stored in the order of: [batch,
 *     depth, height, width, channels]. Only "NDHWC" is currently supported.
 * @param pad The type of padding algorithm.
 *    - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *    - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *    - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param includeBatchIndex Defaults to False. Whether to include batch
 *    dimension in flattened index of argmax.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function maxPoolWithArgmax_(x, filterSize, strides, pad, includeBatchInIndex = false) {
    const $x = convertToTensor(x, 'x', 'maxPoolWithArgmax');
    const inputs = { x: $x };
    const attrs = { filterSize, strides, pad, includeBatchInIndex };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const result = ENGINE.runKernel(MaxPoolWithArgmax, inputs, attrs);
    return { result: result[0], indexes: result[1] };
}
const maxPoolWithArgmax = op({ maxPoolWithArgmax_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the max of a and b (`a > b ? a : b`) element-wise.
 * Supports broadcasting.
 *
 * We also expose `tf.maximumStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.maximum(b).print();  // or tf.maximum(a, b)
 * ```
 *
 * ```js
 * // Broadcast maximum a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.maximum(b).print();  // or tf.maximum(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function maximum_(a, b) {
    let $a = convertToTensor(a, 'a', 'maximum');
    let $b = convertToTensor(b, 'b', 'maximum');
    [$a, $b] = makeTypesMatch($a, $b);
    if ($a.dtype === 'bool') {
        $a = cast($a, 'int32');
        $b = cast($b, 'int32');
    }
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Maximum, inputs);
}
const maximum = op({ maximum_ });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the mean of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces `x` along the dimensions given in `axis`. Unless `keepDims` is
 * true, the rank of the `tf.Tensor` is reduced by 1 for each entry in `axis`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axis` has no entries, all dimensions are reduced, and a `tf.Tensor` with
 * a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.mean().print();  // or tf.mean(a)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.mean(axis).print();  // or tf.mean(x, axis)
 * ```
 *
 * @param x The input tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function mean_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'mean');
    const inputs = { x: $x };
    const attrs = { axis, keepDims };
    return ENGINE.runKernel(Mean, inputs, attrs);
}
const mean = op({ mean_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with all elements set to 1.
 *
 * ```js
 * tf.ones([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param dtype The type of an element in the resulting tensor. Defaults to
 *     'float'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function ones(shape, dtype = 'float32') {
    if (dtype === 'complex64') {
        const real = ones(shape, 'float32');
        const imag = zeros(shape, 'float32');
        return complex(real, imag);
    }
    const values = makeOnesTypedArray(sizeFromShape(shape), dtype);
    return ENGINE.makeTensor(values, shape, dtype);
}

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the minimum value from the input.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the array is reduced by 1 for each entry in `axes`.
 * If `keepDims` is true, the reduced dimensions are retained with length 1.
 * If `axes` has no entries, all dimensions are reduced, and an array with a
 * single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.min().print();  // or tf.min(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.min(axis).print();  // or tf.min(x, axis)
 * ```
 *
 * @param x The input Tensor.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function min_(x, axis = null, keepDims = false) {
    const $x = convertToTensor(x, 'x', 'min');
    const inputs = { x: $x };
    const attrs = { axis, keepDims };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    return ENGINE.runKernel(Min, inputs, attrs);
}
const min = op({ min_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the min of a and b (`a < b ? a : b`) element-wise.
 * Supports broadcasting.
 *
 * We also expose `minimumStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.minimum(b).print();  // or tf.minimum(a, b)
 * ```
 *
 * ```js
 * // Broadcast minimum a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.minimum(b).print();  // or tf.minimum(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function minimum_(a, b) {
    let $a = convertToTensor(a, 'a', 'minimum');
    let $b = convertToTensor(b, 'b', 'minimum');
    [$a, $b] = makeTypesMatch($a, $b);
    if ($a.dtype === 'bool') {
        $a = cast($a, 'int32');
        $b = cast($b, 'int32');
    }
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Minimum, inputs);
}
const minimum = op({ minimum_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Pads a `tf.Tensor` using mirror padding.
 *
 * This operation implements the `REFLECT` and `SYMMETRIC` modes of pad.
 *
 * ```js
 * const x = tf.range(0, 9).reshape([1, 1, 3, 3]);
 * x.mirrorPad([[0, 0], [0, 0], [2, 2], [2, 2]], 'reflect').print();
 * ```
 * @param x The tensor to pad.
 * @param paddings An array of length `R` (the rank of the tensor), where
 * each element is a length-2 tuple of ints `[padBefore, padAfter]`,
 * specifying how much to pad along each dimension of the tensor.
 * In "reflect" mode, the padded regions do not include the borders,
 * while in "symmetric" mode the padded regions do include the borders.
 * For example, if the input is `[1, 2, 3]` and paddings is `[0, 2]`,
 * then the output is `[1, 2, 3, 2, 1]` in "reflect" mode, and
 * `[1, 2, 3, 3, 2]` in "symmetric" mode.
 * If `mode` is "reflect" then both `paddings[D, 0]` and `paddings[D, 1]`
 * must be no greater than `x.shape[D] - 1`. If mode is "symmetric"
 * then both `paddings[D, 0]` and `paddings[D, 1]` must be no greater than
 * `x.shape[D]`
 * @param mode String to specify padding mode. Can be `'reflect' | 'symmetric'`
 */
/** @doc {heading: 'Tensors', subheading: 'Transformations'} */
function mirrorPad_(x, paddings, mode) {
    assert(mode === 'reflect' || mode === 'symmetric', () => `Invalid mode. Mode must be either reflect or symmetric. ` +
        `Got ${mode}.`);
    const $x = convertToTensor(x, 'x', 'mirrorPad');
    if ($x.rank === 0) {
        throw new Error('mirrorPad(scalar) is not defined. ' +
            'Pass non-scalar to mirrorPad');
    }
    assert(paddings.length === $x.rank, () => `Padding doesn't match input. Must be ${$x.rank}. ` +
        `Got ${paddings.length}.`);
    const shapeOffset = mode === 'reflect' ? 1 : 0;
    for (let i = 0; i < $x.rank; i++) {
        assert(paddings[i].length === 2, () => `Invalid number of paddings. Must be length of 2 each.`);
        assert(paddings[i][0] >= 0 && paddings[i][0] <= $x.shape[i] - shapeOffset &&
            paddings[i][1] >= 0 && paddings[i][1] <= $x.shape[i] - shapeOffset, () => `Padding in dimension ${i} cannot be greater than or equal ` +
            `to ${$x.shape[i] - shapeOffset} or less than 0 for input of ` +
            `shape ${$x.shape}`);
    }
    const attrs = { paddings, mode };
    const inputs = { x: $x };
    return ENGINE.runKernel(MirrorPad, inputs, attrs);
}
const mirrorPad = op({ mirrorPad_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the mod of a and b element-wise.
 * `floor(x / y) * y + mod(x, y) = x`
 * Supports broadcasting.
 *
 * We also expose `tf.modStrict` which has the same signature as this op and
 * asserts that `a` and `b` are the same shape (does not broadcast).
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.mod(b).print();  // or tf.mod(a, b)
 * ```
 *
 * ```js
 * // Broadcast a mod b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.mod(b).print();  // or tf.mod(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function mod_(a, b) {
    let $a = convertToTensor(a, 'a', 'mod');
    let $b = convertToTensor(b, 'b', 'mod');
    [$a, $b] = makeTypesMatch($a, $b);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(Mod, inputs);
}
const mod = op({ mod_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes square of `x` element-wise: `x ^ 2`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, Math.sqrt(2), -1]);
 *
 * x.square().print();  // or tf.square(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function square_(x) {
    const $x = convertToTensor(x, 'x', 'square');
    const attrs = {};
    return ENGINE.runKernel('Square', { x: $x }, attrs);
}
const square = op({ square_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with values drawn from a multinomial distribution.
 *
 * ```js
 * const probs = tf.tensor([.75, .25]);
 * tf.multinomial(probs, 3).print();
 * ```
 *
 * @param logits 1D array with unnormalized log-probabilities, or
 *     2D array of shape `[batchSize, numOutcomes]`. See the `normalized`
 *     parameter.
 * @param numSamples Number of samples to draw for each row slice.
 * @param seed The seed number.
 * @param normalized Whether the provided `logits` are normalized true
 *     probabilities (sum to 1). Defaults to false.
 * @return 1D array of shape `[numSamples]`, or 2D array of shape
 *     `[batchSize, numSamples]`, depending on the rank of the input.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
function multinomial_(logits, numSamples, seed, normalized = false) {
    const $logits = convertToTensor(logits, 'logits', 'multinomial');
    const numOutcomes = $logits.size;
    const origRank = $logits.rank;
    if (numOutcomes < 2) {
        throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ` +
            `${numOutcomes}.`);
    }
    if (origRank > 2) {
        throw new Error(`Rank of probabilities must be 1 or 2, but is ${origRank}`);
    }
    // TODO(lina128): Investigate correct seed behavior. The code seems not allow
    // setting see to 0.
    seed = seed || Math.random();
    // The kernel only accepts (and returns) rank 2 tensors.
    const logits2D = origRank === 1 ? reshape($logits, [1, -1]) : $logits;
    const inputs = { logits: logits2D };
    const attrs = { numSamples, seed, normalized };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(Multinomial, inputs, attrs);
    // tslint:disable-next-line:no-unnecessary-type-assertion
    return origRank === 1 ? reshape(res, [res.size]) : res;
}
const multinomial = op({ multinomial_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the truth value of (a != b) element-wise. Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([0, 2, 3]);
 *
 * a.notEqual(b).print();
 * ```
 * @param a The first input tensor.
 * @param b The second input tensor. Must have the same dtype as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
function notEqual_(a, b) {
    let $a = convertToTensor(a, 'a', 'notEqual', 'string_or_numeric');
    let $b = convertToTensor(b, 'b', 'notEqual', 'string_or_numeric');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    return ENGINE.runKernel(NotEqual, inputs);
}
const notEqual = op({ notEqual_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with all elements set to 1 with the same shape as the
 * given tensor.
 *
 * ```js
 * const x = tf.tensor([1, 2]);
 * tf.onesLike(x).print();
 * ```
 * @param x A tensor.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function onesLike_(x) {
    const $x = convertToTensor(x, 'x', 'onesLike');
    const inputs = { x: $x };
    return ENGINE.runKernel(OnesLike, inputs);
}
const onesLike = op({ onesLike_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Pads a `tf.Tensor` with a given value and paddings.
 *
 * This operation implements `CONSTANT` mode. For `REFLECT` and `SYMMETRIC`,
 * refer to `tf.mirrorPad`
 *
 * Also available are stricter rank-specific methods with the same signature
 * as this method that assert that `paddings` is of given length.
 *   - `tf.pad1d`
 *   - `tf.pad2d`
 *   - `tf.pad3d`
 *   - `tf.pad4d`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 * x.pad([[1, 2]]).print();
 * ```
 * @param x The tensor to pad.
 * @param paddings An array of length `R` (the rank of the tensor), where
 * each element is a length-2 tuple of ints `[padBefore, padAfter]`,
 * specifying how much to pad along each dimension of the tensor.
 * @param constantValue The pad value to use. Defaults to 0.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function pad_(x, paddings, constantValue = 0) {
    const $x = convertToTensor(x, 'x', 'pad');
    if ($x.rank === 0) {
        throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
    }
    const attrs = { paddings, constantValue };
    const inputs = { x: $x };
    return ENGINE.runKernel(PadV2, inputs, attrs);
}
const pad = op({ pad_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * This operation divides "spatial" dimensions `[1, ..., M]` of the input into
 * a grid of blocks of shape `blockShape`, and interleaves these blocks with
 * the "batch" dimension (0) such that in the output, the spatial
 * dimensions `[1, ..., M]` correspond to the position within the grid,
 * and the batch dimension combines both the position within a spatial block
 * and the original batch position. Prior to division into blocks,
 * the spatial dimensions of the input are optionally zero padded
 * according to `paddings`. See below for a precise description.
 *
 * ```js
 * const x = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
 * const blockShape = [2, 2];
 * const paddings = [[0, 0], [0, 0]];
 *
 * x.spaceToBatchND(blockShape, paddings).print();
 * ```
 *
 * @param x A `tf.Tensor`. N-D with `x.shape` = `[batch] + spatialShape +
 * remainingShape`, where spatialShape has `M` dimensions.
 * @param blockShape A 1-D array. Must have shape `[M]`, all values must
 * be >= 1.
 * @param paddings A 2-D array. Must have shape `[M, 2]`, all values must be >=
 *     0. `paddings[i] = [padStart, padEnd]` specifies the amount to zero-pad
 * from input dimension `i + 1`, which corresponds to spatial dimension `i`. It
 * is required that
 * `(inputShape[i + 1] + padStart + padEnd) % blockShape[i] === 0`
 *
 * This operation is equivalent to the following steps:
 *
 * 1. Zero-pad the start and end of dimensions `[1, ..., M]` of the input
 * according to `paddings` to produce `padded` of shape paddedShape.
 *
 * 2. Reshape `padded` to `reshapedPadded` of shape:
 * `[batch] + [paddedShape[1] / blockShape[0], blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1], blockShape[M-1]] + remainingShape`
 *
 * 3. Permute dimensions of `reshapedPadded` to produce `permutedReshapedPadded`
 * of shape: `blockShape + [batch] + [paddedShape[1] / blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1]] + remainingShape`
 *
 * 4. Reshape `permutedReshapedPadded` to flatten `blockShape` into the
 * batch dimension, producing an output tensor of shape:
 * `[batch * prod(blockShape)] + [paddedShape[1] / blockShape[0], ...,
 * paddedShape[M] / blockShape[M-1]] + remainingShape`
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function spaceToBatchND_(x, blockShape, paddings) {
    const $x = convertToTensor(x, 'x', 'spaceToBatchND');
    assert($x.rank >= 1 + blockShape.length, () => `input rank ${$x.rank} should be > than [blockShape] ${blockShape.length}`);
    assert(paddings.length === blockShape.length, () => `paddings.shape[0] ${paddings.length} must be equal to [blockShape] ${blockShape.length}`);
    assert($x.shape.reduce((a, b, i) => {
        if (i > 0 && i <= blockShape.length) {
            return a &&
                ((b + paddings[i - 1][0] + paddings[i - 1][1]) %
                    blockShape[i - 1] ===
                    0);
        }
        return a;
    }, true), () => `input spatial dimensions ${$x.shape.slice(1)} with paddings ${paddings.toString()} must be divisible by blockShapes ${blockShape.toString()}`);
    const inputs = { x: $x };
    const attrs = { blockShape, paddings };
    return ENGINE.runKernel(SpaceToBatchND, inputs, attrs);
}
const spaceToBatchND = op({ spaceToBatchND_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the power of one `tf.Tensor` to another. Supports broadcasting.
 *
 * Given a `tf.Tensor` x and a `tf.Tensor` y, this operation computes x^y for
 * corresponding elements in x and y. The result's dtype will be the upcasted
 * type of the `base` and `exp` dtypes.
 *
 * ```js
 * const a = tf.tensor([[2, 3], [4, 5]])
 * const b = tf.tensor([[1, 2], [3, 0]]).toInt();
 *
 * a.pow(b).print();  // or tf.pow(a, b)
 * ```
 *
 * ```js
 * const a = tf.tensor([[1, 2], [3, 4]])
 * const b = tf.tensor(2).toInt();
 *
 * a.pow(b).print();  // or tf.pow(a, b)
 * ```
 * We also expose `powStrict` which has the same signature as this op and
 * asserts that `base` and `exp` are the same shape (does not broadcast).
 *
 * @param base The base `tf.Tensor` to pow element-wise.
 * @param exp The exponent `tf.Tensor` to pow element-wise.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function pow_(base, exp) {
    let $base = convertToTensor(base, 'base', 'pow');
    let $exp = convertToTensor(exp, 'exp', 'pow');
    [$base, $exp] = makeTypesMatch($base, $exp);
    const inputs = { a: $base, b: $exp };
    return ENGINE.runKernel(Pow, inputs);
}
const pow = op({ pow_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the product of elements across dimensions of a `tf.Tensor`.
 *
 * Reduces the input along the dimensions given in `axes`. Unless `keepDims`
 * is true, the rank of the `tf.Tensor` is reduced by 1 for each entry in
 * `axes`. If `keepDims` is true, the reduced dimensions are retained with
 * length 1. If `axes` has no entries, all dimensions are reduced, and a
 * `tf.Tensor` with a single element is returned.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3]);
 *
 * x.prod().print();  // or tf.prod(x)
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.prod(axis).print();  // or tf.prod(x, axis)
 * ```
 *
 * @param x The input tensor to compute the product over. If the dtype is `bool`
 *   it will be converted to `int32` and the output dtype will be `int32`.
 * @param axis The dimension(s) to reduce. By default it reduces
 *     all dimensions.
 * @param keepDims If true, retains reduced dimensions with size 1.
 *
 * @doc {heading: 'Operations', subheading: 'Reduction'}
 */
function prod_(x, axis = null, keepDims = false) {
    let $x = convertToTensor(x, 'x', 'prod');
    if ($x.dtype === 'bool') {
        // bool is not an allowed type for the underlying kernel.
        $x = cast($x, 'int32');
    }
    const inputs = { x: $x };
    const attrs = { axis, keepDims };
    return ENGINE.runKernel(Prod, inputs, attrs);
}
const prod = op({ prod_ });

var alea = createCommonjsModule(function (module) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; };
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.alea = impl;
}

})(
  commonjsGlobal,
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var xor128 = createCommonjsModule(function (module) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor128 = impl;
}

})(
  commonjsGlobal,
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var xorwow = createCommonjsModule(function (module) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorwow = impl;
}

})(
  commonjsGlobal,
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var xorshift7 = createCommonjsModule(function (module) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) X[7] = -1;

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorshift7 = impl;
}

})(
  commonjsGlobal,
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var xor4096 = createCommonjsModule(function (module) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
}
function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor4096 = impl;
}

})(
  commonjsGlobal,                                     // window object or global
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var tychei = createCommonjsModule(function (module) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
}
function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); };
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.tychei = impl;
}

})(
  commonjsGlobal,
   module,    // present in node.js
  (typeof undefined) == 'function'    // present with an AMD loader
);
});

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(_nodeResolve_empty$1);

var seedrandom = createCommonjsModule(function (module) {
/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
var global = this,
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; };
  prng.quick = function() { return arc4.g(4) / 0x100000000; };
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); };
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
}
//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = require$$0;
  } catch (ex) {}
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);
});

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.


// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.


// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.


// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.


// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.


// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.


// The original ARC4-based prng included in this library.
// Period: ~2^1600


seedrandom.alea = alea;
seedrandom.xor128 = xor128;
seedrandom.xorwow = xorwow;
seedrandom.xorshift7 = xorshift7;
seedrandom.xor4096 = xor4096;
seedrandom.tychei = tychei;

var seedrandom$1 = seedrandom;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// https://en.wikipedia.org/wiki/Marsaglia_polar_method
class MPRandGauss {
    constructor(mean, stdDeviation, dtype, truncated, seed) {
        this.mean = mean;
        this.stdDev = stdDeviation;
        this.dtype = dtype;
        this.nextVal = NaN;
        this.truncated = truncated;
        if (this.truncated) {
            this.upper = this.mean + this.stdDev * 2;
            this.lower = this.mean - this.stdDev * 2;
        }
        const seedValue = seed ? seed : Math.random();
        this.random = seedrandom$1.alea(seedValue.toString());
    }
    /** Returns next sample from a Gaussian distribution. */
    nextValue() {
        if (!isNaN(this.nextVal)) {
            const value = this.nextVal;
            this.nextVal = NaN;
            return value;
        }
        let resultX, resultY;
        let isValid = false;
        while (!isValid) {
            let v1, v2, s;
            do {
                v1 = 2 * this.random() - 1;
                v2 = 2 * this.random() - 1;
                s = v1 * v1 + v2 * v2;
            } while (s >= 1 || s === 0);
            const mul = Math.sqrt(-2.0 * Math.log(s) / s);
            resultX = this.mean + this.stdDev * v1 * mul;
            resultY = this.mean + this.stdDev * v2 * mul;
            if (!this.truncated || this.isValidTruncated(resultX)) {
                isValid = true;
            }
        }
        if (!this.truncated || this.isValidTruncated(resultY)) {
            this.nextVal = this.convertValue(resultY);
        }
        return this.convertValue(resultX);
    }
    /** Handles proper rounding for non-floating-point numbers. */
    convertValue(value) {
        if (this.dtype == null || this.dtype === 'float32') {
            return value;
        }
        return Math.round(value);
    }
    /** Returns true if less than 2-standard-deviations from the mean. */
    isValidTruncated(value) {
        return value <= this.upper && value >= this.lower;
    }
}
// Marsaglia, George, and Wai Wan Tsang. 2000. "A Simple Method for Generating
// Gamma Variables."
class RandGamma {
    constructor(alpha, beta, dtype, seed) {
        this.alpha = alpha;
        this.beta = 1 / beta; // convert rate to scale parameter
        this.dtype = dtype;
        const seedValue = seed ? seed : Math.random();
        this.randu = seedrandom$1.alea(seedValue.toString());
        this.randn = new MPRandGauss(0, 1, dtype, false, this.randu());
        if (alpha < 1) {
            this.d = alpha + (2 / 3);
        }
        else {
            this.d = alpha - (1 / 3);
        }
        this.c = 1 / Math.sqrt(9 * this.d);
    }
    /** Returns next sample from a gamma distribution. */
    nextValue() {
        let x2, v0, v1, x, u, v;
        while (true) {
            do {
                x = this.randn.nextValue();
                v = 1 + (this.c * x);
            } while (v <= 0);
            v *= v * v;
            x2 = x * x;
            v0 = 1 - (0.331 * x2 * x2);
            v1 = (0.5 * x2) + (this.d * (1 - v + Math.log(v)));
            u = this.randu();
            if (u < v0 || Math.log(u) < v1) {
                break;
            }
        }
        v = (1 / this.beta) * this.d * v;
        if (this.alpha < 1) {
            v *= Math.pow(this.randu(), 1 / this.alpha);
        }
        return this.convertValue(v);
    }
    /** Handles proper rounding for non-floating-point numbers. */
    convertValue(value) {
        if (this.dtype === 'float32') {
            return value;
        }
        return Math.round(value);
    }
}
class UniformRandom {
    constructor(min = 0, max = 1, dtype, seed) {
        /** Handles proper rounding for non floating point numbers. */
        this.canReturnFloat = () => (this.dtype == null || this.dtype === 'float32');
        this.min = min;
        this.range = max - min;
        this.dtype = dtype;
        if (seed == null) {
            seed = Math.random();
        }
        if (typeof seed === 'number') {
            seed = seed.toString();
        }
        if (!this.canReturnFloat() && this.range <= 1) {
            throw new Error(`The difference between ${min} - ${max} <= 1 and dtype is not float`);
        }
        this.random = seedrandom$1.alea(seed);
    }
    convertValue(value) {
        if (this.canReturnFloat()) {
            return value;
        }
        return Math.round(value);
    }
    nextValue() {
        return this.convertValue(this.min + this.range * this.random());
    }
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with values sampled from a uniform distribution.
 *
 * The generated values follow a uniform distribution in the range [minval,
 * maxval). The lower bound minval is included in the range, while the upper
 * bound maxval is excluded.
 *
 * ```js
 * tf.randomUniform([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param minval The lower bound on the range of random values to generate.
 *   Defaults to 0.
 * @param maxval The upper bound on the range of random values to generate.
 *   Defaults to 1.
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
function randomUniform_(shape, minval = 0, maxval = 1, dtype = 'float32', seed) {
    const res = buffer(shape, dtype);
    const random = new UniformRandom(minval, maxval, null, seed);
    for (let i = 0; i < res.values.length; i++) {
        res.values[i] = random.nextValue();
    }
    return res.toTensor();
}
const randomUniform = op({ randomUniform_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a new `tf.Tensor1D` filled with the numbers in the range provided.
 *
 * The tensor is a is half-open interval meaning it includes start, but
 * excludes stop. Decrementing ranges and negative step values are also
 * supported.sv
 *
 *
 * ```js
 * tf.range(0, 9, 2).print();
 * ```
 *
 * @param start An integer start value
 * @param stop An integer stop value
 * @param step An integer increment (will default to 1 or -1)
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function range(start, stop, step = 1, dtype = 'float32') {
    if (step === 0) {
        throw new Error('Cannot have a step of zero');
    }
    const attrs = { start, stop, step, dtype };
    return ENGINE.runKernel(Range, {} /* inputs */, attrs);
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the real part of a complex (or real) tensor.
 *
 * Given a tensor input, this operation returns a tensor of type float that is
 * the real part of each element in input considered as a complex number.
 *
 * If the input is real, it simply makes a clone.
 *
 * ```js
 * const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
 * tf.real(x).print();
 * ```
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function real_(input) {
    const $input = convertToTensor(input, 'input', 'real');
    const inputs = { input: $input };
    return ENGINE.runKernel(Real, inputs);
}
const real = op({ real_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes reciprocal of x element-wise: `1 / x`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, 2]);
 *
 * x.reciprocal().print();  // or tf.reciprocal(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function reciprocal_(x) {
    const $x = convertToTensor(x, 'x', 'reciprocal');
    const inputs = { x: $x };
    return ENGINE.runKernel(Reciprocal, inputs);
}
const reciprocal = op({ reciprocal_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Reverses a `tf.Tensor` along a specified axis.
 *
 * Also available are stricter rank-specific methods that assert that `x` is
 * of the given rank:
 *   - `tf.reverse1d`
 *   - `tf.reverse2d`
 *   - `tf.reverse3d`
 *   - `tf.reverse4d`
 *
 * Except `tf.reverse1d` (which does not have axis param), all methods have
 * same signature as this method.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.reverse().print();
 * ```
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * const axis = 1;
 * x.reverse(axis).print();
 * ```
 * @param x The input tensor to be reversed.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function reverse_(x, axis) {
    const $x = convertToTensor(x, 'x', 'reverse');
    const inputs = { x: $x };
    const attrs = { dims: axis };
    return ENGINE.runKernel(Reverse, inputs, attrs);
}
const reverse = op({ reverse_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes round of input `tf.Tensor` element-wise: `round(x)`.
 * It implements banker's rounding.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3]);
 *
 * x.round().print();  // or tf.round(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function round_(x) {
    const $x = convertToTensor(x, 'x', 'round');
    const inputs = { x: $x };
    return ENGINE.runKernel(Round, inputs);
}
const round = op({ round_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes reciprocal of square root of the input `tf.Tensor` element-wise:
 * `y = 1 / sqrt(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 4, -1]);
 *
 * x.rsqrt().print();  // or tf.rsqrt(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function rsqrt_(x) {
    const $x = convertToTensor(x, 'x', 'rsqrt');
    const inputs = { x: $x };
    return ENGINE.runKernel(Rsqrt, inputs);
}
const rsqrt = op({ rsqrt_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes scaled exponential linear element-wise.
 *
 * `x < 0 ? scale * alpha * (exp(x) - 1) : x`
 *
 * ```js
 * const x = tf.tensor1d([-1, 2, -3, 4]);
 *
 * x.selu().print();  // or tf.selu(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function selu_(x) {
    const $x = convertToTensor(x, 'x', 'selu');
    const inputs = { x: $x };
    return ENGINE.runKernel(Selu, inputs);
}
const selu = op({ selu_ });

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the difference between two lists of numbers.
 *
 * Given a Tensor `x` and a Tensor `y`, this operation returns a Tensor `out`
 * that represents all values that are in `x` but not in `y`. The returned
 * Tensor `out` is sorted in the same order that the numbers appear in `x`
 * (duplicates are preserved). This operation also returns a Tensor indices that
 * represents the position of each out element in `x`. In other words:
 *
 * `out[i] = x[idx[i]] for i in [0, 1, ..., out.length - 1]`
 *
 * ```js
 * const x = [1, 2, 3, 4, 5, 6];
 * const y = [1, 3, 5];
 *
 * const [out, indices] = await tf.setdiff1dAsync(x, y);
 * out.print(); // [2, 4, 6]
 * indices.print(); // [1, 3, 5]
 * ```
 *
 * @param x 1-D Tensor. Values to keep.
 * @param y 1-D Tensor. Must have the same type as x. Values to exclude in the
 *     output.
 * @returns Promise of Tensor tuple [out, indices].
 *  out: Tensor with the same type as x.
 *  indices: A Tensor of type int32.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
async function setdiff1dAsync_(x, y) {
    const $x = convertToTensor(x, 'x', 'setdiff1d');
    const $y = convertToTensor(y, 'y', 'setdiff1d');
    assert($x.dtype === $y.dtype, () => `x and y should have the same dtype, but got x (${$x.dtype}) and y (${$y.dtype}).`);
    assert($x.rank === 1, () => `x should be 1D tensor, but got x (${$x.shape}).`);
    assert($y.rank === 1, () => `y should be 1D tensor, but got y (${$y.shape}).`);
    const xVals = await $x.data();
    const yVals = await $y.data();
    const ySet = new Set(yVals);
    let outputSize = 0;
    for (let i = 0; i < xVals.length; i++) {
        if (!ySet.has(xVals[i])) {
            outputSize++;
        }
    }
    const buffer = new TensorBuffer([outputSize], $x.dtype);
    const indices = new TensorBuffer([outputSize], 'int32');
    for (let i = 0, p = 0; i < xVals.length; i++) {
        if (!ySet.has(xVals[i])) {
            buffer.values[p] = xVals[i];
            indices.values[p] = i;
            p++;
        }
    }
    return [buffer.toTensor(), indices.toTensor()];
}
const setdiff1dAsync = setdiff1dAsync_;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns an element-wise indication of the sign of a number.
 *
 * ```js
 * const x = tf.tensor1d([.6, 1.1, -3.3, NaN, 0]);
 *
 * x.sign().print();  // or tf.sign(x)
 * ```
 * @param x The input Tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function sign_(x) {
    const $x = convertToTensor(x, 'x', 'sign');
    const inputs = { x: $x };
    return ENGINE.runKernel(Sign, inputs);
}
const sign = op({ sign_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes sin of the input Tensor element-wise: `sin(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.sin().print();  // or tf.sin(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function sin_(x) {
    const $x = convertToTensor(x, 'x', 'sin');
    const inputs = { x: $x };
    return ENGINE.runKernel(Sin, inputs);
}
const sin = op({ sin_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes hyperbolic sin of the input `tf.Tensor` element-wise: `sinh(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, 1, -1, .7]);
 *
 * x.sinh().print();  // or tf.sinh(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function sinh_(x) {
    const $x = convertToTensor(x, 'x', 'sinh');
    const inputs = { x: $x };
    return ENGINE.runKernel(Sinh, inputs);
}
const sinh = op({ sinh_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the softmax normalized vector given the logits.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 *
 * a.softmax().print();  // or tf.softmax(a)
 * ```
 *
 * ```js
 * const a = tf.tensor2d([2, 4, 6, 1, 2, 3], [2, 3]);
 *
 * a.softmax().print();  // or tf.softmax(a)
 * ```
 *
 * @param logits The logits array.
 * @param dim The dimension softmax would be performed on. Defaults to `-1`
 *     which indicates the last dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function softmax_(logits, dim = -1) {
    const $logits = convertToTensor(logits, 'logits', 'softmax', 'float32');
    if (dim === -1) {
        dim = $logits.rank - 1;
    }
    if (dim !== $logits.rank - 1) {
        throw Error('Softmax along a non-last dimension is not yet supported. ' +
            `Logits was rank ${$logits.rank} and dim was ${dim}`);
    }
    const inputs = { logits: $logits };
    const attrs = { dim };
    return ENGINE.runKernel(Softmax, inputs, attrs);
}
const softmax = op({ softmax_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Fast Fourier transform.
 *
 * Computes the 1-dimensional discrete Fourier transform over the inner-most
 * dimension of input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([1, 2, 3]);
 * const x = tf.complex(real, imag);
 *
 * x.fft().print();  // tf.spectral.fft(x).print();
 * ```
 * @param input The complex input to compute an fft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
function fft_(input) {
    assert(input.dtype === 'complex64', () => `The dtype for tf.spectral.fft() must be complex64 ` +
        `but got ${input.dtype}.`);
    const inputs = { input };
    return ENGINE.runKernel(FFT, inputs);
}
const fft = op({ fft_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Inverse fast Fourier transform.
 *
 * Computes the inverse 1-dimensional discrete Fourier transform over the
 * inner-most dimension of input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([1, 2, 3]);
 * const x = tf.complex(real, imag);
 *
 * x.ifft().print();  // tf.spectral.ifft(x).print();
 * ```
 * @param input The complex input to compute an ifft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
function ifft_(input) {
    assert(input.dtype === 'complex64', () => `The dtype for tf.spectral.ifft() must be complex64 ` +
        `but got ${input.dtype}.`);
    const inputs = { input };
    return ENGINE.runKernel(IFFT, inputs);
}
const ifft = op({ ifft_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Inversed real value input fast Fourier transform.
 *
 * Computes the 1-dimensional inversed discrete Fourier transform over the
 * inner-most dimension of the real input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 * const imag = tf.tensor1d([0, 0, 0]);
 * const x = tf.complex(real, imag);
 *
 * x.irfft().print();
 * ```
 * @param input The real value input to compute an irfft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
function irfft_(input) {
    const innerDimensionSize = input.shape[input.shape.length - 1];
    const batch = input.size / innerDimensionSize;
    let ret;
    if (innerDimensionSize <= 2) {
        const complexInput = reshape(input, [batch, innerDimensionSize]);
        ret = ifft(complexInput);
    }
    else {
        // The length of unique components of the DFT of a real-valued signal
        // is 2 * (input_len - 1)
        const outputShape = [batch, 2 * (innerDimensionSize - 1)];
        const realInput = reshape(real(input), [batch, innerDimensionSize]);
        const imagInput = reshape(imag(input), [batch, innerDimensionSize]);
        const realConjugate = reverse(slice(realInput, [0, 1], [batch, innerDimensionSize - 2]), 1);
        const imagConjugate = mul(reverse(slice(imagInput, [0, 1], [batch, innerDimensionSize - 2]), 1), scalar(-1));
        const r = concat([realInput, realConjugate], 1);
        const i = concat([imagInput, imagConjugate], 1);
        const complexInput = reshape(complex(r, i), [outputShape[0], outputShape[1]]);
        ret = ifft(complexInput);
    }
    ret = real(ret);
    // reshape the result if the input is 3D tensor.
    if (input.rank === 3 && input.shape[0] !== 0) {
        const temp = ret;
        const batch = input.shape[0];
        ret = reshape(ret, [batch, ret.shape[0] / batch, ret.shape[1]]);
        temp.dispose();
    }
    return ret;
}
const irfft = op({ irfft_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Splits a `tf.Tensor` into sub tensors.
 *
 * If `numOrSizeSplits` is a number, splits `x` along dimension `axis`
 * into `numOrSizeSplits` smaller tensors.
 * Requires that `numOrSizeSplits` evenly divides `x.shape[axis]`.
 *
 * If `numOrSizeSplits` is a number array, splits `x` into
 * `numOrSizeSplits.length` pieces. The shape of the `i`-th piece has the
 * same size as `x` except along dimension `axis` where the size is
 * `numOrSizeSplits[i]`.
 *
 * ```js
 * const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
 * const [a, b] = tf.split(x, 2, 1);
 * a.print();
 * b.print();
 *
 * const [c, d, e] = tf.split(x, [1, 2, 1], 1);
 * c.print();
 * d.print();
 * e.print();
 * ```
 *
 * @param x The input tensor to split.
 * @param numOrSizeSplits Either an integer indicating the number of
 * splits along the axis or an array of integers containing the sizes of
 * each output tensor along the axis. If a number then it must evenly divide
 * `x.shape[axis]`; otherwise the sum of sizes must match `x.shape[axis]`.
 * Can contain one -1 indicating that dimension is to be inferred.
 * @param axis The dimension along which to split. Defaults to 0 (the first
 * dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function split_(x, numOrSizeSplits, axis = 0) {
    const $x = convertToTensor(x, 'x', 'split');
    const inputs = { x: $x };
    const attr = { numOrSizeSplits, axis };
    return ENGINE.runKernel(SplitV, inputs, attr);
}
const split = op({ split_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Real value input fast Fourier transform.
 *
 * Computes the 1-dimensional discrete Fourier transform over the
 * inner-most dimension of the real input.
 *
 * ```js
 * const real = tf.tensor1d([1, 2, 3]);
 *
 * real.rfft().print();
 * ```
 * @param input The real value input to compute an rfft over.
 *
 * @doc {heading: 'Operations', subheading: 'Spectral', namespace: 'spectral'}
 */
function rfft_(input, fftLength) {
    assert(input.dtype === 'float32', () => `The dtype for rfft() must be real value but got ${input.dtype}`);
    let innerDimensionSize = input.shape[input.shape.length - 1];
    const batch = input.size / innerDimensionSize;
    let adjustedInput;
    if (fftLength != null && fftLength < innerDimensionSize) {
        // Need to crop
        const begin = input.shape.map(v => 0);
        const size = input.shape.map(v => v);
        size[input.shape.length - 1] = fftLength;
        adjustedInput = slice(input, begin, size);
        innerDimensionSize = fftLength;
    }
    else if (fftLength != null && fftLength > innerDimensionSize) {
        // Need to pad with zeros
        const zerosShape = input.shape.map(v => v);
        zerosShape[input.shape.length - 1] = fftLength - innerDimensionSize;
        adjustedInput = concat([input, zeros(zerosShape)], input.shape.length - 1);
        innerDimensionSize = fftLength;
    }
    else {
        adjustedInput = input;
    }
    // Complement the input with zero imaginary numbers.
    const zerosInput = zerosLike(adjustedInput);
    const complexInput = reshape(complex(adjustedInput, zerosInput), [batch, innerDimensionSize]);
    const ret = fft(complexInput);
    // Exclude complex conjugations. These conjugations are put symmetrically.
    const half = Math.floor(innerDimensionSize / 2) + 1;
    const realValues = real(ret);
    const imagValues = imag(ret);
    const realComplexConjugate = split(realValues, [half, innerDimensionSize - half], realValues.shape.length - 1);
    const imagComplexConjugate = split(imagValues, [half, innerDimensionSize - half], imagValues.shape.length - 1);
    const outputShape = adjustedInput.shape.slice();
    outputShape[adjustedInput.shape.length - 1] = half;
    return reshape(complex(realComplexConjugate[0], imagComplexConjugate[0]), outputShape);
}
const rfft = op({ rfft_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes square root of the input `tf.Tensor` element-wise: `y = sqrt(x)`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 4, -1]);
 *
 * x.sqrt().print();  // or tf.sqrt(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function sqrt_(x) {
    const $x = convertToTensor(x, 'x', 'sqrt');
    const inputs = { x: $x };
    return ENGINE.runKernel(Sqrt, inputs);
}
const sqrt = op({ sqrt_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns (a - b) * (a - b) element-wise.
 * Supports broadcasting.
 *
 * ```js
 * const a = tf.tensor1d([1, 4, 3, 16]);
 * const b = tf.tensor1d([1, 2, 9, 4]);
 *
 * a.squaredDifference(b).print();  // or tf.squaredDifference(a, b)
 * ```
 *
 * ```js
 * // Broadcast squared difference  a with b.
 * const a = tf.tensor1d([2, 4, 6, 8]);
 * const b = tf.scalar(5);
 *
 * a.squaredDifference(b).print();  // or tf.squaredDifference(a, b)
 * ```
 *
 * @param a The first tensor.
 * @param b The second tensor. Must have the same type as `a`.
 *
 * @doc {heading: 'Operations', subheading: 'Arithmetic'}
 */
function squaredDifference_(a, b) {
    let $a = convertToTensor(a, 'a', 'squaredDifference');
    let $b = convertToTensor(b, 'b', 'squaredDifference');
    [$a, $b] = makeTypesMatch($a, $b);
    assertAndGetBroadcastShape($a.shape, $b.shape);
    const inputs = { a: $a, b: $b };
    const attrs = {};
    return ENGINE.runKernel(SquaredDifference, inputs, attrs);
}
const squaredDifference = op({ squaredDifference_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Removes dimensions of size 1 from the shape of a `tf.Tensor`.
 *
 * ```js
 * const x = tf.tensor([1, 2, 3, 4], [1, 1, 4]);
 * x.squeeze().print();
 * ```
 *
 * @param x The input tensor to be squeezed.
 * @param axis An optional list of numbers. If specified, only
 *     squeezes the dimensions listed. The dimension index starts at 0. It
 * is an error to squeeze a dimension that is not 1.
 *
 * @doc {heading: 'Tensors', subheading: 'Transformations'}
 */
function squeeze_(x, axis) {
    const $x = convertToTensor(x, 'x', 'squeeze');
    return reshape($x, squeezeShape($x.shape, axis).newShape);
}
const squeeze = op({ squeeze_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Stacks a list of rank-`R` `tf.Tensor`s into one rank-`(R+1)` `tf.Tensor`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2]);
 * const b = tf.tensor1d([3, 4]);
 * const c = tf.tensor1d([5, 6]);
 * tf.stack([a, b, c]).print();
 * ```
 *
 * @param tensors A list of tensor objects with the same shape and dtype.
 * @param axis The axis to stack along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function stack_(tensors, axis = 0) {
    const $tensors = convertToTensorArray(tensors, 'tensors', 'stack', 'string_or_numeric');
    assert($tensors.length >= 1, () => 'Pass at least one tensor to tf.stack');
    if ($tensors.length > 0) {
        assert(axis <= $tensors[0].rank, () => 'Axis must be <= rank of the tensor');
    }
    const inputs = $tensors;
    const attrs = { axis };
    return ENGINE.runKernel(Pack, inputs, attrs);
}
const stack = op({ stack_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Extracts a strided slice of a tensor.
 *
 * Roughly speaking, this op extracts a slice of size (end-begin)/stride from
 * the given input tensor (x). Starting at the location specified by begin the
 * slice continues by adding stride to the index until all dimensions are not
 * less than end. Note that a stride can be negative, which causes a reverse
 * slice.
 *
 * ```js
 * const t = tf.tensor3d([1, 1, 1 ,2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
 *    [3, 2, 3]);
 * t.stridedSlice([1, 0, 0], [2, 1, 3], [1, 1, 1]).print()  // [[[3, 3, 3]]]
 * t.stridedSlice([1, 0, 0], [2, 2, 3], [1, 1, 1]).print()  // [[[3, 3, 3],
 *                                                     // [4, 4, 4]]]
 * t.stridedSlice([1, -1, 0], [2, -3, 3], [1, -1, 1]).print() // [[[4, 4, 4],
 *                                                     // [3, 3, 3]]]
 * ```
 *
 * @param x The tensor to stride slice.
 * @param begin The coordinates to start the slice from.
 * @param end: The coordinates to end the slice at.
 * @param strides: The size of the slice.
 * @param beginMask: If the ith bit of beginMask is set, begin[i] is ignored
 *      and the fullest possible range in that dimension is used instead.
 * @param endMask: If the ith bit of endMask is set, end[i] is ignored
 *      and the fullest possible range in that dimension is used instead.
 * @param shrinkAxisMask: a bitmask where bit i implies that
 * the ith specification should shrink the dimensionality. begin and end must
 * imply a slice of size 1 in the dimension.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
function stridedSlice_(x, begin, end, strides, beginMask = 0, endMask = 0, ellipsisMask = 0, newAxisMask = 0, shrinkAxisMask = 0) {
    const $x = convertToTensor(x, 'x', 'stridedSlice', 'string_or_numeric');
    const inputs = { x: $x };
    const attrs = {
        begin,
        end,
        strides,
        beginMask,
        endMask,
        ellipsisMask,
        newAxisMask,
        shrinkAxisMask
    };
    return ENGINE.runKernel(StridedSlice, inputs, attrs);
}
const stridedSlice = op({ stridedSlice_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes tan of the input `tf.Tensor` element-wise, `tan(x)`
 *
 * ```js
 * const x = tf.tensor1d([0, Math.PI / 2, Math.PI * 3 / 4]);
 *
 * x.tan().print();  // or tf.tan(x)
 * ```
 * @param x The input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Basic math'}
 */
function tan_(x) {
    const $x = convertToTensor(x, 'x', 'tan');
    const inputs = { x: $x };
    return ENGINE.runKernel(Tan, inputs);
}
const tan = op({ tan_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates rank-1 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor1d` as it makes the code more readable.
 *
 * ```js
 * tf.tensor1d([1, 2, 3]).print();
 * ```
 *
 * @param values The values of the tensor. Can be array of numbers,
 *     or a `TypedArray`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor1d(values, dtype) {
    assertNonNull(values);
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 1) {
        throw new Error('tensor1d() requires values to be a flat/TypedArray');
    }
    const shape = null;
    return makeTensor(values, shape, inferredShape, dtype);
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates rank-2 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor2d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor2d([[1, 2], [3, 4]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor2d([1, 2, 3, 4], [2, 2]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. If not provided, it is inferred from
 *     `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor2d(values, shape, dtype) {
    assertNonNull(values);
    if (shape != null && shape.length !== 2) {
        throw new Error('tensor2d() requires shape to have two numbers');
    }
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 2 && inferredShape.length !== 1) {
        throw new Error('tensor2d() requires values to be number[][] or flat/TypedArray');
    }
    if (inferredShape.length === 1 && shape == null) {
        throw new Error('tensor2d() requires shape to be provided when `values` ' +
            'are a flat/TypedArray');
    }
    return makeTensor(values, shape, inferredShape, dtype);
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Finds the values and indices of the `k` largest entries along the last
 * dimension.
 *
 * If the input is a vector (rank=1), finds the k largest entries in the vector
 * and outputs their values and indices as vectors. Thus values[j] is the j-th
 * largest entry in input, and its index is indices[j].
 * For higher rank inputs, computes the top k entries along the last dimension.
 *
 * If two elements are equal, the lower-index element appears first.
 *
 * ```js
 * const a = tf.tensor2d([[1, 5], [4, 3]]);
 * const {values, indices} = tf.topk(a);
 * values.print();
 * indices.print();
 * ```
 * @param x 1-D or higher `tf.Tensor` with last dimension being at least `k`.
 * @param k Number of top elements to look for along the last dimension.
 * @param sorted If true, the resulting `k` elements will be sorted by the
 *     values in descending order.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
function topk_(x, k = 1, sorted = true) {
    const $x = convertToTensor(x, 'x', 'topk');
    if ($x.rank === 0) {
        throw new Error('topk() expects the input to be of rank 1 or higher');
    }
    const lastDim = $x.shape[$x.shape.length - 1];
    if (k < 0) {
        throw new Error(`'k' passed to topk() must be >= 0 but got ${k}`);
    }
    if (k > lastDim) {
        throw new Error(`'k' passed to topk() must be <= the last dimension (${lastDim}) ` +
            `but got ${k}`);
    }
    const inputs = { x: $x };
    const attrs = { k, sorted };
    const [values, indices] = ENGINE.runKernel(TopK, inputs, attrs);
    return { values, indices };
}
const topk = op({ topk_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a `tf.Tensor` with values sampled from a truncated normal
 * distribution.
 *
 * ```js
 * tf.truncatedNormal([2, 2]).print();
 * ```
 *
 * The generated values follow a normal distribution with specified mean and
 * standard deviation, except that values whose magnitude is more than 2
 * standard deviations from the mean are dropped and re-picked.
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param mean The mean of the normal distribution.
 * @param stdDev The standard deviation of the normal distribution.
 * @param dtype The data type of the output tensor.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function truncatedNormal_(shape, mean = 0, stdDev = 1, dtype, seed) {
    if (dtype != null && dtype === 'bool') {
        throw new Error(`Unsupported data type $ { dtype }`);
    }
    const randGauss = new MPRandGauss(mean, stdDev, dtype, true /* truncated */, seed);
    const res = buffer(shape, dtype);
    for (let i = 0; i < res.values.length; i++) {
        res.values[i] = randGauss.nextValue();
    }
    return res.toTensor();
}
const truncatedNormal = op({ truncatedNormal_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Finds unique elements along an axis of a tensor.
 *
 * It returns a tensor `values` containing all of the unique elements along the
 * `axis` of the given tensor `x` in the same order that they occur along the
 * `axis` in `x`; `x` does not need to be sorted. It also returns a tensor
 * `indices` the same size as the number of the elements in `x` along the `axis`
 * dimension. It contains the index in the unique output `values`.
 *
 * ```js
 * // A 1-D tensor
 * const a = tf.tensor1d([1, 1, 2, 4, 4, 4, 7, 8, 8]);
 * const {values, indices} = tf.unique(a);
 * values.print();   // [1, 2, 4, 7, 8,]
 * indices.print();  // [0, 0, 1, 2, 2, 2, 3, 4, 4]
 * ```
 *
 * ```js
 * // A 2-D tensor with axis=0
 * //
 * // 'a' is: [[1, 0, 0],
 * //          [1, 0, 0],
 * //          [2, 0, 0]]
 * const a = tf.tensor2d([[1, 0, 0], [1, 0, 0], [2, 0, 0]]);
 * const {values, indices} = tf.unique(a, 0)
 * values.print();   // [[1, 0, 0],
 *                   //  [2, 0, 0]]
 * indices.print();  // [0, 0, 1]
 * ```
 *
 * ```js
 * // A 2-D tensor with axis=1
 * //
 * // 'a' is: [[1, 0, 0],
 * //          [1, 0, 0],
 * //          [2, 0, 0]]
 * const a = tf.tensor2d([[1, 0, 0], [1, 0, 0], [2, 0, 0]]);
 * const {values, indices} = tf.unique(a, 1)
 * values.print();   // [[1, 0],
 *                   //  [1, 0],
 *                   //  [2, 0]]
 * indices.print();  // [0, 1, 1]
 * ```
 * @param x A tensor (int32, string, bool).
 * @param axis The axis of the tensor to find the unique elements.
 * @returns [uniqueElements, indices] (see above for details)
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
function unique_(x, axis = 0) {
    const $x = convertToTensor(x, 'x', 'unique', 'string_or_numeric');
    assert($x.rank > 0, () => 'The input tensor must be at least 1D');
    const inputs = { x: $x };
    const attrs = { axis };
    const [values, indices] = ENGINE.runKernel(Unique, inputs, attrs);
    return { values, indices };
}
const unique = op({ unique_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Unstacks a `tf.Tensor` of rank-`R` into a list of rank-`(R-1)` `tf.Tensor`s.
 *
 * ```js
 * const a = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 *
 * tf.unstack(a).forEach(tensor => tensor.print());
 * ```
 *
 * @param x A tensor object.
 * @param axis The axis to unstack along. Defaults to 0 (the first dim).
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
function unstack_(x, axis = 0) {
    const $x = convertToTensor(x, 'x', 'unstack', 'string_or_numeric');
    assert(axis >= -$x.shape.length && axis < $x.shape.length, () => `Axis = ${axis} is not in [-${$x.shape.length}, ${$x.shape.length})`);
    const inputs = { value: $x };
    const attrs = { axis };
    return ENGINE.runKernel(Unpack, inputs, attrs);
}
const unstack = op({ unstack_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Returns the coordinates of true elements of condition.
 *
 * The coordinates are returned in a 2-D tensor where the first dimension (rows)
 * represents the number of true elements, and the second dimension (columns)
 * represents the coordinates of the true elements. Keep in mind, the shape of
 * the output tensor can vary depending on how many true values there are in
 * input. Indices are output in row-major order. The resulting tensor has the
 * shape `[numTrueElems, condition.rank]`.
 *
 * This is analogous to calling the python `tf.where(cond)` without an x or y.
 *
 * ```js
 * const cond = tf.tensor1d([false, false, true], 'bool');
 * const result = await tf.whereAsync(cond);
 * result.print();
 * ```
 *
 * @doc {heading: 'Operations', subheading: 'Logical'}
 */
async function whereAsync_(condition) {
    const $condition = convertToTensor(condition, 'condition', 'whereAsync', 'bool');
    const vals = await $condition.data();
    const res = whereImpl($condition.shape, vals);
    if (condition !== $condition) {
        $condition.dispose();
    }
    return res;
}
const whereAsync = whereAsync_;

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the norm of scalar, vectors, and matrices.
 * This function can compute several different vector norms (the 1-norm, the
 * Euclidean or 2-norm, the inf-norm, and in general the p-norm for p > 0)
 * and matrix norms (Frobenius, 1-norm, and inf-norm).
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * x.norm().print();  // or tf.norm(x)
 * ```
 *
 * @param x The input array.
 * @param ord Optional. Order of the norm. Supported norm types are
 * following:
 *
 *  | ord        | norm for matrices         | norm for vectors
 *  |------------|---------------------------|---------------------
 *  |'euclidean' |Frobenius norm             |2-norm
 *  |'fro'       |Frobenius norm	           |
 *  |Infinity    |max(sum(abs(x), axis=1))   |max(abs(x))
 *  |-Infinity   |min(sum(abs(x), axis=1))   |min(abs(x))
 *  |1           |max(sum(abs(x), axis=0))   |sum(abs(x))
 *  |2           |                           |sum(abs(x)^2)^1/2*
 *
 * @param axis Optional. If axis is null (the default), the input is
 * considered a vector and a single vector norm is computed over the entire
 * set of values in the Tensor, i.e. norm(x, ord) is equivalent
 * to norm(x.reshape([-1]), ord). If axis is a integer, the input
 * is considered a batch of vectors, and axis determines the axis in x
 * over which to compute vector norms. If axis is a 2-tuple of integer it is
 * considered a batch of matrices and axis determines the axes in NDArray
 * over which to compute a matrix norm.
 * @param keepDims Optional. If true, the norm have the same dimensionality
 * as the input.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
function norm_(x, ord = 'euclidean', axis = null, keepDims = false) {
    x = convertToTensor(x, 'x', 'norm');
    const norm = normImpl(x, ord, axis);
    let keepDimsShape = norm.shape;
    if (keepDims) {
        const axes = parseAxisParam(axis, x.shape);
        keepDimsShape = expandShapeToKeepDim(norm.shape, axes);
    }
    return reshape(norm, keepDimsShape);
}
function normImpl(x, p, axis = null) {
    if (x.rank === 0) {
        return abs(x);
    }
    // consider vector when no axis is specified
    if (x.rank !== 1 && axis === null) {
        return normImpl(reshape(x, [-1]), p, axis);
    }
    // vector
    if (x.rank === 1 || typeof axis === 'number' ||
        Array.isArray(axis) && axis.length === 1) {
        if (p === 1) {
            return sum(abs(x), axis);
        }
        if (p === Infinity) {
            return max(abs(x), axis);
        }
        if (p === -Infinity) {
            return min(abs(x), axis);
        }
        if (p === 'euclidean' || p === 2) {
            // norm(x, 2) = sum(abs(xi) ^ 2) ^ 1/2
            return sqrt(sum(pow(abs(x), scalar(2, 'int32')), axis));
        }
        throw new Error(`Error in norm: invalid ord value: ${p}`);
    }
    // matrix (assumption axis[0] < axis[1])
    if (Array.isArray(axis) && axis.length === 2) {
        if (p === 1) {
            return max(sum(abs(x), axis[0]), axis[1] - 1);
        }
        if (p === Infinity) {
            return max(sum(abs(x), axis[1]), axis[0]);
        }
        if (p === -Infinity) {
            return min(sum(abs(x), axis[1]), axis[0]);
        }
        if (p === 'fro' || p === 'euclidean') {
            // norm(x) = sqrt(sum(pow(x, 2)))
            return sqrt(sum(square(x), axis));
        }
        throw new Error(`Error in norm: invalid ord value: ${p}`);
    }
    throw new Error(`Error in norm: invalid axis: ${axis}`);
}
const norm = op({ norm_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates a new tensor by applying sparse updates to individual
 * values or slices within a zero tensor of the given shape tensor according to
 * indices. This operator is the inverse of the `tf.gatherND` operator which
 * extracts values or slices from a given tensor.
 *
 * ```js
 * const indices = tf.tensor2d([4, 3, 1, 7], [4, 1], 'int32');
 * const updates = tf.tensor1d([9, 10, 11, 12]);
 * const shape = [8];
 * tf.scatterND(indices, updates, shape).print() //[0, 11, 0, 10, 9, 0, 0, 12]
 * ```
 *
 * @param indices The tensor contains the indices into the output tensor.
 * @param updates The tensor contains the value for the indices.
 * @param shape: The shape of the output tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
function scatterND_(indices, updates, shape) {
    const $indices = convertToTensor(indices, 'indices', 'scatterND', 'int32');
    const $updates = convertToTensor(updates, 'updates', 'scatterND');
    validateInput$1($updates, $indices, shape);
    const inputs = { indices: $indices, updates: $updates };
    const attrs = { shape };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    return ENGINE.runKernel(ScatterNd, inputs, attrs);
}
const scatterND = op({ scatterND_ });

/**
 * Validate sparseToDense inputs.
 *
 * @param sparseIndices A 0-D, 1-D, or 2-D Tensor of type int32.
 * sparseIndices[i] contains the complete index where sparseValues[i] will be
 * placed.
 * @param sparseValues A 0-D or 1-D Tensor. Values
 * corresponding to each row of sparseIndices, or a scalar value to be used for
 * all sparse indices.
 * @param outputShape number[]. Shape of the dense output tensor.
 * @param validateIndices boolean. indice validation is not supported, error
 * will be thrown if it is set.
 */
function validateInput(sparseIndices, sparseValues, outputShape, defaultValues) {
    if (sparseIndices.dtype !== 'int32') {
        throw new Error('tf.sparseToDense() expects the indices to be int32 type,' +
            ` but the dtype was ${sparseIndices.dtype}.`);
    }
    if (sparseIndices.rank > 2) {
        throw new Error('sparseIndices should be a scalar, vector, or matrix,' +
            ` but got shape ${sparseIndices.shape}.`);
    }
    const numElems = sparseIndices.rank > 0 ? sparseIndices.shape[0] : 1;
    const numDims = sparseIndices.rank > 1 ? sparseIndices.shape[1] : 1;
    if (outputShape.length !== numDims) {
        throw new Error('outputShape has incorrect number of elements:,' +
            ` ${outputShape.length}, should be: ${numDims}.`);
    }
    const numValues = sparseValues.size;
    if (!(sparseValues.rank === 0 ||
        sparseValues.rank === 1 && numValues === numElems)) {
        throw new Error('sparseValues has incorrect shape ' +
            `${sparseValues.shape}, should be [] or [${numElems}]`);
    }
    if (sparseValues.dtype !== defaultValues.dtype) {
        throw new Error('sparseValues.dtype must match defaultValues.dtype');
    }
}

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Converts a sparse representation into a dense tensor.
 *
 * Builds an array dense with shape outputShape such that:
 *
 * // If sparseIndices is scalar
 * dense[i] = (i == sparseIndices ? sparseValues : defaultValue)
 *
 * // If sparseIndices is a vector, then for each i
 * dense[sparseIndices[i]] = sparseValues[i]
 *
 * // If sparseIndices is an n by d matrix, then for each i in [0, n)
 * dense[sparseIndices[i][0], ..., sparseIndices[i][d-1]] = sparseValues[i]
 * All other values in dense are set to defaultValue. If sparseValues is a
 * scalar, all sparse indices are set to this single value.
 *
 * If indices are repeated the final value is summed over all values for those
 * indices.
 *
 * ```js
 * const indices = tf.tensor1d([4, 5, 6, 1, 2, 3], 'int32');
 * const values = tf.tensor1d([10, 11, 12, 13, 14, 15], 'float32');
 * const shape = [8];
 * tf.sparseToDense(indices, values, shape).print();
 * ```
 *
 * @param sparseIndices A 0-D, 1-D, or 2-D Tensor of type int32.
 * sparseIndices[i] contains the complete index where sparseValues[i] will be
 * placed.
 * @param sparseValues A 0-D or 1-D Tensor. Values
 * corresponding to each row of sparseIndices, or a scalar value to be used for
 * all sparse indices.
 * @param outputShape Shape of the dense output tensor. the type is inferred.
 * @param defaultValue Scalar. Value to set for indices not specified in
 * sparseIndices. Defaults to zero.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function sparseToDense_(sparseIndices, sparseValues, outputShape, defaultValue = 0) {
    const $sparseIndices = convertToTensor(sparseIndices, 'sparseIndices', 'sparseToDense', 'int32');
    const $sparseValues = convertToTensor(sparseValues, 'sparseValues', 'sparseToDense');
    const $defaultValue = convertToTensor(defaultValue, 'defaultValue', 'sparseToDense', $sparseValues.dtype);
    validateInput($sparseIndices, $sparseValues, outputShape, $defaultValue);
    const inputs = {
        sparseIndices: $sparseIndices,
        sparseValues: $sparseValues,
        defaultValue: $defaultValue
    };
    const attrs = { outputShape };
    return ENGINE.runKernel(SparseToDense, inputs, attrs);
}
const sparseToDense = op({ sparseToDense_ });

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Gather slices from input tensor into a Tensor with shape specified by
 * `indices`.
 *
 * `indices` is an K-dimensional integer tensor, best thought of as a
 * (K-1)-dimensional tensor of indices into input, where each element defines a
 * slice of input:
 * output[\\(i_0, ..., i_{K-2}\\)] = input[indices[\\(i_0, ..., i_{K-2}\\)]]
 *
 * Whereas in `tf.gather`, `indices` defines slices into the first dimension of
 * input, in `tf.gatherND`, `indices` defines slices into the first N dimensions
 * of input, where N = indices.shape[-1].
 *
 * The last dimension of indices can be at most the rank of input:
 * indices.shape[-1] <= input.rank
 *
 * The last dimension of `indices` corresponds to elements
 * (if indices.shape[-1] == input.rank) or slices
 * (if indices.shape[-1] < input.rank) along dimension indices.shape[-1] of
 * input.
 * The output tensor has shape
 * indices.shape[:-1] + input.shape[indices.shape[-1]:]
 *
 * Note that on CPU, if an out of bound index is found, an error is returned. On
 * GPU, if an out of bound index is found, a 0 is stored in the corresponding
 * output value.
 *
 * ```js
 * const indices = tf.tensor2d([0, 1, 1, 0], [2,2], 'int32');
 * const input = tf.tensor2d([9, 10, 11, 12], [2, 2]);
 * tf.gatherND(input, indices).print() // [10, 11]
 * ```
 *
 * @param x The tensor from which to gather values.
 * @param indices Index tensor, must be of type int32.
 *
 * @doc {heading: 'Operations', subheading: 'Slicing and Joining'}
 */
function gatherND_(x, indices) {
    const $indices = convertToTensor(indices, 'indices', 'gatherND', 'int32');
    const $x = convertToTensor(x, 'x', 'gatherND', 'string_or_numeric');
    const inputs = { params: $x, indices: $indices };
    return ENGINE.runKernel(GatherNd, inputs);
}
const gatherND = op({ gatherND_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function enclosingPowerOfTwo(value) {
    // Return 2**N for integer N such that 2**N >= value.
    return Math.floor(Math.pow(2, Math.ceil(Math.log(value) / Math.log(2.0))));
}
function cosineWindow(windowLength, a, b) {
    const even = 1 - windowLength % 2;
    const newValues = new Float32Array(windowLength);
    for (let i = 0; i < windowLength; ++i) {
        const cosArg = (2.0 * Math.PI * i) / (windowLength + even - 1);
        newValues[i] = a - b * Math.cos(cosArg);
    }
    return tensor1d(newValues, 'float32');
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the derivative of the filter of a 2D convolution.
 *
 * @param x The input tensor, of rank 4 or rank 3 of shape
 *     [batch, height, width, inChannels]. If rank 3, batch of 1 is assumed.
 * @param dy The dy image, of rank 4 or rank 3, of shape
 *     [batch, height, width, outDepth]. If rank 3, batch of 1 is assumed.
 * @param filterShape The shape of the filter, length 4,
 *     [filterHeight, filterWidth, inDepth, outDepth].
 * @param strides The strides of the convolution: [strideHeight,
 * strideWidth].
 * @param pad A string from: 'same', 'valid'. The type of padding algorithm
 *     used in the forward prop of the op.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels].
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 */
function conv2DBackpropFilter_(x, dy, filterShape, strides, pad, dataFormat = 'NHWC', dimRoundingMode) {
    let x4D = x;
    if (x.rank === 3) {
        x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
    }
    let dy4D = dy;
    if (dy4D.rank === 3) {
        dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in conv2dDerFilter: input must be rank 4, but got shape ` +
        `${x4D.shape}.`);
    assert(dy4D.rank === 4, () => `Error in conv2dDerFilter: dy must be rank 4, but got shape ` +
        `${dy4D.shape}.`);
    assert(filterShape.length === 4, () => `Error in conv2dDerFilter: filterShape must be length 4, but got ` +
        `${filterShape}.`);
    const inDepth = dataFormat === 'NHWC' ? x4D.shape[3] : x4D.shape[1];
    const outDepth = dataFormat === 'NHWC' ? dy4D.shape[3] : dy4D.shape[1];
    assert(inDepth === filterShape[2], () => `Error in conv2dDerFilter: depth of input ${inDepth}) must ` +
        `match input depth in filter (${filterShape[2]}.`);
    assert(outDepth === filterShape[3], () => `Error in conv2dDerFilter: depth of dy (${outDepth}) must ` +
        `match output depth for filter (${filterShape[3]}).`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in conv2dDerFilter: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const inputs = { x: x4D, dy: dy4D };
    const attrs = { strides, pad, dataFormat, dimRoundingMode, filterShape };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    return ENGINE.runKernel(Conv2DBackpropFilter, inputs, attrs);
}
const conv2DBackpropFilter = op({ conv2DBackpropFilter_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes a 2D convolution over the input x, optionally fused with adding a
 * bias and applying an activation.
 *
 * ```js
 * const inputDepth = 2;
 * const inShape = [2, 2, 2, inputDepth];
 * const outputDepth = 2;
 * const fSize = 1;
 * const pad = 0;
 * const strides = 1;
 *
 * const x = tf.tensor4d( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
 * 16], inShape);
 * const w = tf.tensor4d([-1, 1, -2, 0.5], [fSize, fSize, inputDepth,
 * outputDepth]);
 *
 * tf.fused.conv2d({ x, filter: w, strides, pad, dataFormat: 'NHWC',
 * dilations: [1, 1], bias: tf.scalar(5), activation: 'relu' }).print();
 * ```
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid` output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`) to be
 *     applied
 *      after biasAdd.
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */
function fusedConv2d_({ x, filter, strides, pad, dataFormat = 'NHWC', dilations = [1, 1], dimRoundingMode, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha }) {
    activation = activation || 'linear';
    if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
        let result = conv2d(x, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
        if (bias != null) {
            result = add(result, bias);
        }
        return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    const $x = convertToTensor(x, 'x', 'conv2d');
    const $filter = convertToTensor(filter, 'filter', 'conv2d');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in fused conv2d: input must be rank 4, but got rank ` +
        `${x4D.rank}.`);
    assert($filter.rank === 4, () => `Error in fused conv2d: filter must be rank 4, but got rank ` +
        `${$filter.rank}.`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in fused conv2d: pad must be an integer when using, ` +
            `dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    assert(x4D.shape[3] === $filter.shape[2], () => `Error in conv2d: depth of input (${x4D.shape[3]}) must match ` +
        `input depth for filter ${$filter.shape[2]}.`);
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in conv2D: Either strides or dilations must be 1. ' +
        `Got strides ${strides} and dilations '${dilations}'`);
    assert(dataFormat === 'NHWC', () => `Error in conv2d: got dataFormat of ${dataFormat} but only NHWC is currently supported.`);
    const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad, dimRoundingMode);
    let $bias;
    if (bias != null) {
        $bias = convertToTensor(bias, 'bias', 'fused conv2d');
        [$bias] = makeTypesMatch($bias, $x);
        assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        $preluActivationWeights = convertToTensor(preluActivationWeights, 'prelu weights', 'fused conv2d');
    }
    const grad = (dy, saved) => {
        const [$filter, x4D, y, $bias] = saved;
        const dyActivation = getFusedDyActivation(dy, y, activation);
        assert(tupleValuesAreOne(dilations), () => 'Error in gradient of fused conv2D: ' +
            `dilation rates greater than 1 ` +
            `are not yet supported in gradients. Got dilations '${dilations}'`);
        const xDer = conv2DBackpropInput(x4D.shape, dyActivation, $filter, strides, pad);
        const filterDer = conv2DBackpropFilter(x4D, dyActivation, $filter.shape, strides, pad);
        const der = [xDer, filterDer];
        if ($bias != null) {
            const biasDer = getFusedBiasGradient($bias, dyActivation);
            der.push(biasDer);
        }
        return der;
    };
    const inputs = {
        x: x4D,
        filter: $filter,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = {
        strides,
        pad,
        dataFormat,
        dilations,
        dimRoundingMode,
        activation,
        leakyreluAlpha
    };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = customGrad((x4D, filter, save) => {
            let res = 
            // tslint:disable-next-line: no-unnecessary-type-assertion
            ENGINE.runKernel(FusedConv2D, inputs, attrs);
            save([filter, x4D, res]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
            }
            return { value: res, gradFunc: grad };
        });
        return customOp(x4D, $filter);
    }
    else {
        const customOpWithBias = customGrad((x4D, filter, bias, save) => {
            let res = ENGINE.runKernel(FusedConv2D, inputs, attrs);
            save([filter, x4D, res, bias]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
            }
            return { value: res, gradFunc: grad };
        });
        return customOpWithBias(x4D, $filter, $bias);
    }
}
const conv2d$1 = op({ fusedConv2d_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function depthwiseConv2dNativeBackpropFilter_(x, dy, filterShape, strides, pad, dilations = [1, 1], dimRoundingMode) {
    let x4D = x;
    if (x.rank === 3) {
        x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
    }
    let dy4D = dy;
    if (dy4D.rank === 3) {
        dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    }
    const inputs = { x: x4D, dy: dy4D };
    const attrs = { strides, pad, dimRoundingMode, dilations, filterShape };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    return ENGINE.runKernel(DepthwiseConv2dNativeBackpropFilter, inputs, attrs);
}
const depthwiseConv2dNativeBackpropFilter = op({ depthwiseConv2dNativeBackpropFilter_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function depthwiseConv2dNativeBackpropInput_(xShape, dy, filter, strides, pad, dilations = [1, 1], dimRoundingMode) {
    let dy4D = dy;
    let reshapedTo4D = false;
    if (dy.rank === 3) {
        reshapedTo4D = true;
        dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    }
    const inputs = { dy: dy4D, filter };
    const attrs = { strides, pad, dimRoundingMode, dilations, inputShape: xShape };
    const res = 
    // tslint:disable-next-line: no-unnecessary-type-assertion
    ENGINE.runKernel(DepthwiseConv2dNativeBackpropInput, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const depthwiseConv2dNativeBackpropInput = op({ depthwiseConv2dNativeBackpropInput_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes depthwise 2D convolution, optionally fused with adding a
 * bias and applying an activation.
 *
 * Given a 4D `input` array and a `filter` array of shape
 * `[filterHeight, filterWidth, inChannels, channelMultiplier]` containing
 * `inChannels` convolutional filters of depth 1, this op applies a
 * different filter to each input channel (expanding from 1 channel to
 * `channelMultiplier` channels for each), then concatenates the results
 * together. The output has `inChannels * channelMultiplier` channels.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d)
 * for more details.
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`).
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */
function fusedDepthwiseConv2d_({ x, filter, strides, pad, dataFormat = 'NHWC', dilations = [1, 1], dimRoundingMode, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha }) {
    if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
        let result = depthwiseConv2d(x, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
        if (bias != null) {
            result = add(result, bias);
        }
        return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    const $x = convertToTensor(x, 'x', 'depthwiseConv2d');
    const $filter = convertToTensor(filter, 'filter', 'depthwiseConv2d');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    }
    assert(x4D.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got ` +
        `rank ${x4D.rank}.`);
    assert($filter.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, ` +
        `but got rank ${$filter.rank}.`);
    assert(x4D.shape[3] === $filter.shape[2], () => `Error in fused depthwiseConv2d: number of input channels ` +
        `(${x4D.shape[3]}) must match the inChannels dimension in ` +
        `filter ${$filter.shape[2]}.`);
    if (dilations == null) {
        dilations = [1, 1];
    }
    assert(eitherStridesOrDilationsAreOne(strides, dilations), () => 'Error in fused depthwiseConv2d: Either strides or dilations must ' +
        `be 1. Got strides ${strides} and dilations '${dilations}'`);
    if (dimRoundingMode != null) {
        assert(isInt(pad), () => `Error in fused depthwiseConv2d: pad must be an integer when ` +
            `using dimRoundingMode ${dimRoundingMode} but got pad ${pad}.`);
    }
    const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad, dimRoundingMode, true /* depthwise */);
    let $bias;
    if (bias != null) {
        $bias = convertToTensor(bias, 'bias', 'fused conv2d');
        [$bias] = makeTypesMatch($bias, $x);
        assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        $preluActivationWeights = convertToTensor(preluActivationWeights, 'prelu weights', 'fused depthwiseConv2d');
    }
    const grad = (dy, saved) => {
        assert(tupleValuesAreOne(dilations), () => 'Error in gradient of fused depthwiseConv2d: dilation rates ' +
            `greater than 1 are not yet supported. Got dilations ` +
            `'${dilations}'`);
        const [$filter, x4D, y, bias] = saved;
        const dyActivation = getFusedDyActivation(dy, y, activation);
        const xDer = depthwiseConv2dNativeBackpropInput(x4D.shape, dyActivation, $filter, strides, pad, dilations, dimRoundingMode);
        const filterDer = depthwiseConv2dNativeBackpropFilter(x4D, dyActivation, $filter.shape, strides, pad, dilations, dimRoundingMode);
        if (bias != null) {
            const biasDer = getFusedBiasGradient($bias, dyActivation);
            return [xDer, filterDer, biasDer];
        }
        return [xDer, filterDer];
    };
    const inputs = {
        x: x4D,
        filter: $filter,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = {
        strides,
        pad,
        dataFormat,
        dilations,
        dimRoundingMode,
        activation,
        leakyreluAlpha
    };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = customGrad((x4D, filter, save) => {
            // tslint:disable-next-line: no-unnecessary-type-assertion
            let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
            save([filter, x4D, res]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
            }
            return { value: res, gradFunc: grad };
        });
        return customOp(x4D, $filter);
    }
    else {
        const customOpWithBias = customGrad((x4D, filter, bias, save) => {
            // tslint:disable-next-line: no-unnecessary-type-assertion
            let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
            save([filter, x4D, res, bias]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
            }
            return { value: res, gradFunc: grad };
        });
        return customOpWithBias(x4D, $filter, $bias);
    }
}
const depthwiseConv2d$1 = op({ fusedDepthwiseConv2d_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the dot product of two matrices with optional activation and bias.
 *
 * ```js
 * const a = tf.tensor2d([-1, -2], [1, 2]);
 * const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const bias = tf.tensor2d([1, 2], [1, 2]);
 *
 * tf.fused.matMul({a, b, bias, activation: 'relu'}).print();
 * ```
 *
 * @param obj An object with the following properties:
 * - `a` First matrix in dot product operation.
 * - `b` Second matrix in dot product operation.
 * - `transposeA` If true, `a` is transposed before multiplication.
 * - `transposeB` If true, `b` is transposed before multiplication.
 * - `bias` Matrix to be added to the result.
 * - `activation` Name of activation kernel (defaults to `linear`).
 * - `preluActivationWeights` Tensor of prelu weights.
 * - `leakyreluAlpha` Alpha of leakyrelu.
 */
function fusedMatMul_({ a, b, transposeA = false, transposeB = false, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha, }) {
    if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
        let result = matMul(a, b, transposeA, transposeB);
        if (bias != null) {
            result = add(result, bias);
        }
        return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    let $a = convertToTensor(a, 'a', 'fused matMul');
    let $b = convertToTensor(b, 'b', 'fused matMul');
    [$a, $b] = makeTypesMatch($a, $b);
    const innerShapeA = transposeA ? $a.shape[$a.rank - 2] : $a.shape[$a.rank - 1];
    const innerShapeB = transposeB ? $b.shape[$b.rank - 1] : $b.shape[$b.rank - 2];
    const outerShapeA = transposeA ? $a.shape[$a.rank - 1] : $a.shape[$a.rank - 2];
    const outerShapeB = transposeB ? $b.shape[$b.rank - 2] : $b.shape[$b.rank - 1];
    const outerDimsA = $a.shape.slice(0, -2);
    const outerDimsB = $b.shape.slice(0, -2);
    const batchDimA = sizeFromShape(outerDimsA);
    const batchDimB = sizeFromShape(outerDimsB);
    assert($a.rank >= 2 && $b.rank >= 2 && $a.rank === $b.rank, () => `Error in fused matMul: inputs must have the same rank of at ` +
        `least 2, got ranks ${$a.rank} and ${$b.rank}.`);
    assert(arraysEqual(outerDimsA, outerDimsB), () => `Error in fused matMul: outer dimensions (${outerDimsA}) and (` +
        `${outerDimsB}) of Tensors with shapes ${$a.shape} and ` +
        `${$b.shape} must match.`);
    assert(innerShapeA === innerShapeB, () => `Error in fused matMul: inner shapes (${innerShapeA}) and (` +
        `${innerShapeB}) of Tensors with shapes ${$a.shape} and ` +
        `${$b.shape} and transposeA=${transposeA}` +
        ` and transposeB=${transposeB} must match.`);
    const outShape = $a.shape.slice(0, -2).concat([outerShapeA, outerShapeB]);
    const a3D = transposeA ?
        reshape($a, [batchDimA, innerShapeA, outerShapeA]) :
        reshape($a, [batchDimA, outerShapeA, innerShapeA]);
    const b3D = transposeB ?
        reshape($b, [batchDimB, outerShapeB, innerShapeB]) :
        reshape($b, [batchDimB, innerShapeB, outerShapeB]);
    let $bias;
    if (bias != null) {
        $bias = convertToTensor(bias, 'bias', 'fused matMul');
        [$bias] = makeTypesMatch($bias, $a);
        assertAndGetBroadcastShape(outShape, $bias.shape);
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        $preluActivationWeights = convertToTensor(preluActivationWeights, 'prelu weights', 'fused matMul');
    }
    const grad = (dy, saved) => {
        const [a3D, b3D, y, $bias] = saved;
        // we reshape dy because the result of the forward is not
        // necessarily going to be a 3d tensor due to a reshape done at the end of
        // the customOp.
        const dyActivation = getFusedDyActivation(reshape(dy, y.shape), y, activation);
        let aDer;
        let bDer;
        if (!transposeA && !transposeB) {
            aDer = matMul(dyActivation, b3D, false, true);
            bDer = matMul(a3D, dyActivation, true, false);
        }
        else if (!transposeA && transposeB) {
            aDer = matMul(dyActivation, b3D, false, false);
            bDer = matMul(dyActivation, a3D, true, false);
        }
        else if (transposeA && !transposeB) {
            aDer = matMul(b3D, dyActivation, false, true);
            bDer = matMul(a3D, dyActivation, false, false);
        }
        else {
            aDer = matMul(b3D, dyActivation, true, true);
            bDer = matMul(dyActivation, a3D, true, true);
        }
        if (bias != null) {
            const biasDer = getFusedBiasGradient($bias, dyActivation);
            return [aDer, bDer, biasDer];
        }
        else {
            return [aDer, bDer];
        }
    };
    const inputs = {
        a: a3D,
        b: b3D,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = { transposeA, transposeB, activation, leakyreluAlpha };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = customGrad((a3D, b3D, save) => {
            const res = 
            // tslint:disable-next-line: no-unnecessary-type-assertion
            ENGINE.runKernel(_FusedMatMul, inputs, attrs);
            save([a3D, b3D, res]);
            return { value: reshape(res, outShape), gradFunc: grad };
        });
        return customOp(a3D, b3D);
    }
    else {
        const customOpWithBias = customGrad((a3D, b3D, $bias, save) => {
            const res = 
            // tslint:disable-next-line: no-unnecessary-type-assertion
            ENGINE.runKernel(_FusedMatMul, inputs, attrs);
            save([a3D, b3D, res, $bias]);
            return { value: reshape(res, outShape), gradFunc: grad };
        });
        return customOpWithBias(a3D, b3D, $bias);
    }
}
const matMul$1 = op({ fusedMatMul_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Generate a hamming window.
 *
 * See: https://en.wikipedia.org/wiki/Window_function#Hann_and_Hamming_windows
 *
 * ```js
 * tf.signal.hammingWindow(10).print();
 * ```
 * @param The length of window
 *
 * @doc {heading: 'Operations', subheading: 'Signal', namespace: 'signal'}
 */
function hammingWindow_(windowLength) {
    return cosineWindow(windowLength, 0.54, 0.46);
}
const hammingWindow = op({ hammingWindow_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Generate a Hann window.
 *
 * See: https://en.wikipedia.org/wiki/Window_function#Hann_and_Hamming_windows
 *
 * ```js
 * tf.signal.hannWindow(10).print();
 * ```
 * @param The length of window
 *
 * @doc {heading: 'Operations', subheading: 'Signal', namespace: 'signal'}
 */
function hannWindow_(windowLength) {
    return cosineWindow(windowLength, 0.5, 0.5);
}
const hannWindow = op({ hannWindow_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Expands input into frames of frameLength.
 * Slides a window size with frameStep.
 *
 * ```js
 * tf.signal.frame([1, 2, 3], 2, 1).print();
 * ```
 * @param signal The input tensor to be expanded
 * @param frameLength Length of each frame
 * @param frameStep The frame hop size in samples.
 * @param padEnd Whether to pad the end of signal with padValue.
 * @param padValue An number to use where the input signal does
 *     not exist when padEnd is True.
 *
 * @doc {heading: 'Operations', subheading: 'Signal', namespace: 'signal'}
 */
function frame_(signal, frameLength, frameStep, padEnd = false, padValue = 0) {
    let start = 0;
    const output = [];
    while (start + frameLength <= signal.size) {
        output.push(slice(signal, start, frameLength));
        start += frameStep;
    }
    if (padEnd) {
        while (start < signal.size) {
            const padLen = (start + frameLength) - signal.size;
            const pad = concat([
                slice(signal, start, frameLength - padLen), fill([padLen], padValue)
            ]);
            output.push(pad);
            start += frameStep;
        }
    }
    if (output.length === 0) {
        return tensor2d([], [0, frameLength]);
    }
    return reshape(concat(output), [output.length, frameLength]);
}
const frame = op({ frame_ });

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the Short-time Fourier Transform of signals
 * See: https://en.wikipedia.org/wiki/Short-time_Fourier_transform
 *
 * ```js
 * const input = tf.tensor1d([1, 1, 1, 1, 1])
 * tf.signal.stft(input, 3, 1).print();
 * ```
 * @param signal 1-dimensional real value tensor.
 * @param frameLength The window length of samples.
 * @param frameStep The number of samples to step.
 * @param fftLength The size of the FFT to apply.
 * @param windowFn A callable that takes a window length and returns 1-d tensor.
 *
 * @doc {heading: 'Operations', subheading: 'Signal', namespace: 'signal'}
 */
function stft_(signal, frameLength, frameStep, fftLength, windowFn = hannWindow) {
    if (fftLength == null) {
        fftLength = enclosingPowerOfTwo(frameLength);
    }
    const framedSignal = frame(signal, frameLength, frameStep);
    const windowedSignal = mul(framedSignal, windowFn(frameLength));
    return rfft(windowedSignal, fftLength);
}
const stft = op({ stft_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Extracts crops from the input image tensor and resizes them using bilinear
 * sampling or nearest neighbor sampling (possibly with aspect ratio change)
 * to a common output size specified by cropSize.
 *
 * @param image 4d tensor of shape `[batch,imageHeight,imageWidth, depth]`,
 *     where imageHeight and imageWidth must be positive, specifying the
 *     batch of images from which to take crops
 * @param boxes 2d float32 tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the normalized
 *     coordinates of the box in the boxInd[i]'th image in the batch
 * @param boxInd 1d int32 tensor of shape `[numBoxes]` with values in range
 *     `[0, batch)` that specifies the image that the `i`-th box refers to.
 * @param cropSize 1d int32 tensor of 2 elements `[cropHeigh, cropWidth]`
 *     specifying the size to which all crops are resized to.
 * @param method Optional string from `'bilinear' | 'nearest'`,
 *     defaults to bilinear, which specifies the sampling method for resizing
 * @param extrapolationValue A threshold for deciding when to remove boxes based
 *     on score. Defaults to 0.
 * @return A 4D tensor of the shape `[numBoxes,cropHeight,cropWidth,depth]`
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function cropAndResize_(image, boxes, boxInd, cropSize, method = 'bilinear', extrapolationValue = 0) {
    const $image = convertToTensor(image, 'image', 'cropAndResize');
    const $boxes = convertToTensor(boxes, 'boxes', 'cropAndResize', 'float32');
    const $boxInd = convertToTensor(boxInd, 'boxInd', 'cropAndResize', 'int32');
    const numBoxes = $boxes.shape[0];
    assert($image.rank === 4, () => 'Error in cropAndResize: image must be rank 4,' +
        `but got rank ${$image.rank}.`);
    assert($boxes.rank === 2 && $boxes.shape[1] === 4, () => `Error in cropAndResize: boxes must be have size [${numBoxes},4] ` +
        `but had shape ${$boxes.shape}.`);
    assert($boxInd.rank === 1 && $boxInd.shape[0] === numBoxes, () => `Error in cropAndResize: boxInd must be have size [${numBoxes}] ` +
        `but had shape ${$boxes.shape}.`);
    assert(cropSize.length === 2, () => `Error in cropAndResize: cropSize must be of length 2, but got ` +
        `length ${cropSize.length}.`);
    assert(cropSize[0] >= 1 && cropSize[1] >= 1, () => `cropSize must be atleast [1,1], but was ${cropSize}`);
    assert(method === 'bilinear' || method === 'nearest', () => `method must be bilinear or nearest, but was ${method}`);
    const inputs = { image: $image, boxes: $boxes, boxInd: $boxInd };
    const attrs = { method, extrapolationValue, cropSize };
    const res = ENGINE.runKernel(CropAndResize, inputs, attrs);
    return res;
}
const cropAndResize = op({ cropAndResize_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Flips the image left to right. Currently available in the CPU, WebGL, and
 * WASM backends.
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 */
/** @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'} */
function flipLeftRight_(image) {
    const $image = convertToTensor(image, 'image', 'flipLeftRight', 'float32');
    assert($image.rank === 4, () => 'Error in flipLeftRight: image must be rank 4,' +
        `but got rank ${$image.rank}.`);
    const inputs = { image: $image };
    const res = ENGINE.runKernel(FlipLeftRight, inputs, {});
    return res;
}
const flipLeftRight = op({ flipLeftRight_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Rotates the input image tensor counter-clockwise with an optional offset
 * center of rotation. Currently available in the CPU, WebGL, and WASM backends.
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 * @param radians The amount of rotation.
 * @param fillValue The value to fill in the empty space leftover
 *     after rotation. Can be either a single grayscale value (0-255), or an
 *     array of three numbers `[red, green, blue]` specifying the red, green,
 *     and blue channels. Defaults to `0` (black).
 * @param center The center of rotation. Can be either a single value (0-1), or
 *     an array of two numbers `[centerX, centerY]`. Defaults to `0.5` (rotates
 *     the image around its center).
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function rotateWithOffset_(image, radians, fillValue = 0, center = 0.5) {
    const $image = convertToTensor(image, 'image', 'rotateWithOffset', 'float32');
    assert($image.rank === 4, () => 'Error in rotateWithOffset: image must be rank 4,' +
        `but got rank ${$image.rank}.`);
    const inputs = { image: $image };
    const attrs = { radians, fillValue, center };
    const res = ENGINE.runKernel(RotateWithOffset, inputs, attrs);
    return res;
}
const rotateWithOffset = op({ rotateWithOffset_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nonMaxSuppSanityCheck(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
    if (iouThreshold == null) {
        iouThreshold = 0.5;
    }
    if (scoreThreshold == null) {
        scoreThreshold = Number.NEGATIVE_INFINITY;
    }
    if (softNmsSigma == null) {
        softNmsSigma = 0.0;
    }
    const numBoxes = boxes.shape[0];
    maxOutputSize = Math.min(maxOutputSize, numBoxes);
    assert(0 <= iouThreshold && iouThreshold <= 1, () => `iouThreshold must be in [0, 1], but was '${iouThreshold}'`);
    assert(boxes.rank === 2, () => `boxes must be a 2D tensor, but was of rank '${boxes.rank}'`);
    assert(boxes.shape[1] === 4, () => `boxes must have 4 columns, but 2nd dimension was ${boxes.shape[1]}`);
    assert(scores.rank === 1, () => 'scores must be a 1D tensor');
    assert(scores.shape[0] === numBoxes, () => `scores has incompatible shape with boxes. Expected ${numBoxes}, ` +
        `but was ${scores.shape[0]}`);
    assert(0 <= softNmsSigma && softNmsSigma <= 1, () => `softNmsSigma must be in [0, 1], but was '${softNmsSigma}'`);
    return { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
}

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @return A 1D tensor with the selected box indices.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function nonMaxSuppression_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppression');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppression');
    const inputs = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
    maxOutputSize = inputs.maxOutputSize;
    iouThreshold = inputs.iouThreshold;
    scoreThreshold = inputs.scoreThreshold;
    const attrs = { maxOutputSize, iouThreshold, scoreThreshold };
    return ENGINE.runKernel(NonMaxSuppressionV3, { boxes: $boxes, scores: $scores }, attrs);
}
const nonMaxSuppression = op({ nonMaxSuppression_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This is the async version of `nonMaxSuppression`
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @return A 1D tensor with the selected box indices.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
async function nonMaxSuppressionAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppressionAsync');
    const inputs = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
    maxOutputSize = inputs.maxOutputSize;
    iouThreshold = inputs.iouThreshold;
    scoreThreshold = inputs.scoreThreshold;
    const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
    const boxesVals = boxesAndScores[0];
    const scoresVals = boxesAndScores[1];
    // We call a cpu based impl directly with the typedarray data  here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices } = nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return tensor1d(selectedIndices, 'int32');
}
const nonMaxSuppressionAsync = nonMaxSuppressionAsync_;

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This op also supports a Soft-NMS mode (c.f.
 * Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the score
 * of other overlapping boxes, therefore favoring different regions of the image
 * with high scores. To enable this Soft-NMS mode, set the `softNmsSigma`
 * parameter to be larger than 0.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param softNmsSigma A float representing the sigma parameter for Soft NMS.
 *     When sigma is 0, it falls back to nonMaxSuppression.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - selectedScores: A 1D tensor with the corresponding scores for each
 *       selected box.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function nonMaxSuppressionWithScore_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0.0) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppression');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppression');
    const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    maxOutputSize = params.maxOutputSize;
    iouThreshold = params.iouThreshold;
    scoreThreshold = params.scoreThreshold;
    softNmsSigma = params.softNmsSigma;
    const inputs = { boxes: $boxes, scores: $scores };
    const attrs = { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const result = ENGINE.runKernel(NonMaxSuppressionV5, inputs, attrs);
    return { selectedIndices: result[0], selectedScores: result[1] };
}
const nonMaxSuppressionWithScore = op({ nonMaxSuppressionWithScore_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This op also supports a Soft-NMS mode (c.f.
 * Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the score
 * of other overlapping boxes, therefore favoring different regions of the image
 * with high scores. To enable this Soft-NMS mode, set the `softNmsSigma`
 * parameter to be larger than 0.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param softNmsSigma A float representing the sigma parameter for Soft NMS.
 *     When sigma is 0, it falls back to nonMaxSuppression.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - selectedScores: A 1D tensor with the corresponding scores for each
 *       selected box.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
async function nonMaxSuppressionWithScoreAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0.0) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppressionAsync');
    const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    maxOutputSize = params.maxOutputSize;
    iouThreshold = params.iouThreshold;
    scoreThreshold = params.scoreThreshold;
    softNmsSigma = params.softNmsSigma;
    const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
    const boxesVals = boxesAndScores[0];
    const scoresVals = boxesAndScores[1];
    // We call a cpu based impl directly with the typedarray data  here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return {
        selectedIndices: tensor1d(selectedIndices, 'int32'),
        selectedScores: tensor1d(selectedScores)
    };
}
const nonMaxSuppressionWithScoreAsync = nonMaxSuppressionWithScoreAsync_;

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union), with an option to pad results.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param padToMaxOutputSize Defalts to false. If true, size of output
 *     `selectedIndices` is padded to maxOutputSize.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - validOutputs: A scalar denoting how many elements in `selectedIndices`
 *       are valid. Valid elements occur first, then padding.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function nonMaxSuppressionPadded_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppression');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppression');
    const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null /* softNmsSigma */);
    const $maxOutputSize = params.maxOutputSize;
    const $iouThreshold = params.iouThreshold;
    const $scoreThreshold = params.scoreThreshold;
    const inputs = { boxes: $boxes, scores: $scores };
    const attrs = {
        maxOutputSize: $maxOutputSize,
        iouThreshold: $iouThreshold,
        scoreThreshold: $scoreThreshold,
        padToMaxOutputSize
    };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const result = ENGINE.runKernel(NonMaxSuppressionV4, inputs, attrs);
    return { selectedIndices: result[0], validOutputs: result[1] };
}
const nonMaxSuppressionPadded = op({ nonMaxSuppressionPadded_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union), with an option to pad results.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param padToMaxOutputSize Defalts to false. If true, size of output
 *     `selectedIndices` is padded to maxOutputSize.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - validOutputs: A scalar denoting how many elements in `selectedIndices`
 *       are valid. Valid elements occur first, then padding.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
async function nonMaxSuppressionPaddedAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
    const $boxes = convertToTensor(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = convertToTensor(scores, 'scores', 'nonMaxSuppressionAsync');
    const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null /* softNmsSigma */);
    const $maxOutputSize = params.maxOutputSize;
    const $iouThreshold = params.iouThreshold;
    const $scoreThreshold = params.scoreThreshold;
    const [boxesVals, scoresVals] = await Promise.all([$boxes.data(), $scores.data()]);
    // We call a cpu based impl directly with the typedarray data here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl(boxesVals, scoresVals, $maxOutputSize, $iouThreshold, $scoreThreshold, padToMaxOutputSize);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return {
        selectedIndices: tensor1d(selectedIndices, 'int32'),
        validOutputs: scalar(validOutputs, 'int32')
    };
}
const nonMaxSuppressionPaddedAsync = nonMaxSuppressionPaddedAsync_;

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Bilinear resize a single 3D image or a batch of 3D images to a new shape.
 *
 * @param images The images, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param size The new shape `[newHeight, newWidth]` to resize the
 *     images to. Each channel is resized individually.
 * @param alignCorners Defaults to `false`. If true, rescale
 *     input by `(new_height - 1) / (height - 1)`, which exactly aligns the 4
 *     corners of images and resized images. If false, rescale by
 *     `new_height / height`. Treat similarly the width dimension.
 * @param halfPixelCenters Defaults to `false`. Whether to assume pixel centers
 *     are at 0.5, which would make the floating point coordinates of the top
 *     left pixel 0.5, 0.5.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function resizeBilinear_(images, size, alignCorners = false, halfPixelCenters = false) {
    const $images = convertToTensor(images, 'images', 'resizeBilinear');
    assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeBilinear: x must be rank 3 or 4, but got ` +
        `rank ${$images.rank}.`);
    assert(size.length === 2, () => `Error in resizeBilinear: new shape must 2D, but got shape ` +
        `${size}.`);
    assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeBilinear: If halfPixelCenters is true, ` +
        `alignCorners must be false.`);
    let batchImages = $images;
    let reshapedTo4D = false;
    if ($images.rank === 3) {
        reshapedTo4D = true;
        batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
    }
    const inputs = { images: batchImages };
    const attrs = { alignCorners, halfPixelCenters, size };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(ResizeBilinear, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const resizeBilinear = op({ resizeBilinear_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * NearestNeighbor resize a batch of 3D images to a new shape.
 *
 * @param images The images, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param size The new shape `[newHeight, newWidth]` to resize the
 *     images to. Each channel is resized individually.
 * @param alignCorners Defaults to False. If true, rescale
 *     input by `(new_height - 1) / (height - 1)`, which exactly aligns the 4
 *     corners of images and resized images. If false, rescale by
 *     `new_height / height`. Treat similarly the width dimension.
 * @param halfPixelCenters Defaults to `false`. Whether to assumes pixels are of
 *      half the actual dimensions, and yields more accurate resizes. This flag
 *      would also make the floating point coordinates of the top left pixel
 *      0.5, 0.5.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function resizeNearestNeighbor_(images, size, alignCorners = false, halfPixelCenters = false) {
    const $images = convertToTensor(images, 'images', 'resizeNearestNeighbor');
    assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeNearestNeighbor: x must be rank 3 or 4, but got ` +
        `rank ${$images.rank}.`);
    assert(size.length === 2, () => `Error in resizeNearestNeighbor: new shape must 2D, but got shape ` +
        `${size}.`);
    assert($images.dtype === 'float32' || $images.dtype === 'int32', () => '`images` must have `int32` or `float32` as dtype');
    assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeNearestNeighbor: If halfPixelCenters is true, ` +
        `alignCorners must be false.`);
    let batchImages = $images;
    let reshapedTo4D = false;
    if ($images.rank === 3) {
        reshapedTo4D = true;
        batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
    }
    const inputs = { images: batchImages };
    const attrs = { alignCorners, halfPixelCenters, size };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = ENGINE.runKernel(ResizeNearestNeighbor, inputs, attrs);
    if (reshapedTo4D) {
        return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
    }
    return res;
}
const resizeNearestNeighbor = op({ resizeNearestNeighbor_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Performs image binarization with corresponding threshold
 * (depends on the method)value, which creates a binary image from a grayscale.
 * @param image 3d tensor of shape [imageHeight,imageWidth, depth],
 * where imageHeight and imageWidth must be positive.The image color
 * range should be [0, 255].
 * @param method Optional string from `'binary' | 'otsu'`
 * which specifies the method for thresholding. Defaults to 'binary'.
 * @param inverted Optional boolean whichspecifies
 * if colours should be inverted. Defaults to false.
 * @param threshValue Optional number which defines threshold value from 0 to 1.
 * Defaults to 0.5.
 * @return A 3d tensor of shape [imageHeight,imageWidth, depth], which
 * contains binarized image.
 */
function threshold_(image, method = 'binary', inverted = false, threshValue = 0.5) {
    const $image = convertToTensor(image, 'image', 'threshold');
    /* 0.2989, 0.5870, 0.1140 are represent luma coefficients in CCIR601.
    Reference for converting between RGB and grayscale: https://en.wikipedia.org/wiki/Luma_%28video%29  */
    const RED_INTENCITY_COEF = 0.2989;
    const GREEN_INTENCITY_COEF = 0.5870;
    const BLUE_INTENCITY_COEF = 0.1140;
    const totalPixelsInImage = $image.shape[0] * $image.shape[1];
    let $threshold = mul(tensor1d([threshValue]), 255);
    let r, g, b, grayscale;
    assert($image.rank === 3, () => 'Error in threshold: image must be rank 3,' +
        `but got rank ${$image.rank}.`);
    assert($image.shape[2] === 3 || $image.shape[2] === 1, () => 'Error in threshold: ' +
        'image color channel must be equal to 3 or 1' +
        `but got ${$image.shape[2]}.`);
    assert($image.dtype === 'int32' || $image.dtype === 'float32', () => 'Error in dtype: image dtype must be int32 or float32,' +
        `but got dtype ${$image.dtype}.`);
    assert(method === 'otsu' || method === 'binary', () => `Method must be binary or otsu, but was ${method}`);
    if ($image.shape[2] === 3) {
        [r, g, b] = split($image, [1, 1, 1], -1);
        const $r = mul(r, RED_INTENCITY_COEF);
        const $g = mul(g, GREEN_INTENCITY_COEF);
        const $b = mul(b, BLUE_INTENCITY_COEF);
        grayscale = add(add($r, $g), $b);
    }
    else {
        grayscale = image;
    }
    if (method === 'otsu') {
        const $histogram = bincount(cast(round(grayscale), 'int32'), tensor([]), 256);
        $threshold = otsu($histogram, totalPixelsInImage);
    }
    const invCondition = inverted ?
        lessEqual(grayscale, $threshold) : greater(grayscale, $threshold);
    const result = cast(mul(invCondition, 255), 'int32');
    return result;
}
function otsu(histogram, total) {
    let bestThresh = tensor1d([-1]);
    let bestInBetVar = tensor1d([0]);
    let cInBetVar = tensor1d([0]);
    let classFirst, classSecond, meanFirst, meanSec, weightForeground, weightBack;
    for (let index = 0; index < histogram.size - 1; index++) {
        classFirst = slice(histogram, 0, index + 1);
        classSecond = slice(histogram, index + 1);
        weightForeground = div(sum(classFirst), total);
        weightBack = div(sum(classSecond), total);
        const meanFirstDivA = sum(mul(classFirst, range(0, classFirst.size)));
        meanFirst = div(meanFirstDivA, sum(classFirst));
        const meanSecFill = fill(classSecond.shape, classFirst.size);
        const meanSecAdd = add(range(0, classSecond.size), meanSecFill);
        const meanSecMul = mul(classSecond, (meanSecAdd));
        meanSec = div(sum(meanSecMul), sum(classSecond));
        const cInBetVarSubA = sub(meanFirst, meanSec);
        const cInBetVarSubB = sub(meanFirst, meanSec);
        const cInBetVarMul = mul(weightForeground, weightBack);
        cInBetVar = mul(mul(cInBetVarMul, cInBetVarSubA), cInBetVarSubB);
        const condition = greater(cInBetVar, bestInBetVar);
        bestInBetVar = where(condition, cInBetVar, bestInBetVar);
        bestThresh = where(condition, tensor1d([index]), bestThresh);
    }
    return bestThresh;
}
const threshold = op({ threshold_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Applies the given transform(s) to the image(s).
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 * @param transforms Projective transform matrix/matrices. A tensor1d of length
 *     8 or tensor of size N x 8. If one row of transforms is [a0, a1, a2, b0
 *     b1, b2, c0, c1], then it maps the output point (x, y) to a transformed
 *     input point (x', y') = ((a0 x + a1 y + a2) / k, (b0 x + b1 y + b2) / k),
 *     where k = c0 x + c1 y + 1. The transforms are inverted compared to the
 *     transform mapping input points to output points.
 * @param interpolation Interpolation mode.
 *     Supported values: 'nearest', 'bilinear'. Default to 'nearest'.
 * @param fillMode Points outside the boundaries of the input are filled
 *     according to the given mode, one of 'constant', 'reflect', 'wrap',
 *     'nearest'. Default to 'constant'.
 *     'reflect': (d c b a | a b c d | d c b a ) The input is extended by
 *     reflecting about the edge of the last pixel.
 *     'constant': (k k k k | a b c d | k k k k) The input is extended by
 *     filling all values beyond the edge with the same constant value k.
 *     'wrap': (a b c d | a b c d | a b c d) The input is extended by
 *     wrapping around to the opposite edge.
 *     'nearest': (a a a a | a b c d | d d d d) The input is extended by
 *     the nearest pixel.
 * @param fillValue A float represents the value to be filled outside the
 *     boundaries when fillMode is 'constant'.
 * @param Output dimension after the transform, [height, width]. If undefined,
 *     output is the same size as input image.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */
function transform_(image, transforms, interpolation = 'nearest', fillMode = 'constant', fillValue = 0, outputShape) {
    const $image = convertToTensor(image, 'image', 'transform', 'float32');
    const $transforms = convertToTensor(transforms, 'transforms', 'transform', 'float32');
    assert($image.rank === 4, () => 'Error in transform: image must be rank 4,' +
        `but got rank ${$image.rank}.`);
    assert($transforms.rank === 2 &&
        ($transforms.shape[0] === $image.shape[0] ||
            $transforms.shape[0] === 1) &&
        $transforms.shape[1] === 8, () => `Error in transform: Input transform should be batch x 8 or 1 x 8`);
    assert(outputShape == null || outputShape.length === 2, () => 'Error in transform: outputShape must be [height, width] or null, ' +
        `but got ${outputShape}.`);
    const inputs = { image: $image, transforms: $transforms };
    const attrs = { interpolation, fillMode, fillValue, outputShape };
    return ENGINE.runKernel(Transform, inputs, attrs);
}
const transform = op({ transform_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Copy a tensor setting everything outside a central band in each innermost
 * matrix to zero.
 *
 * The band part is computed as follows: Assume input has `k` dimensions
 * `[I, J, K, ..., M, N]`, then the output is a tensor with the same shape where
 * `band[i, j, k, ..., m, n] = in_band(m, n) * input[i, j, k, ..., m, n]`.
 * The indicator function
 * `in_band(m, n) = (num_lower < 0 || (m-n) <= num_lower))`
 * `&& (num_upper < 0 || (n-m) <= num_upper)`
 *
 * ```js
 * const x = tf.tensor2d([[ 0,  1,  2, 3],
 *                        [-1,  0,  1, 2],
 *                        [-2, -1,  0, 1],
 *                        [-3, -2, -1, 0]]);
 * let y = tf.linalg.bandPart(x, 1, -1);
 * y.print(); // [[ 0,  1,  2, 3],
 *            //  [-1,  0,  1, 2],
 *            //  [ 0, -1,  0, 1],
 *            //  [ 0, 0 , -1, 0]]
 * let z = tf.linalg.bandPart(x, 2, 1);
 * z.print(); // [[ 0,  1,  0, 0],
 *            //  [-1,  0,  1, 0],
 *            //  [-2, -1,  0, 1],
 *            //  [ 0, -2, -1, 0]]
 * ```
 *
 * @param x Rank `k` tensor
 * @param numLower Number of subdiagonals to keep.
 *   If negative, keep entire lower triangle.
 * @param numUpper Number of subdiagonals to keep.
 *   If negative, keep entire upper triangle.
 * @returns Rank `k` tensor of the same shape as input.
 *   The extracted banded tensor.
 *
 * @doc {heading:'Operations', subheading:'Linear Algebra', namespace:'linalg'}
 */
function bandPart_(a, numLower, numUpper) {
    assert(numLower % 1 === 0, () => `bandPart(): numLower must be an integer, got ${numLower}.`);
    assert(numUpper % 1 === 0, () => `bandPart(): numUpper must be an integer, got ${numUpper}.`);
    const $a = convertToTensor(a, 'a', 'bandPart');
    assert($a.rank >= 2, () => `bandPart(): Rank must be at least 2, got ${$a.rank}.`);
    const shape = $a.shape;
    const [M, N] = $a.shape.slice(-2);
    if (!(numLower <= M)) {
        throw new Error(`bandPart(): numLower (${numLower})` +
            ` must not be greater than the number of rows (${M}).`);
    }
    if (!(numUpper <= N)) {
        throw new Error(`bandPart(): numUpper (${numUpper})` +
            ` must not be greater than the number of columns (${N}).`);
    }
    if (numLower < 0) {
        numLower = M;
    }
    if (numUpper < 0) {
        numUpper = N;
    }
    const i = reshape(range(0, M, 1, 'int32'), [-1, 1]);
    const j = range(0, N, 1, 'int32');
    const ij = sub(i, j);
    const inBand = logicalAnd(lessEqual(ij, scalar(+numLower, 'int32')), greaterEqual(ij, scalar(-numUpper, 'int32')));
    const zero = zeros([M, N], $a.dtype);
    return reshape(stack(unstack(reshape($a, [-1, M, N]))
        .map(mat => where(inBand, mat, zero))), shape);
}
const bandPart = op({ bandPart_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Gram-Schmidt orthogonalization.
 *
 * ```js
 * const x = tf.tensor2d([[1, 2], [3, 4]]);
 * let y = tf.linalg.gramSchmidt(x);
 * y.print();
 * console.log('Othogonalized:');
 * y.dot(y.transpose()).print();  // should be nearly the identity matrix.
 * console.log('First row direction maintained:');
 * const data = await y.array();
 * console.log(data[0][1] / data[0][0]);  // should be nearly 2.
 * ```
 *
 * @param xs The vectors to be orthogonalized, in one of the two following
 *   formats:
 *   - An Array of `tf.Tensor1D`.
 *   - A `tf.Tensor2D`, i.e., a matrix, in which case the vectors are the rows
 *     of `xs`.
 *   In each case, all the vectors must have the same length and the length
 *   must be greater than or equal to the number of vectors.
 * @returns The orthogonalized and normalized vectors or matrix.
 *   Orthogonalization means that the vectors or the rows of the matrix
 *   are orthogonal (zero inner products). Normalization means that each
 *   vector or each row of the matrix has an L2 norm that equals `1`.
 *
 * @doc {heading:'Operations', subheading:'Linear Algebra', namespace:'linalg'}
 */
function gramSchmidt_(xs) {
    let inputIsTensor2D;
    if (Array.isArray(xs)) {
        inputIsTensor2D = false;
        assert(xs != null && xs.length > 0, () => 'Gram-Schmidt process: input must not be null, undefined, or ' +
            'empty');
        const dim = xs[0].shape[0];
        for (let i = 1; i < xs.length; ++i) {
            assert(xs[i].shape[0] === dim, () => 'Gram-Schmidt: Non-unique lengths found in the input vectors: ' +
                `(${xs[i].shape[0]} vs. ${dim})`);
        }
    }
    else {
        inputIsTensor2D = true;
        xs = split(xs, xs.shape[0], 0).map(x => squeeze(x, [0]));
    }
    assert(xs.length <= xs[0].shape[0], () => `Gram-Schmidt: Number of vectors (${xs.length}) exceeds ` +
        `number of dimensions (${xs[0].shape[0]}).`);
    const ys = [];
    const xs1d = xs;
    for (let i = 0; i < xs.length; ++i) {
        ys.push(ENGINE.tidy(() => {
            let x = xs1d[i];
            if (i > 0) {
                for (let j = 0; j < i; ++j) {
                    const proj = mul(sum(mul(ys[j], x)), ys[j]);
                    x = sub(x, proj);
                }
            }
            return div(x, norm(x, 'euclidean'));
        }));
    }
    if (inputIsTensor2D) {
        return stack(ys, 0);
    }
    else {
        return ys;
    }
}
const gramSchmidt = op({ gramSchmidt_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Compute QR decomposition of m-by-n matrix using Householder transformation.
 *
 * Implementation based on
 *   [http://www.cs.cornell.edu/~bindel/class/cs6210-f09/lec18.pdf]
 * (http://www.cs.cornell.edu/~bindel/class/cs6210-f09/lec18.pdf)
 *
 * ```js
 * const a = tf.tensor2d([[1, 2], [3, 4]]);
 * let [q, r] = tf.linalg.qr(a);
 * console.log('Q');
 * q.print();
 * console.log('R');
 * r.print();
 * console.log('Orthogonalized');
 * q.dot(q.transpose()).print()  // should be nearly the identity matrix.
 * console.log('Reconstructed');
 * q.dot(r).print(); // should be nearly [[1, 2], [3, 4]];
 * ```
 *
 * @param x The `tf.Tensor` to be QR-decomposed. Must have rank >= 2. Suppose
 *   it has the shape `[..., M, N]`.
 * @param fullMatrices An optional boolean parameter. Defaults to `false`.
 *   If `true`, compute full-sized `Q`. If `false` (the default),
 *   compute only the leading N columns of `Q` and `R`.
 * @returns An `Array` of two `tf.Tensor`s: `[Q, R]`. `Q` is a unitary matrix,
 *   i.e., its columns all have unit norm and are mutually orthogonal.
 *   If `M >= N`,
 *     If `fullMatrices` is `false` (default),
 *       - `Q` has a shape of `[..., M, N]`,
 *       - `R` has a shape of `[..., N, N]`.
 *     If `fullMatrices` is `true` (default),
 *       - `Q` has a shape of `[..., M, M]`,
 *       - `R` has a shape of `[..., M, N]`.
 *   If `M < N`,
 *     - `Q` has a shape of `[..., M, M]`,
 *     - `R` has a shape of `[..., M, N]`.
 * @throws If the rank of `x` is less than 2.
 *
 * @doc {heading:'Operations',
 *       subheading:'Linear Algebra',
 *       namespace:'linalg'}
 */
function qr_(x, fullMatrices = false) {
    assert(x.rank >= 2, () => `qr() requires input tensor to have a rank >= 2, but got rank ${x.rank}`);
    if (x.rank === 2) {
        return qr2d(x, fullMatrices);
    }
    else {
        // Rank > 2.
        // TODO(cais): Below we split the input into individual 2D tensors,
        //   perform QR decomposition on them and then stack the results back
        //   together. We should explore whether this can be parallelized.
        const outerDimsProd = x.shape.slice(0, x.shape.length - 2)
            .reduce((value, prev) => value * prev);
        const x2ds = unstack(reshape(x, [
            outerDimsProd, x.shape[x.shape.length - 2],
            x.shape[x.shape.length - 1]
        ]), 0);
        const q2ds = [];
        const r2ds = [];
        x2ds.forEach(x2d => {
            const [q2d, r2d] = qr2d(x2d, fullMatrices);
            q2ds.push(q2d);
            r2ds.push(r2d);
        });
        const q = reshape(stack(q2ds, 0), x.shape);
        const r = reshape(stack(r2ds, 0), x.shape);
        return [q, r];
    }
}
function qr2d(x, fullMatrices = false) {
    return ENGINE.tidy(() => {
        assert(x.shape.length === 2, () => `qr2d() requires a 2D Tensor, but got a ${x.shape.length}D Tensor.`);
        const m = x.shape[0];
        const n = x.shape[1];
        let q = eye(m); // Orthogonal transform so far.
        let r = clone(x); // Transformed matrix so far.
        const one2D = tensor2d([[1]], [1, 1]);
        let w = clone(one2D);
        const iters = m >= n ? n : m;
        for (let j = 0; j < iters; ++j) {
            // This tidy within the for-loop ensures we clean up temporary
            // tensors as soon as they are no longer needed.
            const rTemp = r;
            const wTemp = w;
            const qTemp = q;
            [w, r, q] = ENGINE.tidy(() => {
                // Find H = I - tau * w * w', to put zeros below R(j, j).
                const rjEnd1 = slice(r, [j, j], [m - j, 1]);
                const normX = norm(rjEnd1);
                const rjj = slice(r, [j, j], [1, 1]);
                // The sign() function returns 0 on 0, which causes division by zero.
                const s = where(greater(rjj, 0), tensor2d([[-1]]), tensor2d([[1]]));
                const u1 = sub(rjj, mul(s, normX));
                const wPre = div(rjEnd1, u1);
                if (wPre.shape[0] === 1) {
                    w = clone(one2D);
                }
                else {
                    w = concat([
                        one2D,
                        slice(wPre, [1, 0], [wPre.shape[0] - 1, wPre.shape[1]])
                    ], 0);
                }
                const tau = neg(div(matMul(s, u1), normX));
                // -- R := HR, Q := QH.
                const rjEndAll = slice(r, [j, 0], [m - j, n]);
                const tauTimesW = mul(tau, w);
                const wT = transpose(w);
                if (j === 0) {
                    r = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
                }
                else {
                    const rTimesTau = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
                    r = concat([slice(r, [0, 0], [j, n]), rTimesTau], 0);
                }
                const tawTimesWT = transpose(tauTimesW);
                const qAllJEnd = slice(q, [0, j], [m, q.shape[1] - j]);
                if (j === 0) {
                    q = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
                }
                else {
                    const qTimesTau = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
                    q = concat([slice(q, [0, 0], [m, j]), qTimesTau], 1);
                }
                return [w, r, q];
            });
            dispose([rTemp, wTemp, qTemp]);
        }
        if (!fullMatrices && m > n) {
            q = slice(q, [0, 0], [m, n]);
            r = slice(r, [0, 0], [n, n]);
        }
        return [q, r];
    });
}
const qr = op({ qr_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Reduction;
(function (Reduction) {
    Reduction[Reduction["NONE"] = 0] = "NONE";
    Reduction[Reduction["MEAN"] = 1] = "MEAN";
    Reduction[Reduction["SUM"] = 2] = "SUM";
    Reduction[Reduction["SUM_BY_NONZERO_WEIGHTS"] = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(Reduction || (Reduction = {}));

/**
 * Computes the weighted loss between two tensors.
 *
 * @param losses Tensor of shape `[batch_size, d1, ... dN]`.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `losses`, and must be broadcastable to `losses` (i.e., all
 *    dimensions must be either `1`, or the same as the corresponding
 *    `losses` dimension).
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function computeWeightedLoss_(losses, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $losses = convertToTensor(losses, 'losses', 'computeWeightedLoss');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'computeWeightedLoss');
    }
    const weightedLoss = ($weights == null) ? $losses : mul($losses, $weights);
    if (reduction === Reduction.NONE) {
        return weightedLoss;
    }
    if (reduction === Reduction.SUM) {
        return sum(weightedLoss);
    }
    if (reduction === Reduction.MEAN) {
        if ($weights == null) {
            return mean(weightedLoss);
        }
        else {
            const broadcastFactor = $losses.size / $weights.size;
            const result = div(sum(weightedLoss), sum($weights));
            return broadcastFactor > 1 ? div(result, scalar(broadcastFactor)) :
                result;
        }
    }
    if (reduction === Reduction.SUM_BY_NONZERO_WEIGHTS) {
        if ($weights == null) {
            return div(sum(weightedLoss), scalar($losses.size));
        }
        else {
            const broadcastedWeights = mul($weights, ones($losses.shape));
            const numNonZeros = cast(sum(notEqual(broadcastedWeights, scalar(0))), 'float32');
            return div(sum(weightedLoss), numNonZeros);
        }
    }
    throw Error(`Unknown reduction: ${reduction}`);
}
const computeWeightedLoss = op({ computeWeightedLoss_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the absolute difference loss between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function absoluteDifference_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $labels = convertToTensor(labels, 'labels', 'absoluteDifference');
    const $predictions = convertToTensor(predictions, 'predictions', 'absoluteDifference');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'absoluteDifference');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in absoluteDifference: ');
    const losses = abs(sub($labels, $predictions));
    return computeWeightedLoss(losses, $weights, reduction);
}
const absoluteDifference = op({ absoluteDifference_ });

/**
 * Computes the cosine distance loss between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param axis The dimension along which the cosine distance is computed.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function cosineDistance_(labels, predictions, axis, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $labels = convertToTensor(labels, 'labels', 'cosineDistance');
    const $predictions = convertToTensor(predictions, 'predictions', 'cosineDistance');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'cosineDistance');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in cosineDistance: ');
    const one = scalar(1);
    const losses = sub(one, sum(mul($labels, $predictions), axis, true));
    return computeWeightedLoss(losses, $weights, reduction);
}
const cosineDistance = op({ cosineDistance_ });

/**
 * Computes the Hinge loss between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function hingeLoss_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    let $labels = convertToTensor(labels, 'labels', 'hingeLoss');
    const $predictions = convertToTensor(predictions, 'predictions', 'hingeLoss');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'hingeLoss');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in hingeLoss: ');
    const one = scalar(1);
    // Convert binary labels to (-1, 1)
    $labels = sub(mul(scalar(2), $labels), one);
    const losses = relu(sub(one, mul($labels, $predictions)));
    return computeWeightedLoss(losses, $weights, reduction);
}
const hingeLoss = op({ hingeLoss_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the huber loss between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param delta Point where huber loss changes from quadratic to linear.
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`.
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function huberLoss_(labels, predictions, weights, delta = 1.0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $labels = convertToTensor(labels, 'labels', 'huberLoss');
    const $predictions = convertToTensor(predictions, 'predictions', 'huberLoss');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'huberLoss');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in huberLoss: ');
    const deltaScalar = scalar(delta);
    const error = abs(sub($predictions, $labels));
    const quadratic = minimum(error, deltaScalar);
    const linear = sub(error, quadratic);
    const losses = add(mul(scalar(0.5), square(quadratic)), mul(deltaScalar, linear));
    return computeWeightedLoss(losses, $weights, reduction);
}
const huberLoss = op({ huberLoss_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the log loss between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param epsilon A small increment to avoid taking log of zero
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function logLoss_(labels, predictions, weights, epsilon = 1e-7, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $labels = convertToTensor(labels, 'labels', 'logLoss');
    const $predictions = convertToTensor(predictions, 'predictions', 'logLoss');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'logLoss');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in logLoss: ');
    const one = scalar(1);
    const epsilonScalar = scalar(epsilon);
    const l1 = neg(mul($labels, log(add($predictions, epsilonScalar))));
    const l2 = mul(sub(one, $labels), log(add(sub(one, $predictions), epsilonScalar)));
    const losses = sub(l1, l2);
    return computeWeightedLoss(losses, $weights, reduction);
}
const logLoss = op({ logLoss_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the mean squared error between two tensors.
 *
 * @param labels The ground truth output tensor, same dimensions as
 *    'predictions'.
 * @param predictions The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc {heading: 'Training', subheading: 'Losses', namespace: 'losses'}
 */
function meanSquaredError_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    const $labels = convertToTensor(labels, 'labels', 'meanSquaredError');
    const $predictions = convertToTensor(predictions, 'predictions', 'meanSquaredError');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'meanSquaredError');
    }
    assertShapesMatch($labels.shape, $predictions.shape, 'Error in meanSquaredError: ');
    const losses = squaredDifference($labels, $predictions);
    return computeWeightedLoss(losses, $weights, reduction);
}
const meanSquaredError = op({ meanSquaredError_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function sigmoidCrossEntropyWithLogits_(labels, logits) {
    const $labels = convertToTensor(labels, 'labels', 'sigmoidCrossEntropyWithLogits');
    const $logits = convertToTensor(logits, 'logits', 'sigmoidCrossEntropyWithLogits');
    assertShapesMatch($labels.shape, $logits.shape, 'Error in sigmoidCrossEntropyWithLogits: ');
    /**
     * Implementation Details:
     *
     * For brevity, let `x = logits`, `z = labels`.  The logistic loss is
     *     z * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
     *   = z * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
     *   = z * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
     *   = z * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
     *   = (1 - z) * x + log(1 + exp(-x))
     *   = x - x * z + log(1 + exp(-x))
     *
     *   For x < 0, to avoid overflow in exp(-x), we reformulate the above
     *     x - x * z + log(1 + exp(-x))
     *   = log(exp(x)) - x * z + log(1 + exp(-x))
     *   = - x * z + log(1 + exp(x))
     *
     * Hence, to ensure stability and avoid overflow, the implementation uses
     * this equivalent formulation:
     *     max(x, 0) - x * z + log(1 + exp(-abs(x)))
     */
    const maxOutput = relu($logits);
    const outputXTarget = mul($logits, $labels);
    const sigmoidOutput = log1p(exp(neg(abs($logits))));
    return add(sub(maxOutput, outputXTarget), sigmoidOutput);
}
/**
 * Computes the sigmoid cross entropy loss between two tensors.
 *
 * If labelSmoothing is nonzero, smooth the labels towards 1/2:
 *
 *   newMulticlassLabels = multiclassLabels * (1 - labelSmoothing)
 *                         + 0.5 * labelSmoothing
 *
 * @param multiClassLabels The ground truth output tensor of shape
 * [batch_size, num_classes], same dimensions as 'predictions'.
 * @param logits The predicted outputs.
 * @param weights Tensor whose rank is either 0, or the same rank as
 *    `labels`, and must be broadcastable to `labels` (i.e., all dimensions
 *    must be either `1`, or the same as the corresponding `losses`
 *    dimension).
 * @param labelSmoothing If greater than 0, then smooth the labels.
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc { heading: 'Training', subheading: 'Losses', namespace: 'losses' }
 */
function sigmoidCrossEntropy_(multiClassLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    let $multiClassLabels = convertToTensor(multiClassLabels, 'multiClassLabels', 'sigmoidCrossEntropy');
    const $logits = convertToTensor(logits, 'logits', 'sigmoidCrossEntropy');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'sigmoidCrossEntropy');
    }
    assertShapesMatch($multiClassLabels.shape, $logits.shape, 'Error in sigmoidCrossEntropy: ');
    if (labelSmoothing > 0) {
        const labelSmoothingScalar = scalar(labelSmoothing);
        const one = scalar(1);
        const half = scalar(0.5);
        $multiClassLabels =
            add(mul($multiClassLabels, sub(one, labelSmoothingScalar)), mul(half, labelSmoothingScalar));
    }
    const losses = sigmoidCrossEntropyWithLogits_($multiClassLabels, $logits);
    return computeWeightedLoss(losses, $weights, reduction);
}
const sigmoidCrossEntropy = op({ sigmoidCrossEntropy_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes softmax cross entropy between logits and labels.
 *
 * Measures the probability error in discrete classification tasks in which
 * the classes are mutually exclusive (each entry is in exactly one class).
 * For example, each CIFAR-10 image is labeled with one and only one label: an
 * image can be a dog or a truck, but not both.
 *
 * `NOTE`: While the classes are mutually exclusive, their probabilities need
 * not be. All that is required is that each row of labels is a valid
 * probability distribution. If they are not, the computation of the gradient
 * will be incorrect.
 *
 * `WARNING`: This op expects unscaled logits, since it performs a softmax on
 * logits internally for efficiency. Do not call this op with the output of
 * softmax, as it will produce incorrect results.
 *
 * logits and labels must have the same shape, e.g. [batch_size, num_classes]
 * and the same dtype.
 * @param labels The labels array.
 * @param logits The logits array.
 * @param dim The dimension softmax would be performed on. Defaults to `-1`
 *     which indicates the last dimension.
 */
function softmaxCrossEntropyWithLogits_(labels, logits, dim = -1) {
    if (dim === -1) {
        dim = logits.rank - 1;
    }
    if (dim !== logits.rank - 1) {
        throw Error(`Softmax cross entropy along a non-last dimension is not yet ` +
            `supported. Labels / logits was rank ${logits.rank} ` +
            `and dim was ${dim}`);
    }
    // Use a custom gradient for numerical stability.
    const customOp = customGrad((labels, logits, save) => {
        // Reference:
        //   1. http://cs231n.github.io/linear-classify/#softmax
        //   2. https://blog.feedly.com/tricks-of-the-trade-logsumexp/
        const keepDims = true;
        const lse = logSumExp(logits, [dim], keepDims);
        const logResult = sub(cast(logits, 'float32'), lse);
        save([labels, logResult]);
        const costVector = neg(mul(logResult, labels));
        const value = sum(costVector, [dim]);
        const gradFunc = (dy, saved) => {
            const [labels, logResult] = saved;
            const dyShape = expandShapeToKeepDim(dy.shape, [dim]);
            return [
                mul(reshape(dy, dyShape), sub(cast(labels, 'float32'), exp(logResult))),
                mul(reshape(dy, dyShape), sub(exp(logResult), cast(labels, 'float32'))),
            ];
        };
        return { value, gradFunc };
    });
    return customOp(labels, logits);
}
/**
 * Computes the softmax cross entropy loss between two tensors.
 *
 * If labelSmoothing is nonzero, smooth the labels towards 1/2:
 *
 *   newOnehotLabels = onehotLabels * (1 - labelSmoothing)
 *                         + labelSmoothing / numClasses
 *
 * @param onehotLabels One hot encoded labels
 *    [batch_size, num_classes], same dimensions as 'predictions'.
 * @param logits The predicted outputs.
 * @param weights Tensor whose rank is either 0, or 1, and must be
 *    broadcastable to `loss`  of shape [batch_size]
 * @param labelSmoothing If greater than 0, then smooth the labels.
 * @param reduction Type of reduction to apply to loss. Should be of type
 *    `Reduction`
 *
 * @doc { heading: 'Training', subheading: 'Losses', namespace: 'losses' }
 */
function softmaxCrossEntropy_(onehotLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
    let $onehotLabels = convertToTensor(onehotLabels, 'onehotLabels', 'softmaxCrossEntropy');
    const $logits = convertToTensor(logits, 'logits', 'softmaxCrossEntropy');
    let $weights = null;
    if (weights != null) {
        $weights = convertToTensor(weights, 'weights', 'softmaxCrossEntropy');
    }
    assertShapesMatch($onehotLabels.shape, $logits.shape, 'Error in softmaxCrossEntropy: ');
    if (labelSmoothing > 0) {
        const labelSmoothingScalar = scalar(labelSmoothing);
        const one = scalar(1);
        const numClasses = scalar($onehotLabels.shape[1]);
        $onehotLabels =
            add(mul($onehotLabels, sub(one, labelSmoothingScalar)), div(labelSmoothingScalar, numClasses));
    }
    const losses = softmaxCrossEntropyWithLogits_($onehotLabels, $logits);
    return computeWeightedLoss(losses, $weights, reduction);
}
const softmaxCrossEntropy = op({ softmaxCrossEntropy_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * The input SparseTensor is represented via the map of inputs {`indices`,
 * `values`, `denseShape`}. The output SparseTensor has the same `denseShape`
 * but with indices `outputIndices` and values `outputValues`. This op inserts a
 * single entry for every row that doesn't have any values. The index is created
 * as `[row, 0, ..., 0]` and the inserted value is `defaultValue`.
 *
 * For example, suppose `spInput` has shape [5, 6] and non-empty values:
 * [0, 1]: a
 * [0, 3]: b
 * [2, 0]: c
 * [3, 1]: d
 *
 * Rows 1 and 4 are empty, so the output will be of shape [5, 6] with values:
 * [0, 1]: a
 * [0, 3]: b
 * [1, 0]: `defaultValue`
 * [2, 0]: c
 * [3, 1]: d
 * [4, 0]: `defaultValue`
 *
 * The output SparseTensor will be in row-major order and will have the same
 * shape as the input.
 *
 * This op also returns an indicator vector shaped [dense_shape[0]] such that
 * emptyRowIndicator[i] = True iff row i was an empty row.
 *
 * And a reverse index map vector shaped [indices.shape[0]] that is used during
 * backpropagation, reverseIndexMap[i] = outi s.t. indices[i, j] ==
 * outputIndices[outi, j] for all j
 *
 * ```js
 * const result = tf.sparse.sparseFillEmptyRows(
 *   [[0, 0], [1, 0], [1, 3], [1, 4], [3, 2], [3, 3]],
 *   [0, 10, 13, 14, 32, 33], [5, 6], -1);
 * console.log(result);
 * result['outputIndices'].print(); // [[0, 0], [1, 0], [1, 3], [1, 4],
 *                                  //  [2, 0], [3, 2], [3, 3], [4, 0]]
 * result['outputValues'].print(); // [0, 10, 13, 14,-1, 32, 33, -1]
 * result['emptyRowIndicator'].print(); // [false, false, true, false, true]
 * result['reverseIndexMap'].print(); // [0, 1, 2, 3, 5, 6]
 * ```
 * @param indices: 2-D. the indices of the sparse tensor.
 * @param values: 1-D. the values of the sparse tensor.
 * @param denseShape: 1-D. the shape of the sparse tensor.
 * @param defaultValue: 0-D. default value to insert into location [row, 0, ...,
 *     0] for rows missing from the input sparse tensor.
 * @return A map with the following properties:
 *     - outputIndices
 *     - outputValues: 1-D. the values of the filled sparse tensor.
 *     - emptyRowIndicator: 1-D. whether the dense row was missing in the input
 * sparse tensor.
 *     - reverseIndexMap: 1-D. a map from the input indices to the output
 * indices.
 * @doc {heading: 'Operations', subheading: 'Sparse'}
 */
function sparseFillEmptyRows_(indices, values, denseShape, defaultValue) {
    const $indices = convertToTensor(indices, 'indices', 'sparseFillEmptyRows');
    const $values = convertToTensor(values, 'values', 'sparseFillEmptyRows');
    const $denseShape = convertToTensor(denseShape, 'denseShape', 'sparseFillEmptyRows');
    const $defaultValue = convertToTensor(defaultValue, 'defaultValue', 'sparseFillEmptyRows', $values.dtype);
    if ($indices.rank !== 2) {
        throw new Error(`Indices should be Tensor2D but received shape
        ${$indices.shape}`);
    }
    if ($values.rank !== 1) {
        throw new Error(`Values should be Tensor1D but received shape ${$values.shape}`);
    }
    if ($denseShape.rank !== 1) {
        throw new Error(`Dense shape should be Tensor1D but received shape ${$denseShape.shape}`);
    }
    if ($defaultValue.rank !== 0) {
        throw new Error(`Default value should be a scalar but received shape ${$defaultValue.shape}`);
    }
    const inputs = {
        indices: $indices,
        values: $values,
        denseShape: $denseShape,
        defaultValue: $defaultValue
    };
    const result = ENGINE.runKernel(SparseFillEmptyRows, inputs);
    return {
        outputIndices: result[0],
        outputValues: result[1],
        emptyRowIndicator: result[2],
        reverseIndexMap: result[3]
    };
}
const sparseFillEmptyRows = op({ sparseFillEmptyRows_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * This operation has the same semantics as reshape on the represented dense
 * tensor. The `inputIndices` are recomputed based on the requested `newShape`.
 * If one component of `newShape` is the special value -1, the size of that
 * dimension is computed so that the total dense size remains constant. At most
 * one component of `newShape` can be -1. The number of dense elements implied
 * by `newShape` must be the same as the number of dense elements originally
 * implied by `inputShape`. Reshaping does not affect the order of values in the
 * SparseTensor. If the input tensor has rank R_in and N non-empty values, and
 * `newShape` has length R_out, then `inputIndices` has shape [N, R_in],
 * `inputShape` has length R_in, `outputIndices` has shape [N, R_out], and
 * `outputShape` has length R_out.
 *
 * ```js
 * const result = tf.sparse.sparseReshape(
 *   [[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 2, 3]],
 *   [2, 3, 6], [9, -1]);
 * console.log(result);
 * result['outputIndices'].print(); //[[0, 0], [0, 1], [1, 2], [4, 2], [8, 1]]
 * result['outputShape'].print(); // [9, 4]
 * ```
 * @param inputIndices: 2-D. N x R_in matrix with the indices of non-empty
 * values in a SparseTensor.
 * @param inputShape: 1-D. R_in Tensor1D with the input SparseTensor's dense
 * shape.
 * @param newShape: 1-D. R_out Tensor1D with the requested new dense shape.
 * @return A map with the following properties:
 *     - outputIndices: 2-D. N x R_out matrix with the updated indices of
 *       non-empty values in the output SparseTensor.
 *     - outputShape: 1-D. R_out vector with the full dense shape of the output
 *       SparseTensor. This is the same as newShape but with any -1 dimensions
 *        filled in.
 * @doc {heading: 'Operations', subheading: 'Sparse'}
 */
function sparseReshape_(inputIndices, inputShape, newShape) {
    const $inputIndices = convertToTensor(inputIndices, 'inputIndices', 'sparseReshape');
    const $inputShape = convertToTensor(inputShape, 'inputShape', 'sparseReshape');
    const $newShape = convertToTensor(newShape, 'newShape', 'sparseReshape');
    if ($inputIndices.rank !== 2) {
        throw new Error(`Input indices should be Tensor2D but received shape
        ${$inputIndices.shape}`);
    }
    if ($inputShape.rank !== 1) {
        throw new Error(`Input shape should be Tensor1D but received shape ${$inputShape.shape}`);
    }
    if ($newShape.rank !== 1) {
        throw new Error(`New shape should be Tensor1D but received shape ${$newShape.shape}`);
    }
    const inputs = {
        inputIndices: $inputIndices,
        inputShape: $inputShape,
        newShape: $newShape
    };
    const result = ENGINE.runKernel(SparseReshape, inputs);
    return { outputIndices: result[0], outputShape: result[1] };
}
const sparseReshape = op({ sparseReshape_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the mean along sparse segments of a tensor.
 *
 * ```js
 * const c = tf.tensor2d([[1,2,3,4], [-1,-2,-3,-4], [6,7,8,9]]);
 * // Select two rows, one segment.
 * const result1 = tf.sparse.sparseSegmentMean(c,
 *                                           tf.tensor1d([0, 1], 'int32'),
 *                                           tf.tensor1d([0, 0], 'int32'));
 * result1.print(); // [[0, 0, 0, 0]]
 *
 * // Select two rows, two segments.
 * const result2 = tf.sparse.sparseSegmentMean(c,
 *                                             tf.tensor1d([0, 1], 'int32'),
 *                                             tf.tensor1d([0, 1], 'int32'));
 * result2.print(); // [[1, 2, 3, 4], [-1, -2, -3, -4]]
 *
 * // Select all rows, two segments.
 * const result3 = tf.sparse.sparseSegmentMean(c,
 *                                             tf.tensor1d([0, 1, 2], 'int32'),
 *                                             tf.tensor1d([0, 1, 1], 'int32'));
 * result3.print(); // [[1.0, 2.0, 3.0, 4.0], [2.5, 2.5, 2.5, 2.5]]
 * ```
 * @param data: A Tensor of at least one dimension with data that will be
 *     assembled in the output.
 * @param indices: A 1-D Tensor with indices into data. Has same rank as
 *     segmentIds.
 * @param segmentIds: A 1-D Tensor with indices into the output Tensor. Values
 *     should be sorted and can be repeated.
 * @return Has same shape as data, except for dimension 0 which has equal to
 *         the number of segments.
 *
 * @doc {heading: 'Operations', subheading: 'Sparse'}
 */
function sparseSegmentMean_(data, indices, segmentIds) {
    const $data = convertToTensor(data, 'data', 'sparseSegmentMean');
    const $indices = convertToTensor(indices, 'indices', 'sparseSegmentMean');
    const $segmentIds = convertToTensor(segmentIds, 'segmentIds', 'sparseSegmentMean');
    if ($data.rank < 1) {
        throw new Error(`Data should be at least 1 dimensional but received scalar`);
    }
    if ($indices.rank !== 1) {
        throw new Error(`Indices should be Tensor1D but received shape
          ${$indices.shape}`);
    }
    if ($segmentIds.rank !== 1) {
        throw new Error(`Segment ids should be Tensor1D but received shape
          ${$segmentIds.shape}`);
    }
    const inputs = {
        data: $data,
        indices: $indices,
        segmentIds: $segmentIds
    };
    return ENGINE.runKernel(SparseSegmentMean, inputs);
}
const sparseSegmentMean = op({ sparseSegmentMean_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Computes the sum along sparse segments of a tensor.
 *
 * ```js
 * const c = tf.tensor2d([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]]);
 * // Select two rows, one segment.
 * const result1 = tf.sparse.sparseSegmentSum(c,
 *                                           tf.tensor1d([0, 1], 'int32'),
 *                                           tf.tensor1d([0, 0], 'int32'));
 * result1.print(); // [[0, 0, 0, 0]]
 *
 * // Select two rows, two segment.
 * const result2 = tf.sparse.sparseSegmentSum(c,
 *                                           tf.tensor1d([0, 1], 'int32'),
 *                                           tf.tensor1d([0, 1], 'int32'));
 * result2.print(); // [[1, 2, 3, 4], [-1, -2, -3, -4]]
 *
 * // Select all rows, two segments.
 * const result3 = tf.sparse.sparseSegmentSum(c,
 *                                           tf.tensor1d([0, 1, 2], 'int32'),
 *                                           tf.tensor1d([0, 0, 1], 'int32'));
 * result3.print(); // [[0, 0, 0, 0], [5, 6, 7, 8]]
 * ```
 * @param data: A Tensor of at least one dimension with data that will be
 *     assembled in the output.
 * @param indices: A 1-D Tensor with indices into data. Has same rank as
 *     segmentIds.
 * @param segmentIds: A 1-D Tensor with indices into the output Tensor. Values
 *     should be sorted and can be repeated.
 * @return Has same shape as data, except for dimension 0 which has equal to
 *         the number of segments.
 *
 * @doc {heading: 'Operations', subheading: 'Sparse'}
 */
function sparseSegmentSum_(data, indices, segmentIds) {
    const $data = convertToTensor(data, 'data', 'sparseSegmentSum');
    const $indices = convertToTensor(indices, 'indices', 'sparseSegmentSum');
    const $segmentIds = convertToTensor(segmentIds, 'segmentIds', 'sparseSegmentSum');
    if ($data.rank < 1) {
        throw new Error(`Data should be at least 1 dimensional but received scalar`);
    }
    if ($indices.rank !== 1) {
        throw new Error(`Indices should be Tensor1D but received shape
         ${$indices.shape}`);
    }
    if ($segmentIds.rank !== 1) {
        throw new Error(`Segment ids should be Tensor1D but received shape
         ${$segmentIds.shape}`);
    }
    const inputs = {
        data: $data,
        indices: $indices,
        segmentIds: $segmentIds
    };
    return ENGINE.runKernel(SparseSegmentSum, inputs);
}
const sparseSegmentSum = op({ sparseSegmentSum_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Creates ngrams from ragged string data.
 *
 * This op accepts a ragged tensor with 1 ragged dimension containing only
 * strings and outputs a ragged tensor with 1 ragged dimension containing ngrams
 * of that string, joined along the innermost axis.
 *
 * ```js
 * const result = tf.string.stringNGrams(
 *   ['a', 'b', 'c', 'd'], tf.tensor1d([0, 2, 4], 'int32'),
 *   '|', [1, 2], 'LP', 'RP', -1, false);
 * result['nGrams'].print(); // ['a', 'b', 'LP|a', 'a|b', 'b|RP',
 *                           //  'c', 'd', 'LP|c', 'c|d', 'd|RP']
 * result['nGramsSplits'].print(); // [0, 5, 10]
 * ```
 * @param data: The values tensor of the ragged string tensor to make ngrams out
 *     of. Must be a 1D string tensor.
 * @param dataSplits: The splits tensor of the ragged string tensor to make
 *     ngrams out of.
 * @param separator: The string to append between elements of the token. Use ""
 *     for no separator.
 * @param nGramWidths: The sizes of the ngrams to create.
 * @param leftPad: The string to use to pad the left side of the ngram sequence.
 *     Only used if pad_width !== 0.
 * @param rightPad: The string to use to pad the right side of the ngram
 *     sequence. Only used if pad_width !== 0.
 * @param padWidth: The number of padding elements to add to each side of each
 *     sequence. Note that padding will never be greater than `nGramWidths`-1
 *     regardless of this value. If `padWidth`=-1 , then add max(`nGramWidths)-1
 *     elements.
 * @param preserveShortSequences: If true, then ensure that at least one ngram
 *     is generated for each input sequence. In particular, if an input sequence
 *     is shorter than min(ngramWidth) + 2*padWidth, then generate a single
 *     ngram containing the entire sequence. If false, then no ngrams are
 *     generated for these short input sequences.
 * @return A map with the following properties:
 *     - nGrams: The values tensor of the output ngrams ragged tensor.
 *     - nGramsSplits: The splits tensor of the output ngrams ragged tensor.
 *
 * @doc {heading: 'Operations', subheading: 'String'}
 */
function stringNGrams_(data, dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
    const $data = convertToTensor(data, 'data', 'stringNGrams', 'string');
    if ($data.dtype !== 'string') {
        throw new Error('Data must be of datatype string');
    }
    if ($data.shape.length !== 1) {
        throw new Error(`Data must be a vector, saw: ${$data.shape}`);
    }
    const $dataSplits = convertToTensor(dataSplits, 'dataSplits', 'stringNGrams');
    if ($dataSplits.dtype !== 'int32') {
        throw new Error('Data splits must be of datatype int32');
    }
    const attrs = {
        separator,
        nGramWidths,
        leftPad,
        rightPad,
        padWidth,
        preserveShortSequences
    };
    const inputs = { data: $data, dataSplits: $dataSplits };
    const result = ENGINE.runKernel(StringNGrams, inputs, attrs);
    return { nGrams: result[0], nGramsSplits: result[1] };
}
const stringNGrams = op({ stringNGrams_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Split elements of `input` based on `delimiter` into a SparseTensor .
 *
 * Let N be the size of source (typically N will be the batch size). Split each
 * element of `input` based on `delimiter` and return a SparseTensor containing
 * the splitted tokens. Empty tokens are ignored if `skipEmpty` is set to True.
 *
 * `delimiter` can be empty, or a string of split characters. If `delimiter` is
 * an empty string, each element of `input` is split into individual
 * character strings. Otherwise every character of `delimiter` is a potential
 * split point.
 *
 * ```js
 * const result = tf.string.stringSplit(['hello world',  'a b c'], ' ');
 * result['indices'].print(); // [[0, 0], [0, 1], [1, 0], [1, 1], [1, 2]]
 * result['values'].print(); // ['hello', 'world', 'a', 'b', 'c']
 * result['shape'].print(); // [2, 3]
 * ```
 * @param input: 1-D. Strings to split.
 * @param delimiter: 0-D. Delimiter characters, or empty string.
 * @param skipEmpty: Optional. If true, skip the empty strings from the result.
 *     Defaults to true.
 * @return A map with the following properties:
 *     - indices: A dense matrix of int32 representing the indices of the sparse
 *       tensor.
 *     - values: A vector of strings corresponding to the splited values.
 *     - shape: a length-2 vector of int32 representing the shape of the sparse
 * tensor, where the first value is N and the second value is the maximum number
 * of tokens in a single input entry.
 *
 * @doc {heading: 'Operations', subheading: 'String'}
 */
function stringSplit_(input, delimiter, skipEmpty = true) {
    const $input = convertToTensor(input, 'input', 'stringSplit', 'string');
    const $delimiter = convertToTensor(delimiter, 'delimiter', 'stringSplit', 'string');
    if ($input.rank !== 1) {
        throw new Error(`Input should be Tensor1D but received shape ${$input.shape}`);
    }
    if ($delimiter.rank !== 0) {
        throw new Error(`Delimiter should be a scalar but received shape ${$delimiter.shape}`);
    }
    const attrs = { skipEmpty };
    const inputs = { input: $input, delimiter: $delimiter };
    const result = ENGINE.runKernel(StringSplit, inputs, attrs);
    return { indices: result[0], values: result[1], shape: result[2] };
}
const stringSplit = op({ stringSplit_ });

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * Converts each string in the input Tensor to its hash mod by a number of
 * buckets.
 *
 * The hash function is deterministic on the content of the string within the
 * process and will never change. However, it is not suitable for cryptography.
 * This function may be used when CPU time is scarce and inputs are trusted or
 * unimportant. There is a risk of adversaries constructing inputs that all hash
 * to the same bucket.
 *
 * ```js
 * const result = tf.string.stringToHashBucketFast(
 *   ['Hello', 'TensorFlow', '2.x'], 3);
 * result.print(); // [0, 2, 2]
 * ```
 * @param input: The strings to assign a hash bucket.
 * @param numBuckets: The number of buckets.
 * @return A Tensor of the same shape as the input tensor.
 *
 * @doc {heading: 'Operations', subheading: 'String'}
 */
function stringToHashBucketFast_(input, numBuckets) {
    const $input = convertToTensor(input, 'input', 'stringToHashBucketFast', 'string');
    const attrs = { numBuckets };
    if (numBuckets <= 0) {
        throw new Error(`Number of buckets must be at least 1`);
    }
    const inputs = { input: $input };
    return ENGINE.runKernel(StringToHashBucketFast, inputs, attrs);
}
const stringToHashBucketFast = op({ stringToHashBucketFast_ });

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const spectral = {
    fft,
    ifft,
    rfft,
    irfft
};
const signal = {
    hammingWindow,
    hannWindow,
    frame,
    stft,
};
const image = {
    flipLeftRight,
    resizeNearestNeighbor,
    resizeBilinear,
    rotateWithOffset,
    cropAndResize,
    nonMaxSuppression,
    nonMaxSuppressionAsync,
    nonMaxSuppressionWithScore,
    nonMaxSuppressionWithScoreAsync,
    nonMaxSuppressionPadded,
    nonMaxSuppressionPaddedAsync,
    threshold,
    transform
};
const linalg = {
    bandPart,
    gramSchmidt,
    qr
};
const losses = {
    absoluteDifference,
    computeWeightedLoss,
    cosineDistance,
    hingeLoss,
    huberLoss,
    logLoss,
    meanSquaredError,
    sigmoidCrossEntropy,
    softmaxCrossEntropy
};
const sparse = {
    sparseFillEmptyRows,
    sparseReshape,
    sparseSegmentMean,
    sparseSegmentSum
};
// tslint:disable-next-line:variable-name
const string = {
    stringNGrams,
    stringSplit,
    stringToHashBucketFast
};

export { maxPoolWithArgmax as $, reciprocal as A, neg as B, imag as C, log1p as D, log as E, floor as F, expm1 as G, exp as H, erf as I, cosh as J, cos as K, ceil as L, atanh as M, atan2 as N, atan as O, asinh as P, asin as Q, acosh as R, acos as S, abs as T, stack as U, concat as V, unstack as W, slice as X, dilation2d as Y, maxPool3d as Z, avgPool3d as _, minimum as a, irfft as a$, maxPool as a0, avgPool as a1, conv3d as a2, depthwiseConv2d as a3, conv2dTranspose as a4, depthwiseConv2d$1 as a5, conv2d$1 as a6, conv2d as a7, conv1d as a8, zerosLike as a9, transpose as aA, einsum as aB, matMul as aC, sparseToDense as aD, logSoftmax as aE, softmax as aF, localResponseNormalization as aG, batchNorm as aH, denseBincount as aI, bincount as aJ, cumsum as aK, argMin as aL, argMax as aM, any as aN, all as aO, min as aP, mean as aQ, max as aR, gatherND as aS, scatterND as aT, split as aU, tile as aV, squeeze as aW, stridedSlice as aX, reverse as aY, gather as aZ, sparse as a_, truncatedNormal as aa, range as ab, randomUniform as ac, onesLike as ad, ones as ae, oneHot as af, multinomial as ag, linspace as ah, fill as ai, setdiff1dAsync as aj, whereAsync as ak, image as al, unique as am, topk as an, tensor1d as ao, where as ap, logicalOr as aq, logicalNot as ar, logicalAnd as as, lessEqual as at, less as au, greaterEqual as av, greater as aw, notEqual as ax, equal as ay, matMul$1 as az, sub as b, rfft as b0, ifft as b1, fft as b2, string as b3, broadcastTo as b4, depthToSpace as b5, batchToSpaceND as b6, spaceToBatchND as b7, pad as b8, mirrorPad as b9, expandDims as ba, tensor2d as bb, concat2d as bc, fromPixels as bd, customGrad as be, RandGamma as bf, MPRandGauss as bg, variableGrads as bh, browser as bi, Reduction as bj, grad as bk, grads as bl, valueAndGrad as bm, valueAndGrads as bn, linalg as bo, losses as bp, spectral as bq, signal as br, eye as bs, logSumExp as bt, tensor3d as bu, norm as bv, enclosingPowerOfTwo as bw, cosineWindow as bx, div as c, divNoNan as d, mod as e, floorDiv as f, addN as g, add as h, isNaN$1 as i, prod as j, clipByValue as k, tanh as l, maximum as m, square as n, sqrt as o, pow as p, softplus as q, rsqrt as r, squaredDifference as s, tan as t, sinh as u, sign as v, sin as w, selu as x, round as y, real as z };
