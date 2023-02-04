import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProtectRoutes = () => {
  // const { user } = useAuthContext();
  const user = useSelector((state) => state.users.user);

  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <>
          {toast("You must login first!", {
            icon: "⚠️",
            style: {
              borderRadius: "10px",
              background: "#031B34",
              color: "#fff",
            },
            position: "top-center",
          })}
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export default ProtectRoutes;
