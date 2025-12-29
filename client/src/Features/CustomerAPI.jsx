import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/api";

export const fetchApp = createAsyncThunk(
   "/",
    async()=>{
        const res =await api.get("/customer/appointment")
        return res.data  
        
    }
)
export const bookAppointment = createAsyncThunk(
    "/booking",
    async(datainfo)=>{
        const res  = await api.post(   "/customer/appointment/booking", datainfo)
        return res.data
    }
)
export const bookstatus = createAsyncThunk(
    "/status",
    async(userid)=>{
        const res  = await api.get(   `/customer/appointment/booking/${userid}`)
        const data = res.data.data
        return data
     
    }
)