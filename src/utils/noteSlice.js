import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({
    name:"note",
    initialState: null,
    reducers:{
        getNotes:(state, action)=>{
            return action.payload;
        }
    }
})

export const {getNotes} = noteSlice.actions;
export default noteSlice.reducer;
