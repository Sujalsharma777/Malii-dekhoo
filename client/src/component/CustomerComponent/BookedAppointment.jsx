import React, { useEffect, useState, memo, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookstatus } from "../../Features/CustomerAPI";
import { MdLocationCity } from "react-icons/md";
import { CgTime, CgTimelapse } from "react-icons/cg";
import api from "../../API/api";
const BookedAppointment = () => {
  let dispatch = useDispatch();
 
   
  const userdata = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userdata);
  const userid = userInfo.id;


  const getdata = (DateData) => {
    const targetdate = new Date(DateData);
    const now = new Date();
    const targetdataUTC = Date.UTC(
      targetdate.getFullYear(),
      targetdate.getMonth(),
      targetdate.getDate()
    );
    const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const timeDifference = targetdataUTC - nowUTC;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil(timeDifference / millisecondsPerDay);

    return daysLeft;
  };
  
  const [Appointment, SetAppointment] = useState([]);
  const bookings = useSelector((state) => state.Appointment.BookList);
    const loading = useSelector(( state)=> state.Appointment.loading);console.log(bookings)
    const error = useSelector((state)=> state.Appointment.error)
useEffect(() => {
   
    if (bookings.length === 0) {
      dispatch(bookstatus(userid));
    } else {
      SetAppointment(bookings);
    }
  }, [dispatch, userid, bookings]);

  if (loading) {
    return (
      <div className=" flex justify-start items-center gap-10 m-20 ">
        <div className="skeleton h-32 w-full"></div>
        <div className="flex flex-col w-full gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div role="alert" className="alert alert-info alert-soft">
        <span>{error}.</span>
      </div>
    );
  }
  return (
    <div className="">
      {Appointment.length > 0 ? (
        <div>
          {Appointment.map((data, index) => (
            <div
              className="card lg:card-side shadow-lg bg-base-200  mx-20 my-5 lg:mx-96  flex justify-center items-center  "
              key={index}
            >
              <div className="grid sm:grid-cols-2  grid-cols-1 items-center justify-center  ">
                <figure className="p-5">
                  <img
                    src={data.service_image}
                    alt="image"
                    className=" sm:w-full sm:h-56  object-cover  rounded-2xl "
                  />
                </figure>

                <div className="card-body">
                  <p className="card-title ">{data.service_name}</p>
                  <p className="text-sm">{data.service_description} </p>
                  <p className="flex items-center gap-1 sm:tex-lg text-md">
                    <MdLocationCity />
                    {data.city} {data.district} {data.state}
                  </p>
                  <p
                    className="flex items-center gap-1 tex-lg"
                    datedata={data.end_time}
                    id="countdown-display"
                  >
                    {" "}
                    <CgTime className="sm:text-2xl text-lg" />{" "}
                    <span className="font-bold text-error">
                      {" "}
                      Day Left: {getdata(data.end_time)}{" "}
                    </span>
                  </p>

                  <div className="card-actions justify-center">
                    <button
                      className="btn  btn-primary   "
                      onClick={() => handleBooking(data, userInfo)}
                      disabled={Appointment.some(
                        (a) => a.Appointment_id === data._id
                      )}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div role="alert" className=" alert alert-error alert-soft">
          <span>No Appointment available in your location </span>
        </div>
      )}
    </div>
  );
};

export default BookedAppointment
