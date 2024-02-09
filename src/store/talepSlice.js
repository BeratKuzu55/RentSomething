<<<<<<< HEAD
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
=======
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
>>>>>>> 6f61759d8c5304d26eead09cd5e915537fd71c01
export default talepSlice.reducer