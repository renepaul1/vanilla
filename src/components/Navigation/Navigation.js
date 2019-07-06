import React from 'react';
//https://stackoverflow.com/questions/48223566/using-anchor-tags-in-react-router-4
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
      <nav className="zone dark-primary-color sticky">
        <ul className="main-nav">
          <li><Link smooth to={'#cover'}><span className="tipsLink">tips</span><span className="fourLink accent-text-color">4</span><span className="townLink accent-text-color">own</span></Link></li>
          <li><Link smooth to={'#attr-href'}>Over</Link></li>
          <li><Link smooth to={'/'}>Our Team</Link></li>
          <li className="push"><Link to={'/login'}>Inloggen</Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;