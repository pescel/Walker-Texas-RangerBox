import React from 'react';
import NewJokeButton from '../Button/NewJokeButton';

const Input = (props) => {
  console.log("jjjj");
  return (
    <div className='input-container'>
      <NewJokeButton getNewJokes={props.getNewJokes} />
      <input type="number"
             className='number-input'
             value={props.jokeNum}
             onChange={(e) => props.handleChange(e)}>
      </input>
    </div>
  )
}

export default Input;
