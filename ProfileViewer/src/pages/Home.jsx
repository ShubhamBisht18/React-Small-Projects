import React from "react";
import { useState, useEffect } from "react";
import DetailBox from "../components/DetailBox";

function Home(){
    const [userData, setUserData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/pixelastic/fakeusers/master/data/final.json')
        .then(res => res.json())
        .then((data) => {setUserData(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("Failed to fetch data", err)
        })
    },[])

    if(loading) return <div>Loading please wait......</div>

    return(
        <div>
            {userData.map((userInfo)=>(
                <DetailBox key={userInfo.username} userInfo = {userInfo}/>
            ))}
        </div>
    )
}

export default Home