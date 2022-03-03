import { Link, Text } from '@chakra-ui/react';

export const MenuItem = ({ children, link = '/', ...props }) => {
  return (
    <>
      <Link href={link} _hover={{}} _focus={{}}>
        <Text display="block" color="white" {...props}>
          {children}
        </Text>
      </Link>
    </>
  );
};
