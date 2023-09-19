import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken, UserToken } from "../../redux/utils/adminAuth";

function DashboardProtectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();

  useEffect(() => {
    if (token === null) {
      navigate("/", { replace: true });
    }
  }, [token]);

  return <Outlet />;
}

export default DashboardProtectedroute;
