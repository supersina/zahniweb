import { Link, Text } from '@chakra-ui/react';

export const MenuItem = ({ children, link = '/', ...props }) => {
  return (
    <>
      <Link href={link}>
        <Text display="block" color="white" {...props}>
          {children}
        </Text>
      </Link>
    </>
  );
};
