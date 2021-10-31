import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authAction';
import { useHistory } from 'react-router';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const logoutClickHandler = () => {
    dispatch(logout());
    history.replace('/login');
  };
  return (
    <header className="border-bottom shadow-sm">
      <Navbar bg="light">
        <Container>
          <NavbarBrand href="/">Course Management System</NavbarBrand>
          <NavbarToggle />
          <Nav className="justify-content-end">
            {isAuthenticated && (
              <Fragment>
                <NavItem>
                  <NavLink to="/courses" as={Link}>
                    Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile" as={Link}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    variant="outline-primary"
                    onClick={logoutClickHandler}
                  >
                    Sign out
                  </Button>
                </NavItem>
              </Fragment>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
