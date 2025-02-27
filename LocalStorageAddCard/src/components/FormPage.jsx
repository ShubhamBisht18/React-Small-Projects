// src/components/FormPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
    // step 1 
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const navigate = useNavigate()

    // step3
    const handleSubmit = (e) => {
        e.preventDefault()

        // store data from inputs {name:name,price:price,quantity:quantity}
        let newProduct = { name, price, quantity ,imgUrl }

        // create products
        let products = localStorage.getItem('products')

        // chk products has data if no then create an empyt [] if yes convert it into json file
        products = products ? JSON.parse(products) : []

        // if products has no data then it has [] empty arry and push data in it
        products.push(newProduct)

        // now set data into local storage where key is produt like this: products = '[{}]'
        localStorage.setItem('products', JSON.stringify(products))

        // take you to the store page
        navigate('/store');
    }

    return (
        <div className="w-full h-screen bg-black/40 flex justify-center items-center">
            {/* step4 */}
            <form className="w-[300px] h-[250px] border-2 border-white rounded-[5px] flex justify-center items-center flex-col gap-3" onSubmit={handleSubmit} action="submit">
                {/* step 2 */}
                <input className="w-[200px] h-[30px] border-2 border-white rounded-[3px] text-center"  type="text" placeholder='Enter Image URL' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                <input className="w-[200px] h-[30px] border-2 border-white rounded-[3px] text-center" type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-[200px] h-[30px] border-2 border-white rounded-[3px] text-center" type="text" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input className="w-[200px] h-[30px] border-2 border-white rounded-[3px] text-center" type="text" placeholder="Product Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                <button className="w-[120px] h-[30px] border-2 border-white rounded-[3px] font-semibold bg-white text-black font-mono" type="submit">Add Card</button>
            </form>

        </div>

    )
}