import React from 'react';
import { Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', sm: 'none' }} onClick={toggle} pr={4}>
      {isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
    </Box>
  );
};
