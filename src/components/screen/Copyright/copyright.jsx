import { Box, Typography } from '@mui/material'
import React from 'react'

const Copyright = () => {
  return (
    <>
    <Box sx={{display: 'flex',alignItems: 'center',width: '100%',justifyContent: 'center',bgcolor:"rgb(245, 247, 250)",padding:"20px 0px",borderTop:"2px solid rgb(202, 207, 219)"}}>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems: 'center',maxWidth: '1440px', width: '100%',margin: '0 auto', padding: '0 50px',}}>
        <Typography sx={{fontSize:"14px",fontWeight:400,color:"#717B85"}}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
        <Typography sx={{fontSize:"14px",fontWeight:400,color:"#717B85"}}>Term of use</Typography>
    </Box>
    </Box>
    </>
  )
}

export default Copyright