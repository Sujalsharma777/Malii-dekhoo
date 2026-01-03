import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetBookedItems } from "../../Features/SupplierAPI.jsx";
import { useEffect } from "react";
import { CgTime } from "react-icons/cg";
import { MdLocationCity } from "react-icons/md";
import api from "../../API/api.jsx";
const BookedAppointment = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.BookedItems);
  const loading = useSelector((state) => state.items.loading_booked);
  const error = useSelector((state) => state.items.error_booked);
  const [Status, SetStatus] = useState([]);
  const [InputStatus, SetInputStatus] = useState();

  const handleStatus = (e) => {
    SetInputStatus(e.target.value);
  };

  const handlesubmit = async (data) => {
    
    
    try {
      const res = await api.patch("/supplier/updateStatus", {
        id: data,
        status: InputStatus,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      dispatch(GetBookedItems());
    } else {
      SetStatus(items.map((a) => a.status).toString());
    }
  }, [dispatch, items, loading]);

  if (loading)
    return (
      <>
        <div className=" flex justify-start items-center gap-10 m-10 ">
          <div className="skeleton h-32 w-full"></div>
          <div className="flex flex-col w-full gap-4">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </>
    );
  if (error)
    return (
      <div role="alert" className="alert alert-info alert-soft">
        <span>{error}.</span>
      </div>
    );
  return (
    <>
      <div className="sm:m-10">
        {items.map((data, index) => (
          <div
            className="card shadow-lg bg-base-200  mx-20 my-5 p-5  flex justify-center items-center  gap-5 overflow-hidden"
            key={index}
          >
            <div className="grid sm:grid-cols-2  gap-5 place-items-center  items-center">
              <img
                src={data.Appointment_id.service_image}
                alt="image"
                className=" object-cover rounded-2xl min-h-56"
              />

              <div className="card-body">
                <p className="sm:text-lg text-md font-bold ">
                  {data.Appointment_id.service_name}
                </p>
                <p className="text-md font-bold">
                  {data.Appointment_id.service_price}
                </p>
                <p className="flex items-center gap-1 sm:tex-2xl text-sm">
                  {" "}
                  User Name: {data.User_id.name}
                </p>
                <p className="flex items-center gap-1 tex-lg">
                  {" "}
                  <span className="font-bold text-accent">
                    {" "}
                    Appointment Booked At :{" "}
                    {new Date(data.Book_at).toLocaleDateString()}{" "}
                  </span>
                </p>
                <p className="flex items-center gap-1 tex-lg">
                  <span className="font-bold ">
                    {" "}
                    User Address : {data.User_id.city} {data.User_id.district}{" "}
                    {data.User_id.state} {data.User_id.pincode}
                  </span>
                </p>
                <form className="join" onSubmit={(e) => {e.preventDefault(); handlesubmit(data._id)}}>
                  <select
                    defaultValue={Status}
                    className="select select-info rounded-l-2xl"
                    disabled={items.some((a) => a.status === "accepted")}
                    onChange={handleStatus}
                    value={InputStatus}
                  >
                    <option disabled={true}>{Status}</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Cancel</option>
                  </select>
                  <button
                    className="btn btn-neutral join-item"
                    disabled={items.some((a) => a.status === "accepted")}
                  >
                    Submit
                  </button>
                </form>
                <div className="flex justify-center gap-5 items-center">
                  <button className="btn btn-neutral">Contact</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookedAppointment;
