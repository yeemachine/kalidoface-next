// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".canvasContainer.svelte-1flt15c,.scene.svelte-1flt15c{z-index:1}.scene.svelte-1flt15c{display:flex;justify-content:center;align-items:center}.hover.svelte-1flt15c{cursor:grab\n  }.hover.svelte-1flt15c:active{cursor:grabbing\n  }canvas{width:100%;height:100%;display:block}@media only screen and (max-width: 600px){.canvasContainer.disabled.svelte-1flt15c{pointer-events:none}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}