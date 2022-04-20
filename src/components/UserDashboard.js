import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import FlightApp from './FlightApp';


export default function UserDashboard(){
    let navigate=useNavigate();
    useEffect(()=>{
        const isAuthenticated = localStorage.getItem("isUser");

        console.log("User authenticated:"+isAuthenticated);
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
        <div style={{padding:'2%'}}>
        <div>
            Welcome to user dashboard
        </div>
        <FlightApp/>
        </div>
    )
}