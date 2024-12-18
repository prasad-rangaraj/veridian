import { Box,Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Contactusleft from '../../images/contactusleft';
import Contactusright from '../../images/Contactusright';

const Contactus = () => {
    const handlemailpage = () => {
        window.location.href = 'mailto:info@veridian.com';
    };
  return (
    <>
    <Box sx={{maxWidth:"1440px",margin:"0 auto",bgcolor:"#009065",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",height:"285px",position:"relative",marginBottom:"50px"}}>
        <Contactusleft style={{position:"absolute",left:0}}/>
        <Contactusright style={{position:"absolute",right:0}} />
            <Typography variant='h4' sx={{fontFamily:"IBM Plex Serif",color:"white",fontWeight:700}}>Contact Us</Typography>
            <Typography sx={{color:"white",fontSize:"14px",}}>Have questions or need more information? Reach out to us at.</Typography>
            <Box sx={{display:"flex",bgcolor:"rgb(0, 101, 71)",}}>
                <Box sx={{display:"flex",padding:"15px 0px 15px 25px"}}>
                <Box sx={{ bgcolor: "rgb(249, 195, 0)",padding:"4px 6px 0px 7px",marginRight:"15px"}}><Typography sx={{fontWeight:"700",color:"rgb(9, 27, 41)",fontSize:"13px" ,letterSpacing:"2px"}}>MAIL TO</Typography></Box>
                <Typography sx={{color:"white",fontSize:"19px",letterSpacing:"1px",marginRight:"25px"}}>info@veridian.com</Typography>
                </Box>
                <Box onClick={handlemailpage} sx={{height:"58px",width:"48px",bgcolor:"rgb(0, 81, 60)",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}><ArrowForwardIcon sx={{color:"white",}}></ArrowForwardIcon></Box>
            </Box>
            <Typography sx={{color:"white",fontSize:"14px"}}>'We're help to help!'</Typography>
    </Box>
    </>
  )
}

export default Contactus