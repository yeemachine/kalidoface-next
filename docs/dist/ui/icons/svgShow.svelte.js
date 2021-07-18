import './svgShow.svelte.css.proxy.js';
/* src/ui/icons/svgShow.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element
} from "../../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let svg;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "d", "M12 4.5C5.5 4.5 1 9 1 12C1 15 5 19.5 12 19.5C19 19.5 23 15 23 12C23 9 18.5 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z");
			attr(path, "fill", /*fill*/ ctx[0]);
			attr(svg, "style", /*style*/ ctx[1]);
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "fill", "none");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "svelte-dglue3");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},
		p(ctx, [dirty]) {
			if (dirty & /*fill*/ 1) {
				attr(path, "fill", /*fill*/ ctx[0]);
			}

			if (dirty & /*style*/ 2) {
				attr(svg, "style", /*style*/ ctx[1]);
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
	let { fill = "white" } = $$props;
	let { style = "" } = $$props;

	$$self.$$set = $$props => {
		if ("fill" in $$props) $$invalidate(0, fill = $$props.fill);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
	};

	return [fill, style];
}

class SvgShow extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { fill: 0, style: 1 });
	}
}

export default SvgShow;