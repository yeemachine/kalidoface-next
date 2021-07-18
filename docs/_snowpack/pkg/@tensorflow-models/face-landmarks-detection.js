import { t as toNestedArray, c as clone, e as env, s as squaredDifference, p as pow, m as maximum, a as minimum, b as sub, f as floorDiv, d as divNoNan, g as div, h as mul, i as mod, j as add, k as prelu, l as leakyRelu, n as prod, r as rsqrt, o as relu6, q as clipByValue, u as tan, v as tanh, w as square, x as sqrt, y as softplus, z as sinh, A as sign, B as sin, C as sigmoid, D as selu, E as round, F as relu, G as real, H as reciprocal, I as neg, J as imag, K as log1p, L as log, M as floor, N as expm1, O as exp, P as erf, Q as elu, R as cosh, S as cos, T as complex, U as ceil, V as atanh, W as atan2, X as atan, Y as asinh, Z as asin, _ as acosh, $ as acos, a0 as abs, a1 as assert, a2 as scalar, a3 as keep, a4 as tensor, a5 as stack, a6 as concat, a7 as unstack, a8 as tidy, a9 as reshape, aa as slice, ab as dilation2d, ac as maxPool, ad as avgPool, ae as depthwiseConv2d, af as conv2dTranspose, ag as conv2d$1, ah as conv1d, ai as zerosLike, aj as zeros, ak as onesLike, al as ones, am as oneHot, an as cast, ao as unique, ap as topk, aq as where, ar as logicalOr, as as logicalNot, at as logicalAnd, au as lessEqual, av as less, aw as greaterEqual, ax as greater, ay as notEqual, az as equal, aA as transpose, aB as matMul$1, aC as logSoftmax, aD as softmax, aE as localResponseNormalization, aF as batchNorm, aG as cumsum, aH as argMin, aI as argMax, aJ as any, aK as all, aL as sum, aM as min, aN as mean, aO as max, aP as split$1, aQ as tile, aR as squeeze, aS as arraysEqual, aT as stridedSlice, aU as reverse, aV as gather, aW as irfft, aX as rfft, aY as ifft, aZ as fft, a_ as broadcastTo, a$ as depthToSpace, b0 as batchToSpaceND, b1 as spaceToBatchND, b2 as pad, b3 as mirrorPad, b4 as expandDims, b5 as isPromise, b6 as browserHTTPRequest, b7 as getLoadHandlers, b8 as decodeWeights, b9 as getSaveHandlers, ba as Tensor, bb as getBackend } from '../common/zeros_like-371809d6.js';
import { a as addN, m as maxPool3d, b as avgPool3d, c as maxPoolWithArgmax, d as conv3d, e as depthwiseConv2d$1, f as conv2d, t as truncatedNormal, r as range, g as randomUniform, h as multinomial, l as linspace, i as fill, s as setdiff1dAsync, w as whereAsync, j as image$1, k as tensor1d, n as matMul, o as sparseToDense, p as denseBincount, q as bincount, u as gatherND, v as scatterND, x as tensor2d, y as concat2d, z as fromPixels } from '../common/ops-c96d7cb7.js';
import '../common/_commonjsHelpers-8a10f9bf.js';

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
 *
 * =============================================================================
 */
/** DataType enum. */
var DataType;
(function (DataType) {
    DataType[DataType["DT_INVALID"] = 0] = "DT_INVALID";
    DataType[DataType["DT_FLOAT"] = 1] = "DT_FLOAT";
    DataType[DataType["DT_DOUBLE"] = 2] = "DT_DOUBLE";
    DataType[DataType["DT_INT32"] = 3] = "DT_INT32";
    DataType[DataType["DT_UINT8"] = 4] = "DT_UINT8";
    DataType[DataType["DT_INT16"] = 5] = "DT_INT16";
    DataType[DataType["DT_INT8"] = 6] = "DT_INT8";
    DataType[DataType["DT_STRING"] = 7] = "DT_STRING";
    DataType[DataType["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
    DataType[DataType["DT_INT64"] = 9] = "DT_INT64";
    DataType[DataType["DT_BOOL"] = 10] = "DT_BOOL";
    DataType[DataType["DT_QINT8"] = 11] = "DT_QINT8";
    DataType[DataType["DT_QUINT8"] = 12] = "DT_QUINT8";
    DataType[DataType["DT_QINT32"] = 13] = "DT_QINT32";
    DataType[DataType["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
    DataType[DataType["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
    DataType[DataType["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
    DataType[DataType["DT_INT32_REF"] = 103] = "DT_INT32_REF";
    DataType[DataType["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
    DataType[DataType["DT_INT16_REF"] = 105] = "DT_INT16_REF";
    DataType[DataType["DT_INT8_REF"] = 106] = "DT_INT8_REF";
    DataType[DataType["DT_STRING_REF"] = 107] = "DT_STRING_REF";
    DataType[DataType["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
    DataType[DataType["DT_INT64_REF"] = 109] = "DT_INT64_REF";
    DataType[DataType["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
    DataType[DataType["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
    DataType[DataType["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
    DataType[DataType["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
    DataType[DataType["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
})(DataType || (DataType = {}));
var SaverDef;
(function (SaverDef) {
    (function (CheckpointFormatVersion) {
        CheckpointFormatVersion[CheckpointFormatVersion["LEGACY"] = 0] = "LEGACY";
        CheckpointFormatVersion[CheckpointFormatVersion["V1"] = 1] = "V1";
        CheckpointFormatVersion[CheckpointFormatVersion["V2"] = 2] = "V2";
    })(SaverDef.CheckpointFormatVersion || (SaverDef.CheckpointFormatVersion = {}));
})(SaverDef || (SaverDef = {}));

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
const CUSTOM_OPS = {};
/**
 * Retrieve the OpMapper object for the registered op.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */
function getRegisteredOp(name) {
    return CUSTOM_OPS[name];
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
function getParamValue(paramName, node, tensorMap, context, resourceManager) {
    const inputParam = node.inputParams[paramName];
    if (inputParam && inputParam.inputIndexStart !== undefined) {
        const start = inputParam.inputIndexStart;
        const end = inputParam.inputIndexEnd === 0 ?
            undefined :
            (inputParam.inputIndexEnd === undefined ? start + 1 :
                inputParam.inputIndexEnd);
        if (inputParam.type === 'tensor') {
            return getTensor(node.inputNames[inputParam.inputIndexStart], tensorMap, context, resourceManager);
        }
        if (inputParam.type === 'tensors') {
            const inputs = node.inputNames.slice(start, end);
            return inputs.map(name => getTensor(name, tensorMap, context, resourceManager));
        }
        const tensor = getTensor(node.inputNames.slice(start)[0], tensorMap, context, resourceManager);
        const data = tensor.dataSync();
        return inputParam.type === 'number' ?
            data[0] :
            toNestedArray(tensor.shape, data);
    }
    const attrParam = node.attrParams[paramName];
    return attrParam && attrParam.value;
}
/**
 * Retrieve the tensor from tensorsMap based on input name.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */
function getTensor(name, tensorsMap, context, resourceManager) {
    const [nodeName, index] = parseNodeName(name);
    if (resourceManager != null) {
        const tensor = resourceManager.getHashTableHandleByName(nodeName);
        if (tensor != null) {
            return tensor;
        }
    }
    const contextId = context.currentContextIds.find(contextId => {
        return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
    });
    return contextId !== undefined ?
        tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] :
        undefined;
}
/**
 * Retrieve the tensors based on input name for current context.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 */
function getTensorsForCurrentContenxt(name, tensorsMap, context) {
    return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
/**
 * Returns the node name and index from the Node input name.
 * @param inputName The input name of the node, in format of
 * node_name:output_index, i.e. MatMul:0, if the output_index is not set, it is
 * default to 0.
 */
function getNodeNameAndIndex(inputName, context) {
    const [nodeName, index] = parseNodeName(inputName);
    return [
        getNodeNameWithContextId(nodeName, context && context.currentContextId),
        index
    ];
}
function getNodeNameWithContextId(name, contextId) {
    return !!contextId ? `${name}-${contextId}` : name;
}
function parseNodeName(name) {
    const parts = name.split(':');
    if (parts.length === 1) {
        return [name, 0];
    }
    const nodeName = parts[0];
    return [nodeName, Number(parts[parts.length - 1])];
}
function getPadding(node, tensorMap, context) {
    let pad = getParamValue('pad', node, tensorMap, context);
    if (pad === 'explicit') {
        // This is 1d array, we need to convert it to 2d array
        pad = getParamValue('explicitPaddings', node, tensorMap, context);
        const explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];
        for (let i = 0; i < 4; i++) {
            explicitPadding[i][0] = pad[i * 2];
            explicitPadding[i][1] = pad[i * 2 + 1];
        }
        return explicitPadding;
    }
    return pad;
}
/**
 *  Reuse the tensor if it is marked as keep, otherwise clone the tensor to
 *  avoid disposal. This is important for TensorArray and TensorList ops, since
 *  internally they use a tensor as the id for TensorArray and TensorList, and
 * to simplify lookup, they also use Tensor.id as the key to the internal map.
 * These id tensors have been marked as kept in the backend, we need avoid clone
 * them in order to create new Tensor.id.
 * @param tensor
 */
function cloneTensor(tensor) {
    return tensor.kept ? tensor : clone(tensor);
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
const json = [
    {
        'tfOpName': 'Add',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'AddV2',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'AddN',
        'category': 'arithmetic',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'BiasAdd',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Sub',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'RealDiv',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Div',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'DivNoNan',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'FloorDiv',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Mul',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Maximum',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Minimum',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Pow',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'SquaredDifference',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Mod',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'FloorMod',
        'category': 'arithmetic',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];

var arithmetic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json
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
const json$1 = [
    {
        'tfOpName': 'Abs',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Acos',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Asin',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atan',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atan2',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'y', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Ceil',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ClipByValue',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'clipValueMin', 'type': 'number' },
            { 'start': 2, 'name': 'clipValueMax', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Complex',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'real', 'type': 'tensor' },
            { 'start': 1, 'name': 'imag', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ComplexAbs',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Cos',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Cosh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Elu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Exp',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Floor',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Log',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Imag',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'outputType',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Neg',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Real',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'outputType',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Prelu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'alpha', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Relu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Relu6',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Selu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sigmoid',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sin',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sinh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sqrt',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Rsqrt',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Square',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Tan',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Tanh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Sign',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Round',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Expm1',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Log1p',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Reciprocal',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Softplus',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Asinh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Acosh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Atanh',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Erf',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Prod',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axes', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'keep_dims',
                'name': 'keepDims',
                'type': 'bool',
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LeakyRelu',
        'category': 'basic_math',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'alpha',
                'name': 'alpha',
                'type': 'number',
                'defaultValue': 0.2
            },
            {
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    }
];

var basicMath = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$1
});

const json$2 = [
    {
        'tfOpName': 'EmptyTensorList',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'elementShape', 'type': 'shape' },
            { 'start': 1, 'name': 'maxNumElements', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'LoopCond',
        'category': 'control',
        'inputs': [{ 'start': 0, 'name': 'pred', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Switch',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'data', 'type': 'tensor' },
            { 'start': 1, 'name': 'pred', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'Merge',
        'category': 'control',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Enter',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'frame_name', 'name': 'frameName', 'type': 'string' },
            { 'tfName': 'is_constant', 'name': 'isConstant', 'type': 'bool' }
        ]
    },
    {
        'tfOpName': 'Exit',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'NextIteration',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'TensorArrayV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'size', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' },
            { 'tfName': 'dynamic_size', 'name': 'dynamicSize', 'type': 'bool' },
            { 'tfName': 'clear_after_read', 'name': 'clearAfterRead', 'type': 'bool' },
            {
                'tfName': 'identical_element_shapes',
                'name': 'identicalElementShapes',
                'type': 'bool'
            },
            { 'tfName': 'tensor_array_name', 'name': 'name', 'type': 'string' }
        ]
    },
    {
        'tfOpName': 'TensorArrayWriteV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'TensorArrayReadV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{
                'tfName': 'dtype',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    },
    {
        'tfOpName': 'TensorArrayGatherV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' }
        ]
    },
    {
        'tfOpName': 'TensorArrayScatterV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorArrayConcatV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }, {
                'tfName': 'element_shape_except0',
                'name': 'elementShapeExcept0',
                'type': 'shape',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'TensorArraySplitV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 2, 'name': 'lengths', 'type': 'number[]' },
            { 'start': 3, 'name': 'flowIn', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorArraySizeV3',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' },
            { 'start': 1, 'name': 'flowIn', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'TensorArrayCloseV3',
        'category': 'control',
        'inputs': [{ 'start': 0, 'name': 'tensorArrayId', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'StatelessIf',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'cond', 'type': 'tensor' },
            { 'start': 1, 'end': 0, 'name': 'args', 'type': 'tensors' }
        ],
        'attrs': [
            { 'tfName': 'then_branch', 'name': 'thenBranch', 'type': 'func' },
            { 'tfName': 'else_branch', 'name': 'elseBranch', 'type': 'func' }
        ]
    },
    {
        'tfOpName': 'If',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'cond', 'type': 'tensor' },
            { 'start': 1, 'end': 0, 'name': 'args', 'type': 'tensors' }
        ],
        'attrs': [
            { 'tfName': 'then_branch', 'name': 'thenBranch', 'type': 'func' },
            { 'tfName': 'else_branch', 'name': 'elseBranch', 'type': 'func' }
        ]
    },
    {
        'tfOpName': 'StatelessWhile',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'end': 0, 'name': 'args', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'cond', 'name': 'cond', 'type': 'func' },
            { 'tfName': 'body', 'name': 'body', 'type': 'func' }
        ]
    },
    {
        'tfOpName': 'While',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'end': 0, 'name': 'args', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'cond', 'name': 'cond', 'type': 'func' },
            { 'tfName': 'body', 'name': 'body', 'type': 'func' }
        ]
    },
    {
        'tfOpName': 'TensorListScatter',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'elementShape', 'type': 'shape' }
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListScatterV2',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
            { 'start': 3, 'name': 'numElements', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListGather',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'number[]' },
            { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListGetItem',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'elementShape', 'type': 'shape' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListSetItem',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'index', 'type': 'number' },
            { 'start': 2, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListReserve',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'elementShape', 'type': 'shape' },
            { 'start': 1, 'name': 'numElements', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListFromTensor',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 1, 'name': 'elementShape', 'type': 'shape' }
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListStack',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
        ],
        'attrs': [
            { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' },
            { 'tfName': 'num_elements', 'name': 'numElements', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'TensorListSplit',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
            { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
            { 'start': 2, 'name': 'lengths', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListConcat',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'element_shape', 'name': 'elementShape', 'type': 'shape' },
            { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'TensorListPopBack',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'elementShape', 'type': 'shape' },
        ],
        'attrs': [{ 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TensorListPushBack',
        'category': 'control',
        'inputs': [
            { 'start': 0, 'name': 'tensorListId', 'type': 'tensor' },
            { 'start': 1, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'element_dtype', 'name': 'elementDType', 'type': 'dtype' }
        ]
    }
];

var control = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$2
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
const json$3 = [
    {
        'tfOpName': 'AvgPool',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'MaxPool',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' }, {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': [],
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'MaxPoolWithArgmax',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' }, {
                'tfName': 'include_batch_in_index',
                'name': 'includeBatchInIndex',
                'type': 'bool'
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'AvgPool3D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'MaxPool3D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            { 'tfName': 'ksize', 'name': 'kernelSize', 'type': 'number[]' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Conv1D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'stride', 'name': 'stride', 'type': 'number' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NWC'
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'dilation',
                'name': 'dilation',
                'type': 'number',
                'defaultValue': 1
            }
        ]
    },
    {
        'tfOpName': 'Conv2D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' },
            { 'tfName': 'useCudnnOnGpu', 'name': 'useCudnnOnGpu', 'type': 'bool' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': '_FusedConv2D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            },
            {
                'tfName': 'use_cudnn_on_gpu',
                'name': 'useCudnnOnGpu',
                'type': 'bool',
                'defaultValue': true
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            {
                'tfName': 'dilations',
                'name': 'dilations',
                'type': 'number[]',
                'defaultValue': [1, 1, 1, 1]
            },
            {
                'tfName': 'fused_ops',
                'name': 'fusedOps',
                'type': 'string[]',
                'defaultValue': []
            },
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.0001
            },
            {
                'tfName': 'leakyrelu_alpha',
                'name': 'leakyreluAlpha',
                'type': 'number'
            }
        ]
    },
    {
        'tfOpName': 'Conv2DBackpropInput',
        'category': 'convolution',
        'inputs': [
            { 'start': 2, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            { 'start': 0, 'name': 'outputShape', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            },
            {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            },
            {
                'tfName': 'dilations',
                'name': 'dilations',
                'type': 'number[]',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'DepthwiseConv2d',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'input', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'DepthwiseConv2dNative',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'input', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'FusedDepthwiseConv2dNative',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
            { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true },
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            {
                'tfName': 'dilations',
                'name': 'dilations',
                'type': 'number[]',
                'defaultValue': [1, 1, 1, 1]
            },
            {
                'tfName': 'fused_ops',
                'name': 'fusedOps',
                'type': 'string[]',
                'defaultValue': []
            },
            {
                'tfName': 'explicit_paddings',
                'name': 'explicitPaddings',
                'type': 'number[]',
                'defaultValue': []
            }
        ]
    },
    {
        'tfOpName': 'Conv3D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }, {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'defaultValue': 'NHWC'
            },
            { 'tfName': 'dilations', 'name': 'dilations', 'type': 'number[]' }
        ],
    },
    {
        'tfOpName': 'Dilation2D',
        'category': 'convolution',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'filter', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'strides', 'name': 'strides', 'type': 'number[]' },
            { 'tfName': 'rates', 'name': 'dilations', 'type': 'number[]' },
            { 'tfName': 'padding', 'name': 'pad', 'type': 'string' }
        ]
    }
];

var convolution = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$3
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
const json$4 = [
    {
        'tfOpName': 'Fill',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
            { 'start': 1, 'name': 'value', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'LinSpace',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'start', 'type': 'number' },
            { 'start': 1, 'name': 'stop', 'type': 'number' },
            { 'start': 2, 'name': 'num', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'OneHot',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'indices', 'type': 'tensor' },
            { 'start': 1, 'name': 'depth', 'type': 'number' },
            { 'start': 2, 'name': 'onValue', 'type': 'number', 'defaultValue': 1 },
            { 'start': 3, 'name': 'offValue', 'type': 'number', 'defaultValue': 0 },
        ],
        'attrs': [
            {
                'tfName': 'axis',
                'name': 'axis',
                'type': 'number',
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Ones',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'OnesLike',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{ 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'RandomUniform',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'minval',
                'name': 'minval',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'maxval',
                'name': 'maxval',
                'type': 'number',
                'defaultValue': 1
            },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'seed', 'name': 'seed', 'type': 'number', 'defaultValue': 0 }, {
                'tfName': 'seed2',
                'name': 'seed2',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            },
            { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Range',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'start', 'type': 'number' },
            { 'start': 1, 'name': 'stop', 'type': 'number' },
            { 'start': 2, 'name': 'step', 'type': 'number', 'defaultValue': 0 },
        ],
        'attrs': [{ 'tfName': 'Tidx', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'TruncatedNormal',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'means',
                'name': 'mean',
                'type': 'number',
                'defaultValue': 0.0
            },
            {
                'tfName': 'stddev',
                'name': 'stdDev',
                'type': 'number',
                'defaultValue': 1.0
            },
            { 'tfName': 'seed', 'name': 'seed', 'type': 'number' }, {
                'tfName': 'seed2',
                'name': 'seed2',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'T', 'name': 'T', 'type': 'number', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Zeros',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'ZerosLike',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{ 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' }]
    },
    {
        'tfOpName': 'Multinomial',
        'category': 'creation',
        'inputs': [
            { 'start': 0, 'name': 'logits', 'type': 'tensor' },
            { 'start': 1, 'name': 'numSamples', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'seed', 'name': 'seed', 'type': 'number' },
            { 'tfName': 'seed2', 'name': 'seed2', 'type': 'number' },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype' },
            { 'tfName': 'output_dtype', 'name': 'output_dtype', 'type': 'dtype' }
        ]
    }
];

var creation = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$4
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
const json$5 = [
    {
        'tfOpName': 'NonMaxSuppressionV2',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'NonMaxSuppressionV3',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
            { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'NonMaxSuppressionV4',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
            { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' }
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'T_threshold',
                'name': 'threshold',
                'type': 'dtype',
                'notSupported': true
            },
            {
                'tfName': 'pad_to_max_output_size',
                'name': 'padToMaxOutputSize',
                'type': 'bool'
            }
        ]
    },
    {
        'tfOpName': 'NonMaxSuppressionV5',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 1, 'name': 'scores', 'type': 'tensor' },
            { 'start': 2, 'name': 'maxOutputSize', 'type': 'number' },
            { 'start': 3, 'name': 'iouThreshold', 'type': 'number' },
            { 'start': 4, 'name': 'scoreThreshold', 'type': 'number' },
            { 'start': 5, 'name': 'softNmsSigma', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Where',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'condition', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ListDiff',
        'category': 'dynamic',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'y', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];

var dynamic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$5
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
const json$6 = [
    {
        'tfOpName': 'TopKV2',
        'category': 'evaluation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'k', 'type': 'number' },
        ],
        'attrs': [{ 'tfName': 'sorted', 'name': 'sorted', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Unique',
        'category': 'evaluation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
    },
    {
        'tfOpName': 'UniqueV2',
        'category': 'evaluation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' },
        ],
    },
];

var evaluation = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$6
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
const json$7 = [
    {
        'tfOpName': 'PlaceholderWithDefault',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'default', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'Placeholder',
        'category': 'graph',
        'attrs': [
            { 'tfName': 'shape', 'name': 'shape', 'type': 'shape' },
            { 'tfName': 'dtype', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    { 'tfOpName': 'Const', 'category': 'graph' }, {
        'tfOpName': 'Identity',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'IdentityN',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Snapshot',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Rank',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Size',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'Shape',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'ShapeN',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'end': 0, 'name': 'x', 'type': 'tensors' }]
    },
    {
        'tfOpName': 'Print',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'data', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'message', 'name': 'message', 'type': 'string' }, {
                'tfName': 'first_n',
                'name': 'firstN',
                'type': 'number',
                'notSupported': true
            },
            {
                'tfName': 'summarize',
                'name': 'summarize',
                'type': 'number',
                'defaultValue': 3
            }
        ]
    },
    { 'tfOpName': 'NoOp', 'category': 'graph', 'inputs': [] }, {
        'tfOpName': 'StopGradient',
        'category': 'graph',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'FakeQuantWithMinMaxVars',
        'category': 'graph',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'min', 'name': 'min', 'type': 'number' },
            { 'tfName': 'max', 'name': 'max', 'type': 'number' }
        ]
    }
];

var graph = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$7
});

const json$8 = [
    {
        'tfOpName': 'HashTable',
        'category': 'hash_table',
        'inputs': [],
        'attrs': [
            { 'tfName': 'shared_name', 'name': 'sharedName', 'type': 'string' },
            {
                'tfName': 'use_node_name_sharing',
                'name': 'useNodeNameSharing',
                'type': 'bool'
            },
            { 'tfName': 'key_dtype', 'name': 'keyDType', 'type': 'dtype' },
            { 'tfName': 'value_dtype', 'name': 'valueDType', 'type': 'dtype' },
        ]
    },
    {
        'tfOpName': 'HashTableV2',
        'category': 'hash_table',
        'inputs': [],
        'attrs': [
            { 'tfName': 'shared_name', 'name': 'sharedName', 'type': 'string' },
            {
                'tfName': 'use_node_name_sharing',
                'name': 'useNodeNameSharing',
                'type': 'bool'
            },
            { 'tfName': 'key_dtype', 'name': 'keyDType', 'type': 'dtype' },
            { 'tfName': 'value_dtype', 'name': 'valueDType', 'type': 'dtype' },
        ]
    },
    {
        'tfOpName': 'LookupTableImport',
        'category': 'hash_table',
        'inputs': [
            { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
            { 'start': 1, 'name': 'keys', 'type': 'tensor' },
            { 'start': 2, 'name': 'values', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'tOut',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LookupTableImportV2',
        'category': 'hash_table',
        'inputs': [
            { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
            { 'start': 1, 'name': 'keys', 'type': 'tensor' },
            { 'start': 2, 'name': 'values', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'tOut',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LookupTableFind',
        'category': 'hash_table',
        'inputs': [
            { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
            { 'start': 1, 'name': 'keys', 'type': 'tensor' },
            { 'start': 2, 'name': 'defaultValue', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'tOut',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LookupTableFindV2',
        'category': 'hash_table',
        'inputs': [
            { 'start': 0, 'name': 'tableHandle', 'type': 'tensor' },
            { 'start': 1, 'name': 'keys', 'type': 'tensor' },
            { 'start': 2, 'name': 'defaultValue', 'type': 'tensor' }
        ],
        'attrs': [
            { 'tfName': 'Tin', 'name': 'tIn', 'type': 'dtype', 'notSupported': true }, {
                'tfName': 'Tout',
                'name': 'tOut',
                'type': 'dtype',
                'notSupported': true
            }
        ]
    }
];

var hashTable = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$8
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
const json$9 = [
    {
        'tfOpName': 'ResizeBilinear',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'images', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' }, {
                'tfName': 'half_pixel_centers',
                'name': 'halfPixelCenters',
                'type': 'bool'
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'ResizeNearestNeighbor',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'images', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'align_corners', 'name': 'alignCorners', 'type': 'bool' }, {
                'tfName': 'half_pixel_centers',
                'name': 'halfPixelCenters',
                'type': 'bool'
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'CropAndResize',
        'category': 'image',
        'inputs': [
            { 'start': 0, 'name': 'image', 'type': 'tensor' },
            { 'start': 1, 'name': 'boxes', 'type': 'tensor' },
            { 'start': 2, 'name': 'boxInd', 'type': 'tensor' },
            { 'start': 3, 'name': 'cropSize', 'type': 'number[]' },
        ],
        'attrs': [
            { 'tfName': 'method', 'name': 'method', 'type': 'string' }, {
                'tfName': 'extrapolation_value',
                'name': 'extrapolationValue',
                'type': 'number'
            }
        ]
    }
];

var image = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$9
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
const json$a = [
    {
        'tfOpName': 'Equal',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'NotEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Greater',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'GreaterEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Less',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LessEqual',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalAnd',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalNot',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'LogicalOr',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Select',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'condition', 'type': 'tensor' },
            { 'start': 1, 'name': 'a', 'type': 'tensor' },
            { 'start': 2, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'SelectV2',
        'category': 'logical',
        'inputs': [
            { 'start': 0, 'name': 'condition', 'type': 'tensor' },
            { 'start': 1, 'name': 'a', 'type': 'tensor' },
            { 'start': 2, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];

var logical = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$a
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
const json$b = [
    {
        'tfOpName': '_FusedMatMul',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
            { 'start': 2, end: 0, 'name': 'args', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'num_args', 'name': 'numArgs', 'type': 'number' }, {
                'tfName': 'fused_ops',
                'name': 'fusedOps',
                'type': 'string[]',
                'defaultValue': []
            },
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.0001
            },
            {
                'tfName': 'transpose_a',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'transpose_b',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'MatMul',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'transpose_a',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'transpose_b',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'BatchMatMul',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'adj_x',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'adj_y',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'BatchMatMulV2',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'a', 'type': 'tensor' },
            { 'start': 1, 'name': 'b', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'adj_x',
                'name': 'transposeA',
                'type': 'bool',
                'defaultValue': false
            },
            {
                'tfName': 'adj_y',
                'name': 'transposeB',
                'type': 'bool',
                'defaultValue': false
            },
            { 'tfName': 'T', 'name': 'dtype', 'type': 'dtype', 'notSupported': true }
        ]
    },
    {
        'tfOpName': 'Transpose',
        'category': 'matrices',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'perm', 'type': 'number[]' },
        ],
        'attrs': [{
                'tfName': 'T',
                'name': 'dtype',
                'type': 'dtype',
                'notSupported': true
            }]
    }
];

var matrices = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$b
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
const json$c = [
    {
        'tfOpName': 'FusedBatchNorm',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'scale', 'type': 'tensor' },
            { 'start': 2, 'name': 'offset', 'type': 'tensor' },
            { 'start': 3, 'name': 'mean', 'type': 'tensor' },
            { 'start': 4, 'name': 'variance', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'FusedBatchNormV2',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'scale', 'type': 'tensor' },
            { 'start': 2, 'name': 'offset', 'type': 'tensor' },
            { 'start': 3, 'name': 'mean', 'type': 'tensor' },
            { 'start': 4, 'name': 'variance', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'FusedBatchNormV3',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'scale', 'type': 'tensor' },
            { 'start': 2, 'name': 'offset', 'type': 'tensor' },
            { 'start': 3, 'name': 'mean', 'type': 'tensor' },
            { 'start': 4, 'name': 'variance', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'epsilon',
                'name': 'epsilon',
                'type': 'number',
                'defaultValue': 0.001
            },
            {
                'tfName': 'data_format',
                'name': 'dataFormat',
                'type': 'string',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'LRN',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'depth_radius',
                'name': 'radius',
                'type': 'number',
                'defaultValue': 5
            },
            { 'tfName': 'bias', 'name': 'bias', 'type': 'number', 'defaultValue': 1.0 },
            {
                'tfName': 'alpha',
                'name': 'alpha',
                'type': 'number',
                'defaultValue': 1.0
            },
            {
                'tfName': 'beta',
                'name': 'beta',
                'type': 'number',
                'defaultValue': 0.5
            }
        ]
    },
    {
        'tfOpName': 'Softmax',
        'category': 'normalization',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'LogSoftmax',
        'category': 'normalization',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'SparseToDense',
        'category': 'normalization',
        'inputs': [
            { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
            { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
            { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'defaultValue': true,
                'notSupported': true
            }]
    }
];

var normalization = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$c
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
const json$d = [
    {
        'tfOpName': 'Bincount',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number' },
            { 'start': 2, 'name': 'weights', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'DenseBincount',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'size', 'type': 'number' },
            { 'start': 2, 'name': 'weights', 'type': 'tensor' }
        ],
        'attrs': [{ 'tfName': 'binary_output', 'name': 'binaryOutput', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Max',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Mean',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Min',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Sum',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'All',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Any',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'ArgMax',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'ArgMin',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'Prod',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'keep_dims', 'name': 'keepDims', 'type': 'bool' }]
    },
    {
        'tfOpName': 'Cumsum',
        'category': 'reduction',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' },
        ],
        'attrs': [
            { 'tfName': 'exclusive', 'name': 'exclusive', 'type': 'bool' },
            { 'tfName': 'reverse', 'name': 'reverse', 'type': 'bool' }
        ]
    }
];

var reduction = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$d
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
const json$e = [
    {
        'tfOpName': 'ConcatV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'end': -1, 'name': 'tensors', 'type': 'tensors' },
            { 'start': -1, 'name': 'axis', 'type': 'number' }
        ],
        'attrs': [{ 'tfName': 'N', 'name': 'n', 'type': 'number', 'defaultValue': 2 }]
    },
    {
        'tfOpName': 'Concat',
        'category': 'slice_join',
        'inputs': [
            { 'start': 1, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
            { 'start': 0, 'name': 'axis', 'type': 'number' }
        ],
        'attrs': [{ 'tfName': 'N', 'name': 'n', 'type': 'number', 'defaultValue': 2 }]
    },
    {
        'tfOpName': 'GatherV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' },
            { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ],
        'attrs': [{
                'tfName': 'batch_dims',
                'name': 'batchDims',
                'type': 'number',
                'defaultValue': 0
            }]
    },
    {
        'tfOpName': 'Gather',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'notSupported': true
            }]
    },
    {
        'tfOpName': 'Reverse',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'dims', 'type': 'bool[]' }
        ]
    },
    {
        'tfOpName': 'ReverseV2',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Slice',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'begin', 'type': 'number[]' },
            { 'start': 2, 'name': 'size', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'StridedSlice',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'begin', 'type': 'number[]' },
            { 'start': 2, 'name': 'end', 'type': 'number[]' },
            { 'start': 3, 'name': 'strides', 'type': 'number[]' },
        ],
        'attrs': [
            {
                'tfName': 'begin_mask',
                'name': 'beginMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'end_mask',
                'name': 'endMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'new_axis_mask',
                'name': 'newAxisMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'ellipsis_mask',
                'name': 'ellipsisMask',
                'type': 'number',
                'defaultValue': 0
            },
            {
                'tfName': 'shrink_axis_mask',
                'name': 'shrinkAxisMask',
                'type': 'number',
                'defaultValue': 0
            }
        ]
    },
    {
        'tfOpName': 'Pack',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'end': 0, 'name': 'tensors', 'type': 'tensors' },
        ],
        'attrs': [
            { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ]
    },
    {
        'tfOpName': 'Unpack',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'tensor', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'axis', 'name': 'axis', 'type': 'number', 'defaultValue': 0 }, {
                'tfName': 'num',
                'name': 'num',
                'type': 'number',
                'defaultValue': 0,
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'Tile',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'reps', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Split',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'axis', 'type': 'number', 'defaultValue': 0 },
            { 'start': 1, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'num_split',
                'name': 'numOrSizeSplits',
                'type': 'number',
                'defaultValue': 1
            }]
    },
    {
        'tfOpName': 'SplitV',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'numOrSizeSplits', 'type': 'number[]' },
            { 'start': 2, 'name': 'axis', 'type': 'number', 'defaultValue': 0 }
        ]
    },
    {
        'tfOpName': 'ScatterNd',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'indices', 'type': 'tensor' },
            { 'start': 1, 'name': 'values', 'type': 'tensor' },
            { 'start': 2, 'name': 'shape', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'GatherNd',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'indices', 'type': 'tensor' }
        ]
    },
    {
        'tfOpName': 'SparseToDense',
        'category': 'slice_join',
        'inputs': [
            { 'start': 0, 'name': 'sparseIndices', 'type': 'tensor' },
            { 'start': 1, 'name': 'outputShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'sparseValues', 'type': 'tensor' },
            { 'start': 3, 'name': 'defaultValue', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'validate_indices',
                'name': 'validateIndices',
                'type': 'bool',
                'defaultValue': false,
                'notSupported': true
            }]
    }
];

var sliceJoin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$e
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
const json$f = [
    {
        'tfOpName': 'FFT',
        'category': 'spectral',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'IFFT',
        'category': 'spectral',
        'inputs': [{ 'start': 0, 'name': 'x', 'type': 'tensor' }]
    },
    {
        'tfOpName': 'RFFT',
        'category': 'spectral',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                'start': 1,
                'name': 'fft_length',
                'type': 'number',
                'notSupported': true
            }
        ]
    },
    {
        'tfOpName': 'IRFFT',
        'category': 'spectral',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' }, {
                'start': 1,
                'name': 'fft_length',
                'type': 'number',
                'notSupported': true
            }
        ]
    }
];

var spectral = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$f
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
const json$g = [
    {
        'tfOpName': 'Cast',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            {
                'tfName': 'SrcT',
                'name': 'sdtype',
                'type': 'dtype',
                'notSupported': true
            },
            { 'tfName': 'DstT', 'name': 'dtype', 'type': 'dtype' }
        ]
    },
    {
        'tfOpName': 'ExpandDims',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'axis', 'type': 'number' }
        ]
    },
    {
        'tfOpName': 'MirrorPad',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'padding', 'type': 'number[]' },
        ],
        'attrs': [{ 'tfName': 'mode', 'name': 'mode', 'type': 'string' }]
    },
    {
        'tfOpName': 'Pad',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'padding', 'type': 'number[]' },
        ],
        'attrs': [{
                'tfName': 'constant_value',
                'name': 'constantValue',
                'type': 'number',
                'defaultValue': 0
            }]
    },
    {
        'tfOpName': 'PadV2',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'padding', 'type': 'number[]' }, {
                'start': 2,
                'name': 'constantValue',
                'type': 'number',
                'defaultValue': 0
            }
        ]
    },
    {
        'tfOpName': 'Reshape',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'shape', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'Squeeze',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [{
                'tfName': 'axis',
                'tfDeprecatedName': 'squeeze_dims',
                'name': 'axis',
                'type': 'number[]'
            }]
    },
    {
        'tfOpName': 'SpaceToBatchND',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'paddings', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'BatchToSpaceND',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'blockShape', 'type': 'number[]' },
            { 'start': 2, 'name': 'crops', 'type': 'number[]' }
        ]
    },
    {
        'tfOpName': 'DepthToSpace',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
        ],
        'attrs': [
            { 'tfName': 'block_size', 'name': 'blockSize', 'type': 'number' },
            { 'tfName': 'data_format', 'name': 'dataFormat', 'type': 'string' }
        ]
    },
    {
        'tfOpName': 'BroadcastTo',
        'category': 'transformation',
        'inputs': [
            { 'start': 0, 'name': 'x', 'type': 'tensor' },
            { 'start': 1, 'name': 'shape', 'type': 'number[]' },
        ],
        'attrs': []
    }
];

