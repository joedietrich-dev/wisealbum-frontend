import { getToken } from "../tokenService";

const setOptions = (content) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };
};

export const put = (url, content) => {
  const options = setOptions(content);
  return fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });
};

export const authorizedPut = (url, content) => {
  const options = setOptions(content);
  options.headers["Authorization"] = getToken();
  return fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });
};
