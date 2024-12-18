import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Investmentfocus from "../../images/investment";
import Portfolio from "../../images/portfolio";
import Social from "../../images/social";

const Investment = () => {
  const values = [
    {
      image: <Investmentfocus style={{ width: "100%", height: "auto" }} />,
      name: <Typography sx={{marginTop:"18px",marginBottom: "16px",fontWeight:700,fontSize:"18px",fontFamily:"IBM Plex Serif"}}> Investment focus and strategy </Typography>,
      description: [
        "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.",
        "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
      ],
    },
    {
      image: <Portfolio style={{ width: "100%", height: "auto" }} />,
      name:<Typography sx={{marginBottom: "16px",fontWeight:700,fontSize:"18px",fontFamily:"IBM Plex Serif"}}> Portfolio </Typography>,
      description: [
        "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
        "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
      ],
    },
    {
      image: <Social style={{ width: "100%", height: "auto" }} />,
      name: <Typography sx={{marginTop:"18px",marginBottom: "16px",fontWeight:700,fontSize:"18px",fontFamily:"IBM Plex Serif"}}> Corporate social responsibility </Typography>,
      description: [
        "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
      ],
    },
  ];

  return (
    <Box sx={{ margin: "0 auto", bgcolor: "#CFE1DF",  maxWidth: "1440px" ,height:"auto",paddingBottom:"50px"}}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px", color: "#000" ,fontFamily:"IBM Plex Serif"}}>
        Holistic Investment Approach
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: "1400px", margin: "0" ,}}>
        {values.map((item, index) => (
          <Grid item xs={12} md={4} key={index} sx={{height: "100%"}}>
            <Card sx={{ bgcolor: "white", boxShadow: "none", borderRadius: "0px",height: "665px",padding:"30px 30px 10px 30px" }}>
              <Box sx={{ width: "100%", }}>{item.image}</Box>
              <CardContent sx={{padding:"0px"}}>
                <Typography >
                  {item.name}
                </Typography>
                {item.description.map((para, i) => (
                  <Typography key={i} sx={{ fontSize: "15px", lineHeight: "20px",fontWeight:400,fontFamily:"IBM Plex Serif",color:"#717B85",marginBottom:"16px",wordSpacing:"4px"}}>
                    {para}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Investment;
