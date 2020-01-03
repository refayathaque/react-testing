import React from 'react';
import ClickCounter from './ClickCounter';
import Jotto from './Jotto';
import { Router, Route, NavLink, Redirect } from 'react-router-dom';
import history from './history';

export default () => {
  return (
    <Router history={history}>
      <h1>React Testing</h1>
      <p>
        <NavLink to='/clickCounter'>
          ClickCounter
        </NavLink>
      </p>
      <p>
        <NavLink to='/jotto'>
          Jotto
        </NavLink>
      </p>
      <Redirect from='/' to='/jotto' />
      <Route path='/clickCounter' component={ClickCounter} />
      <Route path='/jotto' component={Jotto} />
    </Router>
  );
}
