!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealMath=e()}(this,(function(){"use strict";return Plugin=Object.assign(()=>{},{KaTeX:()=>{let t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const n=t=>new Promise(((e,n)=>{const a=document.createElement("script");a.type="text/javascript",a.onload=e,a.onerror=n,a.src=t,document.head.append(a)}));return{id:"katex",init:function(a){t=a;let i=t.getConfig().katex||{},s={...e,...i};const{local:o,version:l,extensions:r,...c}=s;let p="css/katex.min.css",x="js/auto-render.min.js",m=["js/katex.min.js"];m.push(x);const f=()=>{renderMathInElement(a.getSlidesElement(),c),t.layout()};(t=>{let e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)})(p),async function(t){for(const e of t)await n(e)}(m).then((()=>{t.isReady()?f():t.on("ready",f.bind(this))}))}}}})}));