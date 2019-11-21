import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

// Wrap the app in BrowserRouter to 
// create a single page application

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);