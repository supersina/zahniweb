import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const ButtonLink = ({ title, link, ...props }) => {
  console.log(link);
  return (
    <>
      <Button
        variant="solid"
        bg={colors.buttonColor}
        color="white"
        //borderColor="rgb(150,200,150)"
        _hover={{ bg: colors.mainColor }}
        _focus={{}}
        size="lg"
        width="fit-content"
        //padding="1.5rem"
        marginTop="0.5rem"
        marginBottom="0.5rem"
        {...props}
      >
        <Link href={link} _hover={{}} _focus={{}}>
          <Text variant="small">{title}</Text>
        </Link>
      </Button>
    </>
  );
};
