import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isAuthenticated:false
    },
    reducers:{
        getUser:(state, action)=>{
            state.user =  action.payload;
            state.isAuthenticated = true;
        },
        removeUser:(state)=>{
             state.user = null;
             state.isAuthenticated = false;
        }
    }
});

export const {getUser, removeUser} = userSlice.actions;

export default userSlice.reducer;