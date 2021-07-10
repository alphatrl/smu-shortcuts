import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import NavLink from './components/NavLink';

const Wrapper = styled.div`
  height: 100%;
  width: 80px;
  padding-top: 16px;
  background-color: ${(props) => props.theme.sidebarBackground};
  box-sizing: border-box;
  backdrop-filter: blur(15px);
`;

const NavContaner = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  row-gap: 16px;
`;

const StyledLink = styled(NavLink)`
  height: 48px;
  width: 48px;
  text-decoration: none;
  color: ${(props) => props.theme.sidebarIcon};
  background-color: ${(props) => props.theme.sidebarIconBackground};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  &:hover {
    filter: brightness(1.5);
  }
`;

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <NavContaner>
        <StyledLink href="/">
          <Icon name="home" />
        </StyledLink>
        <StyledLink href="/calendar">
          <Icon name="today" />
        </StyledLink>
      </NavContaner>
    </Wrapper>
  );
};

export default NavBar;
