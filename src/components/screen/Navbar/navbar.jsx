import React from 'react';
import Veridian from '../../icons/veridian';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import stylesnavbar from './Stylesnavbar';

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgb(202, 207, 219)',
          position: 'fixed',
          zIndex: 100,
          top: 0,
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1440px', 
            width: '100%',
            margin: '0 auto', 
            padding: '0 50px',
          }}
        >
          <Veridian style={{ width: '134px', height: '134px'}} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '50px',
              marginLeft:"250px"
            }}
          >
            <Typography sx={stylesnavbar.navstyle}>Home</Typography>
            <Typography sx={stylesnavbar.navstyle}>About Us</Typography>
            <Typography sx={stylesnavbar.navstyle}>Our Team</Typography>
            <Typography sx={stylesnavbar.navstyle}>Investment Approach</Typography>
            <Typography sx={stylesnavbar.navstyle}>Contact Us</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
