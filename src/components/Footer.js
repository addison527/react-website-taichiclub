import React from "react";
import {Box, Flex, Text, HStack} from "@chakra-ui/react";
import seal from './images/seal.png';
import emailicon from './images/mail-open.svg';

const Footer = () => {
  return (
    <Box backgroundColor="#CED5DF" height={{ base: 'auto', md: '80px' }} padding={{ base: '4', md: '4' }} marginTop="auto" >
      <footer>
        <Flex direction="row" wrap="wrap" justifyContent="space-between" alignItems="center" maxWidth="1024px" margin="0 auto" padding="4"  style ={{fontFamily: 'Times New Roman'}}>
          <HStack spacing = "4" alignItems="center">
            <img
              src={seal}
              alt="logo"
              style={{ width: '25px', height: 'auto' }}
            />
            <Text align="center">
              <p> The TaiChi Club © 2024</p>
            </Text>
          </HStack>
          <HStack spacing="4" alignItems="center">
            <img
              src={emailicon}
              alt="Email Icon"
              style={{ width: '18px' }}
            />
            <Text> <p>Jie@manfamily.net</p> </Text>
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;