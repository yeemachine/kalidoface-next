// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "svg.svelte-1qaakgn{width:96%;height:96%;position:absolute;left:0;bottom:0;margin:auto;right:0;top:0;z-index:-1}#compass.svelte-1qaakgn{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rotation))}circle.svelte-1qaakgn,path.svelte-1qaakgn{transform-box:fill-box;transform-origin:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}