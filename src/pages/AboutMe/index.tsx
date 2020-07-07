import React from 'react';

import Header from '../../components/Header';
import About from '../../components/About';

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
  </>
);

export default AboutMe;
