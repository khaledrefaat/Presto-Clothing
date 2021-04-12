import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../componenets/componenets-jsx/MenuItem';
import './homepage.scss';
import { connect } from 'react-redux';

function Homepage({ directory }) {
  function renderItem(arr) {
    const newArr = arr.map((curr, index) => {
      return (
        <Col key={index} xs="12" sm={12 / arr.length}>
          <MenuItem
            title={curr.title}
            linkPath={`/${curr.title}`}
            imgSrc={`${curr.imageUrl}`}
          />
        </Col>
      );
    });
    return newArr;
  }

  return (
    <Container fluid="lg" className="homepage">
      <div className="directory-menu">
        <Row>{renderItem([directory[0], directory[1], directory[2]])}</Row>
        <Row>{renderItem([directory[3], directory[4]])}</Row>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ directory }) => ({
  directory,
});

export default connect(mapStateToProps, null)(Homepage);
