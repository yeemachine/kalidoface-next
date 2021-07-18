import { b6 as browserHTTPRequest, e$ as concatenateArrayBuffers, b8 as decodeWeights, f9 as encodeWeights, b7 as getLoadHandlers, f1 as getModelArtifactsInfoForJSON, b9 as getSaveHandlers, fa as http, fb as isHTTPScheme, fc as loadWeights, fd as registerLoadRouter, fe as registerSaveRouter, ff as weightsLoaderFactory, fg as copyModel, fh as listModels, fi as moveModel, fj as removeModel, bg as op, bf as convertToTensor, a1 as assert, am as oneHot, an as cast, aA as transpose, aB as matMul, bi as ENGINE, bd as inferShape, aS as arraysEqual, fk as isTypedArray, cy as flatten, cA as isString, cB as encodeString, a6 as concat, j as add, aa as slice, h as mul, C as sigmoid, v as tanh, aF as batchNorm, fl as conv3DBackpropInput, dD as Diag, cs as parseAxisParam, aN as mean, c7 as expandShapeToKeepDim, w as square, b as sub, a9 as reshape, fm as convertToTensorArray, b2 as pad, bU as sizeFromShape, bs as buffer, aU as reverse, bc as assertNonNull, be as makeTensor, c5 as assertShapesMatch, aR as squeeze, aV as gather, fn as assertTypesMatch, a2 as scalar, g as div, p as pow, ba as Tensor, M as floor, ch as getTypedArrayFromDType, a4 as tensor, c4 as dispose, fo as variableGrads, a8 as tidy, ai as zerosLike, x as sqrt, a0 as abs, m as maximum, a3 as keep, b_ as nonMaxSuppressionV3Impl, c2 as nonMaxSuppressionV4Impl, c0 as nonMaxSuppressionV5Impl, bA as whereImpl } from '../common/zeros_like-371809d6.js';
export { cS as Abs, cT as Acos, cU as Acosh, cV as Add, bk as AddN, cW as All, cX as Any, cY as ArgMax, cZ as ArgMin, c_ as Asin, c$ as Asinh, d0 as Atan, d1 as Atan2, d2 as Atanh, d3 as AvgPool, bo as AvgPool3D, d6 as AvgPool3DGrad, d7 as AvgPoolGrad, d8 as BatchMatMul, dd as BatchToSpaceND, bp as Bincount, gk as BroadcastTo, dg as Cast, di as Ceil, dj as ClipByValue, cG as Complex, dk as ComplexAbs, dm as Concat, dn as Conv2D, dq as Conv2DBackpropFilter, dr as Conv2DBackpropInput, bq as Conv3D, dt as Conv3DBackpropFilterV2, du as Conv3DBackpropInputV2, dv as Cos, dw as Cosh, bW as CropAndResize, dx as Cumsum, cu as DataStorage, br as DenseBincount, dz as DepthToSpace, dA as DepthwiseConv2dNative, dB as DepthwiseConv2dNativeBackpropFilter, dC as DepthwiseConv2dNativeBackpropInput, dD as Diag, dE as Dilation2D, gm as Dilation2DBackpropFilter, gl as Dilation2DBackpropInput, fA as ENV, dG as Elu, dH as EluGrad, fz as Environment, dI as Equal, dJ as Erf, dK as Exp, dL as ExpandDims, dM as Expm1, dN as FFT, bt as Fill, bX as FlipLeftRight, dP as Floor, dQ as FloorDiv, bj as FromPixels, d9 as FusedBatchNorm, bL as FusedConv2D, bR as FusedDepthwiseConv2D, bE as GatherNd, dR as GatherV2, dS as Greater, dT as GreaterEqual, dU as IFFT, cF as Identity, dl as Imag, dV as IsFinite, dW as IsInf, dX as IsNan, ct as KernelBackend, e3 as LRN, e4 as LRNGrad, cH as LeakyRelu, dY as Less, dZ as LessEqual, bu as LinSpace, d_ as Log, d$ as Log1p, gn as LogSoftmax, e0 as LogicalAnd, e1 as LogicalNot, e2 as LogicalOr, e5 as Max, e7 as MaxPool, bv as MaxPool3D, e8 as MaxPool3DGrad, e9 as MaxPoolGrad, bw as MaxPoolWithArgmax, e6 as Maximum, ea as Mean, eb as Min, ec as Minimum, ed as MirrorPad, ee as Mod, bx as Multinomial, cJ as Multiply, ei as Neg, bZ as NonMaxSuppressionV3, c1 as NonMaxSuppressionV4, b$ as NonMaxSuppressionV5, de as NotEqual, fM as OP_SCOPE_SUFFIX, ej as OneHot, el as OnesLike, em as Pack, en as PadV2, go as Pool, eo as Pow, cI as Prelu, ep as Prod, by as Range, fu as Rank, df as Real, ef as RealDiv, eq as Reciprocal, er as Relu, es as Relu6, cK as Reshape, et as ResizeBilinear, eu as ResizeBilinearGrad, ev as ResizeNearestNeighbor, ew as ResizeNearestNeighborGrad, ex as Reverse, bY as RotateWithOffset, ey as Round, ez as Rsqrt, bC as ScatterNd, eB as Select, eC as Selu, eF as Sigmoid, eG as Sign, eH as Sin, eI as Sinh, da as Slice, eh as Softmax, eJ as Softplus, eK as SpaceToBatchND, bD as SparseToDense, eL as SplitV, eM as Sqrt, eN as Square, eO as SquaredDifference, eP as Step, eQ as StridedSlice, eg as Sub, cQ as Sum, eS as Tan, eT as Tanh, ba as Tensor, bz as TensorBuffer, eU as Tile, eV as TopK, cR as Transpose, eW as Unique, eX as Unpack, eY as UnsortedSegmentSum, ft as Variable, ek as ZerosLike, bV as _FusedMatMul, a0 as abs, $ as acos, _ as acosh, j as add, fT as addStrict, aK as all, aJ as any, aI as argMax, aH as argMin, Z as asin, Y as asinh, X as atan, W as atan2, V as atanh, ad as avgPool, gc as backend, aF as batchNorm, b0 as batchToSpaceND, a_ as broadcastTo, bs as buffer, an as cast, U as ceil, q as clipByValue, c as clone, T as complex, a6 as concat, ah as conv1d, ag as conv2d, af as conv2dTranspose, gj as copyRegisteredKernels, S as cos, R as cosh, aG as cumsum, bK as customGrad, bl as deprecationWarn, a$ as depthToSpace, ae as depthwiseConv2d, fs as device_util, ab as dilation2d, g2 as disableDeprecationWarnings, c4 as dispose, g3 as disposeVariables, g as div, d as divNoNan, fU as divStrict, fB as dot, Q as elu, g1 as enableDebugMode, g0 as enableProdMode, cv as engine, e as env, az as equal, fN as equalStrict, P as erf, O as exp, b4 as expandDims, N as expm1, aZ as fft, ga as findBackend, gb as findBackendFactory, M as floor, f as floorDiv, aV as gather, bb as getBackend, ge as getGradient, bh as getKernel, gf as getKernelsForBackend, fv as grad, fw as grads, ax as greater, aw as greaterEqual, fO as greaterEqualStrict, fP as greaterStrict, aY as ifft, J as imag, aW as irfft, fC as isFinite, fD as isInf, fE as isNaN, a3 as keep, l as leakyRelu, av as less, au as lessEqual, fQ as lessEqualStrict, fR as lessStrict, aE as localResponseNormalization, L as log, K as log1p, fF as logSigmoid, aC as logSoftmax, c6 as logSumExp, at as logicalAnd, as as logicalNot, ar as logicalOr, fG as logicalXor, aB as matMul, aO as max, ac as maxPool, m as maximum, fV as maximumStrict, aN as mean, g4 as memory, aM as min, a as minimum, fW as minimumStrict, b3 as mirrorPad, i as mod, fX as modStrict, h as mul, fY as mulStrict, I as neg, c3 as norm, ay as notEqual, fS as notEqualStrict, am as oneHot, al as ones, ak as onesLike, bg as op, b2 as pad, fH as pool, p as pow, fZ as powStrict, k as prelu, fI as print, n as prod, g5 as profile, g8 as ready, G as real, H as reciprocal, cE as registerBackend, gg as registerGradient, eZ as registerKernel, F as relu, o as relu6, g9 as removeBackend, a9 as reshape, aU as reverse, aX as rfft, E as round, r as rsqrt, a2 as scalar, fr as scatter_util, D as selu, fJ as separableConv2d, g7 as setBackend, gd as setPlatform, C as sigmoid, A as sign, B as sin, z as sinh, aa as slice, f3 as slice_util, aD as softmax, y as softplus, b1 as spaceToBatchND, aP as split, x as sqrt, w as square, s as squaredDifference, f_ as squaredDifferenceStrict, aR as squeeze, a5 as stack, fK as step, aT as stridedSlice, b as sub, f$ as subStrict, aL as sum, cP as sumOutType, u as tan, v as tanh, a4 as tensor, fq as tensor_util, a8 as tidy, aQ as tile, g6 as time, ap as topk, aA as transpose, ao as unique, gi as unregisterGradient, gh as unregisterKernel, fL as unsortedSegmentSum, a7 as unstack, cp as upcastType, fp as util, fx as valueAndGrad, fy as valueAndGrads, fo as variableGrads, aq as where, aj as zeros, ai as zerosLike } from '../common/zeros_like-371809d6.js';
import { R as RandGamma, M as MPRandGauss, w as whereAsync, g as randomUniform, f as conv2d, e as depthwiseConv2d, n as matMul$1, i as fill } from '../common/ops-c96d7cb7.js';
export { B as Reduction, a as addN, b as avgPool3d, q as bincount, A as browser, y as concat2d, d as conv3d, J as cosineWindow, p as denseBincount, I as enclosingPowerOfTwo, G as eye, i as fill, u as gatherND, j as image, C as linalg, l as linspace, D as losses, m as maxPool3d, c as maxPoolWithArgmax, h as multinomial, g as randomUniform, r as range, v as scatterND, s as setdiff1dAsync, F as signal, o as sparseToDense, E as spectral, k as tensor1d, x as tensor2d, H as tensor3d, t as truncatedNormal, w as whereAsync } from '../common/ops-c96d7cb7.js';
import { y as browserFiles } from '../common/backend_util-068d7069.js';
export { b as backend_util, z as gather_util } from '../common/backend_util-068d7069.js';
import '../common/_commonjsHelpers-8a10f9bf.js';

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
class PassthroughLoader {
    constructor(modelArtifacts) {
        this.modelArtifacts = modelArtifacts;
    }
    async load() {
        return this.modelArtifacts;
    }
}
class PassthroughSaver {
    constructor(saveHandler) {
        this.saveHandler = saveHandler;
    }
    async save(modelArtifacts) {
        return this.saveHandler(modelArtifacts);
    }
}
/**
 * Creates an IOHandler that loads model artifacts from memory.
 *
 * When used in conjunction with `tf.loadLayersModel`, an instance of
 * `tf.LayersModel` (Keras-style) can be constructed from the loaded artifacts.
 *
 * ```js
 * const model = await tf.loadLayersModel(tf.io.fromMemory(
 *     modelTopology, weightSpecs, weightData));
 * ```
 *
 * @param modelArtifacts a object containing model topology (i.e., parsed from
 *   the JSON format).
 * @param weightSpecs An array of `WeightsManifestEntry` objects describing the
 *   names, shapes, types, and quantization of the weight data.
 * @param weightData A single `ArrayBuffer` containing the weight data,
 *   concatenated in the order described by the weightSpecs.
 * @param trainingConfig Model training configuration. Optional.
 *
 * @returns A passthrough `IOHandler` that simply loads the provided data.
 */
