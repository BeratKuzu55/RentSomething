<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : false};
const pageControlSlice = createSlice({
    name : "pageControl" , 
    initialState , 
    reducers : {
        reset(state){
            return initialState
        } , 
        set(state) {
            state.value = true; 
        }
    }
});

export const {reset , set} = pageControlSlice.actions;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : false};
const pageControlSlice = createSlice({
    name : "pageControl" , 
    initialState , 
    reducers : {
        reset(state){
            return initialState
        } , 
        set(state) {
            state.value = true; 
        }
    }
});

export const {reset , set} = pageControlSlice.actions;
>>>>>>> 6f61759d8c5304d26eead09cd5e915537fd71c01
export default pageControlSlice.reducer