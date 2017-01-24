import React from 'react';
import './header-style';

import Button from '../Button/Button'

const Header = () => {
  return (
    <div className="header-container">
    <Button />
      <h1 className="main-header">Chuck Norris Joke Machine</h1>
    </div>
  );
}

export default Header;
