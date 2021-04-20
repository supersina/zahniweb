import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const Sprechzeiten = ({ ...props }) => {
  return (
    <>
      <Box ml={15} mr={15}>
        <Heading as="h4" variant="small" mt={6} mb={3} {...props}>
          Sprechzeiten
        </Heading>
        <Flex direction="row" flex-wrap="wrap" w="300px" bg="transparent">
          <Flex
            direction="column"
            flex-flow="column wrap"
            align="stretch"
            justify="space-between"
            wrap="wrap"
            w="300px"
            mb={5}
            {...props}
          >
            <Text variant="xsmall" m={1}>
              Mo-Mi
            </Text>
            <Text variant="xsmall" m={1}>
              Do-Fr
            </Text>
            <Text variant="xsmall" m={1}>
              Sa-So
            </Text>
          </Flex>
          <Flex
            direction="column"
            flex-flow="column wrap"
            align="stretch"
            justify="space-between"
            wrap="wrap"
            w="400px"
            mb={5}
            {...props}
          >
            <Text variant="xsmall" m={1}>
              9:00 - 15:00 Uhr
            </Text>
            <Text variant="xsmall" m={1}>
              9:00 - 15:00 Uhr
            </Text>
            <Text variant="xsmall" m={1}>
              geschlossen
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
