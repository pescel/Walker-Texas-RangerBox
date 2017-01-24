import React from 'react';

const Button = (props) => {
  return(
    <button
      className="settings-button"
      onClick={() => props.handleClick()}>
      settings-button
    </button>
  )
}

export default Button;
