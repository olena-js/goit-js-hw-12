import{a as w,S,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const q="https://pixabay.com/api/",P="54742903-ac8dab689eeed10762e94ebe0";async function f(s,r){const{data:e}=await w.get(q,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return e}const m=document.querySelector(".loader");function p(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}const h=document.querySelector(".gallery"),g=new S(".gallery a");function B(){h.innerHTML="",g.refresh()}function v(s){const r=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <div class="info-item">
              <p class="label">Likes</p>
              <p class="value">${e.likes}</p>
            </div>
            <div class="info-item">
              <p class="label">Views</p>
              <p class="value">${e.views}</p>
            </div>
            <div class="info-item">
              <p class="label">Comments</p>
              <p class="value">${e.comments}</p>
            </div>
            <div class="info-item">
              <p class="label">Downloads</p>
              <p class="value">${e.downloads}</p>
            </div>
          </div>
        </li>
        `).join("");h.insertAdjacentHTML("beforeend",r),g.refresh()}const L=document.querySelector(".load-more");function d(){L.classList.remove("is-hidden")}function l(){L.classList.add("is-hidden")}let i="",n=1;const b=15,M=document.querySelector(".load-more");M.addEventListener("click",$);async function $(){n+=1,l(),p();try{const s=await f(i,n);v(s.hits);const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}n*b<s.totalHits?d():(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{d(),a.error({message:"Something went wrong. Please try again."})}finally{y()}}const E=document.querySelector(".form");E.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget;if(i=r.elements["search-text"].value.trim(),i===""){a.warning({message:"Please enter a search query"});return}n=1,B(),l(),p();try{const e=await f(i,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}v(e.hits),n*b<e.totalHits?d():(l(),a.info({message:"We're sorry, but you've reached the end of search results."})),r.reset()}catch{a.error({message:"Something went wrong. Please try again."})}finally{y()}});
//# sourceMappingURL=index.js.map
