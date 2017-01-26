import React from 'react';
import './joke-style';

const Joke = (props) => {
  return(
    <div className='main-joke-container'>
      <p className='main-joke'>{props.mainJoke}</p>
    </div>
  )
}

export default Joke;
