import { API_URL } from "../config";

export async function fetchNews(params) {
  const queryString = Object.keys(params)
    .map(function(key) {
      return `${key}=${params[key]}`;
    })
    .join("&");

  const resp = await fetch(`${API_URL}/news?${queryString}`);
  const result = await resp.json();

  return result;
}
