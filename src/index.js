import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename =
  process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '.'
    ? process.env.PUBLIC_URL
    : '/zlcsc23';
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

