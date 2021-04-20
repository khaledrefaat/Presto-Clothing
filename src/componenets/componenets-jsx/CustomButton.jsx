import React from 'react';
import CustomButtonContainer from './CustomButtonStyles';

function CustomButton({ children, checkOut, blackInverted, ...otherProps }) {
  const renderButton = () => {
    if (blackInverted)
      return (
        <CustomButtonContainer blackInverted={true}>
          {children}
        </CustomButtonContainer>
      );
    else if (checkOut)
      return (
        <CustomButtonContainer checkout={true}>
          {children}
        </CustomButtonContainer>
      );
    return <CustomButtonContainer> {children} </CustomButtonContainer>;
  };
  return <>{renderButton()}</>;
}

export default CustomButton;
