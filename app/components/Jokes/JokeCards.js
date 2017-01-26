import React from 'react';
import FaveButton from '../Button/FaveButton';

favoriteJokes() {
  
}

const JokeCards = (props) => {
  console.log("jokeCards");
  return (
    <div className="new-joke-container">
      {props.jokes.map((joke, index) => {
        return (
          <div className="joke-card" key={joke.id}>
            <p>{joke.joke}</p>
            <FaveButton onClick={() => console.log('jlk')} />
          </div>
        )
      })}
    </div>
  )
}

export default JokeCards;
