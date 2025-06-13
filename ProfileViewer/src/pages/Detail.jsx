import React from "react";
import { useData } from "../context/DataContext";

function Detail(){
    const {formData} = useData()
    if(!formData) return <p>No data found...</p>
    return(
        <div>
            <h5> Name:{formData.name}</h5>
            <h5> Email:{formData.email}</h5>
            <h5> Phone Number:{formData.phoneNumber}</h5>
            <h5> Gender:{formData.gender}</h5>
        </div>
    )
}

export default Detail