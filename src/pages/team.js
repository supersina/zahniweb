import React from 'react';
import BgImage from '../images/stern-frauen.jpg';

import { SloganOneBox } from '../components/slogan-one-box';
import { Article } from '../components/article';
import { ContentContainer } from '../components/content-container';
import { HeroImage } from '../components/hero-image';
import { teamDr as data } from '../data/data';
import { Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';

export const TeamPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Team'} />
      </HeroImage>
      <ContentContainer>
        {/* Team members infos. Fortbildungen are added to standard infos (title and description) of article.*/}
        <Article data={data}>
          <Heading as="h4" variant="small" mt={4} mb={2}>
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
