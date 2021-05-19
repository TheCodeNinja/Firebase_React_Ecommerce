import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className="navbar">
    <Link className="navbar-logo" to='/'>
      <div>Logo</div>
    </Link>
    <div className="nav">
      <Link className="nav-link" to='/shop'>SHOP</Link>
      <Link className="nav-link" to='/contact'>CONTACT</Link>
    </div>
  </div>
);

export default Header; 