"use strict";function e(){const e=document.getElementById("slideshow").firstElementChild;let t=e.firstElementChild,n=null;function l(){e.style.transform=`translateX(-${t.offsetLeft}px)`}function s(){t=t.nextElementSibling?t.nextElementSibling:t.parentElement.firstElementChild,l()}function o(){window.clearInterval(n),n=window.setInterval(s,6e3)}document.getElementById("prev-screenshot").addEventListener("click",()=>{t=t.previousElementSibling?t.previousElementSibling:t.parentElement.lastElementChild,l(),o()}),document.getElementById("next-screenshot").addEventListener("click",()=>{s(),o()}),o()}async function t(e,t,n,l){function s(e,t,n){document.getElementById("dl-"+e).innerHTML="<a href='"+n+"'>"+t+"</a>"}try{const l=await fetch("https://api.github.com/repos/mmatyas/pegasus-frontend/releases/"+n);if(!l.ok)throw l.status;!function(n){if(!("assets"in n)||!Array.isArray(n.assets))return;const l="-static";n.assets.forEach((n,o)=>{if(!("name"in n)||!("browser_download_url"in n))return;let i=/^pegasus-fe_([a-z0-9-]+)_([a-z0-9-]+)/.exec(n.name);if(i&&i.length>2){let o=i[2];if(o.endsWith(l)&&(o=o.slice(0,-l.length)),e.includes(o))return void s(o+t,i[1],n.browser_download_url)}i=/^pegasus-frontend_([0-9\.]+)_[a-z0-9]+\.deb$/.exec(n.name),i&&i.length>1&&s("x11deb"+t,i[1],n.browser_download_url)})}(await l.json())}catch{e.forEach(e=>{const n=document.getElementById("dl-"+e+t);"loading..."==n.innerHTML&&(n.innerHTML="Failed to query the server. See all releases <a href='https://github.com/mmatyas/pegasus-frontend/releases/"+l+"'>HERE</a>.")})}}window.onload=async function(){e(),document.querySelectorAll(".dl-select").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".dl-select").forEach(e=>e.classList.remove("selected")),document.querySelectorAll(".dl-block").forEach(e=>e.classList.add("hidden")),e.classList.add("selected"),document.querySelector(`.dl-block[data-platform=${e.dataset.platform}]`).classList.remove("hidden")})}),function(){document.querySelectorAll(".dl-block").forEach(e=>e.classList.add("hidden"));const e=[{ua:"Android",ui:"android"},{ua:"Win",ui:"windows"},{ua:"X11",ui:"linux"},{ua:"Mac",ui:"macos"}];for(let t of e)if(navigator.userAgent.includes(t.ua))return document.querySelector(`.dl-block[data-platform=${t.ui}]`).classList.remove("hidden"),void document.querySelector(`.dl-select[data-platform=${t.ui}]`).classList.add("selected");document.querySelectorAll(".dl-block").firstElementChild.classList.remove("hidden"),document.querySelectorAll(".dl-select").firstElementChild.classList.add("selected")}(),await function(){const e=["win-mingw","x11","rpi1","rpi2","rpi3","rpi4","android","macos"];t(e,"-stable","latest","latest"),t([...e,"odroid-c1","odroid-c2","odroid-xu3"],"-dev","tags/continuous","tag/continuous")}()};