function fromMemory(modelArtifacts, weightSpecs, weightData, trainingConfig) {
    if (arguments.length === 1) {
        const isModelArtifacts = modelArtifacts.modelTopology != null ||
            modelArtifacts.weightSpecs != null;
        if (isModelArtifacts) {
            return new PassthroughLoader(modelArtifacts);
        }
        else {
            // Legacy support: with only modelTopology.
            // TODO(cais): Remove this deprecated API.
            console.warn('Please call tf.io.fromMemory() with only one argument. ' +
                'The argument should be of type ModelArtifacts. ' +
                'The multi-argument signature of tf.io.fromMemory() has been ' +
                'deprecated and will be removed in a future release.');
            return new PassthroughLoader({ modelTopology: modelArtifacts });
        }
    }
    else {
        // Legacy support.
        // TODO(cais): Remove this deprecated API.
        console.warn('Please call tf.io.fromMemory() with only one argument. ' +
            'The argument should be of type ModelArtifacts. ' +
            'The multi-argument signature of tf.io.fromMemory() has been ' +
            'deprecated and will be removed in a future release.');
        return new PassthroughLoader({
            modelTopology: modelArtifacts,
            weightSpecs,
            weightData,
            trainingConfig
        });
    }
}
/**
 * Creates an IOHandler that passes saved model artifacts to a callback.
 *
 * ```js
 * function handleSave(artifacts) {
 *   // ... do something with the artifacts ...
 *   return {modelArtifactsInfo: {...}, ...};
 * }
 *
 * const saveResult = model.save(tf.io.withSaveHandler(handleSave));
 * ```
 *
 * @param saveHandler A function that accepts a `ModelArtifacts` and returns a
 *     `SaveResult`.
 */
function withSaveHandler(saveHandler) {
    return new PassthroughSaver(saveHandler);
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

var io = /*#__PURE__*/Object.freeze({
    __proto__: null,
    browserFiles: browserFiles,
    browserHTTPRequest: browserHTTPRequest,
    concatenateArrayBuffers: concatenateArrayBuffers,
    decodeWeights: decodeWeights,
    encodeWeights: encodeWeights,
    fromMemory: fromMemory,
    getLoadHandlers: getLoadHandlers,
    getModelArtifactsInfoForJSON: getModelArtifactsInfoForJSON,
    getSaveHandlers: getSaveHandlers,
    http: http,
    isHTTPScheme: isHTTPScheme,
    loadWeights: loadWeights,
    registerLoadRouter: registerLoadRouter,
    registerSaveRouter: registerSaveRouter,
    weightsLoaderFactory: weightsLoaderFactory,
    withSaveHandler: withSaveHandler,
    copyModel: copyModel,
    listModels: listModels,
    moveModel: moveModel,
    removeModel: removeModel
});

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
 * Computes the confusion matrix from true labels and predicted labels.
 *
 * ```js
 * const labels = tf.tensor1d([0, 1, 2, 1, 0], 'int32');
 * const predictions = tf.tensor1d([0, 2, 2, 1, 0], 'int32');
 * const numClasses = 3;
 * const out = tf.math.confusionMatrix(labels, predictions, numClasses);
 * out.print();
 * // Expected output matrix:
 * // [[2, 0, 0],
 * //  [0, 1, 1],
 * //  [0, 0, 1]]
 * ```
 *
 * @param labels The target labels, assumed to be 0-based integers
 *   for the classes. The shape is `[numExamples]`, where
 *   `numExamples` is the number of examples included.
 * @param predictions The predicted classes, assumed to be
 *   0-based integers for the classes. Must have the same shape as `labels`.
 * @param numClasses Number of all classes, as an integer.
 *   Its value must be larger than the largest element in `labels` and
 *   `predictions`.
 * @returns The confusion matrix as a int32-type 2D tensor. The value at
 *   row `r` and column `c` is the number of times examples of actual class
 *   `r` were predicted as class `c`.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
function confusionMatrix_(labels, predictions, numClasses) {
    const $labels = convertToTensor(labels, 'labels', 'confusionMatrix');
    const $predictions = convertToTensor(predictions, 'predictions', 'confusionMatrix');
    assert(numClasses == null || numClasses > 0 && Number.isInteger(numClasses), () => `If provided, numClasses must be a positive integer, ` +
        `but got ${numClasses}`);
    assert($labels.rank === 1, () => `Expected the rank of labels to be 1, but got ${$labels.rank}`);
    assert($predictions.rank === 1, () => `Expected the rank of predictions to be 1, ` +
        `but got ${$predictions.rank}`);
    assert($labels.shape[0] === $predictions.shape[0], () => `Mismatch in the number of examples: ` +
        `${$labels.shape[0]} vs. ${$predictions.shape[0]}. ` +
        `Labels and predictions should have the same number of elements.`);
    assert(numClasses > 0 && Number.isInteger(numClasses), () => `numClasses is required to be a positive integer, but got ` +
        `${numClasses}`);
    // TODO(cais): In the future, if oneHot supports tensors inputs for
    //   `numClasses`, `confusionMatrix` can make `numClasses` optional.
    const oneHotLabels = oneHot(cast($labels, 'int32'), numClasses);
    const oneHotPredictions = oneHot(cast($predictions, 'int32'), numClasses);
    const oneHotLabelsT = transpose(oneHotLabels);
    const product = matMul(oneHotLabelsT, oneHotPredictions);
    return cast(product, 'int32');
}
const confusionMatrix = op({ confusionMatrix_ });

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

var math = /*#__PURE__*/Object.freeze({
    __proto__: null,
    confusionMatrix: confusionMatrix
});

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
 * Serializable defines the serialization contract.
 *
 * TFJS requires serializable classes to return their className when asked
 * to avoid issues with minification.
 */
class Serializable {
    /**
     * Return the class name for this class to use in serialization contexts.
     *
     * Generally speaking this will be the same thing that constructor.name
     * would have returned.  However, the class name needs to be robust
     * against minification for serialization/deserialization to work properly.
     *
     * There's also places such as initializers.VarianceScaling, where
     * implementation details between different languages led to different
     * class hierarchies and a non-leaf node is used for serialization purposes.
     */
    getClassName() {
        return this.constructor
            .className;
    }
    /**
     * Creates an instance of T from a ConfigDict.
     *
     * This works for most descendants of serializable.  A few need to
     * provide special handling.
     * @param cls A Constructor for the class to instantiate.
     * @param config The Configuration for the object.
     */
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config);
    }
}
/**
 * Maps string keys to class constructors.
 *
 * Used during (de)serialization from the cross-language JSON format, which
 * requires the class name in the serialization format matches the class
 * names as used in Python, should it exist.
 */
class SerializationMap {
    constructor() {
        this.classNameMap = {};
    }
    /**
     * Returns the singleton instance of the map.
     */
    static getMap() {
        if (SerializationMap.instance == null) {
            SerializationMap.instance = new SerializationMap();
        }
        return SerializationMap.instance;
    }
    /**
     * Registers the class as serializable.
     */
    static register(cls) {
        SerializationMap.getMap().classNameMap[cls.className] =
            [cls, cls.fromConfig];
    }
}
/**
 * Register a class with the serialization map of TensorFlow.js.
 *
 * This is often used for registering custom Layers, so they can be
 * serialized and deserialized.
 *
 * Example:
 *
 * ```js
 * class MyCustomLayer extends tf.layers.Layer {
 *   static className = 'MyCustomLayer';
 *
 *   constructor(config) {
 *     super(config);
 *   }
 * }
 * tf.serialization.registerClass(MyCustomLayer);
 * ```
 *
 * @param cls The class to be registered. It must have a public static member
 *   called `className` defined and the value must be a non-empty string.
 *
 * @doc {heading: 'Models', subheading: 'Serialization', ignoreCI: true}
 */
function registerClass(cls) {
    assert(cls.className != null, () => `Class being registered does not have the static className ` +
        `property defined.`);
    assert(typeof cls.className === 'string', () => `className is required to be a string, but got type ` +
        typeof cls.className);
    assert(cls.className.length > 0, () => `Class being registered has an empty-string as its className, ` +
        `which is disallowed.`);
    SerializationMap.register(cls);
}

var serialization = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Serializable: Serializable,
    SerializationMap: SerializationMap,
    registerClass: registerClass
});

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const TEST_EPSILON_FLOAT32 = 1e-3;
const TEST_EPSILON_FLOAT16 = 1e-1;
function expectArraysClose(actual, expected, epsilon) {
    if (epsilon == null) {
        epsilon = testEpsilon();
    }
    return expectArraysPredicate(actual, expected, (a, b) => areClose(a, b, epsilon));
}
function testEpsilon() {
    return ENGINE.backend.floatPrecision() === 32 ? TEST_EPSILON_FLOAT32 :
        TEST_EPSILON_FLOAT16;
}
function expectArraysPredicate(actual, expected, predicate) {
    let checkClassType = true;
    if (isTypedArray(actual) || isTypedArray(expected)) {
        checkClassType = false;
    }
    if (isTypedArray(actual) && isTypedArray(expected)) {
        checkClassType = true;
    }
    if (checkClassType) {
        const aType = actual.constructor.name;
        const bType = expected.constructor.name;
        if (aType !== bType) {
            throw new Error(`Arrays are of different type. Actual: ${aType}. ` +
                `Expected: ${bType}`);
        }
    }
    if (Array.isArray(actual) && Array.isArray(expected)) {
        const actualShape = inferShape(actual);
        const expectedShape = inferShape(expected);
        if (!arraysEqual(actualShape, expectedShape)) {
            throw new Error(`Arrays have different shapes. ` +
                `Actual: [${actualShape}]. Expected: [${expectedShape}]`);
        }
    }
    const actualFlat = isTypedArray(actual) ? actual : flatten(actual);
    const expectedFlat = isTypedArray(expected) ?
        expected :
        flatten(expected);
    if (actualFlat.length !== expectedFlat.length) {
        throw new Error(`Arrays have different lengths actual: ${actualFlat.length} vs ` +
            `expected: ${expectedFlat.length}.\n` +
            `Actual:   ${actualFlat}.\n` +
            `Expected: ${expectedFlat}.`);
    }
    for (let i = 0; i < expectedFlat.length; ++i) {
        const a = actualFlat[i];
        const e = expectedFlat[i];
        if (!predicate(a, e)) {
            throw new Error(`Arrays differ: actual[${i}] = ${a}, expected[${i}] = ${e}.\n` +
                `Actual:   ${actualFlat}.\n` +
                `Expected: ${expectedFlat}.`);
        }
    }
}
function expectPromiseToFail(fn, done) {
    fn().then(() => done.fail(), () => done());
}
function expectArraysEqual(actual, expected) {
    const exp = typeof expected === 'string' || typeof expected === 'number' ||
        typeof expected === 'boolean' ?
        [expected] :
        expected;
    if (isString(actual) || isString(actual[0]) ||
        isString(expected) || isString(expected[0])) {
        // tslint:disable-next-line: triple-equals
        return expectArraysPredicate(actual, exp, (a, b) => a == b);
    }
    return expectArraysPredicate(actual, expected, (a, b) => areClose(a, b, 0));
}
function expectNumbersClose(a, e, epsilon) {
    if (epsilon == null) {
        epsilon = testEpsilon();
    }
    if (!areClose(a, e, epsilon)) {
        throw new Error(`Numbers differ: actual === ${a}, expected === ${e}`);
    }
}
function areClose(a, e, epsilon) {
    if (!isFinite(a) && !isFinite(e)) {
        return true;
    }
    if (isNaN(a) || isNaN(e) || Math.abs(a - e) > epsilon) {
        return false;
    }
    return true;
}
function expectValuesInRange(actual, low, high) {
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] < low || actual[i] > high) {
            throw new Error(`Value out of range:${actual[i]} low: ${low}, high: ${high}`);
        }
    }
}
function expectArrayBuffersEqual(actual, expected) {
    // Safari & Jasmine don't like comparing ArrayBuffers directly. Wrapping in
    // a Float32Array solves this issue.
    expect(new Float32Array(actual)).toEqual(new Float32Array(expected));
}
/** Encodes strings into utf-8 bytes. */
function encodeStrings(a) {
    for (let i = 0; i < a.length; i++) {
        const val = a[i];
        if (Array.isArray(val)) {
            encodeStrings(val);
        }
        else {
            a[i] = encodeString(val);
        }
    }
    return a;
}

