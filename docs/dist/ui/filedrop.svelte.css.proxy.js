// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".loader.svelte-j77ux7.svelte-j77ux7{width:100%;height:3px;position:absolute;left:0;bottom:0;background:var(--lapizBlue);z-index:8;border-radius:8px;overflow:hidden}.loader2.svelte-j77ux7.svelte-j77ux7{width:100%;height:3px;position:absolute;left:0;bottom:0;background:var(--lightBlue);z-index:8;border-radius:8px}.error.svelte-j77ux7.svelte-j77ux7{background:var(--lightRed)\n  }.error.svelte-j77ux7 .loader2.svelte-j77ux7{background:var(--peach)\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}