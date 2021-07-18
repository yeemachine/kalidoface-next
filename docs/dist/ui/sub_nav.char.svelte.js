import './sub_nav.char.svelte.css.proxy.js';
/* src/ui/sub_nav.char.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	add_transform,
	append,
	attr,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_animation,
	create_in_transition,
	create_out_transition,
	detach,
	element,
	fix_and_outro_and_destroy_block,
	fix_position,
	group_outros,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	set_store_value,
	set_style,
	space,
	svg_element,
	text,
	toggle_class,
	transition_in,
	transition_out,
	update_keyed_each
} from "../../_snowpack/pkg/svelte/internal.js";

import { notifText } from "./notif.svelte.js";
import { isZip } from "../utils/helpers.js";
import { dropzone } from "./filedrop.svelte.js";
import { profiles } from "../scene/profiles.svelte.js";
import { userModel, modelList, randomColors } from "../scene/character.svelte.js";
import { writable, get } from "../../_snowpack/pkg/svelte/store.js";
import { fade, fly, scale } from "../../_snowpack/pkg/svelte/transition.js";
import { flip } from "../../_snowpack/pkg/svelte/animate.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
import { DIM, urlBase, setLang } from "../stores.js";
import { ftueState, updateFtue } from "./ftue.svelte.js";
import { hideCamera } from "../tracking/webcam.svelte.js";
import { unzip } from "../utils/unzip.js";
import { subnav_live2d_text } from "../text/translations.js";
import { resetInput, checkJSONEqual } from "../utils/helpers.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

// (154:8) {:else}
function create_else_block(ctx) {
	let div;
	let t_value = /*model*/ ctx[15].name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").charAt(0) + "";
	let t;
	let mounted;
	let dispose;

	function click_handler_2() {
		return /*click_handler_2*/ ctx[12](/*model*/ ctx[15]);
	}

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "noicon svelte-c90cmu");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);

			if (!mounted) {
				dispose = listen(div, "click", click_handler_2);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$modelList*/ 1 && t_value !== (t_value = /*model*/ ctx[15].name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").charAt(0) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (152:33) 
function create_if_block_2(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;
	let mounted;
	let dispose;

	function click_handler_1() {
		return /*click_handler_1*/ ctx[11](/*model*/ ctx[15]);
	}

	return {
		c() {
			img = element("img");
			if (img.src !== (img_src_value = /*model*/ ctx[15].url.icon)) attr(img, "src", img_src_value);
			attr(img, "class", "noBorder svelte-c90cmu");
			attr(img, "alt", img_alt_value = /*model*/ ctx[15].name);
		},
		m(target, anchor) {
			insert(target, img, anchor);

			if (!mounted) {
				dispose = listen(img, "click", click_handler_1);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$modelList*/ 1 && img.src !== (img_src_value = /*model*/ ctx[15].url.icon)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*$modelList*/ 1 && img_alt_value !== (img_alt_value = /*model*/ ctx[15].name)) {
				attr(img, "alt", img_alt_value);
			}
		},
		d(detaching) {
			if (detaching) detach(img);
			mounted = false;
			dispose();
		}
	};
}

// (150:8) {#if model.icon}
function create_if_block_1(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[10](/*model*/ ctx[15]);
	}

	return {
		c() {
			img = element("img");
			if (img.src !== (img_src_value = /*model*/ ctx[15].icon)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*model*/ ctx[15].name);
			attr(img, "class", "svelte-c90cmu");
		},
		m(target, anchor) {
			insert(target, img, anchor);

			if (!mounted) {
				dispose = listen(img, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$modelList*/ 1 && img.src !== (img_src_value = /*model*/ ctx[15].icon)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*$modelList*/ 1 && img_alt_value !== (img_alt_value = /*model*/ ctx[15].name)) {
				attr(img, "alt", img_alt_value);
			}
		},
		d(detaching) {
			if (detaching) detach(img);
			mounted = false;
			dispose();
		}
	};
}

// (157:7) {#if model.url && typeof model.url !== 'string'}
function create_if_block(ctx) {
	let button;
	let mounted;
	let dispose;

	function click_handler_3(...args) {
		return /*click_handler_3*/ ctx[13](/*i*/ ctx[17], ...args);
	}

	return {
		c() {
			button = element("button");

			button.innerHTML = `<i class="kalicon notranslate fill small svelte-c90cmu">jellyfill</i> 
              <i class="kalicon notranslate solid small svelte-c90cmu">minus</i>`;

			attr(button, "class", "remove svelte-c90cmu");
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (!mounted) {
				dispose = listen(button, "click", click_handler_3);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

// (139:2) {#each $modelList as model, i (model)}
function create_each_block(key_1, ctx) {
	let div;
	let t0;
	let t1;
	let div_class_value;
	let div_data_model_name_value;
	let div_intro;
	let div_outro;
	let rect;
	let stop_animation = noop;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*model*/ ctx[15].icon) return create_if_block_1;
		if (/*model*/ ctx[15].url.icon) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*model*/ ctx[15].url && typeof /*model*/ ctx[15].url !== "string" && create_if_block(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			div = element("div");
			if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();

			attr(div, "class", div_class_value = "model " + (typeof /*$userModel*/ ctx[1] === "string" && /*$userModel*/ ctx[1] === /*model*/ ctx[15].url
			? "selected"
			: typeof /*$userModel*/ ctx[1] === "object" && /*checkModel*/ ctx[8](/*model*/ ctx[15])
				? "selected"
				: "") + " svelte-c90cmu");

			attr(div, "data-model-name", div_data_model_name_value = /*model*/ ctx[15].name);
			set_style(div, "--color", /*model*/ ctx[15].color ? /*model*/ ctx[15].color : "");
			this.first = div;
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if_block0.m(div, null);
			append(div, t0);
			if (if_block1) if_block1.m(div, null);
			append(div, t1);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, t0);
				}
			}

			if (/*model*/ ctx[15].url && typeof /*model*/ ctx[15].url !== "string") {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!current || dirty & /*$userModel, $modelList*/ 3 && div_class_value !== (div_class_value = "model " + (typeof /*$userModel*/ ctx[1] === "string" && /*$userModel*/ ctx[1] === /*model*/ ctx[15].url
			? "selected"
			: typeof /*$userModel*/ ctx[1] === "object" && /*checkModel*/ ctx[8](/*model*/ ctx[15])
				? "selected"
				: "") + " svelte-c90cmu")) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*$modelList*/ 1 && div_data_model_name_value !== (div_data_model_name_value = /*model*/ ctx[15].name)) {
				attr(div, "data-model-name", div_data_model_name_value);
			}

			if (!current || dirty & /*$modelList*/ 1) {
				set_style(div, "--color", /*model*/ ctx[15].color ? /*model*/ ctx[15].color : "");
			}
		},
		r() {
			rect = div.getBoundingClientRect();
		},
		f() {
			fix_position(div);
			stop_animation();
			add_transform(div, rect);
		},
		a() {
			stop_animation();
			stop_animation = create_animation(div, rect, flip, { duration: 300 });
		},
		i(local) {
			if (current) return;

			if (local) {
				add_render_callback(() => {
					if (div_outro) div_outro.end(1);
					if (!div_intro) div_intro = create_in_transition(div, scale, { duration: 250 });
					div_intro.start();
				});
			}

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();

			if (local) {
				div_outro = create_out_transition(div, scale, { duration: 250 });
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching && div_outro) div_outro.end();
		}
	};
}

