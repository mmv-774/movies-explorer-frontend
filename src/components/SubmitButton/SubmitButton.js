import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ caption, disabled }) => {
  return (
    <button type='submit' disabled={disabled} className={`submit-button ${!disabled && 'animated-button'}`}>
      {caption}
    </button>
  );
};

export default SubmitButton;
