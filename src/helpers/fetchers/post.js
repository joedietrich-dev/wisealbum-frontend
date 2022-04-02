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
  return fetch(`${process.env.REACT_APP_QUERY_DOMAIN}${url}`, options).then((res) => {
    if (res.ok) {
      if (res.headers.get("Authorization")) {
        localStorage.setItem("token", res.headers.get("Authorization"));
      }
      return res.json();
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });
};

export const authorizedPost = (url, content) => {
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
