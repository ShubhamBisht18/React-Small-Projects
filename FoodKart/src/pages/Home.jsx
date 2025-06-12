import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

function Home(){
    const [foodData, setFoodData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
        .then(res => res.json())
        .then((data) => {setFoodData(data.meals)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("Failed to load Food Data",err)
        })
    },[])
    

    if(loading) return <div>Loading please wait......</div>
    
    return(
        <div>
            <h5>Food</h5>
            <div>
                {foodData.map((food)=>(
                    <Card key={food.idMeal} food={food}/>
                ))}
            </div>
        </div>

    )
}

export default Home