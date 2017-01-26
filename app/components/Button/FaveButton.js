import React from 'react';

const handleFaves = () => {
  console.log("fave alligator");
}

const FavoritesBtn = (props) => {
  return (
    <button className='faves-button' onClick={() => handleFaves() }>Favorites</button>
  );
}

export default FavoritesBtn;
