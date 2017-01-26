import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect} from 'react-router';

const handleJokes = () => {
  console.log('new alligator');
}

const NewJokes = (props) => {
  return (
    <button className="joke-button"></button>
  )
}

export default NewJokes;
