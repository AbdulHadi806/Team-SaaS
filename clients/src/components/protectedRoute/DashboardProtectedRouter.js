import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken, UserToken } from "../../redux/utils/adminAuth";
import { useSelector } from "react-redux";

function DashboardProtectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();
  const userToken = UserToken();
  const tokenFromRedux = useSelector((state) => state.adminSlice.token);

  useEffect(() => {
    if (token === null && userToken === null) {
      navigate("/", { replace: true });
    }
  }, [token, userToken]);

  return <Outlet />;
}

export default DashboardProtectedroute;
