import React from "react";
import Main from "./Routes/Main.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerNavigation from "./component/CustomerComponent/CustomerNavigation.jsx";
import SupplierNavigation from './component/SupplierComponent/SupplierNavigation.jsx'
import Login from "./Routes/auth/Login.jsx";
import Profile from "./Routes/customer/Profile.jsx";
import Sigup from "./Routes/auth/sigup.jsx";
import ServiceManage from "./Routes/Supplier/ServiceManage.jsx";
import SupplierDes from "./Routes/Supplier/SupplierDes.jsx";
import { useSelector } from "react-redux";
const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const role = userInfo?.role || null;
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sigup/>} />
      </Routes>
      {role === null && (
        <Routes>
          <Route index element={<Main />} />{" "}
        </Routes>
      )}  
      {role === "Customer" && (
        <Routes>
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      )}
      {role === "Supplier" && (
        <Routes>
          <Route path="/Manager" element={<ServiceManage />} />
          <Route index element={<SupplierDes />} />
        </Routes>
      )}
   
{role === "Customer" && (
      <CustomerNavigation />
      )}   
      {role === "Supplier" && (
      <SupplierNavigation />
      )}     
    </BrowserRouter>
  );
};

export default App;
