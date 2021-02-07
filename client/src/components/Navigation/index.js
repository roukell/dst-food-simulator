import React from 'react';
import Logo from '../../images/dst_logo.png';

const Navigation = () => (
  <div className="Navigation">
    <img className="Navigation__logo" alt="Logo" src={Logo}></img>
    <div className="Navigation__contents">
      <p>Recipe</p>
      <p>Chef's special</p>
      <p>About</p>
    </div>
    <button className="Navigation__contact">contact</button>
  </div>
);

export default Navigation;
