import React from 'react';
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export default function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <NavbarBrand href="/">Course Management System</NavbarBrand>
        <NavbarToggle />
        <Nav className="justify-content-end">
          <NavItem>
            <NavLink>Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Profile</NavLink>
          </NavItem>
          <NavItem>
            <Button variant="outline-primary">Sign out</Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
