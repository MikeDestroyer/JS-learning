(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),c=()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeLeft:t,hours:("0"+Math.floor(t/60/60)).slice(-2),minutes:("0"+Math.floor(t/60%60)).slice(-2),seconds:("0"+Math.floor(t%60)).slice(-2)}})();c.timeLeft>0?(t.textContent=c.hours,n.textContent=c.minutes,r.textContent=c.seconds):clearInterval(l)};c();const l=setInterval(c,1e3,e)})("2022 january 30"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(e=>{"A"===e.target.tagName&&n()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");let r,c=0,l=-5;const a=()=>{r=document.documentElement.clientWidth,r>=768?(e.style.display="block",c+=.05,l+=1,e.style.backgroundColor=`rgba(0,0,0,${c})`,t.style.transform=`translateY(${l}%)`,c<.5&&requestAnimationFrame(a)):(e.style.backgroundColor="rgba(0,0,0,.5)",e.style.display="block")},o=()=>{r=document.documentElement.clientWidth,r>=768?(c-=.05,l-=1,e.style.backgroundColor=`rgba(0,0,0,${c})`,t.style.transform=`translateY(${l}%)`,c>0?requestAnimationFrame(o):e.style.display="none"):e.style.display="none"};e.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||o()})),n.forEach((e=>{e.addEventListener("click",a)}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input.calc-item"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),a=e=>{e.target.value=e.target.value.replace(/[^а-я ]/gi,"")},o=e=>{e.target.value=e.target.value.replace(/[^\w^@-_.!~*']/gi,"")},s=e=>{e.target.value=e.target.value.replace(/[^\d\(\)-]/g,"")},u=e=>{e.target.value=e.target.value.replace(/\D+/g,"")};e.forEach((e=>{const t=e.querySelector("input[type=text]"),n=e.querySelector("input[type=email]"),r=e.querySelector("input[type=tel]");t.addEventListener("input",a),n.addEventListener("input",o),r.addEventListener("input",s)})),t.forEach((e=>{e.addEventListener("input",u)})),n.addEventListener("input",(()=>{r.value="",c.value="",l.value=""}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,r)=>{t===e.target.closest(".service-header-tab")?(t.classList.add("active"),n[r].classList.remove("d-none")):(t.classList.remove("active"),n[r].classList.add("d-none"))}))}))})()})();