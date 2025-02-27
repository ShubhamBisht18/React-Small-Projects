// src/components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="bg-black/40 w-full h-screen flex justify-center items-center flex-col">
            <div className="w-[220px] h-[220px] border-2 border-white flex justify-start items-center flex-col gap-5 rounded-[5px]">
                <h1 className="text-white font-bold text-3xl mt-[10px] mb-[10px]">Dashboard</h1>
                <Link className=" text-white font-semibold text-[18px]" to="/" >Admin Dashboard</Link>
                <Link className="text-white font-semibold text-[18px]" to="/form">Add Product</Link>
                <Link className="text-white font-semibold text-[18px]" to="/store">View Store</Link>
            </div>
        </div>
    )
}