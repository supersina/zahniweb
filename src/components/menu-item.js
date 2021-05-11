import { Link, Text } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const MenuItem = ({ children, link = '/', ...props }) => {
  return (
    <>
      <Link
        href={link}
        _hover={{
          borderRadius: '0.5rem',
          boxShadow: '0 0 11px rgba(0,0,0,.4)',
        }}
        _focus={{
          borderRadius: '0.5rem',
          boxShadow: '0 0 11px rgba(0,0,0,.9)',
          //bg: colors.secColor,
        }}
      >
        <Text display="block" color="white" {...props}>
          {children}
        </Text>
      </Link>
    </>
  );
};
