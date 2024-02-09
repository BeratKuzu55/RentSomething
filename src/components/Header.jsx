<<<<<<< HEAD
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
        <hr />
    </>
=======
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
>>>>>>> 6f61759d8c5304d26eead09cd5e915537fd71c01
}