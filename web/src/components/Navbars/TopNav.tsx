import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ellipsisV as OpenIcon,
  times as CloseIcon
} from '../../lib/fa-library';
import Collapsible from '../../lib/Collapsible';
import { NavLink } from 'react-router-dom';

// Collapsible block
const NavLinkBlock: React.FC = () => {
  return (
    <div className="Nav-link-block">
      <LinkToLogIn />
      <LinkToSignUp />
    </div>
  );
}

const Logo: React.FC = () => {
  return (
    <NavLink
      to="/"
      className="Logo"
      title="Home"
    >
      <FontAwesomeIcon icon="chevron-left" size="xs" />
      &nbsp;Shortencrafts.io&nbsp;
      <FontAwesomeIcon icon="chevron-right" size="xs" />
    </NavLink>
  );
}

const LinkToLogIn: React.FC = () => {
  return (
    <NavLink
      activeClassName="Nav-link-active"
      className="Nav-link"
      to="/login"
      title="Log in"
    >
      Log in
    </NavLink>
  );
}

const LinkToSignUp: React.FC = () => {
  return (
    <NavLink
      activeClassName="Nav-link-active"
      className="Nav-link"
      to="/signup"
      title="Sign up"
    >
      Sign up
    </NavLink>
  );
}

const TopNav: React.FC = () => {
  return (
    <nav>
      <Collapsible
        // Use <NavLinkBlock />
        // as a collapsible content
        content={<NavLinkBlock />}
        toggleIcon={<OpenIcon />}
        toggleIconAfter={<CloseIcon />}
        variant="TopNav"
      >
        <Logo />
        <div className="row-clearfix" />
        <LinkToLogIn />
        <LinkToSignUp />
      </Collapsible>
    </nav>
  );
}

export default TopNav;
