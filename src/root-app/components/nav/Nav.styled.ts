import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RootNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.small};
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: ${(props) => props.theme.spacing.xsmall};
  margin: ${(props) => props.theme.spacing.xsmall};
`;

export const NavItem = styled.li``;

export const NavRouteLink = styled(NavLink)`
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
