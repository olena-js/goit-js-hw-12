import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '54742903-ac8dab689eeed10762e94ebe0';

export async function getImagesByQuery(query, page) {
  const { data } = await axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      }
    });
  return data;
}