var transformation = /*#__PURE__*/Object.freeze({
    __proto__: null,
    json: json$g
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
class OperationMapper {
    // Singleton instance for the mapper
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    // Loads the op mapping from the JSON file.
    constructor() {
        const ops = [
            arithmetic, basicMath, control, convolution, creation, dynamic,
            evaluation, logical, image, graph, matrices, normalization, reduction,
            sliceJoin, spectral, transformation, hashTable
        ];
        const mappersJson = [].concat(...ops.map(op => op.json));
        this.opMappers = mappersJson.reduce((map, mapper) => {
            map[mapper.tfOpName] = mapper;
            return map;
        }, {});
    }
    // Converts the model inference graph from Tensorflow GraphDef to local
    // representation for TensorFlow.js API
    transformGraph(graph, signature = {}) {
        const tfNodes = graph.node;
        const placeholders = [];
        const weights = [];
        const initNodes = [];
        const nodes = tfNodes.reduce((map, node) => {
            map[node.name] = this.mapNode(node);
            if (node.op.startsWith('Placeholder')) {
                placeholders.push(map[node.name]);
            }
            else if (node.op === 'Const') {
                weights.push(map[node.name]);
            }
            else if (node.input == null || node.input.length === 0) {
                initNodes.push(map[node.name]);
            }
            return map;
        }, {});
        let inputs = [];
        const outputs = [];
        let inputNodeNameToKey = {};
        let outputNodeNameToKey = {};
        if (signature != null) {
            inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
            outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
        }
        const allNodes = Object.keys(nodes);
        allNodes.forEach(key => {
            const node = nodes[key];
            node.inputNames.forEach(name => {
                const [nodeName,] = getNodeNameAndIndex(name);
                node.inputs.push(nodes[nodeName]);
                nodes[nodeName].children.push(node);
            });
        });
        // if signature has not outputs set, add any node that does not have
        // outputs.
        if (Object.keys(outputNodeNameToKey).length === 0) {
            allNodes.forEach(key => {
                const node = nodes[key];
                if (node.children.length === 0) {
                    outputs.push(node);
                }
            });
        }
        else {
            Object.keys(outputNodeNameToKey).forEach(name => {
                const [nodeName,] = getNodeNameAndIndex(name);
                const node = nodes[nodeName];
                if (node != null) {
                    node.signatureKey = outputNodeNameToKey[name];
                    outputs.push(node);
                }
            });
        }
        if (Object.keys(inputNodeNameToKey).length > 0) {
            Object.keys(inputNodeNameToKey).forEach(name => {
                const [nodeName,] = getNodeNameAndIndex(name);
                const node = nodes[nodeName];
                if (node) {
                    node.signatureKey = inputNodeNameToKey[name];
                    inputs.push(node);
                }
            });
        }
        else {
            inputs = placeholders;
        }
        let functions = {};
        if (graph.library != null && graph.library.function != null) {
            functions = graph.library.function.reduce((functions, func) => {
                functions[func.signature.name] = this.mapFunction(func);
                return functions;
            }, {});
        }
        const result = { nodes, inputs, outputs, weights, placeholders, signature, functions };
        if (initNodes.length > 0) {
            result.initNodes = initNodes;
        }
        return result;
    }
    mapSignatureEntries(entries) {
        return Object.keys(entries || {})
            .reduce((prev, curr) => {
            prev[entries[curr].name] = curr;
            return prev;
        }, {});
    }
    mapNode(node) {
        // Unsupported ops will cause an error at run-time (not parse time), since
        // they may not be used by the actual execution subgraph.
        const mapper = getRegisteredOp(node.op) || this.opMappers[node.op] || {};
        if (node.attr == null) {
            node.attr = {};
        }
        const newNode = {
            name: node.name,
            op: node.op,
            category: mapper.category,
            inputNames: (node.input ||
                []).map(input => input.startsWith('^') ? input.substr(1) : input),
            inputs: [],
            children: [],
            inputParams: {},
            attrParams: {},
            rawAttrs: node.attr
        };
        if (mapper.inputs != null) {
            newNode.inputParams =
                mapper.inputs.reduce((map, param) => {
                    map[param.name] = {
                        type: param.type,
                        inputIndexStart: param.start,
                        inputIndexEnd: param.end
                    };
                    return map;
                }, {});
        }
        if (mapper.attrs != null) {
            newNode.attrParams =
                mapper.attrs.reduce((map, param) => {
                    const type = param.type;
                    let value = undefined;
                    switch (param.type) {
                        case 'string':
                            value = getStringParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'string[]':
                            value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'number':
                            value = getNumberParam(node.attr, param.tfName, (param.defaultValue || 0));
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'number[]':
                            value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'bool':
                            value = getBoolParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'bool[]':
                            value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'shape':
                            value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'shape[]':
                            value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'dtype':
                            value = getDtypeParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'dtype[]':
                            value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'func':
                            value = getFuncParam(node.attr, param.tfName, param.defaultValue);
                            if (value === undefined && !!param.tfDeprecatedName) {
                                value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
                            }
                            break;
                        case 'tensor':
                        case 'tensors':
                            break;
                        default:
                            throw new Error(`Unsupported param type: ${param.type} for op: ${node.op}`);
                    }
                    map[param.name] = { value, type };
                    return map;
                }, {});
        }
        return newNode;
    }
    // map the TFunctionDef to TFJS graph object
    mapFunction(functionDef) {
        const tfNodes = functionDef.nodeDef;
        const placeholders = [];
        const weights = [];
        let nodes = {};
        if (tfNodes != null) {
            nodes = tfNodes.reduce((map, node) => {
                map[node.name] = this.mapNode(node);
                if (node.op === 'Const') {
                    weights.push(map[node.name]);
                }
                return map;
            }, {});
        }
        const inputs = [];
        const outputs = [];
        functionDef.signature.inputArg.forEach(arg => {
            const [nodeName,] = getNodeNameAndIndex(arg.name);
            const node = {
                name: nodeName,
                op: 'Placeholder',
                inputs: [],
                inputNames: [],
                category: 'graph',
                inputParams: {},
                attrParams: { dtype: { value: parseDtypeParam(arg.type), type: 'dtype' } },
                children: []
            };
            node.signatureKey = arg.name;
            inputs.push(node);
            nodes[nodeName] = node;
        });
        const allNodes = Object.keys(nodes);
        allNodes.forEach(key => {
            const node = nodes[key];
            node.inputNames.forEach(name => {
                const [nodeName,] = getNodeNameAndIndex(name);
                node.inputs.push(nodes[nodeName]);
                nodes[nodeName].children.push(node);
            });
        });
        const returnNodeMap = functionDef.ret;
        functionDef.signature.outputArg.forEach(output => {
            const [nodeName, index] = getNodeNameAndIndex(returnNodeMap[output.name]);
            const node = nodes[nodeName];
            if (node != null) {
                node.defaultOutput = index;
                outputs.push(node);
            }
        });
        const signature = this.mapArgsToSignature(functionDef);
        return { nodes, inputs, outputs, weights, placeholders, signature };
    }
    mapArgsToSignature(functionDef) {
        return {
            methodName: functionDef.signature.name,
            inputs: functionDef.signature.inputArg.reduce((map, arg) => {
                map[arg.name] = this.mapArgToTensorInfo(arg);
                return map;
            }, {}),
            outputs: functionDef.signature.outputArg.reduce((map, arg) => {
                map[arg.name] = this.mapArgToTensorInfo(arg, functionDef.ret);
                return map;
            }, {}),
        };
    }
    mapArgToTensorInfo(arg, nameMap) {
        let name = arg.name;
        if (nameMap != null) {
            name = nameMap[name];
        }
        return { name, dtype: arg.type };
    }
}
function decodeBase64(text) {
    const global = env().global;
    if (typeof global.atob !== 'undefined') {
        return global.atob(text);
    }
    else if (typeof Buffer !== 'undefined') {
        return new Buffer(text, 'base64').toString();
    }
    else {
        throw new Error('Unable to decode base64 in this environment. ' +
            'Missing built-in atob() or Buffer()');
    }
}
function parseStringParam(s, keepCase) {
    const value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
    return keepCase ? value : value.toLowerCase();
}
function getStringParam(attrs, name, def, keepCase = false) {
    const param = attrs[name];
    if (param != null) {
        return parseStringParam(param.s, keepCase);
    }
    return def;
}
function getBoolParam(attrs, name, def) {
    const param = attrs[name];
    return param ? param.b : def;
}
function getNumberParam(attrs, name, def) {
    const param = attrs[name] || {};
    const value = param['i'] != null ? param['i'] : (param['f'] != null ? param['f'] : def);
    return (typeof value === 'number') ? value : parseInt(value, 10);
}
function parseDtypeParam(value) {
    if (typeof (value) === 'string') {
        // tslint:disable-next-line:no-any
        value = DataType[value];
    }
    switch (value) {
        case DataType.DT_FLOAT:
            return 'float32';
        case DataType.DT_INT32:
        case DataType.DT_INT64:
        case DataType.DT_INT8:
        case DataType.DT_UINT8:
            return 'int32';
        case DataType.DT_BOOL:
            return 'bool';
        case DataType.DT_DOUBLE:
            return 'float32';
        case DataType.DT_STRING:
            return 'string';
        default:
            // Unknown dtype error will happen at runtime (instead of parse time),
            // since these nodes might not be used by the actual subgraph execution.
            return null;
    }
}
function getFuncParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.func) {
        return param.func.name;
    }
    return def;
}
function getDtypeParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.type) {
        return parseDtypeParam(param.type);
    }
    return def;
}
function getDtypeArrayParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.list && param.list.type) {
        return param.list.type.map(v => parseDtypeParam(v));
    }
    return def;
}
function parseTensorShapeParam(shape) {
    if (shape.unknownRank) {
        return undefined;
    }
    if (shape.dim != null) {
        return shape.dim.map(dim => (typeof dim.size === 'number') ? dim.size : parseInt(dim.size, 10));
    }
    return [];
}
function getTensorShapeParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.shape) {
        return parseTensorShapeParam(param.shape);
    }
    return def;
}
function getNumericArrayParam(attrs, name, def) {
    const param = attrs[name];
    if (param) {
        return ((param.list.f && param.list.f.length ? param.list.f :
            param.list.i) ||
            [])
            .map(v => (typeof v === 'number') ? v : parseInt(v, 10));
    }
    return def;
}
function getStringArrayParam(attrs, name, def, keepCase = false) {
    const param = attrs[name];
    if (param && param.list && param.list.s) {
        return param.list.s.map((v) => {
            return parseStringParam(v, keepCase);
        });
    }
    return def;
}
function getTensorShapeArrayParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.list && param.list.shape) {
        return param.list.shape.map((v) => {
            return parseTensorShapeParam(v);
        });
    }
    return def;
}
function getBoolArrayParam(attrs, name, def) {
    const param = attrs[name];
    if (param && param.list && param.list.b) {
        return param.list.b;
    }
    return def;
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
/**
 * Helper class for lookup inputs and params for nodes in the model graph.
 */
class NodeValueImpl {
    constructor(node, tensorMap, context) {
        this.node = node;
        this.tensorMap = tensorMap;
        this.context = context;
        this.inputs = [];
        this.attrs = {};
        this.inputs = node.inputNames.map(name => this.getInput(name));
        if (node.rawAttrs != null) {
            this.attrs = Object.keys(node.rawAttrs)
                .reduce((attrs, key) => {
                attrs[key] = this.getAttr(key);
                return attrs;
            }, {});
        }
    }
    /**
     * Return the value of the attribute or input param.
     * @param name String: name of attribute or input param.
     */
    getInput(name) {
        return getTensor(name, this.tensorMap, this.context);
    }
    /**
     * Return the value of the attribute or input param.
     * @param name String: name of attribute or input param.
     */
    getAttr(name, defaultValue) {
        const value = this.node.rawAttrs[name];
        if (value.tensor != null) {
            return getTensor(name, this.tensorMap, this.context);
        }
        if (value.i != null || value.f != null) {
            return getNumberParam(this.node.rawAttrs, name, defaultValue);
        }
        if (value.s != null) {
            return getStringParam(this.node.rawAttrs, name, defaultValue);
        }
        if (value.b != null) {
            return getBoolParam(this.node.rawAttrs, name, defaultValue);
        }
        if (value.shape != null) {
            return getTensorShapeParam(this.node.rawAttrs, name, defaultValue);
        }
        if (value.type != null) {
            return getDtypeParam(this.node.rawAttrs, name, defaultValue);
        }
        if (value.list != null) {
            if (value.list.i != null || value.list.f != null) {
                return getNumericArrayParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.list.s != null) {
                return getStringArrayParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.list.shape != null) {
                return getTensorShapeArrayParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.list.b != null) {
                return getBoolArrayParam(this.node.rawAttrs, name, defaultValue);
            }
            if (value.list.type != null) {
                return getDtypeArrayParam(this.node.rawAttrs, name, defaultValue);
            }
        }
        return defaultValue;
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
const executeOp = (node, tensorMap, context) => {
    switch (node.op) {
        case 'BiasAdd':
        case 'AddV2':
        case 'Add': {
            return [add(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'AddN': {
            return [addN(getParamValue('tensors', node, tensorMap, context))];
        }
        case 'FloorMod':
        case 'Mod':
            return [mod(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        case 'Mul':
            return [mul(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        case 'RealDiv':
        case 'Div': {
            return [div(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'DivNoNan': {
            return [divNoNan(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'FloorDiv': {
            return [floorDiv(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Sub': {
            return [sub(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Minimum': {
            return [minimum(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Maximum': {
            return [maximum(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Pow': {
            return [pow(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'SquaredDifference': {
            return [squaredDifference(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$1 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Abs':
        case 'ComplexAbs':
            return [abs(getParamValue('x', node, tensorMap, context))];
        case 'Acos':
            return [acos(getParamValue('x', node, tensorMap, context))];
        case 'Acosh':
            return [acosh(getParamValue('x', node, tensorMap, context))];
        case 'Asin':
            return [asin(getParamValue('x', node, tensorMap, context))];
        case 'Asinh':
            return [asinh(getParamValue('x', node, tensorMap, context))];
        case 'Atan':
            return [atan(getParamValue('x', node, tensorMap, context))];
        case 'Atan2':
            return [atan2(getParamValue('x', node, tensorMap, context), getParamValue('y', node, tensorMap, context))];
        case 'Atanh':
            return [atanh(getParamValue('x', node, tensorMap, context))];
        case 'Ceil':
            return [ceil(getParamValue('x', node, tensorMap, context))];
        case 'Complex':
            return [complex(getParamValue('real', node, tensorMap, context), getParamValue('imag', node, tensorMap, context))];
        case 'Cos':
            return [cos(getParamValue('x', node, tensorMap, context))];
        case 'Cosh':
            return [cosh(getParamValue('x', node, tensorMap, context))];
        case 'Elu':
            return [elu(getParamValue('x', node, tensorMap, context))];
        case 'Erf':
            return [erf(getParamValue('x', node, tensorMap, context))];
        case 'Exp':
            return [exp(getParamValue('x', node, tensorMap, context))];
        case 'Expm1': {
            return [expm1(getParamValue('x', node, tensorMap, context))];
        }
        case 'Floor':
            return [floor(getParamValue('x', node, tensorMap, context))];
        case 'Log':
            return [log(getParamValue('x', node, tensorMap, context))];
        case 'Log1p': {
            return [log1p(getParamValue('x', node, tensorMap, context))];
        }
        case 'Imag':
            return [imag(getParamValue('x', node, tensorMap, context))];
        case 'Neg':
            return [neg(getParamValue('x', node, tensorMap, context))];
        case 'Reciprocal': {
            return [reciprocal(getParamValue('x', node, tensorMap, context))];
        }
        case 'Real':
            return [real(getParamValue('x', node, tensorMap, context))];
        case 'Relu':
            return [relu(getParamValue('x', node, tensorMap, context))];
        case 'Round': {
            return [round(getParamValue('x', node, tensorMap, context))];
        }
        case 'Selu':
            return [selu(getParamValue('x', node, tensorMap, context))];
        case 'Sigmoid':
            return [sigmoid(getParamValue('x', node, tensorMap, context))];
        case 'Sin':
            return [sin(getParamValue('x', node, tensorMap, context))];
        case 'Sign': {
            return [sign(getParamValue('x', node, tensorMap, context))];
        }
        case 'Sinh': {
            return [sinh(getParamValue('x', node, tensorMap, context))];
        }
        case 'Softplus': {
            return [softplus(getParamValue('x', node, tensorMap, context))];
        }
        case 'Sqrt': {
            return [sqrt(getParamValue('x', node, tensorMap, context))];
        }
        case 'Square': {
            return [square(getParamValue('x', node, tensorMap, context))];
        }
        case 'Tanh': {
            return [tanh(getParamValue('x', node, tensorMap, context))];
        }
        case 'Tan':
            return [tan(getParamValue('x', node, tensorMap, context))];
        case 'ClipByValue':
            return [clipByValue(getParamValue('x', node, tensorMap, context), getParamValue('clipValueMin', node, tensorMap, context), getParamValue('clipValueMax', node, tensorMap, context))];
        case 'Relu6':
            return [relu6(getParamValue('x', node, tensorMap, context))];
        case 'Rsqrt':
            return [rsqrt(getTensor(node.inputNames[0], tensorMap, context))];
        case 'Prod':
            return [prod(getParamValue('x', node, tensorMap, context), getParamValue('axes', node, tensorMap, context))];
        case 'LeakyRelu':
            return [leakyRelu(getParamValue('x', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context))];
        case 'Prelu':
            return [prelu(getParamValue('x', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context))];
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = '') {
    assert(shapesEqualAllowUndefinedSize(shapeA, shapeB), () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
}
function shapesEqualAllowUndefinedSize(n1, n2) {
    if (n1.length !== n2.length) {
        return false;
    }
    for (let i = 0; i < n1.length; i++) {
        if (n1[i] !== -1 && n2[i] !== -1 && n1[i] !== n2[i]) {
            return false;
        }
    }
    return true;
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
 * The TensorArray object keeps an array of Tensors.  It
 * allows reading from the array and writing to the array.
 */
class TensorArray {
    constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
        this.name = name;
        this.dtype = dtype;
        this.maxSize = maxSize;
        this.elementShape = elementShape;
        this.identicalElementShapes = identicalElementShapes;
        this.dynamicSize = dynamicSize;
        this.clearAfterRead = clearAfterRead;
        this.tensors = [];
        this.closed_ = false;
        this.idTensor = scalar(0);
        keep(this.idTensor);
    }
    get id() {
        return this.idTensor.id;
    }
    get closed() {
        return this.closed_;
    }
    /**
     * Dispose the tensors and idTensor and mark the TensoryArray as closed.
     */
    clearAndClose(keepIds) {
        this.tensors.forEach(tensor => {
            if (keepIds == null || !keepIds.has(tensor.tensor.id)) {
                tensor.tensor.dispose();
            }
        });
        this.tensors = [];
        this.closed_ = true;
        this.idTensor.dispose();
    }
    size() {
        return this.tensors.length;
    }
    /**
     * Read the value at location index in the TensorArray.
     * @param index Number the index to read from.
     */
    read(index) {
        if (this.closed_) {
            throw new Error(`TensorArray ${this.name} has already been closed.`);
        }
        if (index < 0 || index >= this.size()) {
            throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
        }
        const tensorWithState = this.tensors[index];
        if (tensorWithState.cleared) {
            throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read ` +
                `(perhaps try setting clear_after_read = false?).`);
        }
        if (this.clearAfterRead) {
            tensorWithState.cleared = true;
        }
        tensorWithState.read = true;
        return tensorWithState.tensor;
    }
    /**
     * Helper method to read multiple tensors from the specified indices.
     */
    readMany(indices) {
        return indices.map(index => this.read(index));
    }
    /**
     * Write value into the index of the TensorArray.
     * @param index number the index to write to.
     * @param tensor
     */
    write(index, tensor) {
        if (this.closed_) {
            throw new Error(`TensorArray ${this.name} has already been closed.`);
        }
        if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
            throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
        }
        const t = this.tensors[index] || {};
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor.dtype}, but TensorArray dtype is ${this.dtype}.`);
        }
        // Set the shape for the first time write to unknow shape tensor array
        if (this.size() === 0 &&
            (this.elementShape == null || this.elementShape.length === 0)) {
            this.elementShape = tensor.shape;
        }
        assertShapesMatchAllowUndefinedSize(this.elementShape, tensor.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);
        if (t.read) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
        }
        if (t.written) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
        }
        t.tensor = tensor;
        keep(tensor);
        t.written = true;
        this.tensors[index] = t;
    }
    /**
     * Helper method to write multiple tensors to the specified indices.
     */
    writeMany(indices, tensors) {
        if (indices.length !== tensors.length) {
            throw new Error(`TensorArray ${this.name}: could not write multiple tensors,` +
                `because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
        }
        indices.forEach((i, index) => this.write(i, tensors[index]));
    }
    /**
     * Return selected values in the TensorArray as a packed Tensor. All of
     * selected values must have been written and their shapes must all match.
     * @param [indices] number[] Optional. Taking values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size(). If not specified returns
     *    all tensors in the original order.
     * @param [dtype]
     */
    gather(indices, dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
        }
        if (!indices) {
            indices = [];
            for (let i = 0; i < this.size(); i++) {
                indices.push(i);
            }
        }
        else {
            indices = indices.slice(0, this.size());
        }
        if (indices.length === 0) {
            return tensor([], [0].concat(this.elementShape));
        }
        // Read all the PersistentTensors into a vector to keep track of
        // their memory.
        const tensors = this.readMany(indices);
        assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
        return stack(tensors, 0);
    }
    /**
     * Return the values in the TensorArray as a concatenated Tensor.
     */
    concat(dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
        }
        if (this.size() === 0) {
            return tensor([], [0].concat(this.elementShape));
        }
        const indices = [];
        for (let i = 0; i < this.size(); i++) {
            indices.push(i);
        }
        // Collect all the tensors from the tensors array.
        const tensors = this.readMany(indices);
        assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
        return concat(tensors, 0);
    }
    /**
     * Scatter the values of a Tensor in specific indices of a TensorArray.
     * @param indices nummber[] values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size().
     * @param tensor Tensor input tensor.
     */
    scatter(indices, tensor) {
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
        }
        if (indices.length !== tensor.shape[0]) {
            throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
        }
        const maxIndex = Math.max(...indices);
        if (!this.dynamicSize && maxIndex >= this.maxSize) {
            throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
        }
        this.writeMany(indices, unstack(tensor, 0));
    }
    /**
     * Split the values of a Tensor into the TensorArray.
     * @param length number[] with the lengths to use when splitting value along
     *    its first dimension.
     * @param tensor Tensor, the tensor to split.
     */
    split(length, tensor) {
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
        }
        let totalLength = 0;
        const cumulativeLengths = length.map(len => {
            totalLength += len;
            return totalLength;
        });
        if (totalLength !== tensor.shape[0]) {
            throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
        }
        if (!this.dynamicSize && length.length !== this.maxSize) {
            throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), ` +
                'and the TensorArray is not marked as dynamically resizeable');
        }
        const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
        const tensors = [];
        tidy(() => {
            tensor = reshape(tensor, [1, totalLength, elementPerRow]);
            for (let i = 0; i < length.length; ++i) {
                const previousLength = (i === 0) ? 0 : cumulativeLengths[i - 1];
                const indices = [0, previousLength, 0];
                const sizes = [1, length[i], elementPerRow];
                tensors[i] = reshape(slice(tensor, indices, sizes), this.elementShape);
            }
            return tensors;
        });
        const indices = [];
        for (let i = 0; i < length.length; i++) {
            indices[i] = i;
        }
        this.writeMany(indices, tensors);
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
 * TensorList stores a container of `tf.Tensor` objects, which are accessible
 * via tensors field.
 *
 * In order to get a copy of the underlying list, use the copy method:
 * ```
 *    TensorList b = a.copy();
 *    b.tensors().pushBack(t);  // This does not modify a.tensors().
 * ```
 *
 * Note that this is not a deep copy: the memory locations of the underlying
 * tensors will still point to the same locations of the corresponding tensors
 * in the original.
 */
class TensorList {
    /**
     *
     * @param tensors list of tensors
     * @param elementShape shape of each tensor
     * @param elementDtype data type of each tensor
     * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
     *   meaning that the size of `tensors` is unbounded.
     */
    constructor(tensors, elementShape, elementDtype, maxNumElements = -1) {
        this.tensors = tensors;
        this.elementShape = elementShape;
        this.elementDtype = elementDtype;
        if (tensors != null) {
            tensors.forEach(tensor => {
                if (elementDtype !== tensor.dtype) {
                    throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor.dtype}`);
                }
                assertShapesMatchAllowUndefinedSize(elementShape, tensor.shape, 'TensorList shape mismatch: ');
                keep(tensor);
            });
        }
        this.idTensor = scalar(0);
        this.maxNumElements = maxNumElements;
        keep(this.idTensor);
    }
    get id() {
        return this.idTensor.id;
    }
    /**
     * Get a new TensorList containing a copy of the underlying tensor container.
     */
    copy() {
        return new TensorList([...this.tensors], this.elementShape, this.elementDtype);
    }
    /**
     * Dispose the tensors and idTensor and clear the tensor list.
     */
    clearAndClose(keepIds) {
        this.tensors.forEach(tensor => {
            if (keepIds == null || !keepIds.has(tensor.id)) {
                tensor.dispose();
            }
        });
        this.tensors.length = 0;
        this.idTensor.dispose();
    }
    /**
     * The size of the tensors in the tensor list.
     */
    size() {
        return this.tensors.length;
    }
    /**
     * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
     * tf.Tensor.
     * @param elementShape shape of each tensor
     * @param elementDtype data type of each tensor
     * @param numElements the number of elements to stack
     */
    stack(elementShape, elementDtype, numElements = -1) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (numElements !== -1 && this.tensors.length !== numElements) {
            throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
        }
        assertShapesMatchAllowUndefinedSize(elementShape, this.elementShape, 'TensorList shape mismatch: ');
        return tidy(() => {
            const reshapedTensors = this.tensors.map(tensor => reshape(tensor, elementShape));
            return stack(reshapedTensors, 0);
        });
    }
    /**
     * Pop a tensor from the end of the list.
     * @param elementShape shape of the tensor
     * @param elementDtype data type of the tensor
     */
    popBack(elementShape, elementDtype) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (this.size() === 0) {
            throw new Error('Trying to pop from an empty list.');
        }
        const tensor = this.tensors.pop();
        assertShapesMatchAllowUndefinedSize(tensor.shape, elementShape, 'TensorList shape mismatch: ');
        return reshape(tensor, elementShape);
    }
    /**
     * Push a tensor to the end of the list.
     * @param tensor Tensor to be pushed.
     */
    pushBack(tensor) {
        if (tensor.dtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
        }
        assertShapesMatchAllowUndefinedSize(tensor.shape, this.elementShape, 'TensorList shape mismatch: ');
        if (this.maxNumElements === this.size()) {
            throw new Error(`Trying to push element into a full list.`);
        }
        keep(tensor);
        this.tensors.push(tensor);
    }
    /**
     * Update the size of the list.
     * @param size the new size of the list.
     */
    resize(size) {
        if (size < 0) {
            throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
        }
        if (this.maxNumElements !== -1 && size > this.maxNumElements) {
            throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
        }
        this.tensors.length = size;
    }
    /**
     * Retrieve the element at the provided index
     * @param elementShape shape of the tensor
     * @param elementDtype dtype of the tensor
     * @param elementIndex index of the tensor
     */
    getItem(elementIndex, elementShape, elementDtype) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (elementIndex < 0 || elementIndex > this.tensors.length) {
            throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
        }
        if (this.tensors[elementIndex] == null) {
            throw new Error(`element at index ${elementIndex} is null.`);
        }
        assertShapesMatchAllowUndefinedSize(this.tensors[elementIndex].shape, elementShape, 'TensorList shape mismatch: ');
        return this.tensors[elementIndex];
    }
    /**
     * Set the tensor at the index
     * @param elementIndex index of the tensor
     * @param tensor the tensor to be inserted into the list
     */
    setItem(elementIndex, tensor) {
        if (tensor.dtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
        }
        if (elementIndex < 0 ||
            this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
            throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
        }
        assertShapesMatchAllowUndefinedSize(this.elementShape, tensor.shape, 'TensorList shape mismatch: ');
        keep(tensor);
        this.tensors[elementIndex] = tensor;
    }
    /**
     * Return selected values in the TensorList as a stacked Tensor. All of
     * selected values must have been written and their shapes must all match.
     * @param indices indices of tensors to gather
     * @param elementDtype output tensor dtype
     * @param elementShape output tensor element shape
     */
    gather(indices, elementDtype, elementShape) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, 'TensorList shape mismatch: ');
        // When indices is greater than the size of the list, indices beyond the
        // size of the list are ignored.
        indices = indices.slice(0, this.size());
        if (indices.length === 0) {
            return tensor([], [0].concat(this.elementShape));
        }
        return tidy(() => {
            const tensors = indices.map(i => reshape(this.tensors[i], elementShape));
            return stack(tensors, 0);
        });
    }
    /**
     * Return the values in the TensorList as a concatenated Tensor.
     * @param elementDtype output tensor dtype
     * @param elementShape output tensor element shape
     */
    concat(elementDtype, elementShape) {
        if (!!elementDtype && elementDtype !== this.elementDtype) {
            throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
        }
        assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, 'TensorList shape mismatch: ');
        if (this.size() === 0) {
            return tensor([], [0].concat(this.elementShape));
        }
        return tidy(() => {
            const tensors = this.tensors.map(t => reshape(t, elementShape));
            return concat(tensors, 0);
        });
    }
}
/**
 * Creates a TensorList which, when stacked, has the value of tensor.
 * @param tensor from tensor
 * @param elementShape output tensor element shape
 */
function fromTensor(tensor, elementShape, elementDtype) {
    const dtype = tensor.dtype;
    if (tensor.shape.length < 1) {
        throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor.shape}`);
    }
    if (tensor.dtype !== elementDtype) {
        throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${elementDtype}`);
    }
    const outputShape = tensor.shape.slice(1);
    assertShapesMatchAllowUndefinedSize(outputShape, elementShape, 'TensorList shape mismatch: ');
    const tensorList = unstack(tensor);
    return new TensorList(tensorList, elementShape, dtype);
}
/**
 * Return a TensorList of the given size with empty elements.
 * @param elementShape the shape of the future elements of the list
 * @param elementDtype the desired type of elements in the list
 * @param numElements the number of elements to reserve
 */
function reserve(elementShape, elementDtype, numElements) {
    return new TensorList([], elementShape, elementDtype, numElements);
}
/**
 * Put tensors at specific indices of a stacked tensor into a TensorList.
 * @param indices list of indices on how to scatter the tensor.
 * @param tensor input tensor.
 * @param elementShape the shape of the future elements of the list
 * @param numElements the number of elements to scatter
 */
function scatter(tensor, indices, elementShape, numElements) {
    if (indices.length !== tensor.shape[0]) {
        throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
    }
    const maxIndex = Math.max(...indices);
    if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
        throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
    }
    const list = new TensorList([], elementShape, tensor.dtype, numElements);
    const tensors = unstack(tensor, 0);
    indices.forEach((value, index) => {
        list.setItem(value, tensors[index]);
    });
    return list;
}
/**
 * Split the values of a Tensor into a TensorList.
 * @param length the lengths to use when splitting value along
 *    its first dimension.
 * @param tensor the tensor to split.
 * @param elementShape the shape of the future elements of the list
 */
function split(tensor, length, elementShape) {
    let totalLength = 0;
    const cumulativeLengths = length.map(len => {
        totalLength += len;
        return totalLength;
    });
    if (totalLength !== tensor.shape[0]) {
        throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
    }
    const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
    const tensors = tidy(() => {
        const tensors = [];
        tensor = reshape(tensor, [1, totalLength, elementPerRow]);
        for (let i = 0; i < length.length; ++i) {
            const previousLength = (i === 0) ? 0 : cumulativeLengths[i - 1];
            const indices = [0, previousLength, 0];
            const sizes = [1, length[i], elementPerRow];
            tensors[i] = reshape(slice(tensor, indices, sizes), elementShape);
        }
        tensor.dispose();
        return tensors;
    });
    const list = new TensorList([], elementShape, tensor.dtype, length.length);
    for (let i = 0; i < tensors.length; i++) {
        list.setItem(i, tensors[i]);
    }
    return list;
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
const executeOp$2 = async (node, tensorMap, context) => {
    switch (node.op) {
        case 'If':
        case 'StatelessIf': {
            const thenFunc = getParamValue('thenBranch', node, tensorMap, context);
            const elseFunc = getParamValue('elseBranch', node, tensorMap, context);
            const cond = getParamValue('cond', node, tensorMap, context);
            const args = getParamValue('args', node, tensorMap, context);
            const condValue = await cond.data();
            if (condValue[0]) {
                return context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
            }
            else {
                return context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
            }
        }
        case 'While':
        case 'StatelessWhile': {
            const bodyFunc = getParamValue('body', node, tensorMap, context);
            const condFunc = getParamValue('cond', node, tensorMap, context);
            const args = getParamValue('args', node, tensorMap, context);
            // Calculate the condition of the loop
            const condResult = (await context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap));
            const argIds = args.map(tensor => tensor.id);
            let condValue = await condResult[0].data();
            // Dispose the intermediate tensors for condition function
            condResult.forEach(tensor => {
                if (!tensor.kept && argIds.indexOf(tensor.id) === -1) {
                    tensor.dispose();
                }
            });
            let result = args;
            while (condValue[0]) {
                // Record the previous result for intermediate tensor tracking
                const origResult = result;
                // Execution the body of the loop
                result = await context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
                const resultIds = result.map(tensor => tensor.id);
                // Dispose the intermediate tensor for body function that is not global
                // kept, not input/output of the body function
                origResult.forEach(tensor => {
                    if (!tensor.kept && argIds.indexOf(tensor.id) === -1 &&
                        resultIds.indexOf(tensor.id) === -1) {
                        tensor.dispose();
                    }
                });
                // Recalcuate the condition of the loop using the latest results.
                const condResult = (await context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap));
                condValue = await condResult[0].data();
                // Dispose the intermediate tensors for condition function
                condResult.forEach(tensor => {
                    if (!tensor.kept && argIds.indexOf(tensor.id) === -1 &&
                        resultIds.indexOf(tensor.id) === -1) {
                        tensor.dispose();
                    }
                });
            }
            return result;
        }
        case 'LoopCond': {
            const pred = getParamValue('pred', node, tensorMap, context);
            return [cloneTensor(pred)];
        }
        case 'Switch': {
            const pred = getParamValue('pred', node, tensorMap, context);
            let data = getParamValue('data', node, tensorMap, context);
            if (!data.kept) {
                data = cloneTensor(data);
            }
            // Outputs nodes :0 => false, :1 => true
            return (await pred.data())[0] ? [undefined, data] : [data, undefined];
        }
        case 'Merge': {
            const inputName = node.inputNames.find(name => getTensor(name, tensorMap, context) !== undefined);
            if (inputName) {
                const data = getTensor(inputName, tensorMap, context);
                return [cloneTensor(data)];
            }
            return undefined;
        }
        case 'Enter': {
            const frameId = getParamValue('frameName', node, tensorMap, context);
            const data = getParamValue('tensor', node, tensorMap, context);
            context.enterFrame(frameId);
            return [cloneTensor(data)];
        }
        case 'Exit': {
            const data = getParamValue('tensor', node, tensorMap, context);
            context.exitFrame();
            return [cloneTensor(data)];
        }
        case 'NextIteration': {
            const data = getParamValue('tensor', node, tensorMap, context);
            context.nextIteration();
            return [cloneTensor(data)];
        }
        case 'TensorArrayV3': {
            const size = getParamValue('size', node, tensorMap, context);
            const dtype = getParamValue('dtype', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const dynamicSize = getParamValue('dynamicSize', node, tensorMap, context);
            const clearAfterRead = getParamValue('clearAfterRead', node, tensorMap, context);
            const identicalElementShapes = getParamValue('identicalElementShapes', node, tensorMap, context);
            const name = getParamValue('name', node, tensorMap, context);
            const tensorArray = new TensorArray(name, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
            context.addTensorArray(tensorArray);
            return [tensorArray.idTensor, scalar(1.0)];
        }
        case 'TensorArrayWriteV3': {
            const id = getParamValue('tensorArrayId', node, tensorMap, context);
            const index = getParamValue('index', node, tensorMap, context);
            const writeTensor = getParamValue('tensor', node, tensorMap, context);
            const writeTensorArray = context.getTensorArray(id.id);
            writeTensorArray.write(index, writeTensor);
            return [writeTensorArray.idTensor];
        }
        case 'TensorArrayReadV3': {
            const readId = getParamValue('tensorArrayId', node, tensorMap, context);
            const readIndex = getParamValue('index', node, tensorMap, context);
            const readTensorArray = context.getTensorArray(readId.id);
            return [readTensorArray.read(readIndex)];
        }
        case 'TensorArrayGatherV3': {
            const gatherId = getParamValue('tensorArrayId', node, tensorMap, context);
            const gatherIndices = getParamValue('indices', node, tensorMap, context);
            const gatherDtype = getParamValue('dtype', node, tensorMap, context);
            const gatherTensorArray = context.getTensorArray(gatherId.id);
            return [gatherTensorArray.gather(gatherIndices, gatherDtype)];
        }
        case 'TensorArrayScatterV3': {
            const scatterId = getParamValue('tensorArrayId', node, tensorMap, context);
            const scatterIndices = getParamValue('indices', node, tensorMap, context);
            const scatterTensor = getParamValue('tensor', node, tensorMap, context);
            const scatterTensorArray = context.getTensorArray(scatterId.id);
            scatterTensorArray.scatter(scatterIndices, scatterTensor);
            return [scatterTensorArray.idTensor];
        }
        case 'TensorArrayConcatV3': {
            const concatId = getParamValue('tensorArrayId', node, tensorMap, context);
            const concatTensorArray = context.getTensorArray(concatId.id);
            const concatDtype = getParamValue('dtype', node, tensorMap, context);
            return [concatTensorArray.concat(concatDtype)];
        }
        case 'TensorArraySplitV3': {
            const splitId = getParamValue('tensorArrayId', node, tensorMap, context);
            const splitTensor = getParamValue('tensor', node, tensorMap, context);
            const lengths = getParamValue('lengths', node, tensorMap, context);
            const splitTensorArray = context.getTensorArray(splitId.id);
            splitTensorArray.split(lengths, splitTensor);
            return [splitTensorArray.idTensor];
        }
        case 'TensorArraySizeV3': {
            const sizeId = getParamValue('tensorArrayId', node, tensorMap, context);
            const sizeTensorArray = context.getTensorArray(sizeId.id);
            return [scalar(sizeTensorArray.size(), 'int32')];
        }
        case 'TensorArrayCloseV3': {
            const closeId = getParamValue('tensorArrayId', node, tensorMap, context);
            const closeTensorArray = context.getTensorArray(closeId.id);
            closeTensorArray.clearAndClose();
            return [closeTensorArray.idTensor];
        }
        case 'TensorListSetItem': {
            const idTensor = getParamValue('tensorListId', node, tensorMap, context);
            const index = getParamValue('index', node, tensorMap, context);
            const writeTensor = getParamValue('tensor', node, tensorMap, context);
            const tensorList = context.getTensorList(idTensor.id);
            tensorList.setItem(index, writeTensor);
            return [tensorList.idTensor];
        }
        case 'TensorListGetItem': {
            const idTensor = getParamValue('tensorListId', node, tensorMap, context);
            const readIndex = getParamValue('index', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDType = getParamValue('elementDType', node, tensorMap, context);
            const tensorList = context.getTensorList(idTensor.id);
            return [tensorList.getItem(readIndex, elementShape, elementDType)];
        }
        case 'TensorListScatterV2':
        case 'TensorListScatter': {
            const scatterIndices = getParamValue('indices', node, tensorMap, context);
            const scatterTensor = getParamValue('tensor', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const numElements = getParamValue('numElements', node, tensorMap, context);
            const tensorList = scatter(scatterTensor, scatterIndices, elementShape, numElements);
            context.addTensorList(tensorList);
            return [tensorList.idTensor];
        }
        case 'TensorListReserve':
        case 'EmptyTensorList': {
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDtype = getParamValue('elementDType', node, tensorMap, context);
            let numElementsParam;
            if (node.op === 'TensorListReserve') {
                numElementsParam = 'numElements';
            }
            else {
                numElementsParam = 'maxNumElements';
            }
            const numElements = getParamValue(numElementsParam, node, tensorMap, context);
            const tensorList = reserve(elementShape, elementDtype, numElements);
            context.addTensorList(tensorList);
            return [tensorList.idTensor];
        }
        case 'TensorListGather': {
            const gatherId = getParamValue('tensorListId', node, tensorMap, context);
            const gatherIndices = getParamValue('indices', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDtype = getParamValue('elementDType', node, tensorMap, context);
            const tensorList = context.getTensorList(gatherId.id);
            return [tensorList.gather(gatherIndices, elementDtype, elementShape)];
        }
        case 'TensorListStack': {
            const idTensor = getParamValue('tensorListId', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDtype = getParamValue('elementDType', node, tensorMap, context);
            const numElements = getParamValue('numElements', node, tensorMap, context);
            const tensorList = context.getTensorList(idTensor.id);
            return [tensorList.stack(elementShape, elementDtype, numElements)];
        }
        case 'TensorListFromTensor': {
            const tensor = getParamValue('tensor', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDtype = getParamValue('elementDType', node, tensorMap, context);
            const tensorList = fromTensor(tensor, elementShape, elementDtype);
            context.addTensorList(tensorList);
            return [tensorList.idTensor];
        }
        case 'TensorListConcat': {
            const concatId = getParamValue('tensorListId', node, tensorMap, context);
            const tensorList = context.getTensorList(concatId.id);
            const concatDtype = getParamValue('dtype', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            return [tensorList.concat(concatDtype, elementShape)];
        }
        case 'TensorListPushBack': {
            const idTensor = getParamValue('tensorListId', node, tensorMap, context);
            const writeTensor = getParamValue('tensor', node, tensorMap, context);
            const tensorList = context.getTensorList(idTensor.id);
            tensorList.pushBack(writeTensor);
            return [tensorList.idTensor];
        }
        case 'TensorListPopBack': {
            const idTensor = getParamValue('tensorListId', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const elementDType = getParamValue('elementDType', node, tensorMap, context);
            const tensorList = context.getTensorList(idTensor.id);
            return [tensorList.popBack(elementShape, elementDType)];
        }
        case 'TensorListSplit': {
            const splitTensor = getParamValue('tensor', node, tensorMap, context);
            const elementShape = getParamValue('elementShape', node, tensorMap, context);
            const lengths = getParamValue('lengths', node, tensorMap, context);
            const tensorList = split(splitTensor, lengths, elementShape);
            context.addTensorList(tensorList);
            return [tensorList.idTensor];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
function fusedConvAndDepthWiseParams(node, tensorMap, context) {
    const [extraOp, activationFunc] = getParamValue('fusedOps', node, tensorMap, context);
    const isBiasAdd = extraOp === 'biasadd';
    const isPrelu = activationFunc === 'prelu';
    const isBatchNorm = extraOp === 'fusedbatchnorm';
    const numArgs = getParamValue('numArgs', node, tensorMap, context);
    if (isBiasAdd) {
        if (isPrelu && numArgs !== 2) {
            throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu ' +
                'must have two extra arguments: bias and alpha.');
        }
        if (!isPrelu && numArgs !== 1) {
            throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd must have ' +
                'one extra argument: bias.');
        }
    }
    if (isBatchNorm) {
        throw new Error('FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.');
    }
    const stride = getParamValue('strides', node, tensorMap, context);
    const pad = getPadding(node, tensorMap, context);
    const dataFormat = getParamValue('dataFormat', node, tensorMap, context)
        .toUpperCase();
    const dilations = getParamValue('dilations', node, tensorMap, context);
    const [biasArg, preluArg] = getParamValue('args', node, tensorMap, context);
    const leakyreluAlpha = getParamValue('leakyreluAlpha', node, tensorMap, context);
    return {
        stride,
        pad,
        dataFormat,
        dilations,
        biasArg,
        preluArg,
        activationFunc,
        leakyreluAlpha
    };
}
const executeOp$3 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Conv1D': {
            const stride = getParamValue('stride', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            const dilation = getParamValue('dilation', node, tensorMap, context);
            return [conv1d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), stride, pad, dataFormat, dilation)];
        }
        case 'Conv2D': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getPadding(node, tensorMap, context);
            const dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            const dilations = getParamValue('dilations', node, tensorMap, context);
            return [conv2d$1(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
        }
        case '_FusedConv2D': {
            const { stride, pad, dataFormat, dilations, biasArg, preluArg, activationFunc, leakyreluAlpha } = fusedConvAndDepthWiseParams(node, tensorMap, context);
            return [conv2d({
                    x: getParamValue('x', node, tensorMap, context),
                    filter: getParamValue('filter', node, tensorMap, context),
                    strides: [stride[1], stride[2]],
                    pad: pad,
                    dataFormat: dataFormat,
                    dilations: [dilations[1], dilations[2]],
                    bias: biasArg,
                    activation: activationFunc,
                    preluActivationWeights: preluArg,
                    leakyreluAlpha
                })];
        }
        case 'FusedDepthwiseConv2dNative': {
            const { stride, pad, dataFormat, dilations, biasArg, preluArg, activationFunc, leakyreluAlpha, } = fusedConvAndDepthWiseParams(node, tensorMap, context);
            return [depthwiseConv2d$1({
                    x: getParamValue('x', node, tensorMap, context),
                    filter: getParamValue('filter', node, tensorMap, context),
                    strides: [stride[1], stride[2]],
                    pad: pad,
                    dataFormat: dataFormat,
                    dilations: [dilations[1], dilations[2]],
                    bias: biasArg,
                    activation: activationFunc,
                    preluActivationWeights: preluArg,
                    leakyreluAlpha
                })];
        }
        case 'Conv2DBackpropInput':
        case 'Conv2dTranspose': {
            const shape = getParamValue('outputShape', node, tensorMap, context);
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getPadding(node, tensorMap, context);
            return [conv2dTranspose(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), shape, [stride[1], stride[2]], pad)];
        }
        case 'DepthwiseConv2dNative':
        case 'DepthwiseConv2d': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getPadding(node, tensorMap, context);
            const dilations = getParamValue('dilations', node, tensorMap, context);
            const dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            return [depthwiseConv2d(getParamValue('input', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
        }
        case 'Conv3D': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const dataFormat = getParamValue('dataFormat', node, tensorMap, context)
                .toUpperCase();
            const dilations = getParamValue('dilations', node, tensorMap, context);
            return [conv3d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [stride[1], stride[2], stride[3]], pad, dataFormat, [dilations[1], dilations[2], dilations[3]])];
        }
        case 'AvgPool': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const kernelSize = getParamValue('kernelSize', node, tensorMap, context);
            return [avgPool(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        case 'MaxPool': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const kernelSize = getParamValue('kernelSize', node, tensorMap, context);
            return [maxPool(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        case 'MaxPoolWithArgmax': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const kernelSize = getParamValue('kernelSize', node, tensorMap, context);
            const includeBatchInIndex = getParamValue('includeBatchInIndex', node, tensorMap, context);
            const { result, indexes } = maxPoolWithArgmax(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad, includeBatchInIndex);
            return [result, indexes];
        }
        case 'AvgPool3D': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const kernelSize = getParamValue('kernelSize', node, tensorMap, context);
            return [avgPool3d(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
        }
        case 'MaxPool3D': {
            const stride = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const kernelSize = getParamValue('kernelSize', node, tensorMap, context);
            return [maxPool3d(getParamValue('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
        }
        case 'Dilation2D': {
            const strides = getParamValue('strides', node, tensorMap, context);
            const pad = getParamValue('pad', node, tensorMap, context);
            const dilations = getParamValue('dilations', node, tensorMap, context);
            // strides: [1, stride_height, stride_width, 1].
            const strideHeight = strides[1];
            const strideWidth = strides[2];
            // dilations: [1, dilation_height, dilation_width, 1].
            const dilationHeight = dilations[1];
            const dilationWidth = dilations[2];
            return [dilation2d(getParamValue('x', node, tensorMap, context), getParamValue('filter', node, tensorMap, context), [strideHeight, strideWidth], pad, [dilationHeight, dilationWidth], 'NHWC' /* dataFormat */)];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$4 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Fill': {
            const shape = getParamValue('shape', node, tensorMap, context);
            const dtype = getParamValue('dtype', node, tensorMap, context);
            const value = getParamValue('value', node, tensorMap, context);
            return [fill(shape, value, dtype)];
        }
        case 'LinSpace': {
            const start = getParamValue('start', node, tensorMap, context);
            const stop = getParamValue('stop', node, tensorMap, context);
            const num = getParamValue('num', node, tensorMap, context);
            return [linspace(start, stop, num)];
        }
        case 'Multinomial': {
            const logits = getParamValue('logits', node, tensorMap, context);
            const numSamples = getParamValue('numSamples', node, tensorMap, context);
            const seed = getParamValue('seed', node, tensorMap, context);
            return [multinomial(logits, numSamples, seed)];
        }
        case 'OneHot': {
            const indices = getParamValue('indices', node, tensorMap, context);
            const depth = getParamValue('depth', node, tensorMap, context);
            const onValue = getParamValue('onValue', node, tensorMap, context);
            const offValue = getParamValue('offValue', node, tensorMap, context);
            return [oneHot(indices, depth, onValue, offValue)];
        }
        case 'Ones': {
            return [ones(getParamValue('shape', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
        }
        case 'OnesLike': {
            return [onesLike(getParamValue('x', node, tensorMap, context))];
        }
        case 'RandomUniform': {
            return [randomUniform(
                // tslint:disable-next-line:no-any
                getParamValue('shape', node, tensorMap, context), getParamValue('minval', node, tensorMap, context), getParamValue('maxval', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
        }
        case 'Range': {
            const start = getParamValue('start', node, tensorMap, context);
            const stop = getParamValue('stop', node, tensorMap, context);
            const step = getParamValue('step', node, tensorMap, context);
            return [range(start, stop, step, getParamValue('dtype', node, tensorMap, context))];
        }
        case 'TruncatedNormal': {
            const shape = getParamValue('shape', node, tensorMap, context);
            const mean = getParamValue('mean', node, tensorMap, context);
            const stdDev = getParamValue('stdDev', node, tensorMap, context);
            const seed = getParamValue('seed', node, tensorMap, context);
            return [truncatedNormal(shape, mean, stdDev, getParamValue('dtype', node, tensorMap, context), seed)];
        }
        case 'Zeros': {
            return [zeros(getParamValue('shape', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
        }
        case 'ZerosLike': {
            return [zerosLike(getParamValue('x', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
function nmsParams(node, tensorMap, context) {
    const boxes = getParamValue('boxes', node, tensorMap, context);
    const scores = getParamValue('scores', node, tensorMap, context);
    const maxOutputSize = getParamValue('maxOutputSize', node, tensorMap, context);
    const iouThreshold = getParamValue('iouThreshold', node, tensorMap, context);
    const scoreThreshold = getParamValue('scoreThreshold', node, tensorMap, context);
    const softNmsSigma = getParamValue('softNmsSigma', node, tensorMap, context);
    return {
        boxes,
        scores,
        maxOutputSize,
        iouThreshold,
        scoreThreshold,
        softNmsSigma
    };
}
const executeOp$5 = async (node, tensorMap, context) => {
    switch (node.op) {
        case 'NonMaxSuppressionV5': {
            const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = nmsParams(node, tensorMap, context);
            const result = await image$1.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
            return [result.selectedIndices, result.selectedScores];
        }
        case 'NonMaxSuppressionV4': {
            const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold } = nmsParams(node, tensorMap, context);
            const padToMaxOutputSize = getParamValue('padToMaxOutputSize', node, tensorMap, context);
            const result = await image$1.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
            return [result.selectedIndices, result.validOutputs];
        }
        case 'NonMaxSuppressionV3':
        case 'NonMaxSuppressionV2': {
            const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold } = nmsParams(node, tensorMap, context);
            return [await image$1.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
        }
        case 'Where': {
            const condition = cast(getParamValue('condition', node, tensorMap, context), 'bool');
            const result = [await whereAsync(condition)];
            condition.dispose();
            return result;
        }
        case 'ListDiff': {
            return setdiff1dAsync(getParamValue('x', node, tensorMap, context), getParamValue('y', node, tensorMap, context));
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$6 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'TopKV2': {
            const x = getParamValue('x', node, tensorMap, context);
            const k = getParamValue('k', node, tensorMap, context);
            const sorted = getParamValue('sorted', node, tensorMap, context);
            const result = topk(x, k, sorted);
            return [result.values, result.indices];
        }
        case 'Unique': {
            const x = getParamValue('x', node, tensorMap, context);
            const result = unique(x);
            return [result.values, result.indices];
        }
        case 'UniqueV2': {
            const x = getParamValue('x', node, tensorMap, context);
            const axis = getParamValue('axis', node, tensorMap, context);
            const result = unique(x, axis);
            return [result.values, result.indices];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$7 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Const': {
            return tensorMap[node.name];
        }
        case 'PlaceholderWithDefault':
            const def = getParamValue('default', node, tensorMap, context);
            return [getTensor(node.name, tensorMap, context) || def];
        case 'Placeholder':
            return [getTensor(node.name, tensorMap, context)];
        case 'Identity':
        case 'StopGradient':
        case 'FakeQuantWithMinMaxVars': { // This op is currently ignored.
            const data = getParamValue('x', node, tensorMap, context);
            return [cloneTensor(data)];
        }
        case 'IdentityN':
            return getParamValue('x', node, tensorMap, context)
                .map((t) => cloneTensor(t));
        case 'Snapshot':
            const snapshot = getParamValue('x', node, tensorMap, context);
            return [cloneTensor(snapshot)];
        case 'Shape':
            return [tensor1d(getParamValue('x', node, tensorMap, context).shape, 'int32')];
        case 'ShapeN':
            return getParamValue('x', node, tensorMap, context)
                .map((t) => tensor1d(t.shape));
        case 'Size':
            return [scalar(getParamValue('x', node, tensorMap, context).size, 'int32')];
        case 'Rank':
            return [scalar(getParamValue('x', node, tensorMap, context).rank, 'int32')];
        case 'NoOp':
            return [scalar(1)];
        case 'Print':
            const input = getParamValue('x', node, tensorMap, context);
            const data = getParamValue('data', node, tensorMap, context);
            const message = getParamValue('message', node, tensorMap, context);
            const summarize = getParamValue('summarize', node, tensorMap, context);
            console.warn('The graph has a tf.print() operation,' +
                'usually used for debugging, which slows down performance.');
            console.log(message);
            for (let i = 0; i < data.length; i++) {
                console.log(Array.prototype.slice.call(data[i].dataSync())
                    .slice(0, summarize));
            }
            return [input];
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
 * Hashtable contains a set of tensors, which can be accessed by key.
 */
class HashTable {
    /**
     * Constructor of HashTable. Creates a hash table.
     *
     * @param keyDType `dtype` of the table keys.
     * @param valueDType `dtype` of the table values.
     */
    constructor(keyDType, valueDType) {
        this.keyDType = keyDType;
        this.valueDType = valueDType;
        this.handle = scalar(0);
        // tslint:disable-next-line: no-any
        this.tensorMap = new Map();
        keep(this.handle);
    }
    get id() {
        return this.handle.id;
    }
    /**
     * Dispose the tensors and handle and clear the hashtable.
     */
    clearAndClose() {
        this.tensorMap.forEach(value => value.dispose());
        this.tensorMap.clear();
        this.handle.dispose();
    }
    /**
     * The number of items in the hash table.
     */
    size() {
        return this.tensorMap.size;
    }
    /**
     * Replaces the contents of the table with the specified keys and values.
     * @param keys Keys to store in the hashtable.
     * @param values Values to store in the hashtable.
     */
    async import(keys, values) {
        this.checkKeyAndValueTensor(keys, values);
        // We only store the primitive values of the keys, this allows lookup
        // to be O(1).
        const $keys = await keys.data();
        // Clear the hashTable before inserting new values.
        this.tensorMap.forEach(value => value.dispose());
        this.tensorMap.clear();
        return tidy(() => {
            const $values = unstack(values);
            const keysLength = $keys.length;
            const valuesLength = $values.length;
            assert(keysLength === valuesLength, () => `The number of elements doesn't match, keys has ` +
                `${keysLength} elements, the values has ${valuesLength} ` +
                `elements.`);
            for (let i = 0; i < keysLength; i++) {
                const key = $keys[i];
                const value = $values[i];
                keep(value);
                this.tensorMap.set(key, value);
            }
            return this.handle;
        });
    }
    /**
     * Looks up keys in a hash table, outputs the corresponding values.
     *
     * Performs batch lookups, for every element in the key tensor, `find`
     * stacks the corresponding value into the return tensor.
     *
     * If an element is not present in the table, the given `defaultValue` is
     * used.
     *
     * @param keys Keys to look up. Must have the same type as the keys of the
     *     table.
     * @param defaultValue The scalar `defaultValue` is the value output for keys
     *     not present in the table. It must also be of the same type as the
     *     table values.
     */
    async find(keys, defaultValue) {
        this.checkKeyAndValueTensor(keys, defaultValue);
        const $keys = await keys.data();
        return tidy(() => {
            const result = [];
            for (let i = 0; i < $keys.length; i++) {
                const key = $keys[i];
                const value = this.findWithDefault(key, defaultValue);
                result.push(value);
            }
            return stack(result);
        });
    }
    // tslint:disable-next-line: no-any
    findWithDefault(key, defaultValue) {
        const result = this.tensorMap.get(key);
        return result != null ? result : defaultValue;
    }
    checkKeyAndValueTensor(key, value) {
        if (key.dtype !== this.keyDType) {
            throw new Error(`Expect key dtype ${this.keyDType}, but got ` +
                `${key.dtype}`);
        }
        if (value.dtype !== this.valueDType) {
            throw new Error(`Expect value dtype ${this.valueDType}, but got ` +
                `${value.dtype}`);
        }
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
const executeOp$8 = async (node, tensorMap, context, resourceManager) => {
    switch (node.op) {
        case 'HashTable':
        case 'HashTableV2': {
            const keyDType = getParamValue('keyDType', node, tensorMap, context);
            const valueDType = getParamValue('valueDType', node, tensorMap, context);
            const hashTable = new HashTable(keyDType, valueDType);
            resourceManager.addHashTable(node.name, hashTable);
            return [hashTable.handle];
        }
        case 'LookupTableImport':
        case 'LookupTableImportV2': {
            const handle = getParamValue('tableHandle', node, tensorMap, context, resourceManager);
            const keys = getParamValue('keys', node, tensorMap, context);
            const values = getParamValue('values', node, tensorMap, context);
            const hashTable = resourceManager.getHashTableById(handle.id);
            return [await hashTable.import(keys, values)];
        }
        case 'LookupTableFind':
        case 'LookupTableFindV2': {
            const handle = getParamValue('tableHandle', node, tensorMap, context, resourceManager);
            const keys = getParamValue('keys', node, tensorMap, context);
            const defaultValue = getParamValue('defaultValue', node, tensorMap, context);
            const hashTable = resourceManager.getHashTableById(handle.id);
            return [await hashTable.find(keys, defaultValue)];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$9 = (node, tensorMap, context) => {
    switch (node.op) {
        case 'ResizeBilinear': {
            const images = getParamValue('images', node, tensorMap, context);
            const size = getParamValue('size', node, tensorMap, context);
            const alignCorners = getParamValue('alignCorners', node, tensorMap, context);
            const halfPixelCenters = getParamValue('halfPixelCenters', node, tensorMap, context);
            return [image$1.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
        }
        case 'ResizeNearestNeighbor': {
            const images = getParamValue('images', node, tensorMap, context);
            const size = getParamValue('size', node, tensorMap, context);
            const alignCorners = getParamValue('alignCorners', node, tensorMap, context);
            const halfPixelCenters = getParamValue('halfPixelCenters', node, tensorMap, context);
            return [image$1.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
        }
        case 'CropAndResize': {
            const image = getParamValue('image', node, tensorMap, context);
            const boxes = getParamValue('boxes', node, tensorMap, context);
            const boxInd = getParamValue('boxInd', node, tensorMap, context);
            const cropSize = getParamValue('cropSize', node, tensorMap, context);
            const method = getParamValue('method', node, tensorMap, context);
            const extrapolationValue = getParamValue('extrapolationValue', node, tensorMap, context);
            return [image$1.cropAndResize(image, boxes, boxInd, cropSize, method, extrapolationValue)];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$a = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Equal': {
            return [equal(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'NotEqual': {
            return [notEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Greater': {
            return [greater(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'GreaterEqual': {
            return [greaterEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Less': {
            return [less(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'LessEqual': {
            return [lessEqual(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'LogicalAnd': {
            return [logicalAnd(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'LogicalNot': {
            return [logicalNot(getParamValue('a', node, tensorMap, context))];
        }
        case 'LogicalOr': {
            return [logicalOr(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        case 'Select':
        case 'SelectV2': {
            return [where(getParamValue('condition', node, tensorMap, context), getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$b = (node, tensorMap, context) => {
    switch (node.op) {
        case 'BatchMatMul':
        case 'BatchMatMulV2':
        case 'MatMul':
            return [matMul$1(getParamValue('a', node, tensorMap, context), getParamValue('b', node, tensorMap, context), getParamValue('transposeA', node, tensorMap, context), getParamValue('transposeB', node, tensorMap, context))];
        case 'Transpose':
            return [transpose(getParamValue('x', node, tensorMap, context), getParamValue('perm', node, tensorMap, context))];
        case '_FusedMatMul':
            const [extraOp, activationFunc] = getParamValue('fusedOps', node, tensorMap, context);
            const isBiasAdd = extraOp === 'biasadd';
            const isPrelu = activationFunc === 'prelu';
            const numArgs = getParamValue('numArgs', node, tensorMap, context);
            const leakyreluAlpha = getParamValue('leakyreluAlpha', node, tensorMap, context);
            if (isBiasAdd) {
                if (isPrelu && numArgs !== 2) {
                    throw new Error('Fused MatMul with BiasAdd and Prelu must have two ' +
                        'extra arguments: bias and alpha.');
                }
                if (!isPrelu && numArgs !== 1) {
                    throw new Error('Fused MatMul with BiasAdd must have one extra argument: bias.');
                }
            }
            const [biasArg, preluArg] = getParamValue('args', node, tensorMap, context);
            return [matMul({
                    a: getParamValue('a', node, tensorMap, context),
                    b: getParamValue('b', node, tensorMap, context),
                    transposeA: getParamValue('transposeA', node, tensorMap, context),
                    transposeB: getParamValue('transposeB', node, tensorMap, context),
                    bias: biasArg,
                    activation: activationFunc,
                    preluActivationWeights: preluArg,
                    leakyreluAlpha
                })];
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$c = (node, tensorMap, context) => {
    switch (node.op) {
        case 'FusedBatchNorm':
        case 'FusedBatchNormV2': {
            return [batchNorm(getParamValue('x', node, tensorMap, context), getParamValue('mean', node, tensorMap, context), getParamValue('variance', node, tensorMap, context), getParamValue('offset', node, tensorMap, context), getParamValue('scale', node, tensorMap, context), getParamValue('epsilon', node, tensorMap, context))];
        }
        case 'FusedBatchNormV3': {
            return [batchNorm(getParamValue('x', node, tensorMap, context), getParamValue('mean', node, tensorMap, context), getParamValue('variance', node, tensorMap, context), getParamValue('offset', node, tensorMap, context), getParamValue('scale', node, tensorMap, context), getParamValue('epsilon', node, tensorMap, context))];
        }
        case 'LRN': {
            return [localResponseNormalization(getParamValue('x', node, tensorMap, context), getParamValue('radius', node, tensorMap, context), getParamValue('bias', node, tensorMap, context), getParamValue('alpha', node, tensorMap, context), getParamValue('beta', node, tensorMap, context))];
        }
        case 'Softmax': {
            return [softmax(getParamValue('x', node, tensorMap, context))];
        }
        case 'LogSoftmax': {
            return [logSoftmax(getParamValue('x', node, tensorMap, context))];
        }
        case 'SparseToDense': {
            return [sparseToDense(getParamValue('sparseIndices', node, tensorMap, context), getParamValue('outputShape', node, tensorMap, context), getParamValue('sparseValues', node, tensorMap, context), getParamValue('defaultValue', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$d = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Max': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [max(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Mean': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [mean(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Min': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [min(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Sum': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [sum(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'All': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [all(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Any': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [any(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'ArgMax': {
            const axis = getParamValue('axis', node, tensorMap, context);
            return [argMax(getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'ArgMin': {
            const axis = getParamValue('axis', node, tensorMap, context);
            return [argMin(getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Prod': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const keepDims = getParamValue('keepDims', node, tensorMap, context);
            return [prod(getParamValue('x', node, tensorMap, context), axis, keepDims)];
        }
        case 'Cumsum': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const exclusive = getParamValue('exclusive', node, tensorMap, context);
            const reverse = getParamValue('reverse', node, tensorMap, context);
            return [cumsum(getParamValue('x', node, tensorMap, context), axis, exclusive, reverse)];
        }
        case 'Bincount':
            const x = getParamValue('x', node, tensorMap, context);
            const weights = getParamValue('weights', node, tensorMap, context);
            const size = getParamValue('size', node, tensorMap, context);
            return [bincount(x, weights, size)];
        case 'DenseBincount': {
            const x = getParamValue('x', node, tensorMap, context);
            const weights = getParamValue('weights', node, tensorMap, context);
            const size = getParamValue('size', node, tensorMap, context);
            const binaryOutput = getParamValue('binaryOutput', node, tensorMap, context);
            return [denseBincount(x, weights, size, binaryOutput)];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$e = (node, tensorMap, context) => {
    switch (node.op) {
        case 'ConcatV2':
        case 'Concat': {
            const n = getParamValue('n', node, tensorMap, context);
            const axis = getParamValue('axis', node, tensorMap, context);
            let inputs = getParamValue('tensors', node, tensorMap, context);
            inputs = inputs.slice(0, n);
            return [concat(inputs, axis)];
        }
        case 'Gather': {
            const input = getParamValue('x', node, tensorMap, context);
            const indices = getParamValue('indices', node, tensorMap, context);
            return [gather(input, cast(indices, 'int32'), 0)];
        }
        case 'GatherV2': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const batchDims = getParamValue('batchDims', node, tensorMap, context);
            const input = getParamValue('x', node, tensorMap, context);
            const indices = getParamValue('indices', node, tensorMap, context);
            return [gather(input, cast(indices, 'int32'), axis, batchDims)];
        }
        case 'Reverse': {
            const dims = getParamValue('dims', node, tensorMap, context);
            const axis = [];
            for (let i = 0; i < dims.length; i++) {
                if (dims[i]) {
                    axis.push(i);
                }
            }
            const input = getParamValue('x', node, tensorMap, context);
            return [reverse(input, axis)];
        }
        case 'ReverseV2': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const input = getParamValue('x', node, tensorMap, context);
            return [reverse(input, axis)];
        }
        case 'Slice': {
            // tslint:disable-next-line:no-any
            const begin = getParamValue('begin', node, tensorMap, context);
            // tslint:disable-next-line:no-any
            const size = getParamValue('size', node, tensorMap, context);
            return [slice(getParamValue('x', node, tensorMap, context), begin, size)];
        }
        case 'StridedSlice': {
            const begin = getParamValue('begin', node, tensorMap, context);
            const end = getParamValue('end', node, tensorMap, context);
            const strides = getParamValue('strides', node, tensorMap, context);
            const beginMask = getParamValue('beginMask', node, tensorMap, context);
            const endMask = getParamValue('endMask', node, tensorMap, context);
            const ellipsisMask = getParamValue('ellipsisMask', node, tensorMap, context);
            const newAxisMask = getParamValue('newAxisMask', node, tensorMap, context);
            const shrinkAxisMask = getParamValue('shrinkAxisMask', node, tensorMap, context);
            const tensor = getParamValue('x', node, tensorMap, context);
            return [stridedSlice(tensor, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
        }
        case 'Pack': {
            return tidy(() => {
                const axis = getParamValue('axis', node, tensorMap, context);
                const tensors = getParamValue('tensors', node, tensorMap, context);
                // Reshape the tensors to the first tensor's shape if they don't
                // match.
                const shape = tensors[0].shape;
                const squeezedShape = squeeze(tensors[0]).shape;
                const mapped = tensors.map(tensor => {
                    const sameShape = arraysEqual(tensor.shape, shape);
                    if (!sameShape &&
                        !arraysEqual(squeeze(tensor).shape, squeezedShape)) {
                        throw new Error('the input tensors shape does not match');
                    }
                    return sameShape ? tensor : reshape(tensor, shape);
                });
                return [stack(mapped, axis)];
            });
        }
        case 'Unpack': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const tensor = getParamValue('tensor', node, tensorMap, context);
            return unstack(tensor, axis);
        }
        case 'Tile': {
            const reps = getParamValue('reps', node, tensorMap, context);
            return [tile(getParamValue('x', node, tensorMap, context), reps)];
        }
        case 'Split':
        case 'SplitV': {
            const axis = getParamValue('axis', node, tensorMap, context);
            const numOrSizeSplits = getParamValue('numOrSizeSplits', node, tensorMap, context);
            const tensor = getParamValue('x', node, tensorMap, context);
            return split$1(tensor, numOrSizeSplits, axis);
        }
        case 'ScatterNd': {
            const indices = getParamValue('indices', node, tensorMap, context);
            const values = getParamValue('values', node, tensorMap, context);
            const shape = getParamValue('shape', node, tensorMap, context);
            return [scatterND(indices, values, shape)];
        }
        case 'GatherNd': {
            const x = getParamValue('x', node, tensorMap, context);
            const indices = getParamValue('indices', node, tensorMap, context);
            return [gatherND(x, indices)];
        }
        case 'SparseToDense': {
            const indices = getParamValue('sparseIndices', node, tensorMap, context);
            const shape = getParamValue('outputShape', node, tensorMap, context);
            const sparseValues = getParamValue('sparseValues', node, tensorMap, context);
            const defaultValue = getParamValue('defaultValue', node, tensorMap, context);
            return [sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ?
                    defaultValue :
                    cast(defaultValue, sparseValues.dtype))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$f = (node, tensorMap, context) => {
    switch (node.op) {
        case 'FFT': {
            return [fft(getParamValue('x', node, tensorMap, context))];
        }
        case 'IFFT': {
            return [ifft(getParamValue('x', node, tensorMap, context))];
        }
        case 'RFFT': {
            return [rfft(getParamValue('x', node, tensorMap, context))];
        }
        case 'IRFFT': {
            return [irfft(getParamValue('x', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
const executeOp$g = (node, tensorMap, context) => {
    switch (node.op) {
        case 'Cast': {
            return [cast(getParamValue('x', node, tensorMap, context), getParamValue('dtype', node, tensorMap, context))];
        }
        case 'ExpandDims': {
            const axis = getParamValue('axis', node, tensorMap, context);
            return [expandDims(getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Squeeze': {
            const axis = getParamValue('axis', node, tensorMap, context);
            return [squeeze(getParamValue('x', node, tensorMap, context), axis)];
        }
        case 'Reshape': {
            return [reshape(getParamValue('x', node, tensorMap, context), getParamValue('shape', node, tensorMap, context))];
        }
        case 'MirrorPad': {
            return [mirrorPad(getParamValue('x', node, tensorMap, context), getParamValue('padding', node, tensorMap, context), getParamValue('mode', node, tensorMap, context))];
        }
        case 'PadV2':
        case 'Pad': {
            return [pad(getParamValue('x', node, tensorMap, context), getParamValue('padding', node, tensorMap, context), getParamValue('constantValue', node, tensorMap, context))];
        }
        case 'SpaceToBatchND': {
            const blockShape = getParamValue('blockShape', node, tensorMap, context);
            const paddings = getParamValue('paddings', node, tensorMap, context);
            return [spaceToBatchND(getParamValue('x', node, tensorMap, context), blockShape, paddings)];
        }
        case 'BatchToSpaceND': {
            const blockShape = getParamValue('blockShape', node, tensorMap, context);
            const crops = getParamValue('crops', node, tensorMap, context);
            return [batchToSpaceND(getParamValue('x', node, tensorMap, context), blockShape, crops)];
        }
        case 'DepthToSpace': {
            const blockSize = getParamValue('blockSize', node, tensorMap, context);
            const dataFormat = getParamValue('dataFormat', node, tensorMap, context).toUpperCase();
            return [depthToSpace(getParamValue('x', node, tensorMap, context), blockSize, dataFormat)];
        }
        case 'BroadcastTo': {
            return [broadcastTo(getParamValue('x', node, tensorMap, context), getParamValue('shape', node, tensorMap, context))];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};

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
 * Executes the op defined by the node object.
 * @param node
 * @param tensorMap contains tensors for executed nodes and weights
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */
function executeOp$h(node, tensorMap, context, resourceManager) {
    const value = ((node, tensorMap, context) => {
        switch (node.category) {
            case 'arithmetic':
                return tidy(() => executeOp(node, tensorMap, context));
            case 'basic_math':
                return tidy(() => executeOp$1(node, tensorMap, context));
            case 'control':
                return executeOp$2(node, tensorMap, context);
            case 'convolution':
                return tidy(() => executeOp$3(node, tensorMap, context));
            case 'creation':
                return tidy(() => executeOp$4(node, tensorMap, context));
            case 'dynamic':
                return executeOp$5(node, tensorMap, context);
            case 'evaluation':
                return tidy(() => executeOp$6(node, tensorMap, context));
            case 'image':
                return tidy(() => executeOp$9(node, tensorMap, context));
            case 'graph':
                return tidy(() => executeOp$7(node, tensorMap, context));
            case 'logical':
                return tidy(() => executeOp$a(node, tensorMap, context));
            case 'matrices':
                return tidy(() => executeOp$b(node, tensorMap, context));
            case 'normalization':
                return tidy(() => executeOp$c(node, tensorMap, context));
            case 'reduction':
                return tidy(() => executeOp$d(node, tensorMap, context));
            case 'slice_join':
                return tidy(() => executeOp$e(node, tensorMap, context));
            case 'spectral':
                return tidy(() => executeOp$f(node, tensorMap, context));
            case 'transformation':
                return tidy(() => executeOp$g(node, tensorMap, context));
            case 'hash_table':
                return executeOp$8(node, tensorMap, context, resourceManager);
            case 'custom':
                const opMapper = getRegisteredOp(node.op);
                if (opMapper && opMapper.customExecutor) {
                    return opMapper.customExecutor(new NodeValueImpl(node, tensorMap, context));
                }
                else {
                    throw TypeError(`Custom op ${node.op} is not registered.`);
                }
            default:
                throw TypeError(`Unknown op '${node.op}'. File an issue at ` +
                    `https://github.com/tensorflow/tfjs/issues so we can add it` +
                    `, or register a custom execution with tf.registerOp()`);
        }
    })(node, tensorMap, context);
    if (isPromise(value)) {
        return value.then((data) => [].concat(data));
    }
    return [].concat(value);
}

/**
 * ExecutionContext captures the runtime environment of the node. It keeps
 * track of the current frame and iteration for the control flow ops.
 *
 * For example, typical Dynamic RNN model may contain loops, for which
 * TensorFlow will generate graphs with Enter/Exit nodes to control the
 * current execution frame, and NextIteration Nodes for iteration id increment.
 * For model with branch logic, TensorFLow will generate Switch/Merge ops.
 */
class ExecutionContext {
    constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}) {
        this.weightMap = weightMap;
        this.tensorArrayMap = tensorArrayMap;
        this.tensorListMap = tensorListMap;
        this.functionMap = functionMap;
        this.rootContext = { id: 0, frameName: '', iterationId: 0 };
        this.contexts = [this.rootContext];
        this.lastId = 0;
        this.generateCurrentContextIds();
    }
    newFrame(id, frameName) {
        return { id, frameName, iterationId: 0 };
    }
    /**
     * Set the current context
     * @param contexts: ExecutionContextInfo[] the current path of execution
     * frames
     */
    set currentContext(contexts) {
        if (this.contexts !== contexts) {
            this.contexts = contexts;
            this.generateCurrentContextIds();
        }
    }
    get currentContext() {
        return this.contexts;
    }
    /**
     * Returns the current context in string format.
     */
    get currentContextId() {
        return this._currentContextIds[0];
    }
    /**
     * Returns the current context and all parent contexts in string format.
     * This allow access to the nodes in the current and parent frames.
     */
    get currentContextIds() {
        return this._currentContextIds;
    }
    generateCurrentContextIds() {
        const names = [];
        for (let i = 0; i < this.contexts.length - 1; i++) {
            const contexts = this.contexts.slice(0, this.contexts.length - i);
            names.push(this.contextIdforContexts(contexts));
        }
        names.push('');
        this._currentContextIds = names;
    }
    contextIdforContexts(contexts) {
        return contexts ?
            contexts
                .map(context => (context.id === 0 && context.iterationId === 0) ?
                '' :
                `${context.frameName}-${context.iterationId}`)
                .join('/') :
            '';
    }
    /**
     * Enter a new frame, a new context is pushed on the current context list.
     * @param frameId new frame id
     */
    enterFrame(frameId) {
        if (this.contexts) {
            this.lastId++;
            this.contexts = this.contexts.slice();
            this.contexts.push(this.newFrame(this.lastId, frameId));
            this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
        }
    }
    /**
     * Exit the current frame, the last context is removed from the current
     * context list.
     */
    exitFrame() {
        if (this.contexts && this.contexts.length > 1) {
            this.contexts = this.contexts.slice();
            this.contexts.splice(-1);
            this.currentContextIds.shift();
        }
        else {
            throw new Error('Cannot exit frame, the context is empty');
        }
    }
    /**
     * Enter the next iteration of a loop, the iteration id of last context is
     * increased.
     */
    nextIteration() {
        if (this.contexts && this.contexts.length > 0) {
            this.contexts = this.contexts.slice();
            this.lastId++;
            const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
            context.iterationId += 1;
            context.id = this.lastId;
            this.contexts.splice(-1, 1, context);
            this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
        }
        else {
            throw new Error('Cannot increase frame iteration, the context is empty');
        }
    }
    getWeight(name) {
        return this.weightMap[name];
    }
    addTensorArray(tensorArray) {
        this.tensorArrayMap[tensorArray.id] = tensorArray;
    }
    getTensorArray(id) {
        return this.tensorArrayMap[id];
    }
    addTensorList(tensorList) {
        this.tensorListMap[tensorList.id] = tensorList;
    }
    getTensorList(id) {
        return this.tensorListMap[id];
    }
    dispose(keepIds) {
        for (const key in this.tensorArrayMap) {
            this.tensorArrayMap[key].clearAndClose(keepIds);
        }
        for (const key in this.tensorListMap) {
            this.tensorListMap[key].clearAndClose(keepIds);
        }
    }
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
/**
 * Given graph inputs and desired outputs, find the minimal set of nodes
 * to execute in order to compute the outputs. In addition return other useful
 * info such:
 * - Missing inputs needed to compute the output.
 * - Whether the subgraph contains dynamic ops (control flow, dynamic shape).
 * - Alternative inputs in order to avoid async (dynamic op) execution.
 */
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
    const usedNodes = new Set();
    const missingInputs = [];
    let dynamicNode = null;
    let syncInputs = null;
    // Start with the outputs, going backwards and find all the nodes that are
    // needed to compute those outputs.
    const seen = new Set();
    const inputNodeNames = Object.keys(inputs).map(name => parseNodeName(name)[0]);
    let initNodeNames = [];
    if (initNodes != null) {
        initNodeNames = initNodes.map(node => parseNodeName(node.name)[0]);
    }
    const frontier = [...outputs];
    while (frontier.length > 0) {
        const node = frontier.pop();
        if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
            if (dynamicNode == null) {
                dynamicNode = node;
                syncInputs = dynamicNode.children.map(child => child.name)
                    .filter(name => usedNodes.has(name));
            }
        }
        usedNodes.add(node.name);
        // Weights are dead end since we already have their values.
        if (weightMap[node.name] != null) {
            continue;
        }
        // This node is a dead end since it's one of the user-provided inputs.
        if (inputNodeNames.indexOf(node.name) !== -1) {
            continue;
        }
        // This node is a dead end since it doesn't have any inputs.
        if (initNodeNames.indexOf(node.name) !== -1) {
            continue;
        }
        if (node.inputs.length === 0) {
            missingInputs.push(node.name);
            continue;
        }
        node.inputs.forEach(input => {
            // Don't add to the frontier if it is already there.
            if (seen.has(input.name)) {
                return;
            }
            seen.add(input.name);
            frontier.push(input);
        });
    }
    return { inputs, outputs, usedNodes, missingInputs, dynamicNode, syncInputs };
}
/**
 * Given the execution info, return a list of nodes in topological order that
 * need to be executed to compute the output.
 */
function getNodesInTopologicalOrder(graph, weightMap, executionInfo) {
    const { usedNodes, inputs } = executionInfo;
    const frontier = [];
    const inputNodes = Object.keys(inputs)
        .map(name => parseNodeName(name)[0])
        .map(name => graph.nodes[name]);
    const initNodes = graph.initNodes;
    inputNodes.forEach(input => {
        if (usedNodes.has(input.name)) {
            frontier.push(input);
        }
    });
    graph.weights.forEach(weight => {
        if (usedNodes.has(weight.name)) {
            frontier.push(weight);
        }
    });
    if (initNodes != null) {
        initNodes.forEach(node => {
            if (usedNodes.has(node.name)) {
                frontier.push(node);
            }
        });
    }
    const seen = new Set();
    const orderedNodes = [];
    while (frontier.length > 0) {
        const node = frontier.pop();
        seen.add(node.name);
        if (!weightMap[node.name]) {
            orderedNodes.push(node);
        }
        node.children.forEach(child => {
            if (!seen.has(child.name) && usedNodes.has(child.name) &&
                child.inputs.every(input => seen.has(input.name))) {
                frontier.push(child);
            }
        });
    }
    return orderedNodes;
}
const CONTROL_FLOW_OPS = [
    'Switch', 'Merge', 'Enter', 'Exit', 'NextIteration', 'StatelessIf',
    'StatelessWhile', 'if', 'While'
];
const DYNAMIC_SHAPE_OPS = [
    'NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'NonMaxSuppressionV5', 'Where'
];
const HASH_TABLE_OPS = [
    'HashTable', 'HashTableV2', 'LookupTableImport', 'LookupTableImportV2',
    'LookupTableFind', 'LookupTableFindV2'
];
function isControlFlow(node) {
    return CONTROL_FLOW_OPS.indexOf(node.op) >= 0;
}
function isDynamicShape(node) {
    return DYNAMIC_SHAPE_OPS.indexOf(node.op) >= 0;
}
function isHashTable(node) {
    return HASH_TABLE_OPS.indexOf(node.op) >= 0;
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
class GraphExecutor {
    /**
     *
     * @param graph Graph the model or function graph to be executed.
     * @param parent When building function exector you need to set the parent
     * executor. Since the weights and function executor maps are set at parant
     * level, that function executor can access the function maps and weight maps
     * through the parent.
     */
    constructor(graph, parent) {
        this.graph = graph;
        this.parent = parent;
        this.compiledMap = new Map();
        this._weightMap = {};
        this.SEPERATOR = ',';
        this._functions = {};
        this._functionExecutorMap = {};
        this._outputs = graph.outputs;
        this._inputs = graph.inputs;
        this._initNodes = graph.initNodes;
        this._signature = graph.signature;
        this._functions = graph.functions;
        // create sub-graph executors
        if (graph.functions != null) {
            Object.keys(graph.functions).forEach(name => {
                this._functionExecutorMap[name] =
                    new GraphExecutor(graph.functions[name], this);
            });
        }
    }
    get weightIds() {
        return this.parent ? this.parent.weightIds : this._weightIds;
    }
    get functionExecutorMap() {
        return this.parent ? this.parent.functionExecutorMap :
            this._functionExecutorMap;
    }
    get weightMap() {
        return this.parent ? this.parent.weightMap : this._weightMap;
    }
    set weightMap(weightMap) {
        const weightIds = Object.keys(weightMap).map(key => weightMap[key].map(tensor => tensor.id));
        this._weightIds = [].concat(...weightIds);
        this._weightMap = weightMap;
    }
    /**
     * Set `ResourceManager` shared by executors of a model.
     * @param resourceManager: `ResourceManager` of the `GraphModel`.
     */
    set resourceManager(resourceManager) {
        this._resourceManager = resourceManager;
    }
    get inputs() {
        return this._inputs.map(node => {
            return {
                name: node.name,
                shape: node.attrParams['shape'] ?
                    node.attrParams['shape'].value :
                    undefined,
                dtype: node.attrParams['dtype'] ?
                    node.attrParams['dtype'].value :
                    undefined
            };
        });
    }
    get outputs() {
        return this._outputs.map(node => {
            return {
                name: node.name,
                shape: node.attrParams['shape'] ?
                    node.attrParams['shape'].value :
                    undefined,
                dtype: node.attrParams['dtype'] ?
                    node.attrParams['dtype'].value :
                    undefined
            };
        });
    }
    get inputNodes() {
        return this._inputs.map(node => node.signatureKey || node.name);
    }
    get outputNodes() {
        return this._outputs.map((node) => {
            const name = node.signatureKey || node.name;
            return node.defaultOutput ? (`${name}:${node.defaultOutput}`) : name;
        });
    }
    get functions() {
        return Object.keys(this._functions).reduce((map, key) => {
            map[key] = this._functions[key].signature;
            return map;
        }, {});
    }
    getCompilationKey(inputs, outputs) {
        const sortedInputs = inputs.map(node => node.name).sort();
        const sortedOutputs = outputs.map(node => node.name).sort();
        return sortedInputs.join(this.SEPERATOR) + '--' +
            sortedOutputs.join(this.SEPERATOR);
    }
    /**
     * Compiles the inference graph and returns the minimal set of nodes that are
     * required for execution, in the correct execution order.
     */
    compile(inputs, outputs) {
        const executionInfo = getExecutionSubgraph(inputs, outputs, this.weightMap, this._initNodes);
        const { missingInputs, dynamicNode, syncInputs } = executionInfo;
        if (dynamicNode != null) {
            throw new Error(`This execution contains the node '${dynamicNode.name}', which has ` +
                `the dynamic op '${dynamicNode.op}'. Please use ` +
                `model.executeAsync() instead. Alternatively, to avoid the ` +
                `dynamic ops, specify the inputs [${syncInputs}]`);
        }
        if (missingInputs.length > 0) {
            const outNames = outputs.map(n => n.name);
            const inNames = Object.keys(inputs);
            throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs ` +
                `[${inNames}]. Missing the following inputs: [${missingInputs}]`);
        }
        return getNodesInTopologicalOrder(this.graph, this.weightMap, executionInfo);
    }
    /**
     * Executes the inference for given input tensors.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs Optional. output node name from the Tensorflow model, if
     * no outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     */
    execute(inputs, outputs) {
        inputs = this.mapInputs(inputs);
        const names = Object.keys(inputs).sort();
        this.checkInputs(inputs);
        this.checkInputShapeAndType(inputs);
        outputs = this.mapOutputs(outputs);
        this.checkOutputs(outputs);
        const inputNodes = names.map(name => this.graph.nodes[parseNodeName(name)[0]]);
        const outputNodeNames = outputs.map(name => parseNodeName(name)[0]);
        let outputNodes = outputNodeNames.map(name => this.graph.nodes[name]);
        // If no outputs are specified, then use the default outputs of the model.
        if (outputNodes.length === 0) {
            outputNodes = this._outputs;
        }
        const compilationKey = this.getCompilationKey(inputNodes, outputNodes);
        // Do nothing if the compiled graph cache contains the input.
        let orderedNodes = this.compiledMap.get(compilationKey);
        if (orderedNodes == null) {
            orderedNodes = this.compile(inputs, outputNodes);
            this.compiledMap.set(compilationKey, orderedNodes);
        }
        const tensorArrayMap = {};
        const tensorListMap = {};
        return tidy(() => {
            const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
            const tensorsMap = Object.assign({}, this.weightMap);
            Object.keys(inputs).forEach(name => {
                const [nodeName, index] = parseNodeName(name);
                const tensors = [];
                tensors[index] = inputs[name];
                tensorsMap[nodeName] = tensors;
            });
            const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
            const intermediateTensorConsumerCount = {};
            for (let i = 0; i < orderedNodes.length; i++) {
                const node = orderedNodes[i];
                if (!tensorsMap[node.name]) {
                    const tensors = executeOp$h(node, tensorsMap, context, this._resourceManager);
                    if (isPromise(tensors)) {
                        throw new Error(`The execution of the op '${node.op}' returned a promise. ` +
                            `Please use model.executeAsync() instead.`);
                    }
                    tensorsMap[node.name] = tensors;
                    this.checkTensorForDisposal(node.name, node, tensorsMap, context, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount);
                }
            }
            // dispose the context for the root executor
            if (this.parent == null) {
                context.dispose(tensorsToKeep);
            }
            return outputs.map(name => getTensor(name, tensorsMap, context));
        });
    }
    getFrozenTensorIds(tensorMap) {
        const ids = [].concat.apply([], Object.keys(tensorMap)
            .map(key => tensorMap[key])
            .map(tensors => tensors.map(tensor => tensor.id)));
        return new Set(ids);
    }
    checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
        // Skip output nodes and any control flow nodes, since its dependency is
        // tricky to track correctly.
        if (node.category === 'control' || outputNames.indexOf(nodeName) !== -1) {
            return;
        }
        tensorMap[nodeName].forEach(tensor => {
            if (tensor != null) {
                intermediateTensorConsumerCount[tensor.id] =
                    (intermediateTensorConsumerCount[tensor.id] || 0) +
                        node.children.length;
            }
        });
        node.inputs.forEach(input => {
            // Skip any control flow nodes, since its dependency is tricky to track
            // correctly.
            if (input.category !== 'control') {
                const tensors = getTensorsForCurrentContenxt(input.name, tensorMap, context);
                if (tensors != null) {
                    tensors.forEach(tensor => {
                        if (tensor && !tensorsToKeep.has(tensor.id)) {
                            const count = intermediateTensorConsumerCount[tensor.id];
                            if (count === 1) {
                                tensor.dispose();
                                delete intermediateTensorConsumerCount[tensor.id];
                            }
                            else if (count != null) {
                                // only intermediate nodes has count set, inputs and weights are
                                // not.
                                intermediateTensorConsumerCount[tensor.id]--;
                            }
                        }
                    });
                }
            }
        });
    }
    /**
     * Executes the inference for given input tensors in Async fashion.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     */
    async executeAsync(inputs, outputs) {
        return this._executeAsync(inputs, outputs);
    }
    /**
     * Executes the inference for given input tensors in Async fashion.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs Optional. output node name from the Tensorflow model,
     * if no outputs are specified, the default outputs of the model would be
     * used. You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     * @param isFunctionExecution Optional. Flag for executing a function.
     * @param tensorArrayMap Optional, global TensorArray map by id. Used for
     * function execution.
     * @param tensorArrayMap Optinal global TensorList map by id. Used for
     * function execution.
     */
    async _executeAsync(inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
        if (!isFunctionExecution) {
            inputs = this.mapInputs(inputs);
            this.checkInputs(inputs);
            this.checkInputShapeAndType(inputs);
            outputs = this.mapOutputs(outputs);
            this.checkOutputs(outputs);
        }
        const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
        // Graph with control flow op requires runtime evaluation of the execution
        // order, while without control flow the execution order is pre-determined
        // in the compile method.
        const tensorMap = await this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
        const results = outputs.map(name => getTensor(name, tensorMap, context));
        // dispose all the intermediate tensors
        const outputIds = results.map(t => t.id);
        const inputIds = Object.keys(inputs).map(name => inputs[name].id);
        const keepIds = new Set([...outputIds, ...inputIds, ...this.weightIds]);
        Object.keys(tensorMap).forEach(key => {
            const tensorArray = tensorMap[key];
            tensorArray.forEach(tensor => {
                if (tensor && !tensor.isDisposed && !keepIds.has(tensor.id)) {
                    tensor.dispose();
                }
            });
        });
        // dispose the context for the root executor
        if (this.parent == null) {
            context.dispose(keepIds);
        }
        return results;
    }
    async executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
        const mappedInputs = inputs.reduce((map, tensor, index) => {
            map[this.inputs[index].name] = tensor;
            return map;
        }, {});
        return this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap);
    }
    /**
     * When there are control flow nodes in the graph, the graph execution use
     * ExecutionContext to keep track of the frames and loop iterators.
     * @param inputs placeholder tensors for the graph.
     * @param context the execution context object for current execution.
     * @param outputNames Optional. output node name from the Tensorflow model,
     * if no outputs are specified, the default outputs of the model would be
     * used. You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     * @param isFunctionExecution Flag for executing a function.
     */
    async executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
        const names = Object.keys(inputs);
        const inputNodes = names.map(name => this.graph.nodes[parseNodeName(name)[0]]);
        const outputNodeNames = outputNames.map(name => parseNodeName(name)[0]);
        let outputNodes = outputNodeNames.map(name => this.graph.nodes[name]);
        // If no outputs are specified, then use the default outputs of the model.
        if (outputNodes.length === 0) {
            outputNodes = this._outputs;
        }
        const { usedNodes, missingInputs, dynamicNode, syncInputs } = getExecutionSubgraph(inputs, outputNodes, this.weightMap, this._initNodes);
        // First nodes to execute include inputNodes, weights, and initNodes.
        const stack = [
            ...inputNodes, ...this.graph.weights, ...(this._initNodes || [])
        ].map(node => {
            return { node, contexts: context.currentContext };
        });
        const tensorsMap = Object.assign({}, this.weightMap);
        Object.keys(inputs).forEach(name => {
            const [nodeName, index] = parseNodeName(name);
            const tensors = [];
            tensors[index] = inputs[name];
            tensorsMap[nodeName] = tensors;
        });
        const intermediateTensorConsumerCount = {};
        const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
        const added = {};
        while (stack.length > 0) {
            const promises = this.processStack(inputNodes, stack, context, tensorsMap, added, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount, usedNodes);
            await Promise.all(promises);
        }
        if (dynamicNode == null && !isFunctionExecution) {
            console.warn(`This model execution did not contain any nodes with control flow ` +
                `or dynamic output shapes. You can use model.execute() instead.`);
        }
        const missingOutputs = outputNodes
            .filter(node => !isControlFlow(node) &&
            !getTensor(node.name, tensorsMap, context))
            .map(node => node.name);
        if (missingOutputs.length > 0) {
            let alternativeMsg = '';
            if (dynamicNode != null) {
                alternativeMsg =
                    `Alternatively, to avoid the dynamic ops, use model.execute() ` +
                        `and specify the inputs [${syncInputs}]`;
            }
            throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided ` +
                `inputs [${names}]. Consider providing the following inputs: ` +
                `[${missingInputs}]. ${alternativeMsg}`);
        }
        return tensorsMap;
    }
    processStack(inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount, usedNodes) {
        const promises = [];
        while (stack.length > 0) {
            const item = stack.pop();
            context.currentContext = item.contexts;
            let nodeName = '';
            // The tensor of the Enter op with isConstant set should be set
            // in the parent scope, so it will be available as constant for the
            // whole loop.
            if (item.node.op === 'Enter' &&
                getParamValue('isConstant', item.node, tensorMap, context)) {
                [nodeName] = getNodeNameAndIndex(item.node.name, context);
            }
            // only process nodes that are not in the tensorMap yet, this include
            // inputNodes and internal initNodes.
            if (tensorMap[item.node.name] == null) {
                const tensors = executeOp$h(item.node, tensorMap, context, this._resourceManager);
                if (!nodeName) {
                    [nodeName] = getNodeNameAndIndex(item.node.name, context);
                }
                const currentContext = context.currentContext;
                if (isPromise(tensors)) {
                    promises.push(tensors.then(t => {
                        tensorMap[nodeName] = t;
                        context.currentContext = currentContext;
                        this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                        this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                        return t;
                    }));
                }
                else {
                    tensorMap[nodeName] = tensors;
                    this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
                    this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                }
            }
            else {
                this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
            }
        }
        return promises;
    }
    processChildNodes(node, stack, context, tensorMap, added, usedNodes) {
        node.children.forEach((childNode) => {
            const [nodeName,] = getNodeNameAndIndex(childNode.name, context);
            if (added[nodeName] || !usedNodes.has(childNode.name)) {
                return;
            }
            // Merge op can be pushed if any of its inputs has value.
            if (childNode.op === 'Merge') {
                if (childNode.inputNames.some(name => {
                    return !!getTensor(name, tensorMap, context);
                })) {
                    added[nodeName] = true;
                    stack.push({ contexts: context.currentContext, node: childNode });
                }
            }
            else // Otherwise all inputs must to have value.
             if (childNode.inputNames.every(name => {
                return !!getTensor(name, tensorMap, context);
            })) {
                added[nodeName] = true;
                stack.push({ contexts: context.currentContext, node: childNode });
            }
        });
    }
    /**
     * Releases the memory used by the weight tensors.
     */
    dispose() {
        Object.keys(this.weightMap)
            .forEach(key => this.weightMap[key].forEach(tensor => tensor.dispose()));
    }
    checkInputShapeAndType(inputs) {
        Object.keys(inputs).forEach(name => {
            const input = inputs[name];
            const [nodeName,] = parseNodeName(name);
            const node = this.graph.nodes[nodeName];
            if (node.attrParams['shape'] && node.attrParams['shape'].value) {
                const shape = node.attrParams['shape'].value;
                const match = shape.length === input.shape.length &&
                    input.shape.every((dim, index) => shape[index] === -1 || shape[index] === dim);
                assert(match, () => `The shape of dict['${node.name}'] provided in ` +
                    `model.execute(dict) must be [${shape}], but was ` +
                    `[${input.shape}]`);
            }
            if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
                assert(input.dtype === node.attrParams['dtype'].value, () => `The dtype of dict['${node.name}'] provided in ` +
                    `model.execute(dict) must be ` +
                    `${node.attrParams['dtype'].value}, but was ${input.dtype}`);
            }
        });
    }
    mapInputs(inputs) {
        const result = {};
        for (const inputName in inputs) {
            if (this._signature != null && this._signature.inputs != null &&
                this._signature.inputs[inputName] != null) {
                const tensor = this._signature.inputs[inputName];
                result[tensor.name] = inputs[inputName];
            }
            else {
                result[inputName] = inputs[inputName];
            }
        }
        return result;
    }
    checkInputs(inputs) {
        const notInGraph = Object.keys(inputs).filter(name => {
            const [nodeName] = parseNodeName(name);
            return this.graph.nodes[nodeName] == null;
        });
        if (notInGraph.length > 0) {
            throw new Error(`The dict provided in model.execute(dict) has ` +
                `keys: [${notInGraph}] that are not part of graph`);
        }
    }
    mapOutputs(outputs) {
        return outputs.map(name => {
            if (this._signature != null && this._signature.outputs != null &&
                this._signature.outputs[name] != null) {
                const tensor = this._signature.outputs[name];
                return tensor.name;
            }
            return name;
        }, {});
    }
    checkOutputs(outputs) {
        outputs.forEach(name => {
            const [normalizedName] = parseNodeName(name);
            if (!this.graph.nodes[normalizedName]) {
                throw new Error(`The output '${name}' is not found in the graph`);
            }
        });
    }
}

/**
 * Contains global resources of a model.
 */
class ResourceManager {
    constructor(hashTableNameToHandle = {}, hashTableMap = {}) {
        this.hashTableNameToHandle = hashTableNameToHandle;
        this.hashTableMap = hashTableMap;
    }
    /**
     * Register a `HashTable` in the resource manager.
     *
     * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
     * where id is the table handle tensor's id.
     *
     * @param name Op node name that creates the `HashTable`.
     * @param hashTable The `HashTable` to be added to resource manager.
     */
    addHashTable(name, hashTable) {
        this.hashTableNameToHandle[name] = hashTable.handle;
        this.hashTableMap[hashTable.id] = hashTable;
    }
    /**
     * Get the table handle by node name.
     * @param name Op node name that creates the `HashTable`. This name is also
     *     used in the inputs list of lookup and import `HashTable` ops.
     */
    getHashTableHandleByName(name) {
        return this.hashTableNameToHandle[name];
    }
    /**
     * Get the actual `HashTable` by its handle tensor's id.
     * @param id The id of the handle tensor.
     */
    getHashTableById(id) {
        return this.hashTableMap[id];
    }
    /**
     * Dispose `ResourceManager`, including its hashTables and tensors in them.
     */
    dispose() {
        for (const key in this.hashTableMap) {
            this.hashTableMap[key].clearAndClose();
            delete this.hashTableMap[key];
        }
        for (const name in this.hashTableNameToHandle) {
            this.hashTableNameToHandle[name].dispose();
            delete this.hashTableNameToHandle[name];
        }
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
const TFHUB_SEARCH_PARAM = '?tfjs-format=file';
const DEFAULT_MODEL_NAME = 'model.json';
/**
 * A `tf.GraphModel` is a directed, acyclic graph built from a
 * SavedModel GraphDef and allows inference execution.
 *
 * A `tf.GraphModel` can only be created by loading from a model converted from
 * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
 * the command line converter tool and loaded via `tf.loadGraphModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */
class GraphModel {
    /**
     * @param modelUrl url for the model, or an `io.IOHandler`.
     * @param weightManifestUrl url for the weight file generated by
     * scripts/convert.py script.
     * @param requestOption options for Request, which allows to send credentials
     * and custom headers.
     * @param onProgress Optional, progress callback function, fired periodically
     * before the load is completed.
     */
    constructor(modelUrl, loadOptions = {}) {
        this.modelUrl = modelUrl;
        this.loadOptions = loadOptions;
        this.version = 'n/a';
        if (loadOptions == null) {
            this.loadOptions = {};
        }
        this.resourceManager = new ResourceManager();
    }
    // Returns the version information for the tensorflow model GraphDef.
    get modelVersion() {
        return this.version;
    }
    get inputNodes() {
        return this.executor.inputNodes;
    }
    get outputNodes() {
        return this.executor.outputNodes;
    }
    get inputs() {
        return this.executor.inputs;
    }
    get outputs() {
        return this.executor.outputs;
    }
    get weights() {
        return this.executor.weightMap;
    }
    get metadata() {
        return this.artifacts.userDefinedMetadata;
    }
    get modelSignature() {
        return this.signature;
    }
    findIOHandler() {
        const path = this.modelUrl;
        if (path.load != null) {
            // Path is an IO Handler.
            this.handler = path;
        }
        else if (this.loadOptions.requestInit != null) {
            this.handler = browserHTTPRequest(path, this.loadOptions);
        }
        else {
            const handlers = getLoadHandlers(path, this.loadOptions);
            if (handlers.length === 0) {
                // For backward compatibility: if no load handler can be found,
                // assume it is a relative http path.
                handlers.push(browserHTTPRequest(path, this.loadOptions));
            }
            else if (handlers.length > 1) {
                throw new Error(`Found more than one (${handlers.length}) load handlers for ` +
                    `URL '${[path]}'`);
            }
            this.handler = handlers[0];
        }
    }
    /**
     * Loads the model and weight files, construct the in memory weight map and
     * compile the inference graph.
     */
    async load() {
        this.findIOHandler();
        if (this.handler.load == null) {
            throw new Error('Cannot proceed with model loading because the IOHandler provided ' +
                'does not have the `load` method implemented.');
        }
        const artifacts = await this.handler.load();
        return this.loadSync(artifacts);
    }
    /**
     * Synchronously construct the in memory weight map and
     * compile the inference graph. Also initialize hashtable if any.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    loadSync(artifacts) {
        this.artifacts = artifacts;
        const graph = this.artifacts.modelTopology;
        let signature;
        if (this.artifacts.userDefinedMetadata != null &&
            this.artifacts.userDefinedMetadata.signature != null) {
            signature = // tslint:disable-next-line:no-any
                this.artifacts.userDefinedMetadata.signature;
        }
        else {
            signature = this.artifacts.signature;
        }
        this.signature = signature;
        this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
        const weightMap = decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
        this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(graph, this.signature));
        this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
        // Attach a model-level resourceManager to each executor to share resources,
        // such as `HashTable`.
        this.executor.resourceManager = this.resourceManager;
        if (artifacts.modelInitializer != null &&
            artifacts.modelInitializer.node != null) {
            const initializer = OperationMapper.Instance.transformGraph(artifacts.modelInitializer);
            this.initializer = new GraphExecutor(initializer);
            this.initializer.weightMap = this.executor.weightMap;
            // Attach a model-level resourceManager to the initializer, the
            // hashTables created from when executing the initializer will be stored
            // in the resourceManager.
            this.initializer.resourceManager = this.resourceManager;
            this.initializer.executeAsync({}, []);
        }
        return true;
    }
    /**
     * Save the configuration and/or weights of the GraphModel.
     *
     * An `IOHandler` is an object that has a `save` method of the proper
     * signature defined. The `save` method manages the storing or
     * transmission of serialized data ("artifacts") that represent the
     * model's topology and weights onto or via a specific medium, such as
     * file downloads, local storage, IndexedDB in the web browser and HTTP
     * requests to a server. TensorFlow.js provides `IOHandler`
     * implementations for a number of frequently used saving mediums, such as
     * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
     * for more details.
     *
     * This method also allows you to refer to certain types of `IOHandler`s
     * as URL-like string shortcuts, such as 'localstorage://' and
     * 'indexeddb://'.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const modelUrl =
     *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
     * const model = await tf.loadGraphModel(modelUrl);
     * const zeros = tf.zeros([1, 224, 224, 3]);
     * model.predict(zeros).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * model.predict(zeros).print();
     * ```
     *
     * @param handlerOrURL An instance of `IOHandler` or a URL-like,
     * scheme-based string shortcut for `IOHandler`.
     * @param config Options for saving the model.
     * @returns A `Promise` of `SaveResult`, which summarizes the result of
     * the saving, such as byte sizes of the saved artifacts for the model's
     *   topology and weight values.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */
    async save(handlerOrURL, config) {
        if (typeof handlerOrURL === 'string') {
            const handlers = getSaveHandlers(handlerOrURL);
            if (handlers.length === 0) {
                throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
            }
            else if (handlers.length > 1) {
                throw new Error(`Found more than one (${handlers.length}) save handlers for ` +
                    `URL '${handlerOrURL}'`);
            }
            handlerOrURL = handlers[0];
        }
        if (handlerOrURL.save == null) {
            throw new Error('GraphModel.save() cannot proceed because the IOHandler ' +
                'provided does not have the `save` attribute defined.');
        }
        return handlerOrURL.save(this.artifacts);
    }
    /**
     * Execute the inference for the input tensors.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
     * inputs params should be in either `tf.Tensor`[] if the input order is
     * fixed, or otherwise NamedTensorMap format.
     *
     * For model with multiple inputs, we recommend you use NamedTensorMap as the
     * input type, if you use `tf.Tensor`[], the order of the array needs to
     * follow the
     * order of inputNodes array. @see {@link GraphModel.inputNodes}
     *
     * You can also feed any intermediate nodes using the NamedTensorMap as the
     * input type. For example, given the graph
     *    InputNode => Intermediate => OutputNode,
     * you can execute the subgraph Intermediate => OutputNode by calling
     *    model.execute('IntermediateNode' : tf.tensor(...));
     *
     * This is useful for models that uses tf.dynamic_rnn, where the intermediate
     * state needs to be fed manually.
     *
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size and
     * output node names. Currently the batch size option is ignored for graph
     * model.
     *
     * @returns Inference result tensors. The output would be single `tf.Tensor`
     * if model has single output node, otherwise Tensor[] or NamedTensorMap[]
     * will be returned for model with multiple outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    predict(inputs, config) {
        return this.execute(inputs, this.outputNodes);
    }
    normalizeInputs(inputs) {
        if (!(inputs instanceof Tensor) && !Array.isArray(inputs)) {
            // The input is already a NamedTensorMap.
            return inputs;
        }
        inputs = Array.isArray(inputs) ? inputs : [inputs];
        if (inputs.length !== this.inputNodes.length) {
            throw new Error('Input tensor count mismatch,' +
                `the graph model has ${this.inputNodes.length} placeholders, ` +
                `while there are ${inputs.length} input tensors.`);
        }
        return this.inputNodes.reduce((map, inputName, i) => {
            map[inputName] = inputs[i];
            return map;
        }, {});
    }
    normalizeOutputs(outputs) {
        outputs = outputs || this.outputNodes;
        return !Array.isArray(outputs) ? [outputs] : outputs;
    }
    /**
     * Executes inference for the model for given input tensors.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no
     * outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     *
     * @returns A single tensor if provided with a single output or no outputs
     * are provided and there is only one default output, otherwise return a
     * tensor array. The order of the tensor array is the same as the outputs
     * if provided, otherwise the order of outputNodes attribute of the model.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    execute(inputs, outputs) {
        inputs = this.normalizeInputs(inputs);
        outputs = this.normalizeOutputs(outputs);
        const result = this.executor.execute(inputs, outputs);
        return result.length > 1 ? result : result[0];
    }
    /**
     * Executes inference for the model for given input tensors in async
     * fashion, use this method when your model contains control flow ops.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     *
     * @returns A Promise of single tensor if provided with a single output or
     * no outputs are provided and there is only one default output, otherwise
     * return a tensor map.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    async executeAsync(inputs, outputs) {
        inputs = this.normalizeInputs(inputs);
        outputs = this.normalizeOutputs(outputs);
        const result = await this.executor.executeAsync(inputs, outputs);
        return result.length > 1 ? result : result[0];
    }
    convertTensorMapToTensorsMap(map) {
        return Object.keys(map).reduce((newMap, key) => {
            newMap[key] = [map[key]];
            return newMap;
        }, {});
    }
    /**
     * Releases the memory used by the weight tensors and resourceManager.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */
    dispose() {
        this.executor.dispose();
        if (this.initializer) {
            this.initializer.dispose();
        }
        this.resourceManager.dispose();
    }
}
/**
 * Load a graph model given a URL to the model definition.
 *
 * Example of loading MobileNetV2 from a URL and making a prediction with a
 * zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
 * const model = await tf.loadGraphModel(modelUrl);
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 *
 * Example of loading MobileNetV2 from a TF Hub URL and making a prediction with
 * a zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
 * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 * @param modelUrl The url or an `io.IOHandler` that loads the model.
 * @param options Options for the HTTP request, which allows to send credentials
 *    and custom headers.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */
async function loadGraphModel(modelUrl, options = {}) {
    if (modelUrl == null) {
        throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' +
            'or an IOHandler that loads the model');
    }
    if (options == null) {
        options = {};
    }
    if (options.fromTFHub) {
        if (modelUrl.load == null) {
            if (!modelUrl.endsWith('/')) {
                modelUrl = modelUrl + '/';
            }
            modelUrl = `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
        }
    }
    const model = new GraphModel(modelUrl, options);
    await model.load();
    return model;
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
var b=function(){return (b=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function P(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{c(o.next(t));}catch(t){r(t);}}function a(t){try{c(o.throw(t));}catch(t){r(t);}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e);}))).then(s,a);}c((o=o.apply(t,e||[])).next());}))}function v(t,e){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s);}catch(t){r=[6,t],o=0;}finally{n=i=0;}if(5&r[0])throw r[1];return {value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}const w=t=>({startEndTensor:t,startPoint:slice(t,[0,0],[-1,2]),endPoint:slice(t,[0,2],[-1,2])}),x={strides:[8,16],anchors:[2,6]};function E(t,r){let s,a,c;if(t.topLeft instanceof Tensor&&t.bottomRight instanceof Tensor){const[h,u]=tidy(()=>[concat([sub(r-1,t.topLeft.slice(0,1)),t.topLeft.slice(1,1)]),concat([sub(r-1,t.bottomRight.slice(0,1)),t.bottomRight.slice(1,1)])]);s=h,a=u,null!=t.landmarks&&(c=tidy(()=>{const n=sub(tensor1d([r-1,0]),t.landmarks),s=tensor1d([1,-1]);return mul(n,s)}));}else {const[e,n]=t.topLeft,[o,i]=t.bottomRight;s=[r-1-e,n],a=[r-1-o,i],null!=t.landmarks&&(c=t.landmarks.map(t=>[r-1-t[0],t[1]]));}const h={topLeft:s,bottomRight:a};return null!=c&&(h.landmarks=c),null!=t.probability&&(h.probability=t.probability instanceof Tensor?t.probability.clone():t.probability),h}function L(t,e){return tidy(()=>{let n;return n=t.hasOwnProperty("box")?t.box:t,((t,e)=>{const n=mul(t.startPoint,e),i=mul(t.endPoint,e),s=concat2d([n,i],1);return w(s)})(n,e).startEndTensor.squeeze()})}class k{constructor(n,o,i,r,s,a){this.blazeFaceModel=n,this.width=o,this.height=i,this.maxFaces=r,this.anchorsData=function(t,e,n){const o=[];for(let i=0;i<n.strides.length;i++){const r=n.strides[i],s=Math.floor((e+r-1)/r),a=Math.floor((t+r-1)/r),c=n.anchors[i];for(let t=0;t<s;t++){const e=r*(t+.5);for(let t=0;t<a;t++){const n=r*(t+.5);for(let t=0;t<c;t++)o.push([n,e]);}}}return o}(o,i,x),this.anchors=tensor2d(this.anchorsData),this.inputSizeData=[o,i],this.inputSize=tensor1d([o,i]),this.iouThreshold=s,this.scoreThreshold=a;}async getBoundingBoxes(e,l,f=!0){const[p,m,g]=tidy(()=>{const t=e.resizeBilinear([this.width,this.height]),n=mul(sub(t.div(255),.5),2),c=this.blazeFaceModel.predict(n).squeeze(),u=function(t,e,n){const a=slice(t,[0,1],[-1,2]),c=add(a,e),u=slice(t,[0,3],[-1,2]),l=div(u,n),f=div(c,n),p=div(l,2),m=sub(f,p),g=add(f,p),y=mul(m,n),b=mul(g,n);return concat2d([y,b],1)}(c,this.anchors,this.inputSize),l=slice(c,[0,0],[-1,1]);return [c,u,sigmoid(l).squeeze()]}),y=console.warn;console.warn=()=>{};const b=image$1.nonMaxSuppression(m,g,this.maxFaces,this.iouThreshold,this.scoreThreshold);console.warn=y;const P=await b.array();b.dispose();let v=P.map(t=>slice(m,[t,0],[1,-1]));l||(v=await Promise.all(v.map(async t=>{const e=await t.array();return t.dispose(),e})));const x=e.shape[1],E=e.shape[2];let L;L=l?div([E,x],this.inputSize):[E/this.inputSizeData[0],x/this.inputSizeData[1]];const k=[];for(let e=0;e<v.length;e++){const o=v[e],i=tidy(()=>{const n=w(o instanceof Tensor?o:tensor2d(o));if(!f)return n;const i=P[e];let r;return r=l?this.anchors.slice([i,0],[1,2]):this.anchorsData[i],{box:n,landmarks:slice(p,[i,5],[1,-1]).squeeze().reshape([6,-1]),probability:slice(g,[i],[1]),anchor:r}});k.push(i);}return m.dispose(),g.dispose(),p.dispose(),{boxes:k,scaleFactor:L}}async estimateFaces(t,e=!1,o=!1,i=!0){const[,r]=function(t){return t instanceof Tensor?[t.shape[0],t.shape[1]]:[t.height,t.width]}(t),s=tidy(()=>(t instanceof Tensor||(t=fromPixels(t)),t.toFloat().expandDims(0))),{boxes:a,scaleFactor:c}=await this.getBoundingBoxes(s,e,i);return s.dispose(),e?a.map(t=>{const e=L(t,c);let n={topLeft:e.slice([0],[2]),bottomRight:e.slice([2],[2])};if(i){const{landmarks:e,probability:o,anchor:i}=t,r=e.add(i).mul(c);n.landmarks=r,n.probability=o;}return o&&(n=E(n,r)),n}):Promise.all(a.map(async t=>{const e=L(t,c);let n;if(i){const[o,i,r]=await Promise.all([t.landmarks,e,t.probability].map(async t=>t.array())),s=t.anchor,[a,h]=c,u=o.map(t=>[(t[0]+s[0])*a,(t[1]+s[1])*h]);n={topLeft:i.slice(0,2),bottomRight:i.slice(2),landmarks:u,probability:r},(t=>{t.startEndTensor.dispose(),t.startPoint.dispose(),t.endPoint.dispose();})(t.box),t.landmarks.dispose(),t.probability.dispose();}else {const t=await e.array();n={topLeft:t.slice(0,2),bottomRight:t.slice(2)};}return e.dispose(),o&&(n=E(n,r)),n}))}}async function M({maxFaces:t=10,inputWidth:e=128,inputHeight:n=128,iouThreshold:o=.3,scoreThreshold:i=.75}={}){const r=await loadGraphModel("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1",{fromTFHub:!0});return new k(r,e,n,t,o,i)}var I={silhouette:[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],lipsUpperOuter:[61,185,40,39,37,0,267,269,270,409,291],lipsLowerOuter:[146,91,181,84,17,314,405,321,375,291],lipsUpperInner:[78,191,80,81,82,13,312,311,310,415,308],lipsLowerInner:[78,95,88,178,87,14,317,402,318,324,308],rightEyeUpper0:[246,161,160,159,158,157,173],rightEyeLower0:[33,7,163,144,145,153,154,155,133],rightEyeUpper1:[247,30,29,27,28,56,190],rightEyeLower1:[130,25,110,24,23,22,26,112,243],rightEyeUpper2:[113,225,224,223,222,221,189],rightEyeLower2:[226,31,228,229,230,231,232,233,244],rightEyeLower3:[143,111,117,118,119,120,121,128,245],rightEyebrowUpper:[156,70,63,105,66,107,55,193],rightEyebrowLower:[35,124,46,53,52,65],rightEyeIris:[473,474,475,476,477],leftEyeUpper0:[466,388,387,386,385,384,398],leftEyeLower0:[263,249,390,373,374,380,381,382,362],leftEyeUpper1:[467,260,259,257,258,286,414],leftEyeLower1:[359,255,339,254,253,252,256,341,463],leftEyeUpper2:[342,445,444,443,442,441,413],leftEyeLower2:[446,261,448,449,450,451,452,453,464],leftEyeLower3:[372,340,346,347,348,349,350,357,465],leftEyebrowUpper:[383,300,293,334,296,336,285,417],leftEyebrowLower:[265,353,276,283,282,295],leftEyeIris:[468,469,470,471,472],midwayBetweenEyes:[168],noseTip:[1],noseBottom:[2],noseRightCorner:[98],noseLeftCorner:[327],rightCheek:[205],leftCheek:[425]};function B(t){return [Math.abs(t.endPoint[0]-t.startPoint[0]),Math.abs(t.endPoint[1]-t.startPoint[1])]}function C(t){return [t.startPoint[0]+(t.endPoint[0]-t.startPoint[0])/2,t.startPoint[1]+(t.endPoint[1]-t.startPoint[1])/2]}function O(t,e){void 0===e&&(e=1.5);var n=C(t),o=B(t),i=[e*o[0]/2,e*o[1]/2];return {startPoint:[n[0]-i[0],n[1]-i[1]],endPoint:[n[0]+i[0],n[1]+i[1]],landmarks:t.landmarks}}var R=[[1,0,0],[0,1,0],[0,0,1]];function F(t,e){var n,o=Math.PI/2-Math.atan2(-(e[1]-t[1]),e[0]-t[0]);return (n=o)-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function T(t,e){return [[1,0,t],[0,1,e],[0,0,1]]}function z(t,e){for(var n=0,o=0;o<t.length;o++)n+=t[o]*e[o];return n}function D(t,e){for(var n=[],o=0;o<t.length;o++)n.push(t[o][e]);return n}function U(t,e){for(var n=[],o=t.length,i=0;i<o;i++){n.push([]);for(var r=0;r<o;r++)n[i].push(z(t[i],D(e,r)));}return n}function S(t,e){var n=Math.cos(t),o=Math.sin(t),i=[[n,-o,0],[o,n,0],[0,0,1]],r=U(T(e[0],e[1]),i);return U(r,T(-e[0],-e[1]))}var W=[13,I.midwayBetweenEyes[0]],H=[3,2],j=I.leftEyeLower0,A=[j[0],j[j.length-1]],q=I.rightEyeLower0,V=[q[0],q[q.length-1]],_=[{key:"EyeUpper0",indices:[9,10,11,12,13,14,15]},{key:"EyeUpper1",indices:[25,26,27,28,29,30,31]},{key:"EyeUpper2",indices:[41,42,43,44,45,46,47]},{key:"EyeLower0",indices:[0,1,2,3,4,5,6,7,8]},{key:"EyeLower1",indices:[16,17,18,19,20,21,22,23,24]},{key:"EyeLower2",indices:[32,33,34,35,36,37,38,39,40]},{key:"EyeLower3",indices:[54,55,56,57,58,59,60,61,62]},{key:"EyebrowUpper",indices:[63,64,65,66,67,68,69,70]},{key:"EyebrowLower",indices:[48,49,50,51,52,53]}];function G(t,e,n,o){for(var i=0;i<_.length;i++){var r=_[i],s=r.key,a=r.indices,c=I[""+n+s];if(null==o||o.includes(s))for(var h=0;h<a.length;h++){var u=a[h];t[c[h]]=[e[u][0],e[u][1],(e[u][2]+t[c[h]][2])/2];}}}var K=function(){function e(t,e,n,o,i,r,s){this.regionsOfInterest=[],this.runsWithoutFaceDetector=0,this.boundingBoxDetector=t,this.meshDetector=e,this.irisModel=s,this.meshWidth=n,this.meshHeight=o,this.maxContinuousChecks=i,this.maxFaces=r;}return e.prototype.transformRawCoords=function(t,e,n,o){var i,r,s,a,c=this,h=B({startPoint:e.startPoint,endPoint:e.endPoint}),u=[h[0]/this.meshWidth,h[1]/this.meshHeight],l=t.map((function(t){return [u[0]*(t[0]-c.meshWidth/2),u[1]*(t[1]-c.meshHeight/2),t[2]]})),d=S(n,[0,0]),f=l.map((function(t){return function(t,e){return [z(t,e[0]),z(t,e[1])]}(t,d).concat([t[2]])})),p=(r=[[(i=o)[0][0],i[1][0]],[i[0][1],i[1][1]]],s=[i[0][2],i[1][2]],a=[-z(r[0],s),-z(r[1],s)],[r[0].concat(a[0]),r[1].concat(a[1]),[0,0,1]]),m=C({startPoint:e.startPoint,endPoint:e.endPoint}).concat([1]),g=[z(m,p[0]),z(m,p[1])];return f.map((function(t){return [t[0]+g[0],t[1]+g[1],t[2]]}))},e.prototype.getLeftToRightEyeDepthDifference=function(t){return t[A[0]][2]-t[V[0]][2]},e.prototype.getEyeBox=function(t,e,n,o,i){void 0===i&&(i=!1);var r=function(t){var e=C(t),n=B(t),o=Math.max.apply(Math,n)/2;return {startPoint:[e[0]-o,e[1]-o],endPoint:[e[0]+o,e[1]+o],landmarks:t.landmarks}}(O(this.calculateLandmarksBoundingBox([t[n],t[o]]),2.3)),s=B(r),a=image$1.cropAndResize(e,[[r.startPoint[1]/this.meshHeight,r.startPoint[0]/this.meshWidth,r.endPoint[1]/this.meshHeight,r.endPoint[0]/this.meshWidth]],[0],[64,64]);return i&&(a=image$1.flipLeftRight(a)),{box:r,boxSize:s,crop:a}},e.prototype.getEyeCoords=function(t,e,n,o){void 0===o&&(o=!1);for(var i=[],r=0;r<76;r++){var s=t[3*r],a=t[3*r+1],c=t[3*r+2];i.push([(o?1-s/64:s/64)*n[0]+e.startPoint[0],a/64*n[1]+e.startPoint[1],c]);}return {rawCoords:i,iris:i.slice(71)}},e.prototype.getAdjustedIrisCoords=function(t,e,n){var o=t[I[n+"EyeUpper0"][3]][2],i=t[I[n+"EyeLower0"][4]][2],r=(o+i)/2;return e.map((function(t,e){var n=r;return 2===e?n=o:4===e&&(n=i),[t[0],t[1],n]}))},e.prototype.predict=function(e,o){return P(this,void 0,void 0,(function(){var i,r,s,a,h=this;return v(this,(function(u){switch(u.label){case 0:return this.shouldUpdateRegionsOfInterest()?([4,this.boundingBoxDetector.getBoundingBoxes(e,!1,!0)]):[3,2];case 1:return i=u.sent(),r=i.boxes,s=i.scaleFactor,0===r.length?(this.regionsOfInterest=[],[2,null]):(a=r.map((function(t){var e,n,o={startPoint:t.box.startPoint.squeeze().arraySync(),endPoint:t.box.endPoint.squeeze().arraySync()},i=O((n=s,{startPoint:[(e=o).startPoint[0]*n[0],e.startPoint[1]*n[1]],endPoint:[e.endPoint[0]*n[0],e.endPoint[1]*n[1]]}));return b({},i,{landmarks:t.landmarks.arraySync()})})),r.forEach((function(t){null!=t&&null!=t.startPoint&&(t.startEndTensor.dispose(),t.startPoint.dispose(),t.endPoint.dispose());})),this.updateRegionsOfInterest(a),this.runsWithoutFaceDetector=0,[3,3]);case 2:this.runsWithoutFaceDetector++,u.label=3;case 3:return [2,tidy((function(){return h.regionsOfInterest.map((function(n,i){var r,s=n.landmarks.length>=468,a=W[0],u=W[1];!1===s&&(a=H[0],u=H[1]),r=F(n.landmarks[a],n.landmarks[u]);var l=C({startPoint:n.startPoint,endPoint:n.endPoint}),d=[l[0]/e.shape[2],l[1]/e.shape[1]],m=e,g=R;0!==r&&(m=image$1.rotateWithOffset(e,r,0,d),g=S(-r,l));var y=function(t,e,n){var o=e.shape[1],i=e.shape[2],r=[[t.startPoint[1]/o,t.startPoint[0]/i,t.endPoint[1]/o,t.endPoint[0]/i]];return image$1.cropAndResize(e,r,[0],n)}({startPoint:n.startPoint,endPoint:n.endPoint},m,[h.meshHeight,h.meshWidth]).div(255),P=h.meshDetector.predict(y),v=P[1],w=P[2],x=reshape(w,[-1,3]).arraySync();if(o){var E=h.getEyeBox(x,y,A[0],A[1],!0),L=E.box,k=E.boxSize,M=E.crop,I=h.getEyeBox(x,y,V[0],V[1]),B=I.box,T=I.boxSize,z=I.crop,D=h.irisModel.predict(concat([M,z])).dataSync(),U=D.slice(0,228),j=h.getEyeCoords(U,L,k,!0),q=j.rawCoords,_=j.iris,K=D.slice(228),N=h.getEyeCoords(K,B,T),J=N.rawCoords,Q=N.iris,X=h.getLeftToRightEyeDepthDifference(x);Math.abs(X)<30?(G(x,q,"left"),G(x,J,"right")):X<1?G(x,q,"left",["EyeUpper0","EyeLower0"]):G(x,J,"right",["EyeUpper0","EyeLower0"]);var Y=h.getAdjustedIrisCoords(x,_,"left"),Z=h.getAdjustedIrisCoords(x,Q,"right");x=x.concat(Y).concat(Z);}var $=h.transformRawCoords(x,n,r,g),tt=tensor2d($),et=O(h.calculateLandmarksBoundingBox($));return h.regionsOfInterest[i]=b({},et,{landmarks:tt.arraySync()}),{coords:tensor2d(x,[x.length,3]),scaledCoords:tt,box:et,flag:v.squeeze()}}))}))]}}))}))},e.prototype.updateRegionsOfInterest=function(t){for(var e=0;e<t.length;e++){var n=t[e],o=this.regionsOfInterest[e],i=0;if(o&&o.startPoint){var r=n.startPoint,s=r[0],a=r[1],c=n.endPoint,h=c[0],u=c[1],l=o.startPoint,d=l[0],f=l[1],p=o.endPoint,m=p[0],g=p[1],y=Math.max(s,d),b=Math.max(a,f),P=(Math.min(h,m)-y)*(Math.min(u,g)-b);i=P/((h-s)*(u-a)+(m-d)*(g-a)-P);}i<.25&&(this.regionsOfInterest[e]=n);}this.regionsOfInterest=this.regionsOfInterest.slice(0,t.length);},e.prototype.clearRegionOfInterest=function(t){null!=this.regionsOfInterest[t]&&(this.regionsOfInterest=this.regionsOfInterest.slice(0,t).concat(this.regionsOfInterest.slice(t+1)));},e.prototype.shouldUpdateRegionsOfInterest=function(){var t=this.regionsOfInterest.length,e=0===t;return 1===this.maxFaces||e?e:t!==this.maxFaces&&this.runsWithoutFaceDetector>=this.maxContinuousChecks},e.prototype.calculateLandmarksBoundingBox=function(t){var e=t.map((function(t){return t[0]})),n=t.map((function(t){return t[1]}));return {startPoint:[Math.min.apply(Math,e),Math.min.apply(Math,n)],endPoint:[Math.max.apply(Math,e),Math.max.apply(Math,n)]}},e}(),N=[[.499976992607117,.652534008026123],[.500025987625122,.547487020492554],[.499974012374878,.602371990680695],[.482113003730774,.471979022026062],[.500150978565216,.527155995368958],[.499909996986389,.498252987861633],[.499523013830185,.40106201171875],[.289712011814117,.380764007568359],[.499954998493195,.312398016452789],[.499987006187439,.269918978214264],[.500023007392883,.107050001621246],[.500023007392883,.666234016418457],[.5000159740448,.679224014282227],[.500023007392883,.692348003387451],[.499976992607117,.695277988910675],[.499976992607117,.70593398809433],[.499976992607117,.719385027885437],[.499976992607117,.737019002437592],[.499967992305756,.781370997428894],[.499816000461578,.562981009483337],[.473773002624512,.573909997940063],[.104906998574734,.254140973091125],[.365929991006851,.409575998783112],[.338757991790771,.41302502155304],[.311120003461838,.409460008144379],[.274657994508743,.389131009578705],[.393361985683441,.403706014156342],[.345234006643295,.344011008739471],[.370094001293182,.346076011657715],[.319321990013123,.347265005111694],[.297903001308441,.353591024875641],[.24779200553894,.410809993743896],[.396889001131058,.842755019664764],[.280097991228104,.375599980354309],[.106310002505779,.399955987930298],[.2099249958992,.391353011131287],[.355807989835739,.534406006336212],[.471751004457474,.65040397644043],[.474155008792877,.680191993713379],[.439785003662109,.657229006290436],[.414617002010345,.66654098033905],[.450374007225037,.680860996246338],[.428770989179611,.682690978050232],[.374971002340317,.727805018424988],[.486716985702515,.547628998756409],[.485300987958908,.527395009994507],[.257764995098114,.314490020275116],[.401223003864288,.455172002315521],[.429818987846375,.548614978790283],[.421351999044418,.533740997314453],[.276895999908447,.532056987285614],[.483370006084442,.499586999416351],[.33721199631691,.282882988452911],[.296391993761063,.293242990970612],[.169294998049736,.193813979625702],[.447580009698868,.302609980106354],[.392390012741089,.353887975215912],[.354490011930466,.696784019470215],[.067304998636246,.730105042457581],[.442739009857178,.572826027870178],[.457098007202148,.584792017936707],[.381974011659622,.694710969924927],[.392388999462128,.694203019142151],[.277076005935669,.271932005882263],[.422551989555359,.563233017921448],[.385919004678726,.281364023685455],[.383103013038635,.255840003490448],[.331431001424789,.119714021682739],[.229923993349075,.232002973556519],[.364500999450684,.189113974571228],[.229622006416321,.299540996551514],[.173287004232407,.278747975826263],[.472878992557526,.666198015213013],[.446828007698059,.668527007102966],[.422762006521225,.673889994621277],[.445307999849319,.580065965652466],[.388103008270264,.693961024284363],[.403039008378983,.706539988517761],[.403629004955292,.693953037261963],[.460041999816895,.557139039039612],[.431158006191254,.692366003990173],[.452181994915009,.692366003990173],[.475387006998062,.692366003990173],[.465828001499176,.779190003871918],[.472328990697861,.736225962638855],[.473087012767792,.717857003211975],[.473122000694275,.704625964164734],[.473033010959625,.695277988910675],[.427942007780075,.695277988910675],[.426479011774063,.703539967536926],[.423162013292313,.711845993995667],[.4183090031147,.720062971115112],[.390094995498657,.639572978019714],[.013953999616206,.560034036636353],[.499913990497589,.58014702796936],[.413199990987778,.69539999961853],[.409626007080078,.701822996139526],[.468080013990402,.601534962654114],[.422728985548019,.585985004901886],[.463079988956451,.593783974647522],[.37211999297142,.47341400384903],[.334562003612518,.496073007583618],[.411671012639999,.546965003013611],[.242175996303558,.14767599105835],[.290776997804642,.201445996761322],[.327338010072708,.256527006626129],[.399509996175766,.748921036720276],[.441727995872498,.261676013469696],[.429764986038208,.187834024429321],[.412198007106781,.108901023864746],[.288955003023148,.398952007293701],[.218936994671822,.435410976409912],[.41278201341629,.398970007896423],[.257135003805161,.355440020561218],[.427684992551804,.437960982322693],[.448339998722076,.536936044692993],[.178560003638268,.45755398273468],[.247308000922203,.457193970680237],[.286267012357712,.467674970626831],[.332827985286713,.460712015628815],[.368755996227264,.447206974029541],[.398963987827301,.432654976844788],[.476410001516342,.405806005001068],[.189241006970406,.523923993110657],[.228962004184723,.348950982093811],[.490725994110107,.562400996685028],[.404670000076294,.485132992267609],[.019469000399113,.401564002037048],[.426243007183075,.420431017875671],[.396993011236191,.548797011375427],[.266469985246658,.376977026462555],[.439121007919312,.51895797252655],[.032313998788595,.644356966018677],[.419054001569748,.387154996395111],[.462783008813858,.505746960639954],[.238978996872902,.779744982719421],[.198220998048782,.831938028335571],[.107550002634525,.540755033493042],[.183610007166862,.740257024765015],[.134409993886948,.333683013916016],[.385764002799988,.883153975009918],[.490967005491257,.579378008842468],[.382384985685349,.508572995662689],[.174399003386497,.397670984268188],[.318785011768341,.39623498916626],[.343364000320435,.400596976280212],[.396100014448166,.710216999053955],[.187885001301765,.588537991046906],[.430987000465393,.944064974784851],[.318993002176285,.898285031318665],[.266247987747192,.869701027870178],[.500023007392883,.190576016902924],[.499976992607117,.954452991485596],[.366169989109039,.398822009563446],[.393207013607025,.39553701877594],[.410373002290726,.391080021858215],[.194993004202843,.342101991176605],[.388664990663528,.362284004688263],[.365961998701096,.355970978736877],[.343364000320435,.355356991291046],[.318785011768341,.35834002494812],[.301414996385574,.363156020641327],[.058132998645306,.319076001644135],[.301414996385574,.387449026107788],[.499987989664078,.618434011936188],[.415838003158569,.624195992946625],[.445681989192963,.566076993942261],[.465844005346298,.620640993118286],[.49992299079895,.351523995399475],[.288718998432159,.819945991039276],[.335278987884521,.852819979190826],[.440512001514435,.902418971061707],[.128294005990028,.791940987110138],[.408771991729736,.373893976211548],[.455606997013092,.451801002025604],[.499877005815506,.908990025520325],[.375436991453171,.924192011356354],[.11421000212431,.615022003650665],[.448662012815475,.695277988910675],[.4480200111866,.704632043838501],[.447111994028091,.715808033943176],[.444831997156143,.730794012546539],[.430011987686157,.766808986663818],[.406787008047104,.685672998428345],[.400738000869751,.681069016456604],[.392399996519089,.677703022956848],[.367855995893478,.663918972015381],[.247923001646996,.601333022117615],[.452769994735718,.420849978923798],[.43639200925827,.359887003898621],[.416164010763168,.368713974952698],[.413385987281799,.692366003990173],[.228018000721931,.683571994304657],[.468268007040024,.352671027183533],[.411361992359161,.804327011108398],[.499989002943039,.469825029373169],[.479153990745544,.442654013633728],[.499974012374878,.439637005329132],[.432112008333206,.493588984012604],[.499886006116867,.866917014122009],[.49991300702095,.821729004383087],[.456548988819122,.819200992584229],[.344549000263214,.745438992977142],[.37890899181366,.574010014533997],[.374292999505997,.780184984207153],[.319687992334366,.570737957954407],[.357154995203018,.604269981384277],[.295284003019333,.621580958366394],[.447750002145767,.862477004528046],[.410986006259918,.508723020553589],[.31395098567009,.775308012962341],[.354128003120422,.812552988529205],[.324548006057739,.703992962837219],[.189096003770828,.646299958229065],[.279776990413666,.71465802192688],[.1338230073452,.682700991630554],[.336768001317978,.644733011722565],[.429883986711502,.466521978378296],[.455527991056442,.548622965812683],[.437114000320435,.558896005153656],[.467287987470627,.529924988746643],[.414712011814117,.335219979286194],[.37704598903656,.322777986526489],[.344107985496521,.320150971412659],[.312875986099243,.32233202457428],[.283526003360748,.333190023899078],[.241245999932289,.382785975933075],[.102986000478268,.468762993812561],[.267612010240555,.424560010433197],[.297879010438919,.433175981044769],[.333433985710144,.433878004550934],[.366427004337311,.426115989685059],[.396012008190155,.416696012020111],[.420121014118195,.41022801399231],[.007561000064015,.480777025222778],[.432949006557465,.569517970085144],[.458638995885849,.479089021682739],[.473466008901596,.545744001865387],[.476087987422943,.563830018043518],[.468472003936768,.555056989192963],[.433990985155106,.582361996173859],[.483518004417419,.562983989715576],[.482482999563217,.57784903049469],[.42645001411438,.389798998832703],[.438998997211456,.39649498462677],[.450067013502121,.400434017181396],[.289712011814117,.368252992630005],[.276670008897781,.363372981548309],[.517862021923065,.471948027610779],[.710287988185883,.380764007568359],[.526226997375488,.573909997940063],[.895093023777008,.254140973091125],[.634069979190826,.409575998783112],[.661242008209229,.41302502155304],[.688880026340485,.409460008144379],[.725341975688934,.389131009578705],[.606630027294159,.40370500087738],[.654766023159027,.344011008739471],[.629905998706818,.346076011657715],[.680678009986877,.347265005111694],[.702096998691559,.353591024875641],[.75221198797226,.410804986953735],[.602918028831482,.842862963676453],[.719901978969574,.375599980354309],[.893692970275879,.399959981441498],[.790081977844238,.391354024410248],[.643998026847839,.534487962722778],[.528249025344849,.65040397644043],[.525849997997284,.680191040039062],[.560214996337891,.657229006290436],[.585384011268616,.66654098033905],[.549625992774963,.680860996246338],[.57122802734375,.682691991329193],[.624852001667023,.72809898853302],[.513050019741058,.547281980514526],[.51509702205658,.527251958847046],[.742246985435486,.314507007598877],[.598631024360657,.454979002475739],[.570338010787964,.548575043678284],[.578631997108459,.533622980117798],[.723087012767792,.532054007053375],[.516445994377136,.499638974666595],[.662801027297974,.282917976379395],[.70362401008606,.293271005153656],[.830704987049103,.193813979625702],[.552385985851288,.302568018436432],[.607609987258911,.353887975215912],[.645429015159607,.696707010269165],[.932694971561432,.730105042457581],[.557260990142822,.572826027870178],[.542901992797852,.584792017936707],[.6180260181427,.694710969924927],[.607590973377228,.694203019142151],[.722943007946014,.271963000297546],[.577413976192474,.563166975975037],[.614082992076874,.281386971473694],[.616907000541687,.255886018276215],[.668509006500244,.119913995265961],[.770092010498047,.232020974159241],[.635536015033722,.189248979091644],[.77039098739624,.299556016921997],[.826722025871277,.278755009174347],[.527121007442474,.666198015213013],[.553171992301941,.668527007102966],[.577238023281097,.673889994621277],[.554691970348358,.580065965652466],[.611896991729736,.693961024284363],[.59696102142334,.706539988517761],[.596370995044708,.693953037261963],[.539958000183105,.557139039039612],[.568841993808746,.692366003990173],[.547818005084991,.692366003990173],[.52461302280426,.692366003990173],[.534089982509613,.779141008853912],[.527670979499817,.736225962638855],[.526912987232208,.717857003211975],[.526877999305725,.704625964164734],[.526966989040375,.695277988910675],[.572058022022247,.695277988910675],[.573521018028259,.703539967536926],[.57683801651001,.711845993995667],[.581691026687622,.720062971115112],[.609944999217987,.639909982681274],[.986046016216278,.560034036636353],[.5867999792099,.69539999961853],[.590372025966644,.701822996139526],[.531915009021759,.601536989212036],[.577268004417419,.585934996604919],[.536915004253387,.593786001205444],[.627542972564697,.473352015018463],[.665585994720459,.495950996875763],[.588353991508484,.546862006187439],[.757824003696442,.14767599105835],[.709249973297119,.201507985591888],[.672684013843536,.256581008434296],[.600408971309662,.74900496006012],[.55826598405838,.261672019958496],[.570303976535797,.187870979309082],[.588165998458862,.109044015407562],[.711045026779175,.398952007293701],[.781069993972778,.435405015945435],[.587247014045715,.398931980133057],[.742869973182678,.355445981025696],[.572156012058258,.437651991844177],[.55186802148819,.536570012569427],[.821442008018494,.457556009292603],[.752701997756958,.457181990146637],[.71375697851181,.467626988887787],[.66711300611496,.460672974586487],[.631101012229919,.447153985500336],[.6008620262146,.432473003864288],[.523481011390686,.405627012252808],[.810747981071472,.523926019668579],[.771045982837677,.348959028720856],[.509127020835876,.562718033790588],[.595292985439301,.485023975372314],[.980530977249146,.401564002037048],[.573499977588654,.420000016689301],[.602994978427887,.548687994480133],[.733529984951019,.376977026462555],[.560611009597778,.519016981124878],[.967685997486115,.644356966018677],[.580985009670258,.387160003185272],[.537728011608124,.505385041236877],[.760966002941132,.779752969741821],[.801778972148895,.831938028335571],[.892440974712372,.54076099395752],[.816350996494293,.740260004997253],[.865594983100891,.333687007427216],[.614073991775513,.883246004581451],[.508952975273132,.579437971115112],[.617941975593567,.508316040039062],[.825608015060425,.397674977779388],[.681214988231659,.39623498916626],[.656635999679565,.400596976280212],[.603900015354156,.710216999053955],[.81208598613739,.588539004325867],[.56801301240921,.944564998149872],[.681007981300354,.898285031318665],[.733752012252808,.869701027870178],[.633830010890961,.398822009563446],[.606792986392975,.39553701877594],[.589659988880157,.391062021255493],[.805015981197357,.342108011245728],[.611334979534149,.362284004688263],[.634037971496582,.355970978736877],[.656635999679565,.355356991291046],[.681214988231659,.35834002494812],[.698584973812103,.363156020641327],[.941866993904114,.319076001644135],[.698584973812103,.387449026107788],[.584177017211914,.624107003211975],[.554318010807037,.566076993942261],[.534153997898102,.62064003944397],[.711217999458313,.819975018501282],[.664629995822906,.852871000766754],[.559099972248077,.902631998062134],[.871706008911133,.791940987110138],[.591234028339386,.373893976211548],[.544341027736664,.451583981513977],[.624562978744507,.924192011356354],[.88577002286911,.615028977394104],[.551338016986847,.695277988910675],[.551980018615723,.704632043838501],[.552887976169586,.715808033943176],[.555167973041534,.730794012546539],[.569944024085999,.767035007476807],[.593203008174896,.685675978660583],[.599261999130249,.681069016456604],[.607599973678589,.677703022956848],[.631937980651855,.663500010967255],[.752032995223999,.601315021514893],[.547226011753082,.420395016670227],[.563543975353241,.359827995300293],[.583841025829315,.368713974952698],[.586614012718201,.692366003990173],[.771915018558502,.683578014373779],[.531597018241882,.352482974529266],[.588370978832245,.804440975189209],[.52079701423645,.442565023899078],[.567984998226166,.493479013442993],[.543282985687256,.819254994392395],[.655317008495331,.745514988899231],[.621008992195129,.574018001556396],[.625559985637665,.78031200170517],[.680198013782501,.570719003677368],[.64276397228241,.604337990283966],[.704662978649139,.621529996395111],[.552012026309967,.862591981887817],[.589071989059448,.508637011051178],[.685944974422455,.775357007980347],[.645735025405884,.812640011310577],[.675342977046967,.703978002071381],[.810858011245728,.646304965019226],[.72012197971344,.714666962623596],[.866151988506317,.682704985141754],[.663187026977539,.644596993923187],[.570082008838654,.466325998306274],[.544561982154846,.548375964164734],[.562758982181549,.558784961700439],[.531987011432648,.530140042304993],[.585271000862122,.335177004337311],[.622952997684479,.32277899980545],[.655896008014679,.320163011550903],[.687132000923157,.322345972061157],[.716481983661652,.333200991153717],[.758756995201111,.382786989212036],[.897013008594513,.468769013881683],[.732392013072968,.424547016620636],[.70211398601532,.433162987232208],[.66652500629425,.433866024017334],[.633504986763,.426087975502014],[.603875994682312,.416586995124817],[.579657971858978,.409945011138916],[.992439985275269,.480777025222778],[.567192018032074,.569419980049133],[.54136598110199,.478899002075195],[.526564002037048,.546118021011353],[.523913025856018,.563830018043518],[.531529009342194,.555056989192963],[.566035985946655,.582329034805298],[.51631098985672,.563053965568542],[.5174720287323,.577877044677734],[.573594987392426,.389806985855103],[.560697972774506,.395331978797913],[.549755990505219,.399751007556915],[.710287988185883,.368252992630005],[.723330020904541,.363372981548309]];function J(t){return P(this,void 0,void 0,(function(){var e,n,o,i,r,s,a,c,h,u,l,d,f,p,m;return v(this,(function(g){switch(g.label){case 0:return e=t.maxContinuousChecks,n=void 0===e?5:e,o=t.detectionConfidence,i=void 0===o?.9:o,r=t.maxFaces,s=void 0===r?10:r,a=t.iouThreshold,c=void 0===a?.3:a,h=t.scoreThreshold,u=void 0===h?.75:h,l=t.shouldLoadIrisModel,d=void 0===l||l,f=t.modelUrl,p=t.irisModelUrl,d?[4,Promise.all([Q(s,c,u),X(f),Y(p)])]:[3,2];case 1:return m=g.sent(),[3,4];case 2:return [4,Promise.all([Q(s,c,u),X(f)])];case 3:m=g.sent(),g.label=4;case 4:return [2,new tt(m[0],m[1],n,i,s,d?m[2]:null)]}}))}))}function Q(t,e,n){return P(this,void 0,void 0,(function(){return v(this,(function(o){return [2,M({maxFaces:t,iouThreshold:e,scoreThreshold:n})]}))}))}function X(t){return P(this,void 0,void 0,(function(){return v(this,(function(e){return null!=t?[2,loadGraphModel(t)]:[2,loadGraphModel("https://tfhub.dev/mediapipe/tfjs-model/facemesh/1/default/1",{fromTFHub:!0})]}))}))}function Y(t){return P(this,void 0,void 0,(function(){return v(this,(function(e){return null!=t?[2,loadGraphModel(t)]:[2,loadGraphModel("https://tfhub.dev/mediapipe/tfjs-model/iris/1/default/2",{fromTFHub:!0})]}))}))}function Z(t,o){if(t.mesh instanceof Tensor){var r=tidy((function(){var r=tensor1d([o-1,0,0]),s=tensor1d([1,-1,1]);return tidy((function(){return [concat([sub(o-1,t.boundingBox.topLeft.slice(0,1)),t.boundingBox.topLeft.slice(1,1)]),concat([sub(o-1,t.boundingBox.bottomRight.slice(0,1)),t.boundingBox.bottomRight.slice(1,1)]),sub(r,t.mesh).mul(s),sub(r,t.scaledMesh).mul(s)]}))})),s=r[0],a=r[1],c=r[2],h=r[3];return Object.assign({},t,{boundingBox:{topLeft:s,bottomRight:a},mesh:c,scaledMesh:h})}return Object.assign({},t,{boundingBox:{topLeft:[o-1-t.boundingBox.topLeft[0],t.boundingBox.topLeft[1]],bottomRight:[o-1-t.boundingBox.bottomRight[0],t.boundingBox.bottomRight[1]]},mesh:t.mesh.map((function(t){var e=t.slice(0);return e[0]=o-1-t[0],e})),scaledMesh:t.scaledMesh.map((function(t){var e=t.slice(0);return e[0]=o-1-t[0],e}))})}var $,tt=function(){function t(t,e,n,o,i,r){this.kind="MediaPipeFaceMesh",this.pipeline=new K(t,e,192,192,n,i,r),this.detectionConfidence=o;}return t.getAnnotations=function(){return I},t.getUVCoords=function(){return N},t.prototype.estimateFaces=function(t){return P(this,void 0,void 0,(function(){var o,i,r,s,a,c,h,d,f,p,y,b,w=this;return v(this,(function(x){switch(x.label){case 0:if(o=t.returnTensors,i=void 0!==o&&o,r=t.flipHorizontal,s=void 0!==r&&r,a=t.predictIrises,c=void 0===a||a,h=t.input,c&&null==this.pipeline.irisModel)throw new Error("The iris model was not loaded as part of facemesh. Please initialize the model with facemesh.load({shouldLoadIrisModel: true}).");return d=function(t){return t instanceof Tensor?[t.shape[0],t.shape[1]]:[t.height,t.width]}(h),f=d[1],p=tidy((function(){return h instanceof Tensor||(h=fromPixels(h)),h.toFloat().expandDims(0)})),"webgl"!==getBackend()?[3,2]:(b=env().get("WEBGL_PACK_DEPTHWISECONV"),env().set("WEBGL_PACK_DEPTHWISECONV",!0),[4,this.pipeline.predict(p,c)]);case 1:return y=x.sent(),env().set("WEBGL_PACK_DEPTHWISECONV",b),[3,4];case 2:return [4,this.pipeline.predict(p,c)];case 3:y=x.sent(),x.label=4;case 4:return p.dispose(),null!=y&&y.length>0?[2,Promise.all(y.map((function(t,n){return P(w,void 0,void 0,(function(){var o,r,a,h,u,l,d,p,m,g,y,b,w,x,E=this;return v(this,(function(L){switch(L.label){case 0:return o=t.coords,r=t.scaledCoords,a=t.box,h=t.flag,u=[h],i||(u=u.concat([o,r])),[4,Promise.all(u.map((function(t){return P(E,void 0,void 0,(function(){return v(this,(function(e){return [2,t.array()]}))}))})))];case 1:if(l=L.sent(),d=l[0],h.dispose(),d<this.detectionConfidence&&this.pipeline.clearRegionOfInterest(n),i)return p={kind:"MediaPipePredictionTensors",faceInViewConfidence:d,mesh:o,scaledMesh:r,boundingBox:{topLeft:tensor1d(a.startPoint),bottomRight:tensor1d(a.endPoint)}},s?[2,Z(p,f)]:[2,p];for(x in m=l.slice(1),g=m[0],y=m[1],r.dispose(),o.dispose(),b={kind:"MediaPipePredictionValues",faceInViewConfidence:d,boundingBox:{topLeft:a.startPoint,bottomRight:a.endPoint},mesh:g,scaledMesh:y},s&&(b=Z(b,f)),w={},I)(c||!1===x.includes("Iris"))&&(w[x]=I[x].map((function(t){return b.scaledMesh[t]})));return b.annotations=w,[2,b]}}))}))})))]:[2,[]]}}))}))},t}();function et(t,e){return void 0===t&&(t=$.mediapipeFacemesh),void 0===e&&(e={}),P(this,void 0,void 0,(function(){return v(this,(function(n){if(t===$.mediapipeFacemesh)return [2,J(e)];throw new Error(t+" is not a valid package name.")}))}))}!function(t){t.mediapipeFacemesh="mediapipe-facemesh";}($||($={}));

export { $ as SupportedPackages, et as load };
