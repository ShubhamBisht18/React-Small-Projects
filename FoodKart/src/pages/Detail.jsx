import React from "react";
import {useData} from '../context/DataContext'

function Detail(){
    const {formData} = useData()
    if (!formData.name) return <p>No item selected.</p>;
    return(
        <div>
            <h2>Detail Page</h2>
            <img src={formData.image} alt={formData.name} width="100px" />
            <p>Name: {formData.name}</p>
            <p>Quantity: {formData.qty}</p>
            <p>Price: ₹{formData.price}</p>
        </div>
    )
}

export default Detail