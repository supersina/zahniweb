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
      <Box maxW="100%" mb={4} mt={10}>
        <Flex
          direction={{
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row,',
          }}
          wrap="wrap"
          alignItems="center"
          justifyContent="center"
          marginX="auto"
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
            <Flex direction="column" mr="0.1rem">
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
                  <Text variant="xsmall">Kreuznacher Str. 345</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">10123 Berlin</Text>
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
            <Flex direction="column" mr="50px">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small" color={colors.secColor}>
                    Web
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">https://www.roxis-praxis.de</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">kontakt@roxis-praxis.de</Text>
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
            <Flex direction="column" mr="50px">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small" color={colors.secColor}>
                    Telefon/Fax
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">+49(0)172 123 456</Text>
                </ListItem>
                <ListItem as="div">
                  <Text variant="xsmall">Fax: 0172 123 456</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
