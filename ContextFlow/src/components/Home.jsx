import React from "react";
import {useData} from '../context/DataContext'
import { useState } from "react";

function Home(){
    const {setFormData} = useData() 
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        image: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInput(prev =>({...prev, [name]: value}))
    }

    const handleSubmit = () =>{
        setFormData(input)
    }

    return(
        <div>
            <input name="name" type="text"value={input.name}onChange={handleChange}placeholder="Enter the name"/>
            <input name="email" type="text"value={input.email}onChange={handleChange}placeholder="Enter the email"/>
            <input name="phone" type="text"value={input.phone}onChange={handleChange}placeholder="Enter the phone no"/>
            <input name="image" type="text"value={input.image}onChange={handleChange}placeholder="Enter the image"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home