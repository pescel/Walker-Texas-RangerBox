import React from 'react';
import './header-style';
import HeaderButton from '../Button/HeaderButton';

const logStuff = () => {
  console.log('alligator');
}

const Header = () => {
  return (
    <div className="header-container">
      <HeaderButton handleClick={() => logStuff()} />
      <h1 className="header">Chuck Norris Joke Machine</h1>
    </div>
  );
}

export default Header;
