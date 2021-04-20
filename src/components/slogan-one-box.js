import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export const SloganOneBox = ({ text1, ...props }) => {
  return (
    <Box position="absolute" align="right" top="10vh" right="10vw" {...props}>
      <Box
        bg={`linear-gradient(rgba(150,200,150,1), rgba(150,200,150,1))`}
        height="fit-content"
        width="fit-content"
        mt="420px"
      >
        <Heading as="h1" variant="xlarge" p="10px" ml="50px" mr="50px">
          {text1}
        </Heading>
      </Box>
    </Box>
  );
};
