import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
        useEffect(()=>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(res => res.json())
            .then(data => 
                setPokemons(data.results),
                setLoading(false))
            .catch((err)=>{
                console.log('Failed to fetch pokemons', err)
                setLoading(false)
            })
        },[])
    if(loading) return <div>Loading please wait.....</div>

    return(
        <div>
            <ul>
                {pokemons.map((pokemon)=>{
                    let pokemonId = pokemon.url.split("/").filter(Boolean).pop()
                    return(
                        <li key={pokemonId}>
                            <Link to={`/pokemon/${pokemonId}`}>
                                {pokemon.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Home