import React from 'react';
import { RootNav, NavList, NavItem, NavRouteLink } from './Nav.styled';

export default function Nav() {
  return (
    <RootNav>
      <NavList>
        <NavItem>
          <NavRouteLink to="/" tabIndex={0} role="nav" aria-label="Home">
            Home
          </NavRouteLink>
        </NavItem>
        <NavItem>
          <NavRouteLink to="/search" tabIndex={0} role="nav" aria-label="Search">
            Search
          </NavRouteLink>
        </NavItem>
        <NavItem>
          <NavRouteLink to="/favorites" tabIndex={0} role="nav" aria-label="Favorites">
            Favorites
          </NavRouteLink>
        </NavItem>
      </NavList>
    </RootNav>
  );
}
