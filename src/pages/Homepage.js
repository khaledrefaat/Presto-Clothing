import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../componenets/MenuItem';
import './Homepage.scss';

function Homepage() {
  function renderItem(arr) {
    const newArr = arr.map((curr, index) => {
      return (
        <Col key={index} xs="12" sm={12 / arr.length}>
          <MenuItem
            title={curr}
            linkPath={`/${curr}`}
            imgSrc={`/images/${curr}.jpg`}
          />
        </Col>
      );
    });
    return newArr;
  }

  return (
    <Container fluid="md" className="homepage">
      <div className="directory-menu">
        <Row>{renderItem(['hats', 'jackets', 'sneakers'])}</Row>
        <Row>{renderItem(['womens', 'mens'])}</Row>
      </div>
    </Container>
  );
}

export default Homepage;
