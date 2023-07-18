import axios from "axios";
import Qs from "qs";

// const API_DOMAIN = process.env.VUE_APP_API_DOMAIN;
const API_DOMAIN = process.env.VUE_APP_API_DOMAIN;
export const API_URL = process.env.VUE_APP_API_URL;
export const AUTH_TOKEN = "AUTH-TOKEN";

let __locale = "nl";

function getLocale() {
  return __locale;
}

export function setLocale(locale) {
  __locale = locale;
}

function requestHeaders() {
  return {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "AUTH-TOKEN": getAuthToken(),
  };
}

function getAuthToken() {
  return process.client ? localStorage.getItem(AUTH_TOKEN) : null;
}

const client = (apiURL = API_URL) => {
  let locale = getLocale();

  const isServer = typeof window === "undefined";

  if (isServer) console.log("Window::");
  else {
    locale = "en";
  }
  return axios.create({
    baseURL: `${API_DOMAIN}/${locale}/${apiURL}`,
    headers: requestHeaders(),
    paramsSerializer: (params) =>
      Qs.stringify(params, { arrayFormat: "brackets" }),
  });
};

export default client;
