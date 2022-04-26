import axios from "axios";

// Базовые настройки api
const BASE_URL = "https://api.unsplash.com";
const CLIENT_ID = "tzPp71jbMjR-d6XKYNcYr7nOiiwk-s7QvQCmy3O8z4o";

export default class Api {
  static getImages(selectedPage, limitPages) {
    return axios.get(`${BASE_URL}/photos`, {
      params: {
        page: selectedPage,
        per_page: limitPages,
      },
      headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    });
  }

  static getImageStatistic(id) {
    return axios.get(`${BASE_URL}/photos/${id}/statistics`, {
      params: {
        page: selectedPage,
        per_page: limitPages,
      },
      headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    });
  }
}
