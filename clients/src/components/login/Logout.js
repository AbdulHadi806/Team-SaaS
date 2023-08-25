export const Logout = () => {
  localStorage.removeItem("access_token_admin");
  window.location.href = "/";
};
