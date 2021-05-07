import React, { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const Clock = ({ children, ...props }) => {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const handleClock = () => {
    setTimeout(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);
  };

  return (
    <Flex direction="row" justify="space-around" align="center">
      <Heading
        as="p"
        variant="small"
        width="12rem"
        margin="0px"
        onLoad={handleClock()}
        {...props}
      >
        {currentDate}
      </Heading>
      {children}
    </Flex>
  );
};
