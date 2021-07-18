// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".resize-drag.svelte-17zb432{width:max-content;height:max-content;box-sizing:border-box;position:absolute;touch-action:none;left:200px;min-width:50px;pointer-events:none}.resize-drag.svelte-17zb432:hover{cursor:grab\n  }.resize-drag.svelte-17zb432:active{cursor:grabbing\n  }.content.svelte-17zb432{width:100%;min-width:50px;height:auto;object-fit:contain;touch-action:none;pointer-events:all;-webkit-touch-callout:none;-webkit-user-select:none}@media only screen and (hover: hover) and (pointer: fine){}@media only screen and (max-width: 600px){.resize-drag.svelte-17zb432{left:unset;top:unset;bottom:220px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}