import React from 'react';

import Header from '../../components/Header';
import About from '../../components/About';
import Offer from '../../components/Offer';
import Techs from '../../components/Techs';

import { Menu, IconContainer, MenuIcon } from './styles';

const AboutMe: React.FC = () => (
  <>
    <Menu>
      <IconContainer>
        <MenuIcon />
      </IconContainer>
    </Menu>
    <Header />
    <About />
    <Offer />
    <Techs />
  </>
);

export default AboutMe;
