import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Header({ currentUser }) {
  return (
    <Container expand="md">
      <Navbar sticky="top" collapseOnSelect expand="sm" className="navbar">
        <Navbar.Brand>
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill className=" navbar__nav ml-auto">
            <Nav.Item className="navbar__item">
              <Link to="/shop">Shop</Link>
            </Nav.Item>
            <Nav.Item className="navbar__item">
              <Link to="/contact">Contact</Link>
            </Nav.Item>
            {currentUser ? (
              <Nav.Item
                onClick={() => {
                  auth.signOut();
                  console.log(currentUser);
                }}
                className="navbar__item">
                Sign Out
              </Nav.Item>
            ) : (
              <Nav.Item className="navbar__item">
                <Link to="/signin">Sign In</Link>
              </Nav.Item>
            )}
            <Nav.Item className="navbar__item">
              <Link to="/cart">
                <i className="fas fa-shopping-cart" />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
