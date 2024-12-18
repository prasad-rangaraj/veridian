import React from 'react';
import Julinjarvis from '../../images/julinjarvis';
import Grahamejackson from '../../images/grahamejackson';
import Petermontegriffo from '../../images/petermontegriffo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import Rightaboutus from '../../images/rightaboutus';
import Leftaboutus from '../../images/leftaboutus';

const Ourteam = () => {
  const values = [
    {
      name: (
        <Box
          sx={{
            position: 'absolute',
            bottom: '15px',
            right: '-170px',
            bgcolor: 'rgb(0, 144, 101)',
            fontFamily: "IBM Plex Serif",
            fontWeight: 500,
            fontSize: '18px',
            padding: '20px 30px 20px 40px',
            transform: 'skew(-40deg,-0deg)',
            
          }}
        >
          <Typography sx={{ transform: 'skew(40deg,-0deg)',color:"white"  }}>
            Grahame Jackson
          </Typography>
        </Box>
      ),
      description: [
        "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee.Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.",
        'He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.',
      ],
      image: <Grahamejackson style={{ position: 'relative', zIndex: 2,paddingLeft:"20px" }} />,
    },
    {
      name: ( 
        <Box
          sx={{
            position: 'absolute',
            bottom: '18px',
            right: '-239px',
            fontFamily: 'IBM Plex Serif',
            bgcolor: 'rgb(0, 144, 101)',
            transform: 'skew(-40deg,-0deg)',
            
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              transform: 'skew(40deg,-0deg)',
              padding: '10px 0px 0px 55px',
              color:"white" 
            }}
          >
            Julian Jarvis
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              transform: 'skew(40deg,-0deg)',
              padding: '0px 40px 10px 80px',
              color:"white" 
            }}
          >
            Chairman, Founder and CEO
          </Typography>
        </Box>
      ),
      description: [
        "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience in the internet and iGaming industries.Julian has worked with America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies, focusing on fast-growth companies in emerging regulatory environments.Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
      ],
      image: <Julinjarvis style={{ position: 'relative', zIndex: 2 ,paddingTop:"48px",paddingLeft:"20px"}} />,
    },
    {
      name: (
        <Box
          sx={{
            position: 'absolute',
            bottom: '15px',
            right: '-200px',
            fontFamily: 'IBM Plex Serif',
            fontWeight: 500,
            fontSize: '18px',
            bgcolor: 'rgb(0, 144, 101)',
            padding: '20px 30px 20px 69px',
            transform: 'skew(-40deg,-0deg)',
            
          }}
        >
          <Typography sx={{ transform: 'skew(40deg,-0deg)',color:"white" }}>
            Peter Montegriffo KC
          </Typography>
        </Box>
      ),
      description: [
        'Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally.This has included working with investment groups and private client family offices. In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.',
        'Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger, and consolidation exercises.Peter was Gibraltar’s Minister for Trade and Industry between May 1996 and February 2000. He was appointed KC in Gibraltar in June 2014.',
      ],
      image: <Petermontegriffo style={{ position: 'relative', zIndex: 2 ,paddingTop:"72px"}} />,
    },
  ];

  return (
    <>
      <Box
        sx={{
          margin: '0px auto',
          maxWidth: '1440px',
          backgroundColor: '#CFE1DF',
          paddingTop: '30px',
          paddingBottom: '60px',
          position:"relative"
        }}
      >
        <Rightaboutus style={{position:"absolute",right:0,top:"-470px"}}></Rightaboutus>
        <Leftaboutus style={{position:"absolute",left:0,top:"-460px"}}></Leftaboutus>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '38px',
            fontFamily: 'IBM Plex Serif',
          }}
        >
          Our Team
        </Typography>
        <Swiper 
          slidesPerView={1.3} 
          centeredSlides={true}
          spaceBetween={70}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          
        >
          {values.map((items, index) => (
            <SwiperSlide key={index} style={{width:'1120px',}}> 
              <Box
                sx={{
                  bgcolor: 'white',
                  paddingTop:"40px",
                  transform: 'skew(-30deg,-0deg)',
                  marginTop: '50px',
                }}
              >
                <Box
                  sx={{
                    transform: 'skew(30deg,-0deg)',
                    display: 'flex',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ position: 'relative', fontFamily: "IBM Plex Serif"}}>
                    {items.image}
                    {items.name}
                  </Box>
                  <Box sx={{padding:"0px 200px 0px 20px"}}>
                    {items.description.map((para, i) => (
                      <Typography
                        key={i}
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          color: '#717B85',
                          fontFamily: 'DM Sans',
                          marginBottom: '16px',
                          lineHeight:"20px"
                        }}
                      >
                        {para}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Ourteam;
