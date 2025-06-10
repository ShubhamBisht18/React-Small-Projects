import React from "react";
import { useLocation } from "react-router-dom";


function PersonDetails(){
    const location = useLocation()
    const person = location.state?.person;

    if(!person) return <div>Loading......</div>

    return(
        <div>
            <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
            <img src={person.picture.large} alt="Profile" />
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Location:</strong> {person.location.city}, {person.location.country}</p>
        </div>
    )
}

export default PersonDetails