import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeButton from '../componenets/componenets-jsx/StripeButton';

import { selectCartItems, selectCartTotal } from '../redux/cartSelector';
import {
  deleteItem,
  addItem,
  removeItemFromCart,
} from '../redux/actions/cartAction';

function checkout({
  cartItems,
  totalPrice,
  deleteItem,
  addItem,
  removeItemFromCart,
}) {
  const renderItems = () =>
    cartItems.map(item => {
      const { id, imageUrl, name, price, quantity } = item;
      return (
        <div className="checkout__item" key={id}>
          <div className="checkout__item--img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="checkout__item--description">{name}</div>
          <div className="checkout__item--quantity">
            <span onClick={() => removeItemFromCart(item)}>&#10094;</span>
            {quantity}
            <span onClick={() => addItem(item)}>&#10095;</span>
          </div>
          <div className="checkout__item--price">{price}</div>
          <div
            className="checkout__item--remove"
            onClick={() => deleteItem(id)}>
            &#10006;
          </div>
        </div>
      );
    });
  return (
    <div className="checkout">
      <div className="checkout__header">
        <span>product</span>
        <span>description</span>
        <span>quantity</span>
        <span>price</span>
        <span>remove</span>
      </div>
      {cartItems.length ? renderItems() : null}
      <div className="checkout__total">
        {cartItems.length ? `total: ${totalPrice}$` : 'total: ' + 0}
      </div>
      <StripeButton price={totalPrice} />
      <div className="checkout__warning">
        *please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - exp: 12/24 - cvv: 123
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps, {
  deleteItem,
  addItem,
  removeItemFromCart,
})(checkout);
