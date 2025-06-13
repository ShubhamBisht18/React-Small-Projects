import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function DetailBox({userInfo}){
    const {setFormData} = useData()
    const navigate = useNavigate()

    const handleSubmit = () =>{
        setFormData({
            name: userInfo.first_name,
            email: userInfo.email,
            phoneNumber: userInfo.phone_number,
            gender: userInfo.gender
        })
        navigate('/detail')
    }
    return(
        <div>
            <h5>{userInfo.first_name}</h5>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default DetailBox