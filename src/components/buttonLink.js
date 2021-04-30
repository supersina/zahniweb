import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const ButtonLink = ({ title, link, ...props }) => {
  return (
    <>
      <Button
        variant="solid"
        bg={colors.buttonColor}
        color="white"
        //borderColor="rgb(150,200,150)"
        _hover={{ bg: colors.mainColor }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(150,200,150), 0 1px 1px rgba(150,200,150, .15)',
        }}
        size="lg"
        width="fit-content"
        //padding="1.5rem"
        marginTop="0.5rem"
        marginBottom="0.5rem"
        {...props}
      >
        <Link href={link} style={{ textDecoration: 'none' }}>
          <Text variant="small">{title}</Text>
        </Link>
      </Button>
    </>
  );
};
