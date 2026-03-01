import{a as d,S as f,i}from"./assets/vendor-DQiTczw4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="54742903-ac8dab689eeed10762e94ebe0";function h(o){return d.get(m,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".loader");function y(){l.classList.remove("is-hidden")}function g(){l.classList.add("is-hidden")}const c=document.querySelector(".gallery"),u=new f(".gallery a");function v(){c.innerHTML="",u.refresh()}function L(o){const s=o.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" />
          </a>
          <div class="info">
            <div class="info-item">
              <p class="label">Likes</p>
              <p class="value">${r.likes}</p>
            </div>
            <div class="info-item">
              <p class="label">Views</p>
              <p class="value">${r.views}</p>
            </div>
            <div class="info-item">
              <p class="label">Comments</p>
              <p class="value">${r.comments}</p>
            </div>
            <div class="info-item">
              <p class="label">Downloads</p>
              <p class="value">${r.downloads}</p>
            </div>
          </div>
        </li>
        `).join("");c.innerHTML=s,u.refresh()}const b=document.querySelector(".form");b.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(o.currentTarget.reset(),s===""){i.warning({message:"Please enter a search query"});return}v(),y(),h(s).then(r=>{if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again."})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
