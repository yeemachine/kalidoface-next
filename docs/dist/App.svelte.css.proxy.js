// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "main.svelte-1d5j4dg{position:fixed;margin:0;padding:0;top:0;left:0;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 600px){}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}