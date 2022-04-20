import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './User/UserLogin.js'
import SignUp from './components/SignUp'
import AdminLogin from './Admin/AdminLogin';
import Error from './components/Error'
import { Button, Container,Row, Col} from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
        <ToastContainer position="top-left"/>
      
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Showcase /><Destinations /></>} />
        <Route path="/userLogin" element={<Login />}/>
        <Route path="/adminLogin" element={<AdminLogin />}/>
        <Route path="/user/createUser" element={<SignUp />}/>
        <Route path="*" element={<Error />}/>
        {/* ADMIN/PROTECTED ROUTES */}
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App
