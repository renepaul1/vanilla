import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';
import Headline from './components/Headline/Headline';
import Contents from './components/Contents/Contents';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Cover />
        <Headline />  
        <Contents />    
        <footer className="zone yellow">made by aNUbizz</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
