import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        token:"",
        text:"",
        loading:true,
    },
    reducers:{
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        setToken:(state,action) =>{
            state.token = action.payload;
        },
        searchTextKeyword: (state, action) =>{
            state.text = action.payload;
        },
        isLoading:(state,action)=>{
            state.loading = action.payload;
        }
    }
})

export const {toggleMenu, setToken, searchTextKeyword,isLoading} = appSlice.actions;
export default appSlice.reducer;