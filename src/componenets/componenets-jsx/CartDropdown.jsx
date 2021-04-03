import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from './CustomButton';
import './CartDropdown.scss';
import { selectCartItems } from '../../redux/cartSelector';

function CartDropdown({ cartItems }) {
  const renderCartItems = () =>
    cartItems.map(item => (
      <div className="cart-item" key={item.id}>
        <img className="cart-item__img" src={item.imageUrl} alt={item.name} />
        <div className="cart-item__content">
          <span>{item.name}</span>
          <span>
            {item.quantity} x {item.price + '$'}
          </span>
        </div>
      </div>
    ));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton blackInverted="black-inverted">go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
