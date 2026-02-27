import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  showLoader,
  hideLoader,
  clearGallery,
  createGallery,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  event.currentTarget.reset();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search query',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({ message: 'Something went wrong. Please try again.' });
    })
    .finally(() => {
      hideLoader();
    });
});
