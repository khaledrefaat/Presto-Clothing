import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartAction';
import { Row, Col, Card } from 'react-bootstrap';
import './ShowCollection.scss';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

function CollectionPreview({ item, len, addItem }) {
  const { title, items } = item;
  const addToCart = item => addItem(item);
  function renderCollections() {
    if (len) {
      return (
        <Row>
          <Col lg="12">
            <Link to={`/shop/${title.toLowerCase()}`} className="shop-title">
              {title}
            </Link>
          </Col>
          {items
            .filter((item, index) => index < len)
            .map(item => (
              <Col key={item.id} md="3" sm="6" xs="12">
                <Card className="shop-card">
                  <div className="shop-card__img-container">
                    <Card.Img variant="top" src={item.imageUrl} />
                  </div>
                  <Card.Body>
                    <div className="shop-card__content">
                      <h3>{item.name}</h3>
                      <h3>{item.price}$</h3>
                    </div>
                    <CustomButton
                      checkOut="check-out"
                      className="shop-card__button"
                      onClick={() => addToCart(item)}>
                      add to cart
                    </CustomButton>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      );
    }
    return (
      <Row>
        <Col lg="12">
          <h1 className="shop-title">{title}</h1>
        </Col>
        {items.map(item => (
          <Col key={item.id} md="3" sm="6" xs="12">
            <Card className="shop-card">
              <div className="shop-card__img-container">
                <Card.Img variant="top" src={item.imageUrl} />
              </div>
              <Card.Body>
                <div className="shop-card__content">
                  <h3>{item.name}</h3>
                  <h3>{item.price}$</h3>
                </div>
                <CustomButton
                  checkOut="check-out"
                  className="shop-card__button"
                  onClick={() => addToCart(item)}>
                  add to cart
                </CustomButton>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return renderCollections();
}

export default connect(null, { addItem })(CollectionPreview);
