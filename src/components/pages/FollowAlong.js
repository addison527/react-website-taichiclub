import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import VideoItem from '../VideoItem';

function FollowAlong({ videoSrc1, videoSrc2, name1, description1, name2, description2 }) {
  return (
    <Box
      bg="#f0f4f8"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding-top="20px"
      minHeight="100vh"
      paddingTop= "100px"
    > 
      <Text>
        <h1 style={{ textAlign: 'center', width: '100%', paddingLeft: '40px' }}>Follow Along</h1>
        <p>10 minute follow-along videos have been made available for Movement 1-18 of the 24 Movements Taijiquan. Additional videos will be made available at a later time.</p>
      </Text>

      <Box className = "videoItemGrid__container"width="95%" display="grid" gridTemplateColumns="repeat(3, 1fr)" /* Creates three equal columns*/ gap="20px" /*Adds space between columns*/
        justifyContent="center" alignItems="center" paddingBottom= "50px" paddingTop= "15px"overflow="hidden">
        <ul>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
        </ul>
        <ul>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
        </ul>
        <ul>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
        </ul>
        <ul>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
          <Box >
            <VideoItem videoId = "c61Z1OILBgM&t=393s" width = "450px" height = "300px"/>
          </Box>
        </ul>
        
         
      </Box>
    </Box>
  );
}

export default FollowAlong;
