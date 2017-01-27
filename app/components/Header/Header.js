import React from 'react';
import { Link } from 'react-router';
import './header-style';
import HeaderButton from '../Button/HeaderButton';


const logStuff = () => {
  console.log('alligator');
}

const Header = () => {
  return (
    <div className="header-container">
      <Link to='/settings'>
        <HeaderButton handleClick={() => logStuff()} />
      </Link>
      <h1 className="header">Chuck Norris Joke Machine</h1>
    </div>
  );
}

export default Header;