var test_util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TEST_EPSILON_FLOAT16: TEST_EPSILON_FLOAT16,
    expectArraysClose: expectArraysClose,
    testEpsilon: testEpsilon,
    expectPromiseToFail: expectPromiseToFail,
    expectArraysEqual: expectArraysEqual,
    expectNumbersClose: expectNumbersClose,
    expectValuesInRange: expectValuesInRange,
    expectArrayBuffersEqual: expectArrayBuffersEqual,
    encodeStrings: encodeStrings
});

/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
const version = '2.8.6';

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
 * Computes the next state and output of a BasicLSTMCell.
 *
 * Returns `[newC, newH]`.
 *
 * Derived from tf.contrib.rnn.BasicLSTMCell.
 *
 * @param forgetBias Forget bias for the cell.
 * @param lstmKernel The weights for the cell.
 * @param lstmBias The bias for the cell.
 * @param data The input to the cell.
 * @param c Previous cell state.
 * @param h Previous cell output.
 *
 * @doc {heading: 'Operations', subheading: 'RNN'}
 */
function basicLSTMCell_(forgetBias, lstmKernel, lstmBias, data, c, h) {
    const $forgetBias = convertToTensor(forgetBias, 'forgetBias', 'basicLSTMCell');
    const $lstmKernel = convertToTensor(lstmKernel, 'lstmKernel', 'basicLSTMCell');
    const $lstmBias = convertToTensor(lstmBias, 'lstmBias', 'basicLSTMCell');
    const $data = convertToTensor(data, 'data', 'basicLSTMCell');
    const $c = convertToTensor(c, 'c', 'basicLSTMCell');
    const $h = convertToTensor(h, 'h', 'basicLSTMCell');
    const combined = concat([$data, $h], 1);
    const weighted = matMul(combined, $lstmKernel);
    const res = add(weighted, $lstmBias);
    // i = input_gate, j = new_input, f = forget_gate, o = output_gate
    const batchSize = res.shape[0];
    const sliceCols = res.shape[1] / 4;
    const sliceSize = [batchSize, sliceCols];
    const i = slice(res, [0, 0], sliceSize);
    const j = slice(res, [0, sliceCols], sliceSize);
    const f = slice(res, [0, sliceCols * 2], sliceSize);
    const o = slice(res, [0, sliceCols * 3], sliceSize);
    const newC = add(mul(sigmoid(i), tanh(j)), mul($c, sigmoid(add($forgetBias, f))));
    const newH = mul(tanh(newC), sigmoid(o));
    return [newC, newH];
}
const basicLSTMCell = op({ basicLSTMCell_ });

/**
 * Batch normalization, strictly for 2D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
function batchNorm2d_(x, mean, variance, offset, scale, varianceEpsilon) {
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
    assert($x.rank === 2, () => `Error in batchNorm2D: x must be rank 2 but got rank ` +
        `${$x.rank}.`);
    assert($mean.rank === 2 || $mean.rank === 1, () => `Error in batchNorm2D: mean must be rank 2 or rank 1 but ` +
        `got rank ${$mean.rank}.`);
    assert($variance.rank === 2 || $variance.rank === 1, () => `Error in batchNorm2D: variance must be rank 2 or rank 1 ` +
        `but got rank ${$variance.rank}.`);
    if ($scale != null) {
        assert($scale.rank === 2 || $scale.rank === 1, () => `Error in batchNorm2D: scale must be rank 2 or rank 1 ` +
            `but got rank ${$scale.rank}.`);
    }
    if ($offset != null) {
        assert($offset.rank === 2 || $offset.rank === 1, () => `Error in batchNorm2D: offset must be rank 2 or rank 1 ` +
            `but got rank ${$offset.rank}.`);
    }
    return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
const batchNorm2d = op({ batchNorm2d_ });

/**
 * Batch normalization, strictly for 3D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
function batchNorm3d_(x, mean, variance, offset, scale, varianceEpsilon) {
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
    assert($x.rank === 3, () => `Error in batchNorm3D: x must be rank 3 but got rank ` +
        `${$x.rank}.`);
    assert($mean.rank === 3 || $mean.rank === 1, () => `Error in batchNorm3D: mean must be rank 3 or rank 1 but ` +
        `got rank ${$mean.rank}.`);
    assert($variance.rank === 3 || $variance.rank === 1, () => `Error in batchNorm3D: variance must be rank 3 or rank 1 ` +
        `but got rank ${$variance.rank}.`);
    if ($scale != null) {
        assert($scale.rank === 3 || $scale.rank === 1, () => `Error in batchNorm3D: scale must be rank 3 or rank 1 ` +
            `but got rank ${$scale.rank}.`);
    }
    if ($offset != null) {
        assert($offset.rank === 3 || $offset.rank === 1, () => `Error in batchNorm3D: offset must be rank 3 or rank 1 ` +
            `but got rank ${$offset.rank}.`);
    }
    return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
const batchNorm3d = op({ batchNorm3d_ });

/**
 * Batch normalization, strictly for 4D. For the more relaxed version, see
 * `tf.batchNorm`.
 *
 * @param x The input Tensor.
 * @param mean A mean Tensor.
 * @param variance A variance Tensor.
 * @param offset An offset Tensor.
 * @param scale A scale Tensor.
 * @param varianceEpsilon A small float number to avoid dividing by 0.
 */
function batchNorm4d_(x, mean, variance, offset, scale, varianceEpsilon) {
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
    assert($x.rank === 4, () => `Error in batchNorm4D: x must be rank 4 but got rank ` +
        `${$x.rank}.`);
    assert($mean.rank === 4 || $mean.rank === 1, () => `Error in batchNorm4D: mean must be rank 4 or rank 1 but ` +
        `got rank ${$mean.rank}.`);
    assert($variance.rank === 4 || $variance.rank === 1, () => `Error in batchNorm4D: variance must be rank 4 or rank 1 ` +
        `but got rank ${$variance.rank}.`);
    if ($scale != null) {
        assert($scale.rank === 4 || $scale.rank === 1, () => `Error in batchNorm4D: scale must be rank 4 or rank 1 ` +
            `but got rank ${$scale.rank}.`);
    }
    if ($offset != null) {
        assert($offset.rank === 4 || $offset.rank === 1, () => `Error in batchNorm4D: offset must be rank 4 or rank 1 ` +
            `but got rank ${$offset.rank}.`);
    }
    return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
const batchNorm4d = op({ batchNorm4d_ });

/**
 * Concatenates a list of`tf.Tensor1D`s along an axis. See `concat` for details.
 *
 * For example, if:
 * A: shape(3) = |r1, g1, b1|
 * B: shape(2) = |r2, g2|
 * C = tf.concat1d([A, B]) == |r1, g1, b1, r2, g2|
 *
 * @param tensors A list of`tf.Tensor`s to concatenate.
 * @return The concatenated array.
 */
function concat1d_(tensors) {
    return concat(tensors, 0 /* axis */);
}
const concat1d = op({ concat1d_ });

/**
 * Concatenates a list of `tf.Tensor3D`s along an axis.
 * See `concat` for details.
 *
 * For example, if:
 * A: shape(2, 1, 3) = | r1, g1, b1 |
 *                     | r2, g2, b2 |
 *
 * B: shape(2, 1, 3) = | r3, g3, b3 |
 *                     | r4, g4, b4 |
 *
 * C = tf.concat3d([A, B], axis)
 *
 * if axis = 0:
 * C: shape(4, 1, 3) = | r1, g1, b1 |
 *                     | r2, g2, b2 |
 *                     | r3, g3, b3 |
 *                     | r4, g4, b4 |
 *
 * if axis = 1:
 * C: shape(2, 2, 3) = | r1, g1, b1, r3, g3, b3 |
 *                     | r2, g2, b2, r4, g4, b4 |
 *
 * if axis = 2:
 * C = shape(2, 1, 6) = | r1, g1, b1, r3, g3, b3 |
 *                      | r2, g2, b2, r4, g4, b4 |
 *
 * @param tensors A list of`tf.Tensor`s to concatenate.
 * @param axis The axis to concate along.
 * @return The concatenated array.
 */
function concat3d_(tensors, axis) {
    return concat(tensors, axis);
}
const concat3d = op({ concat3d_ });

/**
 * Concatenates a list of `tf.Tensor4D`s along an axis.
 * See `concat` for details.
 *
 * @param tensors A list of `tf.Tensor`s to concatenate.
 * @param axis The axis to concate along.
 * @return The concatenated array.
 */
function concat4d_(tensors, axis) {
    return concat(tensors, axis);
}
const concat4d = op({ concat4d_ });

/**
 * Computes the transposed 3D convolution of a volume, also known as a
 * deconvolution.
 *
 * @param x The input image, of rank 5 or rank 4, of shape
 *   `[batch, depth, height, width, inDepth]`. If rank 4, batch of 1 is assumed.
 * @param filter The filter, rank 4, of shape
 *     `[depth, filterHeight, filterWidth, outDepth, inDepth]`.
 *     `inDepth` must match `inDepth` in `x`.
 * @param outputShape Output shape, of rank 5 or rank 4:
 *     `[batch, depth, height, width, outDepth]`. If rank 3, batch of 1 is
 *    assumed.
 * @param strides The strides of the original convolution:
 *     `[strideDepth, strideHeight, strideWidth]`.
 * @param pad  The type of padding algorithm used in the non-transpose version
 *    of the op.
 *
 * @doc {heading: 'Operations', subheading: 'Convolution'}
 */
function conv3dTranspose_(x, filter, outputShape, strides, pad) {
    const $x = convertToTensor(x, 'x', 'conv3dTranspose');
    const $filter = convertToTensor(filter, 'filter', 'conv3dTranspose');
    return conv3DBackpropInput(outputShape, $x, $filter, strides, pad);
}
const conv3dTranspose = op({ conv3dTranspose_ });

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
 * Returns a diagonal tensor with a given diagonal values.
 *
 * Given a diagonal, this operation returns a tensor with the diagonal and
 * everything else padded with zeros.
 *
 * Assume the input has dimensions `[D1,..., Dk]`, then the output is a tensor
 * of rank 2k with dimensions `[D1,..., Dk, D1,..., Dk]`
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4]);
 *
 * tf.diag(x).print()
 * ```
 * ```js
 * const x = tf.tensor1d([1, 2, 3, 4, 5, 6, 6, 8], [4, 2])
 *
 * tf.diag(x).print()
 * ```
 * @param x The input tensor.
 */
function diag_(x) {
    const $x = convertToTensor(x, 'x', 'diag');
    const inputs = { x: $x };
    return ENGINE.runKernel(Diag, inputs);
}
const diag = op({ diag_ });

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
 * Calculates the mean and variance of `x`. The mean and variance are
 * calculated by aggregating the contents of `x` across `axes`. If `x` is
 * 1-D and `axes = [0]` this is just the mean and variance of a vector.
 *
 * @param x The input tensor.
 * @param axis The dimension(s) along with to compute mean and
 *     variance. By default it reduces all dimensions.
 * @param keepDims If true, the moments have the same dimensionality as the
 *     input.
 * @return An object with two keys: `mean` and `variance`.
 *
 * @doc {heading: 'Operations', subheading: 'Normalization'}
 */
function moments_(x, axis = null, keepDims = false) {
    x = convertToTensor(x, 'x', 'moments');
    const axes = parseAxisParam(axis, x.shape);
    const xMean = mean(x, axes, keepDims);
    let keepDimsShape = xMean.shape;
    if (!keepDims) {
        keepDimsShape = expandShapeToKeepDim(xMean.shape, axes);
    }
    const devSquared = square(sub(cast(x, 'float32'), reshape(xMean, keepDimsShape)));
    const variance = mean(devSquared, axes, keepDims);
    return { mean: xMean, variance };
}
const moments = op({ moments_ });

/**
 * Computes the next states and outputs of a stack of LSTMCells.
 *
 * Each cell output is used as input to the next cell.
 *
 * Returns `[cellState, cellOutput]`.
 *
 * Derived from tf.contrib.rn.MultiRNNCell.
 *
 * @param lstmCells Array of LSTMCell functions.
 * @param data The input to the cell.
 * @param c Array of previous cell states.
 * @param h Array of previous cell outputs.
 *
 * @doc {heading: 'Operations', subheading: 'RNN'}
 */
function multiRNNCell_(lstmCells, data, c, h) {
    const $data = convertToTensor(data, 'data', 'multiRNNCell');
    const $c = convertToTensorArray(c, 'c', 'multiRNNCell');
    const $h = convertToTensorArray(h, 'h', 'multiRNNCell');
    let input = $data;
    const newStates = [];
    for (let i = 0; i < lstmCells.length; i++) {
        const output = lstmCells[i](input, $c[i], $h[i]);
        newStates.push(output[0]);
        newStates.push(output[1]);
        input = output[1];
    }
    const newC = [];
    const newH = [];
    for (let i = 0; i < newStates.length; i += 2) {
        newC.push(newStates[i]);
        newH.push(newStates[i + 1]);
    }
    return [newC, newH];
}
const multiRNNCell = op({ multiRNNCell_ });

/**
 * Computes the outer product of two vectors, `v1` and `v2`.
 *
 * ```js
 * const a = tf.tensor1d([1, 2, 3]);
 * const b = tf.tensor1d([3, 4, 5]);
 *
 * tf.outerProduct(a, b).print();
 * ```
 * @param v1 The first vector in the outer product operation.
 * @param v2 The second vector in the outer product operation.
 *
 * @doc {heading: 'Operations', subheading: 'Matrices'}
 */
function outerProduct_(v1, v2) {
    const $v1 = convertToTensor(v1, 'v1', 'outerProduct');
    const $v2 = convertToTensor(v2, 'v2', 'outerProduct');
    assert($v1.rank === 1 && $v2.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ` +
        `${$v1.rank} and ${$v2.rank}.`);
    const v12D = reshape($v1, [-1, 1]);
    const v22D = reshape($v2, [1, -1]);
    return matMul(v12D, v22D);
}
const outerProduct = op({ outerProduct_ });

