import { getToken } from "../tokenService";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const get = (url) =>
  fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res);
    }
  });

export const noResponseGet = (url) =>
  fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      // console.log(res);
    } else {
      throw new Error(res);
    }
  });

export const authorizedGet = (url) => {
  const authOptions = { ...options };
  authOptions.headers["Authorization"] = getToken();
  return fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, authOptions).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res);
    }
  });
};
