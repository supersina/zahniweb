import React from 'react';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { IoMdFootball } from 'react-icons/io';

import { Sprechzeiten } from './sprechzeiten-block';
import { colors } from '../theme/colors';

export const Footer = () => {
  return (
    <>
      <Flex
        as="footer"
        flex-flow="row wrap"
        align="center"
        justify="space-evenly"
        wrap="wrap"
        w="100%"
        top="0"
        bg={colors.mainColor}
      >
        <Sprechzeiten color="white" />
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OvkcWyOmd3paozcdWY9aO7dz2ARXs1EuMg&usqp=CAU"
            alt="Logo"
            m={2}
            borderRadius="full"
            boxSize="80px"
          ></Image>
        </Box>

        <Text variant="xsmall" color="white">
          ©2022 Praxis Roxi | Designed with{' '}
          <Icon
            as={IoMdFootball}
            w={6}
            h={6}
            color={colors.buttonColor}
            mr="4px"
          ></Icon>{' '}
          by Sina
        </Text>
      </Flex>
    </>
  );
};
