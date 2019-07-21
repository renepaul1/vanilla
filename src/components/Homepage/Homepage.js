import React from 'react';
import Cover from './Cover/Cover';
import Headline from './Headline/Headline';
import Contents from './Contents/Contents';
//import './Navigation.css';

const Homepage = () => {
    return (
        <main>
            <Cover />
            <Headline />  
            <Contents />    
        </main>
    )
}

export default Homepage;