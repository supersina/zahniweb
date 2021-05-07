import { Box } from '@chakra-ui/layout';
import { navbarHeight } from './navbar';

export const HeroImage = ({ children, bgImage }) => {
  return (
    <>
      <Box
        backgroundImage={`linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)),url("${bgImage}")`}
        //background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("your_image.png");
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        //boxSize="100%"
        height="600px"
        width="100%"
        backgroundSize="cover"
        pt={navbarHeight}
        mb={10}
      >
        {children}
      </Box>
    </>
  );
};