/**
 * Pads a `tf.Tensor1D` with a given value and paddings. See `pad` for details.
 */
function pad1d_(x, paddings, constantValue = 0) {
    assert(paddings.length === 2, () => 'Invalid number of paddings. Must be length of 2.');
    return pad(x, [paddings], constantValue);
}
const pad1d = op({ pad1d_ });

/**
 * Pads a `tf.Tensor2D` with a given value and paddings. See `pad` for details.
 */
function pad2d_(x, paddings, constantValue = 0) {
    assert(paddings.length === 2 && paddings[0].length === 2 &&
        paddings[1].length === 2, () => 'Invalid number of paddings. Must be length of 2 each.');
    return pad(x, paddings, constantValue);
}
const pad2d = op({ pad2d_ });

/**
 * Pads a `tf.Tensor3D` with a given value and paddings. See `pad` for details.
 */
function pad3d_(x, paddings, constantValue = 0) {
    assert(paddings.length === 3 && paddings[0].length === 2 &&
        paddings[1].length === 2 && paddings[2].length === 2, () => 'Invalid number of paddings. Must be length of 2 each.');
    return pad(x, paddings, constantValue);
}
const pad3d = op({ pad3d_ });

/**
 * Pads a `tf.Tensor4D` with a given value and paddings. See `pad` for details.
 */
function pad4d_(x, paddings, constantValue = 0) {
    assert(paddings.length === 4 && paddings[0].length === 2 &&
        paddings[1].length === 2 && paddings[2].length === 2 &&
        paddings[3].length === 2, () => 'Invalid number of paddings. Must be length of 2 each.');
    return pad(x, paddings, constantValue);
}
const pad4d = op({ pad4d_ });

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
 * Creates a `tf.Tensor` with values sampled from a random number generator
 * function defined by the user.
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param randFunction A random number generator function which is called
 * for each element in the output tensor.
 * @param dtype The data type of the output tensor. Defaults to 'float32'.
 */
function rand_(shape, randFunction, dtype) {
    const size = sizeFromShape(shape);
    let values = null;
    if (dtype == null || dtype === 'float32') {
        values = new Float32Array(size);
    }
    else if (dtype === 'int32') {
        values = new Int32Array(size);
    }
    else if (dtype === 'bool') {
        values = new Uint8Array(size);
    }
    else {
        throw new Error(`Unknown data type ${dtype}`);
    }
    for (let i = 0; i < size; i++) {
        values[i] = randFunction();
    }
    return ENGINE.makeTensor(values, shape, dtype);
}
const rand = op({ rand_ });

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
 * Creates a `tf.Tensor` with values sampled from a gamma distribution.
 *
 * ```js
 * tf.randomGamma([2, 2], 1).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param alpha The shape parameter of the gamma distribution.
 * @param beta The inverse scale parameter of the gamma distribution. Defaults
 *     to 1.
 * @param dtype The data type of the output. Defaults to float32.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
function randomGamma_(shape, alpha, beta = 1, dtype = 'float32', seed) {
    if (beta == null) {
        beta = 1;
    }
    if (dtype == null) {
        dtype = 'float32';
    }
    if (dtype !== 'float32' && dtype !== 'int32') {
        throw new Error(`Unsupported data type ${dtype}`);
    }
    const rgamma = new RandGamma(alpha, beta, dtype, seed);
    const res = buffer(shape, dtype);
    for (let i = 0; i < res.values.length; i++) {
        res.values[i] = rgamma.nextValue();
    }
    return res.toTensor();
}
const randomGamma = op({ randomGamma_ });

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
 * Creates a `tf.Tensor` with values sampled from a normal distribution.
 *
 * ```js
 * tf.randomNormal([2, 2]).print();
 * ```
 *
 * @param shape An array of integers defining the output tensor shape.
 * @param mean The mean of the normal distribution.
 * @param stdDev The standard deviation of the normal distribution.
 * @param dtype The data type of the output.
 * @param seed The seed for the random number generator.
 *
 * @doc {heading: 'Tensors', subheading: 'Random'}
 */
function randomNormal_(shape, mean = 0, stdDev = 1, dtype, seed) {
    if (dtype != null && dtype === 'bool') {
        throw new Error(`Unsupported data type ${dtype}`);
    }
    const randGauss = new MPRandGauss(mean, stdDev, dtype, false /* truncated */, seed);
    const res = buffer(shape, dtype);
    for (let i = 0; i < res.values.length; i++) {
        res.values[i] = randGauss.nextValue();
    }
    return res.toTensor();
}
const randomNormal = op({ randomNormal_ });

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
 * Reverses a `tf.Tensor1D`.
 *
 * @param x The input tensor.
 */
function reverse1d_(x) {
    const $x = convertToTensor(x, 'x', 'reverse');
    assert($x.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${$x.rank}.`);
    return reverse($x, 0);
}
const reverse1d = op({ reverse1d_ });

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
 * Reverses a `tf.Tensor2D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
function reverse2d_(x, axis) {
    const $x = convertToTensor(x, 'x', 'reverse');
    assert($x.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${$x.rank}.`);
    return reverse($x, axis);
}
const reverse2d = op({ reverse2d_ });

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
 * Reverses a `tf.Tensor3D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
function reverse3d_(x, axis) {
    const $x = convertToTensor(x, 'x', 'reverse');
    assert($x.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${$x.rank}.`);
    return reverse($x, axis);
}
const reverse3d = op({ reverse3d_ });

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
 * Reverses a `tf.Tensor4D` along a specified axis.
 *
 * @param x The input tensor.
 * @param axis The set of dimensions to reverse. Must be in the
 *     range [-rank(x), rank(x)). Defaults to all axes.
 */
