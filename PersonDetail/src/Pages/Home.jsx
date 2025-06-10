import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [personDetails,  setPersonDetails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            setPersonDetails(data.results)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("Failed to fetch Person Details",err)
            setLoading(false)
        })
    },[])

    if(loading) return <div>Loading please wait.....</div>
    return(
        <div>
            <ul>
                {personDetails.map((person)=>{
                    let personId = person.login.uuid
                    return(
                        <li key={personId}>
                        <Link to={`/api/${personId}`} state={{ person }} >
                            {`${person.name.title} ${person.name.first} ${person.name.last} and ${person.email}`}
                        </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home