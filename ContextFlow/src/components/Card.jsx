import React from "react";
import {useData} from "../context/DataContext"

function Card(){
    const {formData} = useData()
    const {name, email, phone, image} = formData;
    return(
        <div>
            <h5>Your name is: {name}</h5>
            <h5>Your email is: {email}</h5>
            <h5>Your phone no is: {phone}</h5>
            {/* <img src={image} alt="User" width="100"/>   */}
            {image && <img src={image} alt="User" width="100"/>}

        </div>
        
    )
}

export default Card