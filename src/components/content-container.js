import { Container } from '@chakra-ui/layout';

export const ContentContainer = ({ children }) => {
  return (
    <Container maxW="container.xl" width={['95%', '85%', '75%', '70%', '70%']}>
      {children}
    </Container>
  );
};
