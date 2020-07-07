import React from 'react';

import avatar from '../../assets/avatar.png';

import {
  Container,
  HeaderContent,
  AvatarImage,
  HelloTexts,
  Hi,
  Name,
  Role,
  DownArrowIcon,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <HeaderContent>
      <AvatarImage src={avatar} />
      <HelloTexts>
        <Hi>olá, me chamo</Hi>
        <Name>Luiz Fernando</Name>
        <Role> {'<desenvolvedor fullstack />'} </Role>
      </HelloTexts>
    </HeaderContent>
    <DownArrowIcon />
  </Container>
);

export default Header;
