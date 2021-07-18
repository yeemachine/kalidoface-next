import './sub_nav.call.svelte.css.proxy.js';
/* src/ui/sub_nav.call.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	component_subscribe,
	create_in_transition,
	create_out_transition,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_data,
	set_input_value,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { fade } from "../../_snowpack/pkg/svelte/transition.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
import { DIM, setLang } from "../stores.js";
import { ftueState, updateFtue } from "./ftue.svelte.js";

import {
	inputID,
	friendID,
	myID,
	PEER,
	peerState,
	p2pConnection,
	callTime
} from "../connections/Peer.svelte.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";
import { subnav_call_text } from "../text/translations.js";

function create_else_block_1(ctx) {
	let label;
	let t0_value = subnav_call_text.label.disconnected[/*$setLang*/ ctx[6]] + "";
	let t0;
	let t1;
	let button;
	let t2_value = subnav_call_text.disconnected[/*$setLang*/ ctx[6]] + "";
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			button = element("button");
			t2 = text(t2_value);
			attr(label, "class", "svelte-40w916");
			attr(button, "class", "reconnect svelte-40w916");
		},
		m(target, anchor) {
			insert(target, label, anchor);
			append(label, t0);
			insert(target, t1, anchor);
			insert(target, button, anchor);
			append(button, t2);

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t0_value !== (t0_value = subnav_call_text.label.disconnected[/*$setLang*/ ctx[6]] + "")) set_data(t0, t0_value);
			if (dirty & /*$setLang*/ 64 && t2_value !== (t2_value = subnav_call_text.disconnected[/*$setLang*/ ctx[6]] + "")) set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) detach(label);
			if (detaching) detach(t1);
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

