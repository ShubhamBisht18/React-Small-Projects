import React from "react";
import { useState } from "react";
import { useProduct } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
function Home(){
    const [input, setInput] = useState({ name: '', description: '', qty: '', price: '' });
    const {addProduct} = useProduct();
     const navigate = useNavigate();

    const handleChanges = (e) =>{
        const {name, value} = e.target;
        setInput(prev => ({...prev,[name]:value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!input.name || !input.qty || !input.price) return alert('Please fill required fields');
        addProduct(input);
        setInput({ name: '', description: '', qty: '', price: '' });
        navigate('/itempage')
    }
    return(
        <div>
            <h5>Add Product</h5>
            <input value={input.name} onChange={handleChanges} type="text" name="name" id="name" placeholder="Enter the product name" />
            <input value={input.description} onChange={handleChanges} type="text" name="description" id="description" placeholder="Enter the product description" />
            <input value={input.qty} onChange={handleChanges} type="text" name="qty" id="qty" placeholder="Enter the product qty" />
            <input value={input.price} onChange={handleChanges} type="text" name="price" id="price" placeholder="Enter the product price" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home