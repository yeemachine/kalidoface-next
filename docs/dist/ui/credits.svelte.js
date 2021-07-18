import './credits.svelte.css.proxy.js';
/* src/ui/credits.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	component_subscribe,
	create_component,
	create_in_transition,
	create_out_transition,
	destroy_component,
	detach,
	element,
	init,
	insert,
	listen,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	set_style,
	space,
	svg_element,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";
import { fly, fade, scale } from "../../_snowpack/pkg/svelte/transition.js";
import { cubicInOut } from "../../_snowpack/pkg/svelte/easing.js";
import Card from "../components/Card.svelte.js";
import CardSwipe from "../components/CardSwipe.svelte.js";
import { infoExpanded, largeWipe, setLang } from "../stores.js";
import { cardText, cardEndText } from "../text/translations.js";

function create_default_slot_7(ctx) {
	let h2;
	let h2_intro;
	let t1;
	let h3;
	let raw_value = cardText[0][/*$setLang*/ ctx[0]] + "";
	let h3_intro;
	let t2;
	let svg;
	let rect;
	let path0;
	let path1;
	let path2;
	let path3;
	let path4;
	let svg_intro;

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "kalidoface";
			t1 = space();
			h3 = element("h3");
			t2 = space();
			svg = svg_element("svg");
			rect = svg_element("rect");
			path0 = svg_element("path");
			path1 = svg_element("path");
			path2 = svg_element("path");
			path3 = svg_element("path");
			path4 = svg_element("path");
			attr(h2, "class", "notranslate svelte-bei2d1");
			attr(h3, "class", "svelte-bei2d1");
			attr(rect, "width", "360");
			attr(rect, "height", "360");
			attr(rect, "fill", "white");
			attr(rect, "rx", "185");
			attr(path0, "d", "M271.948 68.424C244.096 52.7124 211.801 46.7834 180.499 50.6249C199.465 52.9571 218.012 58.8861 234.92 68.424C268.203 87.9348 289.627 129.635 289.627 178.604C289.627 227.955 268.586 269.655 234.92 289.165C217.773 298.819 199.377 304.834 180.633 307.215C211.772 311.157 243.57 305.143 271.948 289.165C305.614 269.655 326.655 227.955 326.655 178.604C326.655 129.635 305.232 87.9348 271.948 68.424Z");
			attr(path0, "fill", "#82CEF6");
			attr(path1, "d", "M70.3352 178.986C70.3352 129.635 91.7591 87.9348 125.808 68.424C142.86 58.8861 161.496 52.9571 180.498 50.6249C149.255 46.7834 116.869 52.7124 88.7788 68.424C54.7303 87.9348 33.3066 129.635 33.3066 178.986C33.3066 227.955 54.7303 270.419 88.7788 289.165C117.634 305.143 149.611 311.157 180.633 307.215C161.818 304.834 143.243 298.819 125.808 289.165C91.7591 270.419 70.3352 227.955 70.3352 178.986Z");
			attr(path1, "fill", "#4450F3");
			attr(path2, "d", "M289.626 178.604C289.626 129.635 268.203 87.935 234.919 68.4241C218.011 58.8862 199.465 52.9572 180.498 50.625C161.496 52.9572 142.86 58.8862 125.807 68.4241C91.7588 87.935 70.335 129.635 70.335 178.986C70.335 227.955 91.7588 270.42 125.807 289.165C143.242 298.82 161.817 304.834 180.633 307.215C199.377 304.834 217.772 298.82 234.919 289.165C268.585 269.655 289.626 227.955 289.626 178.604Z");
			attr(path2, "fill", "#1A9EF3");
			attr(path3, "d", "M289.626 178.604C289.626 129.635 268.203 87.935 234.919 68.4241C218.011 58.8862 199.465 52.9572 180.498 50.625C161.496 52.9572 142.86 58.8862 125.807 68.4241C91.7588 87.935 70.335 129.635 70.335 178.986C70.335 227.955 91.7588 270.42 125.807 289.165C143.242 298.82 161.817 304.834 180.633 307.215C199.377 304.834 217.772 298.82 234.919 289.165C268.585 269.655 289.626 227.955 289.626 178.604Z");
			attr(path3, "fill", "#1A9EF3");
			attr(path4, "class", "rect");
			attr(path4, "d", "M202.885 190.052C198.563 187.061 189.588 185.399 179.948 185.399C170.308 185.399 161.333 187.061 157.012 190.052C152.358 193.044 156.014 211.992 158.341 216.978C162.995 225.621 171.305 230.275 179.948 230.275C188.591 230.275 196.901 225.621 201.555 216.978C203.882 211.992 207.539 193.044 202.885 190.052ZM234.797 174.761C224.492 174.761 216.181 180.412 216.181 187.393C216.181 194.374 224.492 200.025 234.797 200.025C244.769 200.025 253.079 194.374 253.079 187.393C253.079 180.412 244.769 174.761 234.797 174.761ZM125.1 174.761C115.127 174.761 106.817 180.412 106.817 187.393C106.817 194.374 115.127 200.025 125.1 200.025C135.405 200.025 143.715 194.374 143.715 187.393C143.715 180.412 135.405 174.761 125.1 174.761ZM230.475 159.803C240.78 166.451 239.783 153.487 230.475 145.176C224.159 139.858 216.181 139.858 210.198 145.176C200.558 153.487 199.561 166.451 210.198 159.803C216.181 155.481 224.159 155.481 230.475 159.803ZM149.698 145.176C143.715 139.858 135.737 139.858 129.421 145.176C120.113 153.487 119.116 166.451 129.421 159.803C135.737 155.481 143.715 155.481 149.698 159.803C160.336 166.451 159.338 153.487 149.698 145.176Z");
			attr(path4, "fill", "white");
			attr(svg, "class", "appIcon svelte-bei2d1");
			attr(svg, "width", "360");
			attr(svg, "height", "360");
			attr(svg, "viewBox", "0 0 360 360");
			attr(svg, "fill", "none");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, h3, anchor);
			h3.innerHTML = raw_value;
			insert(target, t2, anchor);
			insert(target, svg, anchor);
			append(svg, rect);
			append(svg, path0);
			append(svg, path1);
			append(svg, path2);
			append(svg, path3);
			append(svg, path4);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[0][/*$setLang*/ ctx[0]] + "")) h3.innerHTML = raw_value;;
		},
		i(local) {
			if (!h2_intro) {
				add_render_callback(() => {
					h2_intro = create_in_transition(h2, fade, {
						easing: cubicInOut,
						duration: 400,
						delay: 400
					});

					h2_intro.start();
				});
			}

			if (!h3_intro) {
				add_render_callback(() => {
					h3_intro = create_in_transition(h3, fade, {
						easing: cubicInOut,
						duration: 400,
						delay: 500
					});

					h3_intro.start();
				});
			}

			if (!svg_intro) {
				add_render_callback(() => {
					svg_intro = create_in_transition(svg, fade, {
						easing: cubicInOut,
						duration: 400,
						delay: 600
					});

					svg_intro.start();
				});
			}
		},
		o: noop,
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(h3);
			if (detaching) detach(t2);
			if (detaching) detach(svg);
		}
	};
}

