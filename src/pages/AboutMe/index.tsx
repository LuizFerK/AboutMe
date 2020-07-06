import React from 'react';

import avatar from '../../assets/avatar.png';

import {
  MenuIcon,
  Header,
  HeaderContent,
  AvatarImage,
  HelloTexts,
  Hi,
  Name,
  Role,
  DownArrowIcon,
} from './styles';

const AboutMe: React.FC = () => (
  <>
    <MenuIcon />
    <Header>
      <HeaderContent>
        <AvatarImage src={avatar} />
        <HelloTexts>
          <Hi>olá, me chamo</Hi>
          <Name>Luiz Fernando</Name>
          <Role> {'<desenvolvedor fullstack />'} </Role>
        </HelloTexts>
      </HeaderContent>
      <DownArrowIcon />
    </Header>
  </>
);

export default AboutMe;
