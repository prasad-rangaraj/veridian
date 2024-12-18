import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import Veridian from '../../icons/veridian';
import Excellence from '../../images/Excellence';
import Substainability from '../../images/Substainability';
import Initiative from '../../images/Initiative';
import Integrity from '../../images/Integrity';
import Rightaboutus from '../../images/rightaboutus';
import Leftaboutus from '../../images/leftaboutus';

const Aboutus = () => {
  const values = [
    {
      name: "Excellence",
      description:
        "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
      image: <Excellence />,
    },
    {
      name: "Initiative",
      description:
        "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
      image: <Initiative />,
    },
    {
      name: "Substainability ",
      description:
        "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
      image: <Substainability />,
    },
    {
      name: "Integrity",
      description:
        "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
      image: <Integrity />,
    },
  ];

  return (
    <Box
      sx={{
        margin: "0 auto",
        bgcolor: "#CFE1DF",
        padding: "50px 0",
        maxWidth: "1440px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", right: 0, top: "0px", zIndex: 1 }}>
        <Rightaboutus />
      </Box>
      <Box sx={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}>
        <Leftaboutus />
      </Box>
      <Box sx={{ textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: "IBM Plex Serif" }}>
          About Us
        </Typography>
      </Box>
      <Card
        sx={{
          display: "flex",
          bgcolor: "white",
          padding: "30px",
          borderRadius: "0px",
          gap: "20px",
          maxWidth: "1120px",
          margin: "0 auto",
          boxShadow: "none",
          position: "relative",
          zIndex: 10,
        }}
      >
        <CardContent sx={{ display: "flex", gap: "45px", padding: "30px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#CFE1DF",
              width: "350px",
              height: "200px",
            }}
          >
            <Veridian style={{ width: "350px", height: "200px" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography sx={{ fontWeight: "400px", fontSize: "14px", fontFamily: "IBM Plex Serif" }}>
              Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise.
            </Typography>
            <Typography sx={{ fontWeight: "400px", fontSize: "14px", fontFamily: "IBM Plex Serif" }}>
              We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit-generating growth models. Value creation is fundamental to our goal, and we develop our businesses with this in mind.
            </Typography>
            <Typography sx={{ fontWeight: "400px", fontSize: "14px", fontFamily: "IBM Plex Serif" }}>
              Veridian's expertise is delivered with a responsible approach to our business, our team, our local community, and the environment.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Grid container spacing={2} sx={{ paddingTop: "15px", maxWidth: "1212px", margin: "0 auto", zIndex: 10 }}>
        {values.map((item, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ padding: "16px" }}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px 50px 20px 20px",
                boxShadow: "none",
                gap: "20px",
                borderRadius: "0px",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px", fontFamily: "IBM Plex Serif" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#555",
                    fontFamily: "IBM Plex Serif",
                    lineHeight: "20px",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{ minWidth: "96px", textAlign: "center" }}>{item.image}</Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Aboutus;
