import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { IoIosCall, IoIosHome, IoIosMail } from 'react-icons/io';
import { colors } from '../theme/colors';

export const ContactDetails = () => {
  return (
    <>
      <Box maxW="100%" marginX="auto" mb={4} mt={10}>
        <Flex
          direction={{
            xs: 'row',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row,',
          }}
          wrap="wrap"
          alignItems={{
            base: 'flex-start',
            sm: 'flex-start',
            md: 'flex-start',
          }}
          justifyContent="center"
        >
          <Flex direction="row" margin={2} align="flex-start">
            <Icon
              as={IoIosHome}
              width={10}
              height={10}
              color={colors.buttonColor}
              mr="0.1rem"
              marginTop="0.3rem"
            />
            <Flex direction="column" mr="0.2rem">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small" color={colors.secColor}>
                    Anschrift
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <ListItem>
                    <Text variant="xsmall">Praxis Roxi</Text>
                  </ListItem>
                  <Text variant="xsmall">Zahnistr. 345</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">11111 Berlin</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
          <Flex direction="row" margin={2} align="flex-start">
            <Icon
              as={IoIosMail}
              width={10}
              height={10}
              color={colors.buttonColor}
              mr="0.1rem"
              marginTop="0.3rem"
            />
            <Flex direction="column" mr="0.2rem">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small" color={colors.secColor}>
                    Web
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">roxis-praxis.netlify.app</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">nomailto@testtest.de</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
          <Flex direction="row" margin={2}>
            <Icon
              as={IoIosCall}
              width={10}
              height={10}
              color={colors.buttonColor}
              mr="0.1rem"
              marginTop="0.3rem"
            />
            <Flex direction="column" mr="0.2rem">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small" color={colors.secColor}>
                    Telefon/Fax
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">+49(0)123 123 456</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">Fax: 0123 123 456</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
