parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b1C6":[function(require,module,exports) {
(()=>{const e=document.querySelector("[menu-buynow]"),o=document.querySelector("[menu-buynow-open]"),t=document.querySelector("[data-buynow-close]"),n=document.querySelector("[data-buy-open]"),c=document.querySelector("[modal]"),s=document.querySelector("body");n.addEventListener("click",()=>{e.classList.toggle("is-hidden-2"),s.classList.toggle("modal-open")}),o.addEventListener("click",()=>{e.classList.toggle("is-hidden-2"),s.classList.toggle("modal-open"),c.classList.add("open-modal")}),t.addEventListener("click",()=>{e.classList.toggle("is-hidden-2"),s.classList.toggle("modal-open"),c.classList.remove("open-modal")}),d()})();const e=document.querySelector(".backdrop-2"),o=document.querySelector("body"),t=document.querySelector("[menu-buynow]"),n=document.querySelector("[modal]");function c(e){e.currentTarget===e.target&&s()}function d(){window.addEventListener("keydown",function(e){"Escape"===e.code&&s()})}function s(){e.classList.add("is-hidden-2"),o.classList.remove("modal-open"),n.classList.remove("open-modal")}e.addEventListener("click",c);
},{}]},{},["b1C6"], null)
//# sourceMappingURL=/IceCream/buyNowModal.2a08ec72.js.map