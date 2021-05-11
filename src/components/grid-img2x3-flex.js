import React from 'react';
import { colors } from '../theme/colors';
import { Box, Grid } from '@chakra-ui/react';
import { GridItemWrapper } from './grid-item-wrapper';

export const GridImg = ({ data, rowSpan, colSpan, ...props }) => {
  return (
    <>
      {/* <Button onClick={onOpen}>click me</Button> */}
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
              <GridItemWrapper
                entry={entry}
                rowSpan={rowSpan[index]}
                colSpan={colSpan[index]}
                key={entry.id}
              ></GridItemWrapper>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
