import { e_ as IORouterRegistry, e$ as concatenateArrayBuffers, f0 as basename, e as env, f1 as getModelArtifactsInfoForJSON, bU as sizeFromShape, cf as computeStrides, a1 as assert, f2 as nearestDivisor, aj as zeros, an as cast, dh as hasEncodingLoss, bi as ENGINE, a2 as scalar, cx as decodeString, cB as encodeString, f3 as slice_util, cp as upcastType, f4 as axesAreInnerMostDims, f5 as combineLocations, co as computeOutAndReduceShapes, c7 as expandShapeToKeepDim, cO as assertAxesAreInnerMostDims, cM as getAxesPermutation, dy as getUndoAxesPermutation, cN as getInnerMostAxes, ci as getBroadcastDims, f6 as getReductionAxes, bJ as assertAndGetBroadcastShape, dF as computeDilation2DInfo, d4 as computePool2DInfo, d5 as computePool3DInfo, bH as computeConv2DInfo, ds as computeConv3DInfo, f7 as computeDefaultPad, bN as tupleValuesAreOne, bm as eitherStridesOrDilationsAreOne, dp as convertConv2DDataFormat, bM as getFusedDyActivation, bQ as getFusedBiasGradient, bG as applyActivation, bF as shouldFuse, f8 as validateUpdateShape, bB as validateInput, eA as calculateShapes, eD as SELU_SCALEALPHA, eE as SELU_SCALE } from './zeros_like-371809d6.js';

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
const DEFAULT_FILE_NAME_PREFIX = 'model';
const DEFAULT_JSON_EXTENSION_NAME = '.json';
const DEFAULT_WEIGHT_DATA_EXTENSION_NAME = '.weights.bin';
function defer(f) {
    return new Promise(resolve => setTimeout(resolve)).then(f);
}
class BrowserDownloads {
    constructor(fileNamePrefix) {
        if (!env().getBool('IS_BROWSER')) {
            // TODO(cais): Provide info on what IOHandlers are available under the
            //   current environment.
            throw new Error('browserDownloads() cannot proceed because the current environment ' +
                'is not a browser.');
        }
        if (fileNamePrefix.startsWith(BrowserDownloads.URL_SCHEME)) {
            fileNamePrefix = fileNamePrefix.slice(BrowserDownloads.URL_SCHEME.length);
        }
        if (fileNamePrefix == null || fileNamePrefix.length === 0) {
            fileNamePrefix = DEFAULT_FILE_NAME_PREFIX;
        }
        this.modelTopologyFileName = fileNamePrefix + DEFAULT_JSON_EXTENSION_NAME;
        this.weightDataFileName =
            fileNamePrefix + DEFAULT_WEIGHT_DATA_EXTENSION_NAME;
    }
    async save(modelArtifacts) {
        if (typeof (document) === 'undefined') {
            throw new Error('Browser downloads are not supported in ' +
                'this environment since `document` is not present');
        }
        const weightsURL = window.URL.createObjectURL(new Blob([modelArtifacts.weightData], { type: 'application/octet-stream' }));
        if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
            throw new Error('BrowserDownloads.save() does not support saving model topology ' +
                'in binary formats yet.');
        }
        else {
            const weightsManifest = [{
                    paths: ['./' + this.weightDataFileName],
                    weights: modelArtifacts.weightSpecs
                }];
            const modelTopologyAndWeightManifest = {
                modelTopology: modelArtifacts.modelTopology,
                format: modelArtifacts.format,
                generatedBy: modelArtifacts.generatedBy,
                convertedBy: modelArtifacts.convertedBy,
                weightsManifest
            };
            if (modelArtifacts.signature != null) {
                modelTopologyAndWeightManifest.signature = modelArtifacts.signature;
            }
            if (modelArtifacts.userDefinedMetadata != null) {
                modelTopologyAndWeightManifest.userDefinedMetadata =
                    modelArtifacts.userDefinedMetadata;
            }
            if (modelArtifacts.modelInitializer != null) {
                modelTopologyAndWeightManifest.modelInitializer =
                    modelArtifacts.modelInitializer;
            }
            const modelTopologyAndWeightManifestURL = window.URL.createObjectURL(new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: 'application/json' }));
            // If anchor elements are not provided, create them without attaching them
            // to parents, so that the downloaded file names can be controlled.
            const jsonAnchor = this.jsonAnchor == null ? document.createElement('a') :
                this.jsonAnchor;
            jsonAnchor.download = this.modelTopologyFileName;
            jsonAnchor.href = modelTopologyAndWeightManifestURL;
            // Trigger downloads by evoking a click event on the download anchors.
            // When multiple downloads are started synchronously, Firefox will only
            // save the last one.
            await defer(() => jsonAnchor.dispatchEvent(new MouseEvent('click')));
            if (modelArtifacts.weightData != null) {
                const weightDataAnchor = this.weightDataAnchor == null ?
                    document.createElement('a') :
                    this.weightDataAnchor;
                weightDataAnchor.download = this.weightDataFileName;
                weightDataAnchor.href = weightsURL;
                await defer(() => weightDataAnchor.dispatchEvent(new MouseEvent('click')));
            }
            return { modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts) };
        }
    }
}
BrowserDownloads.URL_SCHEME = 'downloads://';
class BrowserFiles {
    constructor(files) {
        if (files == null || files.length < 1) {
            throw new Error(`When calling browserFiles, at least 1 file is required, ` +
                `but received ${files}`);
        }
        this.files = files;
    }
    async load() {
        const jsonFile = this.files[0];
        const weightFiles = this.files.slice(1);
        return new Promise((resolve, reject) => {
            const jsonReader = new FileReader();
            jsonReader.onload = (event) => {
                // tslint:disable-next-line:no-any
                const modelJSON = JSON.parse(event.target.result);
                const modelTopology = modelJSON.modelTopology;
                if (modelTopology == null) {
                    reject(new Error(`modelTopology field is missing from file ${jsonFile.name}`));
                    return;
                }
                if (weightFiles.length === 0) {
                    resolve({ modelTopology });
                }
                const weightsManifest = modelJSON.weightsManifest;
                if (weightsManifest == null) {
                    reject(new Error(`weightManifest field is missing from file ${jsonFile.name}`));
                    return;
                }
                let pathToFile;
                try {
                    pathToFile =
                        this.checkManifestAndWeightFiles(weightsManifest, weightFiles);
                }
                catch (err) {
                    reject(err);
                    return;
                }
                const weightSpecs = [];
                const paths = [];
                const perFileBuffers = [];
                weightsManifest.forEach(weightsGroup => {
                    weightsGroup.paths.forEach(path => {
                        paths.push(path);
                        perFileBuffers.push(null);
                    });
                    weightSpecs.push(...weightsGroup.weights);
                });
                weightsManifest.forEach(weightsGroup => {
                    weightsGroup.paths.forEach(path => {
                        const weightFileReader = new FileReader();
                        weightFileReader.onload = (event) => {
                            // tslint:disable-next-line:no-any
                            const weightData = event.target.result;
                            const index = paths.indexOf(path);
                            perFileBuffers[index] = weightData;
                            if (perFileBuffers.indexOf(null) === -1) {
                                const result = {
                                    modelTopology,
                                    weightSpecs,
                                    weightData: concatenateArrayBuffers(perFileBuffers),
                                    format: modelJSON.format,
                                    generatedBy: modelJSON.generatedBy,
                                    convertedBy: modelJSON.convertedBy
                                };
                                if (modelJSON.signature != null) {
                                    result.signature = modelJSON.signature;
                                }
                                if (modelJSON.userDefinedMetadata != null) {
                                    result.userDefinedMetadata = modelJSON.userDefinedMetadata;
                                }
                                if (modelJSON.modelInitializer != null) {
                                    result.modelInitializer = modelJSON.modelInitializer;
                                }
                                resolve(result);
                            }
                        };
                        weightFileReader.onerror = error => reject(`Failed to weights data from file of path '${path}'.`);
                        weightFileReader.readAsArrayBuffer(pathToFile[path]);
                    });
                });
            };
            jsonReader.onerror = error => reject(`Failed to read model topology and weights manifest JSON ` +
                `from file '${jsonFile.name}'. BrowserFiles supports loading ` +
                `Keras-style tf.Model artifacts only.`);
            jsonReader.readAsText(jsonFile);
        });
    }
    /**
     * Check the compatibility between weights manifest and weight files.
     */
    checkManifestAndWeightFiles(manifest, files) {
        const basenames = [];
        const fileNames = files.map(file => basename(file.name));
        const pathToFile = {};
        for (const group of manifest) {
            group.paths.forEach(path => {
                const pathBasename = basename(path);
                if (basenames.indexOf(pathBasename) !== -1) {
                    throw new Error(`Duplicate file basename found in weights manifest: ` +
                        `'${pathBasename}'`);
                }
                basenames.push(pathBasename);
                if (fileNames.indexOf(pathBasename) === -1) {
                    throw new Error(`Weight file with basename '${pathBasename}' is not provided.`);
                }
                else {
                    pathToFile[path] = files[fileNames.indexOf(pathBasename)];
                }
            });
        }
        if (basenames.length !== files.length) {
            throw new Error(`Mismatch in the number of files in weights manifest ` +
                `(${basenames.length}) and the number of weight files provided ` +
                `(${files.length}).`);
        }
        return pathToFile;
    }
}
const browserDownloadsRouter = (url) => {
    if (!env().getBool('IS_BROWSER')) {
        return null;
    }
    else {
        if (!Array.isArray(url) && url.startsWith(BrowserDownloads.URL_SCHEME)) {
            return browserDownloads(url.slice(BrowserDownloads.URL_SCHEME.length));
        }
        else {
            return null;
        }
    }
};
IORouterRegistry.registerSaveRouter(browserDownloadsRouter);
/**
 * Creates an IOHandler that triggers file downloads from the browser.
 *
 * The returned `IOHandler` instance can be used as model exporting methods such
 * as `tf.Model.save` and supports only saving.
 *
 * ```js
 * const model = tf.sequential();
 * model.add(tf.layers.dense(
 *     {units: 1, inputShape: [10], activation: 'sigmoid'}));
 * const saveResult = await model.save('downloads://mymodel');
 * // This will trigger downloading of two files:
 * //   'mymodel.json' and 'mymodel.weights.bin'.
 * console.log(saveResult);
 * ```
 *
 * @param fileNamePrefix Prefix name of the files to be downloaded. For use with
 *   `tf.Model`, `fileNamePrefix` should follow either of the following two
 *   formats:
 *   1. `null` or `undefined`, in which case the default file
 *      names will be used:
 *      - 'model.json' for the JSON file containing the model topology and
 *        weights manifest.
 *      - 'model.weights.bin' for the binary file containing the binary weight
 *        values.
 *   2. A single string or an Array of a single string, as the file name prefix.
 *      For example, if `'foo'` is provided, the downloaded JSON
 *      file and binary weights file will be named 'foo.json' and
 *      'foo.weights.bin', respectively.
 * @param config Additional configuration for triggering downloads.
 * @returns An instance of `BrowserDownloads` `IOHandler`.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Loading',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
function browserDownloads(fileNamePrefix = 'model') {
    return new BrowserDownloads(fileNamePrefix);
}
/**
 * Creates an IOHandler that loads model artifacts from user-selected files.
 *
 * This method can be used for loading from files such as user-selected files
 * in the browser.
 * When used in conjunction with `tf.loadLayersModel`, an instance of
 * `tf.LayersModel` (Keras-style) can be constructed from the loaded artifacts.
 *
 * ```js
 * // Note: This code snippet won't run properly without the actual file input
 * //   elements in the HTML DOM.
 *
 * // Suppose there are two HTML file input (`<input type="file" ...>`)
 * // elements.
 * const uploadJSONInput = document.getElementById('upload-json');
 * const uploadWeightsInput = document.getElementById('upload-weights');
 * const model = await tf.loadLayersModel(tf.io.browserFiles(
 *     [uploadJSONInput.files[0], uploadWeightsInput.files[0]]));
 * ```
 *
 * @param files `File`s to load from. Currently, this function supports only
 *   loading from files that contain Keras-style models (i.e., `tf.Model`s), for
 *   which an `Array` of `File`s is expected (in that order):
 *   - A JSON file containing the model topology and weight manifest.
 *   - Optionally, One or more binary files containing the binary weights.
 *     These files must have names that match the paths in the `weightsManifest`
 *     contained by the aforementioned JSON file, or errors will be thrown
 *     during loading. These weights files have the same format as the ones
 *     generated by `tensorflowjs_converter` that comes with the `tensorflowjs`
 *     Python PIP package. If no weights files are provided, only the model
 *     topology will be loaded from the JSON file above.
 * @returns An instance of `Files` `IOHandler`.
 *
 * @doc {
 *   heading: 'Models',
 *   subheading: 'Loading',
 *   namespace: 'io',
 *   ignoreCI: true
 * }
 */
