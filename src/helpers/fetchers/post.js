export const post = (url, content, token = null) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };

  if (token) {
    options.headers["Authorization"] = token;
  }

  return fetch(url, options);
};
