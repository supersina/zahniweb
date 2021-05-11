import React from 'react';
import { Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const GridImg = ({ data, rowSpan, colSpan, ...props }) => {
  return (
    <>
      <Box marginBottom="2rem">
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap="0.3rem"
          borderColor={colors.mainColor}
          boxShadow={`${colors.bgColor} 1px 1px 15px 5px`} //</Box>rgba(49, 130, 206, 0.5) 1px 1px 15px 5px"
          //background={colors.buttonColor}
          //border={`1rem solid ${colors.buttonColor}`}
          //border={`20px groove ${colors.buttonColor}`}
          //borderRadius="0.3rem"
          padding="0.3rem"
          {...props}
        >
          {data.map((entry, index) => {
            return (
              <GridItem
                rowSpan={rowSpan[index]}
                colSpan={colSpan[index]}
                bg={colors.bgColor}
                key={entry.id}
                _hover={{ cursor: 'pointer' }}
                onClick={() => {}}
              >
                <Image
                  src={entry.image}
                  alt="gridimg"
                  objectFit="cover"
                  h="200px"
                  width="100%"
                ></Image>
              </GridItem>
            );
          })}
          {/*   <GridItem
            rowSpan={1}
            colSpan={2}
            bg={colors.bgColor}
            _hover={{ cursor: 'pointer' }}
            onClick={() => {}}
          >
            <Image
              src={data[0].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" _hover={{ cursor: 'pointer' }}>
            <Image
              src={data[1].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip" _hover={{ cursor: 'pointer' }}>
            <Image
              src={data[2].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            bg="tomato"
            _hover={{ cursor: 'pointer' }}
          >
            <Image
              src={data[3].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
          <GridItem colSpan={4} bg="tomato" _hover={{ cursor: 'pointer' }}>
            <Image
              src={data[4].image}
              alt="gridimg"
              objectFit="cover"
              h="200px"
              width="100%"
            ></Image>
          </GridItem>
 */}{' '}
        </Grid>
      </Box>
    </>
  );
};
