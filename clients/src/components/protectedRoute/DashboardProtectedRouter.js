import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken } from "../../redux/utils/adminAuth";

function DashboardProtectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();

  useEffect(() => {
    if (token == null) {
      return navigate("/", { replace: true });
    }
  }, []);
  return <Outlet />;
}

export default DashboardProtectedroute;
