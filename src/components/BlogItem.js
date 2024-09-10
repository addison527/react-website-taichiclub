import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

function BlogItem(props) {
  const newline = props.h4 ? props.h4.split('\n') : []; //h4 is the name of the prop

  return (
    <>
    <VStack spacing = {'0'} marginBottom = '20px' maxWidth={"1220px"} >
        <VStack maxWidth={"968px"}padding = "1rem 1rem" height={'auto'} bg = '#CED5DF' width={"80vw"} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign ='center' borderRadius={'3px'}>
            <img
            alt='Taichi-Image'
            src={props.src}
            style ={{borderRadius : "4px", height: "40vh", overflow: "hidden", position: "relative", 
            width : "100%", display: "flex", flexFlow: "column", objectFit: 'cover'}}
            />
        </VStack>
        <Box maxWidth={"968px"} padding = "0 1rem" height={'auto'} bg = '#ebeff3'width={"80vw"} display={'flex'} justifyContent={'center'} alignItems = {'center'} textAlign ='center' borderRadius ={'3px'}>
        <Text marginTop = "0" marginBottom={"0"}>
            {/**For Philosophy Page Use */}
            <h3>{props.title}</h3>
            <p>{props.text}</p>

            {/**For about page use*/}
            <p style = {{fontSize : "1.12rem"}}>{props.desc}</p>
            <h4 style = {{fontSize : "1.25rem"}}> 
              {newline.map((line, index)=>(
                <React.Fragment key = {index}> {line}{index < newline.length - 1 && <br/>} 
                </React.Fragment>))
              }
            </h4>
        </Text>
        </Box>
    </VStack>
    </>
  );
}
 export default BlogItem;