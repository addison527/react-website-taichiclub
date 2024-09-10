import React, {useEffect, useState} from 'react';
import FullScreen from '../FullScreen';
import {Box, Text} from "@chakra-ui/react";
import img from '../images/IMG_5091.jpg';
import img2 from '../images/CatLogoNoWords.png'
import img3 from '../images/IMG_5095.JPG'

const Merch = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  console.log(isMobile);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FullScreen footerHeight={90} display = "flex" flexDirection = "column" alignItems={"center"}justifyContent = {"center"}>
      <div flex = '1' style ={{color: '#234f72'}} alignItems={"center"} justifyContent = {"center"} maxWidth ={"1000px"}>
        <Box overflowWrap={"break-word"}padding = "0 1rem 1.25rem" marginTop = "8vh" height={'22.5h'} bg = '#ebeff3' maxWidth ={"1200px"}width={"80vw"} display={'flex'} justifyContent={'center'} alignItems = {'center'} textAlign ='center' borderRadius ={'8px'}>
          <img
            alt='MerchPage-Image'
            src={img2}
            style ={{borderRadius : "4px", height: "auto", overflow: "hidden", position: "relative", 
            width : "200px", alignItems: "center" ,display: "flex", flexFlow: "column", objectFit: 'cover'}}
          />
          <Text margin={"0"}>
          <h3 style ={{fontSize:"1.75rem"}}>Yin and Yang T-Shirt</h3>
            <p>Students are able to obtain a free shirt after attending 12 consecutive classes.
            <br></br>
            Be sure to sign the attendance sheet!
            <br></br>
            Inspired by our twin cats at home, one black and one white!</p>
          </Text>
        </Box>
        <Box padding = "0 1rem"style ={{margin:"1rem auto 0 auto"}}height={'55vh'} bg = '#CED5DF' maxWidth ={"1200px"}width={"80vw"} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign ='center' borderRadius={'8px'}>
          <img
            alt='MerchPage-Image'
            src={img}
            style ={{borderRadius : "4px", height: "50vh", overflow: "hidden", position: "relative", 
            width : "100%", display: "flex", flexFlow: "column", objectFit: 'cover'}}
            />
          <img
            alt='MerchPage-Image'
            src={img3}
            style ={{borderRadius : "4px", height: "50vh", overflow: "hidden", position: "relative", 
            width : "100%", display: "flex", flexFlow: "column", objectFit: 'cover'}}
            />
        </Box>
      </div>
    </FullScreen>
  );
};

export default Merch;

// {isMobile ? (
//   <Text style ={{fontSize: "2.25vw"}} overflow={"hidden"}>
//   <h3 style = {{fontSize: '4vw'}}>Yin and Yang T-Shirt</h3>
//     <h3>Students are able to obtain a free shirt after attending 12 consecutive classes.
//     <br></br>
//     Be sure to sign the attendance sheet!
//     <br></br><br></br>
//     Inspired by our twin cats at home, one black and one white!</h3>
//   </Text>
// ):(
//  <Text style ={{fontSize: "1.45vw"}}>
//  <h3 style = {{fontSize: '3vw'}}>Yin and Yang T-Shirt</h3>
//    <h3>Students are able to obtain a free shirt after attending 12 consecutive classes.
//    <br></br>
//    Be sure to sign the attendance sheet!
//    <br></br><br></br>
//    Inspired by our twin cats at home, one black and one white!</h3>
//  </Text>
// )}