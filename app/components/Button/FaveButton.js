import React from 'react';
import './button-style';

const FavoritesBtn = (props) => {
  return (
    <button className={props.className}
            onClick={() => props.addFavorite(props.joke)}
    >★</button>
  );
}

FavoritesBtn.propType = {
  className: React.PropTypes.string,
  addFavorites: React.PropTypes.func
}

export default FavoritesBtn;
