import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useData} from '../context/DataContext'

function Card({food}){
    const [qty, setQty] = useState(0)
    const {setFormData} = useData()
    const navigate = useNavigate()

    const handleSubmit = () =>{
        setFormData({
            name: food.strMeal,
            image: food.strMealThumb,
            qty,
            price: qty * 100
        })
        navigate('/detail')
    }
    return(
        <div>
            <img src={food.strMealThumb} alt={food.strMeal} width={100}/>
            <h5>{food.strMeal}</h5>
            <div>
                <button onClick={()=>setQty(qty > 0? qty - 1: 0)}>-</button>
                <input type="text" readOnly value={qty} />
                <button onClick={()=>setQty(qty + 1)}>+</button>
            </div>
             <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default Card