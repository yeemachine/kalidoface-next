// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "container.svelte-1bjk5br{position:fixed;height:100%;width:100%;top:0;left:0;z-index:5;display:flex;align-items:center;justify-content:center}#tagline.svelte-1bjk5br{color:white;z-index:999;position:absolute;bottom:24px;margin-top:44px;font-size:clamp(18px, 4vw, 22px);margin:0;font-weight:300;display:flex;justify-content:center;animation:flyIn .4s 1;animation-fill-mode:ease;animation-timing-function:cubic-bezier(0.18, 0.89, 0.58, 1.07)}#tagline strong{color:white;font-weight:300;padding:0 0 0 .4ch\n  }#tagline.svelte-1bjk5br:before{content:'';position:absolute;height:3px;width:100%;bottom:-24px;background:var(--lightBlue);border-radius:16px;transform:scale(0,0);animation:scaleOut 0.4s 1;animation-fill-mode:forwards;animation-timing-function:ease}container.loaded.svelte-1bjk5br{pointer-events:none}container.info.svelte-1bjk5br{pointer-events:all}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}