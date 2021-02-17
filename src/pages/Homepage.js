import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../componenets/MenuItem';
import './Homepage.scss';

function Homepage() {
  return (
    <Container fluid="md" className="homepage">
      <div className="directory-menu">
        <Row>
          <Col xs="12" sm="4">
            <MenuItem title="hats" imgSrc="\images\hats.jpg" />
          </Col>
          <Col xs="12" sm="4">
            <MenuItem title="jackets" imgSrc="\images\jackets.jpg" />
          </Col>
          <Col xs="12" sm="4">
            <MenuItem title="sneakers" imgSrc="\images\sneakers.jpg" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <MenuItem title="womens" imgSrc="\images\womens.jpg" />
          </Col>
          <Col xs="12" sm="6">
            <MenuItem title="mens" imgSrc="\images\mens.jpg" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Homepage;
