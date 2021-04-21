import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartAction';
import { Row, Col, Card } from 'react-bootstrap';
import './ShowCollection.scss';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CollectionPreview({ item, len, addItem }) {
  const ButtonContainer = styled(CustomButton)`
  position: absolute;
    bottom: 20%;
    left: 50%;
    width: 80%;
    // to over write the customButton transfrom
    transform: translateX(-50%) !important;

    // to fix button text splited into 2 lines
    // 538px
    @media only screen and (min-width: 33.625em) {
      // to over write the customButton transfrom
      padding: 1rem !important;
    }

    // 576px (2 column grid)
    @media only screen and (min-width: 36em) {
      bottom: 25%;
    }

    // to fix button text splited into 2 lines
    // 768px
    @media only screen and (min-width: 48em) {
      padding: 1rem 2rem;
    }

    // 770px to make it work untill iPad width
    @media only screen and (min-width: 48.125em) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  &:active {
    // to over write the customButton transfrom
    transform: translateY(2px) translateX(-50%) !important;
  }
  `;

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
                    <ButtonContainer
                      checkOut={true}
                      onClick={() => addToCart(item)}>
                      add to cart
                    </ButtonContainer>
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
                <ButtonContainer
                  checkOut={true}
                  onClick={() => addToCart(item)}>
                  add to cart
                </ButtonContainer>
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
