import React from 'react';

const FavoritesBtn = (props) => {
  return (
    <button className='faves-button'
            onClick={() => props.addFavorite(props.joke)}
    >⭐️</button>
  );
}

export default FavoritesBtn;
