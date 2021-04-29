import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const SloganOneBox = ({ text1, ...props }) => {
  return (
    <Box position="absolute" align="right" top="10vh" right="10vw" {...props}>
      <Box
        bg={colors.mainColor}
        height="fit-content"
        width="fit-content"
        mt="420px"
      >
        <Heading
          as="h1"
          variant="xlarge"
          p="10px"
          ml="50px"
          mr="50px"
          color="white"
        >
          {text1}
        </Heading>
      </Box>
    </Box>
  );
};
