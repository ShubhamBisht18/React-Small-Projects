// src/components/StorePage.jsx
import React, { useEffect, useState } from 'react';
import StoreCard from './StoreCard';

function StorePage() {
    // step 1
    const [products, setProducts] = useState([]);

    // step 2
    useEffect(() => {
        // get data from local storage
        const storedProducts = localStorage.getItem('products');
        // chk data if yes hen convert it in json file if not then make an empty array
        const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
        // set the data in products using setproducts
        setProducts(parsedProducts);
    }, []);

    return (
        // step3
        <div className='w-full h-screen flex justify-start items-start bg-black/40 flex-wrap'>
            {/* <h1>Store</h1> */}
            {/* Use .map() to iterate over the 'products' array and render each product */}
            {/* For each 'productItem' (each product object), the 'StoreCard' component is called */}
            {/* Spread the properties of 'productItem' (name, price, quantity) and pass them as individual props to 'StoreCard' */}
            {/* Use 'key' to give each 'StoreCard' a unique identifier, typically using the index */}
            {products.map((productItem, index) => (
                <StoreCard key={index} {...productItem} />
            ))}
        </div>
    );
}

export default StorePage;