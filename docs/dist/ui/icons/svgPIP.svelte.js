import './svgPIP.svelte.css.proxy.js';
/* src/ui/icons/svgPIP.svelte generated by Svelte v3.38.3 */
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
			attr(path, "fill-rule", "evenodd");
			attr(path, "clip-rule", "evenodd");
			attr(path, "d", "M9.36062 5.82025C5.97099 5.82025 3.48844 8.11183 3.48844 11.0241V15.7504C3.48844 15.9892 3.24973 16.1324 3.05877 15.9892C1.91298 15.1298 1.86523 13.6498 1.86523 11.7402V9.30537C1.86523 5.91573 3.72714 4.10156 7.64193 4.10156H13.1799C15.7102 4.10156 17.3812 4.19704 18.2882 5.39058C18.4315 5.58154 18.2882 5.82025 18.0495 5.82025H9.36062ZM4.68197 14.7479C4.68197 18.1375 6.54388 19.9994 10.4587 19.9994H15.9967C20.1024 19.9994 21.9643 18.1375 21.9643 14.7479V12.3131C21.9643 8.92344 20.1024 7.10927 15.9967 7.10927H10.4587C6.54388 7.10927 4.68197 8.92344 4.68197 12.3131V14.7479ZM18.2265 12.9112C18.6049 13.2895 18.6049 13.8135 18.2265 14.1919L15.1702 17.3937C14.7627 17.8012 14.2388 17.8303 13.8604 17.4519C13.482 17.1026 13.5111 16.5204 13.9477 16.1129L15.5777 14.6285C15.6153 14.6097 15.6408 14.5788 15.6697 14.5435C15.6856 14.5242 15.7026 14.5036 15.7232 14.4829L9.46519 14.6285C8.85394 14.6576 8.47555 14.2501 8.47555 13.6679V13.4642C8.47555 12.882 8.85394 12.4745 9.46519 12.5037L15.7523 12.6492L15.5777 12.4745L13.9768 11.0192C13.5402 10.6117 13.482 10.0295 13.8313 9.68026C14.2679 9.30186 14.7918 9.30186 15.1702 9.70937L18.2265 12.9112Z");
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

class SvgPIP extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { fill: 0, style: 1 });
	}
}

export default SvgPIP;