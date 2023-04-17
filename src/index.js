import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Head from './js/head';

const root = ReactDOM.createRoot(document.querySelector('.prss'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const head = ReactDOM.createRoot(document.querySelector('.head'));
head.render(
  <Head />
)