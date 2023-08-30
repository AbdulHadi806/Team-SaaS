import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useSelector } from "react-redux";

function DashboardProtectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();
  const tokenFromRedux = useSelector(state => state.adminSlice.token);

  useEffect(() => {
    if (token === null && tokenFromRedux === null) {
      navigate("/", { replace: true });
    }
  }, [token, tokenFromRedux]);

  return <Outlet />;
}

export default DashboardProtectedroute;