import { getToken } from "../tokenService";

const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

export const destroy = (url) =>
  fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });

export const authorizedDestroy = (url) => {
  const authOptions = { ...options };
  authOptions.headers["Authorization"] = getToken();
  return fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, authOptions).then((res) => {
    if (res.ok) {
      return res.headers;
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });
};
