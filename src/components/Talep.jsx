import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLocation, resetLocation } from "../store/locationSlice";
import { talepEkle, talepSil } from "../store/talepDizisiSlice";
import { store } from "../store/reduxStore";
export default function Talep() {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault();

        const talepDegeri = event.target[0].value;
        const talepZamani = event.target[1].value;
        const email = event.target[2].value;
        var currentlongitude = 0.0;
        var currentlatitude = 0.0;

        const date = new Date();
        const currentDate = date.getDate() + " " + date.getMonth() +" " + date.getFullYear() +"saat: " + date.getHours() +"." + date.getMinutes();
        console.log(date.getDate());
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    dispatch(setLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude }));
                    currentlongitude = position.coords.longitude;
                    currentlatitude = position.coords.latitude;

                    async function hey() {
                        try {
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${currentlatitude}&lon=${currentlongitude}&format=json`);
                            const data = await response.json();
                            console.log(data.address.town);
                            dispatch(talepEkle({
                                talep: talepDegeri,
                                sure: talepZamani,
                                latitude: currentlatitude,
                                longitude: currentlongitude,
                                date: currentDate,
                                town: data.address.town , 
                                _email : email
                            }));
                        } catch (error) {
                            console.error('Error fetching location info:', error);
                        }
                    };
                    
                    hey();
                },
                error => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }

        event.target.reset();
    }

    return <>
        <div className="yenitalep">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Neye ihtiyacınız var ?" />
                <input type="number" placeholder="gün sayısı"/>
                <input type="email" name="" id="" placeholder="e-mail" />
                <button type="submit">Ekle</button>
            </form>
        </div>

    </>
}