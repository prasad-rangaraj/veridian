import React from 'react';
import Veridian from '../icons/veridian';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import stylesnavbar from './stylesnavbar';

const Navbar = () => {
  return (
    <>
    <Box sx={{display:"flex",alignItems:"center",borderBottom:"1px solid rgb(202, 207, 219)"}}>
      <Veridian style={{paddingLeft:"50px"}} />
      <Box sx={{display:"flex",alignItems:"center",gap:"50px",paddingLeft:"300px",}}>
      <Typography sx={stylesnavbar.navstyle}>Home</Typography>
      <Typography sx={stylesnavbar.navstyle}>About Us</Typography>
      <Typography sx={stylesnavbar.navstyle}>Our Team</Typography>
      <Typography sx={stylesnavbar.navstyle}>Investment Approach</Typography>
      <Typography sx={stylesnavbar.navstyle}>Contact Us</Typography>
      </Box>
    </Box>
    </>
  );
};

export default Navbar;
