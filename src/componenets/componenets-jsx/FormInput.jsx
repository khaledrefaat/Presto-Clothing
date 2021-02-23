import React from 'react';
import './FormInput.scss';

function formInput({ onFormChange, label, ...otherProps }) {
  return (
    <>
      {label ? <label className="form-label">{label}</label> : ''}
      <input className="form-input" onChange={onFormChange} {...otherProps} />
    </>
  );
}

export default formInput;
