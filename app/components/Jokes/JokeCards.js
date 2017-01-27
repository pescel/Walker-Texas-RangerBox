import React from 'react';
import FaveButton from '../Button/FaveButton';
import './joke-card-style';


const JokeCards = (props) => {

  return (
    <div className="new-joke-container">
      {props.jokes.map((joke, index) => {
        let isFavorite = props.favorites.includes(joke)
        if (props.name) {
          joke.joke = joke.joke.replace(/Chuck Norris/g, props.name)
        }
        return (
          <div className="joke-card" key={joke.id}>
            <p>{joke.joke}</p>
            <FaveButton addFavorite={props.addFavorite}
                        joke={joke}
                        className={`faves-button ${isFavorite ? 'fave' : ''}`}
            />
          </div>
        )
      })}
    </div>
  )
}

JokeCards.propType = {
  addFavorite:  React.PropTypes.func
}

export default JokeCards;
