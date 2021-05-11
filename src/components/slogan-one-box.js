import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const SloganOneBox = ({ text1, ...props }) => {
  return (
    <Flex
      height="100%"
      width="100%"
      justify="flex-end"
      alignItems="flex-end"
      padding={{ base: 8, md: 20 }}
    >
      <Flex height="fit-content" width="fit-content" {...props}>
        <Heading
          as="h1"
          bg={colors.mainColor}
          variant="xlarge"
          fontSize={{ base: '2rem', sm: '2.5rem', md: '3rem', xl: '3.5rem' }}
          color="white"
        >
          {text1}
        </Heading>
      </Flex>
    </Flex>
  );
};
