import React from 'react';
import '../../App.css';
import {Box, Text} from "@chakra-ui/react";
import FullScreen from '../FullScreen';
import BlogItem from '../BlogItem';

import img from '../images/MAN06590.JPG' // import image1 from '../images/MAN05714.JPG'

function About() {
  return (
    <FullScreen display="flex" footerHeight={90} justifyContent="center" alignItems="center" backgroundColor="#ebeff3;">
      <Box margin = "0" padding = "0" height = "80px"></Box> {/**keep the margin at the top for mobile: prevent the portrait cutting off*/}
      <div className = "blogitem__wrapper" >
        <BlogItem
          src={img}
          title = "Founder, Jie Gu"
          desc = "At the Tai-Chi Club, our dedication to spreading joy and wellness through group practice is paramount. 
          Free learning access to this ancient art form is offered biweekly with competition 
          standards upheld in sessions. Since the club’s inception in Spring 2023, hundreds 
          have participated the public sessions at different locations. Everyone is welcome 
          to join and learn or join and help. Let’s join hands and champion our public Tai-Chi initiative:" 
        />
        <Text margin ={"0 0 1rem"} padding = {"0 1rem"}>
          <h4 style = {{fontSize : "1.25rem", textAlign: 'center'}}>
            Embarking on the Tai Chi Journey, diligence we sow <br></br> 
            Embracing in Yin and Yang’s flow, wisdom gracefully grow <br></br>
            Flourishing group connection, friendship ever glow
          </h4>
        </Text>
      </div>
      
    </FullScreen>
  );
}

export default About;

