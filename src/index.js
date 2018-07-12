import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles';
import store from './store/index';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
