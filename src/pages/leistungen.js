import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import BgImage from '../images/leistungen.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';
import { leistungenInfo } from '../data/leistungenInfo';
import { leistungenDetails } from '../data/leistungenInfo';

import { GridImgSimple } from '../components/grid-img-simple';

export const LeistungenPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Leistungen'} />
      </HeroImage>
      <ContentContainer>
        <Flex direction="column" wrap="column" justify="center">
          <Heading as="h1" variant="large">
            {leistungenInfo.title}
          </Heading>
          <Text>{leistungenInfo.text2}</Text>
        </Flex>
      </ContentContainer>
      <ContentContainer>
        <GridImgSimple
          data={leistungenDetails}
          minChildWidth="200px"
          boxHeight="200px"
        ></GridImgSimple>
      </ContentContainer>
    </>
  );
};
