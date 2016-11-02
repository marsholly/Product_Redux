import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import Layout from './components/Layout';
// import HomePage from './components/HomePage';

injectTapEventPlugin();


render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          {/* <IndexRoute component={HomePage} /> */}

        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
