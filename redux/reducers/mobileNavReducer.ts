import { createSlice } from "@reduxjs/toolkit";

const mobileNavReducer = createSlice({
    name:"mobile_nav_reducer",
    initialState: {
        mobileNavActive: false
    },
    reducers: {
        closeMobileNav(state){
            state.mobileNavActive = false;
        },
        showMobileNav(state){
            state.mobileNavActive = true;
        }
        
    }
})

export default mobileNavReducer.reducer;

export const {closeMobileNav , showMobileNav} = mobileNavReducer.actions;