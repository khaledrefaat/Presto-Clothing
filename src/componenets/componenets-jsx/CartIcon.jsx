import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartAction';
import { selectCartItemsCount } from '../../redux/cartSelector';

function CartIcon({ toggleCartHidden, itemCount }) {
  console.log('working');
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
