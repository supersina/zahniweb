import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';

export const navbarHeight = '64px';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        flex-flow="row wrap"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        position="absolute"
        top="0"
        h={navbarHeight}
        bg={`linear-gradient(rgba(200,200,200,0.9),rgba(200, 200, 200,0.2))`}
      >
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OvkcWyOmd3paozcdWY9aO7dz2ARXs1EuMg&usqp=CAU"
            //height="50px"
            alt="Logo"
            m={2}
            borderRadius="full"
            boxSize="50px"
          ></Image>
        </Box>
        <Flex direction="row" justify-content="flex-end" mr={10}>
          <List>
            <ListItem display="inline-block" margin="0 1rem">
              <Heading as="p" variant="small">
                <Link href="/home">Home</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 1rem">
              <Heading as="p" variant="small">
                <Link href="/praxis">Unsere Praxis</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 1rem">
              <Heading as="p" variant="small">
                <Link href="/leistungen">Unsere Leistungen</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 1rem">
              <Heading as="p" variant="small">
                <Link href="/kontakt">Kontakt</Link>
              </Heading>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </>
  );
};
