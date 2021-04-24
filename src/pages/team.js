import React from 'react';
import BgImage from '../images/stern-frauen.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { Article } from '../components/article';
import { ContentContainer } from '../components/content-container';
import { HeroImage } from '../components/hero-image';
import { teamDr as data } from '../data/data';
import { praxisInfo } from '../data/praxisInfo';

import {
  Box,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { GridImg } from '../components/grid-img';

export const TeamPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Team'} />
      </HeroImage>
      <ContentContainer>
        <Flex direction="column" wrap="column" justify="center" mb={10}>
          <Heading as="h1" variant="large" mt={10}>
            Willkommen in unserer Praxis!
          </Heading>
          <Text mt={4}>
            Lernen Sie unsere Praxis und unser Team kennen. Wir arbeiten in
            modernen Räumlichkeiten, sind technisch super ausgestattet und
            sorgen in einem motivierten und erstklassig ausgebildeten Team
            dafür, dass Sie bei uns bestens versorgt sind.
          </Text>
        </Flex>
      </ContentContainer>
      <Box bg="gray.100" paddingTop="1rem" paddingBottom="1rem">
        <ContentContainer mb={2}>
          <Heading as="h2" variant="medium">
            {praxisInfo.title}
          </Heading>
          {praxisInfo.description.map(info => {
            return (
              <Text key={info.id} marginBottom={2}>
                {info.text}
              </Text>
            );
          })}
          {/* <Box heigth="250px" marginTop="4rem" marginBottom="4rem"> */}
          <GridImg data={praxisInfo.images}></GridImg>
          {/* </Box> */}
        </ContentContainer>
      </Box>

      {/* Team members infos. Fortbildungen are added to standard infos (title and description) of article.*/}
      <ContentContainer>
        <Article data={data}>
          <Heading as="h4" variant="medium" mt={4} mb={2}>
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
    </>
  );
};
