import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartAction';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">22</span>
    </div>
  );
}

export default connect(null, { toggleCartHidden })(CartIcon);
