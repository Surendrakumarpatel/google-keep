import { createSlice } from "@reduxjs/toolkit";

const binSlice = createSlice({
    name:"bin",
    initialState:{
        binnotes:[],

    },
    reducers:{
        addBin:(state, action)=>{
            state.binnotes.push(action.payload);
        }
    }
})

export const {addBin} = binSlice.actions;
export default binSlice.reducer;