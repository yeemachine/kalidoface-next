// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "input.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{opacity:0;width:0;height:0;padding:0;margin:0;position:absolute}label.hide.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{opacity:0;pointer-events:none}label.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq:hover{cursor:pointer}.hide.svelte-yzrsaq container.svelte-yzrsaq.svelte-yzrsaq{pointer-events:none}container.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{display:flex;align-items:center;justify-content:flex-start;height:11px;width:48px;border-radius:32px;overflow:visible;background:rgba(200,200,200,0.2);transition:background-color .25s, opacity .25s;pointer-events:all}.toggled.svelte-yzrsaq container.svelte-yzrsaq.svelte-yzrsaq{background:var(--lightBlue)}.track.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{pointer-events:none;display:flex;flex-direction:row;align-items:center;transform:translate(0px,0px);transition:transform .25s}.toggled.svelte-yzrsaq container .track.svelte-yzrsaq.svelte-yzrsaq{transform:translate(25px,0px)\n}.toggleButton.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{display:flex;align-items:center;justify-content:center;position:relative;width:24px;height:24px;border-radius:50%}.fill.svelte-yzrsaq.svelte-yzrsaq.svelte-yzrsaq{color:rgb(143 143 143);padding-bottom:3px;line-height:1}.toggled.svelte-yzrsaq .toggleButton .fill.svelte-yzrsaq.svelte-yzrsaq{color:white}@media(hover:hover){container.svelte-yzrsaq:hover .toggleButton.svelte-yzrsaq .fill.svelte-yzrsaq{color:white}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}