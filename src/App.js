import React from 'react';
import { Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

// Import pages from src/components
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route path="/about" component={ AboutPage } />
    </Switch>
  );
}

export default App;
