import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';
// import HomePage from './components/HomePage';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        {/* <IndexRoute component={HomePage} /> */}

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
