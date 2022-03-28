import { getToken } from "../tokenService";

const setOptions = (content) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };
};

export const post = (url, content) => {
  const options = setOptions(content);
  return fetch(url, options);
};

export const authorizedPost = (url, content) => {
  const options = setOptions(content);
  return fetch(url, { ...options, Authorization: getToken() });
};
