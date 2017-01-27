import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect} from 'react-router';
import './button-style';

const NewJokeButton = (props) => {
  return (
    <button className="joke-button"
            onClick={() => props.getNewJokes()}>
            New Joke
            </button>
  )
}


export default NewJokeButton;
