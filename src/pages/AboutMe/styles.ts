import styled from 'styled-components';
import { Menu as MenuFeatherIcon } from 'styled-icons/feather';

export const Menu = styled.div`
  height: 8rem;
  background: var(--primary);
  display: flex;
  justify-content: flex-end;
`;

export const MenuIcon = styled(MenuFeatherIcon)`
  width: 50px;
  margin-right: 2rem;
  color: var(--white);
`;
