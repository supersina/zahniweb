import React from 'react';
import { Box, Image, Grid, GridItem } from '@chakra-ui/react';

export const GridImg = ({ data, ...props }) => {
  return (
    <>
      <Box p="2rem" background="rgb(150,200,150)">
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
          {...props}
        >
          <GridItem rowSpan={1} colSpan={2} bg="rgb(69,139,116)">
            <Image
              src={data[0].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
            <Image
              src={data[1].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
            <Image
              src={data[2].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2} bg="tomato">
            <Image
              src={data[3].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={4} bg="tomato">
            <Image
              src={data[4].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
