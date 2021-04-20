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

export const ContactDetails = () => {
  return (
    <>
      <Box maxW="800px" margin="auto" mb={4} mt={10}>
        <Flex
          direction="row"
          wrap="wrap"
          mt="50px"
          alignItems="flex-start"
          justify="space-evenly"
          marginX="auto"
        >
          <Flex direction="row" margin={2}>
            <Icon
              as={IoIosHome}
              w={10}
              h={10}
              color="rgb(69,139,116)"
              mr="4px"
            />
            <Flex direction="column" mr="40px">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small">
                    Anschrift
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <ListItem>
                    <Text>Praxis Roxi</Text>
                  </ListItem>
                  <Text>Kreuznacher Str. 345</Text>
                </ListItem>
                <ListItem as="div">
                  <Text>10123 Berlin</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
          <Flex direction="row" margin={2}>
            <Icon
              as={IoIosMail}
              w={10}
              h={10}
              color="rgb(69,139,116)"
              mr="4px"
            />
            <Flex direction="column" mr="50px">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small">
                    Web
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text>https://www.roxis-praxis.de</Text>
                </ListItem>
                <ListItem as="div">
                  <Text>kontakt@roxis-praxis.de</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
          <Flex direction="row" margin={2}>
            <Icon
              as={IoIosCall}
              w={10}
              h={10}
              color="rgb(69,139,116)"
              mr="4px"
            />
            <Flex direction="column" mr="50px">
              <List>
                <ListItem as="div">
                  <Heading as="h4" variant="small">
                    Telefon/Fax
                  </Heading>
                </ListItem>
                <ListItem as="div">
                  <Text>+49(0)172 123 456</Text>
                </ListItem>
                <ListItem as="div">
                  <Text>Fax: 0172 123 456</Text>
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
