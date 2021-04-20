import React from 'react';
import BgImage from '../images/leistungen.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';

export const LeistungenPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Leistungen'} />
      </HeroImage>
      <ContentContainer></ContentContainer>
    </>
  );
};
