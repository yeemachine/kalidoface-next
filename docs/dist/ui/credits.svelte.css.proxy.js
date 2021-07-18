// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".launch.svelte-bei2d1.svelte-bei2d1{border-radius:50%;font-size:22px;margin-top:60px;width:200px;color:white;height:200px;pointer-events:all;display:flex;align-items:center;justify-content:center;font-weight:600;position:relative}.launch .kalicon{font-size:clamp(200px,calc(var(--maxWidth)*.9),1000px);margin-top:-.0525em;z-index:-1;pointer-events:none;font-variation-settings:\"wght\" 175;font-family:\"Jelly\";position:absolute;color:#363647;transform:scale(1);transition:.7s cubic-bezier(0.31, 0.06, 0.18, 0.99);pointer-events:none;animation:jiggle 4s infinite;animation-timing-function:cubic-bezier(0.18, 0.41, 0.79, 0.65);animation-delay:-2s;animation-play-state:paused;line-height:.88}.launch .kalicon.shadow{animation-delay:-1s;color:#31303e;z-index:-2;font-size:calc(var(--maxWidth)*1.1)}.done .launch .kalicon{animation-play-state:running;font-size:220px;color:var(--peach)}.done .launch .kalicon.shadow{font-size:300px;color:var(--lapizBlue)}.done .launch:hover .kalicon.focus{transform:scale(1.2)\n  }img.svelte-bei2d1.svelte-bei2d1{width:100%;height:50%;object-fit:contain;flex-grow:1;pointer-events:none}.soc.svelte-bei2d1.svelte-bei2d1{display:flex;justify-content:flex-end;width:100%}.soc.svelte-bei2d1 svg.svelte-bei2d1{display:block}.icon.svelte-bei2d1.svelte-bei2d1{color:var(--lightBlue);fill:var(--lightBlue);width:48px;height:48px;margin-left:16px;position:relative;display:block}.icon.svelte-bei2d1.svelte-bei2d1:hover{color:var(--lapizBlue);fill:var(--lapizBlue)}.icon.svelte-bei2d1 svg.svelte-bei2d1{width:100%;height:100%}container.svelte-bei2d1.svelte-bei2d1{--theme0:var(--lightBlue);--theme1:#ffffff;--theme2:#f2daea;--theme3:#f2eeda;--theme4:#e8f5fd;--text0:#ffffff;--text1:var(--offblack);--text2:var(--darkgrey);--accent2:var(--lapizBlue);--accent1:var(--lightBlue);width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;overflow:hidden}.appIcon.svelte-bei2d1.svelte-bei2d1{width:40%;height:auto;max-width:calc(var(--card-h) * .2);position:relative}h2.svelte-bei2d1.svelte-bei2d1,h3.svelte-bei2d1.svelte-bei2d1,h4.svelte-bei2d1.svelte-bei2d1,p.svelte-bei2d1.svelte-bei2d1,ul.svelte-bei2d1.svelte-bei2d1,li.svelte-bei2d1.svelte-bei2d1,div.svelte-bei2d1.svelte-bei2d1,section.svelte-bei2d1.svelte-bei2d1,img.svelte-bei2d1.svelte-bei2d1{pointer-events:none}ul.svelte-bei2d1.svelte-bei2d1{padding-left:0;margin-bottom:0}li.svelte-bei2d1.svelte-bei2d1{list-style:none;font-size:clamp(12px, calc(1.4vh + .25vw), 24px);margin-top:8px}h2.svelte-bei2d1.svelte-bei2d1{font-family:'Jelly';font-size:28px;font-weight:normal;pointer-events:none;margin:0;color:white;width:100%}h3.svelte-bei2d1.svelte-bei2d1{font-size:clamp(50px, calc(4vh + 4vw), 90px);pointer-events:none;margin:0;font-weight:400;line-height:.9;letter-spacing:-.7px;width:100%}h4.svelte-bei2d1.svelte-bei2d1{font-size:clamp(18px, calc(3vh + 1vw), 28px);font-weight:700;margin-bottom:16px;margin-top:0;letter-spacing:-.6px}p.svelte-bei2d1.svelte-bei2d1{margin:0;font-size:clamp(12px, calc(1.4vh + .25vw), 24px);line-height:1.6}@media screen and (max-height: 600px){p.svelte-bei2d1.svelte-bei2d1{font-size:clamp(14px, calc(1vh + .5vw), 18px)}.icon.svelte-bei2d1.svelte-bei2d1{width:32px;height:32px}}@media screen and (max-height: 360px){.appIcon.svelte-bei2d1.svelte-bei2d1{display:none}img.svelte-bei2d1.svelte-bei2d1{display:none}}@media screen and (max-width: 600px){.icon.svelte-bei2d1.svelte-bei2d1{width:32px;height:32px}}a{color:var(--lightBlue)}a:hover{text-decoration:underline;color:var(--lapizBlue)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}