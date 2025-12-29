import React, { useState } from "react";
import api from "../../API/api.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const sigup = () => {
  const [forminput, Setinput] = useState({
    name: "",
    email: "",
    contact: "",
    houseNum: "",
    street: "",
    city: "",
    state: "",
    district: "",
    pincode: "",
    role: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const Alldata = { ...forminput };
    Alldata[name] = value;
    Setinput(Alldata);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const NewUser = await api.post("/register", forminput, {
        headers: { "Content-Type": "application/json" },
      });

      const { success, message, error } = NewUser.data;

      if (success) {
        console.log("User registered successfully");
        toast.success("User registered successfully");

        navigate("/login");
      } else if (!success) {
        console.log(message);
      } else if (error) {
        console.log("something is wrong");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="p-5 mb-10 sm:w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="absolute z-10 top-10 right-20">
          <ToastContainer />
        </div>
        <h1 className="text-center text-3xl p-5 font-bold font-sans ">
          Create Account{" "}
        </h1>
        <form className="" onSubmit={handlesubmit}>
          <div className="grid grid-cols-2 gap-2 sm:gap-5 justify-center items-center flex-col ">
            <input
              type="text"
              name="name"
              id="Your Name "
              placeholder="Full Name"
              required
              className="p-2  m-2   rounded-lg input validator  "
              value={forminput.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
              className="input p-2  m-2 rounded-lg  validator  "
              value={forminput.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="contact"
              className="input validator tabular-nums p-2  m-2  rounded-lg "
              required
              placeholder="+91"
              pattern="[0-9]*"
              minLength="10"
              maxLength="10"
              title="Must be 10 digits"
              value={forminput.contact}
              onChange={handleChange}
            />

            <input
              type="text"
              name="houseNum"
              id="HouseNum"
              placeholder="House Number "
              required
              className="p-2  m-2 rounded-lg input validator  "
              value={forminput.houseNum}
              onChange={handleChange}
            />
            <input
              type="text"
              name="street"
              id="StreetName"
              placeholder="Nearest Please"
              required
              value={forminput.street}
              className="p-2  m-2 rounded-lg input validator  "
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              id="City"
              placeholder="City "
              required
              value={forminput.city}
              className="p-2  m-2 rounded-lg input validator  "
              onChange={handleChange}
            />

            <input
              type="text"
              name="district"
              id="dis"
              placeholder="District "
              required
              value={forminput.district}
              className="p-2  m-2 rounded-lg input validator"
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              id="State"
              value={forminput.state}
              placeholder="State "
              required
              className="p-2  m-2 rounded-lg input validator "
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              id="Zipcode"
              placeholder="Pincode / Zipcode "
              required
              value={forminput.pincode}
              className="p-2  m-2 rounded-lg input validator  "
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" Password "
              required
              value={forminput.password}
              className="p-2  m-2 rounded-lg input validator  "
              onChange={handleChange}
            />
            <input
              type="Password"
              name="CoPassword"
              id="CoPassword"
              placeholder=" Conform Password "
              required
              className="p-2  m-2 rounded-lg input validator  "
            />
            <select
              className="  select p-2  m-2   rounded-lg input validator  "
              name="role"
              onChange={handleChange}
              value={forminput.role}
            >
              <option value="">Select Provider </option>
              <option value="Customer">Customer</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>
          <div className="flex justify-center ">
            <button className="btn w-full bg-blue-400  p-2 m-5 " type="submit">
              Submit
            </button>
          </div>
        </form>
        <NavLink to="/login">I have Already Account </NavLink>
      </div>
    </>
  );
};

export default sigup;
