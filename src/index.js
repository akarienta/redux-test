import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as ThemeProvider } from 'rebass';

import './styles';
import store from './store/index';
import App from './components/App';

ReactDOM.render(
  <ThemeProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
