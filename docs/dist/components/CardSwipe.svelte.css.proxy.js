// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".counter.svelte-beijvx.svelte-beijvx{--card-w:clamp(0px,85vw,480px);--card-h:clamp(0px,85vh,calc(var(--card-w)*1.5));position:absolute;background:var(--lapizBlue);width:48px;height:48px;text-align:center;font-size:24px;font-weight:400;color:white;z-index:999;display:flex;justify-content:center;align-items:center;border-radius:50%;top:calc((100vh - var(--card-h)) / 2 - 8px);right:calc((100vw - var(--card-w)) / 2 - 14px)}.container.svelte-beijvx.svelte-beijvx{width:100vw;height:100vh;position:relative;background-position:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:0}div.svelte-beijvx.svelte-beijvx{width:100px;height:100px;background:red;pointer-events:all}button.svelte-beijvx.svelte-beijvx{margin-top:40px;font-size:18px;pointer-events:all;color:white;display:flex;justify-content:center;align-items:center;width:100%}button.svelte-beijvx span.svelte-beijvx{font-size:42px;margin-top:-4px;line-height:.2;margin-left:-10px}button.svelte-beijvx.svelte-beijvx:hover{color:var(--lightBlue)\n  }@media only screen and (max-width: 600px){.counter.svelte-beijvx.svelte-beijvx{width:40px;height:40px;font-size:22px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}