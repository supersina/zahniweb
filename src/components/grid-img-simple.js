import React from 'react';
import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const GridImgSimple = ({ data, children, ...props }) => {
  return (
    <>
      <Box marginBottom="2rem">
        <SimpleGrid
          minChildWidth="200px"
          spacing="0.8rem"
          padding="0.3rem"
          {...props}
        >
          {data.map(leistung => {
            return (
              <Box height="200px">
                <Box
                  height="80%"
                  backgroundImage={`url("${leistung.image}")`}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Image
                    src={leistung.image}
                    alt="gridimg"
                    objectFit="cover"
                    h="100%"
                    width="100%"
                  ></Image>
                </Box>
                <Box height="20%">
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    alignItems="left"
                    bg={colors.secColor}
                    w="100%"
                    height="100%"
                  >
                    <Box>
                      <Heading
                        as="h4"
                        variant="small"
                        m="0.5rem"
                        ml="1rem"
                        color={colors.buttonColor}
                      >
                        {leistung.title}
                      </Heading>

                      {children}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
