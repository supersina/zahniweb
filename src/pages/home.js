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
import { colors } from '../theme/colors';
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
        <Flex direction="column" justify="center" mb={10}>
          <Heading as="h1" variant="large">
            Herzlich Willkommen in der Praxis Nowak!
          </Heading>
          <Text>
            In einer modernen Berliner Praxis sorgt unser Team aus zwei
            Zahnärztinnen und drei Arzthelferinnen für die Gesundheit Ihrer
            Zähne. Wir sind bestens ausgebildet und bilden uns regelmäßig fort,
            um Sie auf dem neuesten Stand der Wissenschaft behandeln zu können.
            Damit sind Sie und Ihre Zähne bei uns bestens aufgehoben.
          </Text>
          <Text marginTop="0.5rem">
            Kontaktieren Sie uns oder vereinbaren Sie direkt einen Termin.
          </Text>
          <Flex
            //flex-flow="row wrap"
            //align="center"
            //justify="space-evenly"
            direction="row"
            justify="space-around"
            wrap="wrap"
            align="center"
            mt="2rem"
            pr="2rem"
            pl="2rem"
            bg={colors.secColor}
          >
            <Sprechzeiten color="white"></Sprechzeiten>
            <Flex direction="column">
              <ButtonLink
                title={'Online Termin'}
                link={'https://doctolib.de'}
              ></ButtonLink>
              <ButtonLink title={'Kontakt'} link={'/kontakt'}></ButtonLink>
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
        <Article data={praxisInfo.basics}></Article>
        <Box mt={10}>
          <Heading as="h2" variant="large" width="fit-content">
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