function create_fragment(ctx) {
	let container;
	let section;
	let div1;
	let label;
	let div0;
	let svg;
	let circle;
	let t0;
	let i;
	let div0_data_text_value;
	let t2;
	let input_1;
	let t3;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let div1_intro;
	let div1_outro;
	let container_data_text_value;
	let current;
	let mounted;
	let dispose;
	let each_value = /*$modelList*/ ctx[0];
	const get_key = ctx => /*model*/ ctx[15];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			container = element("container");
			section = element("section");
			div1 = element("div");
			label = element("label");
			div0 = element("div");
			svg = svg_element("svg");
			circle = svg_element("circle");
			t0 = space();
			i = element("i");
			i.textContent = "file";
			t2 = space();
			input_1 = element("input");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(circle, "cx", "55");
			attr(circle, "cy", "55");
			attr(circle, "r", "53");
			attr(circle, "class", "dotted svelte-c90cmu");
			attr(svg, "viewBox", "0 0 110 110");
			attr(svg, "class", "svelte-c90cmu");
			attr(i, "class", "kalicon notranslate solid variable svelte-c90cmu");
			attr(div0, "data-text", div0_data_text_value = subnav_live2d_text.upload[/*$setLang*/ ctx[3]]);
			attr(div0, "class", "svelte-c90cmu");
			attr(input_1, "type", "file");
			attr(input_1, "id", "uploadLive2D");
			attr(input_1, "name", "fileList");
			attr(input_1, "accept", ".zip");
			attr(input_1, "class", "svelte-c90cmu");
			attr(label, "class", "model svelte-c90cmu");
			attr(label, "for", "uploadLive2D");
			attr(div1, "class", "model-list svelte-c90cmu");
			attr(section, "class", "svelte-c90cmu");
			attr(container, "data-text", container_data_text_value = subnav_live2d_text.upload[/*$setLang*/ ctx[3]]);
			attr(container, "class", "svelte-c90cmu");
			toggle_class(container, "drop_zone", /*$dropzone*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, container, anchor);
			append(container, section);
			append(section, div1);
			append(div1, label);
			append(label, div0);
			append(div0, svg);
			append(svg, circle);
			append(div0, t0);
			append(div0, i);
			append(label, t2);
			append(label, input_1);
			/*input_1_binding*/ ctx[9](input_1);
			append(div1, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(input_1, "change", /*handleClickUpload*/ ctx[7]);
				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (!current || dirty & /*$setLang*/ 8 && div0_data_text_value !== (div0_data_text_value = subnav_live2d_text.upload[/*$setLang*/ ctx[3]])) {
				attr(div0, "data-text", div0_data_text_value);
			}

			if (dirty & /*$userModel, $modelList, checkModel, removeModel, updateModel*/ 355) {
				each_value = /*$modelList*/ ctx[0];
				group_outros();
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div1, fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
				check_outros();
			}

			if (!current || dirty & /*$setLang*/ 8 && container_data_text_value !== (container_data_text_value = subnav_live2d_text.upload[/*$setLang*/ ctx[3]])) {
				attr(container, "data-text", container_data_text_value);
			}

			if (dirty & /*$dropzone*/ 4) {
				toggle_class(container, "drop_zone", /*$dropzone*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			add_render_callback(() => {
				if (div1_outro) div1_outro.end(1);

				if (!div1_intro) div1_intro = create_in_transition(div1, fly, {
					x: /*$DIM*/ ctx[4].w > 600 ? 0 : 20,
					y: /*$DIM*/ ctx[4].w > 600 ? 20 : 0,
					easing: cubicInOut,
					duration: 400,
					delay: 200
				});

				div1_intro.start();
			});

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (div1_intro) div1_intro.invalidate();

			div1_outro = create_out_transition(div1, fade, {
				duration: /*$DIM*/ ctx[4].w > 600 ? 200 : 0
			});

			current = false;
		},
		d(detaching) {
			if (detaching) detach(container);
			/*input_1_binding*/ ctx[9](null);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (detaching && div1_outro) div1_outro.end();
			mounted = false;
			dispose();
		}
	};
}

