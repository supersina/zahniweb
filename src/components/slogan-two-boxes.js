import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const SloganTwoBoxes = ({ text1, text2, ...props }) => {
  return (
    <Flex
      height="100%"
      width="100%"
      justify="flex-end"
      alignItems="flex-end"
      padding={{ base: 8, md: 20 }}
    >
      <Flex
        height="fit-content"
        width="fit-content"
        direction="column"
        {...props}
      >
        <Flex>
          <Heading
            as="h1"
            bg={colors.mainColor}
            variant="xlarge"
            fontSize={{ base: '1.4rem', sm: '2rem', md: '2rem', xl: '2.5rem' }}
            color="white"
          >
            {text1}
          </Heading>
        </Flex>
        <Flex>
          <Heading
            as="h1"
            bg={colors.mainColor}
            variant="xlarge"
            fontSize={{ base: '1.4rem', sm: '2rem', md: '2rem', xl: '2.5rem' }}
            color="white"
          >
            {text2}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
