import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Box, Heading, Text, Button, Stack, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home" icon={undefined} tabIndex={undefined}>
                  Home
                </PageLink>
              </NavItem>
              {user && (
                <>
                  <NavItem>
                    <PageLink
                      href="/csr"
                      className="nav-link"
                      testId="navbar-csr"
                      icon={undefined}
                      tabIndex={undefined}>
                      Client-side rendered page
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink
                      href="/ssr"
                      className="nav-link"
                      testId="navbar-ssr"
                      icon={undefined}
                      tabIndex={undefined}>
                      Server-side rendered page
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink
                      href="/external"
                      className="nav-link"
                      testId="navbar-external"
                      icon={undefined}
                      tabIndex={undefined}>
                      External API
                    </PageLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  {/* <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop"
                    icon={undefined}>
                    Log in
                  </AnchorLink> */}
                  <Button
                    colorScheme={'green'}
                    bg={'green.400'}
                    rounded={'full'}
                    as={'a'}
                    href="/api/auth/login"
                    px={6}
                    _hover={{
                      bg: 'green.500'
                    }}>
                    Login
                  </Button>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      // decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink
                        href="/profile"
                        icon="user"
                        testId="navbar-profile-desktop"
                        className={undefined}
                        tabIndex={undefined}>
                        Profile
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink
                        href="/api/auth/logout"
                        icon="power-off"
                        testId="navbar-logout-desktop"
                        className={undefined}
                        tabIndex={undefined}>
                        Log out
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <Button
                  colorScheme={'green'}
                  bg={'green.400'}
                  rounded={'full'}
                  as={'a'}
                  maxW={'90px'}
                  href="/api/auth/login"
                  px={6}
                  _hover={{
                    bg: 'green.500'
                  }}>
                  Login
                </Button>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      // decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink
                    href="/profile"
                    icon="user"
                    testId="navbar-profile-mobile"
                    tabIndex={undefined}
                    className={undefined}>
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile"
                    tabIndex={undefined}>
                    Log out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
