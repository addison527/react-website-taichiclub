import React, {useState, useEffect} from 'react';
import FullScreen from '../FullScreen';
import {Box, Text} from "@chakra-ui/react";

const Contact = () => {
  const [isntMobile, setIsntMobile] = useState(window.innerWidth >= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsntMobile(window.innerWidth >= 1300);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iframeStyle = {
    border: 'solid 1px #777',
    // width: '100%',
    height: isntMobile ? '70vh' : '60vh',
    width: '80vw',
    frameBorder: '0',
    scrolling: 'no',
    marginBottom: '0',
  };

  return (
    <FullScreen footerHeight={90} display = "flex" flexDirection = "column">
      <div marginBottom = {0}>  
        <Text textAlign = {"center"} marginTop = {"6vh"} marginBottom = {0} alignItems={"center"}  padding={isntMobile?" 1rem 2rem 0 ": "1rem 1rem 0"}>
            <h1 style = {{marginBottom:'0px', padding: '1rem'}}>Class Schedule</h1>
            <p style ={{margin : "0 0 1rem"}}>Click on the Google Calendar Icon at the bottom right of the calendar to save to your personal calendar!</p>
        </Text>
        <Box margin = {0} justifyContent="center" alignItems={"center"}marginBottom = "0" width = {"100%"}maxWidth = "1220px"  display="flex" padding={isntMobile?" 0 2rem 0": "0 1rem 1rem"} boxSizing = "border-box">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ced5df&src=NmE2ZWU0ODc0MjFjMzRlMGUyYmE2MzJlYmFhMjRiZDE3MWQzNjkzYzcyMTBiMDY0MTk2ZjVkMjJjZWE3YTkwMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
            style={iframeStyle}></iframe>
        </Box>
      </div>
    </FullScreen>
  );
};

export default Contact;
