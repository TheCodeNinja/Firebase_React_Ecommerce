import React, { Component } from 'react';
import HomePage from './pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import LoginSignupPage from './pages/login-signup/login-signup.component';
import { auth } from './firebase/firebase.utils';

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
    // observe the user change
    // return the unsubscribe function for the observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      // console.log(user);
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