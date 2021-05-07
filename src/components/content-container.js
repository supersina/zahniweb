import { Container } from '@chakra-ui/layout';

export const ContentContainer = ({ children }) => {
  return (
    <Container
      maxW="container.xl"
      width={['95%', '95%', '75%', '70%', '70%']}
      marginTop="1.5rem"
    >
      {children}
    </Container>
  );
};
