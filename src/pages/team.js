import React from 'react';
import BgImage from '../images/stern-frauen.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { Article } from '../components/article';
import { ContentContainer } from '../components/content-container';
import { HeroImage } from '../components/hero-image';
import { teamDr as data } from '../data/team';
import { praxisInfo } from '../data/praxisInfo';
import { teamInfo } from '../data/teamInfo';

import { Flex, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { GridImg } from '../components/grid-img';
import { ButtonLink } from '../components/buttonLink';
import { ContentContainerLarge } from '../components/content-container-large';

export const TeamPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Team'} />
      </HeroImage>
      <ContentContainer>
        <Flex direction="column" wrap="column" justify="center" mb={10}>
          <Heading as="h1" variant="large">
            Willkommen in unserer Praxis!
          </Heading>
          <Text>
            Lernen Sie unsere Praxis und unser Team kennen. Wir arbeiten in
            modernen Räumlichkeiten, sind technisch super ausgestattet und
            sorgen in einem motivierten und erstklassig ausgebildeten Team
            dafür, dass Sie bei uns bestens versorgt sind.
          </Text>
        </Flex>
      </ContentContainer>
      <ContentContainerLarge>
        <ContentContainer mb={2}>
          <Heading as="h2" variant="large">
            {praxisInfo.basics[0].title}
          </Heading>
          {praxisInfo.description.map(info => {
            return (
              <Text key={info.id} marginBottom={2}>
                {info.text}
              </Text>
            );
          })}
          <Heading as="h2" variant="medium">
            Die Praxis in Bildern
          </Heading>
          <GridImg data={praxisInfo.images}></GridImg>
          {/* </Box> */}
        </ContentContainer>
      </ContentContainerLarge>

      <ContentContainer>
        <Article data={praxisInfo.cooperation}>
          <ButtonLink
            title="Zu DentaSchick"
            link={praxisInfo.cooperation[0].link}
            marginTop="1.5rem"
          ></ButtonLink>
        </Article>
      </ContentContainer>

      {/* Team members infos. Fortbildungen are added to standard infos (title and description) of article.*/}

      <ContentContainerLarge>
        <ContentContainer>
          <Heading as="h2" variant="large">
            Unser Team
          </Heading>
          <Text>{teamInfo.text}</Text>
          <Article data={data}>
            <Heading as="h4" variant="medium">
              Fortbildungen:
            </Heading>
            <UnorderedList>
              {data.map(entry => {
                return entry.fortbildungen.map(fortbildung => {
                  return (
                    <ListItem key={fortbildung.id}>
                      <Text>
                        {fortbildung.title}: {fortbildung.description}
                      </Text>
                    </ListItem>
                  );
                });
              })}
            </UnorderedList>
          </Article>
        </ContentContainer>
      </ContentContainerLarge>
    </>
  );
};
