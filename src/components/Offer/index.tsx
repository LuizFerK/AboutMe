import React from 'react';

import offer from '../../assets/offer.png';

import {
  Container,
  Title,
  OfferTexts,
  OfferSection,
  OfferTitle,
  OfferDescription,
  Icon,
  Example,
  ExampleTitle,
  ExampleImage,
} from './styles';

const About: React.FC = () => (
  <Container>
    <Title>O que tenho a te oferecer</Title>
    <OfferSection>
      <OfferTexts>
        <OfferTitle>Aplicativos móveis</OfferTitle>
        <OfferDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </OfferDescription>
      </OfferTexts>
      <Icon />
    </OfferSection>

    <OfferSection invert>
      <OfferTexts>
        <OfferTitle>Sites e serviços web</OfferTitle>
        <OfferDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </OfferDescription>
      </OfferTexts>
      <Icon invert />
    </OfferSection>

    <OfferSection>
      <OfferTexts>
        <OfferTitle>Sistemas para seu negócio</OfferTitle>
        <OfferDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </OfferDescription>
      </OfferTexts>
      <Icon />
    </OfferSection>

    <Example>
      <ExampleTitle>
        Aplicações desenhadas e planejadas para você e/ou sua empresa
      </ExampleTitle>
      <ExampleImage src={offer} />
    </Example>
  </Container>
);

export default About;
