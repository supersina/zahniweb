import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';

export const ButtonLink = ({ title, link, ...props }) => {
  console.log(link);
  return (
    <>
      <Button
        variant="solid"
        bg="rgba(69,139,116)"
        color="white"
        //borderColor="rgb(150,200,150)"
        _hover={{ bg: 'rgba(150,200,150)' }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(150,200,150), 0 1px 1px rgba(150,200,150, .15)',
        }}
        size="lg"
        maxW="20rem"
        padding="1.5rem"
        {...props}
        //bottom="20px"
        //position="absolute"
      >
        <Link href={link} style={{ textDecoration: 'none' }}>
          <Text>{title}</Text>
        </Link>
      </Button>
    </>
  );
};
