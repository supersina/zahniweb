import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

export const Logo = ({ ...props }) => {
  return (
    <>
      <Box>
        <Link href="/home">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OvkcWyOmd3paozcdWY9aO7dz2ARXs1EuMg&usqp=CAU"
            //height="50px"
            alt="Logo"
            m={2}
            borderRadius="full"
            boxSize="50px"
            {...props}
          ></Image>
        </Link>
      </Box>{' '}
    </>
  );
};
