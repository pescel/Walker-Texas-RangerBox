import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles';
import Main from './components/Main/Main';
import Settings from './components/Settings/Settings';
import Jokes from './components/Jokes/Jokes';
import Favorites from './components/Favorites/Favorites';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Jokes} />
      <Route path='/settings' component={Settings} />
      <Route path='/favorites' component={Favorites}/>
    </Route>
  </Router>
);

render(router, document.querySelector('.main'));
