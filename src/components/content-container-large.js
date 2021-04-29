import React from 'react';
import { Box } from '@chakra-ui/react';

export const ContentContainerLarge = ({ children }) => {
  return (
    <Box paddingTop="1rem" paddingBottom="1rem">
      {children}
    </Box>
  );
};
