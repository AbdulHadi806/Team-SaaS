export const AdminToken = () => {
    return localStorage.getItem("access_token_admin");

}
export const LogoutAdminHandler = () => {
    localStorage.removeItem("access_token_admin");
    window.location.href = "/";
  };
  
