import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const Sprechzeiten = ({ ...props }) => {
  return (
    <>
      <Box>
        <Heading as="h4" variant="small" {...props}>
          Sprechzeiten
        </Heading>
        <Flex direction="row" flex-wrap="wrap" bg="transparent">
          <Flex
            direction="column"
            flex-flow="column wrap"
            align="flex-start"
            justify="space-between"
            wrap="wrap"
            w="5rem"
            marginBottom="1rem"
            {...props}
          >
            <Text variant="xsmall">Mo-Mi</Text>
            <Text variant="xsmall">Do-Fr</Text>
            <Text variant="xsmall">Sa-So</Text>
          </Flex>
          <Flex
            direction="column"
            flex-flow="column wrap"
            align="flex-start"
            justify="space-between"
            wrap="wrap"
            w="7.5rem"
            marginBottom="1rem"
            {...props}
          >
            <Text variant="xsmall">9:00 - 18:00 Uhr</Text>
            <Text variant="xsmall">9:00 - 16:00 Uhr</Text>
            <Text variant="xsmall">geschlossen</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