// (62:4) <Card styles="{'var(--theme1);--text-color:var(--text2)'}" >
function create_default_slot_6(ctx) {
	let img;
	let img_src_value;
	let t;
	let p;
	let raw_value = cardText[1][/*$setLang*/ ctx[0]] + "";

	return {
		c() {
			img = element("img");
			t = space();
			p = element("p");
			if (img.src !== (img_src_value = "https://raw.githubusercontent.com/yeemachine/kalidoface-live2d-models/main/gif/intro.gif")) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-bei2d1");
			attr(p, "class", "instr svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[1][/*$setLang*/ ctx[0]] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(t);
			if (detaching) detach(p);
		}
	};
}

// (66:4) <Card styles="{'--theme-color:var(--theme1);--text-color:var(--text2);'}">
function create_default_slot_5(ctx) {
	let img;
	let img_src_value;
	let t;
	let p;
	let raw_value = cardText[2][/*$setLang*/ ctx[0]] + "";

	return {
		c() {
			img = element("img");
			t = space();
			p = element("p");
			if (img.src !== (img_src_value = "https://raw.githubusercontent.com/yeemachine/kalidoface-live2d-models/main/gif/charupload.gif")) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-bei2d1");
			attr(p, "class", "instr svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[2][/*$setLang*/ ctx[0]] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(t);
			if (detaching) detach(p);
		}
	};
}

// (70:4) <Card styles="{'--theme-color:var(--theme1);--text-color:var(--text2);'}">
function create_default_slot_4(ctx) {
	let img;
	let img_src_value;
	let t;
	let p;
	let raw_value = cardText[3][/*$setLang*/ ctx[0]] + "";

	return {
		c() {
			img = element("img");
			t = space();
			p = element("p");
			if (img.src !== (img_src_value = "https://raw.githubusercontent.com/yeemachine/kalidoface-live2d-models/main/gif/friends.gif")) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-bei2d1");
			attr(p, "class", "instr svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[3][/*$setLang*/ ctx[0]] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(t);
			if (detaching) detach(p);
		}
	};
}

// (74:4) <Card styles="{'--theme-color:var(--theme1);--text-color:var(--text2);'}">
function create_default_slot_3(ctx) {
	let img;
	let img_src_value;
	let t;
	let p;
	let raw_value = cardText[4][/*$setLang*/ ctx[0]] + "";

	return {
		c() {
			img = element("img");
			t = space();
			p = element("p");
			if (img.src !== (img_src_value = "https://raw.githubusercontent.com/yeemachine/kalidoface-live2d-models/main/gif/backgrounds.gif")) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-bei2d1");
			attr(p, "class", "instr svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[4][/*$setLang*/ ctx[0]] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(t);
			if (detaching) detach(p);
		}
	};
}

// (78:6) <Card styles="{'--theme-color:var(--theme4);--text-color:var(--text2);'}">
function create_default_slot_2(ctx) {
	let h2;
	let t1;
	let section;
	let h4;
	let t2_value = cardText[5].header[/*$setLang*/ ctx[0]] + "";
	let t2;
	let t3;
	let p;
	let raw_value = cardText[5].p[/*$setLang*/ ctx[0]] + "";
	let t4;
	let div;

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "kalidoface";
			t1 = space();
			section = element("section");
			h4 = element("h4");
			t2 = text(t2_value);
			t3 = space();
			p = element("p");
			t4 = space();
			div = element("div");

			div.innerHTML = `<a href="https://github.com/yeemachine"><span class="icon github svelte-bei2d1"><svg class="svelte-bei2d1"><use xlink:href="#svg-icon-github"></use></svg></span></a> 
         <a href="https://instagram.com/yeemachine"><span class="icon github svelte-bei2d1"><svg class="svelte-bei2d1"><use xlink:href="#svg-icon-instagram"></use></svg></span></a> 
         <a href="https://twitter.com/yeemachine"><span class="icon github svelte-bei2d1"><svg class="svelte-bei2d1"><use xlink:href="#svg-icon-twitter"></use></svg></span></a>`;

			attr(h2, "class", "notranslate svelte-bei2d1");
			set_style(h2, "color", "var(--accent1)");
			set_style(h4, "color", "var(--accent1)");
			attr(h4, "class", "svelte-bei2d1");
			attr(p, "class", "svelte-bei2d1");
			attr(section, "class", "svelte-bei2d1");
			attr(div, "class", "soc svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, h4);
			append(h4, t2);
			append(section, t3);
			append(section, p);
			p.innerHTML = raw_value;
			insert(target, t4, anchor);
			insert(target, div, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && t2_value !== (t2_value = cardText[5].header[/*$setLang*/ ctx[0]] + "")) set_data(t2, t2_value);
			if (dirty & /*$setLang*/ 1 && raw_value !== (raw_value = cardText[5].p[/*$setLang*/ ctx[0]] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(section);
			if (detaching) detach(t4);
			if (detaching) detach(div);
		}
	};
}

// (94:5) <Card styles="{'--theme-color:var(--theme4);--text-color:var(--text2);'}">
function create_default_slot_1(ctx) {
	let h2;
	let t1;
	let div0;
	let h4;
	let t2_value = cardText[6].header[/*$setLang*/ ctx[0]] + "";
	let t2;
	let t3;
	let p;
	let t4_value = cardText[6].p[/*$setLang*/ ctx[0]] + "";
	let t4;
	let t5;
	let ul;
	let li0;
	let a0;
	let t7;
	let t8_value = cardText[6].list[/*$setLang*/ ctx[0]][0] + "";
	let t8;
	let t9;
	let li1;
	let a1;
	let t11;
	let t12_value = cardText[6].list[/*$setLang*/ ctx[0]][1] + "";
	let t12;
	let t13;
	let li2;
	let a2;
	let t15;
	let t16_value = cardText[6].list[/*$setLang*/ ctx[0]][2] + "";
	let t16;
	let t17;
	let li3;
	let a3;
	let t19;
	let t20_value = cardText[6].list[/*$setLang*/ ctx[0]][3] + "";
	let t20;
	let t21;
	let li4;
	let a4;
	let t23;
	let t24_value = cardText[6].list[/*$setLang*/ ctx[0]][4] + "";
	let t24;
	let t25;
	let div1;

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "kalidoface";
			t1 = space();
			div0 = element("div");
			h4 = element("h4");
			t2 = text(t2_value);
			t3 = space();
			p = element("p");
			t4 = text(t4_value);
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			a0.textContent = "hootalex";
			t7 = text(": ");
			t8 = text(t8_value);
			t9 = space();
			li1 = element("li");
			a1 = element("a");
			a1.textContent = "Pixiv";
			t11 = text(": ");
			t12 = text(t12_value);
			t13 = space();
			li2 = element("li");
			a2 = element("a");
			a2.textContent = "Glitch";
			t15 = text(": ");
			t16 = text(t16_value);
			t17 = space();
			li3 = element("li");
			a3 = element("a");
			a3.textContent = "Google MediaPipe";
			t19 = text(": ");
			t20 = text(t20_value);
			t21 = space();
			li4 = element("li");
			a4 = element("a");
			a4.textContent = "Vroid Hub";
			t23 = text(": ");
			t24 = text(t24_value);
			t25 = space();
			div1 = element("div");
			attr(h2, "class", "notranslate svelte-bei2d1");
			set_style(h2, "color", "var(--accent1)");
			set_style(h4, "color", "var(--accent1)");
			attr(h4, "class", "svelte-bei2d1");
			attr(p, "class", "svelte-bei2d1");
			attr(a0, "href", "https://twitter.com/hootalex");
			attr(li0, "class", "svelte-bei2d1");
			attr(a1, "href", "https://pixiv.github.io/three-vrm/docs/");
			attr(li1, "class", "svelte-bei2d1");
			attr(a2, "href", "https://glitch.com");
			attr(li2, "class", "svelte-bei2d1");
			attr(a3, "href", "https://google.github.io/mediapipe/");
			attr(li3, "class", "svelte-bei2d1");
			attr(a4, "href", "https://hub.vroid.com/");
			attr(li4, "class", "svelte-bei2d1");
			attr(ul, "class", "svelte-bei2d1");
			attr(div0, "class", "svelte-bei2d1");
			attr(div1, "class", "svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, div0, anchor);
			append(div0, h4);
			append(h4, t2);
			append(div0, t3);
			append(div0, p);
			append(p, t4);
			append(div0, t5);
			append(div0, ul);
			append(ul, li0);
			append(li0, a0);
			append(li0, t7);
			append(li0, t8);
			append(ul, t9);
			append(ul, li1);
			append(li1, a1);
			append(li1, t11);
			append(li1, t12);
			append(ul, t13);
			append(ul, li2);
			append(li2, a2);
			append(li2, t15);
			append(li2, t16);
			append(ul, t17);
			append(ul, li3);
			append(li3, a3);
			append(li3, t19);
			append(li3, t20);
			append(ul, t21);
			append(ul, li4);
			append(li4, a4);
			append(li4, t23);
			append(li4, t24);
			insert(target, t25, anchor);
			insert(target, div1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$setLang*/ 1 && t2_value !== (t2_value = cardText[6].header[/*$setLang*/ ctx[0]] + "")) set_data(t2, t2_value);
			if (dirty & /*$setLang*/ 1 && t4_value !== (t4_value = cardText[6].p[/*$setLang*/ ctx[0]] + "")) set_data(t4, t4_value);
			if (dirty & /*$setLang*/ 1 && t8_value !== (t8_value = cardText[6].list[/*$setLang*/ ctx[0]][0] + "")) set_data(t8, t8_value);
			if (dirty & /*$setLang*/ 1 && t12_value !== (t12_value = cardText[6].list[/*$setLang*/ ctx[0]][1] + "")) set_data(t12, t12_value);
			if (dirty & /*$setLang*/ 1 && t16_value !== (t16_value = cardText[6].list[/*$setLang*/ ctx[0]][2] + "")) set_data(t16, t16_value);
			if (dirty & /*$setLang*/ 1 && t20_value !== (t20_value = cardText[6].list[/*$setLang*/ ctx[0]][3] + "")) set_data(t20, t20_value);
			if (dirty & /*$setLang*/ 1 && t24_value !== (t24_value = cardText[6].list[/*$setLang*/ ctx[0]][4] + "")) set_data(t24, t24_value);
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(div0);
			if (detaching) detach(t25);
			if (detaching) detach(div1);
		}
	};
}

// (40:2) <CardSwipe>
function create_default_slot(ctx) {
	let card0;
	let t0;
	let card1;
	let t1;
	let card2;
	let t2;
	let card3;
	let t3;
	let card4;
	let t4;
	let card5;
	let t5;
	let card6;
	let t6;
	let button;
	let t7_value = cardEndText.close[/*$setLang*/ ctx[0]] + "";
	let t7;
	let t8;
	let i0;
	let t10;
	let i1;
	let current;
	let mounted;
	let dispose;

	card0 = new Card({
			props: {
				styles: "align-items:flex-end;--theme-color:var(--theme0);--text-color:var(--text0);",
				isCurrent: true,
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			}
		});

	card1 = new Card({
			props: {
				styles: "var(--theme1);--text-color:var(--text2)",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	card2 = new Card({
			props: {
				styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	card3 = new Card({
			props: {
				styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	card4 = new Card({
			props: {
				styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	card5 = new Card({
			props: {
				styles: "--theme-color:var(--theme4);--text-color:var(--text2);",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	card6 = new Card({
			props: {
				styles: "--theme-color:var(--theme4);--text-color:var(--text2);",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(card0.$$.fragment);
			t0 = space();
			create_component(card1.$$.fragment);
			t1 = space();
			create_component(card2.$$.fragment);
			t2 = space();
			create_component(card3.$$.fragment);
			t3 = space();
			create_component(card4.$$.fragment);
			t4 = space();
			create_component(card5.$$.fragment);
			t5 = space();
			create_component(card6.$$.fragment);
			t6 = space();
			button = element("button");
			t7 = text(t7_value);
			t8 = space();
			i0 = element("i");
			i0.textContent = "jellyfill";
			t10 = space();
			i1 = element("i");
			i1.textContent = "jellyfill";
			attr(i0, "class", "kalicon notranslate focus");
			attr(i1, "class", "kalicon notranslate shadow");
			attr(button, "class", "launch svelte-bei2d1");
		},
		m(target, anchor) {
			mount_component(card0, target, anchor);
			insert(target, t0, anchor);
			mount_component(card1, target, anchor);
			insert(target, t1, anchor);
			mount_component(card2, target, anchor);
			insert(target, t2, anchor);
			mount_component(card3, target, anchor);
			insert(target, t3, anchor);
			mount_component(card4, target, anchor);
			insert(target, t4, anchor);
			mount_component(card5, target, anchor);
			insert(target, t5, anchor);
			mount_component(card6, target, anchor);
			insert(target, t6, anchor);
			insert(target, button, anchor);
			append(button, t7);
			append(button, t8);
			append(button, i0);
			append(button, t10);
			append(button, i1);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*handleInfo*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const card0_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			const card2_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card2_changes.$$scope = { dirty, ctx };
			}

			card2.$set(card2_changes);
			const card3_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card3_changes.$$scope = { dirty, ctx };
			}

			card3.$set(card3_changes);
			const card4_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card4_changes.$$scope = { dirty, ctx };
			}

			card4.$set(card4_changes);
			const card5_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card5_changes.$$scope = { dirty, ctx };
			}

			card5.$set(card5_changes);
			const card6_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				card6_changes.$$scope = { dirty, ctx };
			}

			card6.$set(card6_changes);
			if ((!current || dirty & /*$setLang*/ 1) && t7_value !== (t7_value = cardEndText.close[/*$setLang*/ ctx[0]] + "")) set_data(t7, t7_value);
		},
		i(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			transition_in(card2.$$.fragment, local);
			transition_in(card3.$$.fragment, local);
			transition_in(card4.$$.fragment, local);
			transition_in(card5.$$.fragment, local);
			transition_in(card6.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			transition_out(card2.$$.fragment, local);
			transition_out(card3.$$.fragment, local);
			transition_out(card4.$$.fragment, local);
			transition_out(card5.$$.fragment, local);
			transition_out(card6.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(card0, detaching);
			if (detaching) detach(t0);
			destroy_component(card1, detaching);
			if (detaching) detach(t1);
			destroy_component(card2, detaching);
			if (detaching) detach(t2);
			destroy_component(card3, detaching);
			if (detaching) detach(t3);
			destroy_component(card4, detaching);
			if (detaching) detach(t4);
			destroy_component(card5, detaching);
			if (detaching) detach(t5);
			destroy_component(card6, detaching);
			if (detaching) detach(t6);
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let container;
	let svg;
	let symbol0;
	let path0;
	let symbol1;
	let path1;
	let symbol2;
	let path2;
	let path3;
	let circle;
	let t;
	let div;
	let cardswipe;
	let div_intro;
	let div_outro;
	let current;

	cardswipe = new CardSwipe({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			container = element("container");
			svg = svg_element("svg");
			symbol0 = svg_element("symbol");
			path0 = svg_element("path");
			symbol1 = svg_element("symbol");
			path1 = svg_element("path");
			symbol2 = svg_element("symbol");
			path2 = svg_element("path");
			path3 = svg_element("path");
			circle = svg_element("circle");
			t = space();
			div = element("div");
			create_component(cardswipe.$$.fragment);
			attr(path0, "d", "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z");
			attr(symbol0, "id", "svg-icon-twitter");
			attr(symbol0, "title", "Twitter");
			attr(symbol0, "viewBox", "0 0 512 512");
			attr(path1, "d", "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z");
			attr(symbol1, "id", "svg-icon-github");
			attr(symbol1, "title", "GitHub");
			attr(symbol1, "viewBox", "0 0 512 512");
			attr(path2, "d", "M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z");
			attr(path3, "d", "M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z");
			attr(circle, "cx", "351.5");
			attr(circle, "cy", "160.5");
			attr(circle, "r", "21.5");
			attr(symbol2, "id", "svg-icon-instagram");
			attr(symbol2, "title", "Instagram");
			attr(symbol2, "viewBox", "0 0 512 512");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			set_style(svg, "display", "none");
			attr(div, "class", "svelte-bei2d1");
			attr(container, "class", "svelte-bei2d1");
		},
		m(target, anchor) {
			insert(target, container, anchor);
			append(container, svg);
			append(svg, symbol0);
			append(symbol0, path0);
			append(svg, symbol1);
			append(symbol1, path1);
			append(svg, symbol2);
			append(symbol2, path2);
			append(symbol2, path3);
			append(symbol2, circle);
			append(container, t);
			append(container, div);
			mount_component(cardswipe, div, null);
			current = true;
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			const cardswipe_changes = {};

			if (dirty & /*$$scope, $setLang*/ 17) {
				cardswipe_changes.$$scope = { dirty, ctx };
			}

			cardswipe.$set(cardswipe_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cardswipe.$$.fragment, local);

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, fly, {
					y: 20,
					easing: cubicInOut,
					duration: 400,
					delay: 200
				});

				div_intro.start();
			});

			current = true;
		},
		o(local) {
			transition_out(cardswipe.$$.fragment, local);
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fly, { y: 20, easing: cubicInOut, duration: 400 });
			current = false;
		},
		d(detaching) {
			if (detaching) detach(container);
			destroy_component(cardswipe);
			if (detaching && div_outro) div_outro.end();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $largeWipe;
	let $infoExpanded;
	let $setLang;
	component_subscribe($$self, largeWipe, $$value => $$invalidate(2, $largeWipe = $$value));
	component_subscribe($$self, infoExpanded, $$value => $$invalidate(3, $infoExpanded = $$value));
	component_subscribe($$self, setLang, $$value => $$invalidate(0, $setLang = $$value));

	const handleInfo = e => {
		// e.preventDefault()
		if (!$largeWipe.transition) {
			infoExpanded.set(!$infoExpanded);
		}
	};

	return [$setLang, handleInfo];
}

class Credits extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Credits;