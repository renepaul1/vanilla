import React from 'react';
//https://stackoverflow.com/questions/48223566/using-anchor-tags-in-react-router-4
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
      <nav className="sticky dark-primary-color">
        <ul className="main-nav">
          <li className="logoLink"><Link smooth to={'#cover'}><span className="tipsLink">tips</span><span className="fourLink accent-text-color">4</span><span translate="no" className="townLink accent-text-color notranslate">own</span></Link></li>
          <li><Link smooth to={'#headline'}>Over</Link></li>
          <li><Link smooth to={'#contents'}>Voordelen</Link></li>
          <li className="push"><Link to={'/login'}>Inloggen</Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;