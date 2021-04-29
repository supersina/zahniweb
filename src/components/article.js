import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const Article = ({ data, transform, children, ...props }) => {
  return (
    <>
      {data.map((entry, index) => {
        //const isRowReverse = index % 2 !== 0;
        return (
          <Box marginBottom="2rem" key={index}>
            <Heading as="h2" variant="large">
              {entry.title}
            </Heading>
            <Flex
              //direction={isRowReverse ? 'row-reverse' : 'row'}
              direction="row"
              justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'space-between',
                lg: 'space-between',
                xl: 'space-between',
              }}
              wrap="wrap"
              {...props}
            >
              <Box
                //background="rgba(69,139,116)"
                width={{
                  xs: '75%',
                  sm: '75%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                }}
                height="fit-content"
                //transform= "rotate(-1.5deg)"
                transform={transform}
                p={{ base: '1rem', sm: '4', md: '4', lg: '6' }}
                //background={colors.mainColor}
              >
                <Image
                  boxSize="50vw"
                  maxHeight="400px"
                  objectFit="cover"
                  src={entry.image}
                  alt={entry.name}
                  //border="0.5rem solid"
                  //borderRadius="3rem 3rem 3rem 3rem"
                  borderColor={colors.mainColor}
                  boxShadow="rgba(49, 130, 206, 0.5) 1px 1px 15px 5px"
                  margin="auto"
                ></Image>
              </Box>
              <Box
                width={{
                  xs: '100%',
                  sm: '100%',
                  md: '60%',
                  lg: '60%',
                  xl: '60%',
                }}
                p={{ base: '2', sm: '2', md: '4', lg: '6' }}
              >
                <Box>
                  <Text>{entry.text}</Text>
                </Box>

                {children}
              </Box>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};
