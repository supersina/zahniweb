import React, { useState, useEffect } from 'react';
import BgImage from '../images/wartezimmer.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';
import { Article } from '../components/article';

import { leistungenInfo } from '../data/leistungenInfo';
import { leistungenDetails } from '../data/leistungenInfo';

import { LeistungenPage } from './leistungen';
import { GridImgSimple } from '../components/grid-img-simple';
import { Heading } from '@chakra-ui/layout';

export const Leistung = () => {
  //useState
  const [data, setData] = useState(leistungenInfo.basics);

  useEffect(() => {
    //match pathname
    const path = window.location.pathname;
    const pathname = path.split('/').pop();
    console.log(path, pathname);

    let entryData = leistungenDetails.find(entry => entry.name === pathname);
    //let entryData = leistung.prophylaxe;

    if (entryData === undefined) {
      entryData = leistungenInfo.basics;
    }

    //setState data
    setData(entryData);
  }, []);

  console.log('daten sind: ', data);
  return (
    <>
      {data === leistungenInfo.basics ? (
        <LeistungenPage />
      ) : (
        <>
          <HeroImage bgImage={BgImage}>
            <SloganOneBox text1={data.title} />
          </HeroImage>
          <ContentContainer>
            <Article data={data.details}></Article>
          </ContentContainer>
          <ContentContainer>
            <Heading as="h2" variant="medium">
              weitere Leistungen
            </Heading>
            <GridImgSimple
              data={leistungenDetails}
              minChildWidth="150px"
              boxHeight="150px"
            ></GridImgSimple>
          </ContentContainer>
        </>
      )}
    </>
  );
};
