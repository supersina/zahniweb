import React from 'react';
import { Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const GridImg = ({ data, ...props }) => {
  return (
    <>
      <Box marginBottom="2rem">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap="0.3rem"
          background={colors.buttonColor}
          //border={`1rem solid ${colors.buttonColor}`}
          border={`20px groove ${colors.buttonColor}`}
          //borderRadius="0.3rem"
          padding="0.3rem"
          {...props}
        >
          <GridItem rowSpan={1} colSpan={2} bg={colors.bgColor}>
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
