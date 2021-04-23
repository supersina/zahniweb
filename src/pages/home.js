import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import BgImage from '../images/bg-haus.png';
import { SloganTwoBoxes } from '../components/slogan-two-boxes';
import { ButtonLink } from '../components/buttonLink';
import { Sprechzeiten } from '../components/sprechzeiten-block';
//import { ContactDetails } from '../components/contact-details';
import { ItemCarousel } from '../components/item-carousel';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';
import { praxisInfo } from '../data/praxisInfo';
import { Article } from '../components/article';
//import { Text } from '../components/custom-text';

export const HomePage = () => {
  return (
    <>
      {/* Background Image */}
      <HeroImage bgImage={BgImage}>
        <SloganTwoBoxes
          text1={'Wir sind da.'}
          text2={'Für Sie und Ihr Lächeln.'}
        />
      </HeroImage>

      {/* Introduction */}
      <ContentContainer>
        <Flex direction="column" wrap="column" justify="center" mb={10}>
          <Heading as="h1" variant="large" mt={10}>
            Herzlich Willkommen in der Praxis Nowak!
          </Heading>
          <Text mt={4}>
            In einer modernen Berliner Praxis sorgt unser Team aus zwei
            Zahnärztinnen und drei Arzthelferinnen für die Gesundheit Ihrer
            Zähne. Wir sind bestens ausgebildet und bilden uns regelmäßig fort,
            um Sie auf dem neuesten Stand der Wissenschaft behandeln zu können.
            Damit sind Sie und Ihre Zähne bei uns bestens aufgehoben.
          </Text>
          <Text mt={4}>
            Kontaktieren Sie uns oder vereinbaren Sie direkt einen Termin.
          </Text>
          <Flex
            flex-flow="row wrap"
            align="center"
            justify="space-evenly"
            wrap="wrap"
            mt={10}
            bg="gray.100"
          >
            <Sprechzeiten></Sprechzeiten>
            <Flex direction="column">
              <ButtonLink
                title={'Online Termin'}
                link={'https://doctolib.de'}
                margin={1}
              ></ButtonLink>
              <ButtonLink
                title={'Kontakt'}
                link={'/kontakt'}
                margin={1}
              ></ButtonLink>
            </Flex>
          </Flex>
        </Flex>
      </ContentContainer>

      {/* Contact Details */}
      {/* <Box width="100%" bg="rgb(150,200,150)">
        <ContactDetails></ContactDetails>
      </Box> */}

      {/* Leistungen */}

      <ContentContainer>
        <Article data={praxisInfo}></Article>
        <Box mt={10}>
          <Heading as="h2" variant="large" width="fit-content" padding={2}>
            Unsere Leistungen
          </Heading>
          <Text>
            Wir bieten Ihnen alle gängigen Behandlungen an. Prophylaxe,
            Zahnersatz, Pi, Pa, Po. Machen wir alles. Besonders spezialisiert
            sind wir auf Zahnersatz. Hier arbeiten wir nur mit den besten
            Materialien.
          </Text>
          <Box w="100%" marginX="auto" mt={5} mb={10}>
            <ItemCarousel />
          </Box>
        </Box>
      </ContentContainer>
    </>
  );
};
