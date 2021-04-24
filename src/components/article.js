import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Article = ({ data, children, ...props }) => {
  return (
    <>
      {data.map((entry, index) => {
        //const isRowReverse = index % 2 !== 0;
        return (
          <Box marginBottom="2rem" key={index}>
            <Heading
              as="h2"
              variant="large"
              //bg="rgba(69,139,116)"
              padding="4px"
            >
              {entry.title}
            </Heading>
            <Flex
              //direction={isRowReverse ? 'row-reverse' : 'row'}
              direction="row"
              justify="center"
              wrap="wrap"
              {...props}
            >
              <Box
                width={{
                  xs: '100%',
                  sm: '100%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                }}
                p={{ base: '2', sm: '2', md: '4', lg: '6' }}
              >
                <Image
                  boxSize="50vw"
                  maxHeight="400px"
                  objectFit="cover"
                  src={entry.image}
                  alt={entry.name}
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
              </Box>
            </Flex>

            {children}
          </Box>
        );
      })}
    </>
  );
};
