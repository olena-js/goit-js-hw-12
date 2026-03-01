import{a as b,S as w,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",q="54742903-ac8dab689eeed10762e94ebe0";async function u(s,r){const{data:e}=await b.get(S,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return e}const f=document.querySelector(".loader");function m(){f.classList.remove("is-hidden")}function p(){f.classList.add("is-hidden")}const y=document.querySelector(".gallery"),h=new w(".gallery a");function P(){y.innerHTML="",h.refresh()}function g(s){const r=s.map(e=>`
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
        `).join("");y.insertAdjacentHTML("beforeend",r),h.refresh()}const v=document.querySelector(".load-more");function B(){v.classList.remove("is-hidden")}function l(){v.classList.add("is-hidden")}let i="",n=1;const L=15,M=document.querySelector(".load-more");M.addEventListener("click",$);async function $(){n+=1,m();try{const s=await u(i,n);g(s.hits);const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}n*L>=s.totalHits&&(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}}const E=document.querySelector(".form");E.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget;if(i=r.elements["search-text"].value.trim(),i===""){a.warning({message:"Please enter a search query"});return}n=1,P(),l(),m();try{const e=await u(i,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits),n*L<e.totalHits?B():(l(),a.info({message:"We're sorry, but you've reached the end of search results."})),r.reset()}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}});
//# sourceMappingURL=index.js.map
