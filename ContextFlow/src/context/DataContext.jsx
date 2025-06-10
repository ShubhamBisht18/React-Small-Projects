import React from "react";

import { createContext, useContext ,useState } from "react";

const DataContext = createContext()

export function DataProvider({children}){
    const [name, setName] = useState("")
    return(
        <DataContext.Provider value={{name, setName}} >
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}