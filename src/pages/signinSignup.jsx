import React from 'react';
import SignIn from '../componenets/SignIn';
import { Container, Row, Col } from 'react-bootstrap';

function signinSignup() {
  return (
    <Container className="signin-signup-container">
      <Row>
        <Col sm="12" md="6">
          <SignIn />
        </Col>
        <Col sm="12" md="6">
          SignUp
        </Col>
      </Row>
    </Container>
  );
}

export default signinSignup;

// you should make the container childs center if you open the page responsive you will understand
