import api, { getApiUrl } from './api';

export async function makeGetRequest(url) {
  const response = await api.get(getApiUrl(url));
  return response.data;
}

export async function makePostRequest(url, data) {
  const response = await api.post(getApiUrl(url), data);
  return response.data;
}

export async function makePutRequest(url, data) {
  const response = await api.put(getApiUrl(url), data);
  return response.data;
}

export async function makeDeleteRequest(url) {
  const response = await api.delete(getApiUrl(url));
  return response.data;
}

export async function makePatchRequest(url, data) {
  const response = await api.patch(getApiUrl(url), data);
  return response.data;
}
