import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/api";

export const fetchItems = createAsyncThunk(
   "/",
    async()=>{
        const res =await api.get("/supplier/GetAppointment/")
        return res.data  
        
    }
)
export const DeleteItems = createAsyncThunk(
   "/supplier",
    async(id)=>{
        await api.delete(`/supplier/deleteAppointment/${id}`)
        return id
    }
)
export const GetBookedItems = createAsyncThunk(
   "/BookedItems",
    async()=>{
      const data = await api.get("/supplier/deleteAppointment/BookedAppointment")
    
        return data.data.data
    }
)