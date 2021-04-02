import React from 'react';
import CustomButton from './CustomButton';
import './CartDropdown.scss';

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <div className="cart-item">
          <img
            className="cart-item__img"
            src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            alt="dress"
          />
          <div className="cart-item__content">
            <span>Red Dots Dress</span>
            <span>1 x 80$</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            className="cart-item__img"
            src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            alt="dress"
          />
          <div className="cart-item__content">
            <span>Red Dots Dress</span>
            <span>1 x 80$</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            className="cart-item__img"
            src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            alt="dress"
          />
          <div className="cart-item__content">
            <span>Red Dots Dress</span>
            <span>1 x 80$</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            className="cart-item__img"
            src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            alt="dress"
          />
          <div className="cart-item__content">
            <span>Red Dots Dress</span>
            <span>1 x 80$</span>
          </div>
        </div>
      </div>
      <CustomButton blackInverted="black-inverted">go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
