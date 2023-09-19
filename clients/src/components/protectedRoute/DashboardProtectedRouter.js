import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken, UserToken } from "../../redux/utils/adminAuth";

function DashboardProtectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();
  const userToken = UserToken();

  useEffect(() => {
    if (token === null && userToken === null) {
      navigate("/", { replace: true });
    }
  }, [token, userToken]);

  return <Outlet />;
}

export default DashboardProtectedroute;
