import React, { Component } from 'react';
import shopData from './shopData';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './Shop.scss';

export class Shop extends Component {
  state = {
    collections: shopData,
  };

  render() {
    const { collections } = this.state;
    collections.forEach(({ id, ...others }) => console.log(id, others.items));
    // console.log(...collections);
    return (
      <Container fluid>
        <Row>
          <Col lg="12">Shoes</Col>
          <Col lg="3" sm="6" xs="12">
            <Col lg="12">
              <Card className="shop-card">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
                />
                <Card.Body>
                  <div className="card-content">
                    <h3>Brown Brim</h3>
                    <h3>35$</h3>
                  </div>
                  <button className="card-button">add to cart</button>
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Col lg="12">
              <Card className="shop-card">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
                />
                <Card.Body>
                  <div className="card-content">
                    <h3>Brown Brim</h3>
                    <h3>35$</h3>
                  </div>
                  <button className="card-button">add to cart</button>
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Col lg="12">
              <Card className="shop-card">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
                />
                <Card.Body>
                  <div className="card-content">
                    <h3>Brown Brim</h3>
                    <h3>35$</h3>
                  </div>
                  <button className="card-button">add to cart</button>
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Col lg="12">
              <Card className="shop-card">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
                />
                <Card.Body>
                  <div className="card-content">
                    <h3>Brown Brim</h3>
                    <h3>35$</h3>
                  </div>
                  <button className="card-button">add to cart</button>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shop;
