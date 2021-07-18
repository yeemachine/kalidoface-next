/* src/scene/character.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	component_subscribe,
	init,
	safe_not_equal,
	set_store_value
} from "../../_snowpack/pkg/svelte/internal.js";

import {
	firstLoad,
	DIM,
	getLocalStorage,
	subLocalStorage,
	urlBase
} from "../stores.js";

import localForage from "../../_snowpack/pkg/localforage.js";
import { writable, get } from "../../_snowpack/pkg/svelte/store.js";
import { onMount } from "../../_snowpack/pkg/svelte.js";

import {
	updatePos,
	destroyModel,
	loadModel,
	handleParams,
	handleDrag,
	handleWheel,
	mapCubism2Params,
	mapCubism4Params
} from "./pixi.live2d.utils.js";

import { profiles } from "./profiles.svelte.js";
import { tweened } from "../../_snowpack/pkg/svelte/motion.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
let randomColors = ["#73a9ff", "#ff9785", "#ff6385", "#ffd75e", "#97ff94", "#d791ff", "#5ce9ff"];

let modelList = writable([
	{
		"id": 0,
		"name": "hiyori",
		"url": urlBase + "Demo/4.0/hiyori/hiyori_free_t06.model3.json",
		"icon": urlBase + "Demo/4.0/hiyori/_icon.jpeg",
		color: null
	},
	{
		"id": 1,
		"name": "tororo",
		"url": urlBase + "Demo/4.0/tororo/tororo.model3.json",
		"icon": urlBase + "Demo/4.0/tororo/_icon.jpeg",
		color: null
	},
	{
		"id": 2,
		"name": "hijiki",
		"url": urlBase + "Demo/4.0/hijiki/hijiki.model3.json",
		"icon": urlBase + "Demo/4.0/hijiki/_icon.jpeg",
		color: null
	},
	{
		"id": 3,
		"name": "wanko",
		"url": urlBase + "Demo/4.0/wanko/wanko_touch.model3.json",
		"icon": urlBase + "Demo/4.0/wanko/_icon.jpeg",
		color: null
	},
	{
		"id": 4,
		"name": "haru greeter",
		"url": urlBase + "Demo/4.0/haru_greeter/haru_greeter_t03.model3.json",
		"icon": urlBase + "Demo/4.0/haru_greeter/_icon.jpeg",
		color: null
	},
	{
		"id": 5,
		"name": "tsumiki",
		"url": urlBase + "Demo/4.0/tsumiki/tsumiki.model3.json",
		"icon": urlBase + "Demo/4.0/tsumiki/_icon.jpeg",
		color: null
	},
	{
		"id": 6,
		"name": "chitose",
		"url": urlBase + "Demo/4.0/chitose/chitose.model3.json",
		"icon": urlBase + "Demo/4.0/chitose/_icon.jpeg",
		color: null
	},
	{
		"id": 7,
		"name": "epsilon",
		"url": urlBase + "Demo/4.0/epsilon/Epsilon.model3.json",
		"icon": urlBase + "Demo/4.0/epsilon/_icon.jpeg",
		color: null
	},
	{
		"id": 8,
		"name": "haru",
		"url": urlBase + "Demo/4.0/haru/haru.model3.json",
		"icon": urlBase + "Demo/4.0/haru/_icon.jpeg",
		color: null
	},
	{
		"id": 9,
		"name": "koharu",
		"url": urlBase + "Demo/4.0/koharu/koharu.model3.json",
		"icon": urlBase + "Demo/4.0/koharu/_icon.jpeg",
		color: null
	},
	{
		"id": 10,
		"name": "haruto",
		"url": urlBase + "Demo/4.0/haruto/haruto.model3.json",
		"icon": urlBase + "Demo/4.0/haruto/_icon.jpeg",
		color: null
	}
]);

getLocalStorage(modelList, "modelList", get(modelList));
subLocalStorage(modelList, "modelList");
const userModel = writable(null);
let defaultURL = urlBase + "Demo/4.0/hiyori/hiyori_free_t06.model3.json";
getLocalStorage(userModel, "userModel", { url: defaultURL });
subLocalStorage(userModel, "userModel");
const friendModel = writable(null);
const userExps = writable({ current: null, list: [] });
const hoverOver = writable(null);

function instance($$self, $$props, $$invalidate) {
	let $profiles;
	let $firstLoad;
	let $DIM;
	component_subscribe($$self, profiles, $$value => $$invalidate(4, $profiles = $$value));
	component_subscribe($$self, firstLoad, $$value => $$invalidate(6, $firstLoad = $$value));
	component_subscribe($$self, DIM, $$value => $$invalidate(5, $DIM = $$value));
	let { app } = $$props;
	let { stage } = $$props;
	let { userContainer } = $$props;
	let { friendContainer } = $$props;

	const loadIn = tweened(0, {
		duration: 800,
		easing: cubicInOut,
		delay: 200
	});

	const initLive2D = async (profile, data) => {
		//destroy and reset live2d instance
		if (profile.live2d) {
			destroyModel(profile);
		}

		try {
			console.log(data);
			const newModel = await loadModel(data.url, profile.id === "user" ? userContainer : friendContainer);
			newModel.avatarType = profile.id;
			profile.live2d = newModel;

			// console.log($profiles)
			profiles.set($profiles);

			if (profile.live2d.internalModel.coreModel._$MT) {
				profile.live2d._allParams = mapCubism2Params(profile.live2d);
			} else if (profile.live2d.internalModel.coreModel._model) {
				profile.live2d._allParams = mapCubism4Params(profile.live2d);
			}

			// console.log(profile)
			handleDrag(profile, DIM);

			handleParams(profile.live2d, profile.tracking.face, profile.id);

			profile.expressions = newModel.internalModel.motionManager.expressionManager
			? newModel.internalModel.motionManager.expressionManager.definitions
			: [];

			profile.currentExp = 0;

			if (profile.id === "user") {
				userExps.set({
					current: 0,
					list: newModel.internalModel.settings.expressions
					? newModel.internalModel.settings.expressions
					: []
				});
			}
		} catch(e) {
			console.error("File upload error", e); // 30
		}

		profile.destroying = false;

		if (!$firstLoad) {
			setTimeout(
				() => {
					firstLoad.set(true);
					loadIn.set(1);
				},
				1000
			);
		}
	};

	loadIn.subscribe(val => {
		set_store_value(
			profiles,
			$profiles.user.zoom = window.innerWidth > 600
			? 0.5 + val * 0.1
			: 0.6 + val * 0.1,
			$profiles
		);

		set_store_value(
			profiles,
			$profiles.user.position.y = window.innerWidth > 600
			? 0.7 - val * 0.05
			: 0.65 - val * 0.05,
			$profiles
		);
	});

	onMount(async () => {
		userModel.subscribe(e => {
			if (e) {
				initLive2D($profiles.user, e);
			}
		});

		friendModel.subscribe(e => {
			if (e) {
				initLive2D($profiles.friend, e);
			} else if ($profiles.friend.live2d) {
				destroyModel($profiles.friend);
			}
		});

		document.querySelector(".canvasContainer").addEventListener("wheel", handleWheel);
	});

	$$self.$$set = $$props => {
		if ("app" in $$props) $$invalidate(0, app = $$props.app);
		if ("stage" in $$props) $$invalidate(1, stage = $$props.stage);
		if ("userContainer" in $$props) $$invalidate(2, userContainer = $$props.userContainer);
		if ("friendContainer" in $$props) $$invalidate(3, friendContainer = $$props.friendContainer);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$profiles, $DIM*/ 48) {
			//handle all position and zoom changes to Live2D model
			$: {
				if ($profiles.user.live2d && !$profiles.user.destroying) {
					updatePos($profiles.user.live2d, {
						width: $DIM.cw,
						height: $DIM.ch,
						zoom: $profiles.user.zoom,
						position: $profiles.user.position
					});
				}

				if ($profiles.friend.live2d && !$profiles.friend.destroying) {
					updatePos($profiles.friend.live2d, {
						width: $DIM.cw,
						height: $DIM.ch,
						zoom: $profiles.friend.zoom,
						position: $profiles.friend.position
					});
				}
			}
		}
	};

	return [app, stage, userContainer, friendContainer, $profiles, $DIM];
}

class Character extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, null, safe_not_equal, {
			app: 0,
			stage: 1,
			userContainer: 2,
			friendContainer: 3
		});
	}
}

export default Character;
export { randomColors, modelList, userModel, friendModel, userExps, hoverOver };