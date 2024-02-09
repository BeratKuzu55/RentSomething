import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
const talepSlice = createSlice({
    name : "talep" , 
    initialState , 
    reducers : {
        reset(state){
            return initialState
        }
    }
});

export const {reset} = talepSlice.actions;
export default talepSlice.reducer