import React from 'react';
import FullScreen from '../FullScreen';
import {Text} from "@chakra-ui/react";
import BlogItem from '../BlogItem';
import img from '../images/Test.webp'; // import img2 from '../images/IMG_9991.jpg';

const Blogs = () => {
  return (
    <FullScreen footerHeight={90} display = "flex" flexDirection = "column" alignItems={"center"}justifyContent = {"center"}>
      <Text marginTop = '6vh' marginBottom = "0" padding = "0"><h1>Tai-Chi Philosophy and Blogs</h1></Text>
      <div className = "blogitem__wrapper" flex = '1' style ={{color: '#234f72'}} alignItems={"center"} justifyContent = {"center"} maxWidth ={"1220px"}>
        <BlogItem
          src={img}
          title = "The Art of Yin and Yang"
          desc="The Yin-Yang theory is an early precursor to theory of relativity. Yin and Yang is the unity of opposites. The world is composed of opposites, 
          like water and stone, one of the softest and one of the hardest elements. Flowing water can break stone, and stone can block flowing water. Together,
          they harmoniously form a mountain surrounded by lake or vice versa. It is a balance of the opposite, often a harmonious beautiful scene."
        />
        {/**Can add more blog items down here dynamically */}
      </div>
    </FullScreen> 
  );
};

export default Blogs;
