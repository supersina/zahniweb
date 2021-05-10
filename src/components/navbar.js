import React, { useState } from 'react';

import { colors } from '../theme/colors';
import { Logo } from './logo';
import { MenuToggle } from './menu-toggle';
import { NavbarContainer } from './navbar-container';
import { MenuLinks } from './menu-links';

export const navbarHeight = '64px';

export const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer {...props}>
        <Logo></Logo>
        <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle>
        <MenuLinks isOpen={isOpen}></MenuLinks>
      </NavbarContainer>
    </>
  );
};
