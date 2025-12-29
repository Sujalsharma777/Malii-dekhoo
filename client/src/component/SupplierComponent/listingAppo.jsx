import React from "react";
import { CgTime } from "react-icons/cg";
import { MdLocationCity } from "react-icons/md";
import api from "../../API/api";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {useSelector , useDispatch} from "react-redux";
import { fetchItems , DeleteItems} from "../../Features/SupplierAPI";
const listingAppo = () => {


  const Dispatch = useDispatch()
const items = useSelector((state) => state.items.list);
  const loading = useSelector((state) => state.items.loading);
  const error = useSelector((state) => state.items.error);
  

  useEffect(() => {

    Dispatch(fetchItems())
  
  }, [Dispatch]);

 const handleDelete=  (id)=>{
   Dispatch(DeleteItems(id))

  } 

  const getdata = (DateData)=>{
  
    const targetdate = new Date(DateData)
    const now  = new Date()
    const targetdataUTC = Date.UTC(targetdate.getFullYear(), targetdate.getMonth(), targetdate.getDate());
    const nowUTC = Date.UTC(now.getFullYear() , now.getMonth(), now.getDate())
    const timeDifference = targetdataUTC - nowUTC;
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
 const daysLeft = Math.ceil(timeDifference / millisecondsPerDay)

    return daysLeft;
   
  }
 
  if (error)
    return (
      <div role="alert" className="alert alert-info alert-soft">
        <span>{error}.</span>
      </div>
    );
  if (loading)
    return (
      <div className=" flex justify-start items-center gap-10 ">
        <div className="skeleton h-32 w-full"></div>
        <div className="flex flex-col w-full gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  return (
    <>
      <div className="mb-10">
        <div className=" absolute top-10 right-10 ">
          <ToastContainer/>
        </div>
        {items.map((data, index) => (
          <div
            className="card shadow-lg bg-base-200  mx-20 my-5 p-5  flex justify-center items-center  gap-5 overflow-hidden"
            key={index}
          >
            <div className="grid sm:grid-cols-2 gap-5 place-items-center  items-center">
             
               
                <img
                  src={data.service_image}
                  alt="image"
                  className=" object-cover rounded-2xl min-h-56"
                />
           

              <div className="card-body">
                <p className="sm:text-2xl text-md font-bold ">
                  {data.service_name}
                </p>
                <p className="text-sm">{data.service_description}</p>
                <p className="flex items-center gap-1 sm:tex-2xl text-sm">
                  {" "}
                  <MdLocationCity className="sm:text-2xl text-lg" /> {data.city}, {data.district}, {data.state}
                </p>
                <p className="flex items-center gap-1 tex-lg" datedata={data.end_time} id="countdown-display">
                  {" "}
                  <CgTime className="sm:text-2xl text-lg" /> <span className="font-bold text-error"> Day Left: {getdata(data.end_time)}         </span>
                  
                  </p>
                <div className="flex justify-center">
                  <button className="btn btn-error" onClick={()=>handleDelete(data._id)} >Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default listingAppo;
