import { getToken } from "../tokenService";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const get = (url) => fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options);

export const authorizedGet = (url) => fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, { ...options, Authorization: getToken });
