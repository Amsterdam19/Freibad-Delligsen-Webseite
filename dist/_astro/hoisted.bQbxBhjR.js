function Q(){document.getElementById("load").addEventListener("click",Z)}function Z(){const e=document.createElement("iframe");e.src="https://www.openstreetmap.org/export/embed.html?bbox=9.777574539184572%2C51.943762246255886%2C9.813408851623535%2C51.9556651936878&layer=cyclemap&marker=51.94971411488452%2C9.795491695404053",e.classList.add("osmap"),e.setAttribute("frameborder","0"),e.setAttribute("scrollinng","no"),e.style.width="100%",e.style.height="100%",e.style.borderRadius="var(--indexBRadius)";const t=document.querySelector(".mapPreview");t.style.display="none";const n=document.getElementById("map");n.style.visibility="visible",n.appendChild(e)}function ee(){const e=document.getElementById("1fab"),t=document.getElementById("1Cont");e.classList.toggle("expandedFAB"),t.classList.toggle("expandedCont")}function te(){const e=document.getElementById("2fab"),t=document.getElementById("2Cont");e.classList.toggle("expandedFAB"),t.classList.toggle("expandedCont")}function ne(){document.getElementById("1fab").addEventListener("click",()=>{ee()}),document.getElementById("2fab").addEventListener("click",()=>{te()})}function oe(){document.querySelector(".accordion").addEventListener("click",n=>{const o=n.target.closest(".accordion-panel");o&&t(o)});function t(n){const o=n.parentElement.querySelectorAll("button"),r=n.parentElement.querySelectorAll(".accordion-content"),a=n.parentElement.querySelectorAll(".accordion-panel");o.forEach(c=>{c.setAttribute("aria-expanded",!1)}),r.forEach(c=>{c.setAttribute("aria-hidden",!0)}),a.forEach(c=>{c.classList.remove("imgActive")}),n.querySelector("button").setAttribute("aria-expanded",!0),n.classList.add("imgActive"),n.querySelector(".accordion-content").setAttribute("aria-hidden",!1)}}function re(){const e=document.querySelector("header"),t=document.createElement("div");t.setAttribute("data-scroll-watcher",""),e.before(t),new IntersectionObserver(o=>{e.classList.toggle("sticking",o[0].isIntersecting),e.classList.toggle("notSticking",!o[0].isIntersecting)}).observe(t)}function ie(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-links");document.querySelectorAll(".nav-links li");const n=document.getElementById("homeNav");e.addEventListener("click",()=>{t.classList.toggle("nav-active");const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",o?"false":"true"),console.log("navslideAria"),e.classList.toggle("toggle"),n.classList.toggle("solidWhite"),document.querySelectorAll(".navA")})}function H(){re(),setTimeout(ie,1e3),window.location.pathname==="/"&&(setTimeout(oe,1e3),setTimeout(Q,1e3),setTimeout(ne,1e3))}H();document.addEventListener("astro:after-swap",H);document.getElementById("copyright").textContent=new Date().getFullYear().toString();const se="astro:before-preparation",ae="astro:after-preparation",ce="astro:before-swap",le="astro:after-swap",ue=e=>document.dispatchEvent(new Event(e));class N extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,c,h,i,f){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=c,this.sourceElement=h,this.info=i,this.newDocument=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class de extends N{formData;loader;constructor(t,n,o,r,a,c,h,i,f){super(se,{cancelable:!0},t,n,o,r,a,c,h),this.formData=i,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class fe extends N{direction;viewTransition;swap;constructor(t,n,o){super(ce,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function me(e,t,n,o,r,a,c,h){const i=new de(e,t,n,o,r,a,window.document,c,h);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(ue(ae),i.navigationType!=="traverse"&&k({scrollX,scrollY}))),i}async function he(e,t,n){const o=new fe(e,t,n);return document.dispatchEvent(o),o.swap(),o}const ge=history.pushState.bind(history),x=history.replaceState.bind(history),k=e=>{history.state&&(history.scrollRestoration="manual",x({...history.state,...e},""))},I=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),F=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let A,p,v=!1,$;const _=e=>document.dispatchEvent(new Event(e)),U=()=>_("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",W="data-astro-transition",Y="data-astro-transition-fallback";let P,w=0;history.state?(w=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(x({index:w,scrollX,scrollY},""),history.scrollRestoration="manual");const pe=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function be(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function V(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function we(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const r=new Promise(a=>{n.onload=a});e=e.then(()=>r)}n.setAttribute(o.name,o.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const X=(e,t,n,o)=>{const r=F(t,e);let a=!1;if(e.href!==location.href&&!o)if(n.history==="replace"){const c=history.state;x({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else ge({...n.state,index:++w,scrollX:0,scrollY:0},"",e.href);A=e,r||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),o?scrollTo(o.scrollX,o.scrollY):(e.hash?(history.scrollRestoration="auto",location.href=e.href):a||scrollTo({left:0,top:0,behavior:"instant"}),history.scrollRestoration="manual")};function ve(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${n.getAttribute(y)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function O(e,t,n,o){const r=(s,u)=>{const m=s.getAttribute(y),g=m&&u.head.querySelector(`[${y}="${m}"]`);if(g)return g;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return u.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${y}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const u=s.selectionStart,m=s.selectionEnd;return{activeElement:s,start:u,end:m}}return{activeElement:s}}else return{activeElement:null}},c=({activeElement:s,start:u,end:m})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=u,s.selectionEnd=m))},h=s=>{const u=document.documentElement,m=[...u.attributes].filter(({name:l})=>(u.removeAttribute(l),l.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...m].forEach(({name:l,value:d})=>u.setAttribute(l,d));for(const l of document.scripts)for(const d of s.newDocument.scripts)if(!l.src&&l.textContent===d.textContent||l.src&&l.type===d.type&&l.src===d.src){d.dataset.astroExec="";break}for(const l of Array.from(document.head.children)){const d=r(l,s.newDocument);d?d.remove():l.remove()}document.head.append(...s.newDocument.head.children);const g=document.body,b=a();document.body.replaceWith(s.newDocument.body);for(const l of g.querySelectorAll(`[${y}]`)){const d=l.getAttribute(y),S=document.querySelector(`[${y}="${d}"]`);S&&S.replaceWith(l)}c(b)};async function i(s){function u(l){const d=l.effect;return!d||!(d instanceof KeyframeEffect)||!d.target?!1:window.getComputedStyle(d.target,d.pseudoElement).animationIterationCount==="infinite"}const m=document.getAnimations();document.documentElement.setAttribute(Y,s);const b=document.getAnimations().filter(l=>!m.includes(l)&&!u(l));return Promise.all(b.map(l=>l.finished))}if(!v)document.documentElement.setAttribute(W,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const f=await he(e,p,h);X(f.to,f.from,t,n),_(le),o==="animate"&&!v&&i("new").then(()=>$())}async function K(e,t,n,o,r){if(!D()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&k({scrollX,scrollY}),F(t,n)&&n.hash){X(n,t,o,r);return}const c=await me(t,n,e,a,o.sourceElement,o.info,o.formData,h);if(c.defaultPrevented){location.href=n.href;return}async function h(i){const f=i.to.href,s={};if(i.formData){s.method="POST";const g=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");s.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const u=await be(f,s);if(u===null){i.preventDefault();return}if(u.redirected&&(i.to=new URL(u.redirected)),P??=new DOMParser,i.newDocument=P.parseFromString(u.html,u.mediaType),i.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const m=ve(i.newDocument);m.length&&await Promise.all(m)}if(v=!1,I)p=document.startViewTransition(async()=>await O(c,o,r));else{const i=(async()=>{await new Promise(f=>setTimeout(f)),await O(c,o,r,V())})();p={updateCallbackDone:i,ready:i,finished:new Promise(f=>$=f),skipTransition:()=>{v=!0}}}p.ready.then(async()=>{await we(),U(),ye()}),p.finished.then(()=>{document.documentElement.removeAttribute(W),document.documentElement.removeAttribute(Y)}),await p.ready}async function C(e,t){await K("forward",A,new URL(e,location.href),t??{})}function Ee(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>w?"forward":"back";w=n,K(o,A,new URL(location.href),{},t)}const q=()=>{k({scrollX,scrollY})};{(I||V()!=="none")&&(A=new URL(location.href),addEventListener("popstate",Ee),addEventListener("load",U),"onscrollend"in window?addEventListener("scrollend",q):addEventListener("scroll",pe(q,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const j=new Set,E=new WeakSet;let L,G,B=!1;function Te(e){B||(B=!0,L??=e?.prefetchAll??!1,G??=e?.defaultStrategy??"hover",Ae(),Se(),Le())}function Ae(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&R(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function Se(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),J(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||T(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{R(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function Le(){let e;J(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||T(t,"viewport")&&(E.add(t),e??=xe(),e.observe(t))})}function xe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),R(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function R(e,t){const n=t?.ignoreSlowConnection??!1;if(!ke(e,n))return;if(j.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function ke(e,t){if(!navigator.onLine||!t&&z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!j.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||L)&&z()?!0:n==null&&L||n===""?t===G:n===t}function z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/(2|3)g/.test(e.effectiveType)}return!1}function J(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ie(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function M(e){return e.dataset.astroReload!==void 0}(I||Ie()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;M(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),C(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||M(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const c=o?.getAttribute("formmethod")??n.method;if(c==="dialog")return;const h={sourceElement:o??n};if(c==="get"){const i=new URLSearchParams(r),f=new URL(a);f.search=i.toString(),a=f.toString()}else h.formData=r;e.preventDefault(),C(a,h)}),Te({prefetchAll:!0}));