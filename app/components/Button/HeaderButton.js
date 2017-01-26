import React from 'react';

const HeaderButton = (props) => {
  return (
    <button className='header-button'
            onClick={() => props.handleClick()}>
            Settings
    </button>
  )
}

export default HeaderButton;
