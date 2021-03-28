import React from 'react';
import SignIn from '../componenets/SignIn';
import SignUp from '../componenets/SignUp';
import { Container, Row, Col } from 'react-bootstrap';
import './signinSignup.scss';

function signinSignup() {
  return (
    <Container fluid className="signin-signup-container">
      <Row className="signin-signup-row">
        <Col xs="11" sm="9" md="6" lg="5">
          <SignIn />
        </Col>
        <Col xs="11" sm="9" md="6" lg="5">
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
}

export default signinSignup;

// you should make the container childs center if you open the page responsive you will understand
