import React,{useState} from 'react';
// based on login --> redirect user to UserDashboard or AdminDashboard
import axios from 'axios';
import base_url from '../api/apiURL';
import {useNavigate} from 'react-router-dom';
import {data} from '../api/userdata';
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
const UserLogin = () => {
  const [username,setUsername]=useState('');
  const [pass,setPass]=useState('');
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log("username:"+username+" password:"+pass);
    let d=data.filter((d)=>{
      if(d.name===username && d.pass===pass)
      {
        return d;
      }
    });
    d=d[0];
    console.log("user found");
    console.log(d);
    if(d&&d.userType==='admin')
    {
      Cookies.set('username',d.name);
      Cookies.set('usertype','admins')
      navigate("/admin-dashboard");
    }
    else if(d&&d.userType===null)
    {
      Cookies.set('username',d.name);
      Cookies.set('usertype','customer');
      navigate("/user-dashboard");
    }
    else{
      toast.error('Invalid credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    /*
    let config={
      url:`${base_url}/users/readAllUsers`,
      method:'get',

    }
    axios(config)
    .then((resp)=>{
      console.log(resp);
      let d=resp.data;

      if(d&&d.userType==='admin')
    {
      Cookies.set('username',d.name);
      Cookies.set('usertype','admins')
      navigate("/admin-dashboard");
    }
    else if(d&&d.userType===null)
    {
      Cookies.set('username',d.name);
      Cookies.set('usertype','customer');
      navigate("/user-dashboard");
    }
    else{
      toast.error('Invalid credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    };
      
    })
    .catch(err=>console.log(err))
    */
  }
  const handleChange=(e)=>{
    if(e.target.name==='username')
    {
      setUsername(e.target.value);
      
    }
    if(e.target.name==='password')
    {
      setPass(e.target.value);
    }
  }
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={handleLogin}>
          <input
              type='text'  
              name='username'
              id='username'
              placeholder='Username'
              value={username}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              value={pass}
              placeholder='Password'
              onChange={handleChange}
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  ) 
}

export default UserLogin;