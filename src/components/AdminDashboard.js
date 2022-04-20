import React,{useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { toast } from "react-toastify";

export default function AdminDashboard(){
    let navigate=useNavigate();
    let location=useLocation();
    useEffect(()=>{
        const isAuthenticated = localStorage.getItem("isAdmin");
        console.log("Admin authenticated:"+isAuthenticated);
        if(!isAuthenticated)
        {
            
            navigate("/userLogin");
            toast.error('You are not logged in yet', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    },[])
    return(
        <div>
            Admin Dashboard
        </div>
    )
}