import React from 'react';
import './Contents.css';
//import townImg from './town.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faWalking } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
    return (
        <div id="contents" className="primary-text-color">      
          <div className="box">
            <FontAwesomeIcon className="fa-icon" size="3x" icon={faClock} />
            <h5>Actueel</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon className="fa-icon" size="3x" icon={faGrinStars} />
            <h5>Wervend</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon className="fa-icon" size="3x" icon={faWalking} />
            <h5>Dichtbij</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
      </div>
    )
}

export default Content;