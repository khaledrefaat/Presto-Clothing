import React from 'react';
import FormInputContainer from './FormInputStyles';

function formInput({ onFormChange, label, ...otherProps }) {
  return (
    <>
      {label ? <label className="form-label">{label}</label> : ''}
      <FormInputContainer onChange={onFormChange} {...otherProps} />
    </>
  );
}

export default formInput;
