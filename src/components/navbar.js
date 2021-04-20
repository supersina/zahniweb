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
        bg={`linear-gradient(rgba(300,300,300,0.3),rgba(300,300,300,0.3))`}
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
            <ListItem display="inline-block" margin="0 20px">
              <Heading as="h2" variant="small">
                <Link href="/home">Home</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 20px">
              <Heading as="h2" variant="small">
                <Link href="/team">Unser Team</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 20px">
              <Heading as="h2" variant="small">
                <Link href="/leistungen">Unsere Leistungen</Link>
              </Heading>
            </ListItem>
            <ListItem display="inline-block" margin="0 20px">
              <Heading as="h2" variant="small">
                <Link href="/kontakt">Kontakt</Link>
              </Heading>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </>
  );
};
