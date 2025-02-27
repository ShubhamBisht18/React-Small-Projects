// src/components/StoreCard.jsx
import React from 'react';

// Destructuring props (name, price, quantity) passed to the component
// This allows us to directly access the individual properties of each product
// const { name, price, quantity } = props;
function StoreCard({ name, price, quantity,imgUrl }) {
  return (
    <div className='w-[200px] h-[200px] border-2 border-white rounded-[5px] flex justify-start items-center flex-col gap-3 ml-[20px] mt-[10px]'>
      <div className='w-[170px] h-[80px] border-2 border-white rounded-[5px] mt-[10px] '>
        <img className='object-cover w-[100%] h-[100%]' src={imgUrl} alt="Image" />
      </div>
      <div className='w-[170px] h-[80px]'>
        <h3 className='text-black font-semibold font-mono text-[18px]'>{name}</h3>
        <p className='text-black font-light text-[16px]'>Price: ${price}</p>
        <p className='text-black font-light text-[16px]'>Quantity: {quantity}</p>
      </div>
    </div>
  );
}

export default StoreCard;