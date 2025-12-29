import { createSlice } from "@reduxjs/toolkit";
import { fetchItems  ,DeleteItems} from "./SupplierAPI";

const ItemsSlice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading : false,
    error: null
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
}
});
export default ItemsSlice.reducer