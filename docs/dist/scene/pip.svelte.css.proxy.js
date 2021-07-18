// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#pip.svelte-1rxu17a{position:absolute;bottom:-1000px;right:-1000px;max-width:240px;z-index:2;opacity:0;background:var(--offblack);pointer-events:none}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}