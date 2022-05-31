import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';

ReactDom.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
