import React from 'react';
import './CustomButton.scss';

function CustomButton({
  children,
  className,
  checkOut,
  blackInverted,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${
        blackInverted ? 'custom-button__' + blackInverted : ''
      } ${className ? className : ''} ${
        checkOut ? 'custom-button__' + checkOut : ''
      }`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
