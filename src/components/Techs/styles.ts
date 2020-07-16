import styled, { css } from 'styled-components';

import backgroundImg from '../../assets/techstopbackground.png';

interface LanguageProps {
  typescript?: boolean;
}

export const Container = styled.div`
  background: var(--black);
`;

export const Title = styled.h1`
  padding: 0 10% 0;
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  color: var(--primary);
  margin-bottom: 10%;
`;

export const LanguagesBackground = styled.div`
  background: var(--black) url(${backgroundImg}) no-repeat top;
  background-size: cover;
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10% 10%;
`;

export const TechsLanguages = styled.h2`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  color: var(--white);
`;

export const TechsImages = styled.div`
  display: flex;
`;

export const Language = styled.div<LanguageProps>`
  display: flex;
  flex-direction: column;

  ${props =>
    props.typescript &&
    css`
      margin-right: 30px;
    `}
`;

export const LanguageImage = styled.img``;

export const LanguageTitle = styled.span`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: var(--white);
  margin-top: 20px;
`;
