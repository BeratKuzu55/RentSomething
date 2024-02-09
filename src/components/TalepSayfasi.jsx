<<<<<<< HEAD
import React from "react";
import { useDispatch, useSelector } from "react-redux"

let konum;
const fetchLocationInfo = async (lat, lon) => {
    const dispatch = useDispatch();
    console.log(lat , lon);
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        console.log(data.address.town);
        konum = data.address.town;

    } catch (error) {
        console.error('Error fetching location info:', error);
    }
};


export default function TalepSayfasi() {
    const postArray = useSelector(store => store.postArr.talepARR);

    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
            position => {
                const crrlat = position.coords.latitude;
                const crrlong = position.coords.longitude;
            },
            error => {
                console.error('Error getting geolocation:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }

    return <>
    <p>yakındaki talepler</p>
        {postArray.map((item, index) => {
            return <div key={index}>
                <h3>{item.talep}</h3>
                <h3>{item.sure}</h3>
                <h3>{item.date}</h3>
                <h3>{item.town}</h3>
                <h3>{item._email}</h3>
                <hr />
            </div>
        })}
    </>
=======
import React from "react";

export default function TalepSayfasi(){

    return <>
    
        <p>yakındaki talepler</p>
    </>
>>>>>>> 6f61759d8c5304d26eead09cd5e915537fd71c01
}