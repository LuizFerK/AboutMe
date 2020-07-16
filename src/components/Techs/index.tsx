import React from 'react';

import typescriptImg from '../../assets/typescript.png';
import javascriptImg from '../../assets/javascript.png';

import {
  Container,
  Title,
  LanguagesBackground,
  Languages,
  TechsLanguages,
  Typescript,
  TypescriptImage,
  TypescriptTitle,
  Javascript,
  JavascriptImage,
  JavascriptTitle,
} from './styles';

const Techs: React.FC = () => (
  <Container>
    <Title>Tecnologias</Title>
    <LanguagesBackground>
      <Languages>
        <TechsLanguages>Principais linguágens</TechsLanguages>
        <Typescript>
          <TypescriptImage src={typescriptImg} />
          <TypescriptTitle>Typescript</TypescriptTitle>
        </Typescript>
        <Javascript>
          <JavascriptImage src={javascriptImg} />
          <JavascriptTitle>Javascript</JavascriptTitle>
        </Javascript>
      </Languages>
    </LanguagesBackground>
  </Container>
);

export default Techs;