function reverse4d_(x, axis) {
    const $x = convertToTensor(x, 'x', 'reverse');
    assert($x.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${$x.rank}.`);
    return reverse($x, axis);
}
const reverse4d = op({ reverse4d_ });

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
 * Extracts a 1D slice from 1D array starting at coordinates `begin` and is
 * of length `size`. See `slice` for details.
 */
function slice1d_(x, begin, size) {
    const $x = convertToTensor(x, 'x', 'slice1d');
    assert($x.rank === 1, () => `slice1d expects a rank-1 tensor, but got a rank-${$x.rank} tensor`);
    return slice($x, [begin], [size]);
}
const slice1d = op({ slice1d_ });

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
 * Extracts a 2D slice from a 2D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
function slice2d_(x, begin, size) {
    const $x = convertToTensor(x, 'x', 'slice2d');
    assert($x.rank === 2, () => `slice2d expects a rank-2 tensor, but got a rank-${$x.rank} tensor`);
    return slice($x, begin, size);
}
const slice2d = op({ slice2d_ });

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
 * Extracts a 3D slice from a 3D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
function slice3d_(x, begin, size) {
    const $x = convertToTensor(x, 'x', 'slice3d');
    assert($x.rank === 3, () => `slice3d expects a rank-3 tensor, but got a rank-${$x.rank} tensor`);
    return slice($x, begin, size);
}
const slice3d = op({ slice3d_ });

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
 * Extracts a 4D slice from a 4D array starting at coordinates `begin` and
 * is of size `size`. See `slice` for details.
 */
function slice4d_(x, begin, size) {
    const $x = convertToTensor(x, 'x', 'slice4d');
    assert($x.rank === 4, () => `slice4d expects a rank-4 tensor, but got a rank-${$x.rank} tensor`);
    return slice($x, begin, size);
}
const slice4d = op({ slice4d_ });

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
 * Creates rank-4 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor4d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor4d(values, shape, dtype) {
    assertNonNull(values);
    if (shape != null && shape.length !== 4) {
        throw new Error('tensor4d() requires shape to have four numbers');
    }
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 4 && inferredShape.length !== 1) {
        throw new Error('tensor4d() requires values to be number[][][][] or flat/TypedArray');
    }
    if (inferredShape.length === 1 && shape == null) {
        throw new Error('tensor4d() requires shape to be provided when `values` ' +
            'are a flat array');
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
 * Creates rank-5 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor5d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor5d([[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor5d(values, shape, dtype) {
    assertNonNull(values);
    if (shape != null && shape.length !== 5) {
        throw new Error('tensor5d() requires shape to have five numbers');
    }
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 5 && inferredShape.length !== 1) {
        throw new Error('tensor5d() requires values to be ' +
            'number[][][][][] or flat/TypedArray');
    }
    if (inferredShape.length === 1 && shape == null) {
        throw new Error('tensor5d() requires shape to be provided when `values` ' +
            'are a flat array');
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
 * Creates rank-6 `tf.Tensor` with the provided values, shape and dtype.
 *
 * The same functionality can be achieved with `tf.tensor`, but in general
 * we recommend using `tf.tensor6d` as it makes the code more readable.
 *
 *  ```js
 * // Pass a nested array.
 * tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]).print();
 * ```
 * ```js
 * // Pass a flat array and specify a shape.
 * tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]).print();
 * ```
 *
 * @param values The values of the tensor. Can be nested array of numbers,
 *     or a flat array, or a `TypedArray`.
 * @param shape The shape of the tensor. Optional. If not provided,
 *   it is inferred from `values`.
 * @param dtype The data type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function tensor6d(values, shape, dtype) {
    assertNonNull(values);
    if (shape != null && shape.length !== 6) {
        throw new Error('tensor6d() requires shape to have six numbers');
    }
    const inferredShape = inferShape(values, dtype);
    if (inferredShape.length !== 6 && inferredShape.length !== 1) {
        throw new Error('tensor6d() requires values to be number[][][][][][] or ' +
            'flat/TypedArray');
    }
    if (inferredShape.length === 1 && shape == null) {
        throw new Error('tensor6d() requires shape to be provided when `values` ' +
            'are a flat array');
    }
    shape = shape ||
        inferredShape;
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
 * Creates a new variable with the provided initial value.
 * ```js
 * const x = tf.variable(tf.tensor([1, 2, 3]));
 * x.assign(tf.tensor([4, 5, 6]));
 *
 * x.print();
 * ```
 *
 * @param initialValue Initial value for the tensor.
 * @param trainable If true, optimizers are allowed to update it.
 * @param name Name of the variable. Defaults to a unique id.
 * @param dtype If set, initialValue will be converted to the given type.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
function variable(initialValue, trainable = true, name, dtype) {
    return ENGINE.makeVariable(initialValue, trainable, name, dtype);
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
 * Apply boolean mask to tensor.
 *
 * ```js
 * const tensor = tf.tensor2d([1, 2, 3, 4, 5, 6], [3, 2]);
 * const mask = tf.tensor1d([1, 0, 1], 'bool');
 * const result = await tf.booleanMaskAsync(tensor, mask);
 * result.print();
 * ```
 *
 * @param tensor N-D tensor.
 * @param mask K-D boolean tensor, K <= N and K must be known statically.
 * @param axis A 0-D int Tensor representing the axis in tensor to mask from.
 *     By default, axis is 0 which will mask from the first dimension.
 *     Otherwise K + axis <= N.
 *
 * @doc {heading: 'Tensors', subheading: 'Slicing and Joining'}
 */
async function booleanMaskAsync_(tensor, mask, axis) {
    const $tensor = convertToTensor(tensor, 'tensor', 'boolMask');
    const $mask = convertToTensor(mask, 'mask', 'boolMask', 'bool');
    const axisFrom = axis == null ? 0 : axis;
    const maskDim = $mask.rank;
    const tensorShape = $tensor.shape;
    assert(maskDim > 0, () => 'mask cannot be scalar');
    assertShapesMatch(tensorShape.slice(axisFrom, axisFrom + maskDim), $mask.shape, `mask's shape must match the first K dimensions of tensor's shape,`);
    let leadingSize = 1;
    for (let i = axisFrom; i < axisFrom + maskDim; i++) {
        leadingSize *= tensorShape[i];
    }
    const targetTensorShape = tensorShape.slice(0, axisFrom)
        .concat([leadingSize], tensorShape.slice(axisFrom + maskDim));
    const reshapedTensor = reshape($tensor, targetTensorShape);
    const reshapedMask = reshape($mask, [-1]);
    const positivePositions = await whereAsync(reshapedMask);
    const indices = squeeze(positivePositions, [1]);
    const res = gather(reshapedTensor, indices, axisFrom);
    // Ensure no memory leak.
    if (tensor !== $tensor) {
        $tensor.dispose();
    }
    if (mask !== $mask) {
        $mask.dispose();
    }
    indices.dispose();
    reshapedTensor.dispose();
    reshapedMask.dispose();
    positivePositions.dispose();
    return res;
}
const booleanMaskAsync = booleanMaskAsync_;

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
 * Compute the moving average of a variable.
 *
 * Without zeroDebias, the moving average operation is defined by:
 *   `v += delta`
 * where
 *   `delta = (1 - decay) * (x - v)`
 *
 * With zeroDebias (default), the `delta` term is scaled to debias the
 * effect of the (assumed) zero-initialization of `v`.
 *   `delta /= (1 - decay ^ step)`
 *
 * For more details on the zero-debiasing algorithm, see:
 *   https://arxiv.org/abs/1412.6980
 *
 * Note that this function is completely stateless and does not keep track of
 * step count. The step count needs to be maintained by the caller and passed
 * in as `step`.
 *
 * @param v The current moving average value.
 * @param x New input value, must have the same shape and dtype as `v`.
 * @param decay The decay factor. Typical values are 0.95 and 0.99.
 * @param step Step count.
 * @param zeroDebias: Whether zeroDebias is to be performed (default: `true`).
 * @returns The new moving average value.
 *
 * @doc {heading: 'Operations', subheading: 'Moving Average'}
 */
function movingAverage_(v, x, decay, step, zeroDebias = true) {
    const $v = convertToTensor(v, 'v', 'movingAverage');
    const $x = convertToTensor(x, 'x', 'movingAverage');
    const $decay = convertToTensor(decay, 'decay', 'movingAverage');
    assertTypesMatch($v, $x);
    assert(arraysEqual($v.shape, $x.shape), () => 'Shape mismatch in v and x');
    const one = scalar(1);
    const oneMinusDecay = sub(one, $decay);
    let update = mul(sub($x, $v), oneMinusDecay);
    if (zeroDebias) {
        assert(step != null, () => 'When using zeroDebias: true, step is required.');
        const $step = convertToTensor(step, 'step', 'movingAverage');
        update = div(update, sub(one, pow($decay, $step)));
    }
    return add($v, update);
}
const movingAverage = op({ movingAverage_ });

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
 * Normalize noise shape based on provided tensor and noise shape.
 *
 * @param x Tensor.
 * @param noiseShape The shape for the randomly generated keep/drop flags, as
 *   an array of numbers. Optional.
 * @returns Normalized noise shape.
 */
function getNoiseShape(x, noiseShape) {
    if (noiseShape == null) {
        return x.shape.slice();
    }
    if (arraysEqual(x.shape, noiseShape)) {
        return noiseShape;
    }
    if (x.shape.length === noiseShape.length) {
        const newDimension = [];
        for (let i = 0; i < x.shape.length; i++) {
            if (noiseShape[i] == null && x.shape[i] != null) {
                newDimension.push(x.shape[i]);
            }
            else {
                newDimension.push(noiseShape[i]);
            }
        }
        return newDimension;
    }
    return noiseShape;
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
 * Computes dropout.
 *
 * ```js
 * const x = tf.tensor1d([1, 2, 2, 1]);
 * const rate = 0.75;
 * const output = tf.dropout(x, rate);
 * output.print();
 * ```
 *
 * @param x A floating point Tensor or TensorLike.
 * @param rate A float in the range [0, 1). The probability that each element
 *   of x is discarded.
 * @param noiseShape An array of numbers of type int32, representing the
 * shape for randomly generated keep/drop flags. If the noiseShape has null
 * value, it will be automatically replaced with the x's relative dimension
 * size. Optional.
 * @param seed Used to create random seeds. Optional.
 * @returns A Tensor of the same shape of x.
 *
 * @doc {heading: 'Operations', subheading: 'Dropout'}
 */
function dropout_(x, rate, noiseShape, seed) {
    const $x = convertToTensor(x, 'x', 'dropout');
    assert($x.dtype === 'float32', () => `x has to be a floating point tensor since it's going to be ` +
        `scaled, but got a ${$x.dtype} tensor instead.`);
    assert(rate >= 0 && rate < 1, () => `rate must be a float in the range [0, 1), but got ${rate}.`);
    if (rate === 0) {
        return x instanceof Tensor ? $x.clone() : $x;
    }
    const $noiseShape = getNoiseShape($x, noiseShape);
    const keepProb = 1 - rate;
    const multiplier = div(floor(add(randomUniform($noiseShape, 0, 1, 'float32', seed), keepProb)), keepProb);
    return mul($x, multiplier);
}
const dropout = op({ dropout_ });

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
 * Returns whether the targets are in the top K predictions.
 *
 * ```js
 * const predictions = tf.tensor2d([[20, 10, 40, 30], [30, 50, -20, 10]]);
 * const targets = tf.tensor1d([2, 0]);
 * const precision = await tf.inTopKAsync(predictions, targets);
 * precision.print();
 * ```
 * @param predictions 2-D or higher `tf.Tensor` with last dimension being
 *     at least `k`.
 * @param targets 1-D or higher `tf.Tensor`.
 * @param k Optional Number of top elements to look at for computing precision,
 *     default to 1.
 *
 * @doc {heading: 'Operations', subheading: 'Evaluation'}
 */
