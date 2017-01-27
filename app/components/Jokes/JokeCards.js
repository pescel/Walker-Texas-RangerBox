import React from 'react';
import FaveButton from '../Button/FaveButton';


const JokeCards = (props) => {

  return (
    <div className="new-joke-container">
      {props.jokes.map((joke, index) => {
        return (
          <div className="joke-card" key={joke.id}>
            <p>{joke.joke}</p>
            <FaveButton addFavorite={props.addFavorite}
                        joke={joke}
            />
          </div>
        )
      })}
    </div>
  )
}


export default JokeCards;