// (51:4) {#if $peerState !== 'server-disconnect'}
function create_if_block_1(ctx) {
	let t0;
	let div;
	let t1;
	let t2;
	let button;
	let i0;
	let t4;
	let i1;
	let t5;
	let i1_class_value;
	let t6;
	let button_class_value;
	let mounted;
	let dispose;
	let if_block0 = !/*$p2pConnection*/ ctx[1] && create_if_block_5(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*$peerState*/ ctx[4] === "connecting") return create_if_block_3;
		if (/*$peerState*/ ctx[4] === "connected") return create_if_block_4;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block1 = current_block_type && current_block_type(ctx);
	let if_block2 = /*$peerState*/ ctx[4] === "connected" && create_if_block_2(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t0 = space();
			div = element("div");
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			button = element("button");
			i0 = element("i");
			i0.textContent = "jellyfill";
			t4 = space();
			i1 = element("i");
			t5 = text("phone");
			t6 = space();
			if (if_block2) if_block2.c();
			attr(div, "class", "cover svelte-40w916");
			attr(i0, "class", "kalicon notranslate fill svelte-40w916");
			attr(i1, "class", i1_class_value = "kalicon notranslate solid variable " + (/*$p2pConnection*/ ctx[1] ? "end" : "") + " svelte-40w916");

			attr(button, "class", button_class_value = "call-button no_highlights \n                       " + (/*$inputID*/ ctx[2].length === 6 && /*$inputID*/ ctx[2].match(/^[0-9]+$/)
			? ""
			: /*$p2pConnection*/ ctx[1] ? "" : "disabled") + " svelte-40w916");
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert(target, t0, anchor);
			insert(target, div, anchor);
			insert(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, t2, anchor);
			insert(target, button, anchor);
			append(button, i0);
			append(button, t4);
			append(button, i1);
			append(i1, t5);
			append(button, t6);
			if (if_block2) if_block2.m(button, null);

			if (!mounted) {
				dispose = listen(button, "click", /*handleCall*/ ctx[9]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!/*$p2pConnection*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if (if_block1) if_block1.d(1);
				if_block1 = current_block_type && current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(t2.parentNode, t2);
				}
			}

			if (dirty & /*$p2pConnection*/ 2 && i1_class_value !== (i1_class_value = "kalicon notranslate solid variable " + (/*$p2pConnection*/ ctx[1] ? "end" : "") + " svelte-40w916")) {
				attr(i1, "class", i1_class_value);
			}

			if (/*$peerState*/ ctx[4] === "connected") {
				if (if_block2) {
					
				} else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					if_block2.m(button, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (dirty & /*$inputID, $p2pConnection*/ 6 && button_class_value !== (button_class_value = "call-button no_highlights \n                       " + (/*$inputID*/ ctx[2].length === 6 && /*$inputID*/ ctx[2].match(/^[0-9]+$/)
			? ""
			: /*$p2pConnection*/ ctx[1] ? "" : "disabled") + " svelte-40w916")) {
				attr(button, "class", button_class_value);
			}
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach(t0);
			if (detaching) detach(div);
			if (detaching) detach(t1);

			if (if_block1) {
				if_block1.d(detaching);
			}

			if (detaching) detach(t2);
			if (detaching) detach(button);
			if (if_block2) if_block2.d();
			mounted = false;
			dispose();
		}
	};
}

// (52:8) {#if !$p2pConnection}
function create_if_block_5(ctx) {
	let label;
	let t0_value = subnav_call_text.label.default[/*$setLang*/ ctx[6]] + "";
	let t0;
	let t1;
	let input;
	let input_data_length_value;
	let mounted;
	let dispose;

	return {
		c() {
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			input = element("input");
			attr(label, "class", "svelte-40w916");
			attr(input, "data-length", input_data_length_value = /*$inputID*/ ctx[2].length);
			attr(input, "maxlength", "6");
			attr(input, "pattern", "^[0-9]*$");
			attr(input, "spellcheck", "false");
			attr(input, "onkeypress", "return /[0-9]/i.test(event.key)");
			attr(input, "type", "tel");
			attr(input, "placeholder", "000000");
			attr(input, "class", "svelte-40w916");
		},
		m(target, anchor) {
			insert(target, label, anchor);
			append(label, t0);
			insert(target, t1, anchor);
			insert(target, input, anchor);
			set_input_value(input, /*$inputID*/ ctx[2]);

			if (!mounted) {
				dispose = listen(input, "input", /*input_input_handler*/ ctx[11]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t0_value !== (t0_value = subnav_call_text.label.default[/*$setLang*/ ctx[6]] + "")) set_data(t0, t0_value);

			if (dirty & /*$inputID*/ 4 && input_data_length_value !== (input_data_length_value = /*$inputID*/ ctx[2].length)) {
				attr(input, "data-length", input_data_length_value);
			}

			if (dirty & /*$inputID*/ 4) {
				set_input_value(input, /*$inputID*/ ctx[2]);
			}
		},
		d(detaching) {
			if (detaching) detach(label);
			if (detaching) detach(t1);
			if (detaching) detach(input);
			mounted = false;
			dispose();
		}
	};
}

// (71:45) 
function create_if_block_4(ctx) {
	let label;
	let t0_value = subnav_call_text.label.connected[/*$setLang*/ ctx[6]] + "";
	let t0;
	let t1;
	let b;
	let t2;
	let t3_value = /*$p2pConnection*/ ctx[1].peer + "";
	let t3;
	let t4;
	let h4;
	let t5;

	return {
		c() {
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			b = element("b");
			t2 = text("#");
			t3 = text(t3_value);
			t4 = space();
			h4 = element("h4");
			t5 = text(/*$callTime*/ ctx[7]);
			attr(b, "class", "svelte-40w916");
			attr(label, "class", "friend svelte-40w916");
			attr(h4, "class", "timer svelte-40w916");
		},
		m(target, anchor) {
			insert(target, label, anchor);
			append(label, t0);
			append(label, t1);
			append(label, b);
			append(b, t2);
			append(b, t3);
			insert(target, t4, anchor);
			insert(target, h4, anchor);
			append(h4, t5);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t0_value !== (t0_value = subnav_call_text.label.connected[/*$setLang*/ ctx[6]] + "")) set_data(t0, t0_value);
			if (dirty & /*$p2pConnection*/ 2 && t3_value !== (t3_value = /*$p2pConnection*/ ctx[1].peer + "")) set_data(t3, t3_value);
			if (dirty & /*$callTime*/ 128) set_data(t5, /*$callTime*/ ctx[7]);
		},
		d(detaching) {
			if (detaching) detach(label);
			if (detaching) detach(t4);
			if (detaching) detach(h4);
		}
	};
}

// (69:8) {#if $peerState === 'connecting'}
function create_if_block_3(ctx) {
	let h4;
	let t_value = subnav_call_text.connecting[/*$setLang*/ ctx[6]] + "";
	let t;

	return {
		c() {
			h4 = element("h4");
			t = text(t_value);
			attr(h4, "class", "loading svelte-40w916");
		},
		m(target, anchor) {
			insert(target, h4, anchor);
			append(h4, t);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t_value !== (t_value = subnav_call_text.connecting[/*$setLang*/ ctx[6]] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(h4);
		}
	};
}

// (83:10) {#if $peerState === 'connected'}
function create_if_block_2(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "class", "pulse svelte-40w916");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (104:4) {:else}
function create_else_block(ctx) {
	let t0_value = subnav_call_text.id.share[/*$setLang*/ ctx[6]] + "";
	let t0;
	let t1;
	let span;
	let t2;

	return {
		c() {
			t0 = text(t0_value);
			t1 = text(" #");
			span = element("span");
			t2 = text(/*$myID*/ ctx[3]);
			attr(span, "class", "svelte-40w916");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
			insert(target, span, anchor);
			append(span, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t0_value !== (t0_value = subnav_call_text.id.share[/*$setLang*/ ctx[6]] + "")) set_data(t0, t0_value);
			if (dirty & /*$myID*/ 8) set_data(t2, /*$myID*/ ctx[3]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
			if (detaching) detach(span);
		}
	};
}

// (102:4) {#if copied}
function create_if_block(ctx) {
	let t_value = subnav_call_text.id.copied[/*$setLang*/ ctx[6]] + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 64 && t_value !== (t_value = subnav_call_text.id.copied[/*$setLang*/ ctx[6]] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let container;
	let div;
	let div_class_value;
	let div_intro;
	let div_outro;
	let t;
	let button;
	let button_class_value;
	let button_intro;
	let button_outro;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*$peerState*/ ctx[4] !== "server-disconnect") return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);

	function select_block_type_2(ctx, dirty) {
		if (/*copied*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block1 = current_block_type_1(ctx);

	return {
		c() {
			container = element("container");
			div = element("div");
			if_block0.c();
			t = space();
			button = element("button");
			if_block1.c();
			attr(div, "class", div_class_value = "call " + /*$peerState*/ ctx[4] + " svelte-40w916");
			attr(button, "class", button_class_value = "your-id " + (/*copied*/ ctx[0] ? "copied" : "") + " svelte-40w916");
			attr(container, "class", "svelte-40w916");
		},
		m(target, anchor) {
			insert(target, container, anchor);
			append(container, div);
			if_block0.m(div, null);
			append(container, t);
			append(container, button);
			if_block1.m(button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*copyToClipboard*/ ctx[10]);
				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, null);
				}
			}

			if (!current || dirty & /*$peerState*/ 16 && div_class_value !== (div_class_value = "call " + /*$peerState*/ ctx[4] + " svelte-40w916")) {
				attr(div, "class", div_class_value);
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx, dirty)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(button, null);
				}
			}

			if (!current || dirty & /*copied*/ 1 && button_class_value !== (button_class_value = "your-id " + (/*copied*/ ctx[0] ? "copied" : "") + " svelte-40w916")) {
				attr(button, "class", button_class_value);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, fade, {
					easing: cubicInOut,
					duration: 300,
					delay: 400
				});

				div_intro.start();
			});

			add_render_callback(() => {
				if (button_outro) button_outro.end(1);

				if (!button_intro) button_intro = create_in_transition(button, fade, {
					easing: cubicInOut,
					duration: 300,
					delay: 500
				});

				button_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();

			div_outro = create_out_transition(div, fade, {
				duration: /*$DIM*/ ctx[5].w > 600 ? 200 : 0
			});

			if (button_intro) button_intro.invalidate();

			button_outro = create_out_transition(button, fade, {
				duration: /*$DIM*/ ctx[5].w > 600 ? 200 : 0
			});

			current = false;
		},
		d(detaching) {
			if (detaching) detach(container);
			if_block0.d();
			if (detaching && div_outro) div_outro.end();
			if_block1.d();
			if (detaching && button_outro) button_outro.end();
			mounted = false;
			dispose();
		}
	};
}

