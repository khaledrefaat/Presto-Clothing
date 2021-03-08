import React from 'react';
import Signin from '../componenets/SignIn';
import { Container, Row, Col } from 'react-bootstrap';

function signinSignup() {
  return (
    <Container className="signin-signup-container">
      <Row>
        <Col sm="12" md="6">
          <Signin />
        </Col>
        <Col sm="12" md="6">
          <div>Signup</div>
        </Col>
      </Row>
    </Container>
  );
}

export default signinSignup;

// you should make the container childs center if you open the page responsive you will understand