async function inTopKAsync_(predictions, targets, k = 1) {
    const $predictions = convertToTensor(predictions, 'predictions', 'inTopK');
    const $targets = convertToTensor(targets, 'targets', 'inTopK');
    assert($predictions.rank > 1, () => 'inTopK() expects the predictions to be of rank 2 or higher, ' +
        `but got ${$predictions.rank}`);
    assert($predictions.rank - 1 === $targets.rank, () => `predictions rank should be 1 larger than ` +
        `targets rank, but got predictions rank ` +
        `${$predictions.rank} and targets rank ${$targets.rank}`);
    assertShapesMatch($predictions.shape.slice(0, $predictions.shape.length - 1), $targets.shape, `predictions's shape should be align with the targets' shape, ` +
        'except the last dimension.');
    const lastDim = $predictions.shape[$predictions.shape.length - 1];
    assert(k > 0 && k <= lastDim, () => `'k' passed to inTopK() must be > 0 && <= the predictions last ` +
        `dimension (${lastDim}), but got ${k}`);
    const predictionsVals = await $predictions.data();
    const targetsVals = await $targets.data();
    // Reshape predictionsVals into a 2d tensor [batch, lastDim]
    // and look up topK along lastDim.
    const [batch, size] = [predictionsVals.length / lastDim, lastDim];
    const precision = getTypedArrayFromDType('bool', batch);
    for (let b = 0; b < batch; b++) {
        const offset = b * size;
        const vals = predictionsVals.subarray(offset, offset + size);
        const valAndInd = [];
        for (let i = 0; i < vals.length; i++) {
            valAndInd.push({ value: vals[i], index: i });
        }
        valAndInd.sort((a, b) => b.value - a.value);
        precision[b] = 0;
        for (let i = 0; i < k; i++) {
            if (valAndInd[i].index === targetsVals[b]) {
                precision[b] = 1;
                break;
            }
        }
    }
    if (predictions !== $predictions) {
        $predictions.dispose();
    }
    if (targets !== $targets) {
        $targets.dispose();
    }
    // Output precision has the same shape as targets.
    return tensor(precision, $targets.shape, 'bool');
}
const inTopKAsync = inTopKAsync_;

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

