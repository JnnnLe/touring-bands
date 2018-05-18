import React from 'react';

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div id="header-title">
        <a>Bands in Town</a>
      </div>
      <div id="header-actions">
        <ul id="actions-list">
          <li><a>Home</a></li>
          <li><a>Github</a></li>
        </ul>
      </div>
    </div>
  )
}


export default Header;