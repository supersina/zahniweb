import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const SloganTwoBoxes = ({ text1, text2, ...props }) => {
  return (
    <Box position="absolute" align="right" top="60vh" right="10vw" {...props}>
      <Box
        //bg={`linear-gradient(rgba(69,139,116,0.7), rgba(69,139,116,0.7))`}
        //bg="rgba(69,139,116)"
        background={colors.mainColor}
        height="fit-content"
        width="fit-content"
      >
        <Heading as="h1" variant="xlarge" m="15px" color="white">
          {text1}
        </Heading>
      </Box>
      <Box
        //bg="rgba(150,200,150)"
        background={colors.secColor}
        height="fit-content"
        width="fit-content"
      >
        <Heading
          as="h1"
          variant="xlarge"
          m="15px"
          ml="30px"
          mr="30px"
          color="white"
        >
          {text2}
        </Heading>
      </Box>
    </Box>
  );
};
