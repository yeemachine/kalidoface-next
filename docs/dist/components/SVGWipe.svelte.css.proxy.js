// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".shape-overlays.svelte-19kx5c6{width:100%;height:100%;position:absolute;top:0;left:0;cursor:pointer;transform-origin:center}.shape-overlays[data-flip=true][data-axis='y']{transform:scale(1,-1)\n  }.shape-overlays[data-flip=true][data-axis='x']{transform:scale(-1,1)\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}