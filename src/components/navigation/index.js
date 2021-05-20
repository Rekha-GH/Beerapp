import * as React from 'react';
import theme from '../../variables';

import NavItem from './nav-item';
import styled from 'styled-components';

import Burger, { BurgerMenu } from './burger';
import { device } from '../../helpers';

const navData = [
  { home: 'home.link' },
  { beers: 'blog.link' },
  { contact: 'contact.link' },
];

const NavList = styled.ul`
  list-style: none;
  color: white;
  display: none;

  &.visible-menu {
    display: block;
    position: absolute;
    background: ${theme.blackTransparent};
    top: 90px;
    width: 100%;
    left: 0;

    @media ${device.laptop} {
      display: inline-flex;
      position: initial;
      background: transparent;
    }
  }

  @media ${device.laptop} {
    display: inline-flex;
  }
`;

const NavWrapper = styled.nav`
  margin-left: auto;

  ${BurgerMenu} {
    @media ${device.laptop} {
      display: none;
    }
  }
`;

const navigation = React.memo(() => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const onBurgerClicked = React.useCallback(() => {
    setIsMenuVisible(!isMenuVisible);
  }, [isMenuVisible, setIsMenuVisible]);

  return (
    <NavWrapper>
      <NavList className={isMenuVisible && 'visible-menu'}>
        {navData.map((value, index) => {
          const title = Object.keys(value)[0];
          const url = value[title];

          return (<NavItem
            key={index}
            title={title}
            url={url}
            color={theme.white}
          />);
        })}
      </NavList>
      <Burger action={onBurgerClicked}/>
    </NavWrapper>
  )
});

export default navigation