import React from 'react';

import Header from '../../components/Header';

import { Menu, IconContainer, MenuIcon } from './styles';

const AboutMe: React.FC = () => (
  <>
    <Menu>
      <IconContainer>
        <MenuIcon />
      </IconContainer>
    </Menu>
    <Header />
  </>
);

export default AboutMe;
