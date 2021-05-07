import React from 'react';
import BgImage from '../images/wartezimmer.jpg';
import { SloganOneBox } from '../components/slogan-one-box';
import { ContactForm } from '../components/contact-form';
import { ContactDetails } from '../components/contact-details';
import { HeroImage } from '../components/hero-image';
import { ContentContainer } from '../components/content-container';
import { ContentContainerLarge } from '../components/content-container-large';

export const KontaktPage = () => {
  return (
    <>
      <HeroImage bgImage={BgImage}>
        <SloganOneBox text1={'Kontakt'} />
      </HeroImage>
      <ContentContainer>
        <ContactForm />
      </ContentContainer>
      <ContentContainerLarge>
        <ContactDetails />
      </ContentContainerLarge>
    </>
  );
};
