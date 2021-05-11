import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import BgImage from '../images/bg-haus.png';
import { SloganTwoBoxes } from '../components/slogan-two-boxes';
import { ButtonLink } from '../components/buttonLink';
import { Sprechzeiten } from '../components/sprechzeiten-block';
//import { ContactDetails } from '../components/contact-details';
import { ItemCarousel } from '../components/item-carousel';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';
import { Article } from '../components/article';

import { praxisInfo } from '../data/praxisInfo';
import { leistungenInfo } from '../data/leistungenInfo';
import { kundenInfo } from '../data/kundenInfo';

import { colors } from '../theme/colors';
import { Clock } from '../components/clock';

const hours = [
  { day: 'sunday', opening: 'closed', closing: 'closed' },
  { day: 'monday', opening: 9, closing: 19 },
  { day: 'tuesday', opening: 9, closing: 18 },
  { day: 'wednesday', opening: 9, closing: 15 },
  { day: 'thursday', opening: 9, closing: 15 },
  { day: 'friday', opening: 9, closing: 15 },
  { day: 'saturday', opening: 'closed', closing: 'closed' },
];

export const HomePage = () => {
  const date = new Date();
  const day = date.getDay();
  const time = date.getHours();

  let calcIsOpen = false;
  if (day > 0 && day < 6) {
    if (time > hours[day].opening && time < hours[day].closing) {
      calcIsOpen = true;
    }
  }

  const [isOpen] = useState(calcIsOpen);

  /* useEffect(() => {
    setInterval() => {}
    return () => {
      cleanup //removeInterval
    }
  }, []) */

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

          <Box
            width={['100%', '100%', '70%', '70%', '50%']}
            bg={colors.buttonColor}
            mt="2.5rem"
          >
            <Clock>
              <ArrowForwardIcon></ArrowForwardIcon>{' '}
              <Heading
                as="p"
                color={isOpen ? 'green.700' : 'red.700'}
                variant="small"
                margin="0"
                marginLeft="1rem"
              >
                Wir haben gerade {isOpen ? 'geöffnet!' : 'geschlossen!'}
              </Heading>
            </Clock>
          </Box>
          <Flex
            //flex-flow="row wrap"
            //align="center"
            //justify="space-evenly"
            direction="row"
            justify="space-around"
            wrap="wrap"
            align="center"
            pr="2rem"
            pl="2rem"
            bg={colors.secColor}
          >
            <Sprechzeiten color="white"></Sprechzeiten>
            <Flex direction="column" align="center">
              <ButtonLink
                title={'Online Termin'}
                link={'https://doctolib.de'}
                width="140px"
              ></ButtonLink>
              <ButtonLink
                title={'Kontakt'}
                link={'/kontakt'}
                width="140px"
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
        <Article data={praxisInfo.basics}>
          {' '}
          <ButtonLink title={'mehr'} link={'/praxis'}></ButtonLink>
        </Article>
        <Article data={[leistungenInfo]} reverseRow="row-reverse">
          <ButtonLink title={'mehr'} link={'/leistungen'}></ButtonLink>
        </Article>
        <Box mt={10}>
          <Heading as="h2" variant="large" width="fit-content">
            {kundenInfo.basics[0].title}
          </Heading>
          <Text> {kundenInfo.basics[0].text}</Text>
          <Box w="100%" marginX="auto" mt={5} mb={10}>
            <ItemCarousel
              data={kundenInfo.description}
              maxItemsToShow={3}
            ></ItemCarousel>
          </Box>
        </Box>
      </ContentContainer>
    </>
  );
};