let state = "default";

function instance($$self, $$props, $$invalidate) {
	let $p2pConnection;
	let $inputID;
	let $myID;
	let $peerState;
	let $DIM;
	let $setLang;
	let $callTime;
	let $PEER;
	component_subscribe($$self, p2pConnection, $$value => $$invalidate(1, $p2pConnection = $$value));
	component_subscribe($$self, inputID, $$value => $$invalidate(2, $inputID = $$value));
	component_subscribe($$self, myID, $$value => $$invalidate(3, $myID = $$value));
	component_subscribe($$self, peerState, $$value => $$invalidate(4, $peerState = $$value));
	component_subscribe($$self, DIM, $$value => $$invalidate(5, $DIM = $$value));
	component_subscribe($$self, setLang, $$value => $$invalidate(6, $setLang = $$value));
	component_subscribe($$self, callTime, $$value => $$invalidate(7, $callTime = $$value));
	component_subscribe($$self, PEER, $$value => $$invalidate(8, $PEER = $$value));
	let copied = false;
	let timeout;

	const triggerNotif = () => {
		clearTimeout(timeout);
		$$invalidate(0, copied = true);

		timeout = setTimeout(
			() => {
				$$invalidate(0, copied = false);
			},
			1000
		);
	};

	const handleCall = () => {
		if ($p2pConnection) {
			$p2pConnection.close();
			return;
		}

		if ($inputID.length === 6 && $inputID.match(/^[0-9]+$/)) {
			friendID.set($inputID);
		}
	};

	const copyToClipboard = () => {
		const el = document.createElement("textarea");
		el.value = $myID;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		triggerNotif();
	};

	function input_input_handler() {
		$inputID = this.value;
		inputID.set($inputID);
	}

	const click_handler = () => $PEER.reconnect();

	return [
		copied,
		$p2pConnection,
		$inputID,
		$myID,
		$peerState,
		$DIM,
		$setLang,
		$callTime,
		$PEER,
		handleCall,
		copyToClipboard,
		input_input_handler,
		click_handler
	];
}

class Sub_nav_call extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Sub_nav_call;