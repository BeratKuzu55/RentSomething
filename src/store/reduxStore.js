import {configureStore} from "@reduxjs/toolkit";
import talepReducer from "./talepSlice";
import pagecontrolReducer from "./controlPageSlice";
import locationReducer from "./locationSlice";
import talepArrReducer from "./talepDizisiSlice";
export const store = configureStore({
    reducer  : {
        talep : talepReducer , 
        pageControl : pagecontrolReducer , 
        locationControl : locationReducer , 
        postArr : talepArrReducer ,
    }
});