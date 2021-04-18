import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../componenets/componenets-jsx/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../redux/directorySelector';
import { createStructuredSelector } from 'reselect';

function Homepage({ sections }) {
  function renderItem(arr) {
    const newArr = arr.map((curr, index) => {
      return (
        <Col key={index} xs="12" sm={12 / arr.length}>
          <MenuItem
            title={curr.title}
            linkPath={curr.linkUrl}
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
        <Row>{renderItem([sections[0], sections[1], sections[2]])}</Row>
        <Row>{renderItem([sections[3], sections[4]])}</Row>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Homepage);
