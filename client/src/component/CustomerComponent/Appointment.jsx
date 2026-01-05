import React, { useEffect, useState , memo} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchApp,
  bookAppointment,
  bookstatus,
} from "../../Features/CustomerAPI";
import { MdLocationCity } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import api from "../../API/api";
const Appointment = ({ name }) => {
  let dispatch = useDispatch();
  // fetch apointments
  const items = useSelector((state) => state.Appointment.list);
  const loading = useSelector((state) => state.Appointment.loading);
  const error = useSelector((state) => state.Appointment.error);

  const userdata = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userdata);
  const userid = userInfo.id;
  const DefaultName = userInfo.city;
  const nameToFilter =
    name.trim() === "" ? DefaultName : name.trim().toLowerCase();

  // filter data like search and default city
  const flitterData =useMemo(() => {

    return items.filter((item) =>
    item.city.toLowerCase().includes(nameToFilter)
  }, [items,nameToFilter])
   /* items.filter((item) => {
    return item.city.toLowerCase().includes(nameToFilter);
  }); */

  // booking system
  const [Appointment, SetAppointment] = useState([]);
  const bookings = useSelector((state) => state.Appointment.BookList);
  useEffect(() => {
    dispatch(fetchApp());
    // use for getting data empty array so problems face re-rendering  using if solve re-rendering 
    if (bookings.length === 0) {
      dispatch(bookstatus(userid));
    } else{  SetAppointment(bookings)} ;
  }, [dispatch, userid, bookings]);
  const handleBooking = async (appointment, userinfo) => {
    const appointmentInfo = { appointment, userinfo };
    dispatch(bookAppointment(appointmentInfo));
  };

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
      {flitterData.length > 0 ? (
        <div>
          {/*  <div className=" absolute top-10 right-10 ">
          <ToastContainer/>
        </div> */}
          {flitterData.map((data, index) => (
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
                  <p className="flex items-center gap-1 sm:tex-lg text-md">
                    {" "}
                    <CgTimelapse /> {Date(data.end_time)}
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
          <span>Not Found</span>
        </div>
      )}
    </div>
  );
};

export default memo(Appointment);
