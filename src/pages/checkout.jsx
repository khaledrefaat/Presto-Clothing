import React from 'react';
import './checkout.scss';

function checkout() {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <span>product</span>
        <span>description</span>
        <span>quantity</span>
        <span>price</span>
        <span>remove</span>
      </div>
      <div className="checkout__item">
        <div className="checkout__item--img">
          <img
            src="https://i.ibb.co/bPmVXyP/black-converse.png"
            alt="black-converse"
          />
        </div>
        <div className="checkout__item--description">black converse</div>
        <div className="checkout__item--quantity">
          <span> &#10095; </span>5<span> &#10094; </span>
        </div>
        <div className="checkout__item--price">100</div>
        <div className="checkout__item--remove">&#10006;</div>
      </div>
      <div className="checkout__total">total 1750$</div>
    </div>
  );
}

export default checkout;
