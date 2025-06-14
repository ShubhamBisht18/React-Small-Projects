import React, { Children } from "react";
import { use } from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({children}){
    const [products, setProducts] = useState([]);

    const addProduct = (product) =>{
        setProducts(prev => [...prev, product])
    }

    return(
        <DataContext.Provider value={{products, addProduct}} >
            {children}
        </DataContext.Provider>
    )
}

export function useProduct(){
    return useContext(DataContext)
}