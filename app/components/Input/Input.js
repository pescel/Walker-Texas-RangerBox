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
      <div className='fave-button-container'>
        <Link to='/favorites'>
          <button className="fave-page-button">Favorites</button>
          </Link>
      </div>
    </div>
  )
}

Input.propTypes = {
  className: React.PropTypes.string,
  jokeNum: React.PropTypes.number,
  handleChange: React.PropTypes.func
}

export default Input;
