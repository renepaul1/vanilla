import React from 'react';
import './Cover.css';
//import townImg from './town.jpeg';

const Cover = () => {
    return (
        <div className="container" id="cover">
          {/* <img className="cover" src={townImg} alt="town" /> 
              <div class="logo"> */}
          
          <header className="logo-header">
              <span className="tipsLogo">tips</span><span className="fourLogo accent-text-color">4</span><span translate="no" className="townLogo accent-text-color notranslate">own</span>
          </header>
        </div>
    )
}

export default Cover;