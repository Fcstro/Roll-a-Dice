const e=document.getElementById("diceContainer"),t=document.getElementById("rollButton"),d=document.getElementById("total"),a=document.getElementById("diceCount"),c=document.getElementById("btn"),n={1:[360,0],2:[540,0],3:[0,270],4:[0,450],5:[270,0],6:[450,0]};function o(t){e.innerHTML="";for(let d=0;d<t;d++){let t=function(){let e=document.createElement("div");e.classList.add("dice");let t=document.createElement("div");t.classList.add("cube");let d={light:["https://res.cloudinary.com/drkmgpcad/image/upload/v1738056273/dice/dark/gtrjmcia0o7jlnqdauu3.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738056273/dice/dark/x0u4qui4balu01ldjgjq.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738056273/dice/dark/b1eownany08x6muu3k4b.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738056273/dice/dark/haiwggj9z0bv3epfyzbb.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738056274/dice/dark/lykt2tuohniu9avosznf.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738056274/dice/dark/powtjgng7oxiasqwk2dv.png"],dark:["https://res.cloudinary.com/drkmgpcad/image/upload/v1738146218/dice/light/x3b7yzjr62vky2uyimq5.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738146218/dice/light/dklkl2mrpc7yhqlax43x.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738146218/dice/light/tyxxuuxhf82jgxx2mzuc.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738146219/dice/light/gvfurqjix7fy9aqvfyop.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738146219/dice/light/ezvvlhkqhzciwoi14odb.png","https://res.cloudinary.com/drkmgpcad/image/upload/v1738146219/dice/light/wyxvkstoeqfdempkhevv.png"]},a=document.body.classList.contains("dark-mode")?"dark":"light";return["front","back","right","left","top","bottom"].forEach((e,c)=>{let n=document.createElement("div");n.classList.add(e),n.style.backgroundImage=`url(${d[a][c]})`,t.appendChild(n)}),e.appendChild(t),e}();e.appendChild(t)}}a.addEventListener("input",e=>{let t=parseInt(a.value);isNaN(t)?t=1:"insertFromPaste"===e.inputType||"insertText"===e.inputType?t=Math.min(5,Math.max(1,t)):t>5?t=1:t<1&&(t=5),a.value=t,o(t)}),t.addEventListener("click",()=>{let e=document.querySelectorAll(".cube"),t=0;e.forEach(e=>{let d=Math.floor(6*Math.random())+1;t+=d;let[a,c]=n[d];e.style.transform=`rotateX(${a}deg) rotateY(${c}deg)`,e.setAttribute("data-value",d)}),d.textContent=` ${t}`}),c.addEventListener("change",()=>{document.body.classList.toggle("dark-mode"),o(parseInt(a.value))}),o(1);
//# sourceMappingURL=index.481720a1.js.map
