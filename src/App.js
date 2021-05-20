import React, { Component } from 'react';
import HomePage from './pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';
import { auth, storeUserToFirestore } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructuring the props coming from redux
    const { setCurrentUser } = this.props;
    // Adds an observer for changes to the user's sign-in state.
    // Prior to 4.0.0, this triggered the observer when users were signed in, 
    // signed out, or when the user's ID token changed in situations such as 
    // token expiry or password change. After 4.0.0, the observer is only 
    // triggered on sign-in or sign-out.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async fbAuthUser => {
      if (fbAuthUser) {
        const userDocRef = await storeUserToFirestore(fbAuthUser);
        userDocRef.onSnapshot(userDocSnapShot => {
          // set current user
          setCurrentUser({
            id: userDocSnapShot.id,
            ...userDocSnapShot.data()
          });
        });
      } else {
        setCurrentUser(fbAuthUser);
      }
    });
  }

  componentWillUnmount() {
    // unsubscribe the auth observer
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginSignupPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // (this component props): (arrow function for dispatchiing action to reducer)
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
