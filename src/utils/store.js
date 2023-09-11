import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import noteSlice from "./noteSlice";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";
import binSlice from "./binSlice";


const store = configureStore({
    reducer: {
        app:appSlice,
        note:noteSlice,
        userReducer:userSlice,
        search:searchSlice,
        bin:binSlice
    }
})

export default store;