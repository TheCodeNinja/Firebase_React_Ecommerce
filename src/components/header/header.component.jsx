import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => ( // currentUser comes from redux
  <div className="navbar">
    <Link className="navbar-logo" to='/'>
      <Logo className='logo' />
    </Link>
    <div className="nav">
      <Link className="nav-link" to='/shop'>SHOP</Link>
      <Link className="nav-link" to='/contact'>CONTACT</Link>
      { 
        currentUser 
        ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            LOGOUT
          </div>
        ) : (
          <Link className="nav-link" to='/login'>
            LOGIN
          </Link>
        )
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  // (this component props): (redux state)
  currentUser: state.user.currentUser
});

// connect(): let this component get access to the redux store 
export default connect(mapStateToProps)(Header); 
