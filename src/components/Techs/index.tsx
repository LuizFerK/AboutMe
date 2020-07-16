import React from 'react';

import typescriptImg from '../../assets/typescript.png';
import javascriptImg from '../../assets/javascript.png';

import {
  Container,
  Title,
  LanguagesBackground,
  Languages,
  TechsLanguages,
  TechsImages,
  Language,
  LanguageImage,
  LanguageTitle,
} from './styles';

const Techs: React.FC = () => (
  <Container>
    <Title>Tecnologias</Title>
    <LanguagesBackground>
      <Languages>
        <TechsLanguages>
          Principais
          <br />
          linguágens
        </TechsLanguages>
        <TechsImages>
          <Language typescript>
            <LanguageImage src={typescriptImg} />
            <LanguageTitle>Typescript</LanguageTitle>
          </Language>
          <Language>
            <LanguageImage src={javascriptImg} />
            <LanguageTitle>Javascript</LanguageTitle>
          </Language>
        </TechsImages>
      </Languages>
    </LanguagesBackground>
  </Container>
);

export default Techs;
