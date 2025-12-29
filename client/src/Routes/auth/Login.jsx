import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../API/api.jsx";
import { toast, ToastContainer } from "react-toastify";

import { useDispatch } from "react-redux";
import { setAuth } from "../../Features/authSlice.jsx";

const Login = () => {
  const [userinput, SetLogin] = useState({ email: "", password: "" });
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const Alldata = { ...userinput };
    Alldata[name] = value;
    SetLogin(Alldata);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const Login = await api.post("/logins", userinput);
      const { success, message, error } = Login.data;

      if (success) {
        console.log("User Login successfully");
        toast.success("User Login successfully");
        Navigate("/");

        dispatch(setAuth(Login.data.LoginUser));
        localStorage.setItem("token", Login.data.token)

        toast.alert(message);
      } else if (error) {
        toast.alert(error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 justify-center items-center p-5">
        <h1 className="text-center p-5 text-3xl font-sans font-bold ">Login</h1>
        <div className="absolute z-10 top-10 right-10">
          <ToastContainer />
        </div>
        <form
          className="flex justify-center items-center w-full "
          onSubmit={handlesubmit}
        >
          <div className="flex flex-col p-10 gap-5 ">
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              required
              className="p-5 input validator  "
              value={userinput.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="p-5 input validator  "
              value={userinput.password}
              onChange={handleChange}
            />

            <button name="submit" className="btn bg-blue-400  p-2 m-5">
              Submit
            </button>
            <NavLink
              to="/signup"
              className="text-center text-lg underline-offset-4 underline"
            >
              Create Account
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
