import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';

export const ButtonLink = ({ title, link, ...props }) => {
  console.log(link);
  return (
    <>
      <Button
        colorScheme="blue"
        variant="solid"
        size="lg"
        maxW="200px"
        {...props}
        //bottom="20px"
        //position="absolute"
      >
        <Link href={link} as="h2">
          <Text>{title}</Text>
        </Link>
      </Button>
    </>
  );
};
