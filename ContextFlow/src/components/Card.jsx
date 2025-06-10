import React from "react";
import {useData} from "../context/DataContext"

function Card(){
    const {name} = useData()
    return(
        <h5>Your name is: {name}</h5>
    )
}

export default Card