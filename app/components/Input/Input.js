import React from 'react';
import { Link } from 'react-router';
import NewJokeButton from '../Button/NewJokeButton';
import './input-style';

const Input = (props) => {
  return (
    <div className='input-container'>
      <Link to='/jokes'>
        <NewJokeButton getNewJokes={props.getNewJokes} />
      </Link>
      <input type="number"
             className='number-input'
             value={props.jokeNum}
             onChange={(e) => props.handleChange(e)}>
      </input>
      <Link to='/favorites'>
        <button className="fave-page-button">Favorites</button>
      </Link>
    </div>
  )
}

export default Input;
