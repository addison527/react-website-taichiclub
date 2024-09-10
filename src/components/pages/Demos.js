import React, {useState, useEffect} from 'react';
import { Box, Text } from "@chakra-ui/react";
import FullScreen from '../FullScreen';
// import videoSrc1 from 'https://youtu.be/ZiEjf7NjL7w';
import VideoItem from '../VideoItem';

function Demonstration() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <FullScreen display="flex" style ={{paddingTop : isMobile ? ("50px"):('none')}} footerHeight={90} justifyContent="center" alignItems="center" backgroundColor="#ebeff3;">
      <div className = "demo__container" maxWidth = "1220px" width = "80vw">
        <div >
          <Text maxWidth = "1220px" textAlign = "center" padding = "0 1rem">
            <h1 style={{ textAlign: 'center', paddingTop: "2rem"}}>Master Demonstration of 24 Movement</h1>
            <p>In order to effectively promote public health by tai-chi practice, given limited resources,
              a group of Taijiquan masters developed a standardized and simplified form of Taijiquan with 
              24 movements in 1956. Repetitive movements were removed and the sequence of steps was 
              redesigned to gradually progress from simple to intermediate, then to more challenging. 
              The simplified 24 movement tai-chi routine only take about five minutes to perform, 
              and gives beginners an introduction to the essential elements of the art of Tai Chi, while 
              retaining its traditional flavor and benefits. The best performer ever of this routine is 
              definitely World Champion, Master Gao Jiamin:</p>
          </Text>
        </div>
        <Box margin = "0" className = "videoItem__container"  padding = "0rem 1rem " backgroundColor = "transparent">
          <Box style ={{margin:"1rem auto 1rem auto", padding:"1rem 0rem"}} bg = '#95a2bc'display={'flex'} justifyContent={'center'} alignItems = {'center'} textAlign ='center' borderRadius ={'10px'}>
            <VideoItem videoId = "ZiEjf7NjL7w" width = {isMobile ? "375px" :"853"} height = {isMobile ? "275px" :"480"}/>
          </Box>
        </Box>
      </div>
    </FullScreen>
  );
}

export default Demonstration;
