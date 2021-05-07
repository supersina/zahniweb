import React from 'react';
import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const GridImgSimple = ({ data, boxHeight, children, ...props }) => {
  console.log('prophy daten', data);
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
              <Box
                height={boxHeight} //"200px"
                key={leistung.id}
                _hover={{ cursor: 'pointer' }}
                onClick={() =>
                  (window.location = `/leistungen/${leistung.name}`)
                }
              >
                <Box height="80%">
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
                    <Flex direction="row" justifyContent="space-around">
                      <Heading
                        as="h4"
                        variant="small"
                        m="0.5rem"
                        ml="1rem"
                        color={colors.buttonColor}
                      >
                        {leistung.title}
                      </Heading>
                      {/* <ButtonLink
                        size="xs"
                        title="mehr"
                        link={`/leistungen/${leistung.name}`}
                      ></ButtonLink> */}
                      {children}
                    </Flex>
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
