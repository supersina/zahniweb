import { Flex } from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      backgroundColor={colors.mainColor}
      p={{ base: 2, sm: 2 }}
      pr={{ base: 2, sm: 8 }}
      {...props}
    >
      {children}
    </Flex>
  );
};
