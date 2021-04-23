import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box, Flex, Button, Heading, Link, Text } from '@chakra-ui/react';
import { leistungen } from '../data/data';

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 320, itemsToShow: 2, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 4 },
];

export const ItemCarousel = () => {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {leistungen.map(leistung => {
          return (
            <Flex
              direction="column"
              justifyContent="space-around"
              align-items="center"
              bg="rgb(150,200,150)"
              w="100%"
              h="250px"
              m={15}
              key={leistung.id}
            >
              <Box>
                <Box
                  h="90px"
                  backgroundImage={`url("${leistung.image}")`}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                ></Box>
                <Heading as="h4" variant="small" m={2} ml={4}>
                  {leistung.title}
                </Heading>
                <Text m={2} ml={4} noOfLines={3} variant="xsmall">
                  {leistung.description}
                </Text>
              </Box>
              <Box textAlign="center">
                <Button colorScheme="blue" variant="solid" size="sm" m={2}>
                  <Link href="" as="h2">
                    <Text>mehr </Text>
                  </Link>
                </Button>
              </Box>
            </Flex>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
