// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "svg.svelte-9a5upb.svelte-9a5upb{--close1:translate3d(-277px, 87.33693px, 0);--scale:.85;--shrink1:translate3d(calc((1 - var(--scale)) * 247.387px), calc((1 - var(--scale)) * 247.387px), 0) scale(var(--scale));width:100%;height:100%;position:absolute;left:0;top:0;z-index:-1;overflow:visible}svg.hide.svelte-9a5upb.svelte-9a5upb{pointer-events:none}circle.svelte-9a5upb.svelte-9a5upb{-webkit-transition-duration:360ms;transition-duration:360ms}.hide.svelte-9a5upb circle.svelte-9a5upb:nth-child(1){-webkit-transform:var(--shrink1);transform:var(--shrink1)}.hide.svelte-9a5upb circle.svelte-9a5upb:nth-child(2){-webkit-transform:var(--close1);transform:var(--close1)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}