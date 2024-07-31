import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Create the root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with the Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
