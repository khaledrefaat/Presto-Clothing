import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartAction';

function CartIcon({ toggleCartHidden, cartItems }) {
  const renderQuantity = () =>
    cartItems.map(curr => curr.quantity).reduce((acc, curr) => acc + curr);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.length > 0 ? renderQuantity() : '0'}
      </span>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
