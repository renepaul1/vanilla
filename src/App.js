import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Cover />
  

      <div className="zone blue grid-wrapper">      
        <div className="box zone"><img src="./img/files_2.png" /></div>
        <div className="box zone"><img src="./img/monitor_settings_2.png" /></div>
        <div className="box zone"><img src="./img/server_3.png" /></div>
        <div className="box zone"><img src="./img/data_storage_2_2.png" /></div>
        <div className="box zone"><img src="./img/monitor_coding_2.png" /></div>
        <div className="box zone"><img src="./img/desktop_analytics_2.png" /></div>
        <div id="attr-href" className="box zone"><img src="./img/server_2_2.png" /></div>
        <div className="box zone"><img src="./img/server_safe_2.png" /></div>
      </div>
      <footer className="zone yellow">made by z => m</footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
