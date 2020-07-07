import styled from 'styled-components';
import { ChevronsDown } from 'styled-icons/feather';

import headerbackground from '../../assets/headerbackground.png';

export const Container = styled.div`
  background: var(--black) url(${headerbackground}) no-repeat top;
  background-size: contain;
  padding: 4% 8% 8%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 80vh;
  height: 80vh;
  border: 1.5vh solid var(--black);
  border-radius: 50%;
`;

export const HelloTexts = styled.div``;

export const Hi = styled.p`
  font-size: 13vh;
  color: var(--white);
`;

export const Name = styled.p`
  font-size: 13vh;
  font-weight: bold;
  color: var(--primary);
`;

export const Role = styled.p`
  font-size: 4vh;
  color: var(--secundary);
  text-align: right;
`;

export const DownArrowIcon = styled(ChevronsDown)`
  width: 12vh;
  color: var(--primary);
  align-self: center;
`;
