(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".slider-line"),t=document.querySelectorAll(".reviews-item");let o=0;const c=window.innerWidth<1280&&768<=window.innerWidth,e=window.innerWidth<768;var r=parseInt(getComputedStyle(n).gap);const s=t[0].offsetWidth+r;function l(i){this.startX=(i.type==="touchstart"?i.touches[0]:i).clientX}function u(i){i=(i.type==="touchend"?i.changedTouches[0]:i).clientX,i=this.startX-i,50<i?e&&o<t.length-1||c&&o<t.length-2?o++:o=0:i<-50&&(0<o?o--:e?o=t.length-1:c&&(o=t.length-2)),n.style.transform=`translateX(-${o*s}px)`}n.addEventListener("touchstart",l),n.addEventListener("touchend",u),n.addEventListener("mousedown",l),n.addEventListener("mouseup",u)});(()=>{const n={openMobileMenuBtn:document.querySelector("[data-mobileMenu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobileMenu-close]"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-nav-link"),mobileMenuBtn:document.querySelector(".mobile-menu-shop-btn"),mobileMenu:document.querySelector("[data-mobileMenu]")};function t(){n.mobileMenu.classList.toggle("is-open")}n.openMobileMenuBtn.addEventListener("click",t),n.closeMobileMenuBtn.addEventListener("click",t),n.mobileMenuLinks.forEach(o=>{o.addEventListener("click",t)}),n.mobileMenuBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.js.map
