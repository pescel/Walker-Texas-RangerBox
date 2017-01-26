import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles';
import Main from './components/Main/Main';
import Settings from './components/Settings/Settings';
import Jokes from './components/Jokes/Jokes';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Jokes} />
      <Route path='/settings' component={Settings} />
    </Route>
  </Router>
);

render(router, document.querySelector('.main'));
