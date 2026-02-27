import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');

export function clearGallery() {
  gallery.innerHTML = '';
  lightbox.refresh();
}

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="info">
            <div class="info-item">
              <p class="label">Likes</p>
              <p class="value">${image.likes}</p>
            </div>
            <div class="info-item">
              <p class="label">Views</p>
              <p class="value">${image.views}</p>
            </div>
            <div class="info-item">
              <p class="label">Comments</p>
              <p class="value">${image.comments}</p>
            </div>
            <div class="info-item">
              <p class="label">Downloads</p>
              <p class="value">${image.downloads}</p>
            </div>
          </div>
        </li>
        `;
    })
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}
