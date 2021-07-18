import './quick_nav.svelte.css.proxy.js';
/* src/ui/quick_nav.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	add_render_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_component,
	create_in_transition,
	create_out_transition,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";
import { fade, scale } from "../../_snowpack/pkg/svelte/transition.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";

import {
	quickNavExpanded,
	firstLoad,
	inactive,
	infoExpanded,
	DIM,
	largeWipe,
	setLang,
	hasPIP,
	isTouch
} from "../stores.js";

import { haptic } from "../utils/helpers.js";
import { ftueState, updateFtue } from "./ftue.svelte.js";
import { cameraOn } from "../tracking/webcam.svelte.js";
import { peerState, callTime } from "../connections/Peer.svelte.js";
import { userExps } from "../scene/character.svelte.js";
import { pipEnabled, togglePIP } from "../scene/pip.svelte.js";
import SubNav, { wipeComponent } from "./sub_nav.svelte.js";
import Filedrop from "./filedrop.svelte.js";
import SvgBlob from "./svgBlob.svelte.js";
import SvgBlobSmall from "./svgBlobSmall.svelte.js";
import SvgOrientation from "./svgOrientation.svelte.js";
import SvgSettings from "./icons/svgSettings.svelte.js";
import SvgPIP from "./icons/svgPIP.svelte.js";
import SvgFlip from "./icons/svgFlip.svelte.js";
import SvgShow from "./icons/svgShow.svelte.js";
import SvgHide from "./icons/svgHide.svelte.js";
import { tooltip } from "../text/translations.js";

function create_if_block_4(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "class", "pulse svelte-1qzj43m");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (153:4) {#if $userExps.list.length > 0 && $quickNavExpanded}
function create_if_block_3(ctx) {
	let button;
	let i0;
	let t0;
	let i0_class_value;
	let t1;
	let i1;
	let button_class_value;
	let button_data_text_value;
	let button_intro;
	let button_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			i0 = element("i");
			t0 = text("jellyfill3");
			t1 = space();
			i1 = element("i");
			i1.textContent = "emotealt";
			attr(i0, "class", i0_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "exp" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i1, "class", "kalicon notranslate solid medium");
			attr(button, "class", button_class_value = "menu-item no_highlights exp " + (/*selected*/ ctx[2] === "exp" ? "selected" : "") + " svelte-1qzj43m");
			attr(button, "data-text", button_data_text_value = tooltip.exp[/*$setLang*/ ctx[8]]);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, i0);
			append(i0, t0);
			append(button, t1);
			append(button, i1);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button, "click", /*click_handler_4*/ ctx[28]),
					listen(button, "touchend", /*touchend_handler_3*/ ctx[29])
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*selected*/ 4 && i0_class_value !== (i0_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "exp" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i0, "class", i0_class_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && button_class_value !== (button_class_value = "menu-item no_highlights exp " + (/*selected*/ ctx[2] === "exp" ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button, "class", button_class_value);
			}

			if (!current || dirty[0] & /*$setLang*/ 256 && button_data_text_value !== (button_data_text_value = tooltip.exp[/*$setLang*/ ctx[8]])) {
				attr(button, "data-text", button_data_text_value);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (button_outro) button_outro.end(1);
				if (!button_intro) button_intro = create_in_transition(button, scale, { duration: 300, easing: cubicInOut });
				button_intro.start();
			});

			current = true;
		},
		o(local) {
			if (button_intro) button_intro.invalidate();
			button_outro = create_out_transition(button, scale, { duration: 300, easing: cubicInOut });
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			if (detaching && button_outro) button_outro.end();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (172:0) {#if  (!$inactive || $infoExpanded )  && ((!selected && $DIM.w < 600) || $DIM.w > 600 )}
function create_if_block_1(ctx) {
	let button0;
	let i0;
	let t1;
	let i1;
	let t2;
	let i1_class_value;
	let button0_class_value;
	let button0_style_value;
	let button0_intro;
	let button0_outro;
	let t3;
	let section;
	let button1;
	let i2;
	let t4;
	let i2_class_value;
	let t5;
	let i3;
	let button1_data_text_value;
	let button1_intro;
	let button1_outro;
	let t7;
	let button2;
	let i4;
	let t8;
	let i4_class_value;
	let t9;
	let i5;
	let t10_value = (/*$quickNavExpanded*/ ctx[1] ? "show" : "hide") + "";
	let t10;
	let button2_data_text_value;
	let button2_intro;
	let button2_outro;
	let t11;
	let current;
	let mounted;
	let dispose;
	let if_block = !/*$pipEnabled*/ ctx[12] && hasPIP && create_if_block_2(ctx);

	return {
		c() {
			button0 = element("button");
			i0 = element("i");
			i0.textContent = "jellyfill3";
			t1 = space();
			i1 = element("i");
			t2 = text("info");
			t3 = space();
			section = element("section");
			button1 = element("button");
			i2 = element("i");
			t4 = text("jellyfill");
			t5 = space();
			i3 = element("i");
			i3.textContent = "settings";
			t7 = space();
			button2 = element("button");
			i4 = element("i");
			t8 = text("jellyfill");
			t9 = space();
			i5 = element("i");
			t10 = text(t10_value);
			t11 = space();
			if (if_block) if_block.c();
			attr(i0, "class", "kalicon notranslate fill small svelte-1qzj43m");
			attr(i1, "class", i1_class_value = "kalicon notranslate solid small variable " + (/*$infoExpanded*/ ctx[6] ? "end" : "") + " svelte-1qzj43m");
			attr(button0, "class", button0_class_value = "subButton infoToggle no_highlights \n                 " + (/*$infoExpanded*/ ctx[6] ? "selected" : "") + "\n                 " + (/*$cameraOn*/ ctx[5] ? "disabled" : "") + "\n                 " + " svelte-1qzj43m");
			attr(button0, "style", button0_style_value = /*$infoExpanded*/ ctx[6] ? "z-index:5" : "");
			attr(i2, "class", i2_class_value = "kalicon notranslate fill small " + (/*selected*/ ctx[2] === "settings" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i3, "class", "kalicon notranslate solid small svelte-1qzj43m");
			attr(button1, "class", "subButton no_highlights svelte-1qzj43m");
			attr(button1, "data-text", button1_data_text_value = tooltip.settings[/*$setLang*/ ctx[8]]);
			toggle_class(button1, "selected", /*selected*/ ctx[2] === "settings");
			attr(i4, "class", i4_class_value = "kalicon notranslate fill small " + (/*selected*/ ctx[2] === "exp" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i5, "class", "kalicon notranslate solid small svelte-1qzj43m");
			attr(button2, "class", "subButton no_highlights svelte-1qzj43m");

			attr(button2, "data-text", button2_data_text_value = /*$quickNavExpanded*/ ctx[1]
			? tooltip.hide[/*$setLang*/ ctx[8]]
			: tooltip.show[/*$setLang*/ ctx[8]]);

			attr(section, "class", "secondaryMenu svelte-1qzj43m");
		},
		m(target, anchor) {
			insert(target, button0, anchor);
			append(button0, i0);
			append(button0, t1);
			append(button0, i1);
			append(i1, t2);
			insert(target, t3, anchor);
			insert(target, section, anchor);
			append(section, button1);
			append(button1, i2);
			append(i2, t4);
			append(button1, t5);
			append(button1, i3);
			append(section, t7);
			append(section, button2);
			append(button2, i4);
			append(i4, t8);
			append(button2, t9);
			append(button2, i5);
			append(i5, t10);
			append(section, t11);
			if (if_block) if_block.m(section, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*handleInfo*/ ctx[15]),
					listen(button1, "mouseover", /*mouseover_handler*/ ctx[32]),
					listen(button1, "mouseout", /*resetTimer*/ ctx[16]),
					listen(button1, "click", /*click_handler_5*/ ctx[33]),
					listen(button1, "touchend", /*touchend_handler_4*/ ctx[34]),
					listen(button2, "mouseover", /*mouseover_handler_1*/ ctx[35]),
					listen(button2, "mouseout", /*resetTimer*/ ctx[16]),
					listen(button2, "click", /*click_handler_6*/ ctx[36]),
					listen(button2, "touchend", /*touchend_handler_5*/ ctx[37])
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*$infoExpanded*/ 64 && i1_class_value !== (i1_class_value = "kalicon notranslate solid small variable " + (/*$infoExpanded*/ ctx[6] ? "end" : "") + " svelte-1qzj43m")) {
				attr(i1, "class", i1_class_value);
			}

			if (!current || dirty[0] & /*$infoExpanded, $cameraOn*/ 96 && button0_class_value !== (button0_class_value = "subButton infoToggle no_highlights \n                 " + (/*$infoExpanded*/ ctx[6] ? "selected" : "") + "\n                 " + (/*$cameraOn*/ ctx[5] ? "disabled" : "") + "\n                 " + " svelte-1qzj43m")) {
				attr(button0, "class", button0_class_value);
			}

			if (!current || dirty[0] & /*$infoExpanded*/ 64 && button0_style_value !== (button0_style_value = /*$infoExpanded*/ ctx[6] ? "z-index:5" : "")) {
				attr(button0, "style", button0_style_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && i2_class_value !== (i2_class_value = "kalicon notranslate fill small " + (/*selected*/ ctx[2] === "settings" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i2, "class", i2_class_value);
			}

			if (!current || dirty[0] & /*$setLang*/ 256 && button1_data_text_value !== (button1_data_text_value = tooltip.settings[/*$setLang*/ ctx[8]])) {
				attr(button1, "data-text", button1_data_text_value);
			}

			if (dirty[0] & /*selected*/ 4) {
				toggle_class(button1, "selected", /*selected*/ ctx[2] === "settings");
			}

			if (!current || dirty[0] & /*selected*/ 4 && i4_class_value !== (i4_class_value = "kalicon notranslate fill small " + (/*selected*/ ctx[2] === "exp" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i4, "class", i4_class_value);
			}

			if ((!current || dirty[0] & /*$quickNavExpanded*/ 2) && t10_value !== (t10_value = (/*$quickNavExpanded*/ ctx[1] ? "show" : "hide") + "")) set_data(t10, t10_value);

			if (!current || dirty[0] & /*$quickNavExpanded, $setLang*/ 258 && button2_data_text_value !== (button2_data_text_value = /*$quickNavExpanded*/ ctx[1]
			? tooltip.hide[/*$setLang*/ ctx[8]]
			: tooltip.show[/*$setLang*/ ctx[8]])) {
				attr(button2, "data-text", button2_data_text_value);
			}

			if (!/*$pipEnabled*/ ctx[12] && hasPIP) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*$pipEnabled*/ 4096) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(section, null);
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

			add_render_callback(() => {
				if (button0_outro) button0_outro.end(1);
				if (!button0_intro) button0_intro = create_in_transition(button0, scale, { duration: 300, easing: cubicInOut });
				button0_intro.start();
			});

			add_render_callback(() => {
				if (button1_outro) button1_outro.end(1);

				if (!button1_intro) button1_intro = create_in_transition(button1, scale, {
					duration: 300,
					easing: cubicInOut,
					delay: 50
				});

				button1_intro.start();
			});

			add_render_callback(() => {
				if (button2_outro) button2_outro.end(1);

				if (!button2_intro) button2_intro = create_in_transition(button2, scale, {
					duration: 300,
					easing: cubicInOut,
					delay: 100
				});

				button2_intro.start();
			});

			transition_in(if_block);
			current = true;
		},
		o(local) {
			if (button0_intro) button0_intro.invalidate();

			button0_outro = create_out_transition(button0, scale, {
				duration: 300,
				delay: 600,
				easing: cubicInOut
			});

			if (button1_intro) button1_intro.invalidate();

			button1_outro = create_out_transition(button1, scale, {
				duration: 300,
				easing: cubicInOut,
				delay: hasPIP ? 100 : 50
			});

			if (button2_intro) button2_intro.invalidate();

			button2_outro = create_out_transition(button2, scale, {
				duration: 300,
				easing: cubicInOut,
				delay: hasPIP ? 50 : 0
			});

			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button0);
			if (detaching && button0_outro) button0_outro.end();
			if (detaching) detach(t3);
			if (detaching) detach(section);
			if (detaching && button1_outro) button1_outro.end();
			if (detaching && button2_outro) button2_outro.end();
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (224:2) {#if !$pipEnabled && hasPIP}
function create_if_block_2(ctx) {
	let button;
	let i0;
	let t1;
	let i1;
	let button_data_text_value;
	let button_intro;
	let button_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			i0 = element("i");
			i0.textContent = "jellyfill";
			t1 = space();
			i1 = element("i");
			i1.textContent = "pip";
			attr(i0, "class", "kalicon notranslate fill small svelte-1qzj43m");
			attr(i1, "class", "kalicon notranslate solid small svelte-1qzj43m");
			attr(button, "class", "subButton pip svelte-1qzj43m");
			attr(button, "data-text", button_data_text_value = tooltip.pip[/*$setLang*/ ctx[8]]);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, i0);
			append(button, t1);
			append(button, i1);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", togglePIP);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*$setLang*/ 256 && button_data_text_value !== (button_data_text_value = tooltip.pip[/*$setLang*/ ctx[8]])) {
				attr(button, "data-text", button_data_text_value);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (button_outro) button_outro.end(1);

				if (!button_intro) button_intro = create_in_transition(button, scale, {
					duration: 300,
					easing: cubicInOut,
					delay: 150
				});

				button_intro.start();
			});

			current = true;
		},
		o(local) {
			if (button_intro) button_intro.invalidate();
			button_outro = create_out_transition(button, scale, { duration: 300, easing: cubicInOut });
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			if (detaching && button_outro) button_outro.end();
			mounted = false;
			dispose();
		}
	};
}

// (244:0) {#if $inactive}
function create_if_block(ctx) {
	let div;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			attr(div, "class", "scrim svelte-1qzj43m");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = [
					listen(div, "mousemove", /*unhide*/ ctx[17]),
					listen(div, "mouseout", /*resetTimer*/ ctx[16]),
					listen(div, "click", /*unhide*/ ctx[17]),
					listen(div, "touchstart", /*unhide*/ ctx[17])
				];

				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let nav;
	let input;
	let t0;
	let button0;
	let i0;
	let t2;
	let i1;
	let t3;
	let i1_class_value;
	let button0_class_value;
	let button0_data_text_value;
	let t4;
	let button1;
	let i2;
	let t5;
	let i2_class_value;
	let t6;
	let i3;
	let button1_class_value;
	let button1_data_text_value;
	let t8;
	let button2;
	let i4;
	let t9;
	let i4_class_value;
	let t10;
	let i5;
	let button2_class_value;
	let button2_data_text_value;
	let t12;
	let button3;
	let i6;
	let t13;
	let i6_class_value;
	let t14;
	let i7;
	let button3_class_value;
	let button3_data_text_value;
	let t16;
	let button4;
	let i8;
	let t17;
	let i8_class_value;
	let t18;
	let i9;
	let t20;
	let button4_class_value;
	let button4_data_text_value;
	let t21;
	let t22;
	let svgblob;
	let nav_class_value;
	let t23;
	let subnav;
	let updating_selected;
	let updating_forceClose;
	let t24;
	let t25;
	let t26;
	let filedrop;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*$peerState*/ ctx[9] === "connected" && create_if_block_4(ctx);
	let if_block1 = /*$userExps*/ ctx[11].list.length > 0 && /*$quickNavExpanded*/ ctx[1] && create_if_block_3(ctx);

	svgblob = new SvgBlob({
			props: { hide: !/*$quickNavExpanded*/ ctx[1] }
		});

	function subnav_selected_binding(value) {
		/*subnav_selected_binding*/ ctx[30](value);
	}

	function subnav_forceClose_binding(value) {
		/*subnav_forceClose_binding*/ ctx[31](value);
	}

	let subnav_props = {};

	if (/*selected*/ ctx[2] !== void 0) {
		subnav_props.selected = /*selected*/ ctx[2];
	}

	if (/*forceClose*/ ctx[3] !== void 0) {
		subnav_props.forceClose = /*forceClose*/ ctx[3];
	}

	subnav = new SubNav({ props: subnav_props });
	binding_callbacks.push(() => bind(subnav, "selected", subnav_selected_binding));
	binding_callbacks.push(() => bind(subnav, "forceClose", subnav_forceClose_binding));
	let if_block2 = (!/*$inactive*/ ctx[7] || /*$infoExpanded*/ ctx[6]) && (!/*selected*/ ctx[2] && /*$DIM*/ ctx[4].w < 600 || /*$DIM*/ ctx[4].w > 600) && create_if_block_1(ctx);
	let if_block3 = /*$inactive*/ ctx[7] && create_if_block(ctx);
	filedrop = new Filedrop({ props: { selected: /*selected*/ ctx[2] } });

	return {
		c() {
			nav = element("nav");
			input = element("input");
			t0 = space();
			button0 = element("button");
			i0 = element("i");
			i0.textContent = "jellyfill3";
			t2 = space();
			i1 = element("i");
			t3 = text("video");
			t4 = space();
			button1 = element("button");
			i2 = element("i");
			t5 = text("jellyfill");
			t6 = space();
			i3 = element("i");
			i3.textContent = "charalt";
			t8 = space();
			button2 = element("button");
			i4 = element("i");
			t9 = text("jellyfill");
			t10 = space();
			i5 = element("i");
			i5.textContent = "sticker";
			t12 = space();
			button3 = element("button");
			i6 = element("i");
			t13 = text("jellyfill2");
			t14 = space();
			i7 = element("i");
			i7.textContent = "backgroundalttwo";
			t16 = space();
			button4 = element("button");
			i8 = element("i");
			t17 = text("jellyfill3");
			t18 = space();
			i9 = element("i");
			i9.textContent = "phone";
			t20 = space();
			if (if_block0) if_block0.c();
			t21 = space();
			if (if_block1) if_block1.c();
			t22 = space();
			create_component(svgblob.$$.fragment);
			t23 = space();
			create_component(subnav.$$.fragment);
			t24 = space();
			if (if_block2) if_block2.c();
			t25 = space();
			if (if_block3) if_block3.c();
			t26 = space();
			create_component(filedrop.$$.fragment);
			attr(input, "type", "checkbox");
			attr(input, "href", "#");
			attr(input, "class", "menu-open svelte-1qzj43m");
			attr(input, "name", "menu-open");
			attr(input, "id", "menu-open");
			attr(i0, "class", "kalicon notranslate fill svelte-1qzj43m");
			attr(i1, "class", i1_class_value = "kalicon notranslate solid variable " + (/*$cameraOn*/ ctx[5] ? "end" : "") + " svelte-1qzj43m");
			attr(button0, "class", button0_class_value = "menu-item video no_highlights " + (/*$cameraOn*/ ctx[5] ? "selected" : "") + " svelte-1qzj43m");

			attr(button0, "data-text", button0_data_text_value = /*$cameraOn*/ ctx[5]
			? tooltip.cameraOn[/*$setLang*/ ctx[8]]
			: tooltip.cameraOff[/*$setLang*/ ctx[8]]);

			attr(i2, "class", i2_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "char" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i3, "class", "kalicon solid medium notranslate");
			attr(button1, "class", button1_class_value = "menu-item no_highlights char " + (/*selected*/ ctx[2] === "char" ? "selected" : "") + " svelte-1qzj43m");
			attr(button1, "data-text", button1_data_text_value = tooltip.char[/*$setLang*/ ctx[8]]);
			attr(i4, "class", i4_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "sticker" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i5, "class", "kalicon notranslate solid medium");
			attr(button2, "class", button2_class_value = "menu-item no_highlights sticker " + (/*selected*/ ctx[2] === "sticker" ? "selected" : "") + " svelte-1qzj43m");
			attr(button2, "data-text", button2_data_text_value = tooltip.sticker[/*$setLang*/ ctx[8]]);
			attr(i6, "class", i6_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "bg" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i7, "class", "kalicon notranslate solid medium");
			attr(button3, "class", button3_class_value = "menu-item no_highlights bg " + (/*selected*/ ctx[2] === "bg" ? "selected" : "") + " svelte-1qzj43m");
			attr(button3, "data-text", button3_data_text_value = tooltip.bg[/*$setLang*/ ctx[8]]);
			attr(i8, "class", i8_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "call" ? "forceAnimate" : "") + " svelte-1qzj43m");
			attr(i9, "class", "kalicon notranslate solid medium svelte-1qzj43m");
			attr(button4, "class", button4_class_value = "menu-item no_highlights " + /*$peerState*/ ctx[9] + " call " + (/*selected*/ ctx[2] === "call" ? "selected" : "") + " svelte-1qzj43m");

			attr(button4, "data-text", button4_data_text_value = /*$peerState*/ ctx[9] === "connected"
			? /*$callTime*/ ctx[10]
			: tooltip.call[/*$setLang*/ ctx[8]]);

			attr(nav, "class", nav_class_value = "menu no_highlights " + (!/*$quickNavExpanded*/ ctx[1] ? "hide" : "") + " svelte-1qzj43m");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, input);
			input.checked = /*$quickNavExpanded*/ ctx[1];
			append(nav, t0);
			append(nav, button0);
			append(button0, i0);
			append(button0, t2);
			append(button0, i1);
			append(i1, t3);
			append(nav, t4);
			append(nav, button1);
			append(button1, i2);
			append(i2, t5);
			append(button1, t6);
			append(button1, i3);
			append(nav, t8);
			append(nav, button2);
			append(button2, i4);
			append(i4, t9);
			append(button2, t10);
			append(button2, i5);
			append(nav, t12);
			append(nav, button3);
			append(button3, i6);
			append(i6, t13);
			append(button3, t14);
			append(button3, i7);
			append(nav, t16);
			append(nav, button4);
			append(button4, i8);
			append(i8, t17);
			append(button4, t18);
			append(button4, i9);
			append(button4, t20);
			if (if_block0) if_block0.m(button4, null);
			append(nav, t21);
			if (if_block1) if_block1.m(nav, null);
			append(nav, t22);
			mount_component(svgblob, nav, null);
			insert(target, t23, anchor);
			mount_component(subnav, target, anchor);
			insert(target, t24, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert(target, t25, anchor);
			if (if_block3) if_block3.m(target, anchor);
			insert(target, t26, anchor);
			mount_component(filedrop, target, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "change", /*input_change_handler*/ ctx[19]),
					listen(button0, "click", /*handleCamera*/ ctx[14]),
					listen(button1, "click", /*click_handler*/ ctx[20]),
					listen(button1, "touch", /*touch_handler*/ ctx[21]),
					listen(button2, "click", /*click_handler_1*/ ctx[22]),
					listen(button2, "touchend", /*touchend_handler*/ ctx[23]),
					listen(button3, "click", /*click_handler_2*/ ctx[24]),
					listen(button3, "touchend", /*touchend_handler_1*/ ctx[25]),
					listen(button4, "click", /*click_handler_3*/ ctx[26]),
					listen(button4, "touchend", /*touchend_handler_2*/ ctx[27])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$quickNavExpanded*/ 2) {
				input.checked = /*$quickNavExpanded*/ ctx[1];
			}

			if (!current || dirty[0] & /*$cameraOn*/ 32 && i1_class_value !== (i1_class_value = "kalicon notranslate solid variable " + (/*$cameraOn*/ ctx[5] ? "end" : "") + " svelte-1qzj43m")) {
				attr(i1, "class", i1_class_value);
			}

			if (!current || dirty[0] & /*$cameraOn*/ 32 && button0_class_value !== (button0_class_value = "menu-item video no_highlights " + (/*$cameraOn*/ ctx[5] ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button0, "class", button0_class_value);
			}

			if (!current || dirty[0] & /*$cameraOn, $setLang*/ 288 && button0_data_text_value !== (button0_data_text_value = /*$cameraOn*/ ctx[5]
			? tooltip.cameraOn[/*$setLang*/ ctx[8]]
			: tooltip.cameraOff[/*$setLang*/ ctx[8]])) {
				attr(button0, "data-text", button0_data_text_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && i2_class_value !== (i2_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "char" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i2, "class", i2_class_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && button1_class_value !== (button1_class_value = "menu-item no_highlights char " + (/*selected*/ ctx[2] === "char" ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button1, "class", button1_class_value);
			}

			if (!current || dirty[0] & /*$setLang*/ 256 && button1_data_text_value !== (button1_data_text_value = tooltip.char[/*$setLang*/ ctx[8]])) {
				attr(button1, "data-text", button1_data_text_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && i4_class_value !== (i4_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "sticker" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i4, "class", i4_class_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && button2_class_value !== (button2_class_value = "menu-item no_highlights sticker " + (/*selected*/ ctx[2] === "sticker" ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button2, "class", button2_class_value);
			}

			if (!current || dirty[0] & /*$setLang*/ 256 && button2_data_text_value !== (button2_data_text_value = tooltip.sticker[/*$setLang*/ ctx[8]])) {
				attr(button2, "data-text", button2_data_text_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && i6_class_value !== (i6_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "bg" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i6, "class", i6_class_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && button3_class_value !== (button3_class_value = "menu-item no_highlights bg " + (/*selected*/ ctx[2] === "bg" ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button3, "class", button3_class_value);
			}

			if (!current || dirty[0] & /*$setLang*/ 256 && button3_data_text_value !== (button3_data_text_value = tooltip.bg[/*$setLang*/ ctx[8]])) {
				attr(button3, "data-text", button3_data_text_value);
			}

			if (!current || dirty[0] & /*selected*/ 4 && i8_class_value !== (i8_class_value = "kalicon notranslate fill medium " + (/*selected*/ ctx[2] === "call" ? "forceAnimate" : "") + " svelte-1qzj43m")) {
				attr(i8, "class", i8_class_value);
			}

			if (/*$peerState*/ ctx[9] === "connected") {
				if (if_block0) {
					
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.m(button4, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!current || dirty[0] & /*$peerState, selected*/ 516 && button4_class_value !== (button4_class_value = "menu-item no_highlights " + /*$peerState*/ ctx[9] + " call " + (/*selected*/ ctx[2] === "call" ? "selected" : "") + " svelte-1qzj43m")) {
				attr(button4, "class", button4_class_value);
			}

			if (!current || dirty[0] & /*$peerState, $callTime, $setLang*/ 1792 && button4_data_text_value !== (button4_data_text_value = /*$peerState*/ ctx[9] === "connected"
			? /*$callTime*/ ctx[10]
			: tooltip.call[/*$setLang*/ ctx[8]])) {
				attr(button4, "data-text", button4_data_text_value);
			}

			if (/*$userExps*/ ctx[11].list.length > 0 && /*$quickNavExpanded*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*$userExps, $quickNavExpanded*/ 2050) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(nav, t22);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			const svgblob_changes = {};
			if (dirty[0] & /*$quickNavExpanded*/ 2) svgblob_changes.hide = !/*$quickNavExpanded*/ ctx[1];
			svgblob.$set(svgblob_changes);

			if (!current || dirty[0] & /*$quickNavExpanded*/ 2 && nav_class_value !== (nav_class_value = "menu no_highlights " + (!/*$quickNavExpanded*/ ctx[1] ? "hide" : "") + " svelte-1qzj43m")) {
				attr(nav, "class", nav_class_value);
			}

			const subnav_changes = {};

			if (!updating_selected && dirty[0] & /*selected*/ 4) {
				updating_selected = true;
				subnav_changes.selected = /*selected*/ ctx[2];
				add_flush_callback(() => updating_selected = false);
			}

			if (!updating_forceClose && dirty[0] & /*forceClose*/ 8) {
				updating_forceClose = true;
				subnav_changes.forceClose = /*forceClose*/ ctx[3];
				add_flush_callback(() => updating_forceClose = false);
			}

			subnav.$set(subnav_changes);

			if ((!/*$inactive*/ ctx[7] || /*$infoExpanded*/ ctx[6]) && (!/*selected*/ ctx[2] && /*$DIM*/ ctx[4].w < 600 || /*$DIM*/ ctx[4].w > 600)) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*$inactive, $infoExpanded, selected, $DIM*/ 212) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(t25.parentNode, t25);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*$inactive*/ ctx[7]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block(ctx);
					if_block3.c();
					if_block3.m(t26.parentNode, t26);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			const filedrop_changes = {};
			if (dirty[0] & /*selected*/ 4) filedrop_changes.selected = /*selected*/ ctx[2];
			filedrop.$set(filedrop_changes);
		},
		i(local) {
			if (current) return;
			transition_in(if_block1);
			transition_in(svgblob.$$.fragment, local);
			transition_in(subnav.$$.fragment, local);
			transition_in(if_block2);
			transition_in(filedrop.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(if_block1);
			transition_out(svgblob.$$.fragment, local);
			transition_out(subnav.$$.fragment, local);
			transition_out(if_block2);
			transition_out(filedrop.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(nav);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			destroy_component(svgblob);
			if (detaching) detach(t23);
			destroy_component(subnav, detaching);
			if (detaching) detach(t24);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach(t25);
			if (if_block3) if_block3.d(detaching);
			if (detaching) detach(t26);
			destroy_component(filedrop, detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $DIM;
	let $cameraOn;
	let $largeWipe;
	let $infoExpanded;
	let $quickNavExpanded;
	let $inactive;
	let $firstLoad;
	let $setLang;
	let $peerState;
	let $callTime;
	let $userExps;
	let $pipEnabled;
	component_subscribe($$self, DIM, $$value => $$invalidate(4, $DIM = $$value));
	component_subscribe($$self, cameraOn, $$value => $$invalidate(5, $cameraOn = $$value));
	component_subscribe($$self, largeWipe, $$value => $$invalidate(38, $largeWipe = $$value));
	component_subscribe($$self, infoExpanded, $$value => $$invalidate(6, $infoExpanded = $$value));
	component_subscribe($$self, quickNavExpanded, $$value => $$invalidate(1, $quickNavExpanded = $$value));
	component_subscribe($$self, inactive, $$value => $$invalidate(7, $inactive = $$value));
	component_subscribe($$self, firstLoad, $$value => $$invalidate(18, $firstLoad = $$value));
	component_subscribe($$self, setLang, $$value => $$invalidate(8, $setLang = $$value));
	component_subscribe($$self, peerState, $$value => $$invalidate(9, $peerState = $$value));
	component_subscribe($$self, callTime, $$value => $$invalidate(10, $callTime = $$value));
	component_subscribe($$self, userExps, $$value => $$invalidate(11, $userExps = $$value));
	component_subscribe($$self, pipEnabled, $$value => $$invalidate(12, $pipEnabled = $$value));
	let selected;
	let forceClose = false;
	let time;

	const handleClick = (e, state) => {
		e.preventDefault();

		if (selected === state) {
			let isMobile = $DIM.w < 600;

			if (isMobile) {
				$$invalidate(3, forceClose = true);
				return;
			}

			// selected = null;
			updateFtue(selected);

			wipeComponent.animate({
				action: "close",
				axis: isMobile ? "y" : "x",
				_flip: isMobile ? false : true,
				_curve: "curve",
				_numPoints: 5,
				_duration: isMobile ? 0 : 600
			});

			$$invalidate(2, selected = null);
		} else {
			$$invalidate(2, selected = state);
		}
	};

	const handleCamera = () => {
		updateFtue("camera");
		cameraOn.set(!$cameraOn);
		haptic();
	};

	const handleInfo = e => {
		// e.preventDefault()
		if (!$largeWipe.transition) {
			infoExpanded.set(!$infoExpanded);
		}
	};

	const resetTimer = () => {
		clearTimeout(time);

		$$invalidate(0, time = setTimeout(
			() => {
				if (!$quickNavExpanded) {
					inactive.set(true);
				}
			},
			2000
		));
	};

	const handleInactivity = () => {
		if (!$inactive && !$quickNavExpanded) {
			resetTimer();
		}
	};

	const unhide = e => {
		e.preventDefault();
		inactive.set(false);
		resetTimer();
	};

	firstLoad.subscribe(e => {
		if (e) {
			setTimeout(
				() => {
					quickNavExpanded.set(true);
				},
				800
			);
		}
	});

	function input_change_handler() {
		$quickNavExpanded = this.checked;
		quickNavExpanded.set($quickNavExpanded);
	}

	const click_handler = e => {
		handleClick(e, "char");
	};

	const touch_handler = e => {
		handleClick(e, "char");
	};

	const click_handler_1 = e => {
		handleClick(e, "sticker");
	};

	const touchend_handler = e => {
		handleClick(e, "sticker");
	};

	const click_handler_2 = e => {
		handleClick(e, "bg");
	};

	const touchend_handler_1 = e => {
		handleClick(e, "bg");
	};

	const click_handler_3 = e => {
		handleClick(e, "call");
	};

	const touchend_handler_2 = e => {
		handleClick(e, "call");
	};

	const click_handler_4 = e => {
		handleClick(e, "exp");
	};

	const touchend_handler_3 = e => {
		handleClick(e, "exp");
	};

	function subnav_selected_binding(value) {
		selected = value;
		$$invalidate(2, selected);
	}

	function subnav_forceClose_binding(value) {
		forceClose = value;
		$$invalidate(3, forceClose);
	}

	const mouseover_handler = () => {
		clearTimeout(time);
	};

	const click_handler_5 = e => {
		handleClick(e, "settings");
	};

	const touchend_handler_4 = e => {
		handleClick(e, "settings");
	};

	const mouseover_handler_1 = () => {
		clearTimeout(time);
	};

	const click_handler_6 = e => {
		e.preventDefault();
		quickNavExpanded.set(!$quickNavExpanded);
	};

	const touchend_handler_5 = e => {
		e.preventDefault();
		quickNavExpanded.set(!$quickNavExpanded);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$firstLoad, $quickNavExpanded, time*/ 262147) {
			$: {
				if ($firstLoad && !$quickNavExpanded) {
					handleInactivity();
				} else {
					clearTimeout(time);
				}
			}
		}
	};

	return [
		time,
		$quickNavExpanded,
		selected,
		forceClose,
		$DIM,
		$cameraOn,
		$infoExpanded,
		$inactive,
		$setLang,
		$peerState,
		$callTime,
		$userExps,
		$pipEnabled,
		handleClick,
		handleCamera,
		handleInfo,
		resetTimer,
		unhide,
		$firstLoad,
		input_change_handler,
		click_handler,
		touch_handler,
		click_handler_1,
		touchend_handler,
		click_handler_2,
		touchend_handler_1,
		click_handler_3,
		touchend_handler_2,
		click_handler_4,
		touchend_handler_3,
		subnav_selected_binding,
		subnav_forceClose_binding,
		mouseover_handler,
		click_handler_5,
		touchend_handler_4,
		mouseover_handler_1,
		click_handler_6,
		touchend_handler_5
	];
}

class Quick_nav extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
	}
}

export default Quick_nav;