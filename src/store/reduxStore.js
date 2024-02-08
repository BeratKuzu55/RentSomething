import {configureStore} from "@reduxjs/toolkit";
import talepReducer from "./talepSlice";
import pagecontrolReducer from "./controlPageSlice";
export const store = configureStore({
    reducer  : {
        talep : talepReducer , 
        pageControl : pagecontrolReducer
    }
});