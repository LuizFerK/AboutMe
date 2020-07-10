import styled, { css } from 'styled-components';
import { MobileAlt } from '@styled-icons/boxicons-regular';

interface OfferProps {
  invert?: boolean;
}

export const Container = styled.div`
  background: var(--black);
  padding: 10% 0 10%;
`;

export const Title = styled.h2`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  color: var(--primary);
  margin-bottom: 126px;
`;

export const OfferSection = styled.div<OfferProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 4% 0 10%;

  ${props =>
    props.invert &&
    css`
      padding: 0 10% 0 4%;
    `}

  @media (max-width: 530px) {
    flex-direction: column;
    margin-top: 50px;
    padding: 0 10% 0;
  }
`;

export const OfferTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferTitle = styled.h3`
  font-size: 5rem;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 32px;

  @media (max-width: 530px) {
    text-align: center;
  }
`;

export const OfferDescription = styled.p`
  font-size: 2.4rem;
  text-align: justify;
  color: var(--white);
`;

export const Icon = styled(MobileAlt)<OfferProps>`
  width: 1600px;
  margin-left: 5%;
  color: var(--white);

  svg {
    padding: 0;
  }

  ${props =>
    props.invert &&
    css`
      order: -1;
      margin-left: 0;
      margin-right: 5%;
    `}
  @media (max-width: 700px) {
    width: 1000px;
  }

  @media (max-width: 530px) {
    width: 200px;
    order: -1;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Example = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 10% 0;
`;

export const ExampleTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: var(--white);
  margin-bottom: 5%;
`;

export const ExampleImage = styled.img`
  width: 70%;
`;