var fused_ops = /*#__PURE__*/Object.freeze({
    __proto__: null,
    conv2d: conv2d,
    depthwiseConv2d: depthwiseConv2d,
    matMul: matMul$1
});

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
/** @doc {heading: 'Training', subheading: 'Classes', namespace: 'train'} */
class Optimizer extends Serializable {
    /**
     * Executes `f()` and minimizes the scalar output of `f()` by computing
     * gradients of y with respect to the list of trainable variables provided by
     * `varList`. If no list is provided, it defaults to all trainable variables.
     *
     * @param f The function to execute and whose output to minimize.
     * @param returnCost Whether to return the scalar cost value produced by
     * executing `f()`.
     * @param varList An optional list of variables to update. If specified, only
     * the trainable variables in varList will be updated by minimize. Defaults to
     * all trainable variables.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers'}
     */
    minimize(f, returnCost = false, varList) {
        const { value, grads } = this.computeGradients(f, varList);
        if (varList != null) {
            const gradArray = varList.map(v => ({ name: v.name, tensor: grads[v.name] }));
            this.applyGradients(gradArray);
        }
        else {
            this.applyGradients(grads);
        }
        // Dispose gradients.
        dispose(grads);
        if (returnCost) {
            return value;
        }
        else {
            value.dispose();
            return null;
        }
    }
    /**
     * The number of iterations that this optimizer instance has been invoked for.
     */
    get iterations() {
        if (this.iterations_ == null) {
            this.iterations_ = 0;
        }
        return this.iterations_;
    }
    incrementIterations() {
        this.iterations_ = this.iterations + 1;
    }
    /**
     * Executes f() and computes the gradient of the scalar output of f() with
     * respect to the list of trainable variables provided by `varList`. If no
     * list is provided, it defaults to all trainable variables.
     *
     * @param f The function to execute and whose output to use for computing
     * gradients with respect to variables.
     * @param varList An optional list of variables to compute gradients with
     * respect to. If specified, only the trainable variables in varList will have
     * gradients computed with respect to. Defaults to all trainable variables.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers'}
     */
    computeGradients(f, varList) {
        return variableGrads(f, varList);
    }
    /**
     * Dispose the variables (if any) owned by this optimizer instance.
     */
    dispose() {
        if (this.iterations_ != null) {
            dispose(this.iterations_);
        }
    }
    async saveIterations() {
        if (this.iterations_ == null) {
            this.iterations_ = 0;
        }
        return {
            name: 'iter',
            // TODO(cais): Use 'int64' type when available.
            tensor: scalar(this.iterations_, 'int32')
        };
    }
    async getWeights() {
        throw new Error('getWeights() is not implemented for this optimizer yet.');
    }
    async setWeights(weightValues) {
        throw new Error(`setWeights() is not implemented for this optimizer class ` +
            `${this.getClassName()}`);
    }
    /**
     * Extract the first element of the weight values and set it
     * as the iterations counter variable of this instance of optimizer.
     *
     * @param weightValues
     * @returns Weight values with the first element consumed and excluded.
     */
    async extractIterations(weightValues) {
        this.iterations_ = (await weightValues[0].tensor.data())[0];
        return weightValues.slice(1);
    }
}
Object.defineProperty(Optimizer, Symbol.hasInstance, {
    value: (instance) => {
        return instance.minimize != null && instance.computeGradients != null &&
            instance.applyGradients != null;
    }
});

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
/** @doclink Optimizer */
class AdadeltaOptimizer extends Optimizer {
    constructor(learningRate, rho, epsilon = null) {
        super();
        this.learningRate = learningRate;
        this.rho = rho;
        this.epsilon = epsilon;
        this.accumulatedGrads = [];
        this.accumulatedUpdates = [];
        if (epsilon == null) {
            this.epsilon = ENGINE.backend.epsilon();
        }
    }
    applyGradients(variableGradients) {
        const variableNames = Array.isArray(variableGradients) ?
            variableGradients.map(item => item.name) :
            Object.keys(variableGradients);
        variableNames.forEach((name, i) => {
            const value = ENGINE.registeredVariables[name];
            const trainable = false;
            if (this.accumulatedGrads[i] == null) {
                this.accumulatedGrads[i] = {
                    originalName: `${name}/accum_grad`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            if (this.accumulatedUpdates[i] == null) {
                this.accumulatedUpdates[i] = {
                    originalName: `${name}/accum_var`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            const gradient = Array.isArray(variableGradients) ?
                variableGradients[i].tensor :
                variableGradients[name];
            if (gradient == null) {
                return;
            }
            const accumulatedGrad = this.accumulatedGrads[i].variable;
            const accumulatedUpdate = this.accumulatedUpdates[i].variable;
            tidy(() => {
                const newAccumulatedGrad = add(mul(accumulatedGrad, this.rho), mul(square(gradient), 1 - this.rho));
                const updates = mul(div(sqrt(add(accumulatedUpdate, this.epsilon)), sqrt(add(accumulatedGrad, this.epsilon))), gradient);
                const newAccumulatedUpdate = add(mul(accumulatedUpdate, this.rho), mul(square(updates), 1 - this.rho));
                accumulatedGrad.assign(newAccumulatedGrad);
                accumulatedUpdate.assign(newAccumulatedUpdate);
                const newValue = add(mul(updates, -this.learningRate), value);
                value.assign(newValue);
            });
        });
        this.incrementIterations();
    }
    dispose() {
        if (this.accumulatedUpdates != null) {
            dispose(this.accumulatedGrads.map(v => v.variable));
            dispose(this.accumulatedUpdates.map(v => v.variable));
        }
    }
    async getWeights() {
        // Order matters for Python compatibility.
        const variables = [...this.accumulatedGrads, ...this.accumulatedUpdates];
        return [await this.saveIterations()].concat(variables.map(v => ({ name: v.originalName, tensor: v.variable })));
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        const variableCount = weightValues.length / 2;
        const trainable = false;
        this.accumulatedGrads =
            weightValues.slice(0, variableCount).map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
        this.accumulatedUpdates =
            weightValues.slice(variableCount, variableCount * 2)
                .map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'rho': this.rho,
            'epsilon': this.epsilon
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['rho'], config['epsilon']);
    }
}
/** @nocollapse */
AdadeltaOptimizer.className = 'Adadelta'; // Name matters for Python compatibility.
registerClass(AdadeltaOptimizer);

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
/** @doclink Optimizer */
class AdagradOptimizer extends Optimizer {
    constructor(learningRate, initialAccumulatorValue = 0.1) {
        super();
        this.learningRate = learningRate;
        this.initialAccumulatorValue = initialAccumulatorValue;
        this.accumulatedGrads = [];
    }
    applyGradients(variableGradients) {
        const variableNames = Array.isArray(variableGradients) ?
            variableGradients.map(item => item.name) :
            Object.keys(variableGradients);
        variableNames.forEach((name, i) => {
            const value = ENGINE.registeredVariables[name];
            if (this.accumulatedGrads[i] == null) {
                const trainable = false;
                this.accumulatedGrads[i] = {
                    originalName: `${name}/accumulator`,
                    variable: tidy(() => fill(value.shape, this.initialAccumulatorValue)
                        .variable(trainable))
                };
            }
            const gradient = Array.isArray(variableGradients) ?
                variableGradients[i].tensor :
                variableGradients[name];
            if (gradient == null) {
                return;
            }
            const accumulatedGrad = this.accumulatedGrads[i].variable;
            tidy(() => {
                const newAccumulatedGrad = add(accumulatedGrad, square(gradient));
                accumulatedGrad.assign(newAccumulatedGrad);
                const newValue = add(mul(div(gradient, sqrt(add(newAccumulatedGrad, ENGINE.backend.epsilon()))), -this.learningRate), value);
                value.assign(newValue);
            });
        });
        this.incrementIterations();
    }
    dispose() {
        if (this.accumulatedGrads != null) {
            dispose(this.accumulatedGrads.map(v => v.variable));
        }
    }
    async getWeights() {
        // Order matters for Python compatibility.
        return [await this.saveIterations()].concat(this.accumulatedGrads.map(v => ({ name: v.originalName, tensor: v.variable })));
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        const trainable = false;
        this.accumulatedGrads = weightValues.map(v => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'initialAccumulatorValue': this.initialAccumulatorValue,
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['initialAccumulatorValue']);
    }
}
/** @nocollapse */
AdagradOptimizer.className = 'Adagrad'; // Note: Name matters for Python compatibility.
registerClass(AdagradOptimizer);

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
class AdamOptimizer extends Optimizer {
    constructor(learningRate, beta1, beta2, epsilon = null) {
        super();
        this.learningRate = learningRate;
        this.beta1 = beta1;
        this.beta2 = beta2;
        this.epsilon = epsilon;
        this.accumulatedFirstMoment = [];
        this.accumulatedSecondMoment = [];
        tidy(() => {
            // accB* will be updated by batch.
            this.accBeta1 = scalar(beta1).variable();
            this.accBeta2 = scalar(beta2).variable();
        });
        if (epsilon == null) {
            this.epsilon = ENGINE.backend.epsilon();
        }
    }
    applyGradients(variableGradients) {
        const varNames = Array.isArray(variableGradients) ?
            variableGradients.map(v => v.name) :
            Object.keys(variableGradients);
        tidy(() => {
            const oneMinusAccBeta1 = sub(1, this.accBeta1);
            const oneMinusAccBeta2 = sub(1, this.accBeta2);
            varNames.forEach((name, i) => {
                const value = ENGINE.registeredVariables[name];
                const trainable = false;
                if (this.accumulatedFirstMoment[i] == null) {
                    this.accumulatedFirstMoment[i] = {
                        originalName: `${name}/m`,
                        variable: tidy(() => zerosLike(value).variable(trainable))
                    };
                }
                if (this.accumulatedSecondMoment[i] == null) {
                    this.accumulatedSecondMoment[i] = {
                        originalName: `${name}/v`,
                        variable: tidy(() => zerosLike(value).variable(trainable))
                    };
                }
                const gradient = Array.isArray(variableGradients) ?
                    variableGradients[i].tensor :
                    variableGradients[name];
                if (gradient == null) {
                    return;
                }
                const firstMoment = this.accumulatedFirstMoment[i].variable;
                const secondMoment = this.accumulatedSecondMoment[i].variable;
                const newFirstMoment = add(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
                const newSecondMoment = add(mul(secondMoment, this.beta2), mul(square(gradient), 1 - this.beta2));
                const biasCorrectedFirstMoment = div(newFirstMoment, oneMinusAccBeta1);
                const biasCorrectedSecondMoment = div(newSecondMoment, oneMinusAccBeta2);
                firstMoment.assign(newFirstMoment);
                secondMoment.assign(newSecondMoment);
                const newValue = add(mul(div(biasCorrectedFirstMoment, add(sqrt(biasCorrectedSecondMoment), this.epsilon)), -this.learningRate), value);
                value.assign(newValue);
            });
            this.accBeta1.assign(mul(this.accBeta1, this.beta1));
            this.accBeta2.assign(mul(this.accBeta2, this.beta2));
        });
        this.incrementIterations();
    }
    dispose() {
        this.accBeta1.dispose();
        this.accBeta2.dispose();
        if (this.accumulatedFirstMoment != null) {
            dispose(this.accumulatedFirstMoment.map(v => v.variable));
        }
        if (this.accumulatedSecondMoment != null) {
            dispose(this.accumulatedSecondMoment.map(v => v.variable));
        }
    }
    async getWeights() {
        // Order matters for Python compatibility.
        const variables = [...this.accumulatedFirstMoment, ...this.accumulatedSecondMoment];
        return [await this.saveIterations()].concat(variables.map(v => ({ name: v.originalName, tensor: v.variable })));
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        tidy(() => {
            this.accBeta1.assign(pow(this.beta1, this.iterations_ + 1));
            this.accBeta2.assign(pow(this.beta2, this.iterations_ + 1));
        });
        const variableCount = weightValues.length / 2;
        const trainable = false;
        this.accumulatedFirstMoment =
            weightValues.slice(0, variableCount).map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
        this.accumulatedSecondMoment =
            weightValues.slice(variableCount, variableCount * 2)
                .map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'beta1': this.beta1,
            'beta2': this.beta2,
            'epsilon': this.epsilon,
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['beta1'], config['beta2'], config['epsilon']);
    }
}
/** @nocollapse */
AdamOptimizer.className = 'Adam'; // Note: Name matters for Python compatibility.
registerClass(AdamOptimizer);

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
class AdamaxOptimizer extends Optimizer {
    constructor(learningRate, beta1, beta2, epsilon = null, decay = 0.0) {
        super();
        this.learningRate = learningRate;
        this.beta1 = beta1;
        this.beta2 = beta2;
        this.epsilon = epsilon;
        this.decay = decay;
        this.accumulatedFirstMoment = [];
        this.accumulatedWeightedInfNorm = [];
        tidy(() => {
            this.iteration = scalar(0).variable();
            this.accBeta1 = scalar(beta1).variable();
        });
        if (epsilon == null) {
            this.epsilon = ENGINE.backend.epsilon();
        }
    }
    applyGradients(variableGradients) {
        const variableNames = Array.isArray(variableGradients) ?
            variableGradients.map(item => item.name) :
            Object.keys(variableGradients);
        tidy(() => {
            const oneMinusAccBeta1 = sub(1, this.accBeta1);
            const lr = div(-this.learningRate, add(mul(this.iteration, this.decay), 1));
            variableNames.forEach((name, i) => {
                const value = ENGINE.registeredVariables[name];
                const trainable = false;
                if (this.accumulatedFirstMoment[i] == null) {
                    this.accumulatedFirstMoment[i] = {
                        originalName: `${name}/m`,
                        variable: zerosLike(value).variable(trainable)
                    };
                }
                if (this.accumulatedWeightedInfNorm[i] == null) {
                    this.accumulatedWeightedInfNorm[i] = {
                        originalName: `${name}/v`,
                        variable: zerosLike(value).variable(trainable)
                    };
                }
                const gradient = Array.isArray(variableGradients) ?
                    variableGradients[i].tensor :
                    variableGradients[name];
                if (gradient == null) {
                    return;
                }
                const firstMoment = this.accumulatedFirstMoment[i].variable;
                const weightedInfNorm = this.accumulatedWeightedInfNorm[i].variable;
                const newFirstMoment = add(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
                const ut0 = mul(weightedInfNorm, this.beta2);
                const ut1 = abs(gradient);
                const newWeightedInfNorm = maximum(ut0, ut1);
                firstMoment.assign(newFirstMoment);
                weightedInfNorm.assign(newWeightedInfNorm);
                const newValue = add(mul(div(lr, oneMinusAccBeta1), div(newFirstMoment, add(newWeightedInfNorm, this.epsilon))), value);
                value.assign(newValue);
            });
            this.iteration.assign(add(this.iteration, 1));
            this.accBeta1.assign(mul(this.accBeta1, this.beta1));
        });
        this.incrementIterations();
    }
    dispose() {
        this.accBeta1.dispose();
        this.iteration.dispose();
        if (this.accumulatedFirstMoment != null) {
            dispose(this.accumulatedFirstMoment.map(v => v.variable));
        }
        if (this.accumulatedWeightedInfNorm != null) {
            dispose(this.accumulatedWeightedInfNorm.map(v => v.variable));
        }
    }
    async getWeights() {
        throw new Error('getWeights() is not implemented for Adamax yet.');
    }
    async setWeights(weightValues) {
        throw new Error('setWeights() is not implemented for Adamax yet.');
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'beta1': this.beta1,
            'beta2': this.beta2,
            'epsilon': this.epsilon,
            'decay': this.decay
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['beta1'], config['beta2'], config['epsilon'], config['decay']);
    }
}
/** @nocollapse */
AdamaxOptimizer.className = 'Adamax'; // Note: Name matters for Python compatbility.
registerClass(AdamaxOptimizer);

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
/** @doclink Optimizer */
class SGDOptimizer extends Optimizer {
    constructor(learningRate) {
        super();
        this.learningRate = learningRate;
        this.setLearningRate(learningRate);
    }
    applyGradients(variableGradients) {
        const varNames = Array.isArray(variableGradients) ?
            variableGradients.map(v => v.name) :
            Object.keys(variableGradients);
        varNames.forEach((name, i) => {
            const gradient = Array.isArray(variableGradients) ?
                variableGradients[i].tensor :
                variableGradients[name];
            if (gradient == null) {
                return;
            }
            const value = ENGINE.registeredVariables[name];
            tidy(() => {
                const newValue = add(mul(this.c, gradient), value);
                value.assign(newValue);
            });
        });
        this.incrementIterations();
    }
    /**
     * Sets the learning rate of the optimizer.
     */
    setLearningRate(learningRate) {
        this.learningRate = learningRate;
        if (this.c != null) {
            this.c.dispose();
        }
        this.c = keep(scalar(-learningRate));
    }
    dispose() {
        this.c.dispose();
    }
    async getWeights() {
        return [await this.saveIterations()];
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        if (weightValues.length !== 0) {
            throw new Error('SGD optimizer does not have settable weights.');
        }
    }
    getConfig() {
        return { 'learningRate': this.learningRate };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate']);
    }
}
/** @nocollapse */
SGDOptimizer.className = 'SGD'; // Note: Name matters for Python compatibility.
registerClass(SGDOptimizer);

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
/** @doclink Optimizer */
class MomentumOptimizer extends SGDOptimizer {
    constructor(learningRate, momentum, useNesterov = false) {
        super(learningRate);
        this.learningRate = learningRate;
        this.momentum = momentum;
        this.useNesterov = useNesterov;
        this.accumulations = [];
        this.m = scalar(this.momentum);
    }
    applyGradients(variableGradients) {
        const variableNames = Array.isArray(variableGradients) ?
            variableGradients.map(item => item.name) :
            Object.keys(variableGradients);
        variableNames.forEach((name, i) => {
            const value = ENGINE.registeredVariables[name];
            if (this.accumulations[i] == null) {
                const trainable = false;
                this.accumulations[i] = {
                    originalName: `${name}/momentum`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            const accumulation = this.accumulations[i].variable;
            const gradient = Array.isArray(variableGradients) ?
                variableGradients[i].tensor :
                variableGradients[name];
            if (gradient == null) {
                return;
            }
            tidy(() => {
                let newValue;
                const newAccumulation = add(mul(this.m, accumulation), gradient);
                if (this.useNesterov) {
                    newValue = add(mul(this.c, add(gradient, mul(newAccumulation, this.m))), value);
                }
                else {
                    newValue = add(mul(this.c, newAccumulation), value);
                }
                accumulation.assign(newAccumulation);
                value.assign(newValue);
            });
        });
        this.incrementIterations();
    }
    dispose() {
        this.m.dispose();
        if (this.accumulations != null) {
            dispose(this.accumulations.map(v => v.variable));
        }
    }
    /**
     * Sets the momentum of the optimizer.
     *
     * @param momentum
     */
    setMomentum(momentum) {
        this.momentum = momentum;
    }
    async getWeights() {
        // Order matters for Python compatibility.
        return [await this.saveIterations()].concat(this.accumulations.map(v => ({ name: v.originalName, tensor: v.variable })));
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        const trainable = false;
        this.accumulations = weightValues.map(v => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'momentum': this.momentum,
            'useNesterov': this.useNesterov
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['momentum'], config['useNesterov']);
    }
}
/** @nocollapse */
MomentumOptimizer.className = 'Momentum'; // Name matters for Python compatibility.
registerClass(MomentumOptimizer);

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
/** @doclink Optimizer */
class RMSPropOptimizer extends Optimizer {
    constructor(learningRate, decay = 0.9, momentum = 0.0, epsilon = null, centered = false) {
        super();
        this.learningRate = learningRate;
        this.decay = decay;
        this.momentum = momentum;
        this.epsilon = epsilon;
        this.accumulatedMeanSquares = [];
        this.accumulatedMoments = [];
        this.accumulatedMeanGrads = [];
        this.centered = centered;
        if (epsilon == null) {
            this.epsilon = ENGINE.backend.epsilon();
        }
        if (learningRate == null) {
            throw new Error(`learningRate for RMSPropOptimizer must be defined.`);
        }
    }
    applyGradients(variableGradients) {
        const variableNames = Array.isArray(variableGradients) ?
            variableGradients.map(item => item.name) :
            Object.keys(variableGradients);
        variableNames.forEach((name, i) => {
            const value = ENGINE.registeredVariables[name];
            const trainable = false;
            if (this.accumulatedMeanSquares[i] == null) {
                this.accumulatedMeanSquares[i] = {
                    originalName: `${name}/rms`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            if (this.accumulatedMoments[i] == null) {
                this.accumulatedMoments[i] = {
                    originalName: `${name}/momentum`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            if (this.accumulatedMeanGrads[i] == null && this.centered) {
                this.accumulatedMeanGrads[i] = {
                    originalName: `${name}/mg`,
                    variable: tidy(() => zerosLike(value).variable(trainable))
                };
            }
            const gradient = Array.isArray(variableGradients) ?
                variableGradients[i].tensor :
                variableGradients[name];
            if (gradient == null) {
                return;
            }
            const accumulatedMeanSquare = this.accumulatedMeanSquares[i].variable;
            const accumulatedMoments = this.accumulatedMoments[i].variable;
            tidy(() => {
                const newAccumulatedMeanSquare = add(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
                if (this.centered) {
                    const accumulatedMeanGrad = this.accumulatedMeanGrads[i].variable;
                    // Centered gradient
                    const newAccumulatedMeanGrad = add(mul(accumulatedMeanGrad, this.decay), mul(gradient, 1 - this.decay));
                    const gradContribution = div(mul(gradient, this.learningRate), sqrt(sub(newAccumulatedMeanSquare, add(square(newAccumulatedMeanGrad), this.epsilon))));
                    const newAccumulatedMoments = add(mul(accumulatedMoments, this.momentum), gradContribution);
                    accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
                    accumulatedMeanGrad.assign(newAccumulatedMeanGrad);
                    accumulatedMoments.assign(newAccumulatedMoments);
                    const newValue = sub(value, newAccumulatedMoments);
                    value.assign(newValue);
                }
                else {
                    // Plain gradient
                    const newAccumulatedMeanSquare = add(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
                    const newAccumulatedMoments = add(mul(accumulatedMoments, this.momentum), div(mul(gradient, this.learningRate), sqrt(add(newAccumulatedMeanSquare, this.epsilon))));
                    accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
                    accumulatedMoments.assign(newAccumulatedMoments);
                    const newValue = sub(value, newAccumulatedMoments);
                    value.assign(newValue);
                }
            });
        });
        this.incrementIterations();
    }
    dispose() {
        if (this.accumulatedMeanSquares != null) {
            dispose(this.accumulatedMeanSquares.map(v => v.variable));
        }
        if (this.accumulatedMeanGrads != null && this.centered) {
            dispose(this.accumulatedMeanGrads.map(v => v.variable));
        }
        if (this.accumulatedMoments != null) {
            dispose(this.accumulatedMoments.map(v => v.variable));
        }
    }
    async getWeights() {
        // Order matters for Python compatibility.
        const variables = [...this.accumulatedMeanSquares, ...this.accumulatedMoments];
        if (this.centered) {
            variables.push(...this.accumulatedMeanGrads);
        }
        return [await this.saveIterations()].concat(variables.map(v => ({ name: v.originalName, tensor: v.variable })));
    }
    async setWeights(weightValues) {
        weightValues = await this.extractIterations(weightValues);
        const variableCount = this.centered ? weightValues.length / 3 : weightValues.length / 2;
        const trainable = false;
        this.accumulatedMeanSquares =
            weightValues.slice(0, variableCount).map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
        this.accumulatedMoments =
            weightValues.slice(variableCount, variableCount * 2)
                .map(v => ({
                originalName: v.name,
                variable: v.tensor.variable(trainable)
            }));
        if (this.centered) {
            this.accumulatedMeanGrads =
                weightValues.slice(variableCount * 2, variableCount * 3)
                    .map(v => ({
                    originalName: v.name,
                    variable: v.tensor.variable(trainable)
                }));
        }
    }
    getConfig() {
        return {
            'learningRate': this.learningRate,
            'decay': this.decay,
            'momentum': this.momentum,
            'epsilon': this.epsilon,
            'centered': this.centered
        };
    }
    /** @nocollapse */
    static fromConfig(cls, config) {
        return new cls(config['learningRate'], config['decay'], config['momentum'], config['epsilon'], config['centered']);
    }
}
/** @nocollapse */
RMSPropOptimizer.className = 'RMSProp'; // Note: Name matters for Python compatibility.
registerClass(RMSPropOptimizer);

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
class OptimizerConstructors {
    /**
     * Constructs a `tf.SGDOptimizer` that uses stochastic gradient descent.
     *
     * ```js
     * // Fit a quadratic function by learning the coefficients a, b, c.
     * const xs = tf.tensor1d([0, 1, 2, 3]);
     * const ys = tf.tensor1d([1.1, 5.9, 16.8, 33.9]);
     *
     * const a = tf.scalar(Math.random()).variable();
     * const b = tf.scalar(Math.random()).variable();
     * const c = tf.scalar(Math.random()).variable();
     *
     * // y = a * x^2 + b * x + c.
     * const f = x => a.mul(x.square()).add(b.mul(x)).add(c);
     * const loss = (pred, label) => pred.sub(label).square().mean();
     *
     * const learningRate = 0.01;
     * const optimizer = tf.train.sgd(learningRate);
     *
     * // Train the model.
     * for (let i = 0; i < 10; i++) {
     *   optimizer.minimize(() => loss(f(xs), ys));
     * }
     *
     * // Make predictions.
     * console.log(
     *     `a: ${a.dataSync()}, b: ${b.dataSync()}, c: ${c.dataSync()}`);
     * const preds = f(xs).dataSync();
     * preds.forEach((pred, i) => {
     *   console.log(`x: ${i}, pred: ${pred}`);
     * });
     * ```
     *
     * @param learningRate The learning rate to use for the SGD algorithm.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static sgd(learningRate) {
        return new SGDOptimizer(learningRate);
    }
    /**
     * Constructs a `tf.MomentumOptimizer` that uses momentum gradient
     * descent.
     *
     * See
     * [http://proceedings.mlr.press/v28/sutskever13.pdf](
     * http://proceedings.mlr.press/v28/sutskever13.pdf)
     *
     * @param learningRate The learning rate to use for the Momentum gradient
     * descent algorithm.
     * @param momentum The momentum to use for the momentum gradient descent
     * algorithm.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static momentum(learningRate, momentum, useNesterov = false) {
        return new MomentumOptimizer(learningRate, momentum, useNesterov);
    }
    /**
     * Constructs a `tf.RMSPropOptimizer` that uses RMSProp gradient
     * descent. This implementation uses plain momentum and is not centered
     * version of RMSProp.
     *
     * See
     * [http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf](
     * http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf)
     *
     * @param learningRate The learning rate to use for the RMSProp gradient
     * descent algorithm.
     * @param decay The discounting factor for the history/coming gradient.
     * @param momentum The momentum to use for the RMSProp gradient descent
     * algorithm.
     * @param epsilon Small value to avoid zero denominator.
     * @param centered If true, gradients are normalized by the estimated
     * variance of the gradient.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static rmsprop(learningRate, decay = .9, momentum = 0.0, epsilon = null, centered = false) {
        return new RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered);
    }
    /**
     * Constructs a `tf.AdamOptimizer` that uses the Adam algorithm.
     * See [https://arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980)
     *
     * @param learningRate The learning rate to use for the Adam gradient
     * descent algorithm.
     * @param beta1 The exponential decay rate for the 1st moment estimates.
     * @param beta2 The exponential decay rate for the 2nd moment estimates.
     * @param epsilon A small constant for numerical stability.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adam(learningRate = 0.001, beta1 = 0.9, beta2 = 0.999, epsilon = null) {
        return new AdamOptimizer(learningRate, beta1, beta2, epsilon);
    }
    /**
     * Constructs a `tf.AdadeltaOptimizer` that uses the Adadelta algorithm.
     * See [https://arxiv.org/abs/1212.5701](https://arxiv.org/abs/1212.5701)
     *
     * @param learningRate The learning rate to use for the Adadelta gradient
     * descent algorithm.
     * @param rho The learning rate decay over each update.
     * @param epsilon A constant epsilon used to better condition the grad
     * update.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adadelta(learningRate = .001, rho = .95, epsilon = null) {
        return new AdadeltaOptimizer(learningRate, rho, epsilon);
    }
    /**
     * Constructs a `tf.AdamaxOptimizer` that uses the Adamax algorithm.
     * See [https://arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980)
     *
     * @param learningRate The learning rate to use for the Adamax gradient
     * descent algorithm.
     * @param beta1 The exponential decay rate for the 1st moment estimates.
     * @param beta2 The exponential decay rate for the 2nd moment estimates.
     * @param epsilon A small constant for numerical stability.
     * @param decay The learning rate decay over each update.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adamax(learningRate = 0.002, beta1 = 0.9, beta2 = 0.999, epsilon = null, decay = 0.0) {
        return new AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay);
    }
    /**
     * Constructs a `tf.AdagradOptimizer` that uses the Adagrad algorithm.
     * See
     * [http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf](
     * http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf)
     * or
     * [http://ruder.io/optimizing-gradient-descent/index.html#adagrad](
     * http://ruder.io/optimizing-gradient-descent/index.html#adagrad)
     *
     * @param learningRate The learning rate to use for the Adagrad gradient
     * descent algorithm.
     * @param initialAccumulatorValue Starting value for the accumulators, must be
     * positive.
     *
     * @doc {heading: 'Training', subheading: 'Optimizers', namespace: 'train'}
     */
    static adagrad(learningRate, initialAccumulatorValue = 0.1) {
        return new AdagradOptimizer(learningRate, initialAccumulatorValue);
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
const train = {
    sgd: OptimizerConstructors.sgd,
    momentum: OptimizerConstructors.momentum,
    adadelta: OptimizerConstructors.adadelta,
    adagrad: OptimizerConstructors.adagrad,
    rmsprop: OptimizerConstructors.rmsprop,
    adamax: OptimizerConstructors.adamax,
    adam: OptimizerConstructors.adam
};

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const delayCallback = (() => {
    if (typeof requestAnimationFrame !== 'undefined') {
        return requestAnimationFrame;
    }
    else if (typeof setImmediate !== 'undefined') {
        return setImmediate;
    }
    return (f) => f(); // no delays
})();
/**
 * Returns a promise that resolve when a requestAnimationFrame has completed.
 *
 * On Node.js this uses setImmediate instead of requestAnimationFrame.
 *
 * This is simply a sugar method so that users can do the following:
 * `await tf.nextFrame();`
 *
 * @doc {heading: 'Performance', subheading: 'Timing'}
 */
function nextFrame() {
    return new Promise(resolve => delayCallback(() => resolve()));
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

var kernel_impls = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nonMaxSuppressionV3Impl: nonMaxSuppressionV3Impl,
    nonMaxSuppressionV4Impl: nonMaxSuppressionV4Impl,
    nonMaxSuppressionV5Impl: nonMaxSuppressionV5Impl,
    whereImpl: whereImpl
});

export { AdadeltaOptimizer, AdagradOptimizer, AdamOptimizer, AdamaxOptimizer, MomentumOptimizer, Optimizer, RMSPropOptimizer, SGDOptimizer, basicLSTMCell, batchNorm2d, batchNorm3d, batchNorm4d, booleanMaskAsync, concat1d, concat3d, concat4d, conv3dTranspose, diag, dropout, fused_ops as fused, inTopKAsync, io, kernel_impls, math, moments, movingAverage, multiRNNCell, nextFrame, outerProduct, pad1d, pad2d, pad3d, pad4d, rand, randomGamma, randomNormal, reverse1d, reverse2d, reverse3d, reverse4d, serialization, slice1d, slice2d, slice3d, slice4d, tensor4d, tensor5d, tensor6d, test_util, train, variable, version as version_core };
