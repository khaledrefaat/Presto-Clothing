import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './CartIcon.scss';
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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
