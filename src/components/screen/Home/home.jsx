import React from 'react';
import Rectangle from '../../images/rectangle.jsx';
import { Box, Typography } from '@mui/material';
import Downarrow from '../../icons/downarrow.jsx';
import TopleftRec from '../../images/topleftRec.jsx';
import ToprightRec from '../../images/toprightRec.jsx';
import BottomrightRec from '../../images/bottomrightRec.jsx';
import BottomleftRec from '../../images/bottomleftRec.jsx';

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        margin:"60px auto",
        maxWidth: "1440px",
        paddingTop:"124px"
      }}
    >
      <Rectangle style={{ width: "100%", height: "100%" }} />
      <Box
        sx={{
          position: "absolute",
          zIndex: 4,
          top: "59%",
          left: "50%", 
          transform: "translate(-50%, -50%)",
          textAlign: "center", 
          width:"1000px"
        }}
      >
        <Typography
          sx={{
            color: "white",
            backgroundColor: "rgb(249, 195, 0)", 
            padding: "5px 10px", 
            textTransform: "uppercase",
            letterSpacing: "1px",
            display: "inline", 
          }}
        >
          Investment Management
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "48px",
            fontWeight: "bold",
            marginTop: "20px",
            lineHeight: "1.2", 
            fontFamily: "IBM Plex Serif",
          }}
        >
          Empowering Investments with Expertise
          and Strategy
        </Typography>
        <Box
          sx={{
            marginTop: "30px", 
            display:"inline-block",
            justifyContent:"center",
            alignContent:"center",
            backgroundColor: "rgb(0, 101, 71)",
            padding: "10px 20px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "IBM Plex Serif",
              position:"relative",
              paddingRight:"35px",
              paddingBottom:"5px"
            }}
          >
            Know more <Downarrow style={{position:"absolute",top:"4px",right:"5px"}}></Downarrow>
          </Typography>
          
        </Box>
      </Box>
      <TopleftRec style={{position:"absolute",top:"124px",left:0,}}></TopleftRec>
      <ToprightRec style={{position:"absolute",top:"124px",right:0,}}></ToprightRec>
      <BottomrightRec style={{position:"absolute",bottom:"5px",right:0,}}></BottomrightRec>
      < BottomleftRec style={{position:"absolute",bottom:"5px",left:0,}}></BottomleftRec>
    </Box>
  );
};

export default Home;
