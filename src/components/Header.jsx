import React from "react";
import {useDispatch} from "react-redux"
import { reset  , set} from "../store/controlPageSlice";
export default function Header() {

    const dispatch = useDispatch();
    return <>
        <div className="header">
            <h1>Talep Et</h1>
            <h3 onClick={()=> dispatch(reset())}>Yeni Talep</h3>
            <h3 onClick={()=>dispatch(set())}>Çevredekiler</h3>
        </div>
    </>
}