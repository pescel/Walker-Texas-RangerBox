import React from 'react';
import './button-style';

const Button = (props) => {
  return(
    <button
      className="settings-button"
      onClick={() => props.handleClick()}>
      Settings
    </button>
  )
}

export default Button;
