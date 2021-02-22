import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './CollectionPreview.scss';

function CollectionPreview({ title, len, items }) {
  function renderCollections() {
    if (len) {
      return (
        <Row>
          <Col lg="12">
            <h2 className="shop-title">{title}</h2>
          </Col>
          {items
            .filter((item, index) => index < len)
            .map(item => (
              <Col key={item.id} md="3" sm="6" xs="12">
                <Card className="shop-card">
                  <div className="img-container">
                    <Card.Img variant="top" src={item.imageUrl} />
                  </div>
                  <Card.Body>
                    <div className="card-content">
                      <h3>{item.name}</h3>
                      <h3>{item.price}$</h3>
                    </div>
                    <button className="card-button">add to cart</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      );
    }
    return (
      <Row>
        <Col lg="12">{title}</Col>
        {items.map(item => (
          <Col key={item.id} md="3" sm="6" xs="12">
            <Card className="shop-card">
              <div className="img-container">
                <Card.Img variant="top" src={item.imageUrl} />
              </div>
              <Card.Body>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <h3>{item.price}$</h3>
                </div>
                <button className="card-button">add to cart</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return renderCollections();
}

export default CollectionPreview;
