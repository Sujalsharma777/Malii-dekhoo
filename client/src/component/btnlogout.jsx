import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/authSlice";
import { useNavigate } from "react-router-dom";
const btnlogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };
  return userInfo ? (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex justify-center items-center flex-col p-10 *:p-2">
          {" "}
          <h1> {userInfo.name} </h1>
          <h1> {userInfo.email} </h1>
          <h1> {userInfo.role} </h1>{" "}
        </div>
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </>
  ) : null;
};

export default btnlogout;
