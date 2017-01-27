import React from 'react';
import { Link } from 'react-router';
import './header-style';

const Header = (props) => {
  console.log(props);
  let path = ""
  let btn = ""
  if (props.location.pathname === '/settings') {
    btn = "Jokes"
    path = "/jokes"
  } else {
    btn = "Settings"
    path = "/settings"
  }
  return (
    <div className="header-container">
      <Link to={path}>
        <button className="header-button">{btn} </button>
      </Link>
      <h1 className="header">Chuck Norris Joke Machine</h1>
    </div>
  );
}


export default Header;
