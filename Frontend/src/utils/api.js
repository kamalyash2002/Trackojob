import axios from 'axios';

let HOST_API;

if (window.location.hostname.includes("localhost")) {
    // If the URL contains localhost, exclude "apis."
    HOST_API = `http://localhost:8000`;
} else {
    // For other cases, include "apis."
    HOST_API = `${window.location.protocol}//apis.${window.location.host}`;
}

const api = axios.create({ baseURL: HOST_API });

axios.defaults.timeout = 30000;
const LOCAL_ENV_BASE_URL = `${HOST_API}`;

export const getApiUrl = (endPointUri) => `${LOCAL_ENV_BASE_URL}${endPointUri}`;

api.interceptors.request.use((requestConfig) => {
  const token = window.localStorage.getItem('token').slice(1, -1);
 
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  // in auth routes, we don't need to send the token
  if (requestConfig.url.includes('/Login') || requestConfig.url.includes('/register')) 
  {
    delete requestConfig.headers.Authorization;
  }
  return requestConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check for unauthorized responses (401 and 403)
    if (
     error.response &&
      [401].includes(error.response.status) && 
      !error.config.url.includes('/Login')
    ) {
      console.log('error', error);
      window.location.replace('/Login');
      return Promise.reject(error);
    }
    // For other errors, reject the promise with the error object
    return Promise.reject(error);
  }
);

export default api;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await api.get(url, { ...config });

  return res.data;
};
