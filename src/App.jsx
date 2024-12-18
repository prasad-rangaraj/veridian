import React from 'react'
import Navbar from './components/screen/Navbar/navbar'
import './App.css';
import { Box } from '@mui/material';
import Home from './components/screen/Home/home';
import Aboutus from './components/screen/Aboutus/aboutus';
import Ourteam from './components/screen/Ourteam/ourteam';
import Investment from './components/screen/Investment/investment';
import Contactus from './components/screen/Contactus/contactus';
import Copyright from './components/screen/Copyright/copyright';

const App = () => {
  return (
    <Box className="hide-scrollbar"
    style={{
      overflowY: "scroll", 
      height: "100vh",
      width:"100vw" 
    }}>
        <Navbar></Navbar>
        <Home></Home>
        <Aboutus></Aboutus>
        <Ourteam></Ourteam>
        <Investment></Investment>
        <Contactus></Contactus>
        <Copyright></Copyright>
    </Box>
  )
}

export default App