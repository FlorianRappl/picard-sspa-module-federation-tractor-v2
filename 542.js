"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["542"],{704:function(e,t,n){function o(e){let t=[],n=[],o=(e,i)=>{let r=e&&e.toJSON instanceof Function?e.toJSON():e;if(null!=r){if("function"==typeof r)return"<function>";if(r instanceof Error)return"<error>";else if(r instanceof Node)return"<node>";else if("object"==typeof r){for(let e=0;e<t.length;e++)if(t[e]===r)return{$ref:n[e]};if(t.push(r),n.push(i),Array.isArray(r)){let e=[];for(let t=0;t<r.length;t+=1)e[t]=o(r[t],`${i}[${t}]`);return e}{let e={};for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=o(r[t],`${i}[${JSON.stringify(t)}]`));return e}}else if("symbol"==typeof r)return"<symbol>";else if("bigint"==typeof r)return"<bigint>";return r}};return o(e,"$")}n.r(t),n.d(t,{initializeDebugAdapter:function(){return c}});var i="piral-inspector-visualizer",r=["#001F3F","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#85144B","#F012BE","#B10DC9"],s=new DOMRectReadOnly(0,0,0,0),a="piral-debug-api";function l(e){let t={content:o(e),source:a,version:"v1"};window.postMessage(t,"*")}function u(e,t,n){return e.on(t,n),()=>{e.off(t,n)}}function c({config:e,events:t,router:n,scope:c}){let{componentName:p}=e,d=[],f={},m={},g=function(e,t,n){let o={},a=t=>{let n=t.getAttribute("origin");if(n)return n;let o=t.getAttribute("cid");if(o){let t=e.readState().microfrontends.find(e=>o in e.components);return t?.name||""}let i=t.getAttribute("source");if(i){let t=e.readState().microfrontends.find(e=>e.source===i);return t?.name||""}return""};class l extends HTMLElement{update=()=>{this.innerText="",document.querySelectorAll(n).forEach(e=>{let t=a(e),n=this.appendChild(document.createElement("div")),i=n.appendChild(document.createElement("div")),l=function(e){let t=[...e.childNodes].map(e=>{if(e instanceof Element)return e.getBoundingClientRect();if(!(e instanceof Text))return s;{let t=document.createRange();return t.selectNode(e),t.getBoundingClientRect()}}).filter(e=>0!==e.height&&0!==e.width),n=t.pop()||s;return t.reduce((e,t)=>{let n=Math.min(e.left,t.left),o=Math.min(e.top,t.top),i=Math.max(e.right,t.right)-n,r=Math.max(e.bottom,t.bottom)-o;return new DOMRectReadOnly(n,o,i,r)},n)}(e),u=o[t]||(o[t]=r[Object.keys(o).length%r.length]);n.style.position="absolute",n.style.left=l.left+"px",n.style.top=l.top+"px",n.style.width=l.width+"px",n.style.height=l.height+"px",n.style.pointerEvents="none",n.style.zIndex="99999999999",n.style.border=`1px dashed ${u}`,i.style.color="white",i.textContent=t,i.style.textOverflow="ellipsis",i.style.position="absolute",i.style.overflow="hidden",i.style.whiteSpace="nowrap",i.style.right="0",i.style.left="0",i.style.top="0",i.style.padding="4px",i.style.fontSize="8px",i.style.background=u})};connectedCallback(){this.style.position="absolute",this.style.top="0",this.style.left="0",this.style.width="0",this.style.height="0",window.addEventListener("resize",this.update),t.on("mounted-component",this.update),t.on("unmounted-component",this.update),this.update()}disconnectedCallback(){window.removeEventListener("resize",this.update),t.off("mounted-component",this.update),t.off("unmounted-component",this.update)}}return customElements.define(i,l),{toggle(){let e=document.querySelector(i);e?e.remove():document.body.appendChild(document.createElement(i))}}}(c,t,p),y=(e,t,n)=>{let o=e[t]||[];for(let e of Object.keys(n))!o.some(t=>t.demanded===e)&&o.push({demanded:e,resolved:n[e]});e[t]=o},h=u(t,"resolved-dependency",({id:e,parentUrl:t,result:n})=>{if(t){let o=function(e,t){for(;t[e];)e=t[e];return e}(t,m);if(e.startsWith("./"))m[n]=o;else{let t=f[o]||{};t[e]=n,f[o]=t}}}),v=u(t,"*",e=>{d.unshift({id:d.length.toString(),name:e.name,args:o(e.args),time:Date.now()}),l({events:d,type:"events"})}),b=()=>c.readState().microfrontends.filter(e=>2!==e.flags).map(e=>({name:e.name,version:"0.0.0",type:e.format,root:e.source,url:e.details.url||e.source,disabled:1===e.flags})),w=()=>{let e={},t=b().filter(e=>e.url);return Object.keys(f).forEach(n=>{let o=f[n],i=t.find(e=>e.url===n);if(i)y(e,i.name,o);else if(!i){let i=t.find(e=>n.startsWith(e.root));i&&y(e,i.name,o)}}),e},C=e=>{c.appendMicrofrontend({name:e.name,format:"pilet",components:[],assets:[],details:e,source:e.name,flags:0})},x=()=>Object.entries(c.readState().components).filter(([,e])=>e.length).map(([e])=>e),O=c.subscribe((e,t)=>{l({type:"container",container:e}),e.microfrontends!==t.microfrontends&&l({type:"pilets",pilets:b()}),e.components!==t.components&&(l({type:"routes",routes:n.findRoutes()}),l({type:"extensions",extensions:x()}))}),E={extensionCatalogue:!0,viewOrigins:!0},k={viewOrigins:{value:E.viewOrigins,type:"boolean",label:"Visualize component origins",onChange(e){E.viewOrigins=e}},extensionCatalogue:{value:E.extensionCatalogue,type:"boolean",label:"Enable extension catalogue",onChange(e){E.extensionCatalogue=e}}},F=()=>Object.keys(k).reduce((e,t)=>{let n=k[t];return n&&"object"==typeof n&&"string"==typeof n.label&&"string"==typeof n.type&&["boolean","string","number"].includes(typeof n.value)&&(e[t]={label:n.label,value:n.value,type:n.type}),e},{}),S=e=>{Object.keys(e).forEach(t=>{let n=k[t];switch(n.type){case"boolean":{let o=n.value,i=e[t];n.value=i,n.onChange(i,o);break}case"number":{let o=n.value,i=e[t];n.value=i,n.onChange(i,o);break}case"string":{let o=n.value,i=e[t];n.value=i,n.onChange(i,o)}}}),l({settings:F(),type:"settings"})},M={name:e.meta?.name||document.querySelector("meta[name=app-name]")?.getAttribute("content")||"App",version:e.meta?.version||document.querySelector("meta[name=app-version]")?.getAttribute("content")||"-"},A={name:M.name,version:M.version,kind:"v1",mode:"development",capabilities:["events","container","routes","pilets","settings","extensions","dependencies","dependency-map"]},j=()=>{l({type:"available",...A,state:{routes:n.findRoutes(),pilets:b(),container:c.readState(),settings:F(),events:d,extensions:x(),dependencies:[]}})},D=()=>{l({type:"info",...A})},R=()=>{l({type:"dependency-map",dependencyMap:w()})},z=e=>{let{source:o,version:i,content:r}=e.data;if(o!==a&&"v1"===i)switch(r.type){case"init":return j();case"check-piral":return D();case"get-dependency-map":return R();case"update-settings":return S(r.settings);case"append-pilet":return C(r.meta);case"remove-pilet":return c.removeMicrofrontend(r.name);case"toggle-pilet":return c.toggleMicrofrontend(r.name);case"emit-event":return t.emit(r.name,r.args);case"goto-route":return n.navigate(r.route,r.state);case"visualize-all":return g.toggle()}};window.addEventListener("message",z);let B=()=>{window.removeEventListener("message",z)};return{dispose(){B(),h(),v(),O()}}}}}]);
//# sourceMappingURL=542.js.map