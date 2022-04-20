// import React from 'react'
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input,Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/apiURL";
import { toast } from "react-toastify";

const SignUp = () => {

  // useEffect(()=>{

  //   document.title="SignUp"

  // },[])

  const [user, setUser] = useState({});
  //form handler function
  const handleForm=(e)=>{
    console.log(user);
    postDatatoServer(user);
    e.preventDefault();
  }

  //function to post signup data of passenger to server
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/user/createUser`,data).then(
      (response) =>{
        console.log(response);
        toast.success('SignUp Successful...please login!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      },(error)=>{
        console.log(error);
        toast.error('User already exists..please try again with different credentials!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        
      }

    )
  };
  
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <Form className='form-control' onSubmit={handleForm}>
          <FormGroup>
                    <Input type = "number" placeholder="User ID" id="userid" required onChange={(e)=>{
                        setUser({...user,userId:e.target.value});
                    }}/>
                </FormGroup>
          <FormGroup>
                    
                    <Input type = "text" placeholder="Username" name="username" id="username" required onChange={(e)=>{
                        setUser({...user,userName:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type = "email" placeholder="Email" id="email" required onChange={(e)=>{
                        setUser({...user,userEmail:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type = "password" placeholder="Password" id="password" required
                    onChange={(e)=>{
                        setUser({...user,userPassword:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type = "number" placeholder="PhoneNo" id="phoneno" required
                    onChange={(e)=>{
                        setUser({...user,userPhone:e.target.value});
                    }}/>
                </FormGroup>
            {/* <input
              type='password'
              name='password'
              id='password'
              placeholder='Confirm Password'
            /> */}
            <Button type='submit'>Create Your Account</Button>
            <Button type='reset'>Clear</Button>
          </Form>
        </div>
      </section>
    </>
   
  );
}

export default SignUp;