function browserFiles(files) {
    return new BrowserFiles(files);
}

/**
 * Validate gather nd inputs.
 *
 * @param tensor The tensor contains the source values.
 * @param indices The tensor contains the indices to slice the source.
 *
 * @returns [resultShape, numUpdates, sliceSize, strides]
 */
function prepareAndValidate(tensor, indices) {
    const tensorRank = tensor.shape.length;
    const indicesRank = indices.shape.length;
    if (tensorRank < 1) {
        throw new Error('tf.gatherND() expects the input to be rank 1 or higher,' +
            ` but the rank was ${tensorRank}.`);
    }
    if (indicesRank < 1) {
        throw new Error('tf.gatherND() expects the indices to be rank 1 or higher,' +
            ` but the rank was ${indicesRank}.`);
    }
    if (indices.dtype !== 'int32') {
        throw new Error('tf.gatherND() expects the indices to be int32 type,' +
            ` but the dtype was ${indices.dtype}.`);
    }
    if (indices.shape[indicesRank - 1] > tensorRank) {
        throw new Error('index innermost dimension length must be <= tensor rank; saw: ' +
            `${indices.shape[indicesRank - 1]} vs. ${tensorRank}`);
    }
    if (sizeFromShape(tensor.shape) === 0) {
        throw new Error('Requested more than 0 entries, but input is empty.' +
            ` Input shape: ${tensor.shape}.`);
    }
    const indicesShape = indices.shape;
    const sliceRank = indicesShape[indicesShape.length - 1];
    // The result shape is
    //   indices.shape[:-1] + params.shape[indices.shape[-1]:]
    let nResult = 1;
    for (let i = 0; i < indicesShape.length - 1; ++i) {
        nResult *= indicesShape[i];
    }
    const inputShape = tensor.shape;
    const resultShape = indicesShape.slice();
    resultShape.pop();
    let sliceSize = 1;
    for (let i = sliceRank; i < tensorRank; ++i) {
        sliceSize *= inputShape[i];
        resultShape.push(inputShape[i]);
    }
    const strides = [...computeStrides(tensor.shape).map(stride => stride / sliceSize),
        1].slice(0, sliceRank);
    return [resultShape, nResult, sliceSize, strides];
}

