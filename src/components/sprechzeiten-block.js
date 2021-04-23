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
            <Text variant="xsmall">Mo-Mi</Text>
            <Text variant="xsmall">Do-Fr</Text>
            <Text variant="xsmall">Sa-So</Text>
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
            <Text variant="xsmall">9:00 - 15:00 Uhr</Text>
            <Text variant="xsmall">9:00 - 15:00 Uhr</Text>
            <Text variant="xsmall">geschlossen</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
