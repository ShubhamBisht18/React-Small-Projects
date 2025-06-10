import React from "react";
import {useData} from '../context/DataContext'
import { useState } from "react";

function Home(){
    const {setName} = useData() 
    const [input, setInput] = useState("");

    const handleSubmit = () =>{
        setName(input)
    }

    return(
        <div>
            <input type="text"
                   value={input}
                   onChange={(e)=> setInput(e.target.value)}
                   placeholder="Enter the name"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home