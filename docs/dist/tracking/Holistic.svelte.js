/* src/tracking/Holistic.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	component_subscribe,
	init,
	noop,
	safe_not_equal,
	set_store_value,
	subscribe
} from "../../_snowpack/pkg/svelte/internal.js";

import { writable, get } from "../../_snowpack/pkg/svelte/store.js";
import { cameraOn, hideCamera, videoReady, videoEl } from "./webcam.svelte.js";

import {
	DIM,
	isSafari,
	infoExpanded,
	getLocalStorage,
	subLocalStorage
} from "../stores.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";
import { spring } from "../../_snowpack/pkg/svelte/motion.js";
import * as THREE from "../../_snowpack/pkg/three.js";
import * as faceLandmarksDetection from "../../_snowpack/pkg/@tensorflow-models/face-landmarks-detection.js";
import * as tf from "../../_snowpack/pkg/@tensorflow/tfjs-core.js";
import "../../_snowpack/pkg/@tensorflow/tfjs-backend-webgl.js";
import faceMap, { eyeTracking } from "../utils/faceMap/index.js";
import Vector from "../utils/vector.js";
import { clamp } from "../utils/helpers.js";
import { p2pConnection } from "../connections/Peer.svelte.js";
import { profiles } from "../scene/profiles.svelte.js";
import { pipEnabled } from "../scene/pip.svelte.js";
import { onFacemeshResults } from "./onFacemeshResults.svelte.js";
import { sendTrackingData } from "./sendTrackingToPeer.svelte.js";

const options = writable({
	face: {
		running: false,
		enable: !isSafari ? true : true,
		model: {
			maxContinuousChecks: 5,
			detectionConfidence: 0.9,
			maxFaces: 1,
			iouThreshold: 0.3,
			scoreThreshold: 0.85
		},
		predict: {
			input: null,
			returnTensors: false,
			flipHorizontal: false,
			predictIrises: true
		}
	}
});

getLocalStorage(options, "options", get(options));
subLocalStorage(options, "options");

function instance($$self, $$props, $$invalidate) {
	let $options,
		$$unsubscribe_options = noop,
		$$subscribe_options = () => ($$unsubscribe_options(), $$unsubscribe_options = subscribe(options, $$value => $$invalidate(1, $options = $$value)), options);

	let $videoReady;
	let $cameraOn;
	let $infoExpanded;
	let $profiles;
	component_subscribe($$self, options, $$value => $$invalidate(1, $options = $$value));
	component_subscribe($$self, videoReady, $$value => $$invalidate(2, $videoReady = $$value));
	component_subscribe($$self, cameraOn, $$value => $$invalidate(3, $cameraOn = $$value));
	component_subscribe($$self, infoExpanded, $$value => $$invalidate(4, $infoExpanded = $$value));
	component_subscribe($$self, profiles, $$value => $$invalidate(5, $profiles = $$value));
	$$self.$$.on_destroy.push(() => $$unsubscribe_options());
	let facemesh = null;

	//INIT FACEMESH
	async function initFacemesh() {
		await tf.setBackend("webgl");
		$$invalidate(0, facemesh = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, $options.face.model));
	}

	initFacemesh();

	//PREDICTIONS LOOP
	async function predict() {
		if (!$videoReady || !$cameraOn || $infoExpanded) {
			set_store_value(profiles, $profiles.user.detected = false, $profiles);
			set_store_value(options, $options.face.running = false, $options);
			return;
		} else {
			const predictions = await facemesh.estimateFaces({
				input: videoEl,
				returnTensors: $options.face.predict.returnTensors,
				flipHorizontal: $options.face.predict.flipHorizontal,
				predictIrises: $options.face.predict.predictIrises
			});

			onFacemeshResults(predictions);
			set_store_value(profiles, $profiles.user.detected = true, $profiles);
			requestAnimationFrame(predict);
		}
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$videoReady, $cameraOn, facemesh, $infoExpanded*/ 29) {
			$: {
				if ($videoReady && $cameraOn && facemesh && !$infoExpanded) {
					predict();
				}
			}
		}

		if ($$self.$$.dirty & /*$options*/ 2) {
			$: {
				set_store_value(profiles, $profiles.user.tracking.face.enable = $options.face.enable, $profiles);
			}
		}
	};

	return [facemesh, $options, $videoReady, $cameraOn, $infoExpanded];
}

class Holistic extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, {});
	}
}

export default Holistic;
export { options };