import './webcam.svelte.css.proxy.js';
/* src/tracking/webcam.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	component_subscribe,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	null_to_empty,
	run_all,
	safe_not_equal,
	set_style,
	space,
	subscribe,
	toggle_class
} from "../../_snowpack/pkg/svelte/internal.js";

import { getLocalStorage, subLocalStorage } from "../stores.js";
import { writable } from "../../_snowpack/pkg/svelte/store.js";
import { onMount } from "../../_snowpack/pkg/svelte.js";
import { fade } from "../../_snowpack/pkg/svelte/transition.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
import interact from "../../_snowpack/pkg/interactjs.js";
import { isTouch, DIM } from "../stores.js";
import { pipEnabled } from "../scene/pip.svelte.js";

function create_fragment(ctx) {
	let container;
	let div;
	let video;
	let t0;
	let canvas;
	let t1;
	let button;
	let div_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			container = element("container");
			div = element("div");
			video = element("video");
			t0 = space();
			canvas = element("canvas");
			t1 = space();
			button = element("button");
			button.innerHTML = `<i class="kalicon notranslate solid small">close</i>`;
			attr(video, "id", "user-cam");
			video.autoplay = true;
			video.muted = true;
			video.playsInline = true;
			attr(video, "class", "svelte-1lmuflr");
			toggle_class(video, "hide", /*$hideFace*/ ctx[4]);
			attr(canvas, "class", "output_canvas svelte-1lmuflr");
			attr(canvas, "width", "1280px");
			attr(canvas, "height", "720px");
			attr(button, "class", "svelte-1lmuflr");
			attr(div, "id", "drag-cam");
			set_style(div, "--margin", videoPosition.m);

			attr(div, "class", div_class_value = "" + (null_to_empty(/*$hideCamera*/ ctx[2] || !/*$cameraOn*/ ctx[1] || !/*$videoReady*/ ctx[0] || /*$pipEnabled*/ ctx[3]
			? "hide"
			: "") + " svelte-1lmuflr"));

			attr(container, "class", "svelte-1lmuflr");
		},
		m(target, anchor) {
			insert(target, container, anchor);
			append(container, div);
			append(div, video);
			/*video_binding*/ ctx[6](video);
			append(div, t0);
			append(div, canvas);
			/*canvas_binding*/ ctx[7](canvas);
			append(div, t1);
			append(div, button);

			if (!mounted) {
				dispose = [
					listen(button, "click", /*click_handler*/ ctx[8]),
					listen(div, "mouseenter", /*mouseenter_handler*/ ctx[9]),
					listen(div, "mouseleave", /*mouseleave_handler*/ ctx[10])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$hideFace*/ 16) {
				toggle_class(video, "hide", /*$hideFace*/ ctx[4]);
			}

			if (dirty & /*videoPosition*/ 0) {
				set_style(div, "--margin", videoPosition.m);
			}

			if (dirty & /*$hideCamera, $cameraOn, $videoReady, $pipEnabled*/ 15 && div_class_value !== (div_class_value = "" + (null_to_empty(/*$hideCamera*/ ctx[2] || !/*$cameraOn*/ ctx[1] || !/*$videoReady*/ ctx[0] || /*$pipEnabled*/ ctx[3]
			? "hide"
			: "") + " svelte-1lmuflr"))) {
				attr(div, "class", div_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(container);
			/*video_binding*/ ctx[6](null);
			/*canvas_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

const cameraOn = writable(false);
const videoReady = writable(false);
let videoEl = null;
let canvasEl = null;
let canvasCtx = null;
const hideCamera = writable(true);
const hideFace = writable(true);
getLocalStorage(hideCamera, "hideCamera", false);
subLocalStorage(hideCamera, "hideCamera");
getLocalStorage(hideFace, "hideFace", true);
subLocalStorage(hideFace, "hideFace");

const videoPosition = {
	x: 0,
	y: 0,
	sx: 0,
	sy: 0,
	m: 8,
	hover: false,
	active: false
};

const capturedDevices = writable({
	videoinput: [],
	audioinput: [],
	audiooutput: [],
	currentVideoIndex: 0,
	currentAudioIndex: 0
});

let videoDeviceId = writable(null);

function handleError(error) {
	console.log("navigator.MediaDevices.getUserMedia error: ", error.message, error.name);
}

function instance($$self, $$props, $$invalidate) {
	let $capturedDevices,
		$$unsubscribe_capturedDevices = noop,
		$$subscribe_capturedDevices = () => ($$unsubscribe_capturedDevices(), $$unsubscribe_capturedDevices = subscribe(capturedDevices, $$value => $$invalidate(13, $capturedDevices = $$value)), capturedDevices);

	let $videoDeviceId,
		$$unsubscribe_videoDeviceId = noop,
		$$subscribe_videoDeviceId = () => ($$unsubscribe_videoDeviceId(), $$unsubscribe_videoDeviceId = subscribe(videoDeviceId, $$value => $$invalidate(14, $videoDeviceId = $$value)), videoDeviceId);

	let $cameraOn,
		$$unsubscribe_cameraOn = noop,
		$$subscribe_cameraOn = () => ($$unsubscribe_cameraOn(), $$unsubscribe_cameraOn = subscribe(cameraOn, $$value => $$invalidate(1, $cameraOn = $$value)), cameraOn);

	let $videoReady,
		$$unsubscribe_videoReady = noop,
		$$subscribe_videoReady = () => ($$unsubscribe_videoReady(), $$unsubscribe_videoReady = subscribe(videoReady, $$value => $$invalidate(0, $videoReady = $$value)), videoReady);

	let $DIM;

	let $hideCamera,
		$$unsubscribe_hideCamera = noop,
		$$subscribe_hideCamera = () => ($$unsubscribe_hideCamera(), $$unsubscribe_hideCamera = subscribe(hideCamera, $$value => $$invalidate(2, $hideCamera = $$value)), hideCamera);

	let $pipEnabled;

	let $hideFace,
		$$unsubscribe_hideFace = noop,
		$$subscribe_hideFace = () => ($$unsubscribe_hideFace(), $$unsubscribe_hideFace = subscribe(hideFace, $$value => $$invalidate(4, $hideFace = $$value)), hideFace);

	component_subscribe($$self, capturedDevices, $$value => $$invalidate(13, $capturedDevices = $$value));
	component_subscribe($$self, videoDeviceId, $$value => $$invalidate(14, $videoDeviceId = $$value));
	component_subscribe($$self, cameraOn, $$value => $$invalidate(1, $cameraOn = $$value));
	component_subscribe($$self, videoReady, $$value => $$invalidate(0, $videoReady = $$value));
	component_subscribe($$self, DIM, $$value => $$invalidate(5, $DIM = $$value));
	component_subscribe($$self, hideCamera, $$value => $$invalidate(2, $hideCamera = $$value));
	component_subscribe($$self, pipEnabled, $$value => $$invalidate(3, $pipEnabled = $$value));
	component_subscribe($$self, hideFace, $$value => $$invalidate(4, $hideFace = $$value));
	$$self.$$.on_destroy.push(() => $$unsubscribe_capturedDevices());
	$$self.$$.on_destroy.push(() => $$unsubscribe_videoDeviceId());
	$$self.$$.on_destroy.push(() => $$unsubscribe_cameraOn());
	$$self.$$.on_destroy.push(() => $$unsubscribe_videoReady());
	$$self.$$.on_destroy.push(() => $$unsubscribe_hideCamera());
	$$self.$$.on_destroy.push(() => $$unsubscribe_hideFace());

	function gotDevices(deviceInfos) {
		for (let i = 0; i !== deviceInfos.length; ++i) {
			const deviceInfo = deviceInfos[i];

			if (deviceInfo.kind === "audioinput") {
				$capturedDevices.audioinput.push(deviceInfo);
			} else if (deviceInfo.kind === "audiooutput") {
				$capturedDevices.audiooutput.push(deviceInfo);
			} else if (deviceInfo.kind === "videoinput") {
				if (deviceInfo.deviceId !== "" && !$capturedDevices.videoinput.find(o => o.deviceId === deviceInfo.deviceId)) {
					$capturedDevices.videoinput.push(deviceInfo);
				}
			} else {
				console.log("Some other kind of source/device: ", deviceInfo);
			}
		}

		$capturedDevices.videoinput.forEach((e, i) => {
			//move any virtual cams to the end of array
			if (e.label.includes("Virtual") || e.label.includes("virtual")) {
				$capturedDevices.videoinput.push($capturedDevices.videoinput.splice(i, 1)[0]);
			}
		});

		capturedDevices.set($capturedDevices);

		if (!$videoDeviceId) {
			videoDeviceId.set($capturedDevices.videoinput[0].deviceId);
		}
	}

	navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
	let Stream;

	const getStream = () => {
		const constraints = {
			video: {
				deviceId: $videoDeviceId ? { exact: $videoDeviceId } : undefined,
				facingMode: "user",
				width: { min: 480, ideal: 640, max: 640 },
				height: { min: 480, ideal: 480, max: 640 }
			},
			audio: false
		};

		// Get access to the camera!
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			if (!Stream || Stream.active === false) {
				navigator.mediaDevices.getUserMedia(constraints).then(stream => {
					Stream = stream;
					handleStream(stream);

					if ($capturedDevices.videoinput.length === 0) {
						return navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
					}
				}).catch(err => {
					alert("Please allow camera for facial tracking.");

					setTimeout(
						() => {
							cameraOn.set(false);
							videoReady.set(false);
						},
						1000
					);
				});
			} else {
				stopStream();
			}
		}
	};

	let checkStream;

	const handleStream = stream => {
		// console.log(stream)
		videoEl.srcObject = stream;

		checkStream = setInterval(
			() => {
				if (videoEl.readyState >= 3) {
					videoReady.set(true);
					videoEl.play();

					//stop checking every half second
					clearInterval(checkStream);
				}
			},
			500
		);
	};

	const stopStream = () => {
		if (Stream) {
			Stream.getTracks().forEach(track => track.stop());
		}

		videoReady.set(false);
		clearInterval(checkStream);
	};

	cameraOn.subscribe(val => {
		if (val) {
			getStream();
		} else {
			setTimeout(stopStream, 50);
		}
	});

	videoDeviceId.subscribe(val => {
		if ($cameraOn && $videoReady) {
			stopStream();
			getStream();
		}
	}); // console.log(val)

	onMount(() => {
		canvasCtx = canvasEl.getContext("2d");

		interact("#drag-cam").draggable({
			// inertia: {
			//   resistance: isTouch ? 300 : 10,
			// },
			inertia: isTouch ? false : true,
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: "parent",
					endOnly: true,
					elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
				})
			],
			listeners: {
				start(event) {
					
				},
				move(event) {
					//save position in px
					videoPosition.x += event.dx;

					videoPosition.y += event.dy;

					//save position in ratio
					videoPosition.sx = videoPosition.x / ($DIM.w - event.target.offsetWidth - videoPosition.m * 2);

					videoPosition.sy = videoPosition.y / ($DIM.h - event.target.offsetHeight - videoPosition.m * 2);

					//apply position transforms
					event.target.style.webkitTransform = event.target.style.transform = `translate(${videoPosition.x}px, ${videoPosition.y}px)`;
				}
			}
		}).on("down", function (event) {
			videoPosition.active = true;
		}).on("up", function (event) {
			videoPosition.active = false;
		});
	});

	function video_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			videoEl = $$value;
			videoEl
		});
	}

	function canvas_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			canvasEl = $$value;
			canvasEl
		});
	}

	const click_handler = () => {
		hideCamera.set(true);
	};

	const mouseenter_handler = () => {
		videoPosition.hover = true;
	};

	const mouseleave_handler = () => {
		videoPosition.hover = false;
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$videoReady, $DIM*/ 33) {
			$: {
				if ($videoReady) {
					videoPosition.x = videoPosition.sx * ($DIM.w - videoEl.offsetWidth - videoPosition.m * 2);
					videoPosition.y = videoPosition.sy * ($DIM.h - videoEl.offsetHeight - videoPosition.m * 2);
					document.querySelector("#drag-cam").style.webkitTransform = document.querySelector("#drag-cam").style.transform = `translate(${videoPosition.x}px, ${videoPosition.y}px)`;
				}
			}
		}
	};

	return [
		$videoReady,
		$cameraOn,
		$hideCamera,
		$pipEnabled,
		$hideFace,
		$DIM,
		video_binding,
		canvas_binding,
		click_handler,
		mouseenter_handler,
		mouseleave_handler
	];
}

class Webcam extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Webcam;

export {
	cameraOn,
	videoReady,
	videoEl,
	canvasEl,
	canvasCtx,
	hideCamera,
	hideFace,
	videoPosition,
	capturedDevices,
	videoDeviceId
};