let input;
let checkingModel = writable("done");

const newRandomColor = () => {
	let newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
	let currentColors = [];

	get(modelList).forEach(e => {
		if (e.color) {
			currentColors.push(e.color);
		}
	});

	if (currentColors.length < randomColors.length) {
		do {
			newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
		} while (currentColors.includes(newColor)); //random color;
	} else {
		do {
			newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
		} while (get(modelList)[0].color === newColor); //non repeating color;
	}

	return newColor;
};

const handleLive2DFiles = async files => {
	for (var i = 0; i < files.length; i++) {
		let fileName = files[i].name;

		if (!isZip(files[i].type)) {
			return;
		}

		try {
			checkingModel.set("checking");
			let unzipped = await unzip(files[i]);
			checkingModel.set("done");
			userModel.set({ name: fileName, url: unzipped });

			modelList.set([
				{
					name: fileName,
					url: unzipped,
					icon: null,
					color: unzipped.icon ? null : newRandomColor()
				},
				...get(modelList)
			]);

			if (input) {
				resetInput(input);
			}
		} catch(err) {
			checkingModel.set("error");
			console.error("Error: " + err);
			notifText.set({ type: "error", "text": err });
		}
	}
};

let dragging = false;

function instance($$self, $$props, $$invalidate) {
	let $profiles;
	let $modelList;
	let $userModel;
	let $dropzone;
	let $setLang;
	let $DIM;
	component_subscribe($$self, profiles, $$value => $$invalidate(14, $profiles = $$value));
	component_subscribe($$self, modelList, $$value => $$invalidate(0, $modelList = $$value));
	component_subscribe($$self, userModel, $$value => $$invalidate(1, $userModel = $$value));
	component_subscribe($$self, dropzone, $$value => $$invalidate(2, $dropzone = $$value));
	component_subscribe($$self, setLang, $$value => $$invalidate(3, $setLang = $$value));
	component_subscribe($$self, DIM, $$value => $$invalidate(4, $DIM = $$value));

	const updateModel = model => {
		// if (typeof $userModel==='string' && $userModel === file){return}
		if (checkModel(model)) {
			return;
		}

		if (!$profiles.user.destroying) {
			userModel.set(model);
		}
	};

	const removeModel = i => {
		let newArray = $modelList;
		newArray.splice(i, 1);

		if (i > -1) {
			set_store_value(modelList, $modelList = newArray, $modelList);
		}
	};

	const handleClickUpload = e => {
		handleLive2DFiles(e.target.files);
	};

	const checkModel = model => {
		if ($userModel.date && model.date) {
			return $userModel.date === model.date;
		} else if ($userModel.url && model.url) {
			return $userModel.url === model.url;
		}

		return false;
	};

	function input_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			input = $$value;
			input
		});
	}

	const click_handler = model => {
		updateModel(model);
	};

	const click_handler_1 = model => {
		updateModel(model);
	};

	const click_handler_2 = model => {
		updateModel(model);
	};

	const click_handler_3 = (i, e) => {
		e.preventDefault;
		removeModel(i);
	};

	return [
		$modelList,
		$userModel,
		$dropzone,
		$setLang,
		$DIM,
		updateModel,
		removeModel,
		handleClickUpload,
		checkModel,
		input_1_binding,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class Sub_nav_char extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Sub_nav_char;
export { input, checkingModel, newRandomColor, handleLive2DFiles };