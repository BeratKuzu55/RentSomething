<<<<<<< HEAD
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
=======
import {configureStore} from "@reduxjs/toolkit";
import talepReducer from "./talepSlice";
import pagecontrolReducer from "./controlPageSlice";
export const store = configureStore({
    reducer  : {
        talep : talepReducer , 
        pageControl : pagecontrolReducer
    }
>>>>>>> 6f61759d8c5304d26eead09cd5e915537fd71c01
});