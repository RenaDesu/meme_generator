!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},179:function(e,t,n){e.exports=n.p+"ca8dc3e84ce8b163afa0.js"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e=n(91),t=n.n(e),o=new URL(n(179),n.b);t()(o);const a=document.querySelector("[data-form]"),r=document.querySelector("[data-upload]"),c=document.querySelector("[data-modal]"),u=document.querySelector("[data-close]");r.addEventListener("change",(function(){c.classList.remove("modal--closed")})),u.addEventListener("click",(function(){c.classList.add("modal--closed"),a.reset()})),a.addEventListener("submit",(e=>{e.preventDefault()}));const l=document.querySelector("[data-text]"),i=document.querySelector("[data-position-top]"),d=document.querySelector("[data-position-bottom]"),s=document.querySelector("[data-size]"),v=document.querySelector("[data-color]"),f=document.querySelector("#meme"),m=document.querySelector("[data-download]");let p,h,g=!0;function y(e,t,n,o,a){const r=e.getContext("2d"),c=t.width,u=t.height,l=o,i=u/25;e.width=c,e.height=u,r.drawImage(t,0,0),r.fillStyle=`${a}`,r.textAlign="center",r.lineJoin="round",r.font=2*l+"px sans-serif",g?(r.textBaseline="top",r.fillText(n,c/2,i)):(r.textBaseline="bottom",r.fillText(n,c/2,u-i)),h=e.toDataURL()}r.addEventListener("change",(function(){const e=URL.createObjectURL(r.files[0]);p=new Image,p.src=e,p.addEventListener("load",(()=>{y(f,p,l.value,s.value,v.value)}),{once:!0})})),s.addEventListener("change",(e=>{const t=s.min,n=s.max,o=s.value;o>n?s.value=n:o<t&&(s.value=t),y(f,p,l.value,s.value,v.value)})),v.addEventListener("change",(()=>{y(f,p,l.value,s.value,v.value)})),l.addEventListener("change",(()=>{y(f,p,l.value,s.value,v.value)})),i.addEventListener("click",(()=>{g=!0,y(f,p,l.value,s.value,v.value)})),d.addEventListener("click",(()=>{g=!1,y(f,p,l.value,s.value,v.value)})),m.addEventListener("click",(e=>{y(f,p,l.value,s.value,v.value),m.download="download.PNG",m.href=`${h}`}))}()}();