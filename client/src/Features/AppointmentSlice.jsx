import { createSlice, isPending } from "@reduxjs/toolkit";
import { bookstatus, fetchApp , } from "./CustomerAPI.jsx"


const AppointmentSlice = createSlice({
  name: "Appointment",
  initialState: {
    list: [],
    BookList:[],
    loading: false,
    error: null,
    btn: false
   
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchApp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchApp.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchApp.rejected, (state, action ) => {
        state.loading = false;   
        state.error = action.error.message;
      })
 .addCase(bookstatus.pending, (state) => {
        state.btn = true;
        state.error = null;
      })
.addCase(bookstatus.fulfilled, (state, action) => {

         state.loading = false;
        state.BookList = action.payload;
      })
      .addCase(bookstatus.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message
      })
     

  },
});


export default AppointmentSlice.reducer