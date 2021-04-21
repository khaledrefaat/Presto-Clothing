import React from 'react';
import CustomButtonContainer from './CustomButtonStyles';

function CustomButton({ children, ...otherProps }) {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
}

export default CustomButton;
