import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './router/Router';
import ApiState from './Context/APIContext.js/ApiStates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiState >
    <Router>
      <App />
    </Router>
  </ApiState>
);


