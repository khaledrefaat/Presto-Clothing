import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

import {
  CartDropdownContainer,
  ItemsContainer,
  ItemContainer,
  SpanTextContainer,
  ButtonContainer,
  ImgContainer,
  ContentContainer,
} from './CartDropdownStyle';

import { selectCartItems } from '../../redux/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cartAction';

function CartDropdown({ cartItems, toggleCartHidden }) {
  const renderCartItems = () =>
    cartItems.map(item => (
      <ItemContainer key={item.id}>
        <ImgContainer src={item.imageUrl} alt={item.name} />
        <ContentContainer>
          <span>{item.name}</span>
          <span>
            {item.quantity} x {item.price + '$'}
          </span>
        </ContentContainer>
      </ItemContainer>
    ));
  return (
    <CartDropdownContainer>
      <ItemsContainer>
        {cartItems.length ? (
          renderCartItems()
        ) : (
          <SpanTextContainer>cart is empty</SpanTextContainer>
        )}
      </ItemsContainer>
      <ButtonContainer onClick={toggleCartHidden} to="/checkout">
        <CustomButton blackInverted="black-inverted">
          go to checkout
        </CustomButton>
      </ButtonContainer>
    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
