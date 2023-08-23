import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminToken } from "../../redux/utils/adminAuth";

function Protectedroute() {
  const navigate = useNavigate();
  const token = AdminToken();

  useEffect(() => {
    if (token == null) {
      return navigate("/", { replace: true });
    }
  }, []);
  return <Outlet />;
}

export default Protectedroute;
