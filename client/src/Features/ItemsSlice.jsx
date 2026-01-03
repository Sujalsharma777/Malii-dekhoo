import { createSlice } from "@reduxjs/toolkit";
import { fetchItems  ,DeleteItems,GetBookedItems} from "./SupplierAPI";

const ItemsSlice = createSlice({
  name: "items",
  initialState: {
    list: [],
    BookedItems : [],
    loading_booked:false,
    loading : false,
    error: null,
    error_booked : null,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
    //GET

    .addCase(fetchItems.pending , (state)=>{
        state.loading  = true;
        state.error = null ; 
    })
     .addCase(fetchItems.fulfilled , (state,action)=>{
        state.loading  = false;
        state.list =  action.payload
    })
     .addCase(fetchItems.rejected , (state,action)=>{
        state.loading  = false;
        state.error = action.error.message ; 
    })

    // DELETE

    .addCase(DeleteItems.fulfilled  , (state ,action)=>{
       const id = action.payload
       state.list = state.list.filter(item => item._id !== id)
    })

     .addCase(GetBookedItems.pending , (state)=>{
        state.loading_booked  = true;
        state.error_booked = null ; 
    })
     .addCase(GetBookedItems.fulfilled , (state,action)=>{
        state.loading_booked  = false;
        state.BookedItems =  action.payload
    })
     .addCase(GetBookedItems.rejected , (state,action)=>{
        state.loading_booked  = false;
        state.error_booked = action.error.message ; 
    })
}
});
export default ItemsSlice.reducer