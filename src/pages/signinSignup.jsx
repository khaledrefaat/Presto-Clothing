import React from 'react';
import Signin from '../componenets/SignIn';
import { Container, Row, Col } from 'react-bootstrap';

function signinSignup() {
  return (
    <Container>
      <Row>
        <Col>
          <Signin />
        </Col>
        <Col>
          <div>Signup</div>
        </Col>
      </Row>
    </Container>
  );
}

export default signinSignup;
