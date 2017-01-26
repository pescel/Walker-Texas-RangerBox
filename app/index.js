import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';
import Settings from './components/Settings/Settings';
import HeaderButton from './components/Button/HeaderButton';
import NewJokeButton from './components/Button/NewJokeButton';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='/settings' component={Settings} />
    </Route>
  </Router>
);

render(router, document.querySelector('.main'));
