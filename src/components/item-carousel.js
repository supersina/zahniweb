import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { colors } from '../theme/colors';

export const ItemCarousel = ({ data, maxItemsToShow, children }) => {
  console.log(maxItemsToShow);
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 320, itemsToShow: 2, itemsToScroll: 1 },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: 1,
    },
    {
      width: 768,
      itemsToShow: 3,
      itemsToScroll: 2,
    },
    {
      width: 1200,
      itemsToShow: 4,
      itemsToScroll: 2,
    },
  ];
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {data.map(item => {
          return (
            <Box width="90%" height="280px" key={item.id}>
              <Box
                height="40%"
                backgroundImage={`url("${item.image}")`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              ></Box>
              <Box height="60%">
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="left"
                  bg={colors.secColor}
                  w="100%"
                  height="100%"
                >
                  <Box>
                    <Heading
                      as="h4"
                      variant="small"
                      m="0.5rem"
                      ml="1rem"
                      color={colors.buttonColor}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      m={2}
                      ml="1rem"
                      color="white"
                      variant="xsmall"
                      noOfLines={{ xs: 3, sm: 4, md: 5, lg: 5, xl: 5 }}
                    >
                      {item.description}
                    </Text>

                    {children}
                  </Box>
                  <Flex
                    marginRight="1rem"
                    marginLeft="1rem"
                    direction="row"
                    justify="flex-end"
                    wrap="wrap"
                  >
                    <Text
                      variant="xsmall"
                      color={colors.buttonColor}
                      marginRight="0.3rem"
                    >
                      PatientIn
                    </Text>
                    <Text variant="xsmall" color="white">
                      {item.name}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
