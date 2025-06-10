import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon(){
    const {id} = useParams()
    const [pokemon, setPokemon] = useState(null)

    console.log("Book ID from params:", id); 

    useEffect(()=>{
        if(!id) return;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch((err)=>{
            console.log("Fetch error:", err)
        })
    },[])
    if (!pokemon) return <div>Loading...</div>;

    return(
        <div>
            <h5>{pokemon.name}</h5>
        </div>
    )
}
export default Pokemon