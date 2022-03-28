export const setToken = (res) => {
  const token = res.headers.get("Authorization");
  localStorage.setItem("token", token);
  return token;
};
export const getToken = () => {
  return localStorage.getItem("token");
};
