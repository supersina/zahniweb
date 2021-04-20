import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Article = ({ data, children }) => {
  return (
    <>
      {data.map((entry, index) => {
        const isRowReverse = index % 2 !== 0;
        return (
          <Flex
            direction={isRowReverse ? 'row-reverse' : 'row'}
            justify="center"
            wrap="wrap"
            key={entry.index}
          >
            <Box p={{ base: '8', sm: '4', md: '6', lg: '8' }} boxSize="50%">
              <Image
                boxSize="100%"
                objectFit="cover"
                src={entry.image}
                alt={entry.name}
              ></Image>
            </Box>
            <Box boxSize="50%" p={8}>
              <Box>
                <Heading as="h2" variant="medium">
                  {entry.title}
                </Heading>

                <Text>{entry.introduction}</Text>
              </Box>
              {children}
            </Box>
          </Flex>
        );
      })}
    </>
  );
};
