import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export function DataProvider({children}){
    const [formData, setFormData] = useState({})
    return(
        <DataContext.Provider value={{formData, setFormData}}>
            {children}
        </DataContext.Provider>
    )
}
export function useData(){
    return useContext(DataContext)
}