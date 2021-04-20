import React from 'react';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { IoMdFootball } from 'react-icons/io';

import { Sprechzeiten } from './sprechzeiten-block';

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
        //position="fixed"
        top="0"
        //bg={`linear-gradient(rgba(300,300,300,0.3),rgba(300,300,300,0.3))`}
        bg="rgb(150,200,150)"
      >
        <Sprechzeiten />
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OvkcWyOmd3paozcdWY9aO7dz2ARXs1EuMg&usqp=CAU"
            //height="50px"
            alt="Logo"
            m={2}
            borderRadius="full"
            boxSize="80px"
          ></Image>
        </Box>

        <Text variant="xsmall">
          ©2021 Praxis Roxi | Designed with{' '}
          <Icon as={IoMdFootball} w={6} h={6} color="black" mr="4px"></Icon> by
          Sina
        </Text>
      </Flex>
    </>
  );
};
