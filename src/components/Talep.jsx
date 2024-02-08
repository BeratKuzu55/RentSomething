import React from "react";

export default function Talep(){

    function handleSubmit(e){
        const talep = e.target.value;
    }

    return <>
        <div className="yenitalep">
            <form action="submit">
                <input type="text" placeholder="Neye ihtiyacınız var ?"/>
                <input type="number" />
                <button onClick={handleSubmit}>Ekle</button>
            </form>
        </div>
    
    </>
}