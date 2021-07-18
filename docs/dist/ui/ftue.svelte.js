import './ftue.svelte.css.proxy.js';
/* src/ui/ftue.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	check_outros,
	component_subscribe,
	create_in_transition,
	create_out_transition,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	subscribe,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import { urlBase, setLang, getLocalStorage, subLocalStorage } from "../stores.js";
import { writable, get } from "../../_snowpack/pkg/svelte/store.js";
import { fade, fly, scale } from "../../_snowpack/pkg/svelte/transition.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
import { ftueText } from "../text/translations.js";

function create_if_block(ctx) {
	let container;
	let video;
	let video_class_value;
	let video_src_value;
	let video_alt_value;
	let t0;
	let div;
	let p0;
	let raw_value = ftueText[/*selected*/ ctx[0]].message[/*$setLang*/ ctx[3]] + "";
	let t1;
	let p1;
	let t2_value = ftueText[/*selected*/ ctx[0]].confirm[/*$setLang*/ ctx[3]] + "";
	let t2;
	let container_intro;
	let container_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			container = element("container");
			video = element("video");
			t0 = space();
			div = element("div");
			p0 = element("p");
			t1 = space();
			p1 = element("p");
			t2 = text(t2_value);
			attr(video, "class", video_class_value = "content " + /*selected*/ ctx[0] + " svelte-1kc6ls6");
			if (video.src !== (video_src_value = /*ftueList*/ ctx[4][/*selected*/ ctx[0]])) attr(video, "src", video_src_value);
			attr(video, "alt", video_alt_value = "uploaded sticker");
			video.autoplay = true;
			video.muted = true;
			video.playsInline = true;
			video.loop = true;
			attr(p0, "class", "svelte-1kc6ls6");
			attr(p1, "class", "confirm svelte-1kc6ls6");
			attr(container, "style", /*style*/ ctx[1]);
			attr(container, "class", "svelte-1kc6ls6");
		},
		m(target, anchor) {
			insert(target, container, anchor);
			append(container, video);
			append(container, t0);
			append(container, div);
			append(div, p0);
			p0.innerHTML = raw_value;
			append(div, t1);
			append(div, p1);
			append(p1, t2);
			current = true;

			if (!mounted) {
				dispose = listen(p1, "click", /*click_handler*/ ctx[5]);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty & /*selected*/ 1 && video_class_value !== (video_class_value = "content " + /*selected*/ ctx[0] + " svelte-1kc6ls6")) {
				attr(video, "class", video_class_value);
			}

			if (!current || dirty & /*selected*/ 1 && video.src !== (video_src_value = /*ftueList*/ ctx[4][/*selected*/ ctx[0]])) {
				attr(video, "src", video_src_value);
			}

			if ((!current || dirty & /*selected, $setLang*/ 9) && raw_value !== (raw_value = ftueText[/*selected*/ ctx[0]].message[/*$setLang*/ ctx[3]] + "")) p0.innerHTML = raw_value;;
			if ((!current || dirty & /*selected, $setLang*/ 9) && t2_value !== (t2_value = ftueText[/*selected*/ ctx[0]].confirm[/*$setLang*/ ctx[3]] + "")) set_data(t2, t2_value);

			if (!current || dirty & /*style*/ 2) {
				attr(container, "style", /*style*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (container_outro) container_outro.end(1);

				if (!container_intro) container_intro = create_in_transition(container, scale, {
					delay: 1000,
					duration: 300,
					easing: cubicInOut,
					baseScale: 0.9
				});

				container_intro.start();
			});

			current = true;
		},
		o(local) {
			if (container_intro) container_intro.invalidate();
			container_outro = create_out_transition(container, fade, { duration: 200 });
			current = false;
		},
		d(detaching) {
			if (detaching) detach(container);
			if (detaching && container_outro) container_outro.end();
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*selected*/ ctx[0] && /*$ftueState*/ ctx[2][/*selected*/ ctx[0]] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*selected*/ ctx[0] && /*$ftueState*/ ctx[2][/*selected*/ ctx[0]]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*selected, $ftueState*/ 5) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

const ftueState = writable({
	camera: true,
	char: true,
	call: true,
	bg: true,
	sticker: true
});

const updateFtue = val => {
	if (get(ftueState)[val]) {
		get(ftueState)[val] = false;
		ftueState.set(get(ftueState));
	}
};

getLocalStorage(ftueState, "ftueState", {
	camera: true,
	char: true,
	call: true,
	bg: true,
	sticker: true
});

subLocalStorage(ftueState, "ftueState");

function instance($$self, $$props, $$invalidate) {
	let $ftueState,
		$$unsubscribe_ftueState = noop,
		$$subscribe_ftueState = () => ($$unsubscribe_ftueState(), $$unsubscribe_ftueState = subscribe(ftueState, $$value => $$invalidate(2, $ftueState = $$value)), ftueState);

	let $setLang;
	component_subscribe($$self, ftueState, $$value => $$invalidate(2, $ftueState = $$value));
	component_subscribe($$self, setLang, $$value => $$invalidate(3, $setLang = $$value));
	$$self.$$.on_destroy.push(() => $$unsubscribe_ftueState());
	let { selected } = $$props;
	let { style = "" } = $$props;

	let ftueList = {
		char: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fcharupload1clippedcropped.mp4?v=1625730916425",
		bg: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fbgupload1.mp4?v=1625732427215",
		sticker: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fstickerdropcrop.mp4?v=1625760067751",
		call: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fcall_small.mp4?v=1626041341731"
	};

	const click_handler = () => updateFtue(selected);

	$$self.$$set = $$props => {
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
	};

	return [selected, style, $ftueState, $setLang, ftueList, click_handler];
}

class Ftue extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { selected: 0, style: 1 });
	}
}

export default Ftue;
export { ftueState, updateFtue };