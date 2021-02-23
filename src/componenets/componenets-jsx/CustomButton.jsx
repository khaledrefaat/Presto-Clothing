import React from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.scss';

function CustomButton({ custom, children, className, ...otherProps }) {
  return (
    <>
      {custom ? (
        <Button
          variant="dark"
          className={`custom-button background-black ${
            className ? className : ''
          }`}>
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
