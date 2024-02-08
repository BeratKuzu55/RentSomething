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
export default pageControlSlice.reducer