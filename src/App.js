import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Homepage />
        <footer className="zone yellow">
          made by aNUbizz
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
