// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".notification.svelte-1g24hxh{position:absolute;bottom:10px;bottom:calc(env(safe-area-inset-bottom, 10px) + 10px);background:var(--darkgrey);color:white;max-width:480px;padding:16px 22px 16px 22px;border-radius:8px;z-index:6;font-size:14px;display:flex;align-items:center}.notification.error.svelte-1g24hxh{padding:16px 22px 16px 32px}.notification.error.svelte-1g24hxh:after{content:'';position:absolute;left:14px;width:8px;height:8px;border-radius:50%;background:var(--lightRed)\n  }@media only screen and (max-width: 600px){.notification.svelte-1g24hxh{bottom:unset;top:10px;top:calc(env(safe-area-inset-top, 10px))}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}