var gather_nd_util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    prepareAndValidate: prepareAndValidate
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
function assertParamsConsistent(shapes, axis) {
    const rank = shapes[0].length;
    shapes.forEach((shape, i) => {
        assert(shape.length === rank, () => `Error in concat${rank}D: rank of tensors[${i}] must be the same ` +
            `as the rank of the rest (${rank})`);
    });
    assert(axis >= 0 && axis < rank, () => `Error in concat${rank}D: axis must be between 0 and ${rank - 1}.`);
    const firstShape = shapes[0];
    shapes.forEach((shape, i) => {
        for (let r = 0; r < rank; r++) {
            assert((r === axis) || (shape[r] === firstShape[r]), () => `Error in concat${rank}D: Shape of tensors[${i}] (${shape}) ` +
                `does not match the shape of the rest (${firstShape}) ` +
                `along the non-concatenated axis ${i}.`);
        }
    });
}
function computeOutShape(shapes, axis) {
    const outputShape = shapes[0].slice();
    for (let i = 1; i < shapes.length; i++) {
        outputShape[axis] += shapes[i][axis];
    }
    return outputShape;
}

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
const PARALLELIZE_THRESHOLD = 30;
function computeOptimalWindowSize(inSize) {
    if (inSize <= PARALLELIZE_THRESHOLD) {
        return inSize;
    }
    return nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
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
// Returns the image center in pixels.
function getImageCenter(center, imageHeight, imageWidth) {
    const centerX = imageWidth * (typeof center === 'number' ? center : center[0]);
    const centerY = imageHeight * (typeof center === 'number' ? center : center[1]);
    return [centerX, centerY];
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
 * Gets the new shape of the input Tensor after it's been reshaped
 * to:
 * [blockShape[0], ..., blockShape[M-1], batch / prod(blockShape),
 * inputShape[1], ..., inputShape[N-1]]
 *
 * See step 1: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
function getReshaped(inputShape, blockShape, prod, batchToSpace = true) {
    let reshaped = [];
    if (batchToSpace) {
        reshaped = reshaped.concat(blockShape.slice(0));
        reshaped.push(inputShape[0] / prod);
        reshaped = reshaped.concat(inputShape.slice(1));
    }
    else {
        reshaped = reshaped.concat(inputShape[0]);
        const spatialLength = blockShape.length;
        for (let i = 0; i < spatialLength; ++i) {
            reshaped =
                reshaped.concat([inputShape[i + 1] / blockShape[i], blockShape[i]]);
        }
        reshaped = reshaped.concat(inputShape.slice(spatialLength + 1));
    }
    return reshaped;
}
/**
 * Gets the permutation that will transpose the dimensions of the
 * reshaped tensor to shape:
 *
 * [batch / prod(block_shape),inputShape[1], blockShape[0], ...,
 * inputShape[M], blockShape[M-1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * see step 2: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
function getPermuted(reshapedRank, blockShapeRank, batchToSpace = true) {
    const permuted = [];
    if (batchToSpace) {
        permuted.push(blockShapeRank);
        for (let i = blockShapeRank + 1; i < reshapedRank; ++i) {
            if (i <= 2 * blockShapeRank) {
                permuted.push(i);
                permuted.push(i - (blockShapeRank + 1));
            }
            else {
                permuted.push(i);
            }
        }
    }
    else {
        const permutedBeforeBatch = [];
        const permutedAfterBatch = [];
        for (let i = 1; i < reshapedRank; ++i) {
            if (i >= blockShapeRank * 2 + 1 || i % 2 === 1) {
                permutedAfterBatch.push(i);
            }
            else {
                permutedBeforeBatch.push(i);
            }
        }
        permuted.push(...permutedBeforeBatch);
        permuted.push(0);
        permuted.push(...permutedAfterBatch);
    }
    return permuted;
}
/**
 * Gets the shape of the reshaped and permuted input Tensor before any cropping
 * is applied.  The new shape will be:
 *
 * [batch / prod(blockShape),inputShape[1] * blockShape[0], ...,
 * inputShape[M] * blockShape[M-1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * See step 3: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
function getReshapedPermuted(inputShape, blockShape, prod, batchToSpace = true) {
    const reshapedPermuted = [];
    if (batchToSpace) {
        reshapedPermuted.push(inputShape[0] / prod);
    }
    else {
        reshapedPermuted.push(inputShape[0] * prod);
    }
    for (let i = 1; i < inputShape.length; ++i) {
        if (i <= blockShape.length) {
            if (batchToSpace) {
                reshapedPermuted.push(blockShape[i - 1] * inputShape[i]);
            }
            else {
                reshapedPermuted.push(inputShape[i] / blockShape[i - 1]);
            }
        }
        else {
            reshapedPermuted.push(inputShape[i]);
        }
    }
    return reshapedPermuted;
}
/**
 * Converts the crops argument into the beginning coordinates of a slice
 * operation.
 */
function getSliceBeginCoords(crops, blockShape) {
    const sliceBeginCoords = [0];
    for (let i = 0; i < blockShape; ++i) {
        sliceBeginCoords.push(crops[i][0]);
    }
    return sliceBeginCoords;
}
/**
 * Converts the crops argument into the size of a slice operation.  When
 * combined with getSliceBeginCoords this function allows the reshaped and
 * permuted Tensor to be cropped to its final output shape of:
 *
 * inputShape[1] * blockShape[0] - crops[0,0] - crops[0,1], ...,
 * inputShape[M] * blockShape[M-1] -crops[M-1,0] -
 * crops[M-1,1],inputShape[M+1], ..., inputShape[N-1]]
 *
 * See step 4: https://www.tensorflow.org/api_docs/python/tf/batch_to_space_nd
 */
function getSliceSize(uncroppedShape, crops, blockShape) {
    const sliceSize = uncroppedShape.slice(0, 1);
    for (let i = 0; i < blockShape; ++i) {
        sliceSize.push(uncroppedShape[i + 1] - crops[i][0] - crops[i][1]);
    }
    return sliceSize;
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
const ERF_P = 0.3275911;
const ERF_A1 = 0.254829592;
const ERF_A2 = -0.284496736;
const ERF_A3 = 1.421413741;
const ERF_A4 = -1.453152027;
const ERF_A5 = 1.061405429;

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
function warn(...msg) {
    if (!env().getBool('IS_TEST')) {
        console.warn(...msg);
    }
}
function log(...msg) {
    if (!env().getBool('IS_TEST')) {
        console.log(...msg);
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
 * Merges real and imaginary Float32Arrays into a single complex Float32Array.
 *
 * The memory layout is interleaved as follows:
 * real: [r0, r1, r2]
 * imag: [i0, i1, i2]
 * complex: [r0, i0, r1, i1, r2, i2]
 *
 * This is the inverse of splitRealAndImagArrays.
 *
 * @param real The real values of the complex tensor values.
 * @param imag The imag values of the complex tensor values.
 * @returns A complex tensor as a Float32Array with merged values.
 */
function mergeRealAndImagArrays(real, imag) {
    if (real.length !== imag.length) {
        throw new Error(`Cannot merge real and imag arrays of different lengths. real:` +
            `${real.length}, imag: ${imag.length}.`);
    }
    const result = new Float32Array(real.length * 2);
    for (let i = 0; i < result.length; i += 2) {
        result[i] = real[i / 2];
        result[i + 1] = imag[i / 2];
    }
    return result;
}
/**
 * Splits a complex Float32Array into real and imag parts.
 *
 * The memory layout is interleaved as follows:
 * complex: [r0, i0, r1, i1, r2, i2]
 * real: [r0, r1, r2]
 * imag: [i0, i1, i2]
 *
 * This is the inverse of mergeRealAndImagArrays.
 *
 * @param complex The complex tensor values.
 * @returns An object with real and imag Float32Array components of the complex
 *     tensor.
 */
function splitRealAndImagArrays(complex) {
    const real = new Float32Array(complex.length / 2);
    const imag = new Float32Array(complex.length / 2);
    for (let i = 0; i < complex.length; i += 2) {
        real[i / 2] = complex[i];
        imag[i / 2] = complex[i + 1];
    }
    return { real, imag };
}
/**
 * Extracts even indexed complex values in the given array.
 * @param complex The complex tensor values
 */
function complexWithEvenIndex(complex) {
    const len = Math.ceil(complex.length / 4);
    const real = new Float32Array(len);
    const imag = new Float32Array(len);
    for (let i = 0; i < complex.length; i += 4) {
        real[Math.floor(i / 4)] = complex[i];
        imag[Math.floor(i / 4)] = complex[i + 1];
    }
    return { real, imag };
}
/**
 * Extracts odd indexed comple values in the given array.
 * @param complex The complex tensor values
 */
function complexWithOddIndex(complex) {
    const len = Math.floor(complex.length / 4);
    const real = new Float32Array(len);
    const imag = new Float32Array(len);
    for (let i = 2; i < complex.length; i += 4) {
        real[Math.floor(i / 4)] = complex[i];
        imag[Math.floor(i / 4)] = complex[i + 1];
    }
    return { real, imag };
}
/**
 * Get the map representing a complex value in the given array.
 * @param complex The complex tensor values.
 * @param index An index of the target complex value.
 */
function getComplexWithIndex(complex, index) {
    const real = complex[index * 2];
    const imag = complex[index * 2 + 1];
    return { real, imag };
}
/**
 * Insert a given complex value into the TypedArray.
 * @param data The array in which the complex value is inserted.
 * @param c The complex value to be inserted.
 * @param index An index of the target complex value.
 */
function assignToTypedArray(data, real, imag, index) {
    data[index * 2] = real;
    data[index * 2 + 1] = imag;
}
/**
 * Make the list of exponent terms used by FFT.
 */
function exponents(n, inverse) {
    const real = new Float32Array(n / 2);
    const imag = new Float32Array(n / 2);
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        const x = (inverse ? 2 : -2) * Math.PI * (i / n);
        real[i] = Math.cos(x);
        imag[i] = Math.sin(x);
    }
    return { real, imag };
}
/**
 * Make the exponent term used by FFT.
 */
function exponent(k, n, inverse) {
    const x = (inverse ? 2 : -2) * Math.PI * (k / n);
    const real = Math.cos(x);
    const imag = Math.sin(x);
    return { real, imag };
}

/**
 * Prepare the split size array. When the input is a number, the axis is evenly
 * divided among the split size. When the input contains the negative value, the
 * rest of the axis is allocated toward that.
 */
function prepareSplitSize(x, numOrSizeSplits, axis = 0) {
    let splitSizes = [];
    if (typeof (numOrSizeSplits) === 'number') {
        assert(x.shape[axis] % numOrSizeSplits === 0, () => 'Number of splits must evenly divide the axis.');
        splitSizes =
            new Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
    }
    else {
        const numOfNegs = numOrSizeSplits.reduce((count, value) => {
            if (value === -1) {
                count += 1;
            }
            return count;
        }, 0);
        assert(numOfNegs <= 1, () => 'There should be only one negative value in split array.');
        const negIndex = numOrSizeSplits.indexOf(-1);
        // Allow the number of split array to be -1, which indicates the rest
        // of dimension is allocated to that split.
        if (negIndex !== -1) {
            const total = numOrSizeSplits.reduce((a, b) => b > 0 ? a + b : a);
            numOrSizeSplits[negIndex] = x.shape[axis] - total;
        }
        assert(x.shape[axis] === numOrSizeSplits.reduce((a, b) => a + b), () => 'The sum of sizes must match the size of the axis dimension.');
        splitSizes = numOrSizeSplits;
    }
    return splitSizes;
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
function segOpComputeOptimalWindowSize(inSize, numSegments) {
    let done = false;
    let res;
    if (inSize <= PARALLELIZE_THRESHOLD) {
        res = inSize;
        done = true;
    }
    else {
        res = nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
    }
    while (!done) {
        if (res > numSegments || res === inSize) {
            done = true;
        }
        else {
            res = nearestDivisor(inSize, res + 1);
        }
    }
    return res;
}
function computeOutShape$1(aShape, axis, numSegments) {
    const outShape = [];
    const rank = aShape.length;
    for (let dim = 0; dim < rank; dim++) {
        if (dim !== axis) {
            outShape.push(aShape[dim]);
        }
        else {
            outShape.push(numSegments);
        }
    }
    return outShape;
}
function collectGatherOpShapeInfo(x, indices, axis, batchDims) {
    const indicesRank = indices.shape.length;
    const xRank = x.shape.length;
    if (batchDims !== 0) {
        if (batchDims < -indicesRank || batchDims > indicesRank) {
            throw new Error(`Expect batchDims in the range of [-${indicesRank}, ${indicesRank}], but got ${batchDims}`);
        }
    }
    if (batchDims < 0) {
        batchDims += indicesRank;
    }
    if (batchDims > xRank) {
        throw new Error(`batchDims (${batchDims}) must be less than rank(x) (
    ${xRank}).`);
    }
    if (axis < batchDims) {
        throw new Error(`batchDims (${batchDims}) must be less than or equal to axis (${axis}).`);
    }
    for (let i = 0; i < batchDims; ++i) {
        if (x.shape[i] !== indices.shape[i]) {
            throw new Error(`x.shape[${i}]: ${x.shape[i]} should be equal to indices.shape[${i}]: ${indices.shape[i]}.`);
        }
    }
    const dimSize = x.shape[axis];
    const outputShape = [];
    let batchSize = 1;
    let outerSize = 1;
    let sliceSize = 1;
    for (let i = 0; i < batchDims; ++i) {
        outputShape.push(x.shape[i]);
        batchSize *= x.shape[i];
    }
    for (let i = batchDims; i < axis; i++) {
        outputShape.push(x.shape[i]);
        outerSize *= x.shape[i];
    }
    for (let i = batchDims; i < indicesRank; i++) {
        outputShape.push(indices.shape[i]);
    }
    for (let i = axis + 1; i < xRank; i++) {
        outputShape.push(x.shape[i]);
        sliceSize *= x.shape[i];
    }
    return { batchSize, sliceSize, outerSize, dimSize, outputShape };
}

var segment_util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    segOpComputeOptimalWindowSize: segOpComputeOptimalWindowSize,
    computeOutShape: computeOutShape$1,
    collectGatherOpShapeInfo: collectGatherOpShapeInfo
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
function castTensor(x, dtype, backend) {
    if (dtype === 'complex64') {
        if (x.dtype === 'complex64') {
            return x.clone();
        }
        const zerosTensor = zeros(x.shape);
        const floatX = cast(x, 'float32');
        const result = backend.complex(floatX, zerosTensor);
        zerosTensor.dispose();
        floatX.dispose();
        return result;
    }
    if (!hasEncodingLoss(x.dtype, dtype)) {
        // We don't change the underlying data, since we cast to higher
        // precision.
        return ENGINE.makeTensorFromDataId(x.dataId, x.shape, dtype);
    }
    if (x.dtype === 'complex64') {
        const real = backend.real(x);
        const result = cast(real, dtype);
        real.dispose();
        return result;
    }
    if (dtype === 'int32') {
        return backend.int(x);
    }
    else if (dtype === 'bool') {
        const zero = scalar(0, x.dtype);
        const result = backend.notEqual(x, zero);
        zero.dispose();
        return result;
    }
    else {
        throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
    }
}
function reshapeTensor(x, shape) {
    return ENGINE.makeTensorFromDataId(x.dataId, shape, x.dtype);
}
function fromUint8ToStringArray(vals) {
    try {
        // Decode the bytes into string.
        return vals.map(val => decodeString(val));
    }
    catch (err) {
        throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${err}`);
    }
}
function fromStringArrayToUint8(strings) {
    return strings.map(s => encodeString(s));
}

var backend_util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    slice_util: slice_util,
    segment_util: segment_util,
    castTensor: castTensor,
    reshapeTensor: reshapeTensor,
    fromUint8ToStringArray: fromUint8ToStringArray,
    fromStringArrayToUint8: fromStringArrayToUint8,
    upcastType: upcastType,
    axesAreInnerMostDims: axesAreInnerMostDims,
    combineLocations: combineLocations,
    computeOutAndReduceShapes: computeOutAndReduceShapes,
    expandShapeToKeepDim: expandShapeToKeepDim,
    assertAxesAreInnerMostDims: assertAxesAreInnerMostDims,
    getAxesPermutation: getAxesPermutation,
    getUndoAxesPermutation: getUndoAxesPermutation,
    getInnerMostAxes: getInnerMostAxes,
    getBroadcastDims: getBroadcastDims,
    getReductionAxes: getReductionAxes,
    assertAndGetBroadcastShape: assertAndGetBroadcastShape,
    assertParamsConsistent: assertParamsConsistent,
    computeOutShape: computeOutShape,
    computeDilation2DInfo: computeDilation2DInfo,
    computePool2DInfo: computePool2DInfo,
    computePool3DInfo: computePool3DInfo,
    computeConv2DInfo: computeConv2DInfo,
    computeConv3DInfo: computeConv3DInfo,
    computeDefaultPad: computeDefaultPad,
    tupleValuesAreOne: tupleValuesAreOne,
    eitherStridesOrDilationsAreOne: eitherStridesOrDilationsAreOne,
    convertConv2DDataFormat: convertConv2DDataFormat,
    getFusedDyActivation: getFusedDyActivation,
    getFusedBiasGradient: getFusedBiasGradient,
    applyActivation: applyActivation,
    shouldFuse: shouldFuse,
    PARALLELIZE_THRESHOLD: PARALLELIZE_THRESHOLD,
    computeOptimalWindowSize: computeOptimalWindowSize,
    getImageCenter: getImageCenter,
    getReshaped: getReshaped,
    getPermuted: getPermuted,
    getReshapedPermuted: getReshapedPermuted,
    getSliceBeginCoords: getSliceBeginCoords,
    getSliceSize: getSliceSize,
    prepareAndValidate: prepareAndValidate,
    validateUpdateShape: validateUpdateShape,
    validateInput: validateInput,
    calculateShapes: calculateShapes,
    SELU_SCALEALPHA: SELU_SCALEALPHA,
    SELU_SCALE: SELU_SCALE,
    ERF_P: ERF_P,
    ERF_A1: ERF_A1,
    ERF_A2: ERF_A2,
    ERF_A3: ERF_A3,
    ERF_A4: ERF_A4,
    ERF_A5: ERF_A5,
    warn: warn,
    log: log,
    mergeRealAndImagArrays: mergeRealAndImagArrays,
    splitRealAndImagArrays: splitRealAndImagArrays,
    complexWithEvenIndex: complexWithEvenIndex,
    complexWithOddIndex: complexWithOddIndex,
    getComplexWithIndex: getComplexWithIndex,
    assignToTypedArray: assignToTypedArray,
    exponents: exponents,
    exponent: exponent,
    prepareSplitSize: prepareSplitSize
});

export { ERF_P as E, fromStringArrayToUint8 as a, backend_util as b, computeOptimalWindowSize as c, getPermuted as d, getReshapedPermuted as e, fromUint8ToStringArray as f, getReshaped as g, getSliceBeginCoords as h, getSliceSize as i, computeOutShape as j, assertParamsConsistent as k, ERF_A1 as l, mergeRealAndImagArrays as m, ERF_A2 as n, ERF_A3 as o, ERF_A4 as p, ERF_A5 as q, prepareAndValidate as r, collectGatherOpShapeInfo as s, getImageCenter as t, prepareSplitSize as u, computeOutShape$1 as v, warn as w, segOpComputeOptimalWindowSize as x, browserFiles as y, gather_nd_util as z };
