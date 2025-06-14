import React from "react";

function StockBox({product}){
    const {name, description, qty, price} = product;
    return(
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Quantity: {qty}</p>
            <p>Price: ₹{price}</p>
        </div>
    )
}
 
export default StockBox