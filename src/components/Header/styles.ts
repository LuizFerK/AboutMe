import styled from 'styled-components';
import { ChevronsDown } from 'styled-icons/feather';

import headerbackground from '../../assets/headerbackground.png';

export const Container = styled.div`
  background: var(--black) url(${headerbackground}) no-repeat top;
  background-size: contain;
  padding: 0% 8% 8%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const AvatarImage = styled.img`
  width: 37%;
  border: 1rem solid var(--black);
  border-radius: 50%;

  @media (max-width: 530px) {
    width: 200px;
    height: 200px;
  }
`;

export const HelloTexts = styled.div``;

export const Hi = styled.p`
  font-size: 7rem;
  color: var(--white);
`;

export const Name = styled.p`
  font-size: 7rem;
  font-weight: bold;
  color: var(--primary);
`;

export const Role = styled.p`
  font-size: 3.2rem;
  color: var(--secundary);
  text-align: right;
`;

export const DownArrowIcon = styled(ChevronsDown)`
  width: 8%;
  color: var(--primary);
  align-self: center;

  @media (max-width: 530px) {
    width: 15%;
    margin-top: 3%;
  }
`;
