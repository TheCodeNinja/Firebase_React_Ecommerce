import React, { Component } from 'react';
import HomePage from './pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';
import { auth, storeUserToFirestore } from './firebase/firebase.utils';

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
          this.setState({
            currentUser: {
              id: userDocSnapShot.id,
              ...userDocSnapShot.data()
            }
          }, () => {
            // console.log(this.state);
          });
        });
      } else {
        this.setState({ currentUser: fbAuthUser });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;