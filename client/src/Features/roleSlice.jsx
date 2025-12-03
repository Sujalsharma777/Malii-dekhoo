/* import {createSlice} from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name:"UserRole",
    initialState:{
        isAuthenticated:false;
        UserInfo:null,
        role:'Customer',

    },
    reducers:{
        loginSuccess:(state,action)=>{
            state.isAuthenticated= true;
            state.UserInfo =action.payload.UserInfo;
            state.role = action.payload.role;
            
        },logout:(state)=>{
state.isAuthenticated= false;
state.UserInfo =null;
state.role = "Customer";

        }
    },

})
export const (loginSuccess , logout) = roleSlice.actions;
export default roleSlice.reducer */