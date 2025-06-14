import React from "react";
import { useProduct } from "../context/DataContext";
import StockBox from "../components/StockBox";

function ItemPage(){
    const {products} = useProduct();
    return(
        <div>
            {products.map((product,index)=>(
                <StockBox key={index} product={product}/>
            ))}
        </div>
    )
}
export default ItemPage