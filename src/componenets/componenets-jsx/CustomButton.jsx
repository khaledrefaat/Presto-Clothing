import React from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.scss';

function CustomButton({ type, children, className, ...otherProps }) {
  return (
    <>
      {type ? (
        <Button
          variant="dark"
          className={`custom-button background-black ${
            className ? className : ''
          }`}
          type={type}>
          {children}
        </Button>
      ) : (
        <Button
          className={`custom-button ${className ? className : ''}`}
          {...otherProps}>
          {children}
        </Button>
      )}
    </>
  );
}

export default CustomButton;
