import React from 'react';
import { Box } from '@chakra-ui/react';

export const BgBox = ({ imgLink }) => {
  return (
    <Box
      backgroundImage={imgLink}
      //background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("your_image.png");
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      //boxSize="100%"
      height="70vh"
      backgroundSize="cover"
    ></Box>
  );
};
