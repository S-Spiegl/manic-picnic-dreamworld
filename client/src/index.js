import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.js';
import './style.css'
import store from './store/store.js'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);