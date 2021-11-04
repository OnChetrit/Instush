import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import './assets/styles/styles.scss';
import RootCmp from './RootCmp';

TimeAgo.addDefaultLocale(en)


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <RootCmp />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);