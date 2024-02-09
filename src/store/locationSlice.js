import { createSlice } from "@reduxjs/toolkit";

const initialState = {longitude : 0.0 , latitude : 0.0};
const locationSlice = createSlice({
    name : "location" , 
    initialState , 
    reducers : {
        resetLocation(state){
            return initialState
        } , 
        setLocation(state , action) {
            state.longitude = action.payload.longitude;
            state.latitude = action.payload.latitude; 
        }
    }
});

export const {resetLocation , setLocation} = locationSlice.actions;
export default locationSlice.reducer