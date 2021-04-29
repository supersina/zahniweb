import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { leistungen } from '../data/leistungenInfo';

import { colors } from '../theme/colors';
import { ButtonLink } from './buttonLink';

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
              bg={colors.secColor}
              w="100%"
              h="16rem" //"250px"
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
                <Heading
                  as="h4"
                  variant="small"
                  m="0.5rem"
                  ml="1rem"
                  color={colors.buttonColor}
                >
                  {leistung.title}
                </Heading>
                <Text
                  m={2}
                  ml="1rem"
                  noOfLines={3}
                  variant="xsmall"
                  color="white"
                >
                  {leistung.description}
                </Text>
              </Box>
              <Box textAlign="center">
                <ButtonLink size="xs" title="mehr"></ButtonLink>
              </Box>
            </Flex>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
