import { Container } from '@chakra-ui/layout';

export const ContentContainer = ({ children }) => {
  return <Container maxW="container.xl">{children}</Container>;
};
