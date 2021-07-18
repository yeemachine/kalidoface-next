import './svgBlobSmall.svelte.css.proxy.js';
/* src/ui/svgBlobSmall.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element,
	toggle_class
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let svg;
	let g;
	let circle0;
	let circle1;
	let defs;
	let filter;
	let feGaussianBlur;
	let feColorMatrix;

	return {
		c() {
			svg = svg_element("svg");
			g = svg_element("g");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			defs = svg_element("defs");
			filter = svg_element("filter");
			feGaussianBlur = svg_element("feGaussianBlur");
			feColorMatrix = svg_element("feColorMatrix");
			attr(circle0, "cx", "247.387");
			attr(circle0, "cy", "247.387");
			attr(circle0, "r", "247.387");
			attr(circle0, "fill", /*fill*/ ctx[1]);
			attr(circle0, "class", "svelte-9a5upb");
			attr(circle1, "cx", "572");
			attr(circle1, "cy", "143");
			attr(circle1, "r", "161");
			attr(circle1, "fill", /*fill*/ ctx[1]);
			attr(circle1, "class", "svelte-9a5upb");
			attr(g, "filter", "url(#filter0_c)");
			attr(feGaussianBlur, "in", "SourceGraphic");
			attr(feGaussianBlur, "stdDeviation", "24.5");
			attr(feGaussianBlur, "result", "blur");
			attr(feColorMatrix, "id", "colorMatrixElement");
			attr(feColorMatrix, "in", "blur");
			attr(feColorMatrix, "mode", "matrix");
			attr(feColorMatrix, "values", "1 0 0 0 0 \n                                                                             0 1 0 0 0 \n                                                                             0 0 1 0 0 \n                                                                             0 0 0 25 -15");
			attr(feColorMatrix, "result", "matrix");
			attr(filter, "id", "filter0_c");
			attr(filter, "x", "-107.297");
			attr(filter, "y", "-107.297");
			attr(filter, "width", "898.775");
			attr(filter, "height", "709.368");
			attr(filter, "filterUnits", "userSpaceOnUse");
			attr(filter, "color-interpolation-filters", "sRGB");
			attr(svg, "width", "685");
			attr(svg, "height", "495");
			attr(svg, "viewBox", "0 0 685 495");
			attr(svg, "fill", "none");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "svelte-9a5upb");
			toggle_class(svg, "hide", /*hide*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, g);
			append(g, circle0);
			append(g, circle1);
			append(svg, defs);
			append(defs, filter);
			append(filter, feGaussianBlur);
			append(filter, feColorMatrix);
		},
		p(ctx, [dirty]) {
			if (dirty & /*fill*/ 2) {
				attr(circle0, "fill", /*fill*/ ctx[1]);
			}

			if (dirty & /*fill*/ 2) {
				attr(circle1, "fill", /*fill*/ ctx[1]);
			}

			if (dirty & /*hide*/ 1) {
				toggle_class(svg, "hide", /*hide*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { hide = false } = $$props;
	let { fill = "#2E525F" } = $$props;

	$$self.$$set = $$props => {
		if ("hide" in $$props) $$invalidate(0, hide = $$props.hide);
		if ("fill" in $$props) $$invalidate(1, fill = $$props.fill);
	};

	return [hide, fill];
}

class SvgBlobSmall extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { hide: 0, fill: 1 });
	}
}

export default SvgBlobSmall;