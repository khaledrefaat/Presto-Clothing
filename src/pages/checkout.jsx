import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../redux/cartSelector';

function checkout({ selectCartItems }) {
  const renderItems = () =>
    selectCartItems.map(({ id, imageUrl, name, price, quantity }) => (
      <div className="checkout__item" key={id}>
        <div className="checkout__item--img">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="checkout__item--description">{name}</div>
        <div className="checkout__item--quantity">
          <span> &#10095; </span>
          {quantity}
          <span> &#10094; </span>
        </div>
        <div className="checkout__item--price">{price}</div>
        <div className="checkout__item--remove">&#10006;</div>
      </div>
    ));

  const renderPrice = () =>
    selectCartItems.reduce((acc, curr) => curr.price * curr.quantity + acc, 0);
  return (
    <div className="checkout">
      <div className="checkout__header">
        <span>product</span>
        <span>description</span>
        <span>quantity</span>
        <span>price</span>
        <span>remove</span>
      </div>
      {selectCartItems.length ? renderItems() : null}
      <div className="checkout__total">
        {selectCartItems.length ? renderPrice() + '$' : null}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectCartItems,
});

export default connect(mapStateToProps)(checkout);
