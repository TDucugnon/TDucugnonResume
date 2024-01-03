import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
