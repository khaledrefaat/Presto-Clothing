import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import CustomButton from './CustomButton';
import './CartDropdown.scss';
import { selectCartItems } from '../../redux/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cartAction';

function CartDropdown({ cartItems, toggleCartHidden }) {
  const renderCartItems = () =>
    cartItems.map(item => (
      <div className="cart-dropdown__item" key={item.id}>
        <img
          className="cart-dropdown__item--img"
          src={item.imageUrl}
          alt={item.name}
        />
        <div className="cart-dropdown__item--content">
          <span>{item.name}</span>
          <span>
            {item.quantity} x {item.price + '$'}
          </span>
        </div>
      </div>
    ));
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.length ? renderCartItems() : <span>cart is empty</span>}
      </div>
      <Link onClick={toggleCartHidden} to="/checkout">
        <CustomButton blackInverted="black-inverted">
          go to checkout
        </CustomButton>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
