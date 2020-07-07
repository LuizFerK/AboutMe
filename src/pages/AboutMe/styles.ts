import styled from 'styled-components';
import { Menu as MenuFeatherIcon } from 'styled-icons/feather';

export const Menu = styled.div`
  height: 8rem;
  background: var(--primary);
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.div`
  width: 50px;
  max-width: 50px;
  margin-right: 2rem;
  display: flex;
  align-items: center;

  & :hover {
    cursor: pointer;
  }
`;

export const MenuIcon = styled(MenuFeatherIcon)`
  width: 100%;
  height: 100%;
  color: var(--white);
